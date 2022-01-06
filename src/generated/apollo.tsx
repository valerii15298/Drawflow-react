import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateBotFlow = {
  __typename?: 'AggregateBotFlow';
  _avg?: Maybe<BotFlowAvgAggregate>;
  _count?: Maybe<BotFlowCountAggregate>;
  _max?: Maybe<BotFlowMaxAggregate>;
  _min?: Maybe<BotFlowMinAggregate>;
  _sum?: Maybe<BotFlowSumAggregate>;
};

export type AggregateBotFlowVersion = {
  __typename?: 'AggregateBotFlowVersion';
  _avg?: Maybe<BotFlowVersionAvgAggregate>;
  _count?: Maybe<BotFlowVersionCountAggregate>;
  _max?: Maybe<BotFlowVersionMaxAggregate>;
  _min?: Maybe<BotFlowVersionMinAggregate>;
  _sum?: Maybe<BotFlowVersionSumAggregate>;
};

export type AggregateConnection = {
  __typename?: 'AggregateConnection';
  _avg?: Maybe<ConnectionAvgAggregate>;
  _count?: Maybe<ConnectionCountAggregate>;
  _max?: Maybe<ConnectionMaxAggregate>;
  _min?: Maybe<ConnectionMinAggregate>;
  _sum?: Maybe<ConnectionSumAggregate>;
};

export type AggregateFlowNode = {
  __typename?: 'AggregateFlowNode';
  _avg?: Maybe<FlowNodeAvgAggregate>;
  _count?: Maybe<FlowNodeCountAggregate>;
  _max?: Maybe<FlowNodeMaxAggregate>;
  _min?: Maybe<FlowNodeMinAggregate>;
  _sum?: Maybe<FlowNodeSumAggregate>;
};

export type AggregateNodeAudioProps = {
  __typename?: 'AggregateNodeAudioProps';
  _avg?: Maybe<NodeAudioPropsAvgAggregate>;
  _count?: Maybe<NodeAudioPropsCountAggregate>;
  _max?: Maybe<NodeAudioPropsMaxAggregate>;
  _min?: Maybe<NodeAudioPropsMinAggregate>;
  _sum?: Maybe<NodeAudioPropsSumAggregate>;
};

export type AggregateNodeCountdownProps = {
  __typename?: 'AggregateNodeCountdownProps';
  _avg?: Maybe<NodeCountdownPropsAvgAggregate>;
  _count?: Maybe<NodeCountdownPropsCountAggregate>;
  _max?: Maybe<NodeCountdownPropsMaxAggregate>;
  _min?: Maybe<NodeCountdownPropsMinAggregate>;
  _sum?: Maybe<NodeCountdownPropsSumAggregate>;
};

export type AggregateNodeFileProps = {
  __typename?: 'AggregateNodeFileProps';
  _avg?: Maybe<NodeFilePropsAvgAggregate>;
  _count?: Maybe<NodeFilePropsCountAggregate>;
  _max?: Maybe<NodeFilePropsMaxAggregate>;
  _min?: Maybe<NodeFilePropsMinAggregate>;
  _sum?: Maybe<NodeFilePropsSumAggregate>;
};

export type AggregateNodeImageProps = {
  __typename?: 'AggregateNodeImageProps';
  _avg?: Maybe<NodeImagePropsAvgAggregate>;
  _count?: Maybe<NodeImagePropsCountAggregate>;
  _max?: Maybe<NodeImagePropsMaxAggregate>;
  _min?: Maybe<NodeImagePropsMinAggregate>;
  _sum?: Maybe<NodeImagePropsSumAggregate>;
};

export type AggregateNodeInfo = {
  __typename?: 'AggregateNodeInfo';
  _avg?: Maybe<NodeInfoAvgAggregate>;
  _count?: Maybe<NodeInfoCountAggregate>;
  _max?: Maybe<NodeInfoMaxAggregate>;
  _min?: Maybe<NodeInfoMinAggregate>;
  _sum?: Maybe<NodeInfoSumAggregate>;
};

export type AggregateNodeLinkProps = {
  __typename?: 'AggregateNodeLinkProps';
  _avg?: Maybe<NodeLinkPropsAvgAggregate>;
  _count?: Maybe<NodeLinkPropsCountAggregate>;
  _max?: Maybe<NodeLinkPropsMaxAggregate>;
  _min?: Maybe<NodeLinkPropsMinAggregate>;
  _sum?: Maybe<NodeLinkPropsSumAggregate>;
};

export type AggregateNodeProps = {
  __typename?: 'AggregateNodeProps';
  _avg?: Maybe<NodePropsAvgAggregate>;
  _count?: Maybe<NodePropsCountAggregate>;
  _max?: Maybe<NodePropsMaxAggregate>;
  _min?: Maybe<NodePropsMinAggregate>;
  _sum?: Maybe<NodePropsSumAggregate>;
};

export type AggregateNodeSwitchOptionProps = {
  __typename?: 'AggregateNodeSwitchOptionProps';
  _avg?: Maybe<NodeSwitchOptionPropsAvgAggregate>;
  _count?: Maybe<NodeSwitchOptionPropsCountAggregate>;
  _max?: Maybe<NodeSwitchOptionPropsMaxAggregate>;
  _min?: Maybe<NodeSwitchOptionPropsMinAggregate>;
  _sum?: Maybe<NodeSwitchOptionPropsSumAggregate>;
};

export type AggregateNodeSwitchProps = {
  __typename?: 'AggregateNodeSwitchProps';
  _avg?: Maybe<NodeSwitchPropsAvgAggregate>;
  _count?: Maybe<NodeSwitchPropsCountAggregate>;
  _max?: Maybe<NodeSwitchPropsMaxAggregate>;
  _min?: Maybe<NodeSwitchPropsMinAggregate>;
  _sum?: Maybe<NodeSwitchPropsSumAggregate>;
};

export type AggregateNodeTextProps = {
  __typename?: 'AggregateNodeTextProps';
  _avg?: Maybe<NodeTextPropsAvgAggregate>;
  _count?: Maybe<NodeTextPropsCountAggregate>;
  _max?: Maybe<NodeTextPropsMaxAggregate>;
  _min?: Maybe<NodeTextPropsMinAggregate>;
  _sum?: Maybe<NodeTextPropsSumAggregate>;
};

export type AggregateNodeVideoProps = {
  __typename?: 'AggregateNodeVideoProps';
  _avg?: Maybe<NodeVideoPropsAvgAggregate>;
  _count?: Maybe<NodeVideoPropsCountAggregate>;
  _max?: Maybe<NodeVideoPropsMaxAggregate>;
  _min?: Maybe<NodeVideoPropsMinAggregate>;
  _sum?: Maybe<NodeVideoPropsSumAggregate>;
};

export type AggregateNodeWaitProps = {
  __typename?: 'AggregateNodeWaitProps';
  _avg?: Maybe<NodeWaitPropsAvgAggregate>;
  _count?: Maybe<NodeWaitPropsCountAggregate>;
  _max?: Maybe<NodeWaitPropsMaxAggregate>;
  _min?: Maybe<NodeWaitPropsMinAggregate>;
  _sum?: Maybe<NodeWaitPropsSumAggregate>;
};

export type AggregatePort = {
  __typename?: 'AggregatePort';
  _avg?: Maybe<PortAvgAggregate>;
  _count?: Maybe<PortCountAggregate>;
  _max?: Maybe<PortMaxAggregate>;
  _min?: Maybe<PortMinAggregate>;
  _sum?: Maybe<PortSumAggregate>;
};

export type AggregateTemplateNode = {
  __typename?: 'AggregateTemplateNode';
  _avg?: Maybe<TemplateNodeAvgAggregate>;
  _count?: Maybe<TemplateNodeCountAggregate>;
  _max?: Maybe<TemplateNodeMaxAggregate>;
  _min?: Maybe<TemplateNodeMinAggregate>;
  _sum?: Maybe<TemplateNodeSumAggregate>;
};

export type AggregateTemplateNodesGroup = {
  __typename?: 'AggregateTemplateNodesGroup';
  _avg?: Maybe<TemplateNodesGroupAvgAggregate>;
  _count?: Maybe<TemplateNodesGroupCountAggregate>;
  _max?: Maybe<TemplateNodesGroupMaxAggregate>;
  _min?: Maybe<TemplateNodesGroupMinAggregate>;
  _sum?: Maybe<TemplateNodesGroupSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type BotFlow = {
  __typename?: 'BotFlow';
  _count?: Maybe<BotFlowCount>;
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  nextVersionNumber: Scalars['Int'];
  versions: Array<BotFlowVersion>;
};


export type BotFlowVersionsArgs = {
  cursor?: InputMaybe<BotFlowVersionWhereUniqueInput>;
  distinct?: InputMaybe<Array<BotFlowVersionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BotFlowVersionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowVersionWhereInput>;
};

export type BotFlowAvgAggregate = {
  __typename?: 'BotFlowAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  nextVersionNumber?: Maybe<Scalars['Float']>;
};

export type BotFlowAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nextVersionNumber?: InputMaybe<SortOrder>;
};

export type BotFlowCount = {
  __typename?: 'BotFlowCount';
  versions: Scalars['Int'];
};

export type BotFlowCountAggregate = {
  __typename?: 'BotFlowCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  nextVersionNumber: Scalars['Int'];
};

export type BotFlowCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nextVersionNumber?: InputMaybe<SortOrder>;
};

export type BotFlowCreateInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  nextVersionNumber: Scalars['Int'];
  versions?: InputMaybe<BotFlowVersionCreateNestedManyWithoutBotFlowInput>;
};

export type BotFlowCreateManyInput = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  nextVersionNumber: Scalars['Int'];
};

export type BotFlowCreateNestedOneWithoutVersionsInput = {
  connect?: InputMaybe<BotFlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BotFlowCreateOrConnectWithoutVersionsInput>;
  create?: InputMaybe<BotFlowCreateWithoutVersionsInput>;
};

export type BotFlowCreateOrConnectWithoutVersionsInput = {
  create: BotFlowCreateWithoutVersionsInput;
  where: BotFlowWhereUniqueInput;
};

export type BotFlowCreateWithoutVersionsInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  nextVersionNumber: Scalars['Int'];
};

export type BotFlowGroupBy = {
  __typename?: 'BotFlowGroupBy';
  _avg?: Maybe<BotFlowAvgAggregate>;
  _count?: Maybe<BotFlowCountAggregate>;
  _max?: Maybe<BotFlowMaxAggregate>;
  _min?: Maybe<BotFlowMinAggregate>;
  _sum?: Maybe<BotFlowSumAggregate>;
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  nextVersionNumber: Scalars['Int'];
};

export type BotFlowMaxAggregate = {
  __typename?: 'BotFlowMaxAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nextVersionNumber?: Maybe<Scalars['Int']>;
};

export type BotFlowMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nextVersionNumber?: InputMaybe<SortOrder>;
};

export type BotFlowMinAggregate = {
  __typename?: 'BotFlowMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nextVersionNumber?: Maybe<Scalars['Int']>;
};

export type BotFlowMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nextVersionNumber?: InputMaybe<SortOrder>;
};

export type BotFlowOrderByWithAggregationInput = {
  _avg?: InputMaybe<BotFlowAvgOrderByAggregateInput>;
  _count?: InputMaybe<BotFlowCountOrderByAggregateInput>;
  _max?: InputMaybe<BotFlowMaxOrderByAggregateInput>;
  _min?: InputMaybe<BotFlowMinOrderByAggregateInput>;
  _sum?: InputMaybe<BotFlowSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nextVersionNumber?: InputMaybe<SortOrder>;
};

export type BotFlowOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nextVersionNumber?: InputMaybe<SortOrder>;
  versions?: InputMaybe<BotFlowVersionOrderByRelationAggregateInput>;
};

export type BotFlowRelationFilter = {
  is?: InputMaybe<BotFlowWhereInput>;
  isNot?: InputMaybe<BotFlowWhereInput>;
};

export enum BotFlowScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name',
  NextVersionNumber = 'nextVersionNumber'
}

export type BotFlowScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BotFlowScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BotFlowScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BotFlowScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  nextVersionNumber?: InputMaybe<IntWithAggregatesFilter>;
};

export type BotFlowSumAggregate = {
  __typename?: 'BotFlowSumAggregate';
  id?: Maybe<Scalars['Int']>;
  nextVersionNumber?: Maybe<Scalars['Int']>;
};

export type BotFlowSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nextVersionNumber?: InputMaybe<SortOrder>;
};

export type BotFlowUpdateInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextVersionNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  versions?: InputMaybe<BotFlowVersionUpdateManyWithoutBotFlowInput>;
};

export type BotFlowUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextVersionNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowUpdateOneRequiredWithoutVersionsInput = {
  connect?: InputMaybe<BotFlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BotFlowCreateOrConnectWithoutVersionsInput>;
  create?: InputMaybe<BotFlowCreateWithoutVersionsInput>;
  update?: InputMaybe<BotFlowUpdateWithoutVersionsInput>;
  upsert?: InputMaybe<BotFlowUpsertWithoutVersionsInput>;
};

export type BotFlowUpdateWithoutVersionsInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nextVersionNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowUpsertWithoutVersionsInput = {
  create: BotFlowCreateWithoutVersionsInput;
  update: BotFlowUpdateWithoutVersionsInput;
};

export type BotFlowVersion = {
  __typename?: 'BotFlowVersion';
  _count?: Maybe<BotFlowVersionCount>;
  botFlow: BotFlow;
  botFlowId: Scalars['Int'];
  connections: Array<Connection>;
  id: Scalars['Int'];
  nodes: Array<FlowNode>;
  version: Scalars['Int'];
};


export type BotFlowVersionConnectionsArgs = {
  cursor?: InputMaybe<ConnectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConnectionWhereInput>;
};


export type BotFlowVersionNodesArgs = {
  cursor?: InputMaybe<FlowNodeWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowNodeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowNodeWhereInput>;
};

export type BotFlowVersionAvgAggregate = {
  __typename?: 'BotFlowVersionAvgAggregate';
  botFlowId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

export type BotFlowVersionAvgOrderByAggregateInput = {
  botFlowId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type BotFlowVersionCount = {
  __typename?: 'BotFlowVersionCount';
  connections: Scalars['Int'];
  nodes: Scalars['Int'];
};

export type BotFlowVersionCountAggregate = {
  __typename?: 'BotFlowVersionCountAggregate';
  _all: Scalars['Int'];
  botFlowId: Scalars['Int'];
  id: Scalars['Int'];
  version: Scalars['Int'];
};

export type BotFlowVersionCountOrderByAggregateInput = {
  botFlowId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type BotFlowVersionCreateInput = {
  botFlow: BotFlowCreateNestedOneWithoutVersionsInput;
  connections?: InputMaybe<ConnectionCreateNestedManyWithoutFlowInput>;
  nodes?: InputMaybe<FlowNodeCreateNestedManyWithoutFlowInput>;
  version?: InputMaybe<Scalars['Int']>;
};

export type BotFlowVersionCreateManyBotFlowInput = {
  id?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
};

export type BotFlowVersionCreateManyBotFlowInputEnvelope = {
  data: Array<BotFlowVersionCreateManyBotFlowInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BotFlowVersionCreateManyInput = {
  botFlowId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
};

export type BotFlowVersionCreateNestedManyWithoutBotFlowInput = {
  connect?: InputMaybe<Array<BotFlowVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BotFlowVersionCreateOrConnectWithoutBotFlowInput>>;
  create?: InputMaybe<Array<BotFlowVersionCreateWithoutBotFlowInput>>;
  createMany?: InputMaybe<BotFlowVersionCreateManyBotFlowInputEnvelope>;
};

export type BotFlowVersionCreateNestedOneWithoutConnectionsInput = {
  connect?: InputMaybe<BotFlowVersionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BotFlowVersionCreateOrConnectWithoutConnectionsInput>;
  create?: InputMaybe<BotFlowVersionCreateWithoutConnectionsInput>;
};

export type BotFlowVersionCreateNestedOneWithoutNodesInput = {
  connect?: InputMaybe<BotFlowVersionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BotFlowVersionCreateOrConnectWithoutNodesInput>;
  create?: InputMaybe<BotFlowVersionCreateWithoutNodesInput>;
};

export type BotFlowVersionCreateOrConnectWithoutBotFlowInput = {
  create: BotFlowVersionCreateWithoutBotFlowInput;
  where: BotFlowVersionWhereUniqueInput;
};

export type BotFlowVersionCreateOrConnectWithoutConnectionsInput = {
  create: BotFlowVersionCreateWithoutConnectionsInput;
  where: BotFlowVersionWhereUniqueInput;
};

export type BotFlowVersionCreateOrConnectWithoutNodesInput = {
  create: BotFlowVersionCreateWithoutNodesInput;
  where: BotFlowVersionWhereUniqueInput;
};

export type BotFlowVersionCreateWithoutBotFlowInput = {
  connections?: InputMaybe<ConnectionCreateNestedManyWithoutFlowInput>;
  nodes?: InputMaybe<FlowNodeCreateNestedManyWithoutFlowInput>;
  version?: InputMaybe<Scalars['Int']>;
};

export type BotFlowVersionCreateWithoutConnectionsInput = {
  botFlow: BotFlowCreateNestedOneWithoutVersionsInput;
  nodes?: InputMaybe<FlowNodeCreateNestedManyWithoutFlowInput>;
  version?: InputMaybe<Scalars['Int']>;
};

export type BotFlowVersionCreateWithoutNodesInput = {
  botFlow: BotFlowCreateNestedOneWithoutVersionsInput;
  connections?: InputMaybe<ConnectionCreateNestedManyWithoutFlowInput>;
  version?: InputMaybe<Scalars['Int']>;
};

export type BotFlowVersionGroupBy = {
  __typename?: 'BotFlowVersionGroupBy';
  _avg?: Maybe<BotFlowVersionAvgAggregate>;
  _count?: Maybe<BotFlowVersionCountAggregate>;
  _max?: Maybe<BotFlowVersionMaxAggregate>;
  _min?: Maybe<BotFlowVersionMinAggregate>;
  _sum?: Maybe<BotFlowVersionSumAggregate>;
  botFlowId: Scalars['Int'];
  id: Scalars['Int'];
  version: Scalars['Int'];
};

export type BotFlowVersionListRelationFilter = {
  every?: InputMaybe<BotFlowVersionWhereInput>;
  none?: InputMaybe<BotFlowVersionWhereInput>;
  some?: InputMaybe<BotFlowVersionWhereInput>;
};

export type BotFlowVersionMaxAggregate = {
  __typename?: 'BotFlowVersionMaxAggregate';
  botFlowId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionMaxOrderByAggregateInput = {
  botFlowId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type BotFlowVersionMinAggregate = {
  __typename?: 'BotFlowVersionMinAggregate';
  botFlowId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionMinOrderByAggregateInput = {
  botFlowId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type BotFlowVersionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BotFlowVersionOrderByWithAggregationInput = {
  _avg?: InputMaybe<BotFlowVersionAvgOrderByAggregateInput>;
  _count?: InputMaybe<BotFlowVersionCountOrderByAggregateInput>;
  _max?: InputMaybe<BotFlowVersionMaxOrderByAggregateInput>;
  _min?: InputMaybe<BotFlowVersionMinOrderByAggregateInput>;
  _sum?: InputMaybe<BotFlowVersionSumOrderByAggregateInput>;
  botFlowId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type BotFlowVersionOrderByWithRelationInput = {
  botFlow?: InputMaybe<BotFlowOrderByWithRelationInput>;
  botFlowId?: InputMaybe<SortOrder>;
  connections?: InputMaybe<ConnectionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  nodes?: InputMaybe<FlowNodeOrderByRelationAggregateInput>;
  version?: InputMaybe<SortOrder>;
};

export type BotFlowVersionRelationFilter = {
  is?: InputMaybe<BotFlowVersionWhereInput>;
  isNot?: InputMaybe<BotFlowVersionWhereInput>;
};

export enum BotFlowVersionScalarFieldEnum {
  BotFlowId = 'botFlowId',
  Id = 'id',
  Version = 'version'
}

export type BotFlowVersionScalarWhereInput = {
  AND?: InputMaybe<Array<BotFlowVersionScalarWhereInput>>;
  NOT?: InputMaybe<Array<BotFlowVersionScalarWhereInput>>;
  OR?: InputMaybe<Array<BotFlowVersionScalarWhereInput>>;
  botFlowId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  version?: InputMaybe<IntFilter>;
};

export type BotFlowVersionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BotFlowVersionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BotFlowVersionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BotFlowVersionScalarWhereWithAggregatesInput>>;
  botFlowId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  version?: InputMaybe<IntWithAggregatesFilter>;
};

export type BotFlowVersionSumAggregate = {
  __typename?: 'BotFlowVersionSumAggregate';
  botFlowId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionSumOrderByAggregateInput = {
  botFlowId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  version?: InputMaybe<SortOrder>;
};

export type BotFlowVersionUpdateInput = {
  botFlow?: InputMaybe<BotFlowUpdateOneRequiredWithoutVersionsInput>;
  connections?: InputMaybe<ConnectionUpdateManyWithoutFlowInput>;
  nodes?: InputMaybe<FlowNodeUpdateManyWithoutFlowInput>;
  version?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpdateManyMutationInput = {
  version?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpdateManyWithWhereWithoutBotFlowInput = {
  data: BotFlowVersionUpdateManyMutationInput;
  where: BotFlowVersionScalarWhereInput;
};

export type BotFlowVersionUpdateManyWithoutBotFlowInput = {
  connect?: InputMaybe<Array<BotFlowVersionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BotFlowVersionCreateOrConnectWithoutBotFlowInput>>;
  create?: InputMaybe<Array<BotFlowVersionCreateWithoutBotFlowInput>>;
  createMany?: InputMaybe<BotFlowVersionCreateManyBotFlowInputEnvelope>;
  delete?: InputMaybe<Array<BotFlowVersionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BotFlowVersionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BotFlowVersionWhereUniqueInput>>;
  set?: InputMaybe<Array<BotFlowVersionWhereUniqueInput>>;
  update?: InputMaybe<Array<BotFlowVersionUpdateWithWhereUniqueWithoutBotFlowInput>>;
  updateMany?: InputMaybe<Array<BotFlowVersionUpdateManyWithWhereWithoutBotFlowInput>>;
  upsert?: InputMaybe<Array<BotFlowVersionUpsertWithWhereUniqueWithoutBotFlowInput>>;
};

export type BotFlowVersionUpdateOneRequiredWithoutConnectionsInput = {
  connect?: InputMaybe<BotFlowVersionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BotFlowVersionCreateOrConnectWithoutConnectionsInput>;
  create?: InputMaybe<BotFlowVersionCreateWithoutConnectionsInput>;
  update?: InputMaybe<BotFlowVersionUpdateWithoutConnectionsInput>;
  upsert?: InputMaybe<BotFlowVersionUpsertWithoutConnectionsInput>;
};

export type BotFlowVersionUpdateOneRequiredWithoutNodesInput = {
  connect?: InputMaybe<BotFlowVersionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BotFlowVersionCreateOrConnectWithoutNodesInput>;
  create?: InputMaybe<BotFlowVersionCreateWithoutNodesInput>;
  update?: InputMaybe<BotFlowVersionUpdateWithoutNodesInput>;
  upsert?: InputMaybe<BotFlowVersionUpsertWithoutNodesInput>;
};

export type BotFlowVersionUpdateWithWhereUniqueWithoutBotFlowInput = {
  data: BotFlowVersionUpdateWithoutBotFlowInput;
  where: BotFlowVersionWhereUniqueInput;
};

export type BotFlowVersionUpdateWithoutBotFlowInput = {
  connections?: InputMaybe<ConnectionUpdateManyWithoutFlowInput>;
  nodes?: InputMaybe<FlowNodeUpdateManyWithoutFlowInput>;
  version?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpdateWithoutConnectionsInput = {
  botFlow?: InputMaybe<BotFlowUpdateOneRequiredWithoutVersionsInput>;
  nodes?: InputMaybe<FlowNodeUpdateManyWithoutFlowInput>;
  version?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpdateWithoutNodesInput = {
  botFlow?: InputMaybe<BotFlowUpdateOneRequiredWithoutVersionsInput>;
  connections?: InputMaybe<ConnectionUpdateManyWithoutFlowInput>;
  version?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpsertWithWhereUniqueWithoutBotFlowInput = {
  create: BotFlowVersionCreateWithoutBotFlowInput;
  update: BotFlowVersionUpdateWithoutBotFlowInput;
  where: BotFlowVersionWhereUniqueInput;
};

export type BotFlowVersionUpsertWithoutConnectionsInput = {
  create: BotFlowVersionCreateWithoutConnectionsInput;
  update: BotFlowVersionUpdateWithoutConnectionsInput;
};

export type BotFlowVersionUpsertWithoutNodesInput = {
  create: BotFlowVersionCreateWithoutNodesInput;
  update: BotFlowVersionUpdateWithoutNodesInput;
};

export type BotFlowVersionWhereInput = {
  AND?: InputMaybe<Array<BotFlowVersionWhereInput>>;
  NOT?: InputMaybe<Array<BotFlowVersionWhereInput>>;
  OR?: InputMaybe<Array<BotFlowVersionWhereInput>>;
  botFlow?: InputMaybe<BotFlowRelationFilter>;
  botFlowId?: InputMaybe<IntFilter>;
  connections?: InputMaybe<ConnectionListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  nodes?: InputMaybe<FlowNodeListRelationFilter>;
  version?: InputMaybe<IntFilter>;
};

export type BotFlowVersionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type BotFlowWhereInput = {
  AND?: InputMaybe<Array<BotFlowWhereInput>>;
  NOT?: InputMaybe<Array<BotFlowWhereInput>>;
  OR?: InputMaybe<Array<BotFlowWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nextVersionNumber?: InputMaybe<IntFilter>;
  versions?: InputMaybe<BotFlowVersionListRelationFilter>;
};

export type BotFlowWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Connection = {
  __typename?: 'Connection';
  botFlowVersionId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  flow: BotFlowVersion;
  from: Scalars['Int'];
  fromPort: Port;
  id: Scalars['Int'];
  to: Scalars['Int'];
  toPort: Port;
};

export type ConnectionAvgAggregate = {
  __typename?: 'ConnectionAvgAggregate';
  botFlowVersionId?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  to?: Maybe<Scalars['Float']>;
};

export type ConnectionAvgOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  to?: InputMaybe<SortOrder>;
};

export type ConnectionCountAggregate = {
  __typename?: 'ConnectionCountAggregate';
  _all: Scalars['Int'];
  botFlowVersionId: Scalars['Int'];
  createdAt: Scalars['Int'];
  from: Scalars['Int'];
  id: Scalars['Int'];
  to: Scalars['Int'];
};

export type ConnectionCountOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  to?: InputMaybe<SortOrder>;
};

export type ConnectionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flow: BotFlowVersionCreateNestedOneWithoutConnectionsInput;
  fromPort: PortCreateNestedOneWithoutOutConnectionsInput;
  toPort: PortCreateNestedOneWithoutInConnectionInput;
};

export type ConnectionCreateManyFlowInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  to: Scalars['Int'];
};

export type ConnectionCreateManyFlowInputEnvelope = {
  data: Array<ConnectionCreateManyFlowInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ConnectionCreateManyFromPortInput = {
  botFlowVersionId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  to: Scalars['Int'];
};

export type ConnectionCreateManyFromPortInputEnvelope = {
  data: Array<ConnectionCreateManyFromPortInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ConnectionCreateManyInput = {
  botFlowVersionId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  to: Scalars['Int'];
};

export type ConnectionCreateNestedManyWithoutFlowInput = {
  connect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConnectionCreateOrConnectWithoutFlowInput>>;
  create?: InputMaybe<Array<ConnectionCreateWithoutFlowInput>>;
  createMany?: InputMaybe<ConnectionCreateManyFlowInputEnvelope>;
};

export type ConnectionCreateNestedManyWithoutFromPortInput = {
  connect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConnectionCreateOrConnectWithoutFromPortInput>>;
  create?: InputMaybe<Array<ConnectionCreateWithoutFromPortInput>>;
  createMany?: InputMaybe<ConnectionCreateManyFromPortInputEnvelope>;
};

export type ConnectionCreateNestedOneWithoutToPortInput = {
  connect?: InputMaybe<ConnectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConnectionCreateOrConnectWithoutToPortInput>;
  create?: InputMaybe<ConnectionCreateWithoutToPortInput>;
};

export type ConnectionCreateOrConnectWithoutFlowInput = {
  create: ConnectionCreateWithoutFlowInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionCreateOrConnectWithoutFromPortInput = {
  create: ConnectionCreateWithoutFromPortInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionCreateOrConnectWithoutToPortInput = {
  create: ConnectionCreateWithoutToPortInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionCreateWithoutFlowInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fromPort: PortCreateNestedOneWithoutOutConnectionsInput;
  toPort: PortCreateNestedOneWithoutInConnectionInput;
};

export type ConnectionCreateWithoutFromPortInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flow: BotFlowVersionCreateNestedOneWithoutConnectionsInput;
  toPort: PortCreateNestedOneWithoutInConnectionInput;
};

export type ConnectionCreateWithoutToPortInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flow: BotFlowVersionCreateNestedOneWithoutConnectionsInput;
  fromPort: PortCreateNestedOneWithoutOutConnectionsInput;
};

export type ConnectionGroupBy = {
  __typename?: 'ConnectionGroupBy';
  _avg?: Maybe<ConnectionAvgAggregate>;
  _count?: Maybe<ConnectionCountAggregate>;
  _max?: Maybe<ConnectionMaxAggregate>;
  _min?: Maybe<ConnectionMinAggregate>;
  _sum?: Maybe<ConnectionSumAggregate>;
  botFlowVersionId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  from: Scalars['Int'];
  id: Scalars['Int'];
  to: Scalars['Int'];
};

export type ConnectionListRelationFilter = {
  every?: InputMaybe<ConnectionWhereInput>;
  none?: InputMaybe<ConnectionWhereInput>;
  some?: InputMaybe<ConnectionWhereInput>;
};

export type ConnectionMaxAggregate = {
  __typename?: 'ConnectionMaxAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type ConnectionMaxOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  to?: InputMaybe<SortOrder>;
};

export type ConnectionMinAggregate = {
  __typename?: 'ConnectionMinAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type ConnectionMinOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  to?: InputMaybe<SortOrder>;
};

export type ConnectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ConnectionOrderByWithAggregationInput = {
  _avg?: InputMaybe<ConnectionAvgOrderByAggregateInput>;
  _count?: InputMaybe<ConnectionCountOrderByAggregateInput>;
  _max?: InputMaybe<ConnectionMaxOrderByAggregateInput>;
  _min?: InputMaybe<ConnectionMinOrderByAggregateInput>;
  _sum?: InputMaybe<ConnectionSumOrderByAggregateInput>;
  botFlowVersionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  to?: InputMaybe<SortOrder>;
};

export type ConnectionOrderByWithRelationInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  flow?: InputMaybe<BotFlowVersionOrderByWithRelationInput>;
  from?: InputMaybe<SortOrder>;
  fromPort?: InputMaybe<PortOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  to?: InputMaybe<SortOrder>;
  toPort?: InputMaybe<PortOrderByWithRelationInput>;
};

export type ConnectionRelationFilter = {
  is?: InputMaybe<ConnectionWhereInput>;
  isNot?: InputMaybe<ConnectionWhereInput>;
};

export enum ConnectionScalarFieldEnum {
  BotFlowVersionId = 'botFlowVersionId',
  CreatedAt = 'createdAt',
  From = 'from',
  Id = 'id',
  To = 'to'
}

export type ConnectionScalarWhereInput = {
  AND?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  OR?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  botFlowVersionId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  from?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  to?: InputMaybe<IntFilter>;
};

export type ConnectionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ConnectionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ConnectionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ConnectionScalarWhereWithAggregatesInput>>;
  botFlowVersionId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  from?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  to?: InputMaybe<IntWithAggregatesFilter>;
};

export type ConnectionSumAggregate = {
  __typename?: 'ConnectionSumAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type ConnectionSumOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  to?: InputMaybe<SortOrder>;
};

export type ConnectionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flow?: InputMaybe<BotFlowVersionUpdateOneRequiredWithoutConnectionsInput>;
  fromPort?: InputMaybe<PortUpdateOneRequiredWithoutOutConnectionsInput>;
  toPort?: InputMaybe<PortUpdateOneRequiredWithoutInConnectionInput>;
};

export type ConnectionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ConnectionUpdateManyWithWhereWithoutFlowInput = {
  data: ConnectionUpdateManyMutationInput;
  where: ConnectionScalarWhereInput;
};

export type ConnectionUpdateManyWithWhereWithoutFromPortInput = {
  data: ConnectionUpdateManyMutationInput;
  where: ConnectionScalarWhereInput;
};

export type ConnectionUpdateManyWithoutFlowInput = {
  connect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConnectionCreateOrConnectWithoutFlowInput>>;
  create?: InputMaybe<Array<ConnectionCreateWithoutFlowInput>>;
  createMany?: InputMaybe<ConnectionCreateManyFlowInputEnvelope>;
  delete?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  set?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  update?: InputMaybe<Array<ConnectionUpdateWithWhereUniqueWithoutFlowInput>>;
  updateMany?: InputMaybe<Array<ConnectionUpdateManyWithWhereWithoutFlowInput>>;
  upsert?: InputMaybe<Array<ConnectionUpsertWithWhereUniqueWithoutFlowInput>>;
};

export type ConnectionUpdateManyWithoutFromPortInput = {
  connect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConnectionCreateOrConnectWithoutFromPortInput>>;
  create?: InputMaybe<Array<ConnectionCreateWithoutFromPortInput>>;
  createMany?: InputMaybe<ConnectionCreateManyFromPortInputEnvelope>;
  delete?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConnectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  set?: InputMaybe<Array<ConnectionWhereUniqueInput>>;
  update?: InputMaybe<Array<ConnectionUpdateWithWhereUniqueWithoutFromPortInput>>;
  updateMany?: InputMaybe<Array<ConnectionUpdateManyWithWhereWithoutFromPortInput>>;
  upsert?: InputMaybe<Array<ConnectionUpsertWithWhereUniqueWithoutFromPortInput>>;
};

export type ConnectionUpdateOneWithoutToPortInput = {
  connect?: InputMaybe<ConnectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConnectionCreateOrConnectWithoutToPortInput>;
  create?: InputMaybe<ConnectionCreateWithoutToPortInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ConnectionUpdateWithoutToPortInput>;
  upsert?: InputMaybe<ConnectionUpsertWithoutToPortInput>;
};

export type ConnectionUpdateWithWhereUniqueWithoutFlowInput = {
  data: ConnectionUpdateWithoutFlowInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionUpdateWithWhereUniqueWithoutFromPortInput = {
  data: ConnectionUpdateWithoutFromPortInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionUpdateWithoutFlowInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fromPort?: InputMaybe<PortUpdateOneRequiredWithoutOutConnectionsInput>;
  toPort?: InputMaybe<PortUpdateOneRequiredWithoutInConnectionInput>;
};

export type ConnectionUpdateWithoutFromPortInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flow?: InputMaybe<BotFlowVersionUpdateOneRequiredWithoutConnectionsInput>;
  toPort?: InputMaybe<PortUpdateOneRequiredWithoutInConnectionInput>;
};

export type ConnectionUpdateWithoutToPortInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flow?: InputMaybe<BotFlowVersionUpdateOneRequiredWithoutConnectionsInput>;
  fromPort?: InputMaybe<PortUpdateOneRequiredWithoutOutConnectionsInput>;
};

export type ConnectionUpsertWithWhereUniqueWithoutFlowInput = {
  create: ConnectionCreateWithoutFlowInput;
  update: ConnectionUpdateWithoutFlowInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionUpsertWithWhereUniqueWithoutFromPortInput = {
  create: ConnectionCreateWithoutFromPortInput;
  update: ConnectionUpdateWithoutFromPortInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionUpsertWithoutToPortInput = {
  create: ConnectionCreateWithoutToPortInput;
  update: ConnectionUpdateWithoutToPortInput;
};

export type ConnectionWhereInput = {
  AND?: InputMaybe<Array<ConnectionWhereInput>>;
  NOT?: InputMaybe<Array<ConnectionWhereInput>>;
  OR?: InputMaybe<Array<ConnectionWhereInput>>;
  botFlowVersionId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  flow?: InputMaybe<BotFlowVersionRelationFilter>;
  from?: InputMaybe<IntFilter>;
  fromPort?: InputMaybe<PortRelationFilter>;
  id?: InputMaybe<IntFilter>;
  to?: InputMaybe<IntFilter>;
  toPort?: InputMaybe<PortRelationFilter>;
};

export type ConnectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumNodeTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<NodeType>;
};

export type EnumNodeTypeFilter = {
  equals?: InputMaybe<NodeType>;
  in?: InputMaybe<Array<NodeType>>;
  not?: InputMaybe<NestedEnumNodeTypeFilter>;
  notIn?: InputMaybe<Array<NodeType>>;
};

export type EnumNodeTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumNodeTypeFilter>;
  _min?: InputMaybe<NestedEnumNodeTypeFilter>;
  equals?: InputMaybe<NodeType>;
  in?: InputMaybe<Array<NodeType>>;
  not?: InputMaybe<NestedEnumNodeTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<NodeType>>;
};

export type EnumSwitchDisplayTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<SwitchDisplayType>;
};

export type EnumSwitchDisplayTypeFilter = {
  equals?: InputMaybe<SwitchDisplayType>;
  in?: InputMaybe<Array<SwitchDisplayType>>;
  not?: InputMaybe<NestedEnumSwitchDisplayTypeFilter>;
  notIn?: InputMaybe<Array<SwitchDisplayType>>;
};

export type EnumSwitchDisplayTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSwitchDisplayTypeFilter>;
  _min?: InputMaybe<NestedEnumSwitchDisplayTypeFilter>;
  equals?: InputMaybe<SwitchDisplayType>;
  in?: InputMaybe<Array<SwitchDisplayType>>;
  not?: InputMaybe<NestedEnumSwitchDisplayTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<SwitchDisplayType>>;
};

export type FlowNode = {
  __typename?: 'FlowNode';
  NodeProps: NodeProps;
  _count?: Maybe<FlowNodeCount>;
  botFlowVersionId: Scalars['Int'];
  flow: BotFlowVersion;
  head: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  info: NodeInfo;
  isSub: Scalars['Boolean'];
  lane: Scalars['Int'];
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  ports: Array<Port>;
  pos: Pos;
  positionNumber: Scalars['Int'];
  templateNode?: Maybe<TemplateNode>;
  templateNodeId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  visible: Scalars['Boolean'];
  width: Scalars['Int'];
};


export type FlowNodePortsArgs = {
  cursor?: InputMaybe<PortWhereUniqueInput>;
  distinct?: InputMaybe<Array<PortScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PortOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortWhereInput>;
};

export type FlowNodeAvgAggregate = {
  __typename?: 'FlowNodeAvgAggregate';
  botFlowVersionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  nodeInfoId?: Maybe<Scalars['Float']>;
  nodePropsId?: Maybe<Scalars['Float']>;
  templateNodeId?: Maybe<Scalars['Float']>;
};

export type FlowNodeAvgOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  templateNodeId?: InputMaybe<SortOrder>;
};

export type FlowNodeCount = {
  __typename?: 'FlowNodeCount';
  ports: Scalars['Int'];
};

export type FlowNodeCountAggregate = {
  __typename?: 'FlowNodeCountAggregate';
  _all: Scalars['Int'];
  botFlowVersionId: Scalars['Int'];
  id: Scalars['Int'];
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  templateNodeId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FlowNodeCountOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  templateNodeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FlowNodeCreateInput = {
  NodeProps: NodePropsCreateNestedOneWithoutFlowNodeInput;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info: NodeInfoCreateNestedOneWithoutFlowNodeInput;
  ports?: InputMaybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeCreateManyFlowInput = {
  id?: InputMaybe<Scalars['Int']>;
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  templateNodeId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeCreateManyFlowInputEnvelope = {
  data: Array<FlowNodeCreateManyFlowInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlowNodeCreateManyInput = {
  botFlowVersionId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  templateNodeId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeCreateManyTemplateNodeInput = {
  botFlowVersionId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeCreateManyTemplateNodeInputEnvelope = {
  data: Array<FlowNodeCreateManyTemplateNodeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlowNodeCreateNestedManyWithoutFlowInput = {
  connect?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowNodeCreateOrConnectWithoutFlowInput>>;
  create?: InputMaybe<Array<FlowNodeCreateWithoutFlowInput>>;
  createMany?: InputMaybe<FlowNodeCreateManyFlowInputEnvelope>;
};

export type FlowNodeCreateNestedManyWithoutTemplateNodeInput = {
  connect?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowNodeCreateOrConnectWithoutTemplateNodeInput>>;
  create?: InputMaybe<Array<FlowNodeCreateWithoutTemplateNodeInput>>;
  createMany?: InputMaybe<FlowNodeCreateManyTemplateNodeInputEnvelope>;
};

export type FlowNodeCreateNestedOneWithoutInfoInput = {
  connect?: InputMaybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowNodeCreateOrConnectWithoutInfoInput>;
  create?: InputMaybe<FlowNodeCreateWithoutInfoInput>;
};

export type FlowNodeCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowNodeCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<FlowNodeCreateWithoutNodePropsInput>;
};

export type FlowNodeCreateNestedOneWithoutPortsInput = {
  connect?: InputMaybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowNodeCreateOrConnectWithoutPortsInput>;
  create?: InputMaybe<FlowNodeCreateWithoutPortsInput>;
};

export type FlowNodeCreateOrConnectWithoutFlowInput = {
  create: FlowNodeCreateWithoutFlowInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeCreateOrConnectWithoutInfoInput = {
  create: FlowNodeCreateWithoutInfoInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeCreateOrConnectWithoutNodePropsInput = {
  create: FlowNodeCreateWithoutNodePropsInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeCreateOrConnectWithoutPortsInput = {
  create: FlowNodeCreateWithoutPortsInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeCreateOrConnectWithoutTemplateNodeInput = {
  create: FlowNodeCreateWithoutTemplateNodeInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeCreateWithoutFlowInput = {
  NodeProps: NodePropsCreateNestedOneWithoutFlowNodeInput;
  info: NodeInfoCreateNestedOneWithoutFlowNodeInput;
  ports?: InputMaybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutInfoInput = {
  NodeProps: NodePropsCreateNestedOneWithoutFlowNodeInput;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  ports?: InputMaybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutNodePropsInput = {
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info: NodeInfoCreateNestedOneWithoutFlowNodeInput;
  ports?: InputMaybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutPortsInput = {
  NodeProps: NodePropsCreateNestedOneWithoutFlowNodeInput;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info: NodeInfoCreateNestedOneWithoutFlowNodeInput;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutTemplateNodeInput = {
  NodeProps: NodePropsCreateNestedOneWithoutFlowNodeInput;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info: NodeInfoCreateNestedOneWithoutFlowNodeInput;
  ports?: InputMaybe<PortCreateNestedManyWithoutNodeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FlowNodeGroupBy = {
  __typename?: 'FlowNodeGroupBy';
  _avg?: Maybe<FlowNodeAvgAggregate>;
  _count?: Maybe<FlowNodeCountAggregate>;
  _max?: Maybe<FlowNodeMaxAggregate>;
  _min?: Maybe<FlowNodeMinAggregate>;
  _sum?: Maybe<FlowNodeSumAggregate>;
  botFlowVersionId: Scalars['Int'];
  id: Scalars['Int'];
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  templateNodeId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type FlowNodeListRelationFilter = {
  every?: InputMaybe<FlowNodeWhereInput>;
  none?: InputMaybe<FlowNodeWhereInput>;
  some?: InputMaybe<FlowNodeWhereInput>;
};

export type FlowNodeMaxAggregate = {
  __typename?: 'FlowNodeMaxAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nodeInfoId?: Maybe<Scalars['Int']>;
  nodePropsId?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeMaxOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  templateNodeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FlowNodeMinAggregate = {
  __typename?: 'FlowNodeMinAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nodeInfoId?: Maybe<Scalars['Int']>;
  nodePropsId?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeMinOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  templateNodeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FlowNodeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlowNodeOrderByWithAggregationInput = {
  _avg?: InputMaybe<FlowNodeAvgOrderByAggregateInput>;
  _count?: InputMaybe<FlowNodeCountOrderByAggregateInput>;
  _max?: InputMaybe<FlowNodeMaxOrderByAggregateInput>;
  _min?: InputMaybe<FlowNodeMinOrderByAggregateInput>;
  _sum?: InputMaybe<FlowNodeSumOrderByAggregateInput>;
  botFlowVersionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  templateNodeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FlowNodeOrderByWithRelationInput = {
  NodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  botFlowVersionId?: InputMaybe<SortOrder>;
  flow?: InputMaybe<BotFlowVersionOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<NodeInfoOrderByWithRelationInput>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  ports?: InputMaybe<PortOrderByRelationAggregateInput>;
  templateNode?: InputMaybe<TemplateNodeOrderByWithRelationInput>;
  templateNodeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FlowNodeRelationFilter = {
  is?: InputMaybe<FlowNodeWhereInput>;
  isNot?: InputMaybe<FlowNodeWhereInput>;
};

export enum FlowNodeScalarFieldEnum {
  BotFlowVersionId = 'botFlowVersionId',
  Id = 'id',
  NodeInfoId = 'nodeInfoId',
  NodePropsId = 'nodePropsId',
  TemplateNodeId = 'templateNodeId',
  UpdatedAt = 'updatedAt'
}

export type FlowNodeScalarWhereInput = {
  AND?: InputMaybe<Array<FlowNodeScalarWhereInput>>;
  NOT?: InputMaybe<Array<FlowNodeScalarWhereInput>>;
  OR?: InputMaybe<Array<FlowNodeScalarWhereInput>>;
  botFlowVersionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  nodeInfoId?: InputMaybe<IntFilter>;
  nodePropsId?: InputMaybe<IntFilter>;
  templateNodeId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FlowNodeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FlowNodeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FlowNodeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FlowNodeScalarWhereWithAggregatesInput>>;
  botFlowVersionId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  nodeInfoId?: InputMaybe<IntWithAggregatesFilter>;
  nodePropsId?: InputMaybe<IntWithAggregatesFilter>;
  templateNodeId?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type FlowNodeSumAggregate = {
  __typename?: 'FlowNodeSumAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nodeInfoId?: Maybe<Scalars['Int']>;
  nodePropsId?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
};

export type FlowNodeSumOrderByAggregateInput = {
  botFlowVersionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  templateNodeId?: InputMaybe<SortOrder>;
};

export type FlowNodeUpdateInput = {
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutFlowNodeInput>;
  flow?: InputMaybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutFlowNodeInput>;
  ports?: InputMaybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateManyMutationInput = {
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateManyWithWhereWithoutFlowInput = {
  data: FlowNodeUpdateManyMutationInput;
  where: FlowNodeScalarWhereInput;
};

export type FlowNodeUpdateManyWithWhereWithoutTemplateNodeInput = {
  data: FlowNodeUpdateManyMutationInput;
  where: FlowNodeScalarWhereInput;
};

export type FlowNodeUpdateManyWithoutFlowInput = {
  connect?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowNodeCreateOrConnectWithoutFlowInput>>;
  create?: InputMaybe<Array<FlowNodeCreateWithoutFlowInput>>;
  createMany?: InputMaybe<FlowNodeCreateManyFlowInputEnvelope>;
  delete?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowNodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowNodeUpdateWithWhereUniqueWithoutFlowInput>>;
  updateMany?: InputMaybe<Array<FlowNodeUpdateManyWithWhereWithoutFlowInput>>;
  upsert?: InputMaybe<Array<FlowNodeUpsertWithWhereUniqueWithoutFlowInput>>;
};

export type FlowNodeUpdateManyWithoutTemplateNodeInput = {
  connect?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowNodeCreateOrConnectWithoutTemplateNodeInput>>;
  create?: InputMaybe<Array<FlowNodeCreateWithoutTemplateNodeInput>>;
  createMany?: InputMaybe<FlowNodeCreateManyTemplateNodeInputEnvelope>;
  delete?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowNodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowNodeWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowNodeUpdateWithWhereUniqueWithoutTemplateNodeInput>>;
  updateMany?: InputMaybe<Array<FlowNodeUpdateManyWithWhereWithoutTemplateNodeInput>>;
  upsert?: InputMaybe<Array<FlowNodeUpsertWithWhereUniqueWithoutTemplateNodeInput>>;
};

export type FlowNodeUpdateOneRequiredWithoutPortsInput = {
  connect?: InputMaybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowNodeCreateOrConnectWithoutPortsInput>;
  create?: InputMaybe<FlowNodeCreateWithoutPortsInput>;
  update?: InputMaybe<FlowNodeUpdateWithoutPortsInput>;
  upsert?: InputMaybe<FlowNodeUpsertWithoutPortsInput>;
};

export type FlowNodeUpdateOneWithoutInfoInput = {
  connect?: InputMaybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowNodeCreateOrConnectWithoutInfoInput>;
  create?: InputMaybe<FlowNodeCreateWithoutInfoInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FlowNodeUpdateWithoutInfoInput>;
  upsert?: InputMaybe<FlowNodeUpsertWithoutInfoInput>;
};

export type FlowNodeUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowNodeCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<FlowNodeCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FlowNodeUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<FlowNodeUpsertWithoutNodePropsInput>;
};

export type FlowNodeUpdateWithWhereUniqueWithoutFlowInput = {
  data: FlowNodeUpdateWithoutFlowInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeUpdateWithWhereUniqueWithoutTemplateNodeInput = {
  data: FlowNodeUpdateWithoutTemplateNodeInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeUpdateWithoutFlowInput = {
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutFlowNodeInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutFlowNodeInput>;
  ports?: InputMaybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutInfoInput = {
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutFlowNodeInput>;
  flow?: InputMaybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  ports?: InputMaybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutNodePropsInput = {
  flow?: InputMaybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutFlowNodeInput>;
  ports?: InputMaybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutPortsInput = {
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutFlowNodeInput>;
  flow?: InputMaybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutFlowNodeInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutTemplateNodeInput = {
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutFlowNodeInput>;
  flow?: InputMaybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutFlowNodeInput>;
  ports?: InputMaybe<PortUpdateManyWithoutNodeInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpsertWithWhereUniqueWithoutFlowInput = {
  create: FlowNodeCreateWithoutFlowInput;
  update: FlowNodeUpdateWithoutFlowInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeUpsertWithWhereUniqueWithoutTemplateNodeInput = {
  create: FlowNodeCreateWithoutTemplateNodeInput;
  update: FlowNodeUpdateWithoutTemplateNodeInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeUpsertWithoutInfoInput = {
  create: FlowNodeCreateWithoutInfoInput;
  update: FlowNodeUpdateWithoutInfoInput;
};

export type FlowNodeUpsertWithoutNodePropsInput = {
  create: FlowNodeCreateWithoutNodePropsInput;
  update: FlowNodeUpdateWithoutNodePropsInput;
};

export type FlowNodeUpsertWithoutPortsInput = {
  create: FlowNodeCreateWithoutPortsInput;
  update: FlowNodeUpdateWithoutPortsInput;
};

export type FlowNodeWhereInput = {
  AND?: InputMaybe<Array<FlowNodeWhereInput>>;
  NOT?: InputMaybe<Array<FlowNodeWhereInput>>;
  NodeProps?: InputMaybe<NodePropsRelationFilter>;
  OR?: InputMaybe<Array<FlowNodeWhereInput>>;
  botFlowVersionId?: InputMaybe<IntFilter>;
  flow?: InputMaybe<BotFlowVersionRelationFilter>;
  id?: InputMaybe<IntFilter>;
  info?: InputMaybe<NodeInfoRelationFilter>;
  nodeInfoId?: InputMaybe<IntFilter>;
  nodePropsId?: InputMaybe<IntFilter>;
  ports?: InputMaybe<PortListRelationFilter>;
  templateNode?: InputMaybe<TemplateNodeRelationFilter>;
  templateNodeId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FlowNodeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  nodeInfoId?: InputMaybe<Scalars['Int']>;
  nodePropsId?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBotFlow: BotFlow;
  createBotFlowVersion: BotFlowVersion;
  createConnection: Connection;
  createFlowNode: FlowNode;
  createManyBotFlow: AffectedRowsOutput;
  createManyBotFlowVersion: AffectedRowsOutput;
  createManyConnection: AffectedRowsOutput;
  createManyFlowNode: AffectedRowsOutput;
  createManyNodeAudioProps: AffectedRowsOutput;
  createManyNodeCountdownProps: AffectedRowsOutput;
  createManyNodeFileProps: AffectedRowsOutput;
  createManyNodeImageProps: AffectedRowsOutput;
  createManyNodeInfo: AffectedRowsOutput;
  createManyNodeLinkProps: AffectedRowsOutput;
  createManyNodeProps: AffectedRowsOutput;
  createManyNodeSwitchOptionProps: AffectedRowsOutput;
  createManyNodeSwitchProps: AffectedRowsOutput;
  createManyNodeTextProps: AffectedRowsOutput;
  createManyNodeVideoProps: AffectedRowsOutput;
  createManyNodeWaitProps: AffectedRowsOutput;
  createManyPort: AffectedRowsOutput;
  createManyTemplateNode: AffectedRowsOutput;
  createManyTemplateNodesGroup: AffectedRowsOutput;
  createNodeAudioProps: NodeAudioProps;
  createNodeCountdownProps: NodeCountdownProps;
  createNodeFileProps: NodeFileProps;
  createNodeImageProps: NodeImageProps;
  createNodeInfo: NodeInfo;
  createNodeLinkProps: NodeLinkProps;
  createNodeProps: NodeProps;
  createNodeSwitchOptionProps: NodeSwitchOptionProps;
  createNodeSwitchProps: NodeSwitchProps;
  createNodeTextProps: NodeTextProps;
  createNodeVideoProps: NodeVideoProps;
  createNodeWaitProps: NodeWaitProps;
  createPort: Port;
  createTemplateNode: TemplateNode;
  createTemplateNodesGroup: TemplateNodesGroup;
  deleteBotFlow?: Maybe<BotFlow>;
  deleteBotFlowVersion?: Maybe<BotFlowVersion>;
  deleteConnection?: Maybe<Connection>;
  deleteFlowNode?: Maybe<FlowNode>;
  deleteManyBotFlow: AffectedRowsOutput;
  deleteManyBotFlowVersion: AffectedRowsOutput;
  deleteManyConnection: AffectedRowsOutput;
  deleteManyFlowNode: AffectedRowsOutput;
  deleteManyNodeAudioProps: AffectedRowsOutput;
  deleteManyNodeCountdownProps: AffectedRowsOutput;
  deleteManyNodeFileProps: AffectedRowsOutput;
  deleteManyNodeImageProps: AffectedRowsOutput;
  deleteManyNodeInfo: AffectedRowsOutput;
  deleteManyNodeLinkProps: AffectedRowsOutput;
  deleteManyNodeProps: AffectedRowsOutput;
  deleteManyNodeSwitchOptionProps: AffectedRowsOutput;
  deleteManyNodeSwitchProps: AffectedRowsOutput;
  deleteManyNodeTextProps: AffectedRowsOutput;
  deleteManyNodeVideoProps: AffectedRowsOutput;
  deleteManyNodeWaitProps: AffectedRowsOutput;
  deleteManyPort: AffectedRowsOutput;
  deleteManyTemplateNode: AffectedRowsOutput;
  deleteManyTemplateNodesGroup: AffectedRowsOutput;
  deleteNodeAudioProps?: Maybe<NodeAudioProps>;
  deleteNodeCountdownProps?: Maybe<NodeCountdownProps>;
  deleteNodeFileProps?: Maybe<NodeFileProps>;
  deleteNodeImageProps?: Maybe<NodeImageProps>;
  deleteNodeInfo?: Maybe<NodeInfo>;
  deleteNodeLinkProps?: Maybe<NodeLinkProps>;
  deleteNodeProps?: Maybe<NodeProps>;
  deleteNodeSwitchOptionProps?: Maybe<NodeSwitchOptionProps>;
  deleteNodeSwitchProps?: Maybe<NodeSwitchProps>;
  deleteNodeTextProps?: Maybe<NodeTextProps>;
  deleteNodeVideoProps?: Maybe<NodeVideoProps>;
  deleteNodeWaitProps?: Maybe<NodeWaitProps>;
  deletePort?: Maybe<Port>;
  deleteTemplateNode?: Maybe<TemplateNode>;
  deleteTemplateNodesGroup?: Maybe<TemplateNodesGroup>;
  updateBotFlow?: Maybe<BotFlow>;
  updateBotFlowVersion?: Maybe<BotFlowVersion>;
  updateConnection?: Maybe<Connection>;
  updateFlowNode?: Maybe<FlowNode>;
  updateManyBotFlow: AffectedRowsOutput;
  updateManyBotFlowVersion: AffectedRowsOutput;
  updateManyConnection: AffectedRowsOutput;
  updateManyFlowNode: AffectedRowsOutput;
  updateManyNodeAudioProps: AffectedRowsOutput;
  updateManyNodeCountdownProps: AffectedRowsOutput;
  updateManyNodeFileProps: AffectedRowsOutput;
  updateManyNodeImageProps: AffectedRowsOutput;
  updateManyNodeInfo: AffectedRowsOutput;
  updateManyNodeLinkProps: AffectedRowsOutput;
  updateManyNodeProps: AffectedRowsOutput;
  updateManyNodeSwitchOptionProps: AffectedRowsOutput;
  updateManyNodeSwitchProps: AffectedRowsOutput;
  updateManyNodeTextProps: AffectedRowsOutput;
  updateManyNodeVideoProps: AffectedRowsOutput;
  updateManyNodeWaitProps: AffectedRowsOutput;
  updateManyPort: AffectedRowsOutput;
  updateManyTemplateNode: AffectedRowsOutput;
  updateManyTemplateNodesGroup: AffectedRowsOutput;
  updateNodeAudioProps?: Maybe<NodeAudioProps>;
  updateNodeCountdownProps?: Maybe<NodeCountdownProps>;
  updateNodeFileProps?: Maybe<NodeFileProps>;
  updateNodeImageProps?: Maybe<NodeImageProps>;
  updateNodeInfo?: Maybe<NodeInfo>;
  updateNodeLinkProps?: Maybe<NodeLinkProps>;
  updateNodeProps?: Maybe<NodeProps>;
  updateNodeSwitchOptionProps?: Maybe<NodeSwitchOptionProps>;
  updateNodeSwitchProps?: Maybe<NodeSwitchProps>;
  updateNodeTextProps?: Maybe<NodeTextProps>;
  updateNodeVideoProps?: Maybe<NodeVideoProps>;
  updateNodeWaitProps?: Maybe<NodeWaitProps>;
  updatePort?: Maybe<Port>;
  updateTemplateNode?: Maybe<TemplateNode>;
  updateTemplateNodesGroup?: Maybe<TemplateNodesGroup>;
  upsertBotFlow: BotFlow;
  upsertBotFlowVersion: BotFlowVersion;
  upsertConnection: Connection;
  upsertFlowNode: FlowNode;
  upsertNodeAudioProps: NodeAudioProps;
  upsertNodeCountdownProps: NodeCountdownProps;
  upsertNodeFileProps: NodeFileProps;
  upsertNodeImageProps: NodeImageProps;
  upsertNodeInfo: NodeInfo;
  upsertNodeLinkProps: NodeLinkProps;
  upsertNodeProps: NodeProps;
  upsertNodeSwitchOptionProps: NodeSwitchOptionProps;
  upsertNodeSwitchProps: NodeSwitchProps;
  upsertNodeTextProps: NodeTextProps;
  upsertNodeVideoProps: NodeVideoProps;
  upsertNodeWaitProps: NodeWaitProps;
  upsertPort: Port;
  upsertTemplateNode: TemplateNode;
  upsertTemplateNodesGroup: TemplateNodesGroup;
};


export type MutationCreateBotFlowArgs = {
  data: BotFlowCreateInput;
};


export type MutationCreateBotFlowVersionArgs = {
  data: BotFlowVersionCreateInput;
};


export type MutationCreateConnectionArgs = {
  data: ConnectionCreateInput;
};


export type MutationCreateFlowNodeArgs = {
  data: FlowNodeCreateInput;
};


export type MutationCreateManyBotFlowArgs = {
  data: Array<BotFlowCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyBotFlowVersionArgs = {
  data: Array<BotFlowVersionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyConnectionArgs = {
  data: Array<ConnectionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFlowNodeArgs = {
  data: Array<FlowNodeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeAudioPropsArgs = {
  data: Array<NodeAudioPropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeCountdownPropsArgs = {
  data: Array<NodeCountdownPropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeFilePropsArgs = {
  data: Array<NodeFilePropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeImagePropsArgs = {
  data: Array<NodeImagePropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeInfoArgs = {
  data: Array<NodeInfoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeLinkPropsArgs = {
  data: Array<NodeLinkPropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodePropsArgs = {
  data: Array<NodePropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeSwitchOptionPropsArgs = {
  data: Array<NodeSwitchOptionPropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeSwitchPropsArgs = {
  data: Array<NodeSwitchPropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeTextPropsArgs = {
  data: Array<NodeTextPropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeVideoPropsArgs = {
  data: Array<NodeVideoPropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNodeWaitPropsArgs = {
  data: Array<NodeWaitPropsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPortArgs = {
  data: Array<PortCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTemplateNodeArgs = {
  data: Array<TemplateNodeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTemplateNodesGroupArgs = {
  data: Array<TemplateNodesGroupCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateNodeAudioPropsArgs = {
  data: NodeAudioPropsCreateInput;
};


export type MutationCreateNodeCountdownPropsArgs = {
  data: NodeCountdownPropsCreateInput;
};


export type MutationCreateNodeFilePropsArgs = {
  data: NodeFilePropsCreateInput;
};


export type MutationCreateNodeImagePropsArgs = {
  data: NodeImagePropsCreateInput;
};


export type MutationCreateNodeInfoArgs = {
  data: NodeInfoCreateInput;
};


export type MutationCreateNodeLinkPropsArgs = {
  data: NodeLinkPropsCreateInput;
};


export type MutationCreateNodePropsArgs = {
  data: NodePropsCreateInput;
};


export type MutationCreateNodeSwitchOptionPropsArgs = {
  data: NodeSwitchOptionPropsCreateInput;
};


export type MutationCreateNodeSwitchPropsArgs = {
  data: NodeSwitchPropsCreateInput;
};


export type MutationCreateNodeTextPropsArgs = {
  data: NodeTextPropsCreateInput;
};


export type MutationCreateNodeVideoPropsArgs = {
  data: NodeVideoPropsCreateInput;
};


export type MutationCreateNodeWaitPropsArgs = {
  data: NodeWaitPropsCreateInput;
};


export type MutationCreatePortArgs = {
  data: PortCreateInput;
};


export type MutationCreateTemplateNodeArgs = {
  data: TemplateNodeCreateInput;
};


export type MutationCreateTemplateNodesGroupArgs = {
  data: TemplateNodesGroupCreateInput;
};


export type MutationDeleteBotFlowArgs = {
  where: BotFlowWhereUniqueInput;
};


export type MutationDeleteBotFlowVersionArgs = {
  where: BotFlowVersionWhereUniqueInput;
};


export type MutationDeleteConnectionArgs = {
  where: ConnectionWhereUniqueInput;
};


export type MutationDeleteFlowNodeArgs = {
  where: FlowNodeWhereUniqueInput;
};


export type MutationDeleteManyBotFlowArgs = {
  where?: InputMaybe<BotFlowWhereInput>;
};


export type MutationDeleteManyBotFlowVersionArgs = {
  where?: InputMaybe<BotFlowVersionWhereInput>;
};


export type MutationDeleteManyConnectionArgs = {
  where?: InputMaybe<ConnectionWhereInput>;
};


export type MutationDeleteManyFlowNodeArgs = {
  where?: InputMaybe<FlowNodeWhereInput>;
};


export type MutationDeleteManyNodeAudioPropsArgs = {
  where?: InputMaybe<NodeAudioPropsWhereInput>;
};


export type MutationDeleteManyNodeCountdownPropsArgs = {
  where?: InputMaybe<NodeCountdownPropsWhereInput>;
};


export type MutationDeleteManyNodeFilePropsArgs = {
  where?: InputMaybe<NodeFilePropsWhereInput>;
};


export type MutationDeleteManyNodeImagePropsArgs = {
  where?: InputMaybe<NodeImagePropsWhereInput>;
};


export type MutationDeleteManyNodeInfoArgs = {
  where?: InputMaybe<NodeInfoWhereInput>;
};


export type MutationDeleteManyNodeLinkPropsArgs = {
  where?: InputMaybe<NodeLinkPropsWhereInput>;
};


export type MutationDeleteManyNodePropsArgs = {
  where?: InputMaybe<NodePropsWhereInput>;
};


export type MutationDeleteManyNodeSwitchOptionPropsArgs = {
  where?: InputMaybe<NodeSwitchOptionPropsWhereInput>;
};


export type MutationDeleteManyNodeSwitchPropsArgs = {
  where?: InputMaybe<NodeSwitchPropsWhereInput>;
};


export type MutationDeleteManyNodeTextPropsArgs = {
  where?: InputMaybe<NodeTextPropsWhereInput>;
};


export type MutationDeleteManyNodeVideoPropsArgs = {
  where?: InputMaybe<NodeVideoPropsWhereInput>;
};


export type MutationDeleteManyNodeWaitPropsArgs = {
  where?: InputMaybe<NodeWaitPropsWhereInput>;
};


export type MutationDeleteManyPortArgs = {
  where?: InputMaybe<PortWhereInput>;
};


export type MutationDeleteManyTemplateNodeArgs = {
  where?: InputMaybe<TemplateNodeWhereInput>;
};


export type MutationDeleteManyTemplateNodesGroupArgs = {
  where?: InputMaybe<TemplateNodesGroupWhereInput>;
};


export type MutationDeleteNodeAudioPropsArgs = {
  where: NodeAudioPropsWhereUniqueInput;
};


export type MutationDeleteNodeCountdownPropsArgs = {
  where: NodeCountdownPropsWhereUniqueInput;
};


export type MutationDeleteNodeFilePropsArgs = {
  where: NodeFilePropsWhereUniqueInput;
};


export type MutationDeleteNodeImagePropsArgs = {
  where: NodeImagePropsWhereUniqueInput;
};


export type MutationDeleteNodeInfoArgs = {
  where: NodeInfoWhereUniqueInput;
};


export type MutationDeleteNodeLinkPropsArgs = {
  where: NodeLinkPropsWhereUniqueInput;
};


export type MutationDeleteNodePropsArgs = {
  where: NodePropsWhereUniqueInput;
};


export type MutationDeleteNodeSwitchOptionPropsArgs = {
  where: NodeSwitchOptionPropsWhereUniqueInput;
};


export type MutationDeleteNodeSwitchPropsArgs = {
  where: NodeSwitchPropsWhereUniqueInput;
};


export type MutationDeleteNodeTextPropsArgs = {
  where: NodeTextPropsWhereUniqueInput;
};


export type MutationDeleteNodeVideoPropsArgs = {
  where: NodeVideoPropsWhereUniqueInput;
};


export type MutationDeleteNodeWaitPropsArgs = {
  where: NodeWaitPropsWhereUniqueInput;
};


export type MutationDeletePortArgs = {
  where: PortWhereUniqueInput;
};


export type MutationDeleteTemplateNodeArgs = {
  where: TemplateNodeWhereUniqueInput;
};


export type MutationDeleteTemplateNodesGroupArgs = {
  where: TemplateNodesGroupWhereUniqueInput;
};


export type MutationUpdateBotFlowArgs = {
  data: BotFlowUpdateInput;
  where: BotFlowWhereUniqueInput;
};


export type MutationUpdateBotFlowVersionArgs = {
  data: BotFlowVersionUpdateInput;
  where: BotFlowVersionWhereUniqueInput;
};


export type MutationUpdateConnectionArgs = {
  data: ConnectionUpdateInput;
  where: ConnectionWhereUniqueInput;
};


export type MutationUpdateFlowNodeArgs = {
  data: FlowNodeUpdateInput;
  where: FlowNodeWhereUniqueInput;
};


export type MutationUpdateManyBotFlowArgs = {
  data: BotFlowUpdateManyMutationInput;
  where?: InputMaybe<BotFlowWhereInput>;
};


export type MutationUpdateManyBotFlowVersionArgs = {
  data: BotFlowVersionUpdateManyMutationInput;
  where?: InputMaybe<BotFlowVersionWhereInput>;
};


export type MutationUpdateManyConnectionArgs = {
  data: ConnectionUpdateManyMutationInput;
  where?: InputMaybe<ConnectionWhereInput>;
};


export type MutationUpdateManyFlowNodeArgs = {
  data: FlowNodeUpdateManyMutationInput;
  where?: InputMaybe<FlowNodeWhereInput>;
};


export type MutationUpdateManyNodeAudioPropsArgs = {
  data: NodeAudioPropsUpdateManyMutationInput;
  where?: InputMaybe<NodeAudioPropsWhereInput>;
};


export type MutationUpdateManyNodeCountdownPropsArgs = {
  data: NodeCountdownPropsUpdateManyMutationInput;
  where?: InputMaybe<NodeCountdownPropsWhereInput>;
};


export type MutationUpdateManyNodeFilePropsArgs = {
  data: NodeFilePropsUpdateManyMutationInput;
  where?: InputMaybe<NodeFilePropsWhereInput>;
};


export type MutationUpdateManyNodeImagePropsArgs = {
  data: NodeImagePropsUpdateManyMutationInput;
  where?: InputMaybe<NodeImagePropsWhereInput>;
};


export type MutationUpdateManyNodeInfoArgs = {
  data: NodeInfoUpdateManyMutationInput;
  where?: InputMaybe<NodeInfoWhereInput>;
};


export type MutationUpdateManyNodeLinkPropsArgs = {
  data: NodeLinkPropsUpdateManyMutationInput;
  where?: InputMaybe<NodeLinkPropsWhereInput>;
};


export type MutationUpdateManyNodePropsArgs = {
  data: NodePropsUpdateManyMutationInput;
  where?: InputMaybe<NodePropsWhereInput>;
};


export type MutationUpdateManyNodeSwitchOptionPropsArgs = {
  data: NodeSwitchOptionPropsUpdateManyMutationInput;
  where?: InputMaybe<NodeSwitchOptionPropsWhereInput>;
};


export type MutationUpdateManyNodeSwitchPropsArgs = {
  data: NodeSwitchPropsUpdateManyMutationInput;
  where?: InputMaybe<NodeSwitchPropsWhereInput>;
};


export type MutationUpdateManyNodeTextPropsArgs = {
  data: NodeTextPropsUpdateManyMutationInput;
  where?: InputMaybe<NodeTextPropsWhereInput>;
};


export type MutationUpdateManyNodeVideoPropsArgs = {
  data: NodeVideoPropsUpdateManyMutationInput;
  where?: InputMaybe<NodeVideoPropsWhereInput>;
};


export type MutationUpdateManyNodeWaitPropsArgs = {
  data: NodeWaitPropsUpdateManyMutationInput;
  where?: InputMaybe<NodeWaitPropsWhereInput>;
};


export type MutationUpdateManyPortArgs = {
  data: PortUpdateManyMutationInput;
  where?: InputMaybe<PortWhereInput>;
};


export type MutationUpdateManyTemplateNodeArgs = {
  data: TemplateNodeUpdateManyMutationInput;
  where?: InputMaybe<TemplateNodeWhereInput>;
};


export type MutationUpdateManyTemplateNodesGroupArgs = {
  data: TemplateNodesGroupUpdateManyMutationInput;
  where?: InputMaybe<TemplateNodesGroupWhereInput>;
};


export type MutationUpdateNodeAudioPropsArgs = {
  data: NodeAudioPropsUpdateInput;
  where: NodeAudioPropsWhereUniqueInput;
};


export type MutationUpdateNodeCountdownPropsArgs = {
  data: NodeCountdownPropsUpdateInput;
  where: NodeCountdownPropsWhereUniqueInput;
};


export type MutationUpdateNodeFilePropsArgs = {
  data: NodeFilePropsUpdateInput;
  where: NodeFilePropsWhereUniqueInput;
};


export type MutationUpdateNodeImagePropsArgs = {
  data: NodeImagePropsUpdateInput;
  where: NodeImagePropsWhereUniqueInput;
};


export type MutationUpdateNodeInfoArgs = {
  data: NodeInfoUpdateInput;
  where: NodeInfoWhereUniqueInput;
};


export type MutationUpdateNodeLinkPropsArgs = {
  data: NodeLinkPropsUpdateInput;
  where: NodeLinkPropsWhereUniqueInput;
};


export type MutationUpdateNodePropsArgs = {
  data: NodePropsUpdateInput;
  where: NodePropsWhereUniqueInput;
};


export type MutationUpdateNodeSwitchOptionPropsArgs = {
  data: NodeSwitchOptionPropsUpdateInput;
  where: NodeSwitchOptionPropsWhereUniqueInput;
};


export type MutationUpdateNodeSwitchPropsArgs = {
  data: NodeSwitchPropsUpdateInput;
  where: NodeSwitchPropsWhereUniqueInput;
};


export type MutationUpdateNodeTextPropsArgs = {
  data: NodeTextPropsUpdateInput;
  where: NodeTextPropsWhereUniqueInput;
};


export type MutationUpdateNodeVideoPropsArgs = {
  data: NodeVideoPropsUpdateInput;
  where: NodeVideoPropsWhereUniqueInput;
};


export type MutationUpdateNodeWaitPropsArgs = {
  data: NodeWaitPropsUpdateInput;
  where: NodeWaitPropsWhereUniqueInput;
};


export type MutationUpdatePortArgs = {
  data: PortUpdateInput;
  where: PortWhereUniqueInput;
};


export type MutationUpdateTemplateNodeArgs = {
  data: TemplateNodeUpdateInput;
  where: TemplateNodeWhereUniqueInput;
};


export type MutationUpdateTemplateNodesGroupArgs = {
  data: TemplateNodesGroupUpdateInput;
  where: TemplateNodesGroupWhereUniqueInput;
};


export type MutationUpsertBotFlowArgs = {
  create: BotFlowCreateInput;
  update: BotFlowUpdateInput;
  where: BotFlowWhereUniqueInput;
};


export type MutationUpsertBotFlowVersionArgs = {
  create: BotFlowVersionCreateInput;
  update: BotFlowVersionUpdateInput;
  where: BotFlowVersionWhereUniqueInput;
};


export type MutationUpsertConnectionArgs = {
  create: ConnectionCreateInput;
  update: ConnectionUpdateInput;
  where: ConnectionWhereUniqueInput;
};


export type MutationUpsertFlowNodeArgs = {
  create: FlowNodeCreateInput;
  update: FlowNodeUpdateInput;
  where: FlowNodeWhereUniqueInput;
};


export type MutationUpsertNodeAudioPropsArgs = {
  create: NodeAudioPropsCreateInput;
  update: NodeAudioPropsUpdateInput;
  where: NodeAudioPropsWhereUniqueInput;
};


export type MutationUpsertNodeCountdownPropsArgs = {
  create: NodeCountdownPropsCreateInput;
  update: NodeCountdownPropsUpdateInput;
  where: NodeCountdownPropsWhereUniqueInput;
};


export type MutationUpsertNodeFilePropsArgs = {
  create: NodeFilePropsCreateInput;
  update: NodeFilePropsUpdateInput;
  where: NodeFilePropsWhereUniqueInput;
};


export type MutationUpsertNodeImagePropsArgs = {
  create: NodeImagePropsCreateInput;
  update: NodeImagePropsUpdateInput;
  where: NodeImagePropsWhereUniqueInput;
};


export type MutationUpsertNodeInfoArgs = {
  create: NodeInfoCreateInput;
  update: NodeInfoUpdateInput;
  where: NodeInfoWhereUniqueInput;
};


export type MutationUpsertNodeLinkPropsArgs = {
  create: NodeLinkPropsCreateInput;
  update: NodeLinkPropsUpdateInput;
  where: NodeLinkPropsWhereUniqueInput;
};


export type MutationUpsertNodePropsArgs = {
  create: NodePropsCreateInput;
  update: NodePropsUpdateInput;
  where: NodePropsWhereUniqueInput;
};


export type MutationUpsertNodeSwitchOptionPropsArgs = {
  create: NodeSwitchOptionPropsCreateInput;
  update: NodeSwitchOptionPropsUpdateInput;
  where: NodeSwitchOptionPropsWhereUniqueInput;
};


export type MutationUpsertNodeSwitchPropsArgs = {
  create: NodeSwitchPropsCreateInput;
  update: NodeSwitchPropsUpdateInput;
  where: NodeSwitchPropsWhereUniqueInput;
};


export type MutationUpsertNodeTextPropsArgs = {
  create: NodeTextPropsCreateInput;
  update: NodeTextPropsUpdateInput;
  where: NodeTextPropsWhereUniqueInput;
};


export type MutationUpsertNodeVideoPropsArgs = {
  create: NodeVideoPropsCreateInput;
  update: NodeVideoPropsUpdateInput;
  where: NodeVideoPropsWhereUniqueInput;
};


export type MutationUpsertNodeWaitPropsArgs = {
  create: NodeWaitPropsCreateInput;
  update: NodeWaitPropsUpdateInput;
  where: NodeWaitPropsWhereUniqueInput;
};


export type MutationUpsertPortArgs = {
  create: PortCreateInput;
  update: PortUpdateInput;
  where: PortWhereUniqueInput;
};


export type MutationUpsertTemplateNodeArgs = {
  create: TemplateNodeCreateInput;
  update: TemplateNodeUpdateInput;
  where: TemplateNodeWhereUniqueInput;
};


export type MutationUpsertTemplateNodesGroupArgs = {
  create: TemplateNodesGroupCreateInput;
  update: TemplateNodesGroupUpdateInput;
  where: TemplateNodesGroupWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumNodeTypeFilter = {
  equals?: InputMaybe<NodeType>;
  in?: InputMaybe<Array<NodeType>>;
  not?: InputMaybe<NestedEnumNodeTypeFilter>;
  notIn?: InputMaybe<Array<NodeType>>;
};

export type NestedEnumNodeTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumNodeTypeFilter>;
  _min?: InputMaybe<NestedEnumNodeTypeFilter>;
  equals?: InputMaybe<NodeType>;
  in?: InputMaybe<Array<NodeType>>;
  not?: InputMaybe<NestedEnumNodeTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<NodeType>>;
};

export type NestedEnumSwitchDisplayTypeFilter = {
  equals?: InputMaybe<SwitchDisplayType>;
  in?: InputMaybe<Array<SwitchDisplayType>>;
  not?: InputMaybe<NestedEnumSwitchDisplayTypeFilter>;
  notIn?: InputMaybe<Array<SwitchDisplayType>>;
};

export type NestedEnumSwitchDisplayTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSwitchDisplayTypeFilter>;
  _min?: InputMaybe<NestedEnumSwitchDisplayTypeFilter>;
  equals?: InputMaybe<SwitchDisplayType>;
  in?: InputMaybe<Array<SwitchDisplayType>>;
  not?: InputMaybe<NestedEnumSwitchDisplayTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<SwitchDisplayType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NodeAudioProps = {
  __typename?: 'NodeAudioProps';
  id: Scalars['Int'];
  nodeProps: NodeProps;
  src: Scalars['String'];
};

export type NodeAudioPropsAvgAggregate = {
  __typename?: 'NodeAudioPropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeAudioPropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeAudioPropsCountAggregate = {
  __typename?: 'NodeAudioPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeAudioPropsCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeAudioPropsCreateInput = {
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeAudioPropsInput>;
  src: Scalars['String'];
};

export type NodeAudioPropsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
};

export type NodeAudioPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeAudioPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeAudioPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeAudioPropsCreateWithoutNodePropsInput>;
};

export type NodeAudioPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeAudioPropsCreateWithoutNodePropsInput;
  where: NodeAudioPropsWhereUniqueInput;
};

export type NodeAudioPropsCreateWithoutNodePropsInput = {
  src: Scalars['String'];
};

export type NodeAudioPropsGroupBy = {
  __typename?: 'NodeAudioPropsGroupBy';
  _avg?: Maybe<NodeAudioPropsAvgAggregate>;
  _count?: Maybe<NodeAudioPropsCountAggregate>;
  _max?: Maybe<NodeAudioPropsMaxAggregate>;
  _min?: Maybe<NodeAudioPropsMinAggregate>;
  _sum?: Maybe<NodeAudioPropsSumAggregate>;
  id: Scalars['Int'];
  src: Scalars['String'];
};

export type NodeAudioPropsMaxAggregate = {
  __typename?: 'NodeAudioPropsMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeAudioPropsMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeAudioPropsMinAggregate = {
  __typename?: 'NodeAudioPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeAudioPropsMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeAudioPropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeAudioPropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeAudioPropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeAudioPropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeAudioPropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeAudioPropsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeAudioPropsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  src?: InputMaybe<SortOrder>;
};

export type NodeAudioPropsRelationFilter = {
  is?: InputMaybe<NodeAudioPropsWhereInput>;
  isNot?: InputMaybe<NodeAudioPropsWhereInput>;
};

export enum NodeAudioPropsScalarFieldEnum {
  Id = 'id',
  Src = 'src'
}

export type NodeAudioPropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeAudioPropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeAudioPropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeAudioPropsScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  src?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeAudioPropsSumAggregate = {
  __typename?: 'NodeAudioPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeAudioPropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeAudioPropsUpdateInput = {
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeAudioPropsInput>;
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeAudioPropsUpdateManyMutationInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeAudioPropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeAudioPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeAudioPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeAudioPropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeAudioPropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeAudioPropsUpsertWithoutNodePropsInput>;
};

export type NodeAudioPropsUpdateWithoutNodePropsInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeAudioPropsUpsertWithoutNodePropsInput = {
  create: NodeAudioPropsCreateWithoutNodePropsInput;
  update: NodeAudioPropsUpdateWithoutNodePropsInput;
};

export type NodeAudioPropsWhereInput = {
  AND?: InputMaybe<Array<NodeAudioPropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeAudioPropsWhereInput>>;
  OR?: InputMaybe<Array<NodeAudioPropsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  src?: InputMaybe<StringFilter>;
};

export type NodeAudioPropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeCountdownProps = {
  __typename?: 'NodeCountdownProps';
  duration: Scalars['Int'];
  id: Scalars['Int'];
  nodeProps: NodeProps;
};

export type NodeCountdownPropsAvgAggregate = {
  __typename?: 'NodeCountdownPropsAvgAggregate';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type NodeCountdownPropsAvgOrderByAggregateInput = {
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NodeCountdownPropsCountAggregate = {
  __typename?: 'NodeCountdownPropsCountAggregate';
  _all: Scalars['Int'];
  duration: Scalars['Int'];
  id: Scalars['Int'];
};

export type NodeCountdownPropsCountOrderByAggregateInput = {
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NodeCountdownPropsCreateInput = {
  duration: Scalars['Int'];
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeCountdownPropsInput>;
};

export type NodeCountdownPropsCreateManyInput = {
  duration: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeCountdownPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeCountdownPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeCountdownPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeCountdownPropsCreateWithoutNodePropsInput>;
};

export type NodeCountdownPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeCountdownPropsCreateWithoutNodePropsInput;
  where: NodeCountdownPropsWhereUniqueInput;
};

export type NodeCountdownPropsCreateWithoutNodePropsInput = {
  duration: Scalars['Int'];
};

export type NodeCountdownPropsGroupBy = {
  __typename?: 'NodeCountdownPropsGroupBy';
  _avg?: Maybe<NodeCountdownPropsAvgAggregate>;
  _count?: Maybe<NodeCountdownPropsCountAggregate>;
  _max?: Maybe<NodeCountdownPropsMaxAggregate>;
  _min?: Maybe<NodeCountdownPropsMinAggregate>;
  _sum?: Maybe<NodeCountdownPropsSumAggregate>;
  duration: Scalars['Int'];
  id: Scalars['Int'];
};

export type NodeCountdownPropsMaxAggregate = {
  __typename?: 'NodeCountdownPropsMaxAggregate';
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type NodeCountdownPropsMaxOrderByAggregateInput = {
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NodeCountdownPropsMinAggregate = {
  __typename?: 'NodeCountdownPropsMinAggregate';
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type NodeCountdownPropsMinOrderByAggregateInput = {
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NodeCountdownPropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeCountdownPropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeCountdownPropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeCountdownPropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeCountdownPropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeCountdownPropsSumOrderByAggregateInput>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NodeCountdownPropsOrderByWithRelationInput = {
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
};

export type NodeCountdownPropsRelationFilter = {
  is?: InputMaybe<NodeCountdownPropsWhereInput>;
  isNot?: InputMaybe<NodeCountdownPropsWhereInput>;
};

export enum NodeCountdownPropsScalarFieldEnum {
  Duration = 'duration',
  Id = 'id'
}

export type NodeCountdownPropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeCountdownPropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeCountdownPropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeCountdownPropsScalarWhereWithAggregatesInput>>;
  duration?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type NodeCountdownPropsSumAggregate = {
  __typename?: 'NodeCountdownPropsSumAggregate';
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type NodeCountdownPropsSumOrderByAggregateInput = {
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NodeCountdownPropsUpdateInput = {
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeCountdownPropsInput>;
};

export type NodeCountdownPropsUpdateManyMutationInput = {
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type NodeCountdownPropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeCountdownPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeCountdownPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeCountdownPropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeCountdownPropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeCountdownPropsUpsertWithoutNodePropsInput>;
};

export type NodeCountdownPropsUpdateWithoutNodePropsInput = {
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type NodeCountdownPropsUpsertWithoutNodePropsInput = {
  create: NodeCountdownPropsCreateWithoutNodePropsInput;
  update: NodeCountdownPropsUpdateWithoutNodePropsInput;
};

export type NodeCountdownPropsWhereInput = {
  AND?: InputMaybe<Array<NodeCountdownPropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeCountdownPropsWhereInput>>;
  OR?: InputMaybe<Array<NodeCountdownPropsWhereInput>>;
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
};

export type NodeCountdownPropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeFileProps = {
  __typename?: 'NodeFileProps';
  id: Scalars['Int'];
  info: Scalars['String'];
  nodeProps: NodeProps;
  url: Scalars['String'];
};

export type NodeFilePropsAvgAggregate = {
  __typename?: 'NodeFilePropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeFilePropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeFilePropsCountAggregate = {
  __typename?: 'NodeFilePropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  info: Scalars['Int'];
  url: Scalars['Int'];
};

export type NodeFilePropsCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type NodeFilePropsCreateInput = {
  info: Scalars['String'];
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeFilePropsInput>;
  url: Scalars['String'];
};

export type NodeFilePropsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  info: Scalars['String'];
  url: Scalars['String'];
};

export type NodeFilePropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeFilePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeFilePropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeFilePropsCreateWithoutNodePropsInput>;
};

export type NodeFilePropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeFilePropsCreateWithoutNodePropsInput;
  where: NodeFilePropsWhereUniqueInput;
};

export type NodeFilePropsCreateWithoutNodePropsInput = {
  info: Scalars['String'];
  url: Scalars['String'];
};

export type NodeFilePropsGroupBy = {
  __typename?: 'NodeFilePropsGroupBy';
  _avg?: Maybe<NodeFilePropsAvgAggregate>;
  _count?: Maybe<NodeFilePropsCountAggregate>;
  _max?: Maybe<NodeFilePropsMaxAggregate>;
  _min?: Maybe<NodeFilePropsMinAggregate>;
  _sum?: Maybe<NodeFilePropsSumAggregate>;
  id: Scalars['Int'];
  info: Scalars['String'];
  url: Scalars['String'];
};

export type NodeFilePropsMaxAggregate = {
  __typename?: 'NodeFilePropsMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NodeFilePropsMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type NodeFilePropsMinAggregate = {
  __typename?: 'NodeFilePropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NodeFilePropsMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type NodeFilePropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeFilePropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeFilePropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeFilePropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeFilePropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeFilePropsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type NodeFilePropsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  url?: InputMaybe<SortOrder>;
};

export type NodeFilePropsRelationFilter = {
  is?: InputMaybe<NodeFilePropsWhereInput>;
  isNot?: InputMaybe<NodeFilePropsWhereInput>;
};

export enum NodeFilePropsScalarFieldEnum {
  Id = 'id',
  Info = 'info',
  Url = 'url'
}

export type NodeFilePropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeFilePropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeFilePropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeFilePropsScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  info?: InputMaybe<StringWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeFilePropsSumAggregate = {
  __typename?: 'NodeFilePropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeFilePropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeFilePropsUpdateInput = {
  info?: InputMaybe<StringFieldUpdateOperationsInput>;
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeFilePropsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeFilePropsUpdateManyMutationInput = {
  info?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeFilePropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeFilePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeFilePropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeFilePropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeFilePropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeFilePropsUpsertWithoutNodePropsInput>;
};

export type NodeFilePropsUpdateWithoutNodePropsInput = {
  info?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeFilePropsUpsertWithoutNodePropsInput = {
  create: NodeFilePropsCreateWithoutNodePropsInput;
  update: NodeFilePropsUpdateWithoutNodePropsInput;
};

export type NodeFilePropsWhereInput = {
  AND?: InputMaybe<Array<NodeFilePropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeFilePropsWhereInput>>;
  OR?: InputMaybe<Array<NodeFilePropsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  info?: InputMaybe<StringFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  url?: InputMaybe<StringFilter>;
};

export type NodeFilePropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeImageProps = {
  __typename?: 'NodeImageProps';
  id: Scalars['Int'];
  nodeProps: NodeProps;
  src: Scalars['String'];
};

export type NodeImagePropsAvgAggregate = {
  __typename?: 'NodeImagePropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeImagePropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeImagePropsCountAggregate = {
  __typename?: 'NodeImagePropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeImagePropsCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeImagePropsCreateInput = {
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeImagePropsInput>;
  src: Scalars['String'];
};

export type NodeImagePropsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
};

export type NodeImagePropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeImagePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeImagePropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeImagePropsCreateWithoutNodePropsInput>;
};

export type NodeImagePropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeImagePropsCreateWithoutNodePropsInput;
  where: NodeImagePropsWhereUniqueInput;
};

export type NodeImagePropsCreateWithoutNodePropsInput = {
  src: Scalars['String'];
};

export type NodeImagePropsGroupBy = {
  __typename?: 'NodeImagePropsGroupBy';
  _avg?: Maybe<NodeImagePropsAvgAggregate>;
  _count?: Maybe<NodeImagePropsCountAggregate>;
  _max?: Maybe<NodeImagePropsMaxAggregate>;
  _min?: Maybe<NodeImagePropsMinAggregate>;
  _sum?: Maybe<NodeImagePropsSumAggregate>;
  id: Scalars['Int'];
  src: Scalars['String'];
};

export type NodeImagePropsMaxAggregate = {
  __typename?: 'NodeImagePropsMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeImagePropsMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeImagePropsMinAggregate = {
  __typename?: 'NodeImagePropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeImagePropsMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeImagePropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeImagePropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeImagePropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeImagePropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeImagePropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeImagePropsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeImagePropsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  src?: InputMaybe<SortOrder>;
};

export type NodeImagePropsRelationFilter = {
  is?: InputMaybe<NodeImagePropsWhereInput>;
  isNot?: InputMaybe<NodeImagePropsWhereInput>;
};

export enum NodeImagePropsScalarFieldEnum {
  Id = 'id',
  Src = 'src'
}

export type NodeImagePropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeImagePropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeImagePropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeImagePropsScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  src?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeImagePropsSumAggregate = {
  __typename?: 'NodeImagePropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeImagePropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeImagePropsUpdateInput = {
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeImagePropsInput>;
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeImagePropsUpdateManyMutationInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeImagePropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeImagePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeImagePropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeImagePropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeImagePropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeImagePropsUpsertWithoutNodePropsInput>;
};

export type NodeImagePropsUpdateWithoutNodePropsInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeImagePropsUpsertWithoutNodePropsInput = {
  create: NodeImagePropsCreateWithoutNodePropsInput;
  update: NodeImagePropsUpdateWithoutNodePropsInput;
};

export type NodeImagePropsWhereInput = {
  AND?: InputMaybe<Array<NodeImagePropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeImagePropsWhereInput>>;
  OR?: InputMaybe<Array<NodeImagePropsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  src?: InputMaybe<StringFilter>;
};

export type NodeImagePropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeInfo = {
  __typename?: 'NodeInfo';
  FlowNode?: Maybe<FlowNode>;
  TemplateNode?: Maybe<TemplateNode>;
  description: Scalars['String'];
  iconLink: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type NodeInfoAvgAggregate = {
  __typename?: 'NodeInfoAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeInfoAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeInfoCountAggregate = {
  __typename?: 'NodeInfoCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  iconLink: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type NodeInfoCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  iconLink?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NodeInfoCreateInput = {
  FlowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutInfoInput>;
  TemplateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutInfoInput>;
  description: Scalars['String'];
  iconLink: Scalars['String'];
  name: Scalars['String'];
};

export type NodeInfoCreateManyInput = {
  description: Scalars['String'];
  iconLink: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type NodeInfoCreateNestedOneWithoutFlowNodeInput = {
  connect?: InputMaybe<NodeInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeInfoCreateOrConnectWithoutFlowNodeInput>;
  create?: InputMaybe<NodeInfoCreateWithoutFlowNodeInput>;
};

export type NodeInfoCreateNestedOneWithoutTemplateNodeInput = {
  connect?: InputMaybe<NodeInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeInfoCreateOrConnectWithoutTemplateNodeInput>;
  create?: InputMaybe<NodeInfoCreateWithoutTemplateNodeInput>;
};

export type NodeInfoCreateOrConnectWithoutFlowNodeInput = {
  create: NodeInfoCreateWithoutFlowNodeInput;
  where: NodeInfoWhereUniqueInput;
};

export type NodeInfoCreateOrConnectWithoutTemplateNodeInput = {
  create: NodeInfoCreateWithoutTemplateNodeInput;
  where: NodeInfoWhereUniqueInput;
};

export type NodeInfoCreateWithoutFlowNodeInput = {
  TemplateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutInfoInput>;
  description: Scalars['String'];
  iconLink: Scalars['String'];
  name: Scalars['String'];
};

export type NodeInfoCreateWithoutTemplateNodeInput = {
  FlowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutInfoInput>;
  description: Scalars['String'];
  iconLink: Scalars['String'];
  name: Scalars['String'];
};

export type NodeInfoGroupBy = {
  __typename?: 'NodeInfoGroupBy';
  _avg?: Maybe<NodeInfoAvgAggregate>;
  _count?: Maybe<NodeInfoCountAggregate>;
  _max?: Maybe<NodeInfoMaxAggregate>;
  _min?: Maybe<NodeInfoMinAggregate>;
  _sum?: Maybe<NodeInfoSumAggregate>;
  description: Scalars['String'];
  iconLink: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type NodeInfoMaxAggregate = {
  __typename?: 'NodeInfoMaxAggregate';
  description?: Maybe<Scalars['String']>;
  iconLink?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type NodeInfoMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  iconLink?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NodeInfoMinAggregate = {
  __typename?: 'NodeInfoMinAggregate';
  description?: Maybe<Scalars['String']>;
  iconLink?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type NodeInfoMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  iconLink?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NodeInfoOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeInfoAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeInfoCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeInfoMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeInfoMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeInfoSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  iconLink?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NodeInfoOrderByWithRelationInput = {
  FlowNode?: InputMaybe<FlowNodeOrderByWithRelationInput>;
  TemplateNode?: InputMaybe<TemplateNodeOrderByWithRelationInput>;
  description?: InputMaybe<SortOrder>;
  iconLink?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type NodeInfoRelationFilter = {
  is?: InputMaybe<NodeInfoWhereInput>;
  isNot?: InputMaybe<NodeInfoWhereInput>;
};

export enum NodeInfoScalarFieldEnum {
  Description = 'description',
  IconLink = 'iconLink',
  Id = 'id',
  Name = 'name'
}

export type NodeInfoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeInfoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeInfoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeInfoScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  iconLink?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeInfoSumAggregate = {
  __typename?: 'NodeInfoSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeInfoSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeInfoUpdateInput = {
  FlowNode?: InputMaybe<FlowNodeUpdateOneWithoutInfoInput>;
  TemplateNode?: InputMaybe<TemplateNodeUpdateOneWithoutInfoInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  iconLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeInfoUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  iconLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeInfoUpdateOneRequiredWithoutFlowNodeInput = {
  connect?: InputMaybe<NodeInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeInfoCreateOrConnectWithoutFlowNodeInput>;
  create?: InputMaybe<NodeInfoCreateWithoutFlowNodeInput>;
  update?: InputMaybe<NodeInfoUpdateWithoutFlowNodeInput>;
  upsert?: InputMaybe<NodeInfoUpsertWithoutFlowNodeInput>;
};

export type NodeInfoUpdateOneRequiredWithoutTemplateNodeInput = {
  connect?: InputMaybe<NodeInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeInfoCreateOrConnectWithoutTemplateNodeInput>;
  create?: InputMaybe<NodeInfoCreateWithoutTemplateNodeInput>;
  update?: InputMaybe<NodeInfoUpdateWithoutTemplateNodeInput>;
  upsert?: InputMaybe<NodeInfoUpsertWithoutTemplateNodeInput>;
};

export type NodeInfoUpdateWithoutFlowNodeInput = {
  TemplateNode?: InputMaybe<TemplateNodeUpdateOneWithoutInfoInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  iconLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeInfoUpdateWithoutTemplateNodeInput = {
  FlowNode?: InputMaybe<FlowNodeUpdateOneWithoutInfoInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  iconLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeInfoUpsertWithoutFlowNodeInput = {
  create: NodeInfoCreateWithoutFlowNodeInput;
  update: NodeInfoUpdateWithoutFlowNodeInput;
};

export type NodeInfoUpsertWithoutTemplateNodeInput = {
  create: NodeInfoCreateWithoutTemplateNodeInput;
  update: NodeInfoUpdateWithoutTemplateNodeInput;
};

export type NodeInfoWhereInput = {
  AND?: InputMaybe<Array<NodeInfoWhereInput>>;
  FlowNode?: InputMaybe<FlowNodeRelationFilter>;
  NOT?: InputMaybe<Array<NodeInfoWhereInput>>;
  OR?: InputMaybe<Array<NodeInfoWhereInput>>;
  TemplateNode?: InputMaybe<TemplateNodeRelationFilter>;
  description?: InputMaybe<StringFilter>;
  iconLink?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type NodeInfoWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeLinkProps = {
  __typename?: 'NodeLinkProps';
  id: Scalars['Int'];
  nodeProps: NodeProps;
  src: Scalars['String'];
  text: Scalars['String'];
};

export type NodeLinkPropsAvgAggregate = {
  __typename?: 'NodeLinkPropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeLinkPropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeLinkPropsCountAggregate = {
  __typename?: 'NodeLinkPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
  text: Scalars['Int'];
};

export type NodeLinkPropsCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeLinkPropsCreateInput = {
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeLinkPropsInput>;
  src: Scalars['String'];
  text: Scalars['String'];
};

export type NodeLinkPropsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
  text: Scalars['String'];
};

export type NodeLinkPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeLinkPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeLinkPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeLinkPropsCreateWithoutNodePropsInput>;
};

export type NodeLinkPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeLinkPropsCreateWithoutNodePropsInput;
  where: NodeLinkPropsWhereUniqueInput;
};

export type NodeLinkPropsCreateWithoutNodePropsInput = {
  src: Scalars['String'];
  text: Scalars['String'];
};

export type NodeLinkPropsGroupBy = {
  __typename?: 'NodeLinkPropsGroupBy';
  _avg?: Maybe<NodeLinkPropsAvgAggregate>;
  _count?: Maybe<NodeLinkPropsCountAggregate>;
  _max?: Maybe<NodeLinkPropsMaxAggregate>;
  _min?: Maybe<NodeLinkPropsMinAggregate>;
  _sum?: Maybe<NodeLinkPropsSumAggregate>;
  id: Scalars['Int'];
  src: Scalars['String'];
  text: Scalars['String'];
};

export type NodeLinkPropsMaxAggregate = {
  __typename?: 'NodeLinkPropsMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeLinkPropsMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeLinkPropsMinAggregate = {
  __typename?: 'NodeLinkPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeLinkPropsMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeLinkPropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeLinkPropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeLinkPropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeLinkPropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeLinkPropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeLinkPropsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeLinkPropsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  src?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeLinkPropsRelationFilter = {
  is?: InputMaybe<NodeLinkPropsWhereInput>;
  isNot?: InputMaybe<NodeLinkPropsWhereInput>;
};

export enum NodeLinkPropsScalarFieldEnum {
  Id = 'id',
  Src = 'src',
  Text = 'text'
}

export type NodeLinkPropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeLinkPropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeLinkPropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeLinkPropsScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  src?: InputMaybe<StringWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeLinkPropsSumAggregate = {
  __typename?: 'NodeLinkPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeLinkPropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeLinkPropsUpdateInput = {
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeLinkPropsInput>;
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeLinkPropsUpdateManyMutationInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeLinkPropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeLinkPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeLinkPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeLinkPropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeLinkPropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeLinkPropsUpsertWithoutNodePropsInput>;
};

export type NodeLinkPropsUpdateWithoutNodePropsInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeLinkPropsUpsertWithoutNodePropsInput = {
  create: NodeLinkPropsCreateWithoutNodePropsInput;
  update: NodeLinkPropsUpdateWithoutNodePropsInput;
};

export type NodeLinkPropsWhereInput = {
  AND?: InputMaybe<Array<NodeLinkPropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeLinkPropsWhereInput>>;
  OR?: InputMaybe<Array<NodeLinkPropsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  src?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
};

export type NodeLinkPropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeProps = {
  __typename?: 'NodeProps';
  NodeAudioProps?: Maybe<NodeAudioProps>;
  NodeCountdownProps?: Maybe<NodeCountdownProps>;
  NodeFileProps?: Maybe<NodeFileProps>;
  NodeImageProps?: Maybe<NodeImageProps>;
  NodeLinkProps?: Maybe<NodeLinkProps>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionProps>;
  NodeSwitchProps?: Maybe<NodeSwitchProps>;
  NodeTextProps?: Maybe<NodeTextProps>;
  NodeVideoProps?: Maybe<NodeVideoProps>;
  NodeWaitProps?: Maybe<NodeWaitProps>;
  createdAt: Scalars['DateTime'];
  flowNode?: Maybe<FlowNode>;
  id: Scalars['Int'];
  templateNode?: Maybe<TemplateNode>;
  type: NodeType;
};

export type NodePropsAvgAggregate = {
  __typename?: 'NodePropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodePropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodePropsCountAggregate = {
  __typename?: 'NodePropsCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  type: Scalars['Int'];
};

export type NodePropsCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type NodePropsCreateInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateNestedOneWithoutFlowNodeInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutFlowNodeInput>;
  create?: InputMaybe<NodePropsCreateWithoutFlowNodeInput>;
};

export type NodePropsCreateNestedOneWithoutNodeAudioPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeAudioPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeAudioPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeCountdownPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeCountdownPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeCountdownPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeFilePropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeFilePropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeFilePropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeImagePropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeImagePropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeImagePropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeLinkPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeLinkPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeLinkPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeSwitchOptionPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeSwitchOptionPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeSwitchOptionPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeSwitchPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeSwitchPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeSwitchPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeTextPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeTextPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeTextPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeVideoPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeVideoPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeVideoPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeWaitPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeWaitPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeWaitPropsInput>;
};

export type NodePropsCreateNestedOneWithoutTemplateNodeInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutTemplateNodeInput>;
  create?: InputMaybe<NodePropsCreateWithoutTemplateNodeInput>;
};

export type NodePropsCreateOrConnectWithoutFlowNodeInput = {
  create: NodePropsCreateWithoutFlowNodeInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeAudioPropsInput = {
  create: NodePropsCreateWithoutNodeAudioPropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeCountdownPropsInput = {
  create: NodePropsCreateWithoutNodeCountdownPropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeFilePropsInput = {
  create: NodePropsCreateWithoutNodeFilePropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeImagePropsInput = {
  create: NodePropsCreateWithoutNodeImagePropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeLinkPropsInput = {
  create: NodePropsCreateWithoutNodeLinkPropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeSwitchOptionPropsInput = {
  create: NodePropsCreateWithoutNodeSwitchOptionPropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeSwitchPropsInput = {
  create: NodePropsCreateWithoutNodeSwitchPropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeTextPropsInput = {
  create: NodePropsCreateWithoutNodeTextPropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeVideoPropsInput = {
  create: NodePropsCreateWithoutNodeVideoPropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutNodeWaitPropsInput = {
  create: NodePropsCreateWithoutNodeWaitPropsInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutTemplateNodeInput = {
  create: NodePropsCreateWithoutTemplateNodeInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateWithoutFlowNodeInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeAudioPropsInput = {
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeCountdownPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeFilePropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeImagePropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeLinkPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeSwitchOptionPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeSwitchPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeTextPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeVideoPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutNodeWaitPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsCreateWithoutTemplateNodeInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  flowNode?: InputMaybe<FlowNodeCreateNestedOneWithoutNodePropsInput>;
  type?: InputMaybe<NodeType>;
};

export type NodePropsGroupBy = {
  __typename?: 'NodePropsGroupBy';
  _avg?: Maybe<NodePropsAvgAggregate>;
  _count?: Maybe<NodePropsCountAggregate>;
  _max?: Maybe<NodePropsMaxAggregate>;
  _min?: Maybe<NodePropsMinAggregate>;
  _sum?: Maybe<NodePropsSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  type: NodeType;
};

export type NodePropsMaxAggregate = {
  __typename?: 'NodePropsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<NodeType>;
};

export type NodePropsMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type NodePropsMinAggregate = {
  __typename?: 'NodePropsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<NodeType>;
};

export type NodePropsMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type NodePropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodePropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodePropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodePropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodePropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodePropsSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type NodePropsOrderByWithRelationInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsOrderByWithRelationInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsOrderByWithRelationInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsOrderByWithRelationInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsOrderByWithRelationInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsOrderByWithRelationInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsOrderByWithRelationInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsOrderByWithRelationInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsOrderByWithRelationInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsOrderByWithRelationInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  flowNode?: InputMaybe<FlowNodeOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  templateNode?: InputMaybe<TemplateNodeOrderByWithRelationInput>;
  type?: InputMaybe<SortOrder>;
};

export type NodePropsRelationFilter = {
  is?: InputMaybe<NodePropsWhereInput>;
  isNot?: InputMaybe<NodePropsWhereInput>;
};

export enum NodePropsScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Type = 'type'
}

export type NodePropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodePropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodePropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodePropsScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<EnumNodeTypeWithAggregatesFilter>;
};

export type NodePropsSumAggregate = {
  __typename?: 'NodePropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodePropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodePropsUpdateInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateOneRequiredWithoutFlowNodeInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutFlowNodeInput>;
  create?: InputMaybe<NodePropsCreateWithoutFlowNodeInput>;
  update?: InputMaybe<NodePropsUpdateWithoutFlowNodeInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutFlowNodeInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeAudioPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeAudioPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeAudioPropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeAudioPropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeAudioPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeCountdownPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeCountdownPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeCountdownPropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeCountdownPropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeCountdownPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeFilePropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeFilePropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeFilePropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeFilePropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeFilePropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeImagePropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeImagePropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeImagePropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeImagePropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeImagePropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeLinkPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeLinkPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeLinkPropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeLinkPropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeLinkPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeSwitchOptionPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeSwitchOptionPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeSwitchOptionPropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeSwitchOptionPropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeSwitchOptionPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeSwitchPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeSwitchPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeSwitchPropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeSwitchPropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeSwitchPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeTextPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeTextPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeTextPropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeTextPropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeTextPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeVideoPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeVideoPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeVideoPropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeVideoPropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeVideoPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeWaitPropsInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutNodeWaitPropsInput>;
  create?: InputMaybe<NodePropsCreateWithoutNodeWaitPropsInput>;
  update?: InputMaybe<NodePropsUpdateWithoutNodeWaitPropsInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutNodeWaitPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutTemplateNodeInput = {
  connect?: InputMaybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodePropsCreateOrConnectWithoutTemplateNodeInput>;
  create?: InputMaybe<NodePropsCreateWithoutTemplateNodeInput>;
  update?: InputMaybe<NodePropsUpdateWithoutTemplateNodeInput>;
  upsert?: InputMaybe<NodePropsUpsertWithoutTemplateNodeInput>;
};

export type NodePropsUpdateWithoutFlowNodeInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeAudioPropsInput = {
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeCountdownPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeFilePropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeImagePropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeLinkPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeSwitchOptionPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeSwitchPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeTextPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeVideoPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutNodeWaitPropsInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  templateNode?: InputMaybe<TemplateNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateWithoutTemplateNodeInput = {
  NodeAudioProps?: InputMaybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: InputMaybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: InputMaybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: InputMaybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: InputMaybe<FlowNodeUpdateOneWithoutNodePropsInput>;
  type?: InputMaybe<EnumNodeTypeFieldUpdateOperationsInput>;
};

export type NodePropsUpsertWithoutFlowNodeInput = {
  create: NodePropsCreateWithoutFlowNodeInput;
  update: NodePropsUpdateWithoutFlowNodeInput;
};

export type NodePropsUpsertWithoutNodeAudioPropsInput = {
  create: NodePropsCreateWithoutNodeAudioPropsInput;
  update: NodePropsUpdateWithoutNodeAudioPropsInput;
};

export type NodePropsUpsertWithoutNodeCountdownPropsInput = {
  create: NodePropsCreateWithoutNodeCountdownPropsInput;
  update: NodePropsUpdateWithoutNodeCountdownPropsInput;
};

export type NodePropsUpsertWithoutNodeFilePropsInput = {
  create: NodePropsCreateWithoutNodeFilePropsInput;
  update: NodePropsUpdateWithoutNodeFilePropsInput;
};

export type NodePropsUpsertWithoutNodeImagePropsInput = {
  create: NodePropsCreateWithoutNodeImagePropsInput;
  update: NodePropsUpdateWithoutNodeImagePropsInput;
};

export type NodePropsUpsertWithoutNodeLinkPropsInput = {
  create: NodePropsCreateWithoutNodeLinkPropsInput;
  update: NodePropsUpdateWithoutNodeLinkPropsInput;
};

export type NodePropsUpsertWithoutNodeSwitchOptionPropsInput = {
  create: NodePropsCreateWithoutNodeSwitchOptionPropsInput;
  update: NodePropsUpdateWithoutNodeSwitchOptionPropsInput;
};

export type NodePropsUpsertWithoutNodeSwitchPropsInput = {
  create: NodePropsCreateWithoutNodeSwitchPropsInput;
  update: NodePropsUpdateWithoutNodeSwitchPropsInput;
};

export type NodePropsUpsertWithoutNodeTextPropsInput = {
  create: NodePropsCreateWithoutNodeTextPropsInput;
  update: NodePropsUpdateWithoutNodeTextPropsInput;
};

export type NodePropsUpsertWithoutNodeVideoPropsInput = {
  create: NodePropsCreateWithoutNodeVideoPropsInput;
  update: NodePropsUpdateWithoutNodeVideoPropsInput;
};

export type NodePropsUpsertWithoutNodeWaitPropsInput = {
  create: NodePropsCreateWithoutNodeWaitPropsInput;
  update: NodePropsUpdateWithoutNodeWaitPropsInput;
};

export type NodePropsUpsertWithoutTemplateNodeInput = {
  create: NodePropsCreateWithoutTemplateNodeInput;
  update: NodePropsUpdateWithoutTemplateNodeInput;
};

export type NodePropsWhereInput = {
  AND?: InputMaybe<Array<NodePropsWhereInput>>;
  NOT?: InputMaybe<Array<NodePropsWhereInput>>;
  NodeAudioProps?: InputMaybe<NodeAudioPropsRelationFilter>;
  NodeCountdownProps?: InputMaybe<NodeCountdownPropsRelationFilter>;
  NodeFileProps?: InputMaybe<NodeFilePropsRelationFilter>;
  NodeImageProps?: InputMaybe<NodeImagePropsRelationFilter>;
  NodeLinkProps?: InputMaybe<NodeLinkPropsRelationFilter>;
  NodeSwitchOptionProps?: InputMaybe<NodeSwitchOptionPropsRelationFilter>;
  NodeSwitchProps?: InputMaybe<NodeSwitchPropsRelationFilter>;
  NodeTextProps?: InputMaybe<NodeTextPropsRelationFilter>;
  NodeVideoProps?: InputMaybe<NodeVideoPropsRelationFilter>;
  NodeWaitProps?: InputMaybe<NodeWaitPropsRelationFilter>;
  OR?: InputMaybe<Array<NodePropsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  flowNode?: InputMaybe<FlowNodeRelationFilter>;
  id?: InputMaybe<IntFilter>;
  templateNode?: InputMaybe<TemplateNodeRelationFilter>;
  type?: InputMaybe<EnumNodeTypeFilter>;
};

export type NodePropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeSwitchOptionProps = {
  __typename?: 'NodeSwitchOptionProps';
  id: Scalars['Int'];
  imageLink: Scalars['String'];
  nodeProps: NodeProps;
  text: Scalars['String'];
};

export type NodeSwitchOptionPropsAvgAggregate = {
  __typename?: 'NodeSwitchOptionPropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeSwitchOptionPropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeSwitchOptionPropsCountAggregate = {
  __typename?: 'NodeSwitchOptionPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  imageLink: Scalars['Int'];
  text: Scalars['Int'];
};

export type NodeSwitchOptionPropsCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  imageLink?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeSwitchOptionPropsCreateInput = {
  imageLink: Scalars['String'];
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeSwitchOptionPropsInput>;
  text: Scalars['String'];
};

export type NodeSwitchOptionPropsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  imageLink: Scalars['String'];
  text: Scalars['String'];
};

export type NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeSwitchOptionPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeSwitchOptionPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeSwitchOptionPropsCreateWithoutNodePropsInput>;
};

export type NodeSwitchOptionPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeSwitchOptionPropsCreateWithoutNodePropsInput;
  where: NodeSwitchOptionPropsWhereUniqueInput;
};

export type NodeSwitchOptionPropsCreateWithoutNodePropsInput = {
  imageLink: Scalars['String'];
  text: Scalars['String'];
};

export type NodeSwitchOptionPropsGroupBy = {
  __typename?: 'NodeSwitchOptionPropsGroupBy';
  _avg?: Maybe<NodeSwitchOptionPropsAvgAggregate>;
  _count?: Maybe<NodeSwitchOptionPropsCountAggregate>;
  _max?: Maybe<NodeSwitchOptionPropsMaxAggregate>;
  _min?: Maybe<NodeSwitchOptionPropsMinAggregate>;
  _sum?: Maybe<NodeSwitchOptionPropsSumAggregate>;
  id: Scalars['Int'];
  imageLink: Scalars['String'];
  text: Scalars['String'];
};

export type NodeSwitchOptionPropsMaxAggregate = {
  __typename?: 'NodeSwitchOptionPropsMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  imageLink?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeSwitchOptionPropsMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  imageLink?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeSwitchOptionPropsMinAggregate = {
  __typename?: 'NodeSwitchOptionPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  imageLink?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeSwitchOptionPropsMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  imageLink?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeSwitchOptionPropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeSwitchOptionPropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeSwitchOptionPropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeSwitchOptionPropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeSwitchOptionPropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeSwitchOptionPropsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  imageLink?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type NodeSwitchOptionPropsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  imageLink?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  text?: InputMaybe<SortOrder>;
};

export type NodeSwitchOptionPropsRelationFilter = {
  is?: InputMaybe<NodeSwitchOptionPropsWhereInput>;
  isNot?: InputMaybe<NodeSwitchOptionPropsWhereInput>;
};

export enum NodeSwitchOptionPropsScalarFieldEnum {
  Id = 'id',
  ImageLink = 'imageLink',
  Text = 'text'
}

export type NodeSwitchOptionPropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeSwitchOptionPropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeSwitchOptionPropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeSwitchOptionPropsScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  imageLink?: InputMaybe<StringWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeSwitchOptionPropsSumAggregate = {
  __typename?: 'NodeSwitchOptionPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeSwitchOptionPropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeSwitchOptionPropsUpdateInput = {
  imageLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeSwitchOptionPropsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeSwitchOptionPropsUpdateManyMutationInput = {
  imageLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeSwitchOptionPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeSwitchOptionPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeSwitchOptionPropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeSwitchOptionPropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeSwitchOptionPropsUpsertWithoutNodePropsInput>;
};

export type NodeSwitchOptionPropsUpdateWithoutNodePropsInput = {
  imageLink?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeSwitchOptionPropsUpsertWithoutNodePropsInput = {
  create: NodeSwitchOptionPropsCreateWithoutNodePropsInput;
  update: NodeSwitchOptionPropsUpdateWithoutNodePropsInput;
};

export type NodeSwitchOptionPropsWhereInput = {
  AND?: InputMaybe<Array<NodeSwitchOptionPropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeSwitchOptionPropsWhereInput>>;
  OR?: InputMaybe<Array<NodeSwitchOptionPropsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  imageLink?: InputMaybe<StringFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  text?: InputMaybe<StringFilter>;
};

export type NodeSwitchOptionPropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeSwitchProps = {
  __typename?: 'NodeSwitchProps';
  SwitchDisplayType: SwitchDisplayType;
  id: Scalars['Int'];
  nodeProps: NodeProps;
  withImage: Scalars['Boolean'];
};

export type NodeSwitchPropsAvgAggregate = {
  __typename?: 'NodeSwitchPropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeSwitchPropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeSwitchPropsCountAggregate = {
  __typename?: 'NodeSwitchPropsCountAggregate';
  SwitchDisplayType: Scalars['Int'];
  _all: Scalars['Int'];
  id: Scalars['Int'];
  withImage: Scalars['Int'];
};

export type NodeSwitchPropsCountOrderByAggregateInput = {
  SwitchDisplayType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  withImage?: InputMaybe<SortOrder>;
};

export type NodeSwitchPropsCreateInput = {
  SwitchDisplayType: SwitchDisplayType;
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeSwitchPropsInput>;
  withImage?: InputMaybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsCreateManyInput = {
  SwitchDisplayType: SwitchDisplayType;
  id?: InputMaybe<Scalars['Int']>;
  withImage?: InputMaybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeSwitchPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeSwitchPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeSwitchPropsCreateWithoutNodePropsInput>;
};

export type NodeSwitchPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeSwitchPropsCreateWithoutNodePropsInput;
  where: NodeSwitchPropsWhereUniqueInput;
};

export type NodeSwitchPropsCreateWithoutNodePropsInput = {
  SwitchDisplayType: SwitchDisplayType;
  withImage?: InputMaybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsGroupBy = {
  __typename?: 'NodeSwitchPropsGroupBy';
  SwitchDisplayType: SwitchDisplayType;
  _avg?: Maybe<NodeSwitchPropsAvgAggregate>;
  _count?: Maybe<NodeSwitchPropsCountAggregate>;
  _max?: Maybe<NodeSwitchPropsMaxAggregate>;
  _min?: Maybe<NodeSwitchPropsMinAggregate>;
  _sum?: Maybe<NodeSwitchPropsSumAggregate>;
  id: Scalars['Int'];
  withImage: Scalars['Boolean'];
};

export type NodeSwitchPropsMaxAggregate = {
  __typename?: 'NodeSwitchPropsMaxAggregate';
  SwitchDisplayType?: Maybe<SwitchDisplayType>;
  id?: Maybe<Scalars['Int']>;
  withImage?: Maybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsMaxOrderByAggregateInput = {
  SwitchDisplayType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  withImage?: InputMaybe<SortOrder>;
};

export type NodeSwitchPropsMinAggregate = {
  __typename?: 'NodeSwitchPropsMinAggregate';
  SwitchDisplayType?: Maybe<SwitchDisplayType>;
  id?: Maybe<Scalars['Int']>;
  withImage?: Maybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsMinOrderByAggregateInput = {
  SwitchDisplayType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  withImage?: InputMaybe<SortOrder>;
};

export type NodeSwitchPropsOrderByWithAggregationInput = {
  SwitchDisplayType?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<NodeSwitchPropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeSwitchPropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeSwitchPropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeSwitchPropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeSwitchPropsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  withImage?: InputMaybe<SortOrder>;
};

export type NodeSwitchPropsOrderByWithRelationInput = {
  SwitchDisplayType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  withImage?: InputMaybe<SortOrder>;
};

export type NodeSwitchPropsRelationFilter = {
  is?: InputMaybe<NodeSwitchPropsWhereInput>;
  isNot?: InputMaybe<NodeSwitchPropsWhereInput>;
};

export enum NodeSwitchPropsScalarFieldEnum {
  SwitchDisplayType = 'SwitchDisplayType',
  Id = 'id',
  WithImage = 'withImage'
}

export type NodeSwitchPropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeSwitchPropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeSwitchPropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeSwitchPropsScalarWhereWithAggregatesInput>>;
  SwitchDisplayType?: InputMaybe<EnumSwitchDisplayTypeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  withImage?: InputMaybe<BoolWithAggregatesFilter>;
};

export type NodeSwitchPropsSumAggregate = {
  __typename?: 'NodeSwitchPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeSwitchPropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeSwitchPropsUpdateInput = {
  SwitchDisplayType?: InputMaybe<EnumSwitchDisplayTypeFieldUpdateOperationsInput>;
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeSwitchPropsInput>;
  withImage?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type NodeSwitchPropsUpdateManyMutationInput = {
  SwitchDisplayType?: InputMaybe<EnumSwitchDisplayTypeFieldUpdateOperationsInput>;
  withImage?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type NodeSwitchPropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeSwitchPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeSwitchPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeSwitchPropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeSwitchPropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeSwitchPropsUpsertWithoutNodePropsInput>;
};

export type NodeSwitchPropsUpdateWithoutNodePropsInput = {
  SwitchDisplayType?: InputMaybe<EnumSwitchDisplayTypeFieldUpdateOperationsInput>;
  withImage?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type NodeSwitchPropsUpsertWithoutNodePropsInput = {
  create: NodeSwitchPropsCreateWithoutNodePropsInput;
  update: NodeSwitchPropsUpdateWithoutNodePropsInput;
};

export type NodeSwitchPropsWhereInput = {
  AND?: InputMaybe<Array<NodeSwitchPropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeSwitchPropsWhereInput>>;
  OR?: InputMaybe<Array<NodeSwitchPropsWhereInput>>;
  SwitchDisplayType?: InputMaybe<EnumSwitchDisplayTypeFilter>;
  id?: InputMaybe<IntFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  withImage?: InputMaybe<BoolFilter>;
};

export type NodeSwitchPropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeTextProps = {
  __typename?: 'NodeTextProps';
  id: Scalars['Int'];
  nodeProps: NodeProps;
  src: Scalars['String'];
};

export type NodeTextPropsAvgAggregate = {
  __typename?: 'NodeTextPropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeTextPropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeTextPropsCountAggregate = {
  __typename?: 'NodeTextPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeTextPropsCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeTextPropsCreateInput = {
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeTextPropsInput>;
  src: Scalars['String'];
};

export type NodeTextPropsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
};

export type NodeTextPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeTextPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeTextPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeTextPropsCreateWithoutNodePropsInput>;
};

export type NodeTextPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeTextPropsCreateWithoutNodePropsInput;
  where: NodeTextPropsWhereUniqueInput;
};

export type NodeTextPropsCreateWithoutNodePropsInput = {
  src: Scalars['String'];
};

export type NodeTextPropsGroupBy = {
  __typename?: 'NodeTextPropsGroupBy';
  _avg?: Maybe<NodeTextPropsAvgAggregate>;
  _count?: Maybe<NodeTextPropsCountAggregate>;
  _max?: Maybe<NodeTextPropsMaxAggregate>;
  _min?: Maybe<NodeTextPropsMinAggregate>;
  _sum?: Maybe<NodeTextPropsSumAggregate>;
  id: Scalars['Int'];
  src: Scalars['String'];
};

export type NodeTextPropsMaxAggregate = {
  __typename?: 'NodeTextPropsMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeTextPropsMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeTextPropsMinAggregate = {
  __typename?: 'NodeTextPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeTextPropsMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeTextPropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeTextPropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeTextPropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeTextPropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeTextPropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeTextPropsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeTextPropsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  src?: InputMaybe<SortOrder>;
};

export type NodeTextPropsRelationFilter = {
  is?: InputMaybe<NodeTextPropsWhereInput>;
  isNot?: InputMaybe<NodeTextPropsWhereInput>;
};

export enum NodeTextPropsScalarFieldEnum {
  Id = 'id',
  Src = 'src'
}

export type NodeTextPropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeTextPropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeTextPropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeTextPropsScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  src?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeTextPropsSumAggregate = {
  __typename?: 'NodeTextPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeTextPropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeTextPropsUpdateInput = {
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeTextPropsInput>;
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeTextPropsUpdateManyMutationInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeTextPropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeTextPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeTextPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeTextPropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeTextPropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeTextPropsUpsertWithoutNodePropsInput>;
};

export type NodeTextPropsUpdateWithoutNodePropsInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeTextPropsUpsertWithoutNodePropsInput = {
  create: NodeTextPropsCreateWithoutNodePropsInput;
  update: NodeTextPropsUpdateWithoutNodePropsInput;
};

export type NodeTextPropsWhereInput = {
  AND?: InputMaybe<Array<NodeTextPropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeTextPropsWhereInput>>;
  OR?: InputMaybe<Array<NodeTextPropsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  src?: InputMaybe<StringFilter>;
};

export type NodeTextPropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum NodeType {
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

export type NodeVideoProps = {
  __typename?: 'NodeVideoProps';
  id: Scalars['Int'];
  nodeProps: NodeProps;
  src: Scalars['String'];
};

export type NodeVideoPropsAvgAggregate = {
  __typename?: 'NodeVideoPropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeVideoPropsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeVideoPropsCountAggregate = {
  __typename?: 'NodeVideoPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeVideoPropsCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeVideoPropsCreateInput = {
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeVideoPropsInput>;
  src: Scalars['String'];
};

export type NodeVideoPropsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
};

export type NodeVideoPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeVideoPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeVideoPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeVideoPropsCreateWithoutNodePropsInput>;
};

export type NodeVideoPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeVideoPropsCreateWithoutNodePropsInput;
  where: NodeVideoPropsWhereUniqueInput;
};

export type NodeVideoPropsCreateWithoutNodePropsInput = {
  src: Scalars['String'];
};

export type NodeVideoPropsGroupBy = {
  __typename?: 'NodeVideoPropsGroupBy';
  _avg?: Maybe<NodeVideoPropsAvgAggregate>;
  _count?: Maybe<NodeVideoPropsCountAggregate>;
  _max?: Maybe<NodeVideoPropsMaxAggregate>;
  _min?: Maybe<NodeVideoPropsMinAggregate>;
  _sum?: Maybe<NodeVideoPropsSumAggregate>;
  id: Scalars['Int'];
  src: Scalars['String'];
};

export type NodeVideoPropsMaxAggregate = {
  __typename?: 'NodeVideoPropsMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeVideoPropsMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeVideoPropsMinAggregate = {
  __typename?: 'NodeVideoPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeVideoPropsMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeVideoPropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeVideoPropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeVideoPropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeVideoPropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeVideoPropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeVideoPropsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeVideoPropsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  src?: InputMaybe<SortOrder>;
};

export type NodeVideoPropsRelationFilter = {
  is?: InputMaybe<NodeVideoPropsWhereInput>;
  isNot?: InputMaybe<NodeVideoPropsWhereInput>;
};

export enum NodeVideoPropsScalarFieldEnum {
  Id = 'id',
  Src = 'src'
}

export type NodeVideoPropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeVideoPropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeVideoPropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeVideoPropsScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  src?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeVideoPropsSumAggregate = {
  __typename?: 'NodeVideoPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeVideoPropsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NodeVideoPropsUpdateInput = {
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeVideoPropsInput>;
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeVideoPropsUpdateManyMutationInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeVideoPropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeVideoPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeVideoPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeVideoPropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeVideoPropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeVideoPropsUpsertWithoutNodePropsInput>;
};

export type NodeVideoPropsUpdateWithoutNodePropsInput = {
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeVideoPropsUpsertWithoutNodePropsInput = {
  create: NodeVideoPropsCreateWithoutNodePropsInput;
  update: NodeVideoPropsUpdateWithoutNodePropsInput;
};

export type NodeVideoPropsWhereInput = {
  AND?: InputMaybe<Array<NodeVideoPropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeVideoPropsWhereInput>>;
  OR?: InputMaybe<Array<NodeVideoPropsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  src?: InputMaybe<StringFilter>;
};

export type NodeVideoPropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeWaitProps = {
  __typename?: 'NodeWaitProps';
  delay: Scalars['Int'];
  id: Scalars['Int'];
  nodeProps: NodeProps;
  src: Scalars['String'];
};

export type NodeWaitPropsAvgAggregate = {
  __typename?: 'NodeWaitPropsAvgAggregate';
  delay?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type NodeWaitPropsAvgOrderByAggregateInput = {
  delay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NodeWaitPropsCountAggregate = {
  __typename?: 'NodeWaitPropsCountAggregate';
  _all: Scalars['Int'];
  delay: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeWaitPropsCountOrderByAggregateInput = {
  delay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeWaitPropsCreateInput = {
  delay: Scalars['Int'];
  nodeProps?: InputMaybe<NodePropsCreateNestedOneWithoutNodeWaitPropsInput>;
  src: Scalars['String'];
};

export type NodeWaitPropsCreateManyInput = {
  delay: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  src: Scalars['String'];
};

export type NodeWaitPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeWaitPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeWaitPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeWaitPropsCreateWithoutNodePropsInput>;
};

export type NodeWaitPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeWaitPropsCreateWithoutNodePropsInput;
  where: NodeWaitPropsWhereUniqueInput;
};

export type NodeWaitPropsCreateWithoutNodePropsInput = {
  delay: Scalars['Int'];
  src: Scalars['String'];
};

export type NodeWaitPropsGroupBy = {
  __typename?: 'NodeWaitPropsGroupBy';
  _avg?: Maybe<NodeWaitPropsAvgAggregate>;
  _count?: Maybe<NodeWaitPropsCountAggregate>;
  _max?: Maybe<NodeWaitPropsMaxAggregate>;
  _min?: Maybe<NodeWaitPropsMinAggregate>;
  _sum?: Maybe<NodeWaitPropsSumAggregate>;
  delay: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['String'];
};

export type NodeWaitPropsMaxAggregate = {
  __typename?: 'NodeWaitPropsMaxAggregate';
  delay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeWaitPropsMaxOrderByAggregateInput = {
  delay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeWaitPropsMinAggregate = {
  __typename?: 'NodeWaitPropsMinAggregate';
  delay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeWaitPropsMinOrderByAggregateInput = {
  delay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeWaitPropsOrderByWithAggregationInput = {
  _avg?: InputMaybe<NodeWaitPropsAvgOrderByAggregateInput>;
  _count?: InputMaybe<NodeWaitPropsCountOrderByAggregateInput>;
  _max?: InputMaybe<NodeWaitPropsMaxOrderByAggregateInput>;
  _min?: InputMaybe<NodeWaitPropsMinOrderByAggregateInput>;
  _sum?: InputMaybe<NodeWaitPropsSumOrderByAggregateInput>;
  delay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  src?: InputMaybe<SortOrder>;
};

export type NodeWaitPropsOrderByWithRelationInput = {
  delay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  src?: InputMaybe<SortOrder>;
};

export type NodeWaitPropsRelationFilter = {
  is?: InputMaybe<NodeWaitPropsWhereInput>;
  isNot?: InputMaybe<NodeWaitPropsWhereInput>;
};

export enum NodeWaitPropsScalarFieldEnum {
  Delay = 'delay',
  Id = 'id',
  Src = 'src'
}

export type NodeWaitPropsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NodeWaitPropsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NodeWaitPropsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NodeWaitPropsScalarWhereWithAggregatesInput>>;
  delay?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  src?: InputMaybe<StringWithAggregatesFilter>;
};

export type NodeWaitPropsSumAggregate = {
  __typename?: 'NodeWaitPropsSumAggregate';
  delay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type NodeWaitPropsSumOrderByAggregateInput = {
  delay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type NodeWaitPropsUpdateInput = {
  delay?: InputMaybe<IntFieldUpdateOperationsInput>;
  nodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutNodeWaitPropsInput>;
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeWaitPropsUpdateManyMutationInput = {
  delay?: InputMaybe<IntFieldUpdateOperationsInput>;
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeWaitPropsUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<NodeWaitPropsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeWaitPropsCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<NodeWaitPropsCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<NodeWaitPropsUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<NodeWaitPropsUpsertWithoutNodePropsInput>;
};

export type NodeWaitPropsUpdateWithoutNodePropsInput = {
  delay?: InputMaybe<IntFieldUpdateOperationsInput>;
  src?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeWaitPropsUpsertWithoutNodePropsInput = {
  create: NodeWaitPropsCreateWithoutNodePropsInput;
  update: NodeWaitPropsUpdateWithoutNodePropsInput;
};

export type NodeWaitPropsWhereInput = {
  AND?: InputMaybe<Array<NodeWaitPropsWhereInput>>;
  NOT?: InputMaybe<Array<NodeWaitPropsWhereInput>>;
  OR?: InputMaybe<Array<NodeWaitPropsWhereInput>>;
  delay?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  nodeProps?: InputMaybe<NodePropsRelationFilter>;
  src?: InputMaybe<StringFilter>;
};

export type NodeWaitPropsWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Port = {
  __typename?: 'Port';
  _count?: Maybe<PortCount>;
  flowNodeId: Scalars['Int'];
  id: Scalars['Int'];
  inConnection?: Maybe<Connection>;
  index: Scalars['Int'];
  node: FlowNode;
  outConnections: Array<Connection>;
  pos: Pos;
};


export type PortOutConnectionsArgs = {
  cursor?: InputMaybe<ConnectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConnectionWhereInput>;
};

export type PortAvgAggregate = {
  __typename?: 'PortAvgAggregate';
  flowNodeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

export type PortAvgOrderByAggregateInput = {
  flowNodeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
};

export type PortCount = {
  __typename?: 'PortCount';
  outConnections: Scalars['Int'];
};

export type PortCountAggregate = {
  __typename?: 'PortCountAggregate';
  _all: Scalars['Int'];
  flowNodeId: Scalars['Int'];
  id: Scalars['Int'];
  index: Scalars['Int'];
};

export type PortCountOrderByAggregateInput = {
  flowNodeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
};

export type PortCreateInput = {
  inConnection?: InputMaybe<ConnectionCreateNestedOneWithoutToPortInput>;
  index: Scalars['Int'];
  node: FlowNodeCreateNestedOneWithoutPortsInput;
  outConnections?: InputMaybe<ConnectionCreateNestedManyWithoutFromPortInput>;
};

export type PortCreateManyInput = {
  flowNodeId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
};

export type PortCreateManyNodeInput = {
  id?: InputMaybe<Scalars['Int']>;
  index: Scalars['Int'];
};

export type PortCreateManyNodeInputEnvelope = {
  data: Array<PortCreateManyNodeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PortCreateNestedManyWithoutNodeInput = {
  connect?: InputMaybe<Array<PortWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PortCreateOrConnectWithoutNodeInput>>;
  create?: InputMaybe<Array<PortCreateWithoutNodeInput>>;
  createMany?: InputMaybe<PortCreateManyNodeInputEnvelope>;
};

export type PortCreateNestedOneWithoutInConnectionInput = {
  connect?: InputMaybe<PortWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PortCreateOrConnectWithoutInConnectionInput>;
  create?: InputMaybe<PortCreateWithoutInConnectionInput>;
};

export type PortCreateNestedOneWithoutOutConnectionsInput = {
  connect?: InputMaybe<PortWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PortCreateOrConnectWithoutOutConnectionsInput>;
  create?: InputMaybe<PortCreateWithoutOutConnectionsInput>;
};

export type PortCreateOrConnectWithoutInConnectionInput = {
  create: PortCreateWithoutInConnectionInput;
  where: PortWhereUniqueInput;
};

export type PortCreateOrConnectWithoutNodeInput = {
  create: PortCreateWithoutNodeInput;
  where: PortWhereUniqueInput;
};

export type PortCreateOrConnectWithoutOutConnectionsInput = {
  create: PortCreateWithoutOutConnectionsInput;
  where: PortWhereUniqueInput;
};

export type PortCreateWithoutInConnectionInput = {
  index: Scalars['Int'];
  node: FlowNodeCreateNestedOneWithoutPortsInput;
  outConnections?: InputMaybe<ConnectionCreateNestedManyWithoutFromPortInput>;
};

export type PortCreateWithoutNodeInput = {
  inConnection?: InputMaybe<ConnectionCreateNestedOneWithoutToPortInput>;
  index: Scalars['Int'];
  outConnections?: InputMaybe<ConnectionCreateNestedManyWithoutFromPortInput>;
};

export type PortCreateWithoutOutConnectionsInput = {
  inConnection?: InputMaybe<ConnectionCreateNestedOneWithoutToPortInput>;
  index: Scalars['Int'];
  node: FlowNodeCreateNestedOneWithoutPortsInput;
};

export type PortGroupBy = {
  __typename?: 'PortGroupBy';
  _avg?: Maybe<PortAvgAggregate>;
  _count?: Maybe<PortCountAggregate>;
  _max?: Maybe<PortMaxAggregate>;
  _min?: Maybe<PortMinAggregate>;
  _sum?: Maybe<PortSumAggregate>;
  flowNodeId: Scalars['Int'];
  id: Scalars['Int'];
  index: Scalars['Int'];
};

export type PortListRelationFilter = {
  every?: InputMaybe<PortWhereInput>;
  none?: InputMaybe<PortWhereInput>;
  some?: InputMaybe<PortWhereInput>;
};

export type PortMaxAggregate = {
  __typename?: 'PortMaxAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type PortMaxOrderByAggregateInput = {
  flowNodeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
};

export type PortMinAggregate = {
  __typename?: 'PortMinAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type PortMinOrderByAggregateInput = {
  flowNodeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
};

export type PortOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PortOrderByWithAggregationInput = {
  _avg?: InputMaybe<PortAvgOrderByAggregateInput>;
  _count?: InputMaybe<PortCountOrderByAggregateInput>;
  _max?: InputMaybe<PortMaxOrderByAggregateInput>;
  _min?: InputMaybe<PortMinOrderByAggregateInput>;
  _sum?: InputMaybe<PortSumOrderByAggregateInput>;
  flowNodeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
};

export type PortOrderByWithRelationInput = {
  flowNodeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inConnection?: InputMaybe<ConnectionOrderByWithRelationInput>;
  index?: InputMaybe<SortOrder>;
  node?: InputMaybe<FlowNodeOrderByWithRelationInput>;
  outConnections?: InputMaybe<ConnectionOrderByRelationAggregateInput>;
};

export type PortRelationFilter = {
  is?: InputMaybe<PortWhereInput>;
  isNot?: InputMaybe<PortWhereInput>;
};

export enum PortScalarFieldEnum {
  FlowNodeId = 'flowNodeId',
  Id = 'id',
  Index = 'index'
}

export type PortScalarWhereInput = {
  AND?: InputMaybe<Array<PortScalarWhereInput>>;
  NOT?: InputMaybe<Array<PortScalarWhereInput>>;
  OR?: InputMaybe<Array<PortScalarWhereInput>>;
  flowNodeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  index?: InputMaybe<IntFilter>;
};

export type PortScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PortScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PortScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PortScalarWhereWithAggregatesInput>>;
  flowNodeId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  index?: InputMaybe<IntWithAggregatesFilter>;
};

export type PortSumAggregate = {
  __typename?: 'PortSumAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type PortSumOrderByAggregateInput = {
  flowNodeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
};

export type PortUpdateInput = {
  inConnection?: InputMaybe<ConnectionUpdateOneWithoutToPortInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  node?: InputMaybe<FlowNodeUpdateOneRequiredWithoutPortsInput>;
  outConnections?: InputMaybe<ConnectionUpdateManyWithoutFromPortInput>;
};

export type PortUpdateManyMutationInput = {
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PortUpdateManyWithWhereWithoutNodeInput = {
  data: PortUpdateManyMutationInput;
  where: PortScalarWhereInput;
};

export type PortUpdateManyWithoutNodeInput = {
  connect?: InputMaybe<Array<PortWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PortCreateOrConnectWithoutNodeInput>>;
  create?: InputMaybe<Array<PortCreateWithoutNodeInput>>;
  createMany?: InputMaybe<PortCreateManyNodeInputEnvelope>;
  delete?: InputMaybe<Array<PortWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PortScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PortWhereUniqueInput>>;
  set?: InputMaybe<Array<PortWhereUniqueInput>>;
  update?: InputMaybe<Array<PortUpdateWithWhereUniqueWithoutNodeInput>>;
  updateMany?: InputMaybe<Array<PortUpdateManyWithWhereWithoutNodeInput>>;
  upsert?: InputMaybe<Array<PortUpsertWithWhereUniqueWithoutNodeInput>>;
};

export type PortUpdateOneRequiredWithoutInConnectionInput = {
  connect?: InputMaybe<PortWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PortCreateOrConnectWithoutInConnectionInput>;
  create?: InputMaybe<PortCreateWithoutInConnectionInput>;
  update?: InputMaybe<PortUpdateWithoutInConnectionInput>;
  upsert?: InputMaybe<PortUpsertWithoutInConnectionInput>;
};

export type PortUpdateOneRequiredWithoutOutConnectionsInput = {
  connect?: InputMaybe<PortWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PortCreateOrConnectWithoutOutConnectionsInput>;
  create?: InputMaybe<PortCreateWithoutOutConnectionsInput>;
  update?: InputMaybe<PortUpdateWithoutOutConnectionsInput>;
  upsert?: InputMaybe<PortUpsertWithoutOutConnectionsInput>;
};

export type PortUpdateWithWhereUniqueWithoutNodeInput = {
  data: PortUpdateWithoutNodeInput;
  where: PortWhereUniqueInput;
};

export type PortUpdateWithoutInConnectionInput = {
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  node?: InputMaybe<FlowNodeUpdateOneRequiredWithoutPortsInput>;
  outConnections?: InputMaybe<ConnectionUpdateManyWithoutFromPortInput>;
};

export type PortUpdateWithoutNodeInput = {
  inConnection?: InputMaybe<ConnectionUpdateOneWithoutToPortInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  outConnections?: InputMaybe<ConnectionUpdateManyWithoutFromPortInput>;
};

export type PortUpdateWithoutOutConnectionsInput = {
  inConnection?: InputMaybe<ConnectionUpdateOneWithoutToPortInput>;
  index?: InputMaybe<IntFieldUpdateOperationsInput>;
  node?: InputMaybe<FlowNodeUpdateOneRequiredWithoutPortsInput>;
};

export type PortUpsertWithWhereUniqueWithoutNodeInput = {
  create: PortCreateWithoutNodeInput;
  update: PortUpdateWithoutNodeInput;
  where: PortWhereUniqueInput;
};

export type PortUpsertWithoutInConnectionInput = {
  create: PortCreateWithoutInConnectionInput;
  update: PortUpdateWithoutInConnectionInput;
};

export type PortUpsertWithoutOutConnectionsInput = {
  create: PortCreateWithoutOutConnectionsInput;
  update: PortUpdateWithoutOutConnectionsInput;
};

export type PortWhereInput = {
  AND?: InputMaybe<Array<PortWhereInput>>;
  NOT?: InputMaybe<Array<PortWhereInput>>;
  OR?: InputMaybe<Array<PortWhereInput>>;
  flowNodeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  inConnection?: InputMaybe<ConnectionRelationFilter>;
  index?: InputMaybe<IntFilter>;
  node?: InputMaybe<FlowNodeRelationFilter>;
  outConnections?: InputMaybe<ConnectionListRelationFilter>;
};

export type PortWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Pos = {
  __typename?: 'Pos';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  aggregateBotFlow: AggregateBotFlow;
  aggregateBotFlowVersion: AggregateBotFlowVersion;
  aggregateConnection: AggregateConnection;
  aggregateFlowNode: AggregateFlowNode;
  aggregateNodeAudioProps: AggregateNodeAudioProps;
  aggregateNodeCountdownProps: AggregateNodeCountdownProps;
  aggregateNodeFileProps: AggregateNodeFileProps;
  aggregateNodeImageProps: AggregateNodeImageProps;
  aggregateNodeInfo: AggregateNodeInfo;
  aggregateNodeLinkProps: AggregateNodeLinkProps;
  aggregateNodeProps: AggregateNodeProps;
  aggregateNodeSwitchOptionProps: AggregateNodeSwitchOptionProps;
  aggregateNodeSwitchProps: AggregateNodeSwitchProps;
  aggregateNodeTextProps: AggregateNodeTextProps;
  aggregateNodeVideoProps: AggregateNodeVideoProps;
  aggregateNodeWaitProps: AggregateNodeWaitProps;
  aggregatePort: AggregatePort;
  aggregateTemplateNode: AggregateTemplateNode;
  aggregateTemplateNodesGroup: AggregateTemplateNodesGroup;
  botFlow?: Maybe<BotFlow>;
  botFlowVersion?: Maybe<BotFlowVersion>;
  botFlowVersions: Array<BotFlowVersion>;
  botFlows: Array<BotFlow>;
  connection?: Maybe<Connection>;
  connections: Array<Connection>;
  findFirstBotFlow?: Maybe<BotFlow>;
  findFirstBotFlowVersion?: Maybe<BotFlowVersion>;
  findFirstConnection?: Maybe<Connection>;
  findFirstFlowNode?: Maybe<FlowNode>;
  findFirstNodeAudioProps?: Maybe<NodeAudioProps>;
  findFirstNodeCountdownProps?: Maybe<NodeCountdownProps>;
  findFirstNodeFileProps?: Maybe<NodeFileProps>;
  findFirstNodeImageProps?: Maybe<NodeImageProps>;
  findFirstNodeInfo?: Maybe<NodeInfo>;
  findFirstNodeLinkProps?: Maybe<NodeLinkProps>;
  findFirstNodeProps?: Maybe<NodeProps>;
  findFirstNodeSwitchOptionProps?: Maybe<NodeSwitchOptionProps>;
  findFirstNodeSwitchProps?: Maybe<NodeSwitchProps>;
  findFirstNodeTextProps?: Maybe<NodeTextProps>;
  findFirstNodeVideoProps?: Maybe<NodeVideoProps>;
  findFirstNodeWaitProps?: Maybe<NodeWaitProps>;
  findFirstPort?: Maybe<Port>;
  findFirstTemplateNode?: Maybe<TemplateNode>;
  findFirstTemplateNodesGroup?: Maybe<TemplateNodesGroup>;
  findManyNodeAudioProps: Array<NodeAudioProps>;
  findManyNodeCountdownProps: Array<NodeCountdownProps>;
  findManyNodeFileProps: Array<NodeFileProps>;
  findManyNodeImageProps: Array<NodeImageProps>;
  findManyNodeLinkProps: Array<NodeLinkProps>;
  findManyNodeProps: Array<NodeProps>;
  findManyNodeSwitchOptionProps: Array<NodeSwitchOptionProps>;
  findManyNodeSwitchProps: Array<NodeSwitchProps>;
  findManyNodeTextProps: Array<NodeTextProps>;
  findManyNodeVideoProps: Array<NodeVideoProps>;
  findManyNodeWaitProps: Array<NodeWaitProps>;
  findUniqueNodeAudioProps?: Maybe<NodeAudioProps>;
  findUniqueNodeCountdownProps?: Maybe<NodeCountdownProps>;
  findUniqueNodeFileProps?: Maybe<NodeFileProps>;
  findUniqueNodeImageProps?: Maybe<NodeImageProps>;
  findUniqueNodeLinkProps?: Maybe<NodeLinkProps>;
  findUniqueNodeProps?: Maybe<NodeProps>;
  findUniqueNodeSwitchOptionProps?: Maybe<NodeSwitchOptionProps>;
  findUniqueNodeSwitchProps?: Maybe<NodeSwitchProps>;
  findUniqueNodeTextProps?: Maybe<NodeTextProps>;
  findUniqueNodeVideoProps?: Maybe<NodeVideoProps>;
  findUniqueNodeWaitProps?: Maybe<NodeWaitProps>;
  flowNode?: Maybe<FlowNode>;
  flowNodes: Array<FlowNode>;
  groupByBotFlow: Array<BotFlowGroupBy>;
  groupByBotFlowVersion: Array<BotFlowVersionGroupBy>;
  groupByConnection: Array<ConnectionGroupBy>;
  groupByFlowNode: Array<FlowNodeGroupBy>;
  groupByNodeAudioProps: Array<NodeAudioPropsGroupBy>;
  groupByNodeCountdownProps: Array<NodeCountdownPropsGroupBy>;
  groupByNodeFileProps: Array<NodeFilePropsGroupBy>;
  groupByNodeImageProps: Array<NodeImagePropsGroupBy>;
  groupByNodeInfo: Array<NodeInfoGroupBy>;
  groupByNodeLinkProps: Array<NodeLinkPropsGroupBy>;
  groupByNodeProps: Array<NodePropsGroupBy>;
  groupByNodeSwitchOptionProps: Array<NodeSwitchOptionPropsGroupBy>;
  groupByNodeSwitchProps: Array<NodeSwitchPropsGroupBy>;
  groupByNodeTextProps: Array<NodeTextPropsGroupBy>;
  groupByNodeVideoProps: Array<NodeVideoPropsGroupBy>;
  groupByNodeWaitProps: Array<NodeWaitPropsGroupBy>;
  groupByPort: Array<PortGroupBy>;
  groupByTemplateNode: Array<TemplateNodeGroupBy>;
  groupByTemplateNodesGroup: Array<TemplateNodesGroupGroupBy>;
  isLoggedIn: Scalars['Boolean'];
  nodeInfo?: Maybe<NodeInfo>;
  nodeInfos: Array<NodeInfo>;
  port?: Maybe<Port>;
  ports: Array<Port>;
  templateNode?: Maybe<TemplateNode>;
  templateNodes: Array<TemplateNode>;
  templateNodesGroup?: Maybe<TemplateNodesGroup>;
  templateNodesGroups: Array<TemplateNodesGroup>;
};


export type QueryAggregateBotFlowArgs = {
  cursor?: InputMaybe<BotFlowWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BotFlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowWhereInput>;
};


export type QueryAggregateBotFlowVersionArgs = {
  cursor?: InputMaybe<BotFlowVersionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BotFlowVersionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowVersionWhereInput>;
};


export type QueryAggregateConnectionArgs = {
  cursor?: InputMaybe<ConnectionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConnectionWhereInput>;
};


export type QueryAggregateFlowNodeArgs = {
  cursor?: InputMaybe<FlowNodeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowNodeWhereInput>;
};


export type QueryAggregateNodeAudioPropsArgs = {
  cursor?: InputMaybe<NodeAudioPropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeAudioPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeAudioPropsWhereInput>;
};


export type QueryAggregateNodeCountdownPropsArgs = {
  cursor?: InputMaybe<NodeCountdownPropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeCountdownPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeCountdownPropsWhereInput>;
};


export type QueryAggregateNodeFilePropsArgs = {
  cursor?: InputMaybe<NodeFilePropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeFilePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeFilePropsWhereInput>;
};


export type QueryAggregateNodeImagePropsArgs = {
  cursor?: InputMaybe<NodeImagePropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeImagePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeImagePropsWhereInput>;
};


export type QueryAggregateNodeInfoArgs = {
  cursor?: InputMaybe<NodeInfoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeInfoWhereInput>;
};


export type QueryAggregateNodeLinkPropsArgs = {
  cursor?: InputMaybe<NodeLinkPropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeLinkPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeLinkPropsWhereInput>;
};


export type QueryAggregateNodePropsArgs = {
  cursor?: InputMaybe<NodePropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodePropsWhereInput>;
};


export type QueryAggregateNodeSwitchOptionPropsArgs = {
  cursor?: InputMaybe<NodeSwitchOptionPropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeSwitchOptionPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeSwitchOptionPropsWhereInput>;
};


export type QueryAggregateNodeSwitchPropsArgs = {
  cursor?: InputMaybe<NodeSwitchPropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeSwitchPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeSwitchPropsWhereInput>;
};


export type QueryAggregateNodeTextPropsArgs = {
  cursor?: InputMaybe<NodeTextPropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeTextPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeTextPropsWhereInput>;
};


export type QueryAggregateNodeVideoPropsArgs = {
  cursor?: InputMaybe<NodeVideoPropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeVideoPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeVideoPropsWhereInput>;
};


export type QueryAggregateNodeWaitPropsArgs = {
  cursor?: InputMaybe<NodeWaitPropsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NodeWaitPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeWaitPropsWhereInput>;
};


export type QueryAggregatePortArgs = {
  cursor?: InputMaybe<PortWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PortOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortWhereInput>;
};


export type QueryAggregateTemplateNodeArgs = {
  cursor?: InputMaybe<TemplateNodeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TemplateNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodeWhereInput>;
};


export type QueryAggregateTemplateNodesGroupArgs = {
  cursor?: InputMaybe<TemplateNodesGroupWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TemplateNodesGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodesGroupWhereInput>;
};


export type QueryBotFlowArgs = {
  where: BotFlowWhereUniqueInput;
};


export type QueryBotFlowVersionArgs = {
  where: BotFlowVersionWhereUniqueInput;
};


export type QueryBotFlowVersionsArgs = {
  cursor?: InputMaybe<BotFlowVersionWhereUniqueInput>;
  distinct?: InputMaybe<Array<BotFlowVersionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BotFlowVersionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowVersionWhereInput>;
};


export type QueryBotFlowsArgs = {
  cursor?: InputMaybe<BotFlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<BotFlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BotFlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowWhereInput>;
};


export type QueryConnectionArgs = {
  where: ConnectionWhereUniqueInput;
};


export type QueryConnectionsArgs = {
  cursor?: InputMaybe<ConnectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConnectionWhereInput>;
};


export type QueryFindFirstBotFlowArgs = {
  cursor?: InputMaybe<BotFlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<BotFlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BotFlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowWhereInput>;
};


export type QueryFindFirstBotFlowVersionArgs = {
  cursor?: InputMaybe<BotFlowVersionWhereUniqueInput>;
  distinct?: InputMaybe<Array<BotFlowVersionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BotFlowVersionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowVersionWhereInput>;
};


export type QueryFindFirstConnectionArgs = {
  cursor?: InputMaybe<ConnectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConnectionWhereInput>;
};


export type QueryFindFirstFlowNodeArgs = {
  cursor?: InputMaybe<FlowNodeWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowNodeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowNodeWhereInput>;
};


export type QueryFindFirstNodeAudioPropsArgs = {
  cursor?: InputMaybe<NodeAudioPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeAudioPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeAudioPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeAudioPropsWhereInput>;
};


export type QueryFindFirstNodeCountdownPropsArgs = {
  cursor?: InputMaybe<NodeCountdownPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeCountdownPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeCountdownPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeCountdownPropsWhereInput>;
};


export type QueryFindFirstNodeFilePropsArgs = {
  cursor?: InputMaybe<NodeFilePropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeFilePropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeFilePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeFilePropsWhereInput>;
};


export type QueryFindFirstNodeImagePropsArgs = {
  cursor?: InputMaybe<NodeImagePropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeImagePropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeImagePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeImagePropsWhereInput>;
};


export type QueryFindFirstNodeInfoArgs = {
  cursor?: InputMaybe<NodeInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeInfoWhereInput>;
};


export type QueryFindFirstNodeLinkPropsArgs = {
  cursor?: InputMaybe<NodeLinkPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeLinkPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeLinkPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeLinkPropsWhereInput>;
};


export type QueryFindFirstNodePropsArgs = {
  cursor?: InputMaybe<NodePropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodePropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodePropsWhereInput>;
};


export type QueryFindFirstNodeSwitchOptionPropsArgs = {
  cursor?: InputMaybe<NodeSwitchOptionPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeSwitchOptionPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeSwitchOptionPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeSwitchOptionPropsWhereInput>;
};


export type QueryFindFirstNodeSwitchPropsArgs = {
  cursor?: InputMaybe<NodeSwitchPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeSwitchPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeSwitchPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeSwitchPropsWhereInput>;
};


export type QueryFindFirstNodeTextPropsArgs = {
  cursor?: InputMaybe<NodeTextPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeTextPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeTextPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeTextPropsWhereInput>;
};


export type QueryFindFirstNodeVideoPropsArgs = {
  cursor?: InputMaybe<NodeVideoPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeVideoPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeVideoPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeVideoPropsWhereInput>;
};


export type QueryFindFirstNodeWaitPropsArgs = {
  cursor?: InputMaybe<NodeWaitPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeWaitPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeWaitPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeWaitPropsWhereInput>;
};


export type QueryFindFirstPortArgs = {
  cursor?: InputMaybe<PortWhereUniqueInput>;
  distinct?: InputMaybe<Array<PortScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PortOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortWhereInput>;
};


export type QueryFindFirstTemplateNodeArgs = {
  cursor?: InputMaybe<TemplateNodeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TemplateNodeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TemplateNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodeWhereInput>;
};


export type QueryFindFirstTemplateNodesGroupArgs = {
  cursor?: InputMaybe<TemplateNodesGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<TemplateNodesGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TemplateNodesGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodesGroupWhereInput>;
};


export type QueryFindManyNodeAudioPropsArgs = {
  cursor?: InputMaybe<NodeAudioPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeAudioPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeAudioPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeAudioPropsWhereInput>;
};


export type QueryFindManyNodeCountdownPropsArgs = {
  cursor?: InputMaybe<NodeCountdownPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeCountdownPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeCountdownPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeCountdownPropsWhereInput>;
};


export type QueryFindManyNodeFilePropsArgs = {
  cursor?: InputMaybe<NodeFilePropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeFilePropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeFilePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeFilePropsWhereInput>;
};


export type QueryFindManyNodeImagePropsArgs = {
  cursor?: InputMaybe<NodeImagePropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeImagePropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeImagePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeImagePropsWhereInput>;
};


export type QueryFindManyNodeLinkPropsArgs = {
  cursor?: InputMaybe<NodeLinkPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeLinkPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeLinkPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeLinkPropsWhereInput>;
};


export type QueryFindManyNodePropsArgs = {
  cursor?: InputMaybe<NodePropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodePropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodePropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodePropsWhereInput>;
};


export type QueryFindManyNodeSwitchOptionPropsArgs = {
  cursor?: InputMaybe<NodeSwitchOptionPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeSwitchOptionPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeSwitchOptionPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeSwitchOptionPropsWhereInput>;
};


export type QueryFindManyNodeSwitchPropsArgs = {
  cursor?: InputMaybe<NodeSwitchPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeSwitchPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeSwitchPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeSwitchPropsWhereInput>;
};


export type QueryFindManyNodeTextPropsArgs = {
  cursor?: InputMaybe<NodeTextPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeTextPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeTextPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeTextPropsWhereInput>;
};


export type QueryFindManyNodeVideoPropsArgs = {
  cursor?: InputMaybe<NodeVideoPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeVideoPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeVideoPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeVideoPropsWhereInput>;
};


export type QueryFindManyNodeWaitPropsArgs = {
  cursor?: InputMaybe<NodeWaitPropsWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeWaitPropsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeWaitPropsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeWaitPropsWhereInput>;
};


export type QueryFindUniqueNodeAudioPropsArgs = {
  where: NodeAudioPropsWhereUniqueInput;
};


export type QueryFindUniqueNodeCountdownPropsArgs = {
  where: NodeCountdownPropsWhereUniqueInput;
};


export type QueryFindUniqueNodeFilePropsArgs = {
  where: NodeFilePropsWhereUniqueInput;
};


export type QueryFindUniqueNodeImagePropsArgs = {
  where: NodeImagePropsWhereUniqueInput;
};


export type QueryFindUniqueNodeLinkPropsArgs = {
  where: NodeLinkPropsWhereUniqueInput;
};


export type QueryFindUniqueNodePropsArgs = {
  where: NodePropsWhereUniqueInput;
};


export type QueryFindUniqueNodeSwitchOptionPropsArgs = {
  where: NodeSwitchOptionPropsWhereUniqueInput;
};


export type QueryFindUniqueNodeSwitchPropsArgs = {
  where: NodeSwitchPropsWhereUniqueInput;
};


export type QueryFindUniqueNodeTextPropsArgs = {
  where: NodeTextPropsWhereUniqueInput;
};


export type QueryFindUniqueNodeVideoPropsArgs = {
  where: NodeVideoPropsWhereUniqueInput;
};


export type QueryFindUniqueNodeWaitPropsArgs = {
  where: NodeWaitPropsWhereUniqueInput;
};


export type QueryFlowNodeArgs = {
  where: FlowNodeWhereUniqueInput;
};


export type QueryFlowNodesArgs = {
  cursor?: InputMaybe<FlowNodeWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowNodeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowNodeWhereInput>;
};


export type QueryGroupByBotFlowArgs = {
  by: Array<BotFlowScalarFieldEnum>;
  having?: InputMaybe<BotFlowScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BotFlowOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowWhereInput>;
};


export type QueryGroupByBotFlowVersionArgs = {
  by: Array<BotFlowVersionScalarFieldEnum>;
  having?: InputMaybe<BotFlowVersionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BotFlowVersionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotFlowVersionWhereInput>;
};


export type QueryGroupByConnectionArgs = {
  by: Array<ConnectionScalarFieldEnum>;
  having?: InputMaybe<ConnectionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ConnectionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConnectionWhereInput>;
};


export type QueryGroupByFlowNodeArgs = {
  by: Array<FlowNodeScalarFieldEnum>;
  having?: InputMaybe<FlowNodeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FlowNodeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowNodeWhereInput>;
};


export type QueryGroupByNodeAudioPropsArgs = {
  by: Array<NodeAudioPropsScalarFieldEnum>;
  having?: InputMaybe<NodeAudioPropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeAudioPropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeAudioPropsWhereInput>;
};


export type QueryGroupByNodeCountdownPropsArgs = {
  by: Array<NodeCountdownPropsScalarFieldEnum>;
  having?: InputMaybe<NodeCountdownPropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeCountdownPropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeCountdownPropsWhereInput>;
};


export type QueryGroupByNodeFilePropsArgs = {
  by: Array<NodeFilePropsScalarFieldEnum>;
  having?: InputMaybe<NodeFilePropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeFilePropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeFilePropsWhereInput>;
};


export type QueryGroupByNodeImagePropsArgs = {
  by: Array<NodeImagePropsScalarFieldEnum>;
  having?: InputMaybe<NodeImagePropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeImagePropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeImagePropsWhereInput>;
};


export type QueryGroupByNodeInfoArgs = {
  by: Array<NodeInfoScalarFieldEnum>;
  having?: InputMaybe<NodeInfoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeInfoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeInfoWhereInput>;
};


export type QueryGroupByNodeLinkPropsArgs = {
  by: Array<NodeLinkPropsScalarFieldEnum>;
  having?: InputMaybe<NodeLinkPropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeLinkPropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeLinkPropsWhereInput>;
};


export type QueryGroupByNodePropsArgs = {
  by: Array<NodePropsScalarFieldEnum>;
  having?: InputMaybe<NodePropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodePropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodePropsWhereInput>;
};


export type QueryGroupByNodeSwitchOptionPropsArgs = {
  by: Array<NodeSwitchOptionPropsScalarFieldEnum>;
  having?: InputMaybe<NodeSwitchOptionPropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeSwitchOptionPropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeSwitchOptionPropsWhereInput>;
};


export type QueryGroupByNodeSwitchPropsArgs = {
  by: Array<NodeSwitchPropsScalarFieldEnum>;
  having?: InputMaybe<NodeSwitchPropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeSwitchPropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeSwitchPropsWhereInput>;
};


export type QueryGroupByNodeTextPropsArgs = {
  by: Array<NodeTextPropsScalarFieldEnum>;
  having?: InputMaybe<NodeTextPropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeTextPropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeTextPropsWhereInput>;
};


export type QueryGroupByNodeVideoPropsArgs = {
  by: Array<NodeVideoPropsScalarFieldEnum>;
  having?: InputMaybe<NodeVideoPropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeVideoPropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeVideoPropsWhereInput>;
};


export type QueryGroupByNodeWaitPropsArgs = {
  by: Array<NodeWaitPropsScalarFieldEnum>;
  having?: InputMaybe<NodeWaitPropsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NodeWaitPropsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeWaitPropsWhereInput>;
};


export type QueryGroupByPortArgs = {
  by: Array<PortScalarFieldEnum>;
  having?: InputMaybe<PortScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PortOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortWhereInput>;
};


export type QueryGroupByTemplateNodeArgs = {
  by: Array<TemplateNodeScalarFieldEnum>;
  having?: InputMaybe<TemplateNodeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TemplateNodeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodeWhereInput>;
};


export type QueryGroupByTemplateNodesGroupArgs = {
  by: Array<TemplateNodesGroupScalarFieldEnum>;
  having?: InputMaybe<TemplateNodesGroupScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TemplateNodesGroupOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodesGroupWhereInput>;
};


export type QueryNodeInfoArgs = {
  where: NodeInfoWhereUniqueInput;
};


export type QueryNodeInfosArgs = {
  cursor?: InputMaybe<NodeInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<NodeInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NodeInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NodeInfoWhereInput>;
};


export type QueryPortArgs = {
  where: PortWhereUniqueInput;
};


export type QueryPortsArgs = {
  cursor?: InputMaybe<PortWhereUniqueInput>;
  distinct?: InputMaybe<Array<PortScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PortOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortWhereInput>;
};


export type QueryTemplateNodeArgs = {
  where: TemplateNodeWhereUniqueInput;
};


export type QueryTemplateNodesArgs = {
  cursor?: InputMaybe<TemplateNodeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TemplateNodeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TemplateNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodeWhereInput>;
};


export type QueryTemplateNodesGroupArgs = {
  where: TemplateNodesGroupWhereUniqueInput;
};


export type QueryTemplateNodesGroupsArgs = {
  cursor?: InputMaybe<TemplateNodesGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<TemplateNodesGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TemplateNodesGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodesGroupWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum SwitchDisplayType {
  Carousel = 'Carousel',
  List = 'List',
  Select = 'Select'
}

export type TemplateNode = {
  __typename?: 'TemplateNode';
  FlowNode: Array<FlowNode>;
  NodeProps: NodeProps;
  _count?: Maybe<TemplateNodeCount>;
  group: TemplateNodesGroup;
  id: Scalars['Int'];
  info: NodeInfo;
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  order: Scalars['Int'];
  templateNodesGroupId: Scalars['Int'];
};


export type TemplateNodeFlowNodeArgs = {
  cursor?: InputMaybe<FlowNodeWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowNodeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowNodeWhereInput>;
};

export type TemplateNodeAvgAggregate = {
  __typename?: 'TemplateNodeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  nodeInfoId?: Maybe<Scalars['Float']>;
  nodePropsId?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  templateNodesGroupId?: Maybe<Scalars['Float']>;
};

export type TemplateNodeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  templateNodesGroupId?: InputMaybe<SortOrder>;
};

export type TemplateNodeCount = {
  __typename?: 'TemplateNodeCount';
  FlowNode: Scalars['Int'];
};

export type TemplateNodeCountAggregate = {
  __typename?: 'TemplateNodeCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  order: Scalars['Int'];
  templateNodesGroupId: Scalars['Int'];
};

export type TemplateNodeCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  templateNodesGroupId?: InputMaybe<SortOrder>;
};

export type TemplateNodeCreateInput = {
  FlowNode?: InputMaybe<FlowNodeCreateNestedManyWithoutTemplateNodeInput>;
  NodeProps: NodePropsCreateNestedOneWithoutTemplateNodeInput;
  group: TemplateNodesGroupCreateNestedOneWithoutNodesInput;
  info: NodeInfoCreateNestedOneWithoutTemplateNodeInput;
  order: Scalars['Int'];
};

export type TemplateNodeCreateManyGroupInput = {
  id?: InputMaybe<Scalars['Int']>;
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  order: Scalars['Int'];
};

export type TemplateNodeCreateManyGroupInputEnvelope = {
  data: Array<TemplateNodeCreateManyGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TemplateNodeCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  order: Scalars['Int'];
  templateNodesGroupId: Scalars['Int'];
};

export type TemplateNodeCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<TemplateNodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TemplateNodeCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<TemplateNodeCreateWithoutGroupInput>>;
  createMany?: InputMaybe<TemplateNodeCreateManyGroupInputEnvelope>;
};

export type TemplateNodeCreateNestedOneWithoutFlowNodeInput = {
  connect?: InputMaybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateNodeCreateOrConnectWithoutFlowNodeInput>;
  create?: InputMaybe<TemplateNodeCreateWithoutFlowNodeInput>;
};

export type TemplateNodeCreateNestedOneWithoutInfoInput = {
  connect?: InputMaybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateNodeCreateOrConnectWithoutInfoInput>;
  create?: InputMaybe<TemplateNodeCreateWithoutInfoInput>;
};

export type TemplateNodeCreateNestedOneWithoutNodePropsInput = {
  connect?: InputMaybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateNodeCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<TemplateNodeCreateWithoutNodePropsInput>;
};

export type TemplateNodeCreateOrConnectWithoutFlowNodeInput = {
  create: TemplateNodeCreateWithoutFlowNodeInput;
  where: TemplateNodeWhereUniqueInput;
};

export type TemplateNodeCreateOrConnectWithoutGroupInput = {
  create: TemplateNodeCreateWithoutGroupInput;
  where: TemplateNodeWhereUniqueInput;
};

export type TemplateNodeCreateOrConnectWithoutInfoInput = {
  create: TemplateNodeCreateWithoutInfoInput;
  where: TemplateNodeWhereUniqueInput;
};

export type TemplateNodeCreateOrConnectWithoutNodePropsInput = {
  create: TemplateNodeCreateWithoutNodePropsInput;
  where: TemplateNodeWhereUniqueInput;
};

export type TemplateNodeCreateWithoutFlowNodeInput = {
  NodeProps: NodePropsCreateNestedOneWithoutTemplateNodeInput;
  group: TemplateNodesGroupCreateNestedOneWithoutNodesInput;
  info: NodeInfoCreateNestedOneWithoutTemplateNodeInput;
  order: Scalars['Int'];
};

export type TemplateNodeCreateWithoutGroupInput = {
  FlowNode?: InputMaybe<FlowNodeCreateNestedManyWithoutTemplateNodeInput>;
  NodeProps: NodePropsCreateNestedOneWithoutTemplateNodeInput;
  info: NodeInfoCreateNestedOneWithoutTemplateNodeInput;
  order: Scalars['Int'];
};

export type TemplateNodeCreateWithoutInfoInput = {
  FlowNode?: InputMaybe<FlowNodeCreateNestedManyWithoutTemplateNodeInput>;
  NodeProps: NodePropsCreateNestedOneWithoutTemplateNodeInput;
  group: TemplateNodesGroupCreateNestedOneWithoutNodesInput;
  order: Scalars['Int'];
};

export type TemplateNodeCreateWithoutNodePropsInput = {
  FlowNode?: InputMaybe<FlowNodeCreateNestedManyWithoutTemplateNodeInput>;
  group: TemplateNodesGroupCreateNestedOneWithoutNodesInput;
  info: NodeInfoCreateNestedOneWithoutTemplateNodeInput;
  order: Scalars['Int'];
};

export type TemplateNodeGroupBy = {
  __typename?: 'TemplateNodeGroupBy';
  _avg?: Maybe<TemplateNodeAvgAggregate>;
  _count?: Maybe<TemplateNodeCountAggregate>;
  _max?: Maybe<TemplateNodeMaxAggregate>;
  _min?: Maybe<TemplateNodeMinAggregate>;
  _sum?: Maybe<TemplateNodeSumAggregate>;
  id: Scalars['Int'];
  nodeInfoId: Scalars['Int'];
  nodePropsId: Scalars['Int'];
  order: Scalars['Int'];
  templateNodesGroupId: Scalars['Int'];
};

export type TemplateNodeListRelationFilter = {
  every?: InputMaybe<TemplateNodeWhereInput>;
  none?: InputMaybe<TemplateNodeWhereInput>;
  some?: InputMaybe<TemplateNodeWhereInput>;
};

export type TemplateNodeMaxAggregate = {
  __typename?: 'TemplateNodeMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  nodeInfoId?: Maybe<Scalars['Int']>;
  nodePropsId?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  templateNodesGroupId?: Maybe<Scalars['Int']>;
};

export type TemplateNodeMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  templateNodesGroupId?: InputMaybe<SortOrder>;
};

export type TemplateNodeMinAggregate = {
  __typename?: 'TemplateNodeMinAggregate';
  id?: Maybe<Scalars['Int']>;
  nodeInfoId?: Maybe<Scalars['Int']>;
  nodePropsId?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  templateNodesGroupId?: Maybe<Scalars['Int']>;
};

export type TemplateNodeMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  templateNodesGroupId?: InputMaybe<SortOrder>;
};

export type TemplateNodeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TemplateNodeOrderByWithAggregationInput = {
  _avg?: InputMaybe<TemplateNodeAvgOrderByAggregateInput>;
  _count?: InputMaybe<TemplateNodeCountOrderByAggregateInput>;
  _max?: InputMaybe<TemplateNodeMaxOrderByAggregateInput>;
  _min?: InputMaybe<TemplateNodeMinOrderByAggregateInput>;
  _sum?: InputMaybe<TemplateNodeSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  templateNodesGroupId?: InputMaybe<SortOrder>;
};

export type TemplateNodeOrderByWithRelationInput = {
  FlowNode?: InputMaybe<FlowNodeOrderByRelationAggregateInput>;
  NodeProps?: InputMaybe<NodePropsOrderByWithRelationInput>;
  group?: InputMaybe<TemplateNodesGroupOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<NodeInfoOrderByWithRelationInput>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  templateNodesGroupId?: InputMaybe<SortOrder>;
};

export type TemplateNodeRelationFilter = {
  is?: InputMaybe<TemplateNodeWhereInput>;
  isNot?: InputMaybe<TemplateNodeWhereInput>;
};

export enum TemplateNodeScalarFieldEnum {
  Id = 'id',
  NodeInfoId = 'nodeInfoId',
  NodePropsId = 'nodePropsId',
  Order = 'order',
  TemplateNodesGroupId = 'templateNodesGroupId'
}

export type TemplateNodeScalarWhereInput = {
  AND?: InputMaybe<Array<TemplateNodeScalarWhereInput>>;
  NOT?: InputMaybe<Array<TemplateNodeScalarWhereInput>>;
  OR?: InputMaybe<Array<TemplateNodeScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  nodeInfoId?: InputMaybe<IntFilter>;
  nodePropsId?: InputMaybe<IntFilter>;
  order?: InputMaybe<IntFilter>;
  templateNodesGroupId?: InputMaybe<IntFilter>;
};

export type TemplateNodeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TemplateNodeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TemplateNodeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TemplateNodeScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  nodeInfoId?: InputMaybe<IntWithAggregatesFilter>;
  nodePropsId?: InputMaybe<IntWithAggregatesFilter>;
  order?: InputMaybe<IntWithAggregatesFilter>;
  templateNodesGroupId?: InputMaybe<IntWithAggregatesFilter>;
};

export type TemplateNodeSumAggregate = {
  __typename?: 'TemplateNodeSumAggregate';
  id?: Maybe<Scalars['Int']>;
  nodeInfoId?: Maybe<Scalars['Int']>;
  nodePropsId?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  templateNodesGroupId?: Maybe<Scalars['Int']>;
};

export type TemplateNodeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nodeInfoId?: InputMaybe<SortOrder>;
  nodePropsId?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  templateNodesGroupId?: InputMaybe<SortOrder>;
};

export type TemplateNodeUpdateInput = {
  FlowNode?: InputMaybe<FlowNodeUpdateManyWithoutTemplateNodeInput>;
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutTemplateNodeInput>;
  group?: InputMaybe<TemplateNodesGroupUpdateOneRequiredWithoutNodesInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutTemplateNodeInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateManyMutationInput = {
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateManyWithWhereWithoutGroupInput = {
  data: TemplateNodeUpdateManyMutationInput;
  where: TemplateNodeScalarWhereInput;
};

export type TemplateNodeUpdateManyWithoutGroupInput = {
  connect?: InputMaybe<Array<TemplateNodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TemplateNodeCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<TemplateNodeCreateWithoutGroupInput>>;
  createMany?: InputMaybe<TemplateNodeCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<TemplateNodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TemplateNodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TemplateNodeWhereUniqueInput>>;
  set?: InputMaybe<Array<TemplateNodeWhereUniqueInput>>;
  update?: InputMaybe<Array<TemplateNodeUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<TemplateNodeUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<TemplateNodeUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type TemplateNodeUpdateOneWithoutFlowNodeInput = {
  connect?: InputMaybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateNodeCreateOrConnectWithoutFlowNodeInput>;
  create?: InputMaybe<TemplateNodeCreateWithoutFlowNodeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TemplateNodeUpdateWithoutFlowNodeInput>;
  upsert?: InputMaybe<TemplateNodeUpsertWithoutFlowNodeInput>;
};

export type TemplateNodeUpdateOneWithoutInfoInput = {
  connect?: InputMaybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateNodeCreateOrConnectWithoutInfoInput>;
  create?: InputMaybe<TemplateNodeCreateWithoutInfoInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TemplateNodeUpdateWithoutInfoInput>;
  upsert?: InputMaybe<TemplateNodeUpsertWithoutInfoInput>;
};

export type TemplateNodeUpdateOneWithoutNodePropsInput = {
  connect?: InputMaybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateNodeCreateOrConnectWithoutNodePropsInput>;
  create?: InputMaybe<TemplateNodeCreateWithoutNodePropsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TemplateNodeUpdateWithoutNodePropsInput>;
  upsert?: InputMaybe<TemplateNodeUpsertWithoutNodePropsInput>;
};

export type TemplateNodeUpdateWithWhereUniqueWithoutGroupInput = {
  data: TemplateNodeUpdateWithoutGroupInput;
  where: TemplateNodeWhereUniqueInput;
};

export type TemplateNodeUpdateWithoutFlowNodeInput = {
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutTemplateNodeInput>;
  group?: InputMaybe<TemplateNodesGroupUpdateOneRequiredWithoutNodesInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutTemplateNodeInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateWithoutGroupInput = {
  FlowNode?: InputMaybe<FlowNodeUpdateManyWithoutTemplateNodeInput>;
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutTemplateNodeInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutTemplateNodeInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateWithoutInfoInput = {
  FlowNode?: InputMaybe<FlowNodeUpdateManyWithoutTemplateNodeInput>;
  NodeProps?: InputMaybe<NodePropsUpdateOneRequiredWithoutTemplateNodeInput>;
  group?: InputMaybe<TemplateNodesGroupUpdateOneRequiredWithoutNodesInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateWithoutNodePropsInput = {
  FlowNode?: InputMaybe<FlowNodeUpdateManyWithoutTemplateNodeInput>;
  group?: InputMaybe<TemplateNodesGroupUpdateOneRequiredWithoutNodesInput>;
  info?: InputMaybe<NodeInfoUpdateOneRequiredWithoutTemplateNodeInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpsertWithWhereUniqueWithoutGroupInput = {
  create: TemplateNodeCreateWithoutGroupInput;
  update: TemplateNodeUpdateWithoutGroupInput;
  where: TemplateNodeWhereUniqueInput;
};

export type TemplateNodeUpsertWithoutFlowNodeInput = {
  create: TemplateNodeCreateWithoutFlowNodeInput;
  update: TemplateNodeUpdateWithoutFlowNodeInput;
};

export type TemplateNodeUpsertWithoutInfoInput = {
  create: TemplateNodeCreateWithoutInfoInput;
  update: TemplateNodeUpdateWithoutInfoInput;
};

export type TemplateNodeUpsertWithoutNodePropsInput = {
  create: TemplateNodeCreateWithoutNodePropsInput;
  update: TemplateNodeUpdateWithoutNodePropsInput;
};

export type TemplateNodeWhereInput = {
  AND?: InputMaybe<Array<TemplateNodeWhereInput>>;
  FlowNode?: InputMaybe<FlowNodeListRelationFilter>;
  NOT?: InputMaybe<Array<TemplateNodeWhereInput>>;
  NodeProps?: InputMaybe<NodePropsRelationFilter>;
  OR?: InputMaybe<Array<TemplateNodeWhereInput>>;
  group?: InputMaybe<TemplateNodesGroupRelationFilter>;
  id?: InputMaybe<IntFilter>;
  info?: InputMaybe<NodeInfoRelationFilter>;
  nodeInfoId?: InputMaybe<IntFilter>;
  nodePropsId?: InputMaybe<IntFilter>;
  order?: InputMaybe<IntFilter>;
  templateNodesGroupId?: InputMaybe<IntFilter>;
};

export type TemplateNodeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  nodeInfoId?: InputMaybe<Scalars['Int']>;
  nodePropsId?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type TemplateNodesGroup = {
  __typename?: 'TemplateNodesGroup';
  _count?: Maybe<TemplateNodesGroupCount>;
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  nodes: Array<TemplateNode>;
};


export type TemplateNodesGroupNodesArgs = {
  cursor?: InputMaybe<TemplateNodeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TemplateNodeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TemplateNodeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodeWhereInput>;
};

export type TemplateNodesGroupAvgAggregate = {
  __typename?: 'TemplateNodesGroupAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TemplateNodesGroupAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TemplateNodesGroupCount = {
  __typename?: 'TemplateNodesGroupCount';
  nodes: Scalars['Int'];
};

export type TemplateNodesGroupCountAggregate = {
  __typename?: 'TemplateNodesGroupCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type TemplateNodesGroupCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TemplateNodesGroupCreateInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  nodes?: InputMaybe<TemplateNodeCreateNestedManyWithoutGroupInput>;
};

export type TemplateNodesGroupCreateManyInput = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type TemplateNodesGroupCreateNestedOneWithoutNodesInput = {
  connect?: InputMaybe<TemplateNodesGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateNodesGroupCreateOrConnectWithoutNodesInput>;
  create?: InputMaybe<TemplateNodesGroupCreateWithoutNodesInput>;
};

export type TemplateNodesGroupCreateOrConnectWithoutNodesInput = {
  create: TemplateNodesGroupCreateWithoutNodesInput;
  where: TemplateNodesGroupWhereUniqueInput;
};

export type TemplateNodesGroupCreateWithoutNodesInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type TemplateNodesGroupGroupBy = {
  __typename?: 'TemplateNodesGroupGroupBy';
  _avg?: Maybe<TemplateNodesGroupAvgAggregate>;
  _count?: Maybe<TemplateNodesGroupCountAggregate>;
  _max?: Maybe<TemplateNodesGroupMaxAggregate>;
  _min?: Maybe<TemplateNodesGroupMinAggregate>;
  _sum?: Maybe<TemplateNodesGroupSumAggregate>;
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TemplateNodesGroupMaxAggregate = {
  __typename?: 'TemplateNodesGroupMaxAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TemplateNodesGroupMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TemplateNodesGroupMinAggregate = {
  __typename?: 'TemplateNodesGroupMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TemplateNodesGroupMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TemplateNodesGroupOrderByWithAggregationInput = {
  _avg?: InputMaybe<TemplateNodesGroupAvgOrderByAggregateInput>;
  _count?: InputMaybe<TemplateNodesGroupCountOrderByAggregateInput>;
  _max?: InputMaybe<TemplateNodesGroupMaxOrderByAggregateInput>;
  _min?: InputMaybe<TemplateNodesGroupMinOrderByAggregateInput>;
  _sum?: InputMaybe<TemplateNodesGroupSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TemplateNodesGroupOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nodes?: InputMaybe<TemplateNodeOrderByRelationAggregateInput>;
};

export type TemplateNodesGroupRelationFilter = {
  is?: InputMaybe<TemplateNodesGroupWhereInput>;
  isNot?: InputMaybe<TemplateNodesGroupWhereInput>;
};

export enum TemplateNodesGroupScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type TemplateNodesGroupScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TemplateNodesGroupScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TemplateNodesGroupScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TemplateNodesGroupScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type TemplateNodesGroupSumAggregate = {
  __typename?: 'TemplateNodesGroupSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TemplateNodesGroupSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TemplateNodesGroupUpdateInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nodes?: InputMaybe<TemplateNodeUpdateManyWithoutGroupInput>;
};

export type TemplateNodesGroupUpdateManyMutationInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TemplateNodesGroupUpdateOneRequiredWithoutNodesInput = {
  connect?: InputMaybe<TemplateNodesGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TemplateNodesGroupCreateOrConnectWithoutNodesInput>;
  create?: InputMaybe<TemplateNodesGroupCreateWithoutNodesInput>;
  update?: InputMaybe<TemplateNodesGroupUpdateWithoutNodesInput>;
  upsert?: InputMaybe<TemplateNodesGroupUpsertWithoutNodesInput>;
};

export type TemplateNodesGroupUpdateWithoutNodesInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TemplateNodesGroupUpsertWithoutNodesInput = {
  create: TemplateNodesGroupCreateWithoutNodesInput;
  update: TemplateNodesGroupUpdateWithoutNodesInput;
};

export type TemplateNodesGroupWhereInput = {
  AND?: InputMaybe<Array<TemplateNodesGroupWhereInput>>;
  NOT?: InputMaybe<Array<TemplateNodesGroupWhereInput>>;
  OR?: InputMaybe<Array<TemplateNodesGroupWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodes?: InputMaybe<TemplateNodeListRelationFilter>;
};

export type TemplateNodesGroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type NodeInfoFragment = { __typename?: 'NodeInfo', id: number, name: string, description: string, iconLink: string };

export type NodeSwitchPropsFragment = { __typename?: 'NodeSwitchProps', SwitchDisplayType: SwitchDisplayType };

export type NodeFilePropsFragment = { __typename?: 'NodeFileProps', info: string, url: string };

export type NodeSwitchOptionPropsFragment = { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string };

export type NodeLinkPropsFragment = { __typename?: 'NodeLinkProps', src: string, text: string };

export type NodeAudioPropsFragment = { __typename?: 'NodeAudioProps', src: string };

export type NodeImagePropsFragment = { __typename?: 'NodeImageProps', src: string };

export type NodeTextPropsFragment = { __typename?: 'NodeTextProps', src: string };

export type NodeVideoPropsFragment = { __typename?: 'NodeVideoProps', src: string };

export type NodeWaitPropsFragment = { __typename?: 'NodeWaitProps', src: string, delay: number };

export type NodeCountdownPropsFragment = { __typename?: 'NodeCountdownProps', duration: number };

export type NodePropsFragment = { __typename?: 'NodeProps', id: number, type: NodeType, NodeFileProps?: { __typename?: 'NodeFileProps', info: string, url: string } | null | undefined, NodeLinkProps?: { __typename?: 'NodeLinkProps', src: string, text: string } | null | undefined, NodeSwitchOptionProps?: { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string } | null | undefined, NodeImageProps?: { __typename?: 'NodeImageProps', src: string } | null | undefined, NodeAudioProps?: { __typename?: 'NodeAudioProps', src: string } | null | undefined, NodeCountdownProps?: { __typename?: 'NodeCountdownProps', duration: number } | null | undefined, NodeSwitchProps?: { __typename?: 'NodeSwitchProps', SwitchDisplayType: SwitchDisplayType } | null | undefined, NodeVideoProps?: { __typename?: 'NodeVideoProps', src: string } | null | undefined, NodeTextProps?: { __typename?: 'NodeTextProps', src: string } | null | undefined, NodeWaitProps?: { __typename?: 'NodeWaitProps', src: string, delay: number } | null | undefined };

export type TemplateNodeFragment = { __typename?: 'TemplateNode', id: number, order: number, group: { __typename?: 'TemplateNodesGroup', id: number }, info: { __typename?: 'NodeInfo', id: number, name: string, description: string, iconLink: string }, NodeProps: { __typename?: 'NodeProps', type: NodeType, id: number, NodeFileProps?: { __typename?: 'NodeFileProps', info: string, url: string } | null | undefined, NodeLinkProps?: { __typename?: 'NodeLinkProps', src: string, text: string } | null | undefined, NodeSwitchOptionProps?: { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string } | null | undefined, NodeImageProps?: { __typename?: 'NodeImageProps', src: string } | null | undefined, NodeAudioProps?: { __typename?: 'NodeAudioProps', src: string } | null | undefined, NodeCountdownProps?: { __typename?: 'NodeCountdownProps', duration: number } | null | undefined, NodeSwitchProps?: { __typename?: 'NodeSwitchProps', SwitchDisplayType: SwitchDisplayType } | null | undefined, NodeVideoProps?: { __typename?: 'NodeVideoProps', src: string } | null | undefined, NodeTextProps?: { __typename?: 'NodeTextProps', src: string } | null | undefined, NodeWaitProps?: { __typename?: 'NodeWaitProps', src: string, delay: number } | null | undefined } };

export type TemplateNodesQueryVariables = Exact<{
  cursor?: InputMaybe<TemplateNodeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TemplateNodeScalarFieldEnum> | TemplateNodeScalarFieldEnum>;
  orderBy?: InputMaybe<Array<TemplateNodeOrderByWithRelationInput> | TemplateNodeOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodeWhereInput>;
}>;


export type TemplateNodesQuery = { __typename?: 'Query', templateNodes: Array<{ __typename?: 'TemplateNode', id: number, order: number, group: { __typename?: 'TemplateNodesGroup', id: number }, info: { __typename?: 'NodeInfo', id: number, name: string, description: string, iconLink: string }, NodeProps: { __typename?: 'NodeProps', type: NodeType, id: number, NodeFileProps?: { __typename?: 'NodeFileProps', info: string, url: string } | null | undefined, NodeLinkProps?: { __typename?: 'NodeLinkProps', src: string, text: string } | null | undefined, NodeSwitchOptionProps?: { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string } | null | undefined, NodeImageProps?: { __typename?: 'NodeImageProps', src: string } | null | undefined, NodeAudioProps?: { __typename?: 'NodeAudioProps', src: string } | null | undefined, NodeCountdownProps?: { __typename?: 'NodeCountdownProps', duration: number } | null | undefined, NodeSwitchProps?: { __typename?: 'NodeSwitchProps', SwitchDisplayType: SwitchDisplayType } | null | undefined, NodeVideoProps?: { __typename?: 'NodeVideoProps', src: string } | null | undefined, NodeTextProps?: { __typename?: 'NodeTextProps', src: string } | null | undefined, NodeWaitProps?: { __typename?: 'NodeWaitProps', src: string, delay: number } | null | undefined } }> };

export type TemplateNodesMutationVariables = Exact<{
  input: TemplateNodeCreateInput;
}>;


export type TemplateNodesMutation = { __typename?: 'Mutation', createTemplateNode: { __typename?: 'TemplateNode', id: number } };

export type TemplateNodesUpdateMutationVariables = Exact<{
  data: TemplateNodeUpdateInput;
  where: TemplateNodeWhereUniqueInput;
}>;


export type TemplateNodesUpdateMutation = { __typename?: 'Mutation', updateTemplateNode?: { __typename?: 'TemplateNode', id: number } | null | undefined };

export type TemplateNodesDeleteMutationVariables = Exact<{
  where: TemplateNodeWhereUniqueInput;
}>;


export type TemplateNodesDeleteMutation = { __typename?: 'Mutation', deleteTemplateNode?: { __typename?: 'TemplateNode', id: number } | null | undefined };

export type TemplateNodesGroupsQueryVariables = Exact<{
  cursor?: InputMaybe<TemplateNodesGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<TemplateNodesGroupScalarFieldEnum> | TemplateNodesGroupScalarFieldEnum>;
  orderBy?: InputMaybe<Array<TemplateNodesGroupOrderByWithRelationInput> | TemplateNodesGroupOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TemplateNodesGroupWhereInput>;
}>;


export type TemplateNodesGroupsQuery = { __typename?: 'Query', templateNodesGroups: Array<{ __typename?: 'TemplateNodesGroup', id: number, name: string, description: string }> };

export type TemplateNodesGroupsMutationVariables = Exact<{
  data: TemplateNodesGroupCreateInput;
}>;


export type TemplateNodesGroupsMutation = { __typename?: 'Mutation', createTemplateNodesGroup: { __typename?: 'TemplateNodesGroup', id: number } };

export type TemplateNodesGroupsUpdateMutationVariables = Exact<{
  data: TemplateNodesGroupUpdateInput;
  where: TemplateNodesGroupWhereUniqueInput;
}>;


export type TemplateNodesGroupsUpdateMutation = { __typename?: 'Mutation', updateTemplateNodesGroup?: { __typename?: 'TemplateNodesGroup', id: number } | null | undefined };

export type TemplateNodesGroupsDeleteMutationVariables = Exact<{
  where: TemplateNodesGroupWhereUniqueInput;
}>;


export type TemplateNodesGroupsDeleteMutation = { __typename?: 'Mutation', deleteTemplateNodesGroup?: { __typename?: 'TemplateNodesGroup', id: number } | null | undefined };

export type BotFlowQueryVariables = Exact<{
  where: BotFlowWhereUniqueInput;
}>;


export type BotFlowQuery = { __typename?: 'Query', botFlow?: { __typename?: 'BotFlow', id: number, name: string, description: string, versions: Array<{ __typename?: 'BotFlowVersion', id: number, version: number, nodes: Array<{ __typename?: 'FlowNode', id: number, NodeProps: { __typename?: 'NodeProps', id: number, type: NodeType, NodeFileProps?: { __typename?: 'NodeFileProps', info: string, url: string } | null | undefined, NodeLinkProps?: { __typename?: 'NodeLinkProps', src: string, text: string } | null | undefined, NodeSwitchOptionProps?: { __typename?: 'NodeSwitchOptionProps', imageLink: string, text: string } | null | undefined, NodeImageProps?: { __typename?: 'NodeImageProps', src: string } | null | undefined, NodeAudioProps?: { __typename?: 'NodeAudioProps', src: string } | null | undefined, NodeCountdownProps?: { __typename?: 'NodeCountdownProps', duration: number } | null | undefined, NodeSwitchProps?: { __typename?: 'NodeSwitchProps', SwitchDisplayType: SwitchDisplayType } | null | undefined, NodeVideoProps?: { __typename?: 'NodeVideoProps', src: string } | null | undefined, NodeTextProps?: { __typename?: 'NodeTextProps', src: string } | null | undefined, NodeWaitProps?: { __typename?: 'NodeWaitProps', src: string, delay: number } | null | undefined }, info: { __typename?: 'NodeInfo', id: number, name: string, description: string, iconLink: string }, ports: Array<{ __typename?: 'Port', id: number, index: number, flowNodeId: number }>, pos: { __typename?: 'Pos', x: number, y: number } }>, connections: Array<{ __typename?: 'Connection', id: number, fromPort: { __typename?: 'Port', id: number }, toPort: { __typename?: 'Port', id: number } }> }> } | null | undefined };

export const NodeInfoFragmentDoc = gql`
    fragment nodeInfo on NodeInfo {
  id
  name
  description
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
export const NodeAudioPropsFragmentDoc = gql`
    fragment NodeAudioProps on NodeAudioProps {
  src
}
    `;
export const NodeCountdownPropsFragmentDoc = gql`
    fragment NodeCountdownProps on NodeCountdownProps {
  duration
}
    `;
export const NodeSwitchPropsFragmentDoc = gql`
    fragment NodeSwitchProps on NodeSwitchProps {
  SwitchDisplayType
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
  id
  type
  NodeFileProps {
    ...NodeFileProps
  }
  NodeLinkProps {
    ...NodeLinkProps
  }
  NodeSwitchOptionProps {
    ...NodeSwitchOptionProps
  }
  NodeImageProps {
    ...NodeImageProps
  }
  NodeAudioProps {
    ...NodeAudioProps
  }
  NodeCountdownProps {
    ...NodeCountdownProps
  }
  NodeSwitchProps {
    ...NodeSwitchProps
  }
  NodeVideoProps {
    ...NodeVideoProps
  }
  NodeTextProps {
    ...NodeTextProps
  }
  NodeWaitProps {
    ...NodeWaitProps
  }
}
    ${NodeFilePropsFragmentDoc}
${NodeLinkPropsFragmentDoc}
${NodeSwitchOptionPropsFragmentDoc}
${NodeImagePropsFragmentDoc}
${NodeAudioPropsFragmentDoc}
${NodeCountdownPropsFragmentDoc}
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
  NodeProps {
    type
    ...nodeProps
  }
}
    ${NodeInfoFragmentDoc}
${NodePropsFragmentDoc}`;
export const TemplateNodesDocument = gql`
    query templateNodes($cursor: TemplateNodeWhereUniqueInput, $distinct: [TemplateNodeScalarFieldEnum!], $orderBy: [TemplateNodeOrderByWithRelationInput!], $skip: Int, $take: Int, $where: TemplateNodeWhereInput) {
  templateNodes(
    cursor: $cursor
    where: $where
    take: $take
    skip: $skip
    orderBy: $orderBy
    distinct: $distinct
  ) {
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
 *      cursor: // value for 'cursor'
 *      distinct: // value for 'distinct'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
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
    mutation templateNodesMutation($input: TemplateNodeCreateInput!) {
  createTemplateNode(data: $input) {
    id
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
    mutation templateNodesUpdate($data: TemplateNodeUpdateInput!, $where: TemplateNodeWhereUniqueInput!) {
  updateTemplateNode(data: $data, where: $where) {
    id
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
 *      data: // value for 'data'
 *      where: // value for 'where'
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
    mutation templateNodesDelete($where: TemplateNodeWhereUniqueInput!) {
  deleteTemplateNode(where: $where) {
    id
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
 *      where: // value for 'where'
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
    query templateNodesGroups($cursor: TemplateNodesGroupWhereUniqueInput, $distinct: [TemplateNodesGroupScalarFieldEnum!], $orderBy: [TemplateNodesGroupOrderByWithRelationInput!], $skip: Int, $take: Int, $where: TemplateNodesGroupWhereInput) {
  templateNodesGroups(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    where: $where
    take: $take
  ) {
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
 *      cursor: // value for 'cursor'
 *      distinct: // value for 'distinct'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
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
    mutation templateNodesGroupsMutation($data: TemplateNodesGroupCreateInput!) {
  createTemplateNodesGroup(data: $data) {
    id
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
 *      data: // value for 'data'
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
    mutation templateNodesGroupsUpdate($data: TemplateNodesGroupUpdateInput!, $where: TemplateNodesGroupWhereUniqueInput!) {
  updateTemplateNodesGroup(data: $data, where: $where) {
    id
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
 *      data: // value for 'data'
 *      where: // value for 'where'
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
    mutation templateNodesGroupsDelete($where: TemplateNodesGroupWhereUniqueInput!) {
  deleteTemplateNodesGroup(where: $where) {
    id
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
 *      where: // value for 'where'
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
    query botFlow($where: BotFlowWhereUniqueInput!) {
  botFlow(where: $where) {
    id
    name
    description
    versions {
      id
      version
      nodes {
        id
        NodeProps {
          ...nodeProps
        }
        info {
          ...nodeInfo
        }
        ports {
          id
          index
          flowNodeId
        }
        pos @client {
          x
          y
        }
      }
      connections {
        id
        fromPort {
          id
        }
        toPort {
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
 *      where: // value for 'where'
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