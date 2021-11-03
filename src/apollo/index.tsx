import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { FC } from "react";

const client = new ApolloClient({
  uri: "https://nameless-brook-310019.eu-central-1.aws.cloud.dgraph.io/graphql",
  cache: new InMemoryCache(),
});

const TestApp = () => {
  const { loading, error, data } = useQuery(MY_QUERY_QUERY);
  if (loading) return <>{"Loading..."}</>;
  if (error) return <>{`Error! ${error.message}`}</>;

  return <div>{JSON.stringify(data)}</div>;
};

const MY_QUERY_QUERY = gql`
  query MyQuery {
    queryTask {
      title
    }
  }
`;

export default (({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
      <TestApp />
    </ApolloProvider>
  );
}) as FC;
