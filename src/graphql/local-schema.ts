import { gql } from "@apollo/client";

import generatedSchema from "./schema.graphql";

export const typeDefs = gql`
  type Pos {
    x: Float!
    y: Float!
  }

  extend type FlowNode {
    height: Int!
    width: Int!
    pos: Pos!
    head: Int!
    lane: Int!
    positionNumber: Int!
    subnodesVisible: Boolean!
    childrenVisible: Boolean!

    ###     derived
    selected: Boolean!
    isSub: Boolean!
    visible: Int!
    prevNode: FlowNode
    subnodes: [FlowNode!]!
    children(portIndex: Int!): [FlowNode!]!
    firstSubnode: FlowNode
  }

  extend type Port {
    pos: Pos!
    selected: Boolean!
    isActive: Boolean!
  }

  type canvasShape {
    x: Float!
    y: Float!
    width: Float!
    height: Float!
  }

  type background {
    opacity: Int!
    blur: Int!
    imageUrl: String!
  }

  type windowConfig {
    id: Int!
  }

  extend type Query {
    version: Int!
    dragTemplate: Int
    canvas: canvasShape
    precanvas: canvasShape
    sidebarVisible: Boolean!
    windowConfig: windowConfig!

    drag: Boolean!
    canvasDrag: Boolean!
    newPathDirection: Pos
    mouseBlockDragPos: Pos
    clientCurrentMousePos: Pos
    nodeToCopy: FlowNode
    portToConnect: Port
  }

  type Zoom {
    value: Int!
    max: Int!
    min: Int!
    tick: Int!
  }

  union SelectEntity = Connection | Port | FlowNode

  extend type BotFlowVersion {
    canvasTranslate: Pos!
    zoom: Zoom!
    select: SelectEntity
  }

  extend type Connection {
    visible: Boolean!
    curvature: String!
    selected: Boolean!
  }
`;

// console.log({
//   typeDefs,
//   generatedSchema,
// });
