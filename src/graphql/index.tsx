import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
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
