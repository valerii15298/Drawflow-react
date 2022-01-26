import {
  FieldFunctionOptions,
  gql,
  Reference,
  StoreObject,
} from "@apollo/client";
import { ReadFieldOptions } from "@apollo/client/cache";
import { setNestedObjectField } from "../models/GetNestedObjectField";
import { isArray, RecursiveFunc, setFunc } from "../types";
import { cache } from "./index";
import { objToGraphqlSelection } from "./objToGraphqlSelection";

export const proxyTarget = Symbol("proxyTarget");

export const wrap = <T>(
  ctx: FieldFunctionOptions,
  cacheId?: string | Reference
): {
  (): RecursiveFunc<T>;
} & setFunc<T> => {
  // Must provide obj arguments if invoked in merge function(Apollo type policies),
  // since in merge function there is no default current object context
  if (!cacheId) {
    // Trying to read default apollo ids
    cacheId = ctx.readField("__typename") + ":" + ctx.readField("id");
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

      const value = ctx.readField({
        ...options,
        fieldName: propName,
        from: target,
      });
      if (value === undefined) {
        console.log({
          target,
          propName,
        });
      }

      if (typeof value !== "object" || value === null) {
        return value;
      }

      const handleValue = (value: StoreObject | Reference, index?: number) => {
        // Returns id if typePolicy of `value` keyFields are not false and
        // `value` has all keyFields presented, e. g. if value can be referenced via {__ref: 'some id'}
        // if not(value is composed object) returns undefined
        const id = ctx.cache.identify(value);

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
      const __typename = ctx.readField(
        "__typename",
        parent ?? target
      ) as string;

      const id = cache.identify(parent ?? target) as string;

      if (propName) {
        propArr.push(propName);
      }

      let selection = typeof val === "object" ? objToGraphqlSelection(val) : "";
      if (!propArr.length) {
        selection = selection.slice(1, -1);
      }

      const fragment = gql`fragment ${
        "update_" + id.replaceAll(":", "_") + Date.now().toString()
      } on ${__typename} {
          ${propArr.filter((prop) => typeof prop === "string").join(" { ")}
          ${selection}
          ${propArr.length ? " } ".repeat(propArr.length - 1) : ""}
      }`;
      // console.log(fragment.loc?.source.body);

      return ctx.cache.updateFragment(
        {
          id,
          fragment,
        },
        (data) => {
          console.log({
            data,
            value: val,
            propArr,
          });
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

export const unwrap = <T extends Record<string, any>>(
  value: T
): T extends (infer U)[]
  ? U extends object
    ? Reference[] | U[]
    : U[]
  : Reference | T => {
  if (Array.isArray(value)) {
    //@ts-ignore
    return value.map(unwrap);
  }
  if (typeof value === "object") {
    //@ts-ignore
    return value[proxyTarget];
  }
  // and if it is a primitive, e. g. string, number, boolean, etc...
  // then return the same value
  return value;
};
