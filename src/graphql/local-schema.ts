import { gql } from "@apollo/client";

// import generatedSchema from "./schema.graphql";

export const typeDefs = gql`
  type Pos {
    x: Float!
    y: Float!
  }

  type FlowLine {
    flowLineNodes: [FlowNode!]!
    hasSubnodes: FlowNode
  }

  extend type FlowNode {
    height: Float!
    width: Float!
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
    parent: FlowNode
    subnodes: [FlowNode!]!
    children(portIndex: Int!): [FlowNode!]!
    firstSubnode: FlowNode
    parentConnection: Connection
    allSuccessors: [FlowNode!]!
    outConnections: [Connection!]!
    out1: [FlowNode!]!
    prevDirectNodes: [FlowNode!]!

    subnodesWidth: Float!
    complexParentNode: FlowNode
    flowLine: FlowLine

    totalWidth: Float!
    childrenTotalWidth: Float!
    leftWidth: Float!
    rightWidth: Float!
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

  enum mainWindow {
    mainFlow
    codeEditor
    templateNodeSettings
    nodeSettings
  }
  enum sideWindow {
    groupSettings
    flowSettings
    none
  }

  enum LocalStorageKey {
    backgroundOpacity
    backgroundBlur
    backgroundImageUrl
  }

  type windowConfig {
    id: Int!
    mainId: mainWindow!
    sideId: sideWindow!
    #    background: background!
  }

  extend type Query {
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

    botFlowId: Int!
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
    heads: [FlowNode!]!
  }

  extend type BotFlow {
    version: Int
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
