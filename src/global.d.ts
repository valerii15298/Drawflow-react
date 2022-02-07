declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.svg" {
  const value: string;
  export = value;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;

  export = Schema;
}
