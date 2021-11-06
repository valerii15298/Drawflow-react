import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { FC } from "react";

const client = new ApolloClient({
  uri: "https://drawflow.ml:8090/graphql",
  cache: new InMemoryCache(),
});

const TestApp = () => {
  // const { loading, error, data } = useQuery(queryTasks);
  // if (loading) return <>{"Loading..."}</>;
  // if (error) return <>{`Error! ${error.message}`}</>;
  // return <div>{JSON.stringify(data)}</div>;
  return null;
};

export default (({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
      <TestApp />
    </ApolloProvider>
  );
}) as FC;
