export const objToGraphqlSelection = (obj: Record<string, any>) => {
  let selection = "{ ";

  for (const key in obj) {
    selection += " " + key;
    if (typeof obj[key] === "object") {
      selection += " " + objToGraphqlSelection(obj[key]);
    }
  }
  return selection + " }";
};
