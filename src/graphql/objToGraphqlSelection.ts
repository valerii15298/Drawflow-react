import { StrictTypedTypePolicies } from "../generated/apollo-helpers";
import { isArray } from "../types";
import { keyFieldsByTypename } from "./typePolicies";

// export interface TypenameShape {
//   __typename: string;
//
//   [p: string]: TypenameShape | string;
// }

export const objToGraphqlSelection = (obj: Record<string, any>) => {
  let selection = "{ ";

  // // TODO For cascade Update/Create
  // if (obj.__typename) {
  //   let keyFields = keyFieldsByTypename(
  //     obj.__typename as keyof StrictTypedTypePolicies
  //   );
  //   if (typeof keyFields === "function") {
  //     keyFields = keyFields();
  //   }
  //   if (isArray(keyFields)) {
  //     selection += " " + keyFields.join(" ") + " ";
  //   }
  // }

  for (const key in obj) {
    selection += " " + key;
    if (typeof obj[key] === "object") {
      selection += " " + objToGraphqlSelection(obj[key]);
    }
  }
  return selection + " }";
};
