import {
  ApolloClient,
  ApolloProvider,
  FieldFunctionOptions,
  gql,
  InMemoryCache,
  Reference,
  StoreObject,
  useQuery,
} from "@apollo/client";
import { ReadFieldOptions } from "@apollo/client/cache";
import { FC, useEffect } from "react";
import { useBotFlowQuery } from "../generated/apollo";
import { StrictTypedTypePolicies } from "../generated/apollo-helpers";
import introspectionQueryResultData from "./fragmentTypes";
import { typeDefs } from "./local-schema";
import localSchema from "./local-schema.graphql";

type DeepReference<X> = X extends Record<string, any>
  ? X extends { id: string }
    ? Reference
    : {
        [K in keyof X]: DeepReference<X[K]>;
      }
  : X extends Array<{ id: string }>
  ? Array<Reference>
  : X;

export interface ReadFieldFunction {
  <T, K extends keyof T = keyof T>(
    context: FieldFunctionOptions,
    options: ReadFieldOptions
  ): DeepReference<T[K]>;

  <T, K extends keyof T = keyof T>(
    context: FieldFunctionOptions,
    fieldName: K,
    from?: Reference | StoreObject | undefined
  ): DeepReference<T[K]>;
}

export const readField: ReadFieldFunction = (...args) => {
  const [context, ...restArgs] = args;
  return context.readField(...restArgs);
};

const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      isLoggedIn: {
        read() {
          return false;
        },
      },
    },
  },
  Pos: {
    fields: {
      x: {
        read(v = 202) {
          console.log(`Read pos X!!!!!!`);
          return v;
        },
      },
      y: {
        read(v = 202) {
          console.log(`Read pos Y!!!!!!`);
          return v;
        },
      },
    },
  },
  FlowNode: {
    fields: {
      pos: {
        read(
          v = {
            x: 200,
            y: 200,
          },
          { cache, field }
        ) {
          // cache.writeFragment({id: })
          console.log(`Read pos on Node!!!!!!`);
          return v;
        },
      },
    },
  },
};

export const cache = new InMemoryCache({
  possibleTypes: introspectionQueryResultData.possibleTypes,
  typePolicies,
});

export const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache,
  typeDefs: [typeDefs],
});

setInterval(() => {
  console.log(cache.extract());
}, 3000);

// apolloClient.writeQuery({
//   query: gql`
//     query WriteTestField {
//       testField
//     }
//   `,
//   data: {
//     // Contains the data to write
//     testField: "Hello, tttttt",
//   },
// });

// apolloClient.writeQuery({
//   query: gql`
//     query WriteTestField {
//       readTeacher {
//         id
//         name
//       }
//     }
//   `,
//   data: {
//     // Contains the data to write
//     testField: "Hello, tttttt",
//     readTeacher: {
//       id: 1,
//       name: "some trrr",
//     },
//   },
// });

const TestApp = () => {
  const { data: d } = useQuery(gql`
    query ExampleQuery {
      isLoggedIn @client
    }
  `);
  console.log({ d });
  const { error, loading, data } = useBotFlowQuery({
    variables: { where: { id: 1 } },
  });

  const connections = {};
  const nodes = {};
  const ports = {};

  useEffect(() => {
    return;
  }, []);
  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...{loading}</div>;
  console.log({ data });
  const v = data.botFlow.versions[0];
  v.nodes.forEach((node) => {
    node.ports.forEach((port) => {
      ports[port.id] = port;
    });
    console.log({ pp: node.pos });
  });
  v.connections.forEach((c) => {
    connections[c.id] = c;
  });

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default (({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
      <TestApp />
    </ApolloProvider>
  );
}) as FC;
