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
