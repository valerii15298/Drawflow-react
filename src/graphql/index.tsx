import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  Reference,
} from "@apollo/client";
import { FC } from "react";
import {
  BotFlow,
  Connection,
  MainWindow,
  Query,
  SideWindow,
} from "../generated/apollo";
import { botFlowIdParam } from "./apollo/useData";
import introspectionQueryResultData from "./fragmentTypes";
import { typeDefs } from "./local-schema";
import { TestApp } from "./testApp";
import { typePolicies } from "./typePolicies";
import { wrap } from "./wrap";

export const cache = new InMemoryCache({
  possibleTypes: introspectionQueryResultData.possibleTypes,
  typePolicies,
});

export const wrapById = <T,>(id: string | Reference) => wrap<T>(cache, id);

export const rootQuery = wrapById<Query>("ROOT_QUERY");
export const currentBotFlow = wrapById<BotFlow>(`BotFlow:${botFlowIdParam}`);

// rootQuery.set(() => ({
//   dragTemplate: null,
//   canvasDrag: false,
//
//   botFlowId: 1,
//   sidebarVisible: false,
//   windowConfig: {
//     id: 0,
//     mainId: MainWindow.MainFlow,
//     sideId: SideWindow.None,
//   },
//   drag: false,
//   canvas: null,
//   precanvas: null,
//   newPathDirection: null,
//   mouseBlockDragPos: null,
//   clientCurrentMousePos: null,
//   nodeToCopy: null,
//   portToConnect: null,
// }));

// cache.readField
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
      {/*<TestApp />*/}
    </ApolloProvider>
  );
}) as FC;
