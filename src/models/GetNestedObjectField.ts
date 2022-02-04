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
  if (obj === null && props.length) {
    obj = {};
    let tmpObj = obj;
    props.forEach((propName) => {
      tmpObj[propName] = {};
      tmpObj = tmpObj[propName];
    });
  }
  obj = JSON.parse(JSON.stringify(obj)) as typeof obj;
  const result = obj;
  if (props.length === 0) {
    lodash.merge(obj, value);
    return result;
  }
  // since props.length is greater than zero we can use non-null assertion
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
    // console.warn("Incompatible types!!");
  }
  obj[lastProp] = value;
  return result;
};

let y: any;
