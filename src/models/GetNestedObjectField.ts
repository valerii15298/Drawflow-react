import lodash from "lodash";

export const getNestedObjectField = (
  obj: Record<string, any>,
  props: (string | number)[]
) => {
  for (const propName of props) {
    if (!(propName in obj)) {
      return undefined;
    }
    obj = obj[propName];
  }
  return obj;
};

/*
 * Returns new object where field by path `props.join('.')` is set to `value`
 * */
export const setNestedObjectField = (
  obj: Record<string, any>,
  props: (string | number)[],
  value: any
) => {
  obj = JSON.parse(JSON.stringify(obj)) as typeof obj;
  const result = obj;
  if (props.length === 0) {
    lodash.merge(obj, value);
    return result;
  }
  // since props.length is greater than zero we can use non-null assertion
  const lastProp = props.at(-1)!;
  const exceptLastProps = props.slice(0, -1);
  for (const propName of exceptLastProps) {
    if (!(propName in obj)) {
      throw new TypeError(`cannot access property ${propName} on ${obj}`);
    }
    obj = obj[propName];
  }
  if (!(lastProp in obj)) {
    throw new TypeError(`cannot access property ${lastProp} on ${obj}`);
  }
  if (typeof obj[lastProp] !== typeof value) {
    throw new TypeError("Incompatible types!!");
  }
  obj[lastProp] = value;
  return result;
};

let y: any;
