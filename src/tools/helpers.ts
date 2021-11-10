export const omitTypename = (key, value) =>
  key === "__typename" ? undefined : value;
export const filterTypename = (data: any) =>
  JSON.parse(JSON.stringify(data, omitTypename)) as typeof data;
