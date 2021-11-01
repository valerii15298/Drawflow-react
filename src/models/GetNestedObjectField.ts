export const getNestedObjectField = (
  obj: Record<string, any>,
  props: string[]
) => {
  for (const propName of props) {
    if (!(propName in obj)) {
      return undefined;
    }
    obj = obj[propName];
  }
  return obj;
};
