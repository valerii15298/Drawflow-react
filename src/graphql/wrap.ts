import {
  FieldFunctionOptions,
  gql,
  InMemoryCache,
  Reference,
  StoreObject,
} from "@apollo/client";
import { ReadFieldOptions } from "@apollo/client/cache";
import { ReadFieldFunction } from "@apollo/client/cache/core/types/common";
import { setNestedObjectField } from "../models/GetNestedObjectField";
import { isArray, RecursiveFunc, setFunc } from "../types";
import { cache } from "./index";
import { objToGraphqlSelection } from "./objToGraphqlSelection";

export const proxyTarget = Symbol("proxyTarget");

export const wrap = <T>(
  ctxOrCache: FieldFunctionOptions | InMemoryCache,
  cacheId?: string | Reference
): {
  (): RecursiveFunc<T>;
} & setFunc<T> => {
  let readField: ReadFieldFunction;
  const cache = "readField" in ctxOrCache ? ctxOrCache.cache : ctxOrCache;
  if ("readField" in ctxOrCache) {
    readField = ctxOrCache.readField;
  } else {
    ctxOrCache.modify({
      id: "ROOT_QUERY",
      fields: {
        // Picking __typename since it's a field that's always there:
        __typename(name, ctx) {
          console.log({ name });
          readField = ctx.readField;
          // Do something with readField (for example, store it elsewhere)...
          return name; // Don't change the __typename!
        },
      },
    });
  }
  // @ts-ignore
  readField = readField as ReadFieldFunction;
  // Must provide obj arguments if invoked in merge function(Apollo type policies),
  // since in merge function there is no default current object context
  if (!cacheId) {
    // Trying to read default apollo ids
    cacheId = readField("__typename") + ":" + readField("id");
  }
  if (!cacheId) {
    throw new TypeError(`Cannot access object with id: ${cacheId}`);
  }

  const ref: Reference =
    typeof cacheId === "string" ? { __ref: cacheId } : cacheId;
  // console.log({ ref });

  const wrapValue = (
    // target cannot be array
    {
      target,
      propArr = [],
      parent,
      propName,
    }: {
      target: Reference | StoreObject;
      parent?: Reference;
      propArr?: Array<string | number>;
      propName?: string;
    }
  ) => {
    const func = (
      options: Omit<ReadFieldOptions, "fieldName" | "from"> = {}
    ) => {
      const createProxy = (
        t: Record<string, any>,
        rest: { parent?: typeof parent; propArr?: typeof propArr } = {}
      ) =>
        new Proxy(JSON.parse(JSON.stringify(t)), {
          get(t, prop): any {
            if (typeof prop === "symbol") {
              if (prop === Symbol.toPrimitive) {
                return () => JSON.stringify(t);
              }
              if (prop === proxyTarget) {
                return t;
              }
              throw new TypeError(`Invalid type ${prop.toString()}`);
            }

            return wrapValue({
              propName: prop,
              target: t,
              ...rest,
            });
          },
        });

      if (!propName) {
        return createProxy(target, {
          parent,
          propArr,
        });
      }

      const value = readField({
        ...options,
        fieldName: propName,
        from: target,
      });
      // if (value === undefined) {
      //   console.log({
      //     target,
      //     propName,
      //     parent,
      //     value,
      //   });
      // }

      if (typeof value !== "object" || value === null) {
        return value;
      }

      const handleValue = (value: StoreObject | Reference, index?: number) => {
        if (typeof value !== "object" || value === null) {
          !value &&
            console.log({
              target,
              propName,
              parent,
              value,
            });
          return value;
        }
        // Returns id if typePolicy of `value` keyFields are not false and
        // `value` has all keyFields presented, e. g. if value can be referenced via {__ref: 'some id'}
        // if not(value is composed object) returns undefined
        const id = cache.identify(value);

        // if value is valid object(referencable object in apollo cache)
        // then pass to our initial function
        if (id) {
          return createProxy(value);
        }

        // if composed object
        return createProxy(value, {
          parent: parent ?? (target as Reference),
          propArr:
            typeof index === "number"
              ? [...propArr, propName, index]
              : [...propArr, propName],
        });
      };

      return isArray(value)
        ? //@ts-ignore
          value.map((v) => handleValue(v))
        : handleValue(value);
    };
    const handleSetValue = (val: any) => {
      const __typename = readField("__typename", parent ?? target) as string;

      const id = cache.identify(parent ?? target) as string;

      if (propName) {
        propArr.push(propName);
      }

      let selection = typeof val === "object" ? objToGraphqlSelection(val) : "";
      if (!propArr.length) {
        selection = selection.slice(1, -1);
      }

      const fragment = gql`fragment ${
        "update_" +
        id.replaceAll(":", "_") +
        Date.now().toString() +
        Math.random().toString().replaceAll(".", "_")
      } on ${__typename} {
          ${propArr.filter((prop) => typeof prop === "string").join(" { ")}
          ${selection}
          ${propArr.length ? " } ".repeat(propArr.length - 1) : ""}
      }`;
      console.log(fragment.loc?.source.body);

      return cache.updateFragment(
        {
          id,
          fragment,
        },
        (data) => {
          // console.log({
          //   data,
          //   value: val,
          //   propArr,
          // });
          return setNestedObjectField(data, propArr, val);
        }
      );
    };

    func.set = (setFunc: any) => {
      const values = setFunc(func);
      handleSetValue(values);
    };
    return func;
  };

  return wrapValue({ target: ref });
};

export const unwrap = (value: any): Reference[] | any => {
  if (Array.isArray(value)) {
    //@ts-ignore
    return value.map(unwrap);
  }
  if (value === null) {
    return value;
  }
  if (typeof value === "object") {
    const target = value[proxyTarget];
    if (
      typeof target !== "object" ||
      target === null ||
      typeof target === "function"
    ) {
      throw new TypeError(`Cannot unwrap object ${value}`);
    }
    return target;
  }
  // and if it is a primitive, e. g. string, number, boolean, etc...
  // then return the same value
  return value;
};
