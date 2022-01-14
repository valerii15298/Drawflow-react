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
import { Connection, useBotFlowQuery } from "../generated/apollo";
import { TypedTypePolicies } from "../generated/apollo-helpers";
import { useFragment } from "./apollo/useFragment";
import introspectionQueryResultData from "./fragmentTypes";
import { typeDefs } from "./local-schema";

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
    options: ReadFieldOptions & { fieldName: K }
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

const typePolicies: TypedTypePolicies = {
  Query: {
    fields: {
      isLoggedIn: {
        read(_, ctx) {
          // const isLoggedIn = readField<Query, "isLoggedIn">(ctx, {
          //   fieldName: "isLoggedIn",
          // });
          return false;
        },
      },
      connCurva: {
        read(_, ctx) {
          const connId = ctx.args.id;
          const conn = ctx.cache.readFragment({
            id: `Connection:${connId}`,
            fragment: gql`
              fragment s on Connection {
                toPort {
                  id
                }
                fromPort {
                  id
                }
              }
            `,
          });
          // console.log({ conn });
          console.log("connCurvaResolver executed!");
          return { conn };
        },
      },
    },
  },
  Connection: {
    fields: {
      curvature: {
        read(_, ctx) {
          const toPos = readField<Connection, "toPort">(ctx, "toPort").pos;
          const fromPos = readField<Connection, "fromPort">(
            ctx,
            "fromPort"
          ).pos;
          return `${fromPos} - ${toPos}`;
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
          // console.log(`Read pos on Node!!!!!!`);
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

const fragment = gql`
  fragment test on Connection {
    id
    __typename
    toPort {
      id
    }
    fromPort {
      id
    }
  }
`;

console.log(
  cache.writeFragment({
    id: `Connection:1`,
    fragment: gql`
      fragment test on Connection {
        id
        __typename
        toPort {
          id
        }
        fromPort {
          id
        }
      }
    `,
    data: {
      __typename: "Connection",
      id: 1,
      toPort: {
        id: 1,
      },
      fromPort: {
        id: 2,
      },
    },
  })
);

const TestApp = () => {
  const {
    error,
    loading,
    data: d,
  } = useQuery(gql`
    query ExampleQuery {
      connCurva(id: 1)
    }
  `);

  const y = useFragment({
    id: `Connection:1`,
    fragment,
  });
  console.log({ y });

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...{loading}</div>;

  return (
    <div>
      <pre>{JSON.stringify(d, null, 2)}</pre>
      <button
        onClick={() => {
          cache.updateFragment(
            {
              id: `Connection:1`,
              fragment: gql`
                fragment conn on Connection {
                  toPort {
                    id
                  }
                  fromPort {
                    id
                  }
                }
              `,
            },
            (prev) => {
              return {
                ...prev,
                toPort: {
                  ...prev.toPort,
                  id: Math.floor(Math.random() * 100),
                },
              };
            }
          );
        }}
      >
        Update connection
      </button>
    </div>
  );
};

export default (({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
      <TestApp />
    </ApolloProvider>
  );
}) as FC;
