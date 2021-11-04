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

const MY_QUERY_QUERY = gql`
  query MyQuery {
    queryTask {
      title
    }
  }
`;
const TestApp = () => {
  const { loading, error, data } = useQuery(MY_QUERY_QUERY);
  if (loading) return <>{"Loading..."}</>;
  if (error) return <>{`Error! ${error.message}`}</>;
  return <div>{JSON.stringify(data)}</div>;
};

export default (({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
      <TestApp />
    </ApolloProvider>
  );
}) as FC;
