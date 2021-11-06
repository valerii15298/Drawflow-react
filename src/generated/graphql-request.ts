import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type AddFlowNodeInput = {
  childrenVisibility: Scalars['Boolean'];
  flow?: Maybe<BotFlowVersionRef>;
  id: Scalars['Int'];
  info: NodeInfoRef;
  nextNodes: Array<FlowNodeRef>;
  parentNode?: Maybe<FlowNodeRef>;
  props: NodePropsRef;
  subnodesVisibility: Scalars['Boolean'];
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
  imageLink: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
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
  imageUrl: Scalars['String'];
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

export type AddTemplateNodeInput = {
  group: TemplateNodesGroupRef;
  info: NodeInfoRef;
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
  id: Scalars['ID'];
  nodes: Array<FlowNode>;
  nodesAggregate?: Maybe<FlowNodeAggregateResult>;
  version: Scalars['Int'];
};


export type BotFlowVersionBotFlowArgs = {
  filter?: Maybe<BotFlowFilter>;
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
  nodes?: Maybe<Array<FlowNodeRef>>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionRef = {
  botFlow?: Maybe<BotFlowRef>;
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
  childrenVisibility: Scalars['Boolean'];
  flow?: Maybe<BotFlowVersion>;
  id: Scalars['Int'];
  info: NodeInfo;
  nextNodes: Array<FlowNode>;
  nextNodesAggregate?: Maybe<FlowNodeAggregateResult>;
  parentNode?: Maybe<FlowNode>;
  props: NodeProps;
  subnodesVisibility: Scalars['Boolean'];
  templateNode?: Maybe<TemplateNode>;
};


export type FlowNodeFlowArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
};


export type FlowNodeInfoArgs = {
  filter?: Maybe<NodeInfoFilter>;
};


export type FlowNodeNextNodesArgs = {
  filter?: Maybe<FlowNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<FlowNodeOrder>;
};


export type FlowNodeNextNodesAggregateArgs = {
  filter?: Maybe<FlowNodeFilter>;
};


export type FlowNodeParentNodeArgs = {
  filter?: Maybe<FlowNodeFilter>;
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
  ChildrenVisibility = 'childrenVisibility',
  Flow = 'flow',
  Id = 'id',
  Info = 'info',
  NextNodes = 'nextNodes',
  ParentNode = 'parentNode',
  Props = 'props',
  SubnodesVisibility = 'subnodesVisibility',
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
  childrenVisibility?: Maybe<Scalars['Boolean']>;
  flow?: Maybe<BotFlowVersionRef>;
  info?: Maybe<NodeInfoRef>;
  nextNodes?: Maybe<Array<FlowNodeRef>>;
  parentNode?: Maybe<FlowNodeRef>;
  props?: Maybe<NodePropsRef>;
  subnodesVisibility?: Maybe<Scalars['Boolean']>;
  templateNode?: Maybe<TemplateNodeRef>;
};

export type FlowNodeRef = {
  childrenVisibility?: Maybe<Scalars['Boolean']>;
  flow?: Maybe<BotFlowVersionRef>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<NodeInfoRef>;
  nextNodes?: Maybe<Array<FlowNodeRef>>;
  parentNode?: Maybe<FlowNodeRef>;
  props?: Maybe<NodePropsRef>;
  subnodesVisibility?: Maybe<Scalars['Boolean']>;
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
  addTemplateNode?: Maybe<AddTemplateNodePayload>;
  addTemplateNodesGroup?: Maybe<AddTemplateNodesGroupPayload>;
  deleteBotFlow?: Maybe<DeleteBotFlowPayload>;
  deleteBotFlowVersion?: Maybe<DeleteBotFlowVersionPayload>;
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
  deleteTemplateNode?: Maybe<DeleteTemplateNodePayload>;
  deleteTemplateNodesGroup?: Maybe<DeleteTemplateNodesGroupPayload>;
  updateBotFlow?: Maybe<UpdateBotFlowPayload>;
  updateBotFlowVersion?: Maybe<UpdateBotFlowVersionPayload>;
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
  updateTemplateNode?: Maybe<UpdateTemplateNodePayload>;
  updateTemplateNodesGroup?: Maybe<UpdateTemplateNodesGroupPayload>;
};


export type MutationAddBotFlowArgs = {
  input: Array<AddBotFlowInput>;
};


export type MutationAddBotFlowVersionArgs = {
  input: Array<AddBotFlowVersionInput>;
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
  src?: Maybe<Scalars['String']>;
};

export type NodeCountdownProps = {
  __typename?: 'NodeCountdownProps';
  duration: Scalars['Int'];
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
};

export type NodeFileProps = {
  __typename?: 'NodeFileProps';
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
  src?: Maybe<Scalars['String']>;
};

export type NodeInfo = {
  __typename?: 'NodeInfo';
  description: Scalars['String'];
  imageLink: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
  type: ChatNodeType;
};

export type NodeInfoAggregateResult = {
  __typename?: 'NodeInfoAggregateResult';
  count?: Maybe<Scalars['Int']>;
  descriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  imageLinkMax?: Maybe<Scalars['String']>;
  imageLinkMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
  orderAvg?: Maybe<Scalars['Float']>;
  orderMax?: Maybe<Scalars['Int']>;
  orderMin?: Maybe<Scalars['Int']>;
  orderSum?: Maybe<Scalars['Int']>;
};

export type NodeInfoFilter = {
  and?: Maybe<Array<Maybe<NodeInfoFilter>>>;
  has?: Maybe<Array<Maybe<NodeInfoHasFilter>>>;
  not?: Maybe<NodeInfoFilter>;
  or?: Maybe<Array<Maybe<NodeInfoFilter>>>;
};

export enum NodeInfoHasFilter {
  Description = 'description',
  ImageLink = 'imageLink',
  Name = 'name',
  Order = 'order',
  Type = 'type'
}

export type NodeInfoOrder = {
  asc?: Maybe<NodeInfoOrderable>;
  desc?: Maybe<NodeInfoOrderable>;
  then?: Maybe<NodeInfoOrder>;
};

export enum NodeInfoOrderable {
  Description = 'description',
  ImageLink = 'imageLink',
  Name = 'name',
  Order = 'order'
}

export type NodeInfoPatch = {
  description?: Maybe<Scalars['String']>;
  imageLink?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  type?: Maybe<ChatNodeType>;
};

export type NodeInfoRef = {
  description?: Maybe<Scalars['String']>;
  imageLink?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  type?: Maybe<ChatNodeType>;
};

export type NodeLinkProps = {
  __typename?: 'NodeLinkProps';
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
  src?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodePatch = {
  info?: Maybe<NodeInfoRef>;
  props?: Maybe<NodePropsRef>;
};

export type NodeProps = NodeAudioProps | NodeCountdownProps | NodeFileProps | NodeImageProps | NodeLinkProps | NodeSwitchOptionProps | NodeSwitchProps;

export type NodePropsFilter = {
  memberTypes?: Maybe<Array<NodePropsType>>;
  nodeAudioPropsFilter?: Maybe<NodeAudioPropsFilter>;
  nodeCountdownPropsFilter?: Maybe<NodeCountdownPropsFilter>;
  nodeFilePropsFilter?: Maybe<NodeFilePropsFilter>;
  nodeImagePropsFilter?: Maybe<NodeImagePropsFilter>;
  nodeLinkPropsFilter?: Maybe<NodeLinkPropsFilter>;
  nodeSwitchOptionPropsFilter?: Maybe<NodeSwitchOptionPropsFilter>;
  nodeSwitchPropsFilter?: Maybe<NodeSwitchPropsFilter>;
};

export type NodePropsRef = {
  nodeAudioPropsRef?: Maybe<NodeAudioPropsRef>;
  nodeCountdownPropsRef?: Maybe<NodeCountdownPropsRef>;
  nodeFilePropsRef?: Maybe<NodeFilePropsRef>;
  nodeImagePropsRef?: Maybe<NodeImagePropsRef>;
  nodeLinkPropsRef?: Maybe<NodeLinkPropsRef>;
  nodeSwitchOptionPropsRef?: Maybe<NodeSwitchOptionPropsRef>;
  nodeSwitchPropsRef?: Maybe<NodeSwitchPropsRef>;
};

export enum NodePropsType {
  NodeAudioProps = 'NodeAudioProps',
  NodeCountdownProps = 'NodeCountdownProps',
  NodeFileProps = 'NodeFileProps',
  NodeImageProps = 'NodeImageProps',
  NodeLinkProps = 'NodeLinkProps',
  NodeSwitchOptionProps = 'NodeSwitchOptionProps',
  NodeSwitchProps = 'NodeSwitchProps'
}

export type NodeSwitchOptionProps = {
  __typename?: 'NodeSwitchOptionProps';
  imageUrl: Scalars['String'];
  text: Scalars['String'];
};

export type NodeSwitchOptionPropsAggregateResult = {
  __typename?: 'NodeSwitchOptionPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  imageUrlMax?: Maybe<Scalars['String']>;
  imageUrlMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
};

export type NodeSwitchOptionPropsFilter = {
  and?: Maybe<Array<Maybe<NodeSwitchOptionPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeSwitchOptionPropsHasFilter>>>;
  not?: Maybe<NodeSwitchOptionPropsFilter>;
  or?: Maybe<Array<Maybe<NodeSwitchOptionPropsFilter>>>;
};

export enum NodeSwitchOptionPropsHasFilter {
  ImageUrl = 'imageUrl',
  Text = 'text'
}

export type NodeSwitchOptionPropsOrder = {
  asc?: Maybe<NodeSwitchOptionPropsOrderable>;
  desc?: Maybe<NodeSwitchOptionPropsOrderable>;
  then?: Maybe<NodeSwitchOptionPropsOrder>;
};

export enum NodeSwitchOptionPropsOrderable {
  ImageUrl = 'imageUrl',
  Text = 'text'
}

export type NodeSwitchOptionPropsPatch = {
  imageUrl?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeSwitchOptionPropsRef = {
  imageUrl?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeSwitchProps = {
  __typename?: 'NodeSwitchProps';
  displayType: SwitchDisplayType;
};

export type NodeSwitchPropsAggregateResult = {
  __typename?: 'NodeSwitchPropsAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type NodeSwitchPropsFilter = {
  and?: Maybe<Array<Maybe<NodeSwitchPropsFilter>>>;
  has?: Maybe<Array<Maybe<NodeSwitchPropsHasFilter>>>;
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
};

export type NodeTextProps = {
  __typename?: 'NodeTextProps';
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
  src?: Maybe<Scalars['String']>;
};

export type NodeVideoProps = {
  __typename?: 'NodeVideoProps';
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
  src?: Maybe<Scalars['String']>;
};

export type NodeWaitProps = {
  __typename?: 'NodeWaitProps';
  delay: Scalars['Int'];
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

export type Query = {
  __typename?: 'Query';
  aggregateBotFlow?: Maybe<BotFlowAggregateResult>;
  aggregateBotFlowVersion?: Maybe<BotFlowVersionAggregateResult>;
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
  aggregateTemplateNode?: Maybe<TemplateNodeAggregateResult>;
  aggregateTemplateNodesGroup?: Maybe<TemplateNodesGroupAggregateResult>;
  getBotFlow?: Maybe<BotFlow>;
  getBotFlowVersion?: Maybe<BotFlowVersion>;
  getFlowNode?: Maybe<FlowNode>;
  getTemplateNode?: Maybe<TemplateNode>;
  getTemplateNodesGroup?: Maybe<TemplateNodesGroup>;
  queryBotFlow?: Maybe<Array<Maybe<BotFlow>>>;
  queryBotFlowVersion?: Maybe<Array<Maybe<BotFlowVersion>>>;
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
  queryTemplateNode?: Maybe<Array<Maybe<TemplateNode>>>;
  queryTemplateNodesGroup?: Maybe<Array<Maybe<TemplateNodesGroup>>>;
};


export type QueryAggregateBotFlowArgs = {
  filter?: Maybe<BotFlowFilter>;
};


export type QueryAggregateBotFlowVersionArgs = {
  filter?: Maybe<BotFlowVersionFilter>;
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


export type QueryGetFlowNodeArgs = {
  id: Scalars['Int'];
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


export type QueryQueryTemplateNodeArgs = {
  filter?: Maybe<TemplateNodeFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  Props = 'props'
}

export type TemplateNodePatch = {
  group?: Maybe<TemplateNodesGroupRef>;
  info?: Maybe<NodeInfoRef>;
  props?: Maybe<NodePropsRef>;
};

export type TemplateNodeRef = {
  group?: Maybe<TemplateNodesGroupRef>;
  id?: Maybe<Scalars['ID']>;
  info?: Maybe<NodeInfoRef>;
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

export type GetBotFlowQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBotFlowQuery = { __typename?: 'Query', queryBotFlow?: Array<{ __typename?: 'BotFlow', name: string } | null | undefined> | null | undefined };

export type PostBotFlowMutationVariables = Exact<{
  flow: Array<AddBotFlowInput> | AddBotFlowInput;
}>;


export type PostBotFlowMutation = { __typename?: 'Mutation', addBotFlow?: { __typename?: 'AddBotFlowPayload', botFlow?: Array<{ __typename?: 'BotFlow', id: string } | null | undefined> | null | undefined } | null | undefined };


export const GetBotFlowDocument = gql`
    query getBotFlow {
  queryBotFlow {
    name
  }
}
    `;
export const PostBotFlowDocument = gql`
    mutation postBotFlow($flow: [AddBotFlowInput!]!) {
  addBotFlow(input: $flow) {
    botFlow {
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getBotFlow(variables?: GetBotFlowQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBotFlowQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBotFlowQuery>(GetBotFlowDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBotFlow');
    },
    postBotFlow(variables: PostBotFlowMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostBotFlowMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostBotFlowMutation>(PostBotFlowDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postBotFlow');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;