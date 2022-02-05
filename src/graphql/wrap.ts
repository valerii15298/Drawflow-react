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
import { isArray, RecursiveFunc, setFunc, wrapObj } from "../types";
import { cache, data } from "./index";
import { objToGraphqlSelection } from "./objToGraphqlSelection";

export const proxyTarget = Symbol("proxyTarget");

const rootQueryKey = "key_" + Math.random().toString().replaceAll(".", "_");

export const wrap = <T>(
  ctxOrCache: FieldFunctionOptions | InMemoryCache,
  cacheId?: string | Reference
): wrapObj<T, false> => {
  // Must provide obj arguments if invoked in merge function(Apollo type policies),
  // since in merge function there is no default current object context

  let readField: ReadFieldFunction;
  const cache = "readField" in ctxOrCache ? ctxOrCache.cache : ctxOrCache;
  if ("readField" in ctxOrCache) {
    readField = ctxOrCache.readField;
  } else {
    // writing to cache to be sure that
    // "ROOT_QUERY" will exist and we will be able to extract
    // readField function
    cache.writeFragment({
      id: "ROOT_QUERY",
      fragment: gql`
          fragment qwn on Query {
              ${rootQueryKey}
          }
      `,
      data: {
        [rootQueryKey]: true,
      },
    });

    // extracting readField function
    ctxOrCache.modify({
      id: "ROOT_QUERY",
      fields: {
        [rootQueryKey](_, ctx) {
          readField = ctx.readField;
          return _;
        },
      },
    });
  }
  // @ts-ignore
  readField = readField as ReadFieldFunction;
  if (!readField) {
    throw new Error("Cannot extract readField");
  }
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

      // for case of array primitives
      if (typeof target !== "object" || target === null) {
        if (propName !== undefined) {
          throw new TypeError("propName must be `undefined` in this case");
        }
        return target;
      }

      if (!propName) {
        return createProxy(target, {
          parent,
          propArr: [...propArr],
        });
      }

      const value = readField({
        ...options,
        fieldName: propName,
        from: target,
      });

      const handleValue = (value: any, index?: number) => {
        if (typeof value !== "object" || value === null) {
          (value === undefined ||
            (typeof index === "number" && value === null)) &&
            console.log({
              target,
              propName,
              parent,
              value,
            });

          // for case of array primitives
          if (typeof index === "number") {
            return wrapValue({
              target: value,
              parent: parent ?? (target as Reference),
              propArr: [...propArr, propName, index],
            });
          }

          return value;
        }

        // Returns id if typePolicy of `value` keyFields are not false and
        // `value` has all keyFields presented, e. g. if value can be referenced via {__ref: 'some id'}
        // if not(value is composed object) returns undefined
        const id = cache.identify(value);

        // if value is valid object(referencable object in apollo cache)
        // then pass to our initial function
        if (id) {
          if (typeof index === "number") {
            // console.log("access via array ref object");
            return wrapValue({ target: value });
          }
          return createProxy(value);
        }

        // if composed object
        if (typeof index === "number") {
          console.log("Composed object inside array");
          return wrapValue({
            target: value,
            parent: parent ?? (target as Reference),
            propArr: [...propArr, propName, index],
          });
        }

        return createProxy(value, {
          parent: parent ?? (target as Reference),
          propArr: [...propArr, propName],
        });
      };

      return isArray(value)
        ? value.map((v, index) => handleValue(v, index))
        : handleValue(value);
    };
    const handleSetValue = (val: any) => {
      const __typename = readField("__typename", parent ?? target) as string;

      const id = cache.identify(parent ?? target) as string;

      if (propName) {
        propArr.push(propName);
      }

      const stringPropArr = propArr.filter(
        (prop) => typeof prop === "string"
      ) as string[];

      let selection = typeof val === "object" ? objToGraphqlSelection(val) : "";

      // if (!propArr.length) { // maybe this one ??
      if (!stringPropArr.length) {
        selection = selection.slice(1, -1);
      }

      const graphqlTextFragment = `fragment ${
        "update_" +
        id.replaceAll(":", "_") +
        Date.now().toString() +
        Math.random().toString().replaceAll(".", "_")
      } on ${__typename} {
          ${stringPropArr.join(" { ")}
          ${selection}
          ${stringPropArr.length ? " } ".repeat(stringPropArr.length - 1) : ""}
      }`;
      // console.log({
      //   graphqlTextFragment,
      //   propArr,
      //   selection,
      // });

      const fragment = gql`
        ${graphqlTextFragment}
      `;

      // console.log({
      //   fragment: fragment.loc?.source.body,
      //   id,
      // });

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
          const rezToSet = setNestedObjectField(data, propArr, val);
          // console.log({ rezToSet });
          return rezToSet;
        }
      );
    };

    func.set = (setFunc: any) => {
      const values = setFunc(func);
      const rezOfSet = handleSetValue(values);
      // console.log({ rezOfSet });
      if (!rezOfSet) {
        console.error(`Unsuccessful set operation, info: ${rezOfSet}`);
      }
      return rezOfSet;
    };
    return func;
  };

  return wrapValue({ target: ref });
};

export const unwrap = (value: any): Reference[] | any => {
  if (typeof value === "function" || value instanceof Function) {
    value = value();
  }
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
