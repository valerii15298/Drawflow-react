import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Pos {
    x: Int!
    y: Int!
  }

  extend type FlowNode {
    height: Int!
    width: Int!
    isSub: Boolean!
    pos: Pos!
    head: Int!
    lane: Int!
    positionNumber: Int!
    visible: Boolean!
  }

  extend type Port {
    pos: Pos!
  }

  extend type Query {
    isLoggedIn: Boolean!
    connCurva(id: Int!): String!
  }
`;
