import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  NormalizedCache,
  ReadMergeModifyContext,
} from "@apollo/client";
import { EntityStore } from "@apollo/client/cache";
import {
  ReadFieldFunction,
  ReadFieldOptions,
} from "@apollo/client/cache/core/types/common";
import { StoreValue } from "@apollo/client/utilities";
import { FC } from "react";
import introspectionQueryResultData from "./fragmentTypes";
import { typeDefs } from "./local-schema";
import { TestApp } from "./testApp";
import { typePolicies } from "./typePolicies";

export const cache = new InMemoryCache({
  possibleTypes: introspectionQueryResultData.possibleTypes,
  typePolicies,
});

//@ts-ignore
export const { data } = cache;

export const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache,
  typeDefs: [typeDefs],
});

export default (({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
      <TestApp />
    </ApolloProvider>
  );
}) as FC;
