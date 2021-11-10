import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC } from "react";
import introspectionQueryResultData from "./fragmentTypes";

export const cache = new InMemoryCache({
  possibleTypes: introspectionQueryResultData.possibleTypes,
  // addTypename: false,
});

export const apolloClient = new ApolloClient({
  uri: "https://drawflow.ml:8090/graphql",
  cache,
});

// const TestApp = () => {
// const { error, loading, data } = useTemplateNodes();
// if (error) return <div>Error: {error}</div>;
// if (loading) return <div>Loading...{loading}</div>;
// return null;
// };

export default (({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}) as FC;
