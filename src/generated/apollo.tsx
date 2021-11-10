import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds
   * after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64ΓÇÉbit numeric nonΓÇÉfractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};

export type AddBotFlowInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  nextVersionNumber: Scalars['Int'];
  versions: Array<BotFlowVersionRef>;
};

export type AddBotFlowPayload = {
  __typename?: 'AddBotFlowPayload';
  botFlow?: Maybe<Array<Maybe<BotFlow>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddBotFlowPayloadBotFlowArgs = {
  filter?: Maybe<BotFlowFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowOrder>;
};

export type AddBotFlowVersionInput = {
  botFlow: BotFlowRef;
  connections: Array<ConnectionRef>;
  nodes: Array<FlowNodeRef>;
  version: Scalars['Int'];
};

export type AddBotFlowVersionPayload = {
  __typename?: 'AddBotFlowVersionPayload';
  botFlowVersion?: Maybe<Array<Maybe<BotFlowVersion>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddBotFlowVersionPayloadBotFlowVersionArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowVersionOrder>;
};

export type AddConnectionInput = {
  flow: BotFlowVersionRef;
  from: PortRef;
  to: PortRef;
};

export type AddConnectionPayload = {
  __typename?: 'AddConnectionPayload';
  connection?: Maybe<Array<Maybe<Connection>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddConnectionPayloadConnectionArgs = {
  filter?: Maybe<ConnectionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddFlowNodeInput = {
  flow: BotFlowVersionRef;
  id: Scalars['Int'];
  info: NodeInfoRef;
  ports: Array<PortRef>;
  pos: PosRef;
  props: NodePropsRef;
  templateNode?: Maybe<TemplateNodeRef>;
};

export type AddFlowNodePayload = {
  __typename?: 'AddFlowNodePayload';
  flowNode?: Maybe<Array<Maybe<FlowNode>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddFlowNodePayloadFlowNodeArgs = {
  filter?: Maybe<FlowNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<FlowNodeOrder>;
};

export type AddNodeAudioPropsInput = {
  src: Scalars['String'];
};

export type AddNodeAudioPropsPayload = {
  __typename?: 'AddNodeAudioPropsPayload';
  nodeAudioProps?: Maybe<Array<Maybe<NodeAudioProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeAudioPropsPayloadNodeAudioPropsArgs = {
  filter?: Maybe<NodeAudioPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeAudioPropsOrder>;
};

export type AddNodeCountdownPropsInput = {
  duration: Scalars['Int'];
};

export type AddNodeCountdownPropsPayload = {
  __typename?: 'AddNodeCountdownPropsPayload';
  nodeCountdownProps?: Maybe<Array<Maybe<NodeCountdownProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeCountdownPropsPayloadNodeCountdownPropsArgs = {
  filter?: Maybe<NodeCountdownPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeCountdownPropsOrder>;
};

export type AddNodeFilePropsInput = {
  info: Scalars['String'];
  url: Scalars['String'];
};

export type AddNodeFilePropsPayload = {
  __typename?: 'AddNodeFilePropsPayload';
  nodeFileProps?: Maybe<Array<Maybe<NodeFileProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeFilePropsPayloadNodeFilePropsArgs = {
  filter?: Maybe<NodeFilePropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeFilePropsOrder>;
};

export type AddNodeImagePropsInput = {
  src: Scalars['String'];
};

export type AddNodeImagePropsPayload = {
  __typename?: 'AddNodeImagePropsPayload';
  nodeImageProps?: Maybe<Array<Maybe<NodeImageProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeImagePropsPayloadNodeImagePropsArgs = {
  filter?: Maybe<NodeImagePropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeImagePropsOrder>;
};

export type AddNodeInfoInput = {
  description: Scalars['String'];
  iconLink: Scalars['String'];
  name: Scalars['String'];
  type: ChatNodeType;
};

export type AddNodeInfoPayload = {
  __typename?: 'AddNodeInfoPayload';
  nodeInfo?: Maybe<Array<Maybe<NodeInfo>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeInfoPayloadNodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeInfoOrder>;
};

export type AddNodeLinkPropsInput = {
  src: Scalars['String'];
  text: Scalars['String'];
};

export type AddNodeLinkPropsPayload = {
  __typename?: 'AddNodeLinkPropsPayload';
  nodeLinkProps?: Maybe<Array<Maybe<NodeLinkProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeLinkPropsPayloadNodeLinkPropsArgs = {
  filter?: Maybe<NodeLinkPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeLinkPropsOrder>;
};

export type AddNodeSwitchOptionPropsInput = {
  imageLink: Scalars['String'];
  text: Scalars['String'];
};

export type AddNodeSwitchOptionPropsPayload = {
  __typename?: 'AddNodeSwitchOptionPropsPayload';
  nodeSwitchOptionProps?: Maybe<Array<Maybe<NodeSwitchOptionProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeSwitchOptionPropsPayloadNodeSwitchOptionPropsArgs = {
  filter?: Maybe<NodeSwitchOptionPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeSwitchOptionPropsOrder>;
};

export type AddNodeSwitchPropsInput = {
  displayType: SwitchDisplayType;
};

export type AddNodeSwitchPropsPayload = {
  __typename?: 'AddNodeSwitchPropsPayload';
  nodeSwitchProps?: Maybe<Array<Maybe<NodeSwitchProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeSwitchPropsPayloadNodeSwitchPropsArgs = {
  filter?: Maybe<NodeSwitchPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddNodeTextPropsInput = {
  src: Scalars['String'];
};

export type AddNodeTextPropsPayload = {
  __typename?: 'AddNodeTextPropsPayload';
  nodeTextProps?: Maybe<Array<Maybe<NodeTextProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeTextPropsPayloadNodeTextPropsArgs = {
  filter?: Maybe<NodeTextPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeTextPropsOrder>;
};

export type AddNodeVideoPropsInput = {
  src: Scalars['String'];
};

export type AddNodeVideoPropsPayload = {
  __typename?: 'AddNodeVideoPropsPayload';
  nodeVideoProps?: Maybe<Array<Maybe<NodeVideoProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeVideoPropsPayloadNodeVideoPropsArgs = {
  filter?: Maybe<NodeVideoPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeVideoPropsOrder>;
};

export type AddNodeWaitPropsInput = {
  delay: Scalars['Int'];
  src: Scalars['String'];
};

export type AddNodeWaitPropsPayload = {
  __typename?: 'AddNodeWaitPropsPayload';
  nodeWaitProps?: Maybe<Array<Maybe<NodeWaitProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddNodeWaitPropsPayloadNodeWaitPropsArgs = {
  filter?: Maybe<NodeWaitPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeWaitPropsOrder>;
};

export type AddPortInput = {
  index: Scalars['Int'];
  node: FlowNodeRef;
  pos: PosRef;
};

export type AddPortPayload = {
  __typename?: 'AddPortPayload';
  numUids?: Maybe<Scalars['Int']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type AddPortPayloadPortArgs = {
  filter?: Maybe<PortFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PortOrder>;
};

export type AddPosInput = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type AddPosPayload = {
  __typename?: 'AddPosPayload';
  numUids?: Maybe<Scalars['Int']>;
  pos?: Maybe<Array<Maybe<Pos>>>;
};


export type AddPosPayloadPosArgs = {
  filter?: Maybe<PosFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PosOrder>;
};

export type AddTemplateNodeInput = {
  group: TemplateNodesGroupRef;
  info: NodeInfoRef;
  order: Scalars['Int'];
  props: NodePropsRef;
};

export type AddTemplateNodePayload = {
  __typename?: 'AddTemplateNodePayload';
  numUids?: Maybe<Scalars['Int']>;
  templateNode?: Maybe<Array<Maybe<TemplateNode>>>;
};


export type AddTemplateNodePayloadTemplateNodeArgs = {
  filter?: Maybe<TemplateNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodeOrder>;
};

export type AddTemplateNodesGroupInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  nodes: Array<TemplateNodeRef>;
};

export type AddTemplateNodesGroupPayload = {
  __typename?: 'AddTemplateNodesGroupPayload';
  numUids?: Maybe<Scalars['Int']>;
  templateNodesGroup?: Maybe<Array<Maybe<TemplateNodesGroup>>>;
};


export type AddTemplateNodesGroupPayloadTemplateNodesGroupArgs = {
  filter?: Maybe<TemplateNodesGroupFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodesGroupOrder>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  rule?: Maybe<Scalars['String']>;
};

export type BotFlow = {
  __typename?: 'BotFlow';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nextVersionNumber: Scalars['Int'];
  versions: Array<BotFlowVersion>;
  versionsAggregate?: Maybe<BotFlowVersionAggregateResult>;
};


export type BotFlowVersionsArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowVersionOrder>;
};


export type BotFlowVersionsAggregateArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
};

export type BotFlowAggregateResult = {
  __typename?: 'BotFlowAggregateResult';
  count?: Maybe<Scalars['Int']>;
  descriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
  nextVersionNumberAvg?: Maybe<Scalars['Float']>;
  nextVersionNumberMax?: Maybe<Scalars['Int']>;
  nextVersionNumberMin?: Maybe<Scalars['Int']>;
  nextVersionNumberSum?: Maybe<Scalars['Int']>;
};

export type BotFlowFilter = {
  and?: Maybe<Array<Maybe<BotFlowFilter>>>;
  has?: Maybe<Array<Maybe<BotFlowHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<BotFlowFilter>;
  or?: Maybe<Array<Maybe<BotFlowFilter>>>;
};

export enum BotFlowHasFilter {
  Description = 'description',
  Name = 'name',
  NextVersionNumber = 'nextVersionNumber',
  Versions = 'versions'
}

export type BotFlowOrder = {
  asc?: Maybe<BotFlowOrderable>;
  desc?: Maybe<BotFlowOrderable>;
  then?: Maybe<BotFlowOrder>;
};

export enum BotFlowOrderable {
  Description = 'description',
  Name = 'name',
  NextVersionNumber = 'nextVersionNumber'
}

export type BotFlowPatch = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nextVersionNumber?: Maybe<Scalars['Int']>;
  versions?: Maybe<Array<BotFlowVersionRef>>;
};

export type BotFlowRef = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  nextVersionNumber?: Maybe<Scalars['Int']>;
  versions?: Maybe<Array<BotFlowVersionRef>>;
};

export type BotFlowVersion = {
  __typename?: 'BotFlowVersion';
  botFlow: BotFlow;
  connections: Array<Connection>;
  connectionsAggregate?: Maybe<ConnectionAggregateResult>;
  id: Scalars['ID'];
  nodes: Array<FlowNode>;
  nodesAggregate?: Maybe<FlowNodeAggregateResult>;
  version: Scalars['Int'];
};


export type BotFlowVersionBotFlowArgs = {
  filter?: Maybe<BotFlowFilter>;
};


export type BotFlowVersionConnectionsArgs = {
  filter?: Maybe<ConnectionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type BotFlowVersionConnectionsAggregateArgs = {
  filter?: Maybe<ConnectionFilter>;
};


export type BotFlowVersionNodesArgs = {
  filter?: Maybe<FlowNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<FlowNodeOrder>;
};


export type BotFlowVersionNodesAggregateArgs = {
  filter?: Maybe<FlowNodeFilter>;
};

export type BotFlowVersionAggregateResult = {
  __typename?: 'BotFlowVersionAggregateResult';
  count?: Maybe<Scalars['Int']>;
  versionAvg?: Maybe<Scalars['Float']>;
  versionMax?: Maybe<Scalars['Int']>;
  versionMin?: Maybe<Scalars['Int']>;
  versionSum?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionFilter = {
  and?: Maybe<Array<Maybe<BotFlowVersionFilter>>>;
  has?: Maybe<Array<Maybe<BotFlowVersionHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<BotFlowVersionFilter>;
  or?: Maybe<Array<Maybe<BotFlowVersionFilter>>>;
};

export enum BotFlowVersionHasFilter {
  BotFlow = 'botFlow',
  Connections = 'connections',
  Nodes = 'nodes',
  Version = 'version'
}

export type BotFlowVersionOrder = {
  asc?: Maybe<BotFlowVersionOrderable>;
  desc?: Maybe<BotFlowVersionOrderable>;
  then?: Maybe<BotFlowVersionOrder>;
};

export enum BotFlowVersionOrderable {
  Version = 'version'
}

export type BotFlowVersionPatch = {
  botFlow?: Maybe<BotFlowRef>;
  connections?: Maybe<Array<ConnectionRef>>;
  nodes?: Maybe<Array<FlowNodeRef>>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionRef = {
  botFlow?: Maybe<BotFlowRef>;
  connections?: Maybe<Array<ConnectionRef>>;
  id?: Maybe<Scalars['ID']>;
  nodes?: Maybe<Array<FlowNodeRef>>;
  version?: Maybe<Scalars['Int']>;
};

export enum ChatNodeType {
  Audio = 'Audio',
  Countdown = 'Countdown',
  Delay = 'Delay',
  Empty = 'Empty',
  File = 'File',
  HttpRequest = 'HttpRequest',
  Image = 'Image',
  Link = 'Link',
  SetTypingIndicator = 'SetTypingIndicator',
  Switch = 'Switch',
  SwitchOption = 'SwitchOption',
  Text = 'Text',
  Video = 'Video'
}

export type Connection = {
  __typename?: 'Connection';
  flow: BotFlowVersion;
  from: Port;
  id: Scalars['ID'];
  to: Port;
};


export type ConnectionFlowArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
};


export type ConnectionFromArgs = {
  filter?: Maybe<PortFilter>;
};


export type ConnectionToArgs = {
  filter?: Maybe<PortFilter>;
};

export type ConnectionAggregateResult = {
  __typename?: 'ConnectionAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type ConnectionFilter = {
  and?: Maybe<Array<Maybe<ConnectionFilter>>>;
  has?: Maybe<Array<Maybe<ConnectionHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<ConnectionFilter>;
  or?: Maybe<Array<Maybe<ConnectionFilter>>>;
};

export enum ConnectionHasFilter {
  Flow = 'flow',
  From = 'from',
  To = 'to'
}

export type ConnectionPatch = {
  flow?: Maybe<BotFlowVersionRef>;
  from?: Maybe<PortRef>;
  to?: Maybe<PortRef>;
};

export type ConnectionRef = {
  flow?: Maybe<BotFlowVersionRef>;
  from?: Maybe<PortRef>;
  id?: Maybe<Scalars['ID']>;
  to?: Maybe<PortRef>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type CustomHttp = {
  body?: Maybe<Scalars['String']>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  graphql?: Maybe<Scalars['String']>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: Maybe<Mode>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: Maybe<DateTimeRange>;
  eq?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteBotFlowPayload = {
  __typename?: 'DeleteBotFlowPayload';
  botFlow?: Maybe<Array<Maybe<BotFlow>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteBotFlowPayloadBotFlowArgs = {
  filter?: Maybe<BotFlowFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowOrder>;
};

export type DeleteBotFlowVersionPayload = {
  __typename?: 'DeleteBotFlowVersionPayload';
  botFlowVersion?: Maybe<Array<Maybe<BotFlowVersion>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteBotFlowVersionPayloadBotFlowVersionArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowVersionOrder>;
};

export type DeleteConnectionPayload = {
  __typename?: 'DeleteConnectionPayload';
  connection?: Maybe<Array<Maybe<Connection>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteConnectionPayloadConnectionArgs = {
  filter?: Maybe<ConnectionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteFlowNodePayload = {
  __typename?: 'DeleteFlowNodePayload';
  flowNode?: Maybe<Array<Maybe<FlowNode>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteFlowNodePayloadFlowNodeArgs = {
  filter?: Maybe<FlowNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<FlowNodeOrder>;
};

export type DeleteNodeAudioPropsPayload = {
  __typename?: 'DeleteNodeAudioPropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeAudioProps?: Maybe<Array<Maybe<NodeAudioProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeAudioPropsPayloadNodeAudioPropsArgs = {
  filter?: Maybe<NodeAudioPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeAudioPropsOrder>;
};

export type DeleteNodeCountdownPropsPayload = {
  __typename?: 'DeleteNodeCountdownPropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeCountdownProps?: Maybe<Array<Maybe<NodeCountdownProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeCountdownPropsPayloadNodeCountdownPropsArgs = {
  filter?: Maybe<NodeCountdownPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeCountdownPropsOrder>;
};

export type DeleteNodeFilePropsPayload = {
  __typename?: 'DeleteNodeFilePropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeFileProps?: Maybe<Array<Maybe<NodeFileProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeFilePropsPayloadNodeFilePropsArgs = {
  filter?: Maybe<NodeFilePropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeFilePropsOrder>;
};

export type DeleteNodeImagePropsPayload = {
  __typename?: 'DeleteNodeImagePropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeImageProps?: Maybe<Array<Maybe<NodeImageProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeImagePropsPayloadNodeImagePropsArgs = {
  filter?: Maybe<NodeImagePropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeImagePropsOrder>;
};

export type DeleteNodeInfoPayload = {
  __typename?: 'DeleteNodeInfoPayload';
  msg?: Maybe<Scalars['String']>;
  nodeInfo?: Maybe<Array<Maybe<NodeInfo>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeInfoPayloadNodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeInfoOrder>;
};

export type DeleteNodeLinkPropsPayload = {
  __typename?: 'DeleteNodeLinkPropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeLinkProps?: Maybe<Array<Maybe<NodeLinkProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeLinkPropsPayloadNodeLinkPropsArgs = {
  filter?: Maybe<NodeLinkPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeLinkPropsOrder>;
};

export type DeleteNodePayload = {
  __typename?: 'DeleteNodePayload';
  msg?: Maybe<Scalars['String']>;
  node?: Maybe<Array<Maybe<Node>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodePayloadNodeArgs = {
  filter?: Maybe<NodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteNodeSwitchOptionPropsPayload = {
  __typename?: 'DeleteNodeSwitchOptionPropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeSwitchOptionProps?: Maybe<Array<Maybe<NodeSwitchOptionProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeSwitchOptionPropsPayloadNodeSwitchOptionPropsArgs = {
  filter?: Maybe<NodeSwitchOptionPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeSwitchOptionPropsOrder>;
};

export type DeleteNodeSwitchPropsPayload = {
  __typename?: 'DeleteNodeSwitchPropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeSwitchProps?: Maybe<Array<Maybe<NodeSwitchProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeSwitchPropsPayloadNodeSwitchPropsArgs = {
  filter?: Maybe<NodeSwitchPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteNodeTextPropsPayload = {
  __typename?: 'DeleteNodeTextPropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeTextProps?: Maybe<Array<Maybe<NodeTextProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeTextPropsPayloadNodeTextPropsArgs = {
  filter?: Maybe<NodeTextPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeTextPropsOrder>;
};

export type DeleteNodeVideoPropsPayload = {
  __typename?: 'DeleteNodeVideoPropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeVideoProps?: Maybe<Array<Maybe<NodeVideoProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeVideoPropsPayloadNodeVideoPropsArgs = {
  filter?: Maybe<NodeVideoPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeVideoPropsOrder>;
};

export type DeleteNodeWaitPropsPayload = {
  __typename?: 'DeleteNodeWaitPropsPayload';
  msg?: Maybe<Scalars['String']>;
  nodeWaitProps?: Maybe<Array<Maybe<NodeWaitProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteNodeWaitPropsPayloadNodeWaitPropsArgs = {
  filter?: Maybe<NodeWaitPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeWaitPropsOrder>;
};

export type DeletePortPayload = {
  __typename?: 'DeletePortPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type DeletePortPayloadPortArgs = {
  filter?: Maybe<PortFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PortOrder>;
};

export type DeletePosPayload = {
  __typename?: 'DeletePosPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  pos?: Maybe<Array<Maybe<Pos>>>;
};


export type DeletePosPayloadPosArgs = {
  filter?: Maybe<PosFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PosOrder>;
};

export type DeleteTemplateNodePayload = {
  __typename?: 'DeleteTemplateNodePayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  templateNode?: Maybe<Array<Maybe<TemplateNode>>>;
};


export type DeleteTemplateNodePayloadTemplateNodeArgs = {
  filter?: Maybe<TemplateNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodeOrder>;
};

export type DeleteTemplateNodesGroupPayload = {
  __typename?: 'DeleteTemplateNodesGroupPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  templateNodesGroup?: Maybe<Array<Maybe<TemplateNodesGroup>>>;
};


export type DeleteTemplateNodesGroupPayloadTemplateNodesGroupArgs = {
  filter?: Maybe<TemplateNodesGroupFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodesGroupOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type FloatFilter = {
  between?: Maybe<FloatRange>;
  eq?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type FlowNode = Node & {
  __typename?: 'FlowNode';
  flow: BotFlowVersion;
  id: Scalars['Int'];
  info: NodeInfo;
  ports: Array<Port>;
  portsAggregate?: Maybe<PortAggregateResult>;
  pos: Pos;
  props: NodeProps;
  templateNode?: Maybe<TemplateNode>;
};


export type FlowNodeFlowArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
};


export type FlowNodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
};


export type FlowNodePortsArgs = {
  filter?: Maybe<PortFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PortOrder>;
};


export type FlowNodePortsAggregateArgs = {
  filter?: Maybe<PortFilter>;
};


export type FlowNodePosArgs = {
  filter?: Maybe<PosFilter>;
};


export type FlowNodePropsArgs = {
  filter?: Maybe<NodePropsFilter>;
};


export type FlowNodeTemplateNodeArgs = {
  filter?: Maybe<TemplateNodeFilter>;
};

export type FlowNodeAggregateResult = {
  __typename?: 'FlowNodeAggregateResult';
  count?: Maybe<Scalars['Int']>;
  idAvg?: Maybe<Scalars['Float']>;
  idMax?: Maybe<Scalars['Int']>;
  idMin?: Maybe<Scalars['Int']>;
  idSum?: Maybe<Scalars['Int']>;
};

export type FlowNodeFilter = {
  and?: Maybe<Array<Maybe<FlowNodeFilter>>>;
  has?: Maybe<Array<Maybe<FlowNodeHasFilter>>>;
  id?: Maybe<IntFilter>;
  not?: Maybe<FlowNodeFilter>;
  or?: Maybe<Array<Maybe<FlowNodeFilter>>>;
};

export enum FlowNodeHasFilter {
  Flow = 'flow',
  Id = 'id',
  Info = 'info',
  Ports = 'ports',
  Pos = 'pos',
  Props = 'props',
  TemplateNode = 'templateNode'
}

export type FlowNodeOrder = {
  asc?: Maybe<FlowNodeOrderable>;
  desc?: Maybe<FlowNodeOrderable>;
  then?: Maybe<FlowNodeOrder>;
};

export enum FlowNodeOrderable {
  Id = 'id'
}

export type FlowNodePatch = {
  flow?: Maybe<BotFlowVersionRef>;
  info?: Maybe<NodeInfoRef>;
  ports?: Maybe<Array<PortRef>>;
  pos?: Maybe<PosRef>;
  props?: Maybe<NodePropsRef>;
  templateNode?: Maybe<TemplateNodeRef>;
};

export type FlowNodeRef = {
  flow?: Maybe<BotFlowVersionRef>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<NodeInfoRef>;
  ports?: Maybe<Array<PortRef>>;
  pos?: Maybe<PosRef>;
  props?: Maybe<NodePropsRef>;
  templateNode?: Maybe<TemplateNodeRef>;
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: Maybe<Scalars['Boolean']>;
  get?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: Maybe<Int64Range>;
  eq?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  in?: Maybe<Array<Maybe<Scalars['Int64']>>>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: Maybe<IntRange>;
  eq?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: Maybe<MultiPolygonRef>;
  polygon?: Maybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBotFlow?: Maybe<AddBotFlowPayload>;
  addBotFlowVersion?: Maybe<AddBotFlowVersionPayload>;
  addConnection?: Maybe<AddConnectionPayload>;
  addFlowNode?: Maybe<AddFlowNodePayload>;
  addNodeAudioProps?: Maybe<AddNodeAudioPropsPayload>;
  addNodeCountdownProps?: Maybe<AddNodeCountdownPropsPayload>;
  addNodeFileProps?: Maybe<AddNodeFilePropsPayload>;
  addNodeImageProps?: Maybe<AddNodeImagePropsPayload>;
  addNodeInfo?: Maybe<AddNodeInfoPayload>;
  addNodeLinkProps?: Maybe<AddNodeLinkPropsPayload>;
  addNodeSwitchOptionProps?: Maybe<AddNodeSwitchOptionPropsPayload>;
  addNodeSwitchProps?: Maybe<AddNodeSwitchPropsPayload>;
  addNodeTextProps?: Maybe<AddNodeTextPropsPayload>;
  addNodeVideoProps?: Maybe<AddNodeVideoPropsPayload>;
  addNodeWaitProps?: Maybe<AddNodeWaitPropsPayload>;
  addPort?: Maybe<AddPortPayload>;
  addPos?: Maybe<AddPosPayload>;
  addTemplateNode?: Maybe<AddTemplateNodePayload>;
  addTemplateNodesGroup?: Maybe<AddTemplateNodesGroupPayload>;
  deleteBotFlow?: Maybe<DeleteBotFlowPayload>;
  deleteBotFlowVersion?: Maybe<DeleteBotFlowVersionPayload>;
  deleteConnection?: Maybe<DeleteConnectionPayload>;
  deleteFlowNode?: Maybe<DeleteFlowNodePayload>;
  deleteNode?: Maybe<DeleteNodePayload>;
  deleteNodeAudioProps?: Maybe<DeleteNodeAudioPropsPayload>;
  deleteNodeCountdownProps?: Maybe<DeleteNodeCountdownPropsPayload>;
  deleteNodeFileProps?: Maybe<DeleteNodeFilePropsPayload>;
  deleteNodeImageProps?: Maybe<DeleteNodeImagePropsPayload>;
  deleteNodeInfo?: Maybe<DeleteNodeInfoPayload>;
  deleteNodeLinkProps?: Maybe<DeleteNodeLinkPropsPayload>;
  deleteNodeSwitchOptionProps?: Maybe<DeleteNodeSwitchOptionPropsPayload>;
  deleteNodeSwitchProps?: Maybe<DeleteNodeSwitchPropsPayload>;
  deleteNodeTextProps?: Maybe<DeleteNodeTextPropsPayload>;
  deleteNodeVideoProps?: Maybe<DeleteNodeVideoPropsPayload>;
  deleteNodeWaitProps?: Maybe<DeleteNodeWaitPropsPayload>;
  deletePort?: Maybe<DeletePortPayload>;
  deletePos?: Maybe<DeletePosPayload>;
  deleteTemplateNode?: Maybe<DeleteTemplateNodePayload>;
  deleteTemplateNodesGroup?: Maybe<DeleteTemplateNodesGroupPayload>;
  updateBotFlow?: Maybe<UpdateBotFlowPayload>;
  updateBotFlowVersion?: Maybe<UpdateBotFlowVersionPayload>;
  updateConnection?: Maybe<UpdateConnectionPayload>;
  updateFlowNode?: Maybe<UpdateFlowNodePayload>;
  updateNode?: Maybe<UpdateNodePayload>;
  updateNodeAudioProps?: Maybe<UpdateNodeAudioPropsPayload>;
  updateNodeCountdownProps?: Maybe<UpdateNodeCountdownPropsPayload>;
  updateNodeFileProps?: Maybe<UpdateNodeFilePropsPayload>;
  updateNodeImageProps?: Maybe<UpdateNodeImagePropsPayload>;
  updateNodeInfo?: Maybe<UpdateNodeInfoPayload>;
  updateNodeLinkProps?: Maybe<UpdateNodeLinkPropsPayload>;
  updateNodeSwitchOptionProps?: Maybe<UpdateNodeSwitchOptionPropsPayload>;
  updateNodeSwitchProps?: Maybe<UpdateNodeSwitchPropsPayload>;
  updateNodeTextProps?: Maybe<UpdateNodeTextPropsPayload>;
  updateNodeVideoProps?: Maybe<UpdateNodeVideoPropsPayload>;
  updateNodeWaitProps?: Maybe<UpdateNodeWaitPropsPayload>;
  updatePort?: Maybe<UpdatePortPayload>;
  updatePos?: Maybe<UpdatePosPayload>;
  updateTemplateNode?: Maybe<UpdateTemplateNodePayload>;
  updateTemplateNodesGroup?: Maybe<UpdateTemplateNodesGroupPayload>;
};


export type MutationAddBotFlowArgs = {
  input: Array<AddBotFlowInput>;
};


export type MutationAddBotFlowVersionArgs = {
  input: Array<AddBotFlowVersionInput>;
};


export type MutationAddConnectionArgs = {
  input: Array<AddConnectionInput>;
};


export type MutationAddFlowNodeArgs = {
  input: Array<AddFlowNodeInput>;
  upsert?: Maybe<Scalars['Boolean']>;
};


export type MutationAddNodeAudioPropsArgs = {
  input: Array<AddNodeAudioPropsInput>;
};


export type MutationAddNodeCountdownPropsArgs = {
  input: Array<AddNodeCountdownPropsInput>;
};


export type MutationAddNodeFilePropsArgs = {
  input: Array<AddNodeFilePropsInput>;
};


export type MutationAddNodeImagePropsArgs = {
  input: Array<AddNodeImagePropsInput>;
};


export type MutationAddNodeInfoArgs = {
  input: Array<AddNodeInfoInput>;
};


export type MutationAddNodeLinkPropsArgs = {
  input: Array<AddNodeLinkPropsInput>;
};


export type MutationAddNodeSwitchOptionPropsArgs = {
  input: Array<AddNodeSwitchOptionPropsInput>;
};


export type MutationAddNodeSwitchPropsArgs = {
  input: Array<AddNodeSwitchPropsInput>;
};


export type MutationAddNodeTextPropsArgs = {
  input: Array<AddNodeTextPropsInput>;
};


export type MutationAddNodeVideoPropsArgs = {
  input: Array<AddNodeVideoPropsInput>;
};


export type MutationAddNodeWaitPropsArgs = {
  input: Array<AddNodeWaitPropsInput>;
};


export type MutationAddPortArgs = {
  input: Array<AddPortInput>;
};


export type MutationAddPosArgs = {
  input: Array<AddPosInput>;
};


export type MutationAddTemplateNodeArgs = {
  input: Array<AddTemplateNodeInput>;
};


export type MutationAddTemplateNodesGroupArgs = {
  input: Array<AddTemplateNodesGroupInput>;
};


export type MutationDeleteBotFlowArgs = {
  filter: BotFlowFilter;
};


export type MutationDeleteBotFlowVersionArgs = {
  filter: BotFlowVersionFilter;
};


export type MutationDeleteConnectionArgs = {
  filter: ConnectionFilter;
};


export type MutationDeleteFlowNodeArgs = {
  filter: FlowNodeFilter;
};


export type MutationDeleteNodeArgs = {
  filter: NodeFilter;
};


export type MutationDeleteNodeAudioPropsArgs = {
  filter: NodeAudioPropsFilter;
};


export type MutationDeleteNodeCountdownPropsArgs = {
  filter: NodeCountdownPropsFilter;
};


export type MutationDeleteNodeFilePropsArgs = {
  filter: NodeFilePropsFilter;
};


export type MutationDeleteNodeImagePropsArgs = {
  filter: NodeImagePropsFilter;
};


export type MutationDeleteNodeInfoArgs = {
  filter: NodeInfoFilter;
};


export type MutationDeleteNodeLinkPropsArgs = {
  filter: NodeLinkPropsFilter;
};


export type MutationDeleteNodeSwitchOptionPropsArgs = {
  filter: NodeSwitchOptionPropsFilter;
};


export type MutationDeleteNodeSwitchPropsArgs = {
  filter: NodeSwitchPropsFilter;
};


export type MutationDeleteNodeTextPropsArgs = {
  filter: NodeTextPropsFilter;
};


export type MutationDeleteNodeVideoPropsArgs = {
  filter: NodeVideoPropsFilter;
};


export type MutationDeleteNodeWaitPropsArgs = {
  filter: NodeWaitPropsFilter;
};


export type MutationDeletePortArgs = {
  filter: PortFilter;
};


export type MutationDeletePosArgs = {
  filter: PosFilter;
};


export type MutationDeleteTemplateNodeArgs = {
  filter: TemplateNodeFilter;
};


export type MutationDeleteTemplateNodesGroupArgs = {
  filter: TemplateNodesGroupFilter;
};


export type MutationUpdateBotFlowArgs = {
  input: UpdateBotFlowInput;
};


export type MutationUpdateBotFlowVersionArgs = {
  input: UpdateBotFlowVersionInput;
};


export type MutationUpdateConnectionArgs = {
  input: UpdateConnectionInput;
};


export type MutationUpdateFlowNodeArgs = {
  input: UpdateFlowNodeInput;
};


export type MutationUpdateNodeArgs = {
  input: UpdateNodeInput;
};


export type MutationUpdateNodeAudioPropsArgs = {
  input: UpdateNodeAudioPropsInput;
};


export type MutationUpdateNodeCountdownPropsArgs = {
  input: UpdateNodeCountdownPropsInput;
};


export type MutationUpdateNodeFilePropsArgs = {
  input: UpdateNodeFilePropsInput;
};


export type MutationUpdateNodeImagePropsArgs = {
  input: UpdateNodeImagePropsInput;
};


export type MutationUpdateNodeInfoArgs = {
  input: UpdateNodeInfoInput;
};


export type MutationUpdateNodeLinkPropsArgs = {
  input: UpdateNodeLinkPropsInput;
};


export type MutationUpdateNodeSwitchOptionPropsArgs = {
  input: UpdateNodeSwitchOptionPropsInput;
};


export type MutationUpdateNodeSwitchPropsArgs = {
  input: UpdateNodeSwitchPropsInput;
};


export type MutationUpdateNodeTextPropsArgs = {
  input: UpdateNodeTextPropsInput;
};


export type MutationUpdateNodeVideoPropsArgs = {
  input: UpdateNodeVideoPropsInput;
};


export type MutationUpdateNodeWaitPropsArgs = {
  input: UpdateNodeWaitPropsInput;
};


export type MutationUpdatePortArgs = {
  input: UpdatePortInput;
};


export type MutationUpdatePosArgs = {
  input: UpdatePosInput;
};


export type MutationUpdateTemplateNodeArgs = {
  input: UpdateTemplateNodeInput;
};


export type MutationUpdateTemplateNodesGroupArgs = {
  input: UpdateTemplateNodesGroupInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Node = {
  info: NodeInfo;
  props: NodeProps;
};


export type NodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
};


export type NodePropsArgs = {
  filter?: Maybe<NodePropsFilter>;
};

export type NodeAggregateResult = {
  __typename?: 'NodeAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type NodeAudioProps = {
  __typename?: 'NodeAudioProps';
  id: Scalars['ID'];
  src: Scalars['String'];
};

export type NodeAudioPropsAggregateResult = {
  __typename?: 'NodeAudioPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  srcMax?: Maybe<Scalars['String']>;
  srcMin?: Maybe<Scalars['String']>;
};

export type NodeAudioPropsFilter = {
  and?: Maybe<Array<Maybe<NodeAudioPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeAudioPropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeAudioPropsFilter>;
  or?: Maybe<Array<Maybe<NodeAudioPropsFilter>>>;
};

export enum NodeAudioPropsHasFilter {
  Src = 'src'
}

export type NodeAudioPropsOrder = {
  asc?: Maybe<NodeAudioPropsOrderable>;
  desc?: Maybe<NodeAudioPropsOrderable>;
  then?: Maybe<NodeAudioPropsOrder>;
};

export enum NodeAudioPropsOrderable {
  Src = 'src'
}

export type NodeAudioPropsPatch = {
  src?: Maybe<Scalars['String']>;
};

export type NodeAudioPropsRef = {
  id?: Maybe<Scalars['ID']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeCountdownProps = {
  __typename?: 'NodeCountdownProps';
  duration: Scalars['Int'];
  id: Scalars['ID'];
};

export type NodeCountdownPropsAggregateResult = {
  __typename?: 'NodeCountdownPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  durationAvg?: Maybe<Scalars['Float']>;
  durationMax?: Maybe<Scalars['Int']>;
  durationMin?: Maybe<Scalars['Int']>;
  durationSum?: Maybe<Scalars['Int']>;
};

export type NodeCountdownPropsFilter = {
  and?: Maybe<Array<Maybe<NodeCountdownPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeCountdownPropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeCountdownPropsFilter>;
  or?: Maybe<Array<Maybe<NodeCountdownPropsFilter>>>;
};

export enum NodeCountdownPropsHasFilter {
  Duration = 'duration'
}

export type NodeCountdownPropsOrder = {
  asc?: Maybe<NodeCountdownPropsOrderable>;
  desc?: Maybe<NodeCountdownPropsOrderable>;
  then?: Maybe<NodeCountdownPropsOrder>;
};

export enum NodeCountdownPropsOrderable {
  Duration = 'duration'
}

export type NodeCountdownPropsPatch = {
  duration?: Maybe<Scalars['Int']>;
};

export type NodeCountdownPropsRef = {
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type NodeFileProps = {
  __typename?: 'NodeFileProps';
  id: Scalars['ID'];
  info: Scalars['String'];
  url: Scalars['String'];
};

export type NodeFilePropsAggregateResult = {
  __typename?: 'NodeFilePropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  infoMax?: Maybe<Scalars['String']>;
  infoMin?: Maybe<Scalars['String']>;
  urlMax?: Maybe<Scalars['String']>;
  urlMin?: Maybe<Scalars['String']>;
};

export type NodeFilePropsFilter = {
  and?: Maybe<Array<Maybe<NodeFilePropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeFilePropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeFilePropsFilter>;
  or?: Maybe<Array<Maybe<NodeFilePropsFilter>>>;
};

export enum NodeFilePropsHasFilter {
  Info = 'info',
  Url = 'url'
}

export type NodeFilePropsOrder = {
  asc?: Maybe<NodeFilePropsOrderable>;
  desc?: Maybe<NodeFilePropsOrderable>;
  then?: Maybe<NodeFilePropsOrder>;
};

export enum NodeFilePropsOrderable {
  Info = 'info',
  Url = 'url'
}

export type NodeFilePropsPatch = {
  info?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NodeFilePropsRef = {
  id?: Maybe<Scalars['ID']>;
  info?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NodeFilter = {
  and?: Maybe<Array<Maybe<NodeFilter>>>;
  has?: Maybe<Array<Maybe<NodeHasFilter>>>;
  not?: Maybe<NodeFilter>;
  or?: Maybe<Array<Maybe<NodeFilter>>>;
};

export enum NodeHasFilter {
  Info = 'info',
  Props = 'props'
}

export type NodeImageProps = {
  __typename?: 'NodeImageProps';
  id: Scalars['ID'];
  src: Scalars['String'];
};

export type NodeImagePropsAggregateResult = {
  __typename?: 'NodeImagePropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  srcMax?: Maybe<Scalars['String']>;
  srcMin?: Maybe<Scalars['String']>;
};

export type NodeImagePropsFilter = {
  and?: Maybe<Array<Maybe<NodeImagePropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeImagePropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeImagePropsFilter>;
  or?: Maybe<Array<Maybe<NodeImagePropsFilter>>>;
};

export enum NodeImagePropsHasFilter {
  Src = 'src'
}

export type NodeImagePropsOrder = {
  asc?: Maybe<NodeImagePropsOrderable>;
  desc?: Maybe<NodeImagePropsOrderable>;
  then?: Maybe<NodeImagePropsOrder>;
};

export enum NodeImagePropsOrderable {
  Src = 'src'
}

export type NodeImagePropsPatch = {
  src?: Maybe<Scalars['String']>;
};

export type NodeImagePropsRef = {
  id?: Maybe<Scalars['ID']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeInfo = {
  __typename?: 'NodeInfo';
  description: Scalars['String'];
  iconLink: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  type: ChatNodeType;
};

export type NodeInfoAggregateResult = {
  __typename?: 'NodeInfoAggregateResult';
  count?: Maybe<Scalars['Int']>;
  descriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  iconLinkMax?: Maybe<Scalars['String']>;
  iconLinkMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type NodeInfoFilter = {
  and?: Maybe<Array<Maybe<NodeInfoFilter>>>;
  has?: Maybe<Array<Maybe<NodeInfoHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeInfoFilter>;
  or?: Maybe<Array<Maybe<NodeInfoFilter>>>;
};

export enum NodeInfoHasFilter {
  Description = 'description',
  IconLink = 'iconLink',
  Name = 'name',
  Type = 'type'
}

export type NodeInfoOrder = {
  asc?: Maybe<NodeInfoOrderable>;
  desc?: Maybe<NodeInfoOrderable>;
  then?: Maybe<NodeInfoOrder>;
};

export enum NodeInfoOrderable {
  Description = 'description',
  IconLink = 'iconLink',
  Name = 'name'
}

export type NodeInfoPatch = {
  description?: Maybe<Scalars['String']>;
  iconLink?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ChatNodeType>;
};

export type NodeInfoRef = {
  description?: Maybe<Scalars['String']>;
  iconLink?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ChatNodeType>;
};

export type NodeLinkProps = {
  __typename?: 'NodeLinkProps';
  id: Scalars['ID'];
  src: Scalars['String'];
  text: Scalars['String'];
};

export type NodeLinkPropsAggregateResult = {
  __typename?: 'NodeLinkPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  srcMax?: Maybe<Scalars['String']>;
  srcMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
};

export type NodeLinkPropsFilter = {
  and?: Maybe<Array<Maybe<NodeLinkPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeLinkPropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeLinkPropsFilter>;
  or?: Maybe<Array<Maybe<NodeLinkPropsFilter>>>;
};

export enum NodeLinkPropsHasFilter {
  Src = 'src',
  Text = 'text'
}

export type NodeLinkPropsOrder = {
  asc?: Maybe<NodeLinkPropsOrderable>;
  desc?: Maybe<NodeLinkPropsOrderable>;
  then?: Maybe<NodeLinkPropsOrder>;
};

export enum NodeLinkPropsOrderable {
  Src = 'src',
  Text = 'text'
}

export type NodeLinkPropsPatch = {
  src?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeLinkPropsRef = {
  id?: Maybe<Scalars['ID']>;
  src?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodePatch = {
  info?: Maybe<NodeInfoRef>;
  props?: Maybe<NodePropsRef>;
};

export type NodeProps = NodeAudioProps | NodeCountdownProps | NodeFileProps | NodeImageProps | NodeLinkProps | NodeSwitchOptionProps | NodeSwitchProps | NodeTextProps | NodeVideoProps | NodeWaitProps;

export type NodePropsFilter = {
  memberTypes?: Maybe<Array<NodePropsType>>;
  nodeAudioPropsFilter?: Maybe<NodeAudioPropsFilter>;
  nodeCountdownPropsFilter?: Maybe<NodeCountdownPropsFilter>;
  nodeFilePropsFilter?: Maybe<NodeFilePropsFilter>;
  nodeImagePropsFilter?: Maybe<NodeImagePropsFilter>;
  nodeLinkPropsFilter?: Maybe<NodeLinkPropsFilter>;
  nodeSwitchOptionPropsFilter?: Maybe<NodeSwitchOptionPropsFilter>;
  nodeSwitchPropsFilter?: Maybe<NodeSwitchPropsFilter>;
  nodeTextPropsFilter?: Maybe<NodeTextPropsFilter>;
  nodeVideoPropsFilter?: Maybe<NodeVideoPropsFilter>;
  nodeWaitPropsFilter?: Maybe<NodeWaitPropsFilter>;
};

export type NodePropsRef = {
  nodeAudioPropsRef?: Maybe<NodeAudioPropsRef>;
  nodeCountdownPropsRef?: Maybe<NodeCountdownPropsRef>;
  nodeFilePropsRef?: Maybe<NodeFilePropsRef>;
  nodeImagePropsRef?: Maybe<NodeImagePropsRef>;
  nodeLinkPropsRef?: Maybe<NodeLinkPropsRef>;
  nodeSwitchOptionPropsRef?: Maybe<NodeSwitchOptionPropsRef>;
  nodeSwitchPropsRef?: Maybe<NodeSwitchPropsRef>;
  nodeTextPropsRef?: Maybe<NodeTextPropsRef>;
  nodeVideoPropsRef?: Maybe<NodeVideoPropsRef>;
  nodeWaitPropsRef?: Maybe<NodeWaitPropsRef>;
};

export enum NodePropsType {
  NodeAudioProps = 'NodeAudioProps',
  NodeCountdownProps = 'NodeCountdownProps',
  NodeFileProps = 'NodeFileProps',
  NodeImageProps = 'NodeImageProps',
  NodeLinkProps = 'NodeLinkProps',
  NodeSwitchOptionProps = 'NodeSwitchOptionProps',
  NodeSwitchProps = 'NodeSwitchProps',
  NodeTextProps = 'NodeTextProps',
  NodeVideoProps = 'NodeVideoProps',
  NodeWaitProps = 'NodeWaitProps'
}

export type NodeSwitchOptionProps = {
  __typename?: 'NodeSwitchOptionProps';
  id: Scalars['ID'];
  imageLink: Scalars['String'];
  text: Scalars['String'];
};

export type NodeSwitchOptionPropsAggregateResult = {
  __typename?: 'NodeSwitchOptionPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  imageLinkMax?: Maybe<Scalars['String']>;
  imageLinkMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
};

export type NodeSwitchOptionPropsFilter = {
  and?: Maybe<Array<Maybe<NodeSwitchOptionPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeSwitchOptionPropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeSwitchOptionPropsFilter>;
  or?: Maybe<Array<Maybe<NodeSwitchOptionPropsFilter>>>;
};

export enum NodeSwitchOptionPropsHasFilter {
  ImageLink = 'imageLink',
  Text = 'text'
}

export type NodeSwitchOptionPropsOrder = {
  asc?: Maybe<NodeSwitchOptionPropsOrderable>;
  desc?: Maybe<NodeSwitchOptionPropsOrderable>;
  then?: Maybe<NodeSwitchOptionPropsOrder>;
};

export enum NodeSwitchOptionPropsOrderable {
  ImageLink = 'imageLink',
  Text = 'text'
}

export type NodeSwitchOptionPropsPatch = {
  imageLink?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeSwitchOptionPropsRef = {
  id?: Maybe<Scalars['ID']>;
  imageLink?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeSwitchProps = {
  __typename?: 'NodeSwitchProps';
  displayType: SwitchDisplayType;
  id: Scalars['ID'];
};

export type NodeSwitchPropsAggregateResult = {
  __typename?: 'NodeSwitchPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type NodeSwitchPropsFilter = {
  and?: Maybe<Array<Maybe<NodeSwitchPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeSwitchPropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeSwitchPropsFilter>;
  or?: Maybe<Array<Maybe<NodeSwitchPropsFilter>>>;
};

export enum NodeSwitchPropsHasFilter {
  DisplayType = 'displayType'
}

export type NodeSwitchPropsPatch = {
  displayType?: Maybe<SwitchDisplayType>;
};

export type NodeSwitchPropsRef = {
  displayType?: Maybe<SwitchDisplayType>;
  id?: Maybe<Scalars['ID']>;
};

export type NodeTextProps = {
  __typename?: 'NodeTextProps';
  id: Scalars['ID'];
  src: Scalars['String'];
};

export type NodeTextPropsAggregateResult = {
  __typename?: 'NodeTextPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  srcMax?: Maybe<Scalars['String']>;
  srcMin?: Maybe<Scalars['String']>;
};

export type NodeTextPropsFilter = {
  and?: Maybe<Array<Maybe<NodeTextPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeTextPropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeTextPropsFilter>;
  or?: Maybe<Array<Maybe<NodeTextPropsFilter>>>;
};

export enum NodeTextPropsHasFilter {
  Src = 'src'
}

export type NodeTextPropsOrder = {
  asc?: Maybe<NodeTextPropsOrderable>;
  desc?: Maybe<NodeTextPropsOrderable>;
  then?: Maybe<NodeTextPropsOrder>;
};

export enum NodeTextPropsOrderable {
  Src = 'src'
}

export type NodeTextPropsPatch = {
  src?: Maybe<Scalars['String']>;
};

export type NodeTextPropsRef = {
  id?: Maybe<Scalars['ID']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeVideoProps = {
  __typename?: 'NodeVideoProps';
  id: Scalars['ID'];
  src: Scalars['String'];
};

export type NodeVideoPropsAggregateResult = {
  __typename?: 'NodeVideoPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  srcMax?: Maybe<Scalars['String']>;
  srcMin?: Maybe<Scalars['String']>;
};

export type NodeVideoPropsFilter = {
  and?: Maybe<Array<Maybe<NodeVideoPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeVideoPropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeVideoPropsFilter>;
  or?: Maybe<Array<Maybe<NodeVideoPropsFilter>>>;
};

export enum NodeVideoPropsHasFilter {
  Src = 'src'
}

export type NodeVideoPropsOrder = {
  asc?: Maybe<NodeVideoPropsOrderable>;
  desc?: Maybe<NodeVideoPropsOrderable>;
  then?: Maybe<NodeVideoPropsOrder>;
};

export enum NodeVideoPropsOrderable {
  Src = 'src'
}

export type NodeVideoPropsPatch = {
  src?: Maybe<Scalars['String']>;
};

export type NodeVideoPropsRef = {
  id?: Maybe<Scalars['ID']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeWaitProps = {
  __typename?: 'NodeWaitProps';
  delay: Scalars['Int'];
  id: Scalars['ID'];
  src: Scalars['String'];
};

export type NodeWaitPropsAggregateResult = {
  __typename?: 'NodeWaitPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  delayAvg?: Maybe<Scalars['Float']>;
  delayMax?: Maybe<Scalars['Int']>;
  delayMin?: Maybe<Scalars['Int']>;
  delaySum?: Maybe<Scalars['Int']>;
  srcMax?: Maybe<Scalars['String']>;
  srcMin?: Maybe<Scalars['String']>;
};

export type NodeWaitPropsFilter = {
  and?: Maybe<Array<Maybe<NodeWaitPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeWaitPropsHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<NodeWaitPropsFilter>;
  or?: Maybe<Array<Maybe<NodeWaitPropsFilter>>>;
};

export enum NodeWaitPropsHasFilter {
  Delay = 'delay',
  Src = 'src'
}

export type NodeWaitPropsOrder = {
  asc?: Maybe<NodeWaitPropsOrderable>;
  desc?: Maybe<NodeWaitPropsOrderable>;
  then?: Maybe<NodeWaitPropsOrder>;
};

export enum NodeWaitPropsOrderable {
  Delay = 'delay',
  Src = 'src'
}

export type NodeWaitPropsPatch = {
  delay?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeWaitPropsRef = {
  delay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  src?: Maybe<Scalars['String']>;
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Port = {
  __typename?: 'Port';
  id: Scalars['ID'];
  index: Scalars['Int'];
  node: FlowNode;
  pos: Pos;
};


export type PortNodeArgs = {
  filter?: Maybe<FlowNodeFilter>;
};


export type PortPosArgs = {
  filter?: Maybe<PosFilter>;
};

export type PortAggregateResult = {
  __typename?: 'PortAggregateResult';
  count?: Maybe<Scalars['Int']>;
  indexAvg?: Maybe<Scalars['Float']>;
  indexMax?: Maybe<Scalars['Int']>;
  indexMin?: Maybe<Scalars['Int']>;
  indexSum?: Maybe<Scalars['Int']>;
};

export type PortFilter = {
  and?: Maybe<Array<Maybe<PortFilter>>>;
  has?: Maybe<Array<Maybe<PortHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<PortFilter>;
  or?: Maybe<Array<Maybe<PortFilter>>>;
};

export enum PortHasFilter {
  Index = 'index',
  Node = 'node',
  Pos = 'pos'
}

export type PortOrder = {
  asc?: Maybe<PortOrderable>;
  desc?: Maybe<PortOrderable>;
  then?: Maybe<PortOrder>;
};

export enum PortOrderable {
  Index = 'index'
}

export type PortPatch = {
  index?: Maybe<Scalars['Int']>;
  node?: Maybe<FlowNodeRef>;
  pos?: Maybe<PosRef>;
};

export type PortRef = {
  id?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  node?: Maybe<FlowNodeRef>;
  pos?: Maybe<PosRef>;
};

export type Pos = {
  __typename?: 'Pos';
  id: Scalars['ID'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PosAggregateResult = {
  __typename?: 'PosAggregateResult';
  count?: Maybe<Scalars['Int']>;
  xAvg?: Maybe<Scalars['Float']>;
  xMax?: Maybe<Scalars['Float']>;
  xMin?: Maybe<Scalars['Float']>;
  xSum?: Maybe<Scalars['Float']>;
  yAvg?: Maybe<Scalars['Float']>;
  yMax?: Maybe<Scalars['Float']>;
  yMin?: Maybe<Scalars['Float']>;
  ySum?: Maybe<Scalars['Float']>;
};

export type PosFilter = {
  and?: Maybe<Array<Maybe<PosFilter>>>;
  has?: Maybe<Array<Maybe<PosHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<PosFilter>;
  or?: Maybe<Array<Maybe<PosFilter>>>;
};

export enum PosHasFilter {
  X = 'x',
  Y = 'y'
}

export type PosOrder = {
  asc?: Maybe<PosOrderable>;
  desc?: Maybe<PosOrderable>;
  then?: Maybe<PosOrder>;
};

export enum PosOrderable {
  X = 'x',
  Y = 'y'
}

export type PosPatch = {
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type PosRef = {
  id?: Maybe<Scalars['ID']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBotFlow?: Maybe<BotFlowAggregateResult>;
  aggregateBotFlowVersion?: Maybe<BotFlowVersionAggregateResult>;
  aggregateConnection?: Maybe<ConnectionAggregateResult>;
  aggregateFlowNode?: Maybe<FlowNodeAggregateResult>;
  aggregateNode?: Maybe<NodeAggregateResult>;
  aggregateNodeAudioProps?: Maybe<NodeAudioPropsAggregateResult>;
  aggregateNodeCountdownProps?: Maybe<NodeCountdownPropsAggregateResult>;
  aggregateNodeFileProps?: Maybe<NodeFilePropsAggregateResult>;
  aggregateNodeImageProps?: Maybe<NodeImagePropsAggregateResult>;
  aggregateNodeInfo?: Maybe<NodeInfoAggregateResult>;
  aggregateNodeLinkProps?: Maybe<NodeLinkPropsAggregateResult>;
  aggregateNodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsAggregateResult>;
  aggregateNodeSwitchProps?: Maybe<NodeSwitchPropsAggregateResult>;
  aggregateNodeTextProps?: Maybe<NodeTextPropsAggregateResult>;
  aggregateNodeVideoProps?: Maybe<NodeVideoPropsAggregateResult>;
  aggregateNodeWaitProps?: Maybe<NodeWaitPropsAggregateResult>;
  aggregatePort?: Maybe<PortAggregateResult>;
  aggregatePos?: Maybe<PosAggregateResult>;
  aggregateTemplateNode?: Maybe<TemplateNodeAggregateResult>;
  aggregateTemplateNodesGroup?: Maybe<TemplateNodesGroupAggregateResult>;
  getBotFlow?: Maybe<BotFlow>;
  getBotFlowVersion?: Maybe<BotFlowVersion>;
  getConnection?: Maybe<Connection>;
  getFlowNode?: Maybe<FlowNode>;
  getNodeAudioProps?: Maybe<NodeAudioProps>;
  getNodeCountdownProps?: Maybe<NodeCountdownProps>;
  getNodeFileProps?: Maybe<NodeFileProps>;
  getNodeImageProps?: Maybe<NodeImageProps>;
  getNodeInfo?: Maybe<NodeInfo>;
  getNodeLinkProps?: Maybe<NodeLinkProps>;
  getNodeSwitchOptionProps?: Maybe<NodeSwitchOptionProps>;
  getNodeSwitchProps?: Maybe<NodeSwitchProps>;
  getNodeTextProps?: Maybe<NodeTextProps>;
  getNodeVideoProps?: Maybe<NodeVideoProps>;
  getNodeWaitProps?: Maybe<NodeWaitProps>;
  getPort?: Maybe<Port>;
  getPos?: Maybe<Pos>;
  getTemplateNode?: Maybe<TemplateNode>;
  getTemplateNodesGroup?: Maybe<TemplateNodesGroup>;
  queryBotFlow?: Maybe<Array<Maybe<BotFlow>>>;
  queryBotFlowVersion?: Maybe<Array<Maybe<BotFlowVersion>>>;
  queryConnection?: Maybe<Array<Maybe<Connection>>>;
  queryFlowNode?: Maybe<Array<Maybe<FlowNode>>>;
  queryNode?: Maybe<Array<Maybe<Node>>>;
  queryNodeAudioProps?: Maybe<Array<Maybe<NodeAudioProps>>>;
  queryNodeCountdownProps?: Maybe<Array<Maybe<NodeCountdownProps>>>;
  queryNodeFileProps?: Maybe<Array<Maybe<NodeFileProps>>>;
  queryNodeImageProps?: Maybe<Array<Maybe<NodeImageProps>>>;
  queryNodeInfo?: Maybe<Array<Maybe<NodeInfo>>>;
  queryNodeLinkProps?: Maybe<Array<Maybe<NodeLinkProps>>>;
  queryNodeSwitchOptionProps?: Maybe<Array<Maybe<NodeSwitchOptionProps>>>;
  queryNodeSwitchProps?: Maybe<Array<Maybe<NodeSwitchProps>>>;
  queryNodeTextProps?: Maybe<Array<Maybe<NodeTextProps>>>;
  queryNodeVideoProps?: Maybe<Array<Maybe<NodeVideoProps>>>;
  queryNodeWaitProps?: Maybe<Array<Maybe<NodeWaitProps>>>;
  queryPort?: Maybe<Array<Maybe<Port>>>;
  queryPos?: Maybe<Array<Maybe<Pos>>>;
  queryTemplateNode?: Maybe<Array<Maybe<TemplateNode>>>;
  queryTemplateNodesGroup?: Maybe<Array<Maybe<TemplateNodesGroup>>>;
};


export type QueryAggregateBotFlowArgs = {
  filter?: Maybe<BotFlowFilter>;
};


export type QueryAggregateBotFlowVersionArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
};


export type QueryAggregateConnectionArgs = {
  filter?: Maybe<ConnectionFilter>;
};


export type QueryAggregateFlowNodeArgs = {
  filter?: Maybe<FlowNodeFilter>;
};


export type QueryAggregateNodeArgs = {
  filter?: Maybe<NodeFilter>;
};


export type QueryAggregateNodeAudioPropsArgs = {
  filter?: Maybe<NodeAudioPropsFilter>;
};


export type QueryAggregateNodeCountdownPropsArgs = {
  filter?: Maybe<NodeCountdownPropsFilter>;
};


export type QueryAggregateNodeFilePropsArgs = {
  filter?: Maybe<NodeFilePropsFilter>;
};


export type QueryAggregateNodeImagePropsArgs = {
  filter?: Maybe<NodeImagePropsFilter>;
};


export type QueryAggregateNodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
};


export type QueryAggregateNodeLinkPropsArgs = {
  filter?: Maybe<NodeLinkPropsFilter>;
};


export type QueryAggregateNodeSwitchOptionPropsArgs = {
  filter?: Maybe<NodeSwitchOptionPropsFilter>;
};


export type QueryAggregateNodeSwitchPropsArgs = {
  filter?: Maybe<NodeSwitchPropsFilter>;
};


export type QueryAggregateNodeTextPropsArgs = {
  filter?: Maybe<NodeTextPropsFilter>;
};


export type QueryAggregateNodeVideoPropsArgs = {
  filter?: Maybe<NodeVideoPropsFilter>;
};


export type QueryAggregateNodeWaitPropsArgs = {
  filter?: Maybe<NodeWaitPropsFilter>;
};


export type QueryAggregatePortArgs = {
  filter?: Maybe<PortFilter>;
};


export type QueryAggregatePosArgs = {
  filter?: Maybe<PosFilter>;
};


export type QueryAggregateTemplateNodeArgs = {
  filter?: Maybe<TemplateNodeFilter>;
};


export type QueryAggregateTemplateNodesGroupArgs = {
  filter?: Maybe<TemplateNodesGroupFilter>;
};


export type QueryGetBotFlowArgs = {
  id: Scalars['ID'];
};


export type QueryGetBotFlowVersionArgs = {
  id: Scalars['ID'];
};


export type QueryGetConnectionArgs = {
  id: Scalars['ID'];
};


export type QueryGetFlowNodeArgs = {
  id: Scalars['Int'];
};


export type QueryGetNodeAudioPropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeCountdownPropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeFilePropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeImagePropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeInfoArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeLinkPropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeSwitchOptionPropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeSwitchPropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeTextPropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeVideoPropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetNodeWaitPropsArgs = {
  id: Scalars['ID'];
};


export type QueryGetPortArgs = {
  id: Scalars['ID'];
};


export type QueryGetPosArgs = {
  id: Scalars['ID'];
};


export type QueryGetTemplateNodeArgs = {
  id: Scalars['ID'];
};


export type QueryGetTemplateNodesGroupArgs = {
  id: Scalars['ID'];
};


export type QueryQueryBotFlowArgs = {
  filter?: Maybe<BotFlowFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowOrder>;
};


export type QueryQueryBotFlowVersionArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowVersionOrder>;
};


export type QueryQueryConnectionArgs = {
  filter?: Maybe<ConnectionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryQueryFlowNodeArgs = {
  filter?: Maybe<FlowNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<FlowNodeOrder>;
};


export type QueryQueryNodeArgs = {
  filter?: Maybe<NodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryQueryNodeAudioPropsArgs = {
  filter?: Maybe<NodeAudioPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeAudioPropsOrder>;
};


export type QueryQueryNodeCountdownPropsArgs = {
  filter?: Maybe<NodeCountdownPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeCountdownPropsOrder>;
};


export type QueryQueryNodeFilePropsArgs = {
  filter?: Maybe<NodeFilePropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeFilePropsOrder>;
};


export type QueryQueryNodeImagePropsArgs = {
  filter?: Maybe<NodeImagePropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeImagePropsOrder>;
};


export type QueryQueryNodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeInfoOrder>;
};


export type QueryQueryNodeLinkPropsArgs = {
  filter?: Maybe<NodeLinkPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeLinkPropsOrder>;
};


export type QueryQueryNodeSwitchOptionPropsArgs = {
  filter?: Maybe<NodeSwitchOptionPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeSwitchOptionPropsOrder>;
};


export type QueryQueryNodeSwitchPropsArgs = {
  filter?: Maybe<NodeSwitchPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryQueryNodeTextPropsArgs = {
  filter?: Maybe<NodeTextPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeTextPropsOrder>;
};


export type QueryQueryNodeVideoPropsArgs = {
  filter?: Maybe<NodeVideoPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeVideoPropsOrder>;
};


export type QueryQueryNodeWaitPropsArgs = {
  filter?: Maybe<NodeWaitPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeWaitPropsOrder>;
};


export type QueryQueryPortArgs = {
  filter?: Maybe<PortFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PortOrder>;
};


export type QueryQueryPosArgs = {
  filter?: Maybe<PosFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PosOrder>;
};


export type QueryQueryTemplateNodeArgs = {
  filter?: Maybe<TemplateNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodeOrder>;
};


export type QueryQueryTemplateNodesGroupArgs = {
  filter?: Maybe<TemplateNodesGroupFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodesGroupOrder>;
};

export type StringExactFilter = {
  between?: Maybe<StringRange>;
  eq?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export enum SwitchDisplayType {
  Carousel = 'Carousel',
  List = 'List',
  Select = 'Select'
}

export type TemplateNode = Node & {
  __typename?: 'TemplateNode';
  group: TemplateNodesGroup;
  id: Scalars['ID'];
  info: NodeInfo;
  order: Scalars['Int'];
  props: NodeProps;
};


export type TemplateNodeGroupArgs = {
  filter?: Maybe<TemplateNodesGroupFilter>;
};


export type TemplateNodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
};


export type TemplateNodePropsArgs = {
  filter?: Maybe<NodePropsFilter>;
};

export type TemplateNodeAggregateResult = {
  __typename?: 'TemplateNodeAggregateResult';
  count?: Maybe<Scalars['Int']>;
  orderAvg?: Maybe<Scalars['Float']>;
  orderMax?: Maybe<Scalars['Int']>;
  orderMin?: Maybe<Scalars['Int']>;
  orderSum?: Maybe<Scalars['Int']>;
};

export type TemplateNodeFilter = {
  and?: Maybe<Array<Maybe<TemplateNodeFilter>>>;
  has?: Maybe<Array<Maybe<TemplateNodeHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<TemplateNodeFilter>;
  or?: Maybe<Array<Maybe<TemplateNodeFilter>>>;
};

export enum TemplateNodeHasFilter {
  Group = 'group',
  Info = 'info',
  Order = 'order',
  Props = 'props'
}

export type TemplateNodeOrder = {
  asc?: Maybe<TemplateNodeOrderable>;
  desc?: Maybe<TemplateNodeOrderable>;
  then?: Maybe<TemplateNodeOrder>;
};

export enum TemplateNodeOrderable {
  Order = 'order'
}

export type TemplateNodePatch = {
  group?: Maybe<TemplateNodesGroupRef>;
  info?: Maybe<NodeInfoRef>;
  order?: Maybe<Scalars['Int']>;
  props?: Maybe<NodePropsRef>;
};

export type TemplateNodeRef = {
  group?: Maybe<TemplateNodesGroupRef>;
  id?: Maybe<Scalars['ID']>;
  info?: Maybe<NodeInfoRef>;
  order?: Maybe<Scalars['Int']>;
  props?: Maybe<NodePropsRef>;
};

export type TemplateNodesGroup = {
  __typename?: 'TemplateNodesGroup';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nodes: Array<TemplateNode>;
  nodesAggregate?: Maybe<TemplateNodeAggregateResult>;
};


export type TemplateNodesGroupNodesArgs = {
  filter?: Maybe<TemplateNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodeOrder>;
};


export type TemplateNodesGroupNodesAggregateArgs = {
  filter?: Maybe<TemplateNodeFilter>;
};

export type TemplateNodesGroupAggregateResult = {
  __typename?: 'TemplateNodesGroupAggregateResult';
  count?: Maybe<Scalars['Int']>;
  descriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type TemplateNodesGroupFilter = {
  and?: Maybe<Array<Maybe<TemplateNodesGroupFilter>>>;
  has?: Maybe<Array<Maybe<TemplateNodesGroupHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<TemplateNodesGroupFilter>;
  or?: Maybe<Array<Maybe<TemplateNodesGroupFilter>>>;
};

export enum TemplateNodesGroupHasFilter {
  Description = 'description',
  Name = 'name',
  Nodes = 'nodes'
}

export type TemplateNodesGroupOrder = {
  asc?: Maybe<TemplateNodesGroupOrderable>;
  desc?: Maybe<TemplateNodesGroupOrderable>;
  then?: Maybe<TemplateNodesGroupOrder>;
};

export enum TemplateNodesGroupOrderable {
  Description = 'description',
  Name = 'name'
}

export type TemplateNodesGroupPatch = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<TemplateNodeRef>>;
};

export type TemplateNodesGroupRef = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<TemplateNodeRef>>;
};

export type UpdateBotFlowInput = {
  filter: BotFlowFilter;
  remove?: Maybe<BotFlowPatch>;
  set?: Maybe<BotFlowPatch>;
};

export type UpdateBotFlowPayload = {
  __typename?: 'UpdateBotFlowPayload';
  botFlow?: Maybe<Array<Maybe<BotFlow>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateBotFlowPayloadBotFlowArgs = {
  filter?: Maybe<BotFlowFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowOrder>;
};

export type UpdateBotFlowVersionInput = {
  filter: BotFlowVersionFilter;
  remove?: Maybe<BotFlowVersionPatch>;
  set?: Maybe<BotFlowVersionPatch>;
};

export type UpdateBotFlowVersionPayload = {
  __typename?: 'UpdateBotFlowVersionPayload';
  botFlowVersion?: Maybe<Array<Maybe<BotFlowVersion>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateBotFlowVersionPayloadBotFlowVersionArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<BotFlowVersionOrder>;
};

export type UpdateConnectionInput = {
  filter: ConnectionFilter;
  remove?: Maybe<ConnectionPatch>;
  set?: Maybe<ConnectionPatch>;
};

export type UpdateConnectionPayload = {
  __typename?: 'UpdateConnectionPayload';
  connection?: Maybe<Array<Maybe<Connection>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateConnectionPayloadConnectionArgs = {
  filter?: Maybe<ConnectionFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateFlowNodeInput = {
  filter: FlowNodeFilter;
  remove?: Maybe<FlowNodePatch>;
  set?: Maybe<FlowNodePatch>;
};

export type UpdateFlowNodePayload = {
  __typename?: 'UpdateFlowNodePayload';
  flowNode?: Maybe<Array<Maybe<FlowNode>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateFlowNodePayloadFlowNodeArgs = {
  filter?: Maybe<FlowNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<FlowNodeOrder>;
};

export type UpdateNodeAudioPropsInput = {
  filter: NodeAudioPropsFilter;
  remove?: Maybe<NodeAudioPropsPatch>;
  set?: Maybe<NodeAudioPropsPatch>;
};

export type UpdateNodeAudioPropsPayload = {
  __typename?: 'UpdateNodeAudioPropsPayload';
  nodeAudioProps?: Maybe<Array<Maybe<NodeAudioProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeAudioPropsPayloadNodeAudioPropsArgs = {
  filter?: Maybe<NodeAudioPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeAudioPropsOrder>;
};

export type UpdateNodeCountdownPropsInput = {
  filter: NodeCountdownPropsFilter;
  remove?: Maybe<NodeCountdownPropsPatch>;
  set?: Maybe<NodeCountdownPropsPatch>;
};

export type UpdateNodeCountdownPropsPayload = {
  __typename?: 'UpdateNodeCountdownPropsPayload';
  nodeCountdownProps?: Maybe<Array<Maybe<NodeCountdownProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeCountdownPropsPayloadNodeCountdownPropsArgs = {
  filter?: Maybe<NodeCountdownPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeCountdownPropsOrder>;
};

export type UpdateNodeFilePropsInput = {
  filter: NodeFilePropsFilter;
  remove?: Maybe<NodeFilePropsPatch>;
  set?: Maybe<NodeFilePropsPatch>;
};

export type UpdateNodeFilePropsPayload = {
  __typename?: 'UpdateNodeFilePropsPayload';
  nodeFileProps?: Maybe<Array<Maybe<NodeFileProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeFilePropsPayloadNodeFilePropsArgs = {
  filter?: Maybe<NodeFilePropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeFilePropsOrder>;
};

export type UpdateNodeImagePropsInput = {
  filter: NodeImagePropsFilter;
  remove?: Maybe<NodeImagePropsPatch>;
  set?: Maybe<NodeImagePropsPatch>;
};

export type UpdateNodeImagePropsPayload = {
  __typename?: 'UpdateNodeImagePropsPayload';
  nodeImageProps?: Maybe<Array<Maybe<NodeImageProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeImagePropsPayloadNodeImagePropsArgs = {
  filter?: Maybe<NodeImagePropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeImagePropsOrder>;
};

export type UpdateNodeInfoInput = {
  filter: NodeInfoFilter;
  remove?: Maybe<NodeInfoPatch>;
  set?: Maybe<NodeInfoPatch>;
};

export type UpdateNodeInfoPayload = {
  __typename?: 'UpdateNodeInfoPayload';
  nodeInfo?: Maybe<Array<Maybe<NodeInfo>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeInfoPayloadNodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeInfoOrder>;
};

export type UpdateNodeInput = {
  filter: NodeFilter;
  remove?: Maybe<NodePatch>;
  set?: Maybe<NodePatch>;
};

export type UpdateNodeLinkPropsInput = {
  filter: NodeLinkPropsFilter;
  remove?: Maybe<NodeLinkPropsPatch>;
  set?: Maybe<NodeLinkPropsPatch>;
};

export type UpdateNodeLinkPropsPayload = {
  __typename?: 'UpdateNodeLinkPropsPayload';
  nodeLinkProps?: Maybe<Array<Maybe<NodeLinkProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeLinkPropsPayloadNodeLinkPropsArgs = {
  filter?: Maybe<NodeLinkPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeLinkPropsOrder>;
};

export type UpdateNodePayload = {
  __typename?: 'UpdateNodePayload';
  node?: Maybe<Array<Maybe<Node>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodePayloadNodeArgs = {
  filter?: Maybe<NodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateNodeSwitchOptionPropsInput = {
  filter: NodeSwitchOptionPropsFilter;
  remove?: Maybe<NodeSwitchOptionPropsPatch>;
  set?: Maybe<NodeSwitchOptionPropsPatch>;
};

export type UpdateNodeSwitchOptionPropsPayload = {
  __typename?: 'UpdateNodeSwitchOptionPropsPayload';
  nodeSwitchOptionProps?: Maybe<Array<Maybe<NodeSwitchOptionProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeSwitchOptionPropsPayloadNodeSwitchOptionPropsArgs = {
  filter?: Maybe<NodeSwitchOptionPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeSwitchOptionPropsOrder>;
};

export type UpdateNodeSwitchPropsInput = {
  filter: NodeSwitchPropsFilter;
  remove?: Maybe<NodeSwitchPropsPatch>;
  set?: Maybe<NodeSwitchPropsPatch>;
};

export type UpdateNodeSwitchPropsPayload = {
  __typename?: 'UpdateNodeSwitchPropsPayload';
  nodeSwitchProps?: Maybe<Array<Maybe<NodeSwitchProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeSwitchPropsPayloadNodeSwitchPropsArgs = {
  filter?: Maybe<NodeSwitchPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateNodeTextPropsInput = {
  filter: NodeTextPropsFilter;
  remove?: Maybe<NodeTextPropsPatch>;
  set?: Maybe<NodeTextPropsPatch>;
};

export type UpdateNodeTextPropsPayload = {
  __typename?: 'UpdateNodeTextPropsPayload';
  nodeTextProps?: Maybe<Array<Maybe<NodeTextProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeTextPropsPayloadNodeTextPropsArgs = {
  filter?: Maybe<NodeTextPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeTextPropsOrder>;
};

export type UpdateNodeVideoPropsInput = {
  filter: NodeVideoPropsFilter;
  remove?: Maybe<NodeVideoPropsPatch>;
  set?: Maybe<NodeVideoPropsPatch>;
};

export type UpdateNodeVideoPropsPayload = {
  __typename?: 'UpdateNodeVideoPropsPayload';
  nodeVideoProps?: Maybe<Array<Maybe<NodeVideoProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeVideoPropsPayloadNodeVideoPropsArgs = {
  filter?: Maybe<NodeVideoPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeVideoPropsOrder>;
};

export type UpdateNodeWaitPropsInput = {
  filter: NodeWaitPropsFilter;
  remove?: Maybe<NodeWaitPropsPatch>;
  set?: Maybe<NodeWaitPropsPatch>;
};

export type UpdateNodeWaitPropsPayload = {
  __typename?: 'UpdateNodeWaitPropsPayload';
  nodeWaitProps?: Maybe<Array<Maybe<NodeWaitProps>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateNodeWaitPropsPayloadNodeWaitPropsArgs = {
  filter?: Maybe<NodeWaitPropsFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<NodeWaitPropsOrder>;
};

export type UpdatePortInput = {
  filter: PortFilter;
  remove?: Maybe<PortPatch>;
  set?: Maybe<PortPatch>;
};

export type UpdatePortPayload = {
  __typename?: 'UpdatePortPayload';
  numUids?: Maybe<Scalars['Int']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type UpdatePortPayloadPortArgs = {
  filter?: Maybe<PortFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PortOrder>;
};

export type UpdatePosInput = {
  filter: PosFilter;
  remove?: Maybe<PosPatch>;
  set?: Maybe<PosPatch>;
};

export type UpdatePosPayload = {
  __typename?: 'UpdatePosPayload';
  numUids?: Maybe<Scalars['Int']>;
  pos?: Maybe<Array<Maybe<Pos>>>;
};


export type UpdatePosPayloadPosArgs = {
  filter?: Maybe<PosFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PosOrder>;
};

export type UpdateTemplateNodeInput = {
  filter: TemplateNodeFilter;
  remove?: Maybe<TemplateNodePatch>;
  set?: Maybe<TemplateNodePatch>;
};

export type UpdateTemplateNodePayload = {
  __typename?: 'UpdateTemplateNodePayload';
  numUids?: Maybe<Scalars['Int']>;
  templateNode?: Maybe<Array<Maybe<TemplateNode>>>;
};


export type UpdateTemplateNodePayloadTemplateNodeArgs = {
  filter?: Maybe<TemplateNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodeOrder>;
};

export type UpdateTemplateNodesGroupInput = {
  filter: TemplateNodesGroupFilter;
  remove?: Maybe<TemplateNodesGroupPatch>;
  set?: Maybe<TemplateNodesGroupPatch>;
};

export type UpdateTemplateNodesGroupPayload = {
  __typename?: 'UpdateTemplateNodesGroupPayload';
  numUids?: Maybe<Scalars['Int']>;
  templateNodesGroup?: Maybe<Array<Maybe<TemplateNodesGroup>>>;
};


export type UpdateTemplateNodesGroupPayloadTemplateNodesGroupArgs = {
  filter?: Maybe<TemplateNodesGroupFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<TemplateNodesGroupOrder>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type NodeInfoFragment = { __typename?: 'NodeInfo', name: string, description: string, type: ChatNodeType, iconLink: string };

export type NodeSwitchPropsFragment = { __typename?: 'NodeSwitchProps', displayType: SwitchDisplayType };

export type NodeFilePropsFragment = { __typename?: 'NodeFileProps', info: string, url: string };

export type NodeSwitchOptionPropsFragment = { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string };

export type NodeLinkPropsFragment = { __typename?: 'NodeLinkProps', src: string, text: string };

export type NodeAudioPropsFragment = { __typename?: 'NodeAudioProps', src: string };

export type NodeImagePropsFragment = { __typename?: 'NodeImageProps', src: string };

export type NodeTextPropsFragment = { __typename?: 'NodeTextProps', src: string };

export type NodeVideoPropsFragment = { __typename?: 'NodeVideoProps', src: string };

export type NodeWaitPropsFragment = { __typename?: 'NodeWaitProps', src: string, delay: number };

export type NodeCountdownPropsFragment = { __typename?: 'NodeCountdownProps', duration: number };

type NodeProps_NodeAudioProps_Fragment = { __typename?: 'NodeAudioProps', src: string };

type NodeProps_NodeCountdownProps_Fragment = { __typename?: 'NodeCountdownProps', duration: number };

type NodeProps_NodeFileProps_Fragment = { __typename?: 'NodeFileProps', info: string, url: string };

type NodeProps_NodeImageProps_Fragment = { __typename?: 'NodeImageProps', src: string };

type NodeProps_NodeLinkProps_Fragment = { __typename?: 'NodeLinkProps', src: string, text: string };

type NodeProps_NodeSwitchOptionProps_Fragment = { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string };

type NodeProps_NodeSwitchProps_Fragment = { __typename?: 'NodeSwitchProps', displayType: SwitchDisplayType };

type NodeProps_NodeTextProps_Fragment = { __typename?: 'NodeTextProps', src: string };

type NodeProps_NodeVideoProps_Fragment = { __typename?: 'NodeVideoProps', src: string };

type NodeProps_NodeWaitProps_Fragment = { __typename?: 'NodeWaitProps', src: string, delay: number };

export type NodePropsFragment = NodeProps_NodeAudioProps_Fragment | NodeProps_NodeCountdownProps_Fragment | NodeProps_NodeFileProps_Fragment | NodeProps_NodeImageProps_Fragment | NodeProps_NodeLinkProps_Fragment | NodeProps_NodeSwitchOptionProps_Fragment | NodeProps_NodeSwitchProps_Fragment | NodeProps_NodeTextProps_Fragment | NodeProps_NodeVideoProps_Fragment | NodeProps_NodeWaitProps_Fragment;

export type TemplateNodeFragment = { __typename?: 'TemplateNode', id: string, order: number, group: { __typename?: 'TemplateNodesGroup', id: string }, info: { __typename?: 'NodeInfo', name: string, description: string, type: ChatNodeType, iconLink: string }, props: { __typename?: 'NodeAudioProps', src: string } | { __typename?: 'NodeCountdownProps', duration: number } | { __typename?: 'NodeFileProps', info: string, url: string } | { __typename?: 'NodeImageProps', src: string } | { __typename?: 'NodeLinkProps', src: string, text: string } | { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string } | { __typename?: 'NodeSwitchProps', displayType: SwitchDisplayType } | { __typename?: 'NodeTextProps', src: string } | { __typename?: 'NodeVideoProps', src: string } | { __typename?: 'NodeWaitProps', src: string, delay: number } };

export type TemplateNodesQueryVariables = Exact<{
  filter?: Maybe<TemplateNodeFilter>;
}>;


export type TemplateNodesQuery = { __typename?: 'Query', queryTemplateNode?: Array<{ __typename?: 'TemplateNode', id: string, order: number, group: { __typename?: 'TemplateNodesGroup', id: string }, info: { __typename?: 'NodeInfo', name: string, description: string, type: ChatNodeType, iconLink: string }, props: { __typename?: 'NodeAudioProps', src: string } | { __typename?: 'NodeCountdownProps', duration: number } | { __typename?: 'NodeFileProps', info: string, url: string } | { __typename?: 'NodeImageProps', src: string } | { __typename?: 'NodeLinkProps', src: string, text: string } | { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string } | { __typename?: 'NodeSwitchProps', displayType: SwitchDisplayType } | { __typename?: 'NodeTextProps', src: string } | { __typename?: 'NodeVideoProps', src: string } | { __typename?: 'NodeWaitProps', src: string, delay: number } } | null | undefined> | null | undefined };

export type TemplateNodesMutationVariables = Exact<{
  input: Array<AddTemplateNodeInput> | AddTemplateNodeInput;
}>;


export type TemplateNodesMutation = { __typename?: 'Mutation', addTemplateNode?: { __typename?: 'AddTemplateNodePayload', templateNode?: Array<{ __typename?: 'TemplateNode', id: string } | null | undefined> | null | undefined } | null | undefined };

export type TemplateNodesUpdateMutationVariables = Exact<{
  input: UpdateTemplateNodeInput;
}>;


export type TemplateNodesUpdateMutation = { __typename?: 'Mutation', updateTemplateNode?: { __typename?: 'UpdateTemplateNodePayload', templateNode?: Array<{ __typename?: 'TemplateNode', id: string } | null | undefined> | null | undefined } | null | undefined };

export type TemplateNodesDeleteMutationVariables = Exact<{
  filter: TemplateNodeFilter;
}>;


export type TemplateNodesDeleteMutation = { __typename?: 'Mutation', deleteTemplateNode?: { __typename?: 'DeleteTemplateNodePayload', templateNode?: Array<{ __typename?: 'TemplateNode', id: string } | null | undefined> | null | undefined } | null | undefined };

export type TemplateNodesGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type TemplateNodesGroupsQuery = { __typename?: 'Query', queryTemplateNodesGroup?: Array<{ __typename?: 'TemplateNodesGroup', id: string, name: string, description: string } | null | undefined> | null | undefined };

export type TemplateNodesGroupsMutationVariables = Exact<{
  input: Array<AddTemplateNodesGroupInput> | AddTemplateNodesGroupInput;
}>;


export type TemplateNodesGroupsMutation = { __typename?: 'Mutation', addTemplateNodesGroup?: { __typename?: 'AddTemplateNodesGroupPayload', templateNodesGroup?: Array<{ __typename?: 'TemplateNodesGroup', id: string } | null | undefined> | null | undefined } | null | undefined };

export type TemplateNodesGroupsUpdateMutationVariables = Exact<{
  input: UpdateTemplateNodesGroupInput;
}>;


export type TemplateNodesGroupsUpdateMutation = { __typename?: 'Mutation', updateTemplateNodesGroup?: { __typename?: 'UpdateTemplateNodesGroupPayload', templateNodesGroup?: Array<{ __typename?: 'TemplateNodesGroup', id: string } | null | undefined> | null | undefined } | null | undefined };

export type TemplateNodesGroupsDeleteMutationVariables = Exact<{
  filter: TemplateNodesGroupFilter;
}>;


export type TemplateNodesGroupsDeleteMutation = { __typename?: 'Mutation', deleteTemplateNodesGroup?: { __typename?: 'DeleteTemplateNodesGroupPayload', templateNodesGroup?: Array<{ __typename?: 'TemplateNodesGroup', id: string } | null | undefined> | null | undefined } | null | undefined };

export type BotFlowQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BotFlowQuery = { __typename?: 'Query', getBotFlow?: { __typename?: 'BotFlow', name: string, description: string, nextVersionNumber: number, versions: Array<{ __typename?: 'BotFlowVersion', nodes: Array<{ __typename?: 'FlowNode', id: number, props: { __typename?: 'NodeAudioProps', src: string } | { __typename?: 'NodeCountdownProps', duration: number } | { __typename?: 'NodeFileProps', info: string, url: string } | { __typename?: 'NodeImageProps', src: string } | { __typename?: 'NodeLinkProps', src: string, text: string } | { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string } | { __typename?: 'NodeSwitchProps', displayType: SwitchDisplayType } | { __typename?: 'NodeTextProps', src: string } | { __typename?: 'NodeVideoProps', src: string } | { __typename?: 'NodeWaitProps', src: string, delay: number }, info: { __typename?: 'NodeInfo', name: string, description: string, type: ChatNodeType, iconLink: string }, pos: { __typename?: 'Pos', x: number, y: number }, ports: Array<{ __typename?: 'Port', index: number, pos: { __typename?: 'Pos', x: number, y: number } }> }>, connections: Array<{ __typename?: 'Connection', from: { __typename?: 'Port', id: string }, to: { __typename?: 'Port', id: string } }> }> } | null | undefined };

export type BotFlowVersionMutationVariables = Exact<{
  flow: Array<AddBotFlowVersionInput> | AddBotFlowVersionInput;
}>;


export type BotFlowVersionMutation = { __typename?: 'Mutation', addBotFlowVersion?: { __typename?: 'AddBotFlowVersionPayload', botFlowVersion?: Array<{ __typename?: 'BotFlowVersion', id: string } | null | undefined> | null | undefined } | null | undefined };

export const NodeInfoFragmentDoc = gql`
    fragment nodeInfo on NodeInfo {
  name
  description
  type
  iconLink
}
    `;
export const NodeFilePropsFragmentDoc = gql`
    fragment NodeFileProps on NodeFileProps {
  info
  url
}
    `;
export const NodeLinkPropsFragmentDoc = gql`
    fragment NodeLinkProps on NodeLinkProps {
  src
  text
}
    `;
export const NodeSwitchOptionPropsFragmentDoc = gql`
    fragment NodeSwitchOptionProps on NodeSwitchOptionProps {
  imageLink
  text
}
    `;
export const NodeImagePropsFragmentDoc = gql`
    fragment NodeImageProps on NodeImageProps {
  src
}
    `;
export const NodeCountdownPropsFragmentDoc = gql`
    fragment NodeCountdownProps on NodeCountdownProps {
  duration
}
    `;
export const NodeAudioPropsFragmentDoc = gql`
    fragment NodeAudioProps on NodeAudioProps {
  src
}
    `;
export const NodeSwitchPropsFragmentDoc = gql`
    fragment NodeSwitchProps on NodeSwitchProps {
  displayType
}
    `;
export const NodeVideoPropsFragmentDoc = gql`
    fragment NodeVideoProps on NodeVideoProps {
  src
}
    `;
export const NodeTextPropsFragmentDoc = gql`
    fragment NodeTextProps on NodeTextProps {
  src
}
    `;
export const NodeWaitPropsFragmentDoc = gql`
    fragment NodeWaitProps on NodeWaitProps {
  src
  delay
}
    `;
export const NodePropsFragmentDoc = gql`
    fragment nodeProps on NodeProps {
  ...NodeFileProps
  ...NodeLinkProps
  ...NodeSwitchOptionProps
  ...NodeImageProps
  ...NodeCountdownProps
  ...NodeAudioProps
  ...NodeSwitchProps
  ...NodeVideoProps
  ...NodeTextProps
  ...NodeWaitProps
}
    ${NodeFilePropsFragmentDoc}
${NodeLinkPropsFragmentDoc}
${NodeSwitchOptionPropsFragmentDoc}
${NodeImagePropsFragmentDoc}
${NodeCountdownPropsFragmentDoc}
${NodeAudioPropsFragmentDoc}
${NodeSwitchPropsFragmentDoc}
${NodeVideoPropsFragmentDoc}
${NodeTextPropsFragmentDoc}
${NodeWaitPropsFragmentDoc}`;
export const TemplateNodeFragmentDoc = gql`
    fragment templateNode on TemplateNode {
  id
  order
  group {
    id
  }
  info {
    ...nodeInfo
  }
  props {
    ...nodeProps
  }
}
    ${NodeInfoFragmentDoc}
${NodePropsFragmentDoc}`;
export const TemplateNodesDocument = gql`
    query templateNodes($filter: TemplateNodeFilter) {
  queryTemplateNode(filter: $filter) {
    ...templateNode
  }
}
    ${TemplateNodeFragmentDoc}`;

/**
 * __useTemplateNodesQuery__
 *
 * To run a query within a React component, call `useTemplateNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplateNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplateNodesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTemplateNodesQuery(baseOptions?: Apollo.QueryHookOptions<TemplateNodesQuery, TemplateNodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TemplateNodesQuery, TemplateNodesQueryVariables>(TemplateNodesDocument, options);
      }
export function useTemplateNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TemplateNodesQuery, TemplateNodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TemplateNodesQuery, TemplateNodesQueryVariables>(TemplateNodesDocument, options);
        }
export type TemplateNodesQueryHookResult = ReturnType<typeof useTemplateNodesQuery>;
export type TemplateNodesLazyQueryHookResult = ReturnType<typeof useTemplateNodesLazyQuery>;
export type TemplateNodesQueryResult = Apollo.QueryResult<TemplateNodesQuery, TemplateNodesQueryVariables>;
export const TemplateNodesMutationDocument = gql`
    mutation templateNodesMutation($input: [AddTemplateNodeInput!]!) {
  addTemplateNode(input: $input) {
    templateNode {
      id
    }
  }
}
    `;
export type TemplateNodesMutationMutationFn = Apollo.MutationFunction<TemplateNodesMutation, TemplateNodesMutationVariables>;

/**
 * __useTemplateNodesMutation__
 *
 * To run a mutation, you first call `useTemplateNodesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTemplateNodesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [templateNodesMutation, { data, loading, error }] = useTemplateNodesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTemplateNodesMutation(baseOptions?: Apollo.MutationHookOptions<TemplateNodesMutation, TemplateNodesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TemplateNodesMutation, TemplateNodesMutationVariables>(TemplateNodesMutationDocument, options);
      }
export type TemplateNodesMutationHookResult = ReturnType<typeof useTemplateNodesMutation>;
export type TemplateNodesMutationMutationResult = Apollo.MutationResult<TemplateNodesMutation>;
export type TemplateNodesMutationMutationOptions = Apollo.BaseMutationOptions<TemplateNodesMutation, TemplateNodesMutationVariables>;
export const TemplateNodesUpdateDocument = gql`
    mutation templateNodesUpdate($input: UpdateTemplateNodeInput!) {
  updateTemplateNode(input: $input) {
    templateNode {
      id
    }
  }
}
    `;
export type TemplateNodesUpdateMutationFn = Apollo.MutationFunction<TemplateNodesUpdateMutation, TemplateNodesUpdateMutationVariables>;

/**
 * __useTemplateNodesUpdateMutation__
 *
 * To run a mutation, you first call `useTemplateNodesUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTemplateNodesUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [templateNodesUpdateMutation, { data, loading, error }] = useTemplateNodesUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTemplateNodesUpdateMutation(baseOptions?: Apollo.MutationHookOptions<TemplateNodesUpdateMutation, TemplateNodesUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TemplateNodesUpdateMutation, TemplateNodesUpdateMutationVariables>(TemplateNodesUpdateDocument, options);
      }
export type TemplateNodesUpdateMutationHookResult = ReturnType<typeof useTemplateNodesUpdateMutation>;
export type TemplateNodesUpdateMutationResult = Apollo.MutationResult<TemplateNodesUpdateMutation>;
export type TemplateNodesUpdateMutationOptions = Apollo.BaseMutationOptions<TemplateNodesUpdateMutation, TemplateNodesUpdateMutationVariables>;
export const TemplateNodesDeleteDocument = gql`
    mutation templateNodesDelete($filter: TemplateNodeFilter!) {
  deleteTemplateNode(filter: $filter) {
    templateNode {
      id
    }
  }
}
    `;
export type TemplateNodesDeleteMutationFn = Apollo.MutationFunction<TemplateNodesDeleteMutation, TemplateNodesDeleteMutationVariables>;

/**
 * __useTemplateNodesDeleteMutation__
 *
 * To run a mutation, you first call `useTemplateNodesDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTemplateNodesDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [templateNodesDeleteMutation, { data, loading, error }] = useTemplateNodesDeleteMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTemplateNodesDeleteMutation(baseOptions?: Apollo.MutationHookOptions<TemplateNodesDeleteMutation, TemplateNodesDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TemplateNodesDeleteMutation, TemplateNodesDeleteMutationVariables>(TemplateNodesDeleteDocument, options);
      }
export type TemplateNodesDeleteMutationHookResult = ReturnType<typeof useTemplateNodesDeleteMutation>;
export type TemplateNodesDeleteMutationResult = Apollo.MutationResult<TemplateNodesDeleteMutation>;
export type TemplateNodesDeleteMutationOptions = Apollo.BaseMutationOptions<TemplateNodesDeleteMutation, TemplateNodesDeleteMutationVariables>;
export const TemplateNodesGroupsDocument = gql`
    query templateNodesGroups {
  queryTemplateNodesGroup {
    id
    name
    description
  }
}
    `;

/**
 * __useTemplateNodesGroupsQuery__
 *
 * To run a query within a React component, call `useTemplateNodesGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplateNodesGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplateNodesGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTemplateNodesGroupsQuery(baseOptions?: Apollo.QueryHookOptions<TemplateNodesGroupsQuery, TemplateNodesGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TemplateNodesGroupsQuery, TemplateNodesGroupsQueryVariables>(TemplateNodesGroupsDocument, options);
      }
export function useTemplateNodesGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TemplateNodesGroupsQuery, TemplateNodesGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TemplateNodesGroupsQuery, TemplateNodesGroupsQueryVariables>(TemplateNodesGroupsDocument, options);
        }
export type TemplateNodesGroupsQueryHookResult = ReturnType<typeof useTemplateNodesGroupsQuery>;
export type TemplateNodesGroupsLazyQueryHookResult = ReturnType<typeof useTemplateNodesGroupsLazyQuery>;
export type TemplateNodesGroupsQueryResult = Apollo.QueryResult<TemplateNodesGroupsQuery, TemplateNodesGroupsQueryVariables>;
export const TemplateNodesGroupsMutationDocument = gql`
    mutation templateNodesGroupsMutation($input: [AddTemplateNodesGroupInput!]!) {
  addTemplateNodesGroup(input: $input) {
    templateNodesGroup {
      id
    }
  }
}
    `;
export type TemplateNodesGroupsMutationMutationFn = Apollo.MutationFunction<TemplateNodesGroupsMutation, TemplateNodesGroupsMutationVariables>;

/**
 * __useTemplateNodesGroupsMutation__
 *
 * To run a mutation, you first call `useTemplateNodesGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTemplateNodesGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [templateNodesGroupsMutation, { data, loading, error }] = useTemplateNodesGroupsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTemplateNodesGroupsMutation(baseOptions?: Apollo.MutationHookOptions<TemplateNodesGroupsMutation, TemplateNodesGroupsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TemplateNodesGroupsMutation, TemplateNodesGroupsMutationVariables>(TemplateNodesGroupsMutationDocument, options);
      }
export type TemplateNodesGroupsMutationHookResult = ReturnType<typeof useTemplateNodesGroupsMutation>;
export type TemplateNodesGroupsMutationMutationResult = Apollo.MutationResult<TemplateNodesGroupsMutation>;
export type TemplateNodesGroupsMutationMutationOptions = Apollo.BaseMutationOptions<TemplateNodesGroupsMutation, TemplateNodesGroupsMutationVariables>;
export const TemplateNodesGroupsUpdateDocument = gql`
    mutation templateNodesGroupsUpdate($input: UpdateTemplateNodesGroupInput!) {
  updateTemplateNodesGroup(input: $input) {
    templateNodesGroup {
      id
    }
  }
}
    `;
export type TemplateNodesGroupsUpdateMutationFn = Apollo.MutationFunction<TemplateNodesGroupsUpdateMutation, TemplateNodesGroupsUpdateMutationVariables>;

/**
 * __useTemplateNodesGroupsUpdateMutation__
 *
 * To run a mutation, you first call `useTemplateNodesGroupsUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTemplateNodesGroupsUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [templateNodesGroupsUpdateMutation, { data, loading, error }] = useTemplateNodesGroupsUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTemplateNodesGroupsUpdateMutation(baseOptions?: Apollo.MutationHookOptions<TemplateNodesGroupsUpdateMutation, TemplateNodesGroupsUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TemplateNodesGroupsUpdateMutation, TemplateNodesGroupsUpdateMutationVariables>(TemplateNodesGroupsUpdateDocument, options);
      }
export type TemplateNodesGroupsUpdateMutationHookResult = ReturnType<typeof useTemplateNodesGroupsUpdateMutation>;
export type TemplateNodesGroupsUpdateMutationResult = Apollo.MutationResult<TemplateNodesGroupsUpdateMutation>;
export type TemplateNodesGroupsUpdateMutationOptions = Apollo.BaseMutationOptions<TemplateNodesGroupsUpdateMutation, TemplateNodesGroupsUpdateMutationVariables>;
export const TemplateNodesGroupsDeleteDocument = gql`
    mutation templateNodesGroupsDelete($filter: TemplateNodesGroupFilter!) {
  deleteTemplateNodesGroup(filter: $filter) {
    templateNodesGroup {
      id
    }
  }
}
    `;
export type TemplateNodesGroupsDeleteMutationFn = Apollo.MutationFunction<TemplateNodesGroupsDeleteMutation, TemplateNodesGroupsDeleteMutationVariables>;

/**
 * __useTemplateNodesGroupsDeleteMutation__
 *
 * To run a mutation, you first call `useTemplateNodesGroupsDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTemplateNodesGroupsDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [templateNodesGroupsDeleteMutation, { data, loading, error }] = useTemplateNodesGroupsDeleteMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTemplateNodesGroupsDeleteMutation(baseOptions?: Apollo.MutationHookOptions<TemplateNodesGroupsDeleteMutation, TemplateNodesGroupsDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TemplateNodesGroupsDeleteMutation, TemplateNodesGroupsDeleteMutationVariables>(TemplateNodesGroupsDeleteDocument, options);
      }
export type TemplateNodesGroupsDeleteMutationHookResult = ReturnType<typeof useTemplateNodesGroupsDeleteMutation>;
export type TemplateNodesGroupsDeleteMutationResult = Apollo.MutationResult<TemplateNodesGroupsDeleteMutation>;
export type TemplateNodesGroupsDeleteMutationOptions = Apollo.BaseMutationOptions<TemplateNodesGroupsDeleteMutation, TemplateNodesGroupsDeleteMutationVariables>;
export const BotFlowDocument = gql`
    query botFlow($id: ID!) {
  getBotFlow(id: $id) {
    name
    description
    nextVersionNumber
    versions {
      nodes {
        id
        props {
          ...nodeProps
        }
        info {
          ...nodeInfo
        }
        pos {
          x
          y
        }
        ports {
          index
          pos {
            x
            y
          }
        }
      }
      connections {
        from {
          id
        }
        to {
          id
        }
      }
    }
  }
}
    ${NodePropsFragmentDoc}
${NodeInfoFragmentDoc}`;

/**
 * __useBotFlowQuery__
 *
 * To run a query within a React component, call `useBotFlowQuery` and pass it any options that fit your needs.
 * When your component renders, `useBotFlowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBotFlowQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBotFlowQuery(baseOptions: Apollo.QueryHookOptions<BotFlowQuery, BotFlowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BotFlowQuery, BotFlowQueryVariables>(BotFlowDocument, options);
      }
export function useBotFlowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BotFlowQuery, BotFlowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BotFlowQuery, BotFlowQueryVariables>(BotFlowDocument, options);
        }
export type BotFlowQueryHookResult = ReturnType<typeof useBotFlowQuery>;
export type BotFlowLazyQueryHookResult = ReturnType<typeof useBotFlowLazyQuery>;
export type BotFlowQueryResult = Apollo.QueryResult<BotFlowQuery, BotFlowQueryVariables>;
export const BotFlowVersionDocument = gql`
    mutation botFlowVersion($flow: [AddBotFlowVersionInput!]!) {
  addBotFlowVersion(input: $flow) {
    botFlowVersion {
      id
    }
  }
}
    `;
export type BotFlowVersionMutationFn = Apollo.MutationFunction<BotFlowVersionMutation, BotFlowVersionMutationVariables>;

/**
 * __useBotFlowVersionMutation__
 *
 * To run a mutation, you first call `useBotFlowVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBotFlowVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [botFlowVersionMutation, { data, loading, error }] = useBotFlowVersionMutation({
 *   variables: {
 *      flow: // value for 'flow'
 *   },
 * });
 */
export function useBotFlowVersionMutation(baseOptions?: Apollo.MutationHookOptions<BotFlowVersionMutation, BotFlowVersionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BotFlowVersionMutation, BotFlowVersionMutationVariables>(BotFlowVersionDocument, options);
      }
export type BotFlowVersionMutationHookResult = ReturnType<typeof useBotFlowVersionMutation>;
export type BotFlowVersionMutationResult = Apollo.MutationResult<BotFlowVersionMutation>;
export type BotFlowVersionMutationOptions = Apollo.BaseMutationOptions<BotFlowVersionMutation, BotFlowVersionMutationVariables>;