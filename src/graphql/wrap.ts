import {
  FieldFunctionOptions,
  gql,
  Reference,
  StoreObject,
} from "@apollo/client";
import { ReadFieldOptions } from "@apollo/client/cache";
import lodash from "lodash";
import { getNestedObjectField } from "../models/GetNestedObjectField";
import { isArray, RecursiveFunc } from "../types";
import { cache } from "./index";
import { objToGraphqlSelection } from "./objToGraphqlSelection";

export const wrap = <T>(
  ctx: FieldFunctionOptions,
  obj?: { id: any; __typename: string }
): {
  (): RecursiveFunc<T>;
  set: (arg: T) => void;
} => {
  // Must provide obj arguments if invoked in merge function(Apollo type policies),
  // since in merge function there is no default current object context

  // TODO change hardcoded string literal to dynamic id(in case if keyFields will be different)
  // e. g. find id of current object in typePolicies
  const ref = {
    __ref: obj
      ? ctx.cache.identify(obj)
      : `${ctx.readField("__typename")}:${ctx.readField("id")}`,
  };

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
      if (!propName) {
        return new Proxy(target, {
          get(target, propName, receiver): any {
            if (typeof propName === "symbol") {
              // console.log({ propName });
              if (propName === Symbol.toPrimitive) {
                return () => JSON.stringify(target);
              }
              throw new TypeError(`Invalid type ${propName.toString()}`);
            }

            return wrapValue({
              propName,
              target,
              parent,
              propArr,
            });
          },
        });
      }
      const value = ctx.readField({
        ...options,
        fieldName: propName,
        from: target,
      });

      if (typeof value !== "object") {
        return value;
      }

      const handleValue = (value, index?: number) => {
        // Returns id if typePolicy of `value` keyFields are not false and
        // `value` has all keyFields presented, e. g. if value can be referenced via {__ref: 'some id'}
        // if not(value is composed object) returns undefined
        const id = ctx.cache.identify(value);

        // if value is valid object(referencable object in apollo cache)
        // then pass to our initial function
        if (id) {
          return wrapValue({
            target: value,
          });
        }

        // if composed object
        return wrapValue({
          target: value,
          parent: parent ?? (target as Reference),
          propArr:
            typeof index === "number"
              ? [...propArr, propName, index]
              : [...propArr, propName],
        });
      };

      return isArray(value) ? value.map(handleValue) : handleValue(value);
    };
    func.target = target;
    func.set = (value) => {
      if (propName) {
        propArr.push(propName);
      }
      const currentValue = propName ? ctx.readField(propName, target) : target;
      if (typeof currentValue !== "object") {
        return;
      }
      const __typename = ctx.readField(
        "__typename",
        parent ?? target
      ) as string;

      const getNested = (
        obj: Record<string, any>,
        props: (string | number)[]
      ) => {
        for (const propName of props) {
          // if number then it is array so access item directly,
          // otherwise it is property name on object so read it with readField
          obj =
            typeof propName === "number"
              ? obj[propName]
              : ctx.readField(propName, obj);
          // TODO handle possibility if readField will require additional arguments
          // to correctly read field: ????

          // In this case we just need to know `__typename`s of value shape.
          // That`s why we are reading the existing values to get the `__typename`s
          // Possible way to handle: parse graphql schema, since we have reference object
          // and typename we can find needed `__typenames`

          // TODO parse graphql schema, find `__typename`s

          if (!obj) {
            throw new TypeError(
              `Cannot access nest property: ${propName}, of obj`
            );
          }
        }
        return obj;
      };

      const addTypenames = (obj, value) => {
        // obj and value must be the same shape
        // this function can modify value by adding `__typename` field
        const __typename = ctx.readField("__typename", obj) as
          | string
          | undefined;
        if (__typename) {
          value.__typename = __typename;
        }

        // TODO handle array possibility
        for (const key in value) {
          if (typeof value[key] === "object") {
            const newObj = ctx.readField(key, obj);
            if (typeof newObj !== "object") {
              throw new TypeError("Corresponding obj must be typeof object");
            }
            addTypenames(newObj, value[key]);
          }
        }
      };

      addTypenames(parent ? getNested(parent, propArr) : currentValue, value);

      const id = cache.identify(parent ?? currentValue);

      console.log({
        id,
        __typename,
        target,
        parent,
      });

      ctx.cache.updateFragment(
        {
          id,
          fragment: gql`fragment ${
            "update_" + id.replaceAll(":", "_") + Date.now().toString()
          } on ${__typename} {
              ${
                parent
                  ? propArr
                      .filter((prop) => typeof prop === "string")
                      .join(" { ")
                  : ""
              }
            ${objToGraphqlSelection(value)}
              
            ${parent ? " } ".repeat(propArr.length - 1) : ""}
          }`,
        },
        (data) => {
          data = JSON.parse(JSON.stringify(data));
          console.log({
            data,
            propArr,
            info: "before merge",
          });
          const dataToUpdate = getNestedObjectField(data, propArr);
          // dataToUpdate and value must be of the same shape,
          // except that dataToUpdate might have additional ids(keyFields)
          console.log(dataToUpdate, value);
          lodash.merge(dataToUpdate, value);
          return data;
        }
      );
    };
    return func;
  };

  //@ts-ignore
  return wrapValue({ target: ref });
};

export const unwrap = (value: any) => {
  if (Array.isArray(value)) {
    return value.map(unwrap);
  }
  if (typeof value === "object") {
    return value.target;
  }
  // and if it is a primitive, e. g. string, number, boolean, etc...
  // then return the same value
  return value;
};
