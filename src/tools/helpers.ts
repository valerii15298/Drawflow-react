export const omitTypename = (key: string, value: unknown) =>
  key === "__typename" ? undefined : value;

export const filterTypename = (data: any) =>
  JSON.parse(JSON.stringify(data, omitTypename)) as typeof data;

export const waitNumberOfMilliseconds = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
