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

export type AggregatePos = {
  __typename?: 'AggregatePos';
  _avg?: Maybe<PosAvgAggregate>;
  _count?: Maybe<PosCountAggregate>;
  _max?: Maybe<PosMaxAggregate>;
  _min?: Maybe<PosMinAggregate>;
  _sum?: Maybe<PosSumAggregate>;
};

export type AggregatePropsType = {
  __typename?: 'AggregatePropsType';
  _count?: Maybe<PropsTypeCountAggregate>;
  _max?: Maybe<PropsTypeMaxAggregate>;
  _min?: Maybe<PropsTypeMinAggregate>;
};

export type AggregateSwitchDisplayType = {
  __typename?: 'AggregateSwitchDisplayType';
  _count?: Maybe<SwitchDisplayTypeCountAggregate>;
  _max?: Maybe<SwitchDisplayTypeMaxAggregate>;
  _min?: Maybe<SwitchDisplayTypeMinAggregate>;
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
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
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
  cursor?: Maybe<BotFlowVersionWhereUniqueInput>;
  distinct?: Maybe<Array<BotFlowVersionScalarFieldEnum>>;
  orderBy?: Maybe<Array<BotFlowVersionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowVersionWhereInput>;
};

export type BotFlowAvgAggregate = {
  __typename?: 'BotFlowAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  nextVersionNumber?: Maybe<Scalars['Float']>;
};

export type BotFlowAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  nextVersionNumber?: Maybe<SortOrder>;
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
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  nextVersionNumber?: Maybe<SortOrder>;
};

export type BotFlowCreateInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  nextVersionNumber: Scalars['Int'];
  versions?: Maybe<BotFlowVersionCreateNestedManyWithoutBotFlowInput>;
};

export type BotFlowCreateNestedOneWithoutVersionsInput = {
  connect?: Maybe<BotFlowWhereUniqueInput>;
  connectOrCreate?: Maybe<BotFlowCreateOrConnectWithoutVersionsInput>;
  create?: Maybe<BotFlowCreateWithoutVersionsInput>;
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
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  nextVersionNumber?: Maybe<SortOrder>;
};

export type BotFlowMinAggregate = {
  __typename?: 'BotFlowMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nextVersionNumber?: Maybe<Scalars['Int']>;
};

export type BotFlowMinOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  nextVersionNumber?: Maybe<SortOrder>;
};

export type BotFlowOrderByWithAggregationInput = {
  _avg?: Maybe<BotFlowAvgOrderByAggregateInput>;
  _count?: Maybe<BotFlowCountOrderByAggregateInput>;
  _max?: Maybe<BotFlowMaxOrderByAggregateInput>;
  _min?: Maybe<BotFlowMinOrderByAggregateInput>;
  _sum?: Maybe<BotFlowSumOrderByAggregateInput>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  nextVersionNumber?: Maybe<SortOrder>;
};

export type BotFlowOrderByWithRelationInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  nextVersionNumber?: Maybe<SortOrder>;
  versions?: Maybe<BotFlowVersionOrderByRelationAggregateInput>;
};

export type BotFlowRelationFilter = {
  is?: Maybe<BotFlowWhereInput>;
  isNot?: Maybe<BotFlowWhereInput>;
};

export enum BotFlowScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name',
  NextVersionNumber = 'nextVersionNumber'
}

export type BotFlowScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<BotFlowScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<BotFlowScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<BotFlowScalarWhereWithAggregatesInput>>;
  description?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  nextVersionNumber?: Maybe<IntWithAggregatesFilter>;
};

export type BotFlowSumAggregate = {
  __typename?: 'BotFlowSumAggregate';
  id?: Maybe<Scalars['Int']>;
  nextVersionNumber?: Maybe<Scalars['Int']>;
};

export type BotFlowSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  nextVersionNumber?: Maybe<SortOrder>;
};

export type BotFlowUpdateInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  nextVersionNumber?: Maybe<IntFieldUpdateOperationsInput>;
  versions?: Maybe<BotFlowVersionUpdateManyWithoutBotFlowInput>;
};

export type BotFlowUpdateManyMutationInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  nextVersionNumber?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowUpdateOneRequiredWithoutVersionsInput = {
  connect?: Maybe<BotFlowWhereUniqueInput>;
  connectOrCreate?: Maybe<BotFlowCreateOrConnectWithoutVersionsInput>;
  create?: Maybe<BotFlowCreateWithoutVersionsInput>;
  update?: Maybe<BotFlowUpdateWithoutVersionsInput>;
  upsert?: Maybe<BotFlowUpsertWithoutVersionsInput>;
};

export type BotFlowUpdateWithoutVersionsInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  nextVersionNumber?: Maybe<IntFieldUpdateOperationsInput>;
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
  cursor?: Maybe<ConnectionWhereUniqueInput>;
  distinct?: Maybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: Maybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ConnectionWhereInput>;
};


export type BotFlowVersionNodesArgs = {
  cursor?: Maybe<FlowNodeWhereUniqueInput>;
  distinct?: Maybe<Array<FlowNodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FlowNodeWhereInput>;
};

export type BotFlowVersionAvgAggregate = {
  __typename?: 'BotFlowVersionAvgAggregate';
  botFlowId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

export type BotFlowVersionAvgOrderByAggregateInput = {
  botFlowId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  version?: Maybe<SortOrder>;
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
  botFlowId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  version?: Maybe<SortOrder>;
};

export type BotFlowVersionCreateInput = {
  botFlow: BotFlowCreateNestedOneWithoutVersionsInput;
  connections?: Maybe<ConnectionCreateNestedManyWithoutFlowInput>;
  nodes?: Maybe<FlowNodeCreateNestedManyWithoutFlowInput>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionCreateNestedManyWithoutBotFlowInput = {
  connect?: Maybe<Array<BotFlowVersionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<BotFlowVersionCreateOrConnectWithoutBotFlowInput>>;
  create?: Maybe<Array<BotFlowVersionCreateWithoutBotFlowInput>>;
};

export type BotFlowVersionCreateNestedOneWithoutConnectionsInput = {
  connect?: Maybe<BotFlowVersionWhereUniqueInput>;
  connectOrCreate?: Maybe<BotFlowVersionCreateOrConnectWithoutConnectionsInput>;
  create?: Maybe<BotFlowVersionCreateWithoutConnectionsInput>;
};

export type BotFlowVersionCreateNestedOneWithoutNodesInput = {
  connect?: Maybe<BotFlowVersionWhereUniqueInput>;
  connectOrCreate?: Maybe<BotFlowVersionCreateOrConnectWithoutNodesInput>;
  create?: Maybe<BotFlowVersionCreateWithoutNodesInput>;
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
  connections?: Maybe<ConnectionCreateNestedManyWithoutFlowInput>;
  nodes?: Maybe<FlowNodeCreateNestedManyWithoutFlowInput>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionCreateWithoutConnectionsInput = {
  botFlow: BotFlowCreateNestedOneWithoutVersionsInput;
  nodes?: Maybe<FlowNodeCreateNestedManyWithoutFlowInput>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionCreateWithoutNodesInput = {
  botFlow: BotFlowCreateNestedOneWithoutVersionsInput;
  connections?: Maybe<ConnectionCreateNestedManyWithoutFlowInput>;
  version?: Maybe<Scalars['Int']>;
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
  every?: Maybe<BotFlowVersionWhereInput>;
  none?: Maybe<BotFlowVersionWhereInput>;
  some?: Maybe<BotFlowVersionWhereInput>;
};

export type BotFlowVersionMaxAggregate = {
  __typename?: 'BotFlowVersionMaxAggregate';
  botFlowId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionMaxOrderByAggregateInput = {
  botFlowId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  version?: Maybe<SortOrder>;
};

export type BotFlowVersionMinAggregate = {
  __typename?: 'BotFlowVersionMinAggregate';
  botFlowId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionMinOrderByAggregateInput = {
  botFlowId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  version?: Maybe<SortOrder>;
};

export type BotFlowVersionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type BotFlowVersionOrderByWithAggregationInput = {
  _avg?: Maybe<BotFlowVersionAvgOrderByAggregateInput>;
  _count?: Maybe<BotFlowVersionCountOrderByAggregateInput>;
  _max?: Maybe<BotFlowVersionMaxOrderByAggregateInput>;
  _min?: Maybe<BotFlowVersionMinOrderByAggregateInput>;
  _sum?: Maybe<BotFlowVersionSumOrderByAggregateInput>;
  botFlowId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  version?: Maybe<SortOrder>;
};

export type BotFlowVersionOrderByWithRelationInput = {
  botFlow?: Maybe<BotFlowOrderByWithRelationInput>;
  botFlowId?: Maybe<SortOrder>;
  connections?: Maybe<ConnectionOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  nodes?: Maybe<FlowNodeOrderByRelationAggregateInput>;
  version?: Maybe<SortOrder>;
};

export type BotFlowVersionRelationFilter = {
  is?: Maybe<BotFlowVersionWhereInput>;
  isNot?: Maybe<BotFlowVersionWhereInput>;
};

export enum BotFlowVersionScalarFieldEnum {
  BotFlowId = 'botFlowId',
  Id = 'id',
  Version = 'version'
}

export type BotFlowVersionScalarWhereInput = {
  AND?: Maybe<Array<BotFlowVersionScalarWhereInput>>;
  NOT?: Maybe<Array<BotFlowVersionScalarWhereInput>>;
  OR?: Maybe<Array<BotFlowVersionScalarWhereInput>>;
  botFlowId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  version?: Maybe<IntFilter>;
};

export type BotFlowVersionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<BotFlowVersionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<BotFlowVersionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<BotFlowVersionScalarWhereWithAggregatesInput>>;
  botFlowId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  version?: Maybe<IntWithAggregatesFilter>;
};

export type BotFlowVersionSumAggregate = {
  __typename?: 'BotFlowVersionSumAggregate';
  botFlowId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type BotFlowVersionSumOrderByAggregateInput = {
  botFlowId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  version?: Maybe<SortOrder>;
};

export type BotFlowVersionUpdateInput = {
  botFlow?: Maybe<BotFlowUpdateOneRequiredWithoutVersionsInput>;
  connections?: Maybe<ConnectionUpdateManyWithoutFlowInput>;
  nodes?: Maybe<FlowNodeUpdateManyWithoutFlowInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpdateManyMutationInput = {
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpdateManyWithWhereWithoutBotFlowInput = {
  data: BotFlowVersionUpdateManyMutationInput;
  where: BotFlowVersionScalarWhereInput;
};

export type BotFlowVersionUpdateManyWithoutBotFlowInput = {
  connect?: Maybe<Array<BotFlowVersionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<BotFlowVersionCreateOrConnectWithoutBotFlowInput>>;
  create?: Maybe<Array<BotFlowVersionCreateWithoutBotFlowInput>>;
  delete?: Maybe<Array<BotFlowVersionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BotFlowVersionScalarWhereInput>>;
  disconnect?: Maybe<Array<BotFlowVersionWhereUniqueInput>>;
  set?: Maybe<Array<BotFlowVersionWhereUniqueInput>>;
  update?: Maybe<Array<BotFlowVersionUpdateWithWhereUniqueWithoutBotFlowInput>>;
  updateMany?: Maybe<Array<BotFlowVersionUpdateManyWithWhereWithoutBotFlowInput>>;
  upsert?: Maybe<Array<BotFlowVersionUpsertWithWhereUniqueWithoutBotFlowInput>>;
};

export type BotFlowVersionUpdateOneRequiredWithoutConnectionsInput = {
  connect?: Maybe<BotFlowVersionWhereUniqueInput>;
  connectOrCreate?: Maybe<BotFlowVersionCreateOrConnectWithoutConnectionsInput>;
  create?: Maybe<BotFlowVersionCreateWithoutConnectionsInput>;
  update?: Maybe<BotFlowVersionUpdateWithoutConnectionsInput>;
  upsert?: Maybe<BotFlowVersionUpsertWithoutConnectionsInput>;
};

export type BotFlowVersionUpdateOneRequiredWithoutNodesInput = {
  connect?: Maybe<BotFlowVersionWhereUniqueInput>;
  connectOrCreate?: Maybe<BotFlowVersionCreateOrConnectWithoutNodesInput>;
  create?: Maybe<BotFlowVersionCreateWithoutNodesInput>;
  update?: Maybe<BotFlowVersionUpdateWithoutNodesInput>;
  upsert?: Maybe<BotFlowVersionUpsertWithoutNodesInput>;
};

export type BotFlowVersionUpdateWithWhereUniqueWithoutBotFlowInput = {
  data: BotFlowVersionUpdateWithoutBotFlowInput;
  where: BotFlowVersionWhereUniqueInput;
};

export type BotFlowVersionUpdateWithoutBotFlowInput = {
  connections?: Maybe<ConnectionUpdateManyWithoutFlowInput>;
  nodes?: Maybe<FlowNodeUpdateManyWithoutFlowInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpdateWithoutConnectionsInput = {
  botFlow?: Maybe<BotFlowUpdateOneRequiredWithoutVersionsInput>;
  nodes?: Maybe<FlowNodeUpdateManyWithoutFlowInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type BotFlowVersionUpdateWithoutNodesInput = {
  botFlow?: Maybe<BotFlowUpdateOneRequiredWithoutVersionsInput>;
  connections?: Maybe<ConnectionUpdateManyWithoutFlowInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
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
  AND?: Maybe<Array<BotFlowVersionWhereInput>>;
  NOT?: Maybe<Array<BotFlowVersionWhereInput>>;
  OR?: Maybe<Array<BotFlowVersionWhereInput>>;
  botFlow?: Maybe<BotFlowRelationFilter>;
  botFlowId?: Maybe<IntFilter>;
  connections?: Maybe<ConnectionListRelationFilter>;
  id?: Maybe<IntFilter>;
  nodes?: Maybe<FlowNodeListRelationFilter>;
  version?: Maybe<IntFilter>;
};

export type BotFlowVersionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type BotFlowWhereInput = {
  AND?: Maybe<Array<BotFlowWhereInput>>;
  NOT?: Maybe<Array<BotFlowWhereInput>>;
  OR?: Maybe<Array<BotFlowWhereInput>>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  nextVersionNumber?: Maybe<IntFilter>;
  versions?: Maybe<BotFlowVersionListRelationFilter>;
};

export type BotFlowWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  botFlowVersionId?: Maybe<SortOrder>;
  from?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  to?: Maybe<SortOrder>;
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
  botFlowVersionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  from?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  to?: Maybe<SortOrder>;
};

export type ConnectionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  flow: BotFlowVersionCreateNestedOneWithoutConnectionsInput;
  fromPort: PortCreateNestedOneWithoutOutConnectionsInput;
  toPort: PortCreateNestedOneWithoutInConnectionInput;
};

export type ConnectionCreateNestedManyWithoutFlowInput = {
  connect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ConnectionCreateOrConnectWithoutFlowInput>>;
  create?: Maybe<Array<ConnectionCreateWithoutFlowInput>>;
};

export type ConnectionCreateNestedManyWithoutFromPortInput = {
  connect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ConnectionCreateOrConnectWithoutFromPortInput>>;
  create?: Maybe<Array<ConnectionCreateWithoutFromPortInput>>;
};

export type ConnectionCreateNestedOneWithoutToPortInput = {
  connect?: Maybe<ConnectionWhereUniqueInput>;
  connectOrCreate?: Maybe<ConnectionCreateOrConnectWithoutToPortInput>;
  create?: Maybe<ConnectionCreateWithoutToPortInput>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  fromPort: PortCreateNestedOneWithoutOutConnectionsInput;
  toPort: PortCreateNestedOneWithoutInConnectionInput;
};

export type ConnectionCreateWithoutFromPortInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  flow: BotFlowVersionCreateNestedOneWithoutConnectionsInput;
  toPort: PortCreateNestedOneWithoutInConnectionInput;
};

export type ConnectionCreateWithoutToPortInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
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
  every?: Maybe<ConnectionWhereInput>;
  none?: Maybe<ConnectionWhereInput>;
  some?: Maybe<ConnectionWhereInput>;
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
  botFlowVersionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  from?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  to?: Maybe<SortOrder>;
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
  botFlowVersionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  from?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  to?: Maybe<SortOrder>;
};

export type ConnectionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ConnectionOrderByWithAggregationInput = {
  _avg?: Maybe<ConnectionAvgOrderByAggregateInput>;
  _count?: Maybe<ConnectionCountOrderByAggregateInput>;
  _max?: Maybe<ConnectionMaxOrderByAggregateInput>;
  _min?: Maybe<ConnectionMinOrderByAggregateInput>;
  _sum?: Maybe<ConnectionSumOrderByAggregateInput>;
  botFlowVersionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  from?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  to?: Maybe<SortOrder>;
};

export type ConnectionOrderByWithRelationInput = {
  botFlowVersionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  flow?: Maybe<BotFlowVersionOrderByWithRelationInput>;
  from?: Maybe<SortOrder>;
  fromPort?: Maybe<PortOrderByWithRelationInput>;
  id?: Maybe<SortOrder>;
  to?: Maybe<SortOrder>;
  toPort?: Maybe<PortOrderByWithRelationInput>;
};

export type ConnectionRelationFilter = {
  is?: Maybe<ConnectionWhereInput>;
  isNot?: Maybe<ConnectionWhereInput>;
};

export enum ConnectionScalarFieldEnum {
  BotFlowVersionId = 'botFlowVersionId',
  CreatedAt = 'createdAt',
  From = 'from',
  Id = 'id',
  To = 'to'
}

export type ConnectionScalarWhereInput = {
  AND?: Maybe<Array<ConnectionScalarWhereInput>>;
  NOT?: Maybe<Array<ConnectionScalarWhereInput>>;
  OR?: Maybe<Array<ConnectionScalarWhereInput>>;
  botFlowVersionId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  from?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  to?: Maybe<IntFilter>;
};

export type ConnectionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ConnectionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ConnectionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ConnectionScalarWhereWithAggregatesInput>>;
  botFlowVersionId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  from?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  to?: Maybe<IntWithAggregatesFilter>;
};

export type ConnectionSumAggregate = {
  __typename?: 'ConnectionSumAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type ConnectionSumOrderByAggregateInput = {
  botFlowVersionId?: Maybe<SortOrder>;
  from?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  to?: Maybe<SortOrder>;
};

export type ConnectionUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutConnectionsInput>;
  fromPort?: Maybe<PortUpdateOneRequiredWithoutOutConnectionsInput>;
  toPort?: Maybe<PortUpdateOneRequiredWithoutInConnectionInput>;
};

export type ConnectionUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  connect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ConnectionCreateOrConnectWithoutFlowInput>>;
  create?: Maybe<Array<ConnectionCreateWithoutFlowInput>>;
  delete?: Maybe<Array<ConnectionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ConnectionScalarWhereInput>>;
  disconnect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  set?: Maybe<Array<ConnectionWhereUniqueInput>>;
  update?: Maybe<Array<ConnectionUpdateWithWhereUniqueWithoutFlowInput>>;
  updateMany?: Maybe<Array<ConnectionUpdateManyWithWhereWithoutFlowInput>>;
  upsert?: Maybe<Array<ConnectionUpsertWithWhereUniqueWithoutFlowInput>>;
};

export type ConnectionUpdateManyWithoutFromPortInput = {
  connect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ConnectionCreateOrConnectWithoutFromPortInput>>;
  create?: Maybe<Array<ConnectionCreateWithoutFromPortInput>>;
  delete?: Maybe<Array<ConnectionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ConnectionScalarWhereInput>>;
  disconnect?: Maybe<Array<ConnectionWhereUniqueInput>>;
  set?: Maybe<Array<ConnectionWhereUniqueInput>>;
  update?: Maybe<Array<ConnectionUpdateWithWhereUniqueWithoutFromPortInput>>;
  updateMany?: Maybe<Array<ConnectionUpdateManyWithWhereWithoutFromPortInput>>;
  upsert?: Maybe<Array<ConnectionUpsertWithWhereUniqueWithoutFromPortInput>>;
};

export type ConnectionUpdateOneWithoutToPortInput = {
  connect?: Maybe<ConnectionWhereUniqueInput>;
  connectOrCreate?: Maybe<ConnectionCreateOrConnectWithoutToPortInput>;
  create?: Maybe<ConnectionCreateWithoutToPortInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ConnectionUpdateWithoutToPortInput>;
  upsert?: Maybe<ConnectionUpsertWithoutToPortInput>;
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
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  fromPort?: Maybe<PortUpdateOneRequiredWithoutOutConnectionsInput>;
  toPort?: Maybe<PortUpdateOneRequiredWithoutInConnectionInput>;
};

export type ConnectionUpdateWithoutFromPortInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutConnectionsInput>;
  toPort?: Maybe<PortUpdateOneRequiredWithoutInConnectionInput>;
};

export type ConnectionUpdateWithoutToPortInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutConnectionsInput>;
  fromPort?: Maybe<PortUpdateOneRequiredWithoutOutConnectionsInput>;
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
  AND?: Maybe<Array<ConnectionWhereInput>>;
  NOT?: Maybe<Array<ConnectionWhereInput>>;
  OR?: Maybe<Array<ConnectionWhereInput>>;
  botFlowVersionId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  flow?: Maybe<BotFlowVersionRelationFilter>;
  from?: Maybe<IntFilter>;
  fromPort?: Maybe<PortRelationFilter>;
  id?: Maybe<IntFilter>;
  to?: Maybe<IntFilter>;
  toPort?: Maybe<PortRelationFilter>;
};

export type ConnectionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type FlowNode = {
  __typename?: 'FlowNode';
  NodeProps?: Maybe<NodeProps>;
  Pos?: Maybe<Pos>;
  _count?: Maybe<FlowNodeCount>;
  botFlowVersionId: Scalars['Int'];
  flow: BotFlowVersion;
  id: Scalars['Int'];
  info?: Maybe<NodeInfo>;
  ports: Array<Port>;
  templateNode?: Maybe<TemplateNode>;
  templateNodeId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type FlowNodePortsArgs = {
  cursor?: Maybe<PortWhereUniqueInput>;
  distinct?: Maybe<Array<PortScalarFieldEnum>>;
  orderBy?: Maybe<Array<PortOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PortWhereInput>;
};

export type FlowNodeAvgAggregate = {
  __typename?: 'FlowNodeAvgAggregate';
  botFlowVersionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  templateNodeId?: Maybe<Scalars['Float']>;
};

export type FlowNodeAvgOrderByAggregateInput = {
  botFlowVersionId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
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
  templateNodeId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FlowNodeCountOrderByAggregateInput = {
  botFlowVersionId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FlowNodeCreateInput = {
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosCreateNestedOneWithoutFlowNodeInput>;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info?: Maybe<NodeInfoCreateNestedOneWithoutFlowNodeInput>;
  ports?: Maybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeCreateNestedManyWithoutFlowInput = {
  connect?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FlowNodeCreateOrConnectWithoutFlowInput>>;
  create?: Maybe<Array<FlowNodeCreateWithoutFlowInput>>;
};

export type FlowNodeCreateNestedManyWithoutTemplateNodeInput = {
  connect?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FlowNodeCreateOrConnectWithoutTemplateNodeInput>>;
  create?: Maybe<Array<FlowNodeCreateWithoutTemplateNodeInput>>;
};

export type FlowNodeCreateNestedOneWithoutInfoInput = {
  connect?: Maybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FlowNodeCreateOrConnectWithoutInfoInput>;
  create?: Maybe<FlowNodeCreateWithoutInfoInput>;
};

export type FlowNodeCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FlowNodeCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<FlowNodeCreateWithoutNodePropsInput>;
};

export type FlowNodeCreateNestedOneWithoutPortsInput = {
  connect?: Maybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FlowNodeCreateOrConnectWithoutPortsInput>;
  create?: Maybe<FlowNodeCreateWithoutPortsInput>;
};

export type FlowNodeCreateNestedOneWithoutPosInput = {
  connect?: Maybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FlowNodeCreateOrConnectWithoutPosInput>;
  create?: Maybe<FlowNodeCreateWithoutPosInput>;
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

export type FlowNodeCreateOrConnectWithoutPosInput = {
  create: FlowNodeCreateWithoutPosInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeCreateOrConnectWithoutTemplateNodeInput = {
  create: FlowNodeCreateWithoutTemplateNodeInput;
  where: FlowNodeWhereUniqueInput;
};

export type FlowNodeCreateWithoutFlowInput = {
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosCreateNestedOneWithoutFlowNodeInput>;
  info?: Maybe<NodeInfoCreateNestedOneWithoutFlowNodeInput>;
  ports?: Maybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutInfoInput = {
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosCreateNestedOneWithoutFlowNodeInput>;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  ports?: Maybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutNodePropsInput = {
  Pos?: Maybe<PosCreateNestedOneWithoutFlowNodeInput>;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info?: Maybe<NodeInfoCreateNestedOneWithoutFlowNodeInput>;
  ports?: Maybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutPortsInput = {
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosCreateNestedOneWithoutFlowNodeInput>;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info?: Maybe<NodeInfoCreateNestedOneWithoutFlowNodeInput>;
  templateNode?: Maybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutPosInput = {
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutFlowNodeInput>;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info?: Maybe<NodeInfoCreateNestedOneWithoutFlowNodeInput>;
  ports?: Maybe<PortCreateNestedManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeCreateNestedOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeCreateWithoutTemplateNodeInput = {
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosCreateNestedOneWithoutFlowNodeInput>;
  flow: BotFlowVersionCreateNestedOneWithoutNodesInput;
  info?: Maybe<NodeInfoCreateNestedOneWithoutFlowNodeInput>;
  ports?: Maybe<PortCreateNestedManyWithoutNodeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  templateNodeId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type FlowNodeListRelationFilter = {
  every?: Maybe<FlowNodeWhereInput>;
  none?: Maybe<FlowNodeWhereInput>;
  some?: Maybe<FlowNodeWhereInput>;
};

export type FlowNodeMaxAggregate = {
  __typename?: 'FlowNodeMaxAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeMaxOrderByAggregateInput = {
  botFlowVersionId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FlowNodeMinAggregate = {
  __typename?: 'FlowNodeMinAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FlowNodeMinOrderByAggregateInput = {
  botFlowVersionId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FlowNodeOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type FlowNodeOrderByWithAggregationInput = {
  _avg?: Maybe<FlowNodeAvgOrderByAggregateInput>;
  _count?: Maybe<FlowNodeCountOrderByAggregateInput>;
  _max?: Maybe<FlowNodeMaxOrderByAggregateInput>;
  _min?: Maybe<FlowNodeMinOrderByAggregateInput>;
  _sum?: Maybe<FlowNodeSumOrderByAggregateInput>;
  botFlowVersionId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FlowNodeOrderByWithRelationInput = {
  NodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  Pos?: Maybe<PosOrderByWithRelationInput>;
  botFlowVersionId?: Maybe<SortOrder>;
  flow?: Maybe<BotFlowVersionOrderByWithRelationInput>;
  id?: Maybe<SortOrder>;
  info?: Maybe<NodeInfoOrderByWithRelationInput>;
  ports?: Maybe<PortOrderByRelationAggregateInput>;
  templateNode?: Maybe<TemplateNodeOrderByWithRelationInput>;
  templateNodeId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FlowNodeRelationFilter = {
  is?: Maybe<FlowNodeWhereInput>;
  isNot?: Maybe<FlowNodeWhereInput>;
};

export enum FlowNodeScalarFieldEnum {
  BotFlowVersionId = 'botFlowVersionId',
  Id = 'id',
  TemplateNodeId = 'templateNodeId',
  UpdatedAt = 'updatedAt'
}

export type FlowNodeScalarWhereInput = {
  AND?: Maybe<Array<FlowNodeScalarWhereInput>>;
  NOT?: Maybe<Array<FlowNodeScalarWhereInput>>;
  OR?: Maybe<Array<FlowNodeScalarWhereInput>>;
  botFlowVersionId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  templateNodeId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FlowNodeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<FlowNodeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<FlowNodeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<FlowNodeScalarWhereWithAggregatesInput>>;
  botFlowVersionId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  templateNodeId?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type FlowNodeSumAggregate = {
  __typename?: 'FlowNodeSumAggregate';
  botFlowVersionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
};

export type FlowNodeSumOrderByAggregateInput = {
  botFlowVersionId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type FlowNodeUpdateInput = {
  NodeProps?: Maybe<NodePropsUpdateOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosUpdateOneWithoutFlowNodeInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutFlowNodeInput>;
  ports?: Maybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateManyMutationInput = {
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  connect?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FlowNodeCreateOrConnectWithoutFlowInput>>;
  create?: Maybe<Array<FlowNodeCreateWithoutFlowInput>>;
  delete?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FlowNodeScalarWhereInput>>;
  disconnect?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  set?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  update?: Maybe<Array<FlowNodeUpdateWithWhereUniqueWithoutFlowInput>>;
  updateMany?: Maybe<Array<FlowNodeUpdateManyWithWhereWithoutFlowInput>>;
  upsert?: Maybe<Array<FlowNodeUpsertWithWhereUniqueWithoutFlowInput>>;
};

export type FlowNodeUpdateManyWithoutTemplateNodeInput = {
  connect?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FlowNodeCreateOrConnectWithoutTemplateNodeInput>>;
  create?: Maybe<Array<FlowNodeCreateWithoutTemplateNodeInput>>;
  delete?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FlowNodeScalarWhereInput>>;
  disconnect?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  set?: Maybe<Array<FlowNodeWhereUniqueInput>>;
  update?: Maybe<Array<FlowNodeUpdateWithWhereUniqueWithoutTemplateNodeInput>>;
  updateMany?: Maybe<Array<FlowNodeUpdateManyWithWhereWithoutTemplateNodeInput>>;
  upsert?: Maybe<Array<FlowNodeUpsertWithWhereUniqueWithoutTemplateNodeInput>>;
};

export type FlowNodeUpdateOneRequiredWithoutNodePropsInput = {
  connect?: Maybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FlowNodeCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<FlowNodeCreateWithoutNodePropsInput>;
  update?: Maybe<FlowNodeUpdateWithoutNodePropsInput>;
  upsert?: Maybe<FlowNodeUpsertWithoutNodePropsInput>;
};

export type FlowNodeUpdateOneRequiredWithoutPortsInput = {
  connect?: Maybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FlowNodeCreateOrConnectWithoutPortsInput>;
  create?: Maybe<FlowNodeCreateWithoutPortsInput>;
  update?: Maybe<FlowNodeUpdateWithoutPortsInput>;
  upsert?: Maybe<FlowNodeUpsertWithoutPortsInput>;
};

export type FlowNodeUpdateOneWithoutInfoInput = {
  connect?: Maybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FlowNodeCreateOrConnectWithoutInfoInput>;
  create?: Maybe<FlowNodeCreateWithoutInfoInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FlowNodeUpdateWithoutInfoInput>;
  upsert?: Maybe<FlowNodeUpsertWithoutInfoInput>;
};

export type FlowNodeUpdateOneWithoutPosInput = {
  connect?: Maybe<FlowNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FlowNodeCreateOrConnectWithoutPosInput>;
  create?: Maybe<FlowNodeCreateWithoutPosInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FlowNodeUpdateWithoutPosInput>;
  upsert?: Maybe<FlowNodeUpsertWithoutPosInput>;
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
  NodeProps?: Maybe<NodePropsUpdateOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosUpdateOneWithoutFlowNodeInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutFlowNodeInput>;
  ports?: Maybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutInfoInput = {
  NodeProps?: Maybe<NodePropsUpdateOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosUpdateOneWithoutFlowNodeInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  ports?: Maybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutNodePropsInput = {
  Pos?: Maybe<PosUpdateOneWithoutFlowNodeInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutFlowNodeInput>;
  ports?: Maybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutPortsInput = {
  NodeProps?: Maybe<NodePropsUpdateOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosUpdateOneWithoutFlowNodeInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutFlowNodeInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutPosInput = {
  NodeProps?: Maybe<NodePropsUpdateOneWithoutFlowNodeInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutFlowNodeInput>;
  ports?: Maybe<PortUpdateManyWithoutNodeInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneWithoutFlowNodeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FlowNodeUpdateWithoutTemplateNodeInput = {
  NodeProps?: Maybe<NodePropsUpdateOneWithoutFlowNodeInput>;
  Pos?: Maybe<PosUpdateOneWithoutFlowNodeInput>;
  flow?: Maybe<BotFlowVersionUpdateOneRequiredWithoutNodesInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutFlowNodeInput>;
  ports?: Maybe<PortUpdateManyWithoutNodeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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

export type FlowNodeUpsertWithoutPosInput = {
  create: FlowNodeCreateWithoutPosInput;
  update: FlowNodeUpdateWithoutPosInput;
};

export type FlowNodeWhereInput = {
  AND?: Maybe<Array<FlowNodeWhereInput>>;
  NOT?: Maybe<Array<FlowNodeWhereInput>>;
  NodeProps?: Maybe<NodePropsRelationFilter>;
  OR?: Maybe<Array<FlowNodeWhereInput>>;
  Pos?: Maybe<PosRelationFilter>;
  botFlowVersionId?: Maybe<IntFilter>;
  flow?: Maybe<BotFlowVersionRelationFilter>;
  id?: Maybe<IntFilter>;
  info?: Maybe<NodeInfoRelationFilter>;
  ports?: Maybe<PortListRelationFilter>;
  templateNode?: Maybe<TemplateNodeRelationFilter>;
  templateNodeId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FlowNodeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBotFlow: BotFlow;
  createBotFlowVersion: BotFlowVersion;
  createConnection: Connection;
  createFlowNode: FlowNode;
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
  createPos: Pos;
  createPropsType: PropsType;
  createSwitchDisplayType: SwitchDisplayType;
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
  deleteManyPos: AffectedRowsOutput;
  deleteManyPropsType: AffectedRowsOutput;
  deleteManySwitchDisplayType: AffectedRowsOutput;
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
  deletePos?: Maybe<Pos>;
  deletePropsType?: Maybe<PropsType>;
  deleteSwitchDisplayType?: Maybe<SwitchDisplayType>;
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
  updateManyPos: AffectedRowsOutput;
  updateManyPropsType: AffectedRowsOutput;
  updateManySwitchDisplayType: AffectedRowsOutput;
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
  updatePos?: Maybe<Pos>;
  updatePropsType?: Maybe<PropsType>;
  updateSwitchDisplayType?: Maybe<SwitchDisplayType>;
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
  upsertPos: Pos;
  upsertPropsType: PropsType;
  upsertSwitchDisplayType: SwitchDisplayType;
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


export type MutationCreatePosArgs = {
  data: PosCreateInput;
};


export type MutationCreatePropsTypeArgs = {
  data: PropsTypeCreateInput;
};


export type MutationCreateSwitchDisplayTypeArgs = {
  data: SwitchDisplayTypeCreateInput;
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
  where?: Maybe<BotFlowWhereInput>;
};


export type MutationDeleteManyBotFlowVersionArgs = {
  where?: Maybe<BotFlowVersionWhereInput>;
};


export type MutationDeleteManyConnectionArgs = {
  where?: Maybe<ConnectionWhereInput>;
};


export type MutationDeleteManyFlowNodeArgs = {
  where?: Maybe<FlowNodeWhereInput>;
};


export type MutationDeleteManyNodeAudioPropsArgs = {
  where?: Maybe<NodeAudioPropsWhereInput>;
};


export type MutationDeleteManyNodeCountdownPropsArgs = {
  where?: Maybe<NodeCountdownPropsWhereInput>;
};


export type MutationDeleteManyNodeFilePropsArgs = {
  where?: Maybe<NodeFilePropsWhereInput>;
};


export type MutationDeleteManyNodeImagePropsArgs = {
  where?: Maybe<NodeImagePropsWhereInput>;
};


export type MutationDeleteManyNodeInfoArgs = {
  where?: Maybe<NodeInfoWhereInput>;
};


export type MutationDeleteManyNodeLinkPropsArgs = {
  where?: Maybe<NodeLinkPropsWhereInput>;
};


export type MutationDeleteManyNodePropsArgs = {
  where?: Maybe<NodePropsWhereInput>;
};


export type MutationDeleteManyNodeSwitchOptionPropsArgs = {
  where?: Maybe<NodeSwitchOptionPropsWhereInput>;
};


export type MutationDeleteManyNodeSwitchPropsArgs = {
  where?: Maybe<NodeSwitchPropsWhereInput>;
};


export type MutationDeleteManyNodeTextPropsArgs = {
  where?: Maybe<NodeTextPropsWhereInput>;
};


export type MutationDeleteManyNodeVideoPropsArgs = {
  where?: Maybe<NodeVideoPropsWhereInput>;
};


export type MutationDeleteManyNodeWaitPropsArgs = {
  where?: Maybe<NodeWaitPropsWhereInput>;
};


export type MutationDeleteManyPortArgs = {
  where?: Maybe<PortWhereInput>;
};


export type MutationDeleteManyPosArgs = {
  where?: Maybe<PosWhereInput>;
};


export type MutationDeleteManyPropsTypeArgs = {
  where?: Maybe<PropsTypeWhereInput>;
};


export type MutationDeleteManySwitchDisplayTypeArgs = {
  where?: Maybe<SwitchDisplayTypeWhereInput>;
};


export type MutationDeleteManyTemplateNodeArgs = {
  where?: Maybe<TemplateNodeWhereInput>;
};


export type MutationDeleteManyTemplateNodesGroupArgs = {
  where?: Maybe<TemplateNodesGroupWhereInput>;
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


export type MutationDeletePosArgs = {
  where: PosWhereUniqueInput;
};


export type MutationDeletePropsTypeArgs = {
  where: PropsTypeWhereUniqueInput;
};


export type MutationDeleteSwitchDisplayTypeArgs = {
  where: SwitchDisplayTypeWhereUniqueInput;
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
  where?: Maybe<BotFlowWhereInput>;
};


export type MutationUpdateManyBotFlowVersionArgs = {
  data: BotFlowVersionUpdateManyMutationInput;
  where?: Maybe<BotFlowVersionWhereInput>;
};


export type MutationUpdateManyConnectionArgs = {
  data: ConnectionUpdateManyMutationInput;
  where?: Maybe<ConnectionWhereInput>;
};


export type MutationUpdateManyFlowNodeArgs = {
  data: FlowNodeUpdateManyMutationInput;
  where?: Maybe<FlowNodeWhereInput>;
};


export type MutationUpdateManyNodeAudioPropsArgs = {
  data: NodeAudioPropsUpdateManyMutationInput;
  where?: Maybe<NodeAudioPropsWhereInput>;
};


export type MutationUpdateManyNodeCountdownPropsArgs = {
  data: NodeCountdownPropsUpdateManyMutationInput;
  where?: Maybe<NodeCountdownPropsWhereInput>;
};


export type MutationUpdateManyNodeFilePropsArgs = {
  data: NodeFilePropsUpdateManyMutationInput;
  where?: Maybe<NodeFilePropsWhereInput>;
};


export type MutationUpdateManyNodeImagePropsArgs = {
  data: NodeImagePropsUpdateManyMutationInput;
  where?: Maybe<NodeImagePropsWhereInput>;
};


export type MutationUpdateManyNodeInfoArgs = {
  data: NodeInfoUpdateManyMutationInput;
  where?: Maybe<NodeInfoWhereInput>;
};


export type MutationUpdateManyNodeLinkPropsArgs = {
  data: NodeLinkPropsUpdateManyMutationInput;
  where?: Maybe<NodeLinkPropsWhereInput>;
};


export type MutationUpdateManyNodePropsArgs = {
  data: NodePropsUpdateManyMutationInput;
  where?: Maybe<NodePropsWhereInput>;
};


export type MutationUpdateManyNodeSwitchOptionPropsArgs = {
  data: NodeSwitchOptionPropsUpdateManyMutationInput;
  where?: Maybe<NodeSwitchOptionPropsWhereInput>;
};


export type MutationUpdateManyNodeSwitchPropsArgs = {
  data: NodeSwitchPropsUpdateManyMutationInput;
  where?: Maybe<NodeSwitchPropsWhereInput>;
};


export type MutationUpdateManyNodeTextPropsArgs = {
  data: NodeTextPropsUpdateManyMutationInput;
  where?: Maybe<NodeTextPropsWhereInput>;
};


export type MutationUpdateManyNodeVideoPropsArgs = {
  data: NodeVideoPropsUpdateManyMutationInput;
  where?: Maybe<NodeVideoPropsWhereInput>;
};


export type MutationUpdateManyNodeWaitPropsArgs = {
  data: NodeWaitPropsUpdateManyMutationInput;
  where?: Maybe<NodeWaitPropsWhereInput>;
};


export type MutationUpdateManyPortArgs = {
  data: PortUpdateManyMutationInput;
  where?: Maybe<PortWhereInput>;
};


export type MutationUpdateManyPosArgs = {
  data: PosUpdateManyMutationInput;
  where?: Maybe<PosWhereInput>;
};


export type MutationUpdateManyPropsTypeArgs = {
  data: PropsTypeUpdateManyMutationInput;
  where?: Maybe<PropsTypeWhereInput>;
};


export type MutationUpdateManySwitchDisplayTypeArgs = {
  data: SwitchDisplayTypeUpdateManyMutationInput;
  where?: Maybe<SwitchDisplayTypeWhereInput>;
};


export type MutationUpdateManyTemplateNodeArgs = {
  data: TemplateNodeUpdateManyMutationInput;
  where?: Maybe<TemplateNodeWhereInput>;
};


export type MutationUpdateManyTemplateNodesGroupArgs = {
  data: TemplateNodesGroupUpdateManyMutationInput;
  where?: Maybe<TemplateNodesGroupWhereInput>;
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


export type MutationUpdatePosArgs = {
  data: PosUpdateInput;
  where: PosWhereUniqueInput;
};


export type MutationUpdatePropsTypeArgs = {
  data: PropsTypeUpdateInput;
  where: PropsTypeWhereUniqueInput;
};


export type MutationUpdateSwitchDisplayTypeArgs = {
  data: SwitchDisplayTypeUpdateInput;
  where: SwitchDisplayTypeWhereUniqueInput;
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


export type MutationUpsertPosArgs = {
  create: PosCreateInput;
  update: PosUpdateInput;
  where: PosWhereUniqueInput;
};


export type MutationUpsertPropsTypeArgs = {
  create: PropsTypeCreateInput;
  update: PropsTypeUpdateInput;
  where: PropsTypeWhereUniqueInput;
};


export type MutationUpsertSwitchDisplayTypeArgs = {
  create: SwitchDisplayTypeCreateInput;
  update: SwitchDisplayTypeUpdateInput;
  where: SwitchDisplayTypeWhereUniqueInput;
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
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
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
  id?: Maybe<SortOrder>;
};

export type NodeAudioPropsCountAggregate = {
  __typename?: 'NodeAudioPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeAudioPropsCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeAudioPropsCreateInput = {
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeAudioPropsInput>;
  src: Scalars['String'];
};

export type NodeAudioPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeAudioPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeAudioPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeAudioPropsCreateWithoutNodePropsInput>;
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
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeAudioPropsMinAggregate = {
  __typename?: 'NodeAudioPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeAudioPropsMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeAudioPropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeAudioPropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeAudioPropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeAudioPropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeAudioPropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeAudioPropsSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeAudioPropsOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  src?: Maybe<SortOrder>;
};

export type NodeAudioPropsRelationFilter = {
  is?: Maybe<NodeAudioPropsWhereInput>;
  isNot?: Maybe<NodeAudioPropsWhereInput>;
};

export enum NodeAudioPropsScalarFieldEnum {
  Id = 'id',
  Src = 'src'
}

export type NodeAudioPropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeAudioPropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeAudioPropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeAudioPropsScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  src?: Maybe<StringWithAggregatesFilter>;
};

export type NodeAudioPropsSumAggregate = {
  __typename?: 'NodeAudioPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeAudioPropsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeAudioPropsUpdateInput = {
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeAudioPropsInput>;
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeAudioPropsUpdateManyMutationInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeAudioPropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeAudioPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeAudioPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeAudioPropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeAudioPropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeAudioPropsUpsertWithoutNodePropsInput>;
};

export type NodeAudioPropsUpdateWithoutNodePropsInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeAudioPropsUpsertWithoutNodePropsInput = {
  create: NodeAudioPropsCreateWithoutNodePropsInput;
  update: NodeAudioPropsUpdateWithoutNodePropsInput;
};

export type NodeAudioPropsWhereInput = {
  AND?: Maybe<Array<NodeAudioPropsWhereInput>>;
  NOT?: Maybe<Array<NodeAudioPropsWhereInput>>;
  OR?: Maybe<Array<NodeAudioPropsWhereInput>>;
  id?: Maybe<IntFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  src?: Maybe<StringFilter>;
};

export type NodeAudioPropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  duration?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type NodeCountdownPropsCountAggregate = {
  __typename?: 'NodeCountdownPropsCountAggregate';
  _all: Scalars['Int'];
  duration: Scalars['Int'];
  id: Scalars['Int'];
};

export type NodeCountdownPropsCountOrderByAggregateInput = {
  duration?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type NodeCountdownPropsCreateInput = {
  duration: Scalars['Int'];
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeCountdownPropsInput>;
};

export type NodeCountdownPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeCountdownPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeCountdownPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeCountdownPropsCreateWithoutNodePropsInput>;
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
  duration?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type NodeCountdownPropsMinAggregate = {
  __typename?: 'NodeCountdownPropsMinAggregate';
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type NodeCountdownPropsMinOrderByAggregateInput = {
  duration?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type NodeCountdownPropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeCountdownPropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeCountdownPropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeCountdownPropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeCountdownPropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeCountdownPropsSumOrderByAggregateInput>;
  duration?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type NodeCountdownPropsOrderByWithRelationInput = {
  duration?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
};

export type NodeCountdownPropsRelationFilter = {
  is?: Maybe<NodeCountdownPropsWhereInput>;
  isNot?: Maybe<NodeCountdownPropsWhereInput>;
};

export enum NodeCountdownPropsScalarFieldEnum {
  Duration = 'duration',
  Id = 'id'
}

export type NodeCountdownPropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeCountdownPropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeCountdownPropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeCountdownPropsScalarWhereWithAggregatesInput>>;
  duration?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
};

export type NodeCountdownPropsSumAggregate = {
  __typename?: 'NodeCountdownPropsSumAggregate';
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type NodeCountdownPropsSumOrderByAggregateInput = {
  duration?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type NodeCountdownPropsUpdateInput = {
  duration?: Maybe<IntFieldUpdateOperationsInput>;
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeCountdownPropsInput>;
};

export type NodeCountdownPropsUpdateManyMutationInput = {
  duration?: Maybe<IntFieldUpdateOperationsInput>;
};

export type NodeCountdownPropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeCountdownPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeCountdownPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeCountdownPropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeCountdownPropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeCountdownPropsUpsertWithoutNodePropsInput>;
};

export type NodeCountdownPropsUpdateWithoutNodePropsInput = {
  duration?: Maybe<IntFieldUpdateOperationsInput>;
};

export type NodeCountdownPropsUpsertWithoutNodePropsInput = {
  create: NodeCountdownPropsCreateWithoutNodePropsInput;
  update: NodeCountdownPropsUpdateWithoutNodePropsInput;
};

export type NodeCountdownPropsWhereInput = {
  AND?: Maybe<Array<NodeCountdownPropsWhereInput>>;
  NOT?: Maybe<Array<NodeCountdownPropsWhereInput>>;
  OR?: Maybe<Array<NodeCountdownPropsWhereInput>>;
  duration?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
};

export type NodeCountdownPropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  id?: Maybe<SortOrder>;
};

export type NodeFilePropsCountAggregate = {
  __typename?: 'NodeFilePropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  info: Scalars['Int'];
  url: Scalars['Int'];
};

export type NodeFilePropsCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  info?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type NodeFilePropsCreateInput = {
  info: Scalars['String'];
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeFilePropsInput>;
  url: Scalars['String'];
};

export type NodeFilePropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeFilePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeFilePropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeFilePropsCreateWithoutNodePropsInput>;
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
  id?: Maybe<SortOrder>;
  info?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type NodeFilePropsMinAggregate = {
  __typename?: 'NodeFilePropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NodeFilePropsMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  info?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type NodeFilePropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeFilePropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeFilePropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeFilePropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeFilePropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeFilePropsSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  info?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type NodeFilePropsOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  info?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  url?: Maybe<SortOrder>;
};

export type NodeFilePropsRelationFilter = {
  is?: Maybe<NodeFilePropsWhereInput>;
  isNot?: Maybe<NodeFilePropsWhereInput>;
};

export enum NodeFilePropsScalarFieldEnum {
  Id = 'id',
  Info = 'info',
  Url = 'url'
}

export type NodeFilePropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeFilePropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeFilePropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeFilePropsScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  info?: Maybe<StringWithAggregatesFilter>;
  url?: Maybe<StringWithAggregatesFilter>;
};

export type NodeFilePropsSumAggregate = {
  __typename?: 'NodeFilePropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeFilePropsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeFilePropsUpdateInput = {
  info?: Maybe<StringFieldUpdateOperationsInput>;
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeFilePropsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeFilePropsUpdateManyMutationInput = {
  info?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeFilePropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeFilePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeFilePropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeFilePropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeFilePropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeFilePropsUpsertWithoutNodePropsInput>;
};

export type NodeFilePropsUpdateWithoutNodePropsInput = {
  info?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeFilePropsUpsertWithoutNodePropsInput = {
  create: NodeFilePropsCreateWithoutNodePropsInput;
  update: NodeFilePropsUpdateWithoutNodePropsInput;
};

export type NodeFilePropsWhereInput = {
  AND?: Maybe<Array<NodeFilePropsWhereInput>>;
  NOT?: Maybe<Array<NodeFilePropsWhereInput>>;
  OR?: Maybe<Array<NodeFilePropsWhereInput>>;
  id?: Maybe<IntFilter>;
  info?: Maybe<StringFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  url?: Maybe<StringFilter>;
};

export type NodeFilePropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  id?: Maybe<SortOrder>;
};

export type NodeImagePropsCountAggregate = {
  __typename?: 'NodeImagePropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeImagePropsCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeImagePropsCreateInput = {
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeImagePropsInput>;
  src: Scalars['String'];
};

export type NodeImagePropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeImagePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeImagePropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeImagePropsCreateWithoutNodePropsInput>;
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
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeImagePropsMinAggregate = {
  __typename?: 'NodeImagePropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeImagePropsMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeImagePropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeImagePropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeImagePropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeImagePropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeImagePropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeImagePropsSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeImagePropsOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  src?: Maybe<SortOrder>;
};

export type NodeImagePropsRelationFilter = {
  is?: Maybe<NodeImagePropsWhereInput>;
  isNot?: Maybe<NodeImagePropsWhereInput>;
};

export enum NodeImagePropsScalarFieldEnum {
  Id = 'id',
  Src = 'src'
}

export type NodeImagePropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeImagePropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeImagePropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeImagePropsScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  src?: Maybe<StringWithAggregatesFilter>;
};

export type NodeImagePropsSumAggregate = {
  __typename?: 'NodeImagePropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeImagePropsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeImagePropsUpdateInput = {
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeImagePropsInput>;
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeImagePropsUpdateManyMutationInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeImagePropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeImagePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeImagePropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeImagePropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeImagePropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeImagePropsUpsertWithoutNodePropsInput>;
};

export type NodeImagePropsUpdateWithoutNodePropsInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeImagePropsUpsertWithoutNodePropsInput = {
  create: NodeImagePropsCreateWithoutNodePropsInput;
  update: NodeImagePropsUpdateWithoutNodePropsInput;
};

export type NodeImagePropsWhereInput = {
  AND?: Maybe<Array<NodeImagePropsWhereInput>>;
  NOT?: Maybe<Array<NodeImagePropsWhereInput>>;
  OR?: Maybe<Array<NodeImagePropsWhereInput>>;
  id?: Maybe<IntFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  src?: Maybe<StringFilter>;
};

export type NodeImagePropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type NodeInfo = {
  __typename?: 'NodeInfo';
  FlowNode?: Maybe<FlowNode>;
  TemplateNode?: Maybe<TemplateNode>;
  description: Scalars['String'];
  flowNodeId?: Maybe<Scalars['Int']>;
  iconLink: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  templateNodeId?: Maybe<Scalars['Int']>;
};

export type NodeInfoAvgAggregate = {
  __typename?: 'NodeInfoAvgAggregate';
  flowNodeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  templateNodeId?: Maybe<Scalars['Float']>;
};

export type NodeInfoAvgOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodeInfoCountAggregate = {
  __typename?: 'NodeInfoCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  flowNodeId: Scalars['Int'];
  iconLink: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  templateNodeId: Scalars['Int'];
};

export type NodeInfoCountOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  iconLink?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodeInfoCreateInput = {
  FlowNode?: Maybe<FlowNodeCreateNestedOneWithoutInfoInput>;
  TemplateNode?: Maybe<TemplateNodeCreateNestedOneWithoutInfoInput>;
  description: Scalars['String'];
  iconLink: Scalars['String'];
  name: Scalars['String'];
};

export type NodeInfoCreateNestedOneWithoutFlowNodeInput = {
  connect?: Maybe<NodeInfoWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeInfoCreateOrConnectWithoutFlowNodeInput>;
  create?: Maybe<NodeInfoCreateWithoutFlowNodeInput>;
};

export type NodeInfoCreateNestedOneWithoutTemplateNodeInput = {
  connect?: Maybe<NodeInfoWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeInfoCreateOrConnectWithoutTemplateNodeInput>;
  create?: Maybe<NodeInfoCreateWithoutTemplateNodeInput>;
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
  TemplateNode?: Maybe<TemplateNodeCreateNestedOneWithoutInfoInput>;
  description: Scalars['String'];
  iconLink: Scalars['String'];
  name: Scalars['String'];
};

export type NodeInfoCreateWithoutTemplateNodeInput = {
  FlowNode?: Maybe<FlowNodeCreateNestedOneWithoutInfoInput>;
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
  flowNodeId?: Maybe<Scalars['Int']>;
  iconLink: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  templateNodeId?: Maybe<Scalars['Int']>;
};

export type NodeInfoMaxAggregate = {
  __typename?: 'NodeInfoMaxAggregate';
  description?: Maybe<Scalars['String']>;
  flowNodeId?: Maybe<Scalars['Int']>;
  iconLink?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  templateNodeId?: Maybe<Scalars['Int']>;
};

export type NodeInfoMaxOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  iconLink?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodeInfoMinAggregate = {
  __typename?: 'NodeInfoMinAggregate';
  description?: Maybe<Scalars['String']>;
  flowNodeId?: Maybe<Scalars['Int']>;
  iconLink?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  templateNodeId?: Maybe<Scalars['Int']>;
};

export type NodeInfoMinOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  iconLink?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodeInfoOrderByWithAggregationInput = {
  _avg?: Maybe<NodeInfoAvgOrderByAggregateInput>;
  _count?: Maybe<NodeInfoCountOrderByAggregateInput>;
  _max?: Maybe<NodeInfoMaxOrderByAggregateInput>;
  _min?: Maybe<NodeInfoMinOrderByAggregateInput>;
  _sum?: Maybe<NodeInfoSumOrderByAggregateInput>;
  description?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  iconLink?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodeInfoOrderByWithRelationInput = {
  FlowNode?: Maybe<FlowNodeOrderByWithRelationInput>;
  TemplateNode?: Maybe<TemplateNodeOrderByWithRelationInput>;
  description?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  iconLink?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodeInfoRelationFilter = {
  is?: Maybe<NodeInfoWhereInput>;
  isNot?: Maybe<NodeInfoWhereInput>;
};

export enum NodeInfoScalarFieldEnum {
  Description = 'description',
  FlowNodeId = 'flowNodeId',
  IconLink = 'iconLink',
  Id = 'id',
  Name = 'name',
  TemplateNodeId = 'templateNodeId'
}

export type NodeInfoScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeInfoScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeInfoScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeInfoScalarWhereWithAggregatesInput>>;
  description?: Maybe<StringWithAggregatesFilter>;
  flowNodeId?: Maybe<IntNullableWithAggregatesFilter>;
  iconLink?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  templateNodeId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type NodeInfoSumAggregate = {
  __typename?: 'NodeInfoSumAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
};

export type NodeInfoSumOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodeInfoUpdateInput = {
  FlowNode?: Maybe<FlowNodeUpdateOneWithoutInfoInput>;
  TemplateNode?: Maybe<TemplateNodeUpdateOneWithoutInfoInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  iconLink?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeInfoUpdateManyMutationInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  iconLink?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeInfoUpdateOneWithoutFlowNodeInput = {
  connect?: Maybe<NodeInfoWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeInfoCreateOrConnectWithoutFlowNodeInput>;
  create?: Maybe<NodeInfoCreateWithoutFlowNodeInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeInfoUpdateWithoutFlowNodeInput>;
  upsert?: Maybe<NodeInfoUpsertWithoutFlowNodeInput>;
};

export type NodeInfoUpdateOneWithoutTemplateNodeInput = {
  connect?: Maybe<NodeInfoWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeInfoCreateOrConnectWithoutTemplateNodeInput>;
  create?: Maybe<NodeInfoCreateWithoutTemplateNodeInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeInfoUpdateWithoutTemplateNodeInput>;
  upsert?: Maybe<NodeInfoUpsertWithoutTemplateNodeInput>;
};

export type NodeInfoUpdateWithoutFlowNodeInput = {
  TemplateNode?: Maybe<TemplateNodeUpdateOneWithoutInfoInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  iconLink?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeInfoUpdateWithoutTemplateNodeInput = {
  FlowNode?: Maybe<FlowNodeUpdateOneWithoutInfoInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  iconLink?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
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
  AND?: Maybe<Array<NodeInfoWhereInput>>;
  FlowNode?: Maybe<FlowNodeRelationFilter>;
  NOT?: Maybe<Array<NodeInfoWhereInput>>;
  OR?: Maybe<Array<NodeInfoWhereInput>>;
  TemplateNode?: Maybe<TemplateNodeRelationFilter>;
  description?: Maybe<StringFilter>;
  flowNodeId?: Maybe<IntNullableFilter>;
  iconLink?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  templateNodeId?: Maybe<IntNullableFilter>;
};

export type NodeInfoWhereUniqueInput = {
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
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
  id?: Maybe<SortOrder>;
};

export type NodeLinkPropsCountAggregate = {
  __typename?: 'NodeLinkPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
  text: Scalars['Int'];
};

export type NodeLinkPropsCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeLinkPropsCreateInput = {
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeLinkPropsInput>;
  src: Scalars['String'];
  text: Scalars['String'];
};

export type NodeLinkPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeLinkPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeLinkPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeLinkPropsCreateWithoutNodePropsInput>;
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
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeLinkPropsMinAggregate = {
  __typename?: 'NodeLinkPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeLinkPropsMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeLinkPropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeLinkPropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeLinkPropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeLinkPropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeLinkPropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeLinkPropsSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeLinkPropsOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  src?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeLinkPropsRelationFilter = {
  is?: Maybe<NodeLinkPropsWhereInput>;
  isNot?: Maybe<NodeLinkPropsWhereInput>;
};

export enum NodeLinkPropsScalarFieldEnum {
  Id = 'id',
  Src = 'src',
  Text = 'text'
}

export type NodeLinkPropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeLinkPropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeLinkPropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeLinkPropsScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  src?: Maybe<StringWithAggregatesFilter>;
  text?: Maybe<StringWithAggregatesFilter>;
};

export type NodeLinkPropsSumAggregate = {
  __typename?: 'NodeLinkPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeLinkPropsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeLinkPropsUpdateInput = {
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeLinkPropsInput>;
  src?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeLinkPropsUpdateManyMutationInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeLinkPropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeLinkPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeLinkPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeLinkPropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeLinkPropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeLinkPropsUpsertWithoutNodePropsInput>;
};

export type NodeLinkPropsUpdateWithoutNodePropsInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeLinkPropsUpsertWithoutNodePropsInput = {
  create: NodeLinkPropsCreateWithoutNodePropsInput;
  update: NodeLinkPropsUpdateWithoutNodePropsInput;
};

export type NodeLinkPropsWhereInput = {
  AND?: Maybe<Array<NodeLinkPropsWhereInput>>;
  NOT?: Maybe<Array<NodeLinkPropsWhereInput>>;
  OR?: Maybe<Array<NodeLinkPropsWhereInput>>;
  id?: Maybe<IntFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  src?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
};

export type NodeLinkPropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  PropsType: PropsType;
  createdAt: Scalars['DateTime'];
  flowNode: FlowNode;
  flowNodeId: Scalars['Int'];
  id: Scalars['Int'];
  templateNode: TemplateNode;
  templateNodeId: Scalars['Int'];
  type: Scalars['String'];
};

export type NodePropsAvgAggregate = {
  __typename?: 'NodePropsAvgAggregate';
  flowNodeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  templateNodeId?: Maybe<Scalars['Float']>;
};

export type NodePropsAvgOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodePropsCountAggregate = {
  __typename?: 'NodePropsCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  flowNodeId: Scalars['Int'];
  id: Scalars['Int'];
  templateNodeId: Scalars['Int'];
  type: Scalars['Int'];
};

export type NodePropsCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type NodePropsCreateInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateNestedManyWithoutPropsTypeInput = {
  connect?: Maybe<Array<NodePropsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NodePropsCreateOrConnectWithoutPropsTypeInput>>;
  create?: Maybe<Array<NodePropsCreateWithoutPropsTypeInput>>;
};

export type NodePropsCreateNestedOneWithoutFlowNodeInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutFlowNodeInput>;
  create?: Maybe<NodePropsCreateWithoutFlowNodeInput>;
};

export type NodePropsCreateNestedOneWithoutNodeAudioPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeAudioPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeAudioPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeCountdownPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeCountdownPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeCountdownPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeFilePropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeFilePropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeFilePropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeImagePropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeImagePropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeImagePropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeLinkPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeLinkPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeLinkPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeSwitchOptionPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeSwitchOptionPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeSwitchOptionPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeSwitchPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeSwitchPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeSwitchPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeTextPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeTextPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeTextPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeVideoPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeVideoPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeVideoPropsInput>;
};

export type NodePropsCreateNestedOneWithoutNodeWaitPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeWaitPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeWaitPropsInput>;
};

export type NodePropsCreateNestedOneWithoutTemplateNodeInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutTemplateNodeInput>;
  create?: Maybe<NodePropsCreateWithoutTemplateNodeInput>;
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

export type NodePropsCreateOrConnectWithoutPropsTypeInput = {
  create: NodePropsCreateWithoutPropsTypeInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateOrConnectWithoutTemplateNodeInput = {
  create: NodePropsCreateWithoutTemplateNodeInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsCreateWithoutFlowNodeInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeAudioPropsInput = {
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeCountdownPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeFilePropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeImagePropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeLinkPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeSwitchOptionPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeSwitchPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeTextPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeVideoPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutNodeWaitPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutPropsTypeInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
  templateNode: TemplateNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsCreateWithoutTemplateNodeInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsCreateNestedOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsCreateNestedOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsCreateNestedOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsCreateNestedOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsCreateNestedOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsCreateNestedOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsCreateNestedOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeCreateNestedOneWithoutNodePropsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNode: FlowNodeCreateNestedOneWithoutNodePropsInput;
};

export type NodePropsGroupBy = {
  __typename?: 'NodePropsGroupBy';
  _avg?: Maybe<NodePropsAvgAggregate>;
  _count?: Maybe<NodePropsCountAggregate>;
  _max?: Maybe<NodePropsMaxAggregate>;
  _min?: Maybe<NodePropsMinAggregate>;
  _sum?: Maybe<NodePropsSumAggregate>;
  createdAt: Scalars['DateTime'];
  flowNodeId: Scalars['Int'];
  id: Scalars['Int'];
  templateNodeId: Scalars['Int'];
  type: Scalars['String'];
};

export type NodePropsListRelationFilter = {
  every?: Maybe<NodePropsWhereInput>;
  none?: Maybe<NodePropsWhereInput>;
  some?: Maybe<NodePropsWhereInput>;
};

export type NodePropsMaxAggregate = {
  __typename?: 'NodePropsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type NodePropsMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type NodePropsMinAggregate = {
  __typename?: 'NodePropsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type NodePropsMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type NodePropsOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type NodePropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodePropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodePropsCountOrderByAggregateInput>;
  _max?: Maybe<NodePropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodePropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodePropsSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type NodePropsOrderByWithRelationInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsOrderByWithRelationInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsOrderByWithRelationInput>;
  NodeFileProps?: Maybe<NodeFilePropsOrderByWithRelationInput>;
  NodeImageProps?: Maybe<NodeImagePropsOrderByWithRelationInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsOrderByWithRelationInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsOrderByWithRelationInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsOrderByWithRelationInput>;
  NodeTextProps?: Maybe<NodeTextPropsOrderByWithRelationInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsOrderByWithRelationInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsOrderByWithRelationInput>;
  PropsType?: Maybe<PropsTypeOrderByWithRelationInput>;
  createdAt?: Maybe<SortOrder>;
  flowNode?: Maybe<FlowNodeOrderByWithRelationInput>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNode?: Maybe<TemplateNodeOrderByWithRelationInput>;
  templateNodeId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type NodePropsRelationFilter = {
  is?: Maybe<NodePropsWhereInput>;
  isNot?: Maybe<NodePropsWhereInput>;
};

export enum NodePropsScalarFieldEnum {
  CreatedAt = 'createdAt',
  FlowNodeId = 'flowNodeId',
  Id = 'id',
  TemplateNodeId = 'templateNodeId',
  Type = 'type'
}

export type NodePropsScalarWhereInput = {
  AND?: Maybe<Array<NodePropsScalarWhereInput>>;
  NOT?: Maybe<Array<NodePropsScalarWhereInput>>;
  OR?: Maybe<Array<NodePropsScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  flowNodeId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  templateNodeId?: Maybe<IntFilter>;
  type?: Maybe<StringFilter>;
};

export type NodePropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodePropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodePropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodePropsScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  flowNodeId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  templateNodeId?: Maybe<IntWithAggregatesFilter>;
  type?: Maybe<StringWithAggregatesFilter>;
};

export type NodePropsSumAggregate = {
  __typename?: 'NodePropsSumAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
};

export type NodePropsSumOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  templateNodeId?: Maybe<SortOrder>;
};

export type NodePropsUpdateInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type NodePropsUpdateManyWithWhereWithoutPropsTypeInput = {
  data: NodePropsUpdateManyMutationInput;
  where: NodePropsScalarWhereInput;
};

export type NodePropsUpdateManyWithoutPropsTypeInput = {
  connect?: Maybe<Array<NodePropsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NodePropsCreateOrConnectWithoutPropsTypeInput>>;
  create?: Maybe<Array<NodePropsCreateWithoutPropsTypeInput>>;
  delete?: Maybe<Array<NodePropsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NodePropsScalarWhereInput>>;
  disconnect?: Maybe<Array<NodePropsWhereUniqueInput>>;
  set?: Maybe<Array<NodePropsWhereUniqueInput>>;
  update?: Maybe<Array<NodePropsUpdateWithWhereUniqueWithoutPropsTypeInput>>;
  updateMany?: Maybe<Array<NodePropsUpdateManyWithWhereWithoutPropsTypeInput>>;
  upsert?: Maybe<Array<NodePropsUpsertWithWhereUniqueWithoutPropsTypeInput>>;
};

export type NodePropsUpdateOneRequiredWithoutNodeAudioPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeAudioPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeAudioPropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeAudioPropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeAudioPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeCountdownPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeCountdownPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeCountdownPropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeCountdownPropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeCountdownPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeFilePropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeFilePropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeFilePropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeFilePropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeFilePropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeImagePropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeImagePropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeImagePropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeImagePropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeImagePropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeLinkPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeLinkPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeLinkPropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeLinkPropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeLinkPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeSwitchOptionPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeSwitchOptionPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeSwitchOptionPropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeSwitchOptionPropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeSwitchOptionPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeSwitchPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeSwitchPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeSwitchPropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeSwitchPropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeSwitchPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeTextPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeTextPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeTextPropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeTextPropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeTextPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeVideoPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeVideoPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeVideoPropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeVideoPropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeVideoPropsInput>;
};

export type NodePropsUpdateOneRequiredWithoutNodeWaitPropsInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutNodeWaitPropsInput>;
  create?: Maybe<NodePropsCreateWithoutNodeWaitPropsInput>;
  update?: Maybe<NodePropsUpdateWithoutNodeWaitPropsInput>;
  upsert?: Maybe<NodePropsUpsertWithoutNodeWaitPropsInput>;
};

export type NodePropsUpdateOneWithoutFlowNodeInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutFlowNodeInput>;
  create?: Maybe<NodePropsCreateWithoutFlowNodeInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodePropsUpdateWithoutFlowNodeInput>;
  upsert?: Maybe<NodePropsUpsertWithoutFlowNodeInput>;
};

export type NodePropsUpdateOneWithoutTemplateNodeInput = {
  connect?: Maybe<NodePropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodePropsCreateOrConnectWithoutTemplateNodeInput>;
  create?: Maybe<NodePropsCreateWithoutTemplateNodeInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodePropsUpdateWithoutTemplateNodeInput>;
  upsert?: Maybe<NodePropsUpsertWithoutTemplateNodeInput>;
};

export type NodePropsUpdateWithWhereUniqueWithoutPropsTypeInput = {
  data: NodePropsUpdateWithoutPropsTypeInput;
  where: NodePropsWhereUniqueInput;
};

export type NodePropsUpdateWithoutFlowNodeInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeAudioPropsInput = {
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeCountdownPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeFilePropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeImagePropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeLinkPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeSwitchOptionPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeSwitchPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeTextPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeVideoPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutNodeWaitPropsInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutPropsTypeInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
  templateNode?: Maybe<TemplateNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpdateWithoutTemplateNodeInput = {
  NodeAudioProps?: Maybe<NodeAudioPropsUpdateOneWithoutNodePropsInput>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsUpdateOneWithoutNodePropsInput>;
  NodeFileProps?: Maybe<NodeFilePropsUpdateOneWithoutNodePropsInput>;
  NodeImageProps?: Maybe<NodeImagePropsUpdateOneWithoutNodePropsInput>;
  NodeLinkProps?: Maybe<NodeLinkPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateOneWithoutNodePropsInput>;
  NodeTextProps?: Maybe<NodeTextPropsUpdateOneWithoutNodePropsInput>;
  NodeVideoProps?: Maybe<NodeVideoPropsUpdateOneWithoutNodePropsInput>;
  NodeWaitProps?: Maybe<NodeWaitPropsUpdateOneWithoutNodePropsInput>;
  PropsType?: Maybe<PropsTypeUpdateOneRequiredWithoutNodePropsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  flowNode?: Maybe<FlowNodeUpdateOneRequiredWithoutNodePropsInput>;
};

export type NodePropsUpsertWithWhereUniqueWithoutPropsTypeInput = {
  create: NodePropsCreateWithoutPropsTypeInput;
  update: NodePropsUpdateWithoutPropsTypeInput;
  where: NodePropsWhereUniqueInput;
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
  AND?: Maybe<Array<NodePropsWhereInput>>;
  NOT?: Maybe<Array<NodePropsWhereInput>>;
  NodeAudioProps?: Maybe<NodeAudioPropsRelationFilter>;
  NodeCountdownProps?: Maybe<NodeCountdownPropsRelationFilter>;
  NodeFileProps?: Maybe<NodeFilePropsRelationFilter>;
  NodeImageProps?: Maybe<NodeImagePropsRelationFilter>;
  NodeLinkProps?: Maybe<NodeLinkPropsRelationFilter>;
  NodeSwitchOptionProps?: Maybe<NodeSwitchOptionPropsRelationFilter>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsRelationFilter>;
  NodeTextProps?: Maybe<NodeTextPropsRelationFilter>;
  NodeVideoProps?: Maybe<NodeVideoPropsRelationFilter>;
  NodeWaitProps?: Maybe<NodeWaitPropsRelationFilter>;
  OR?: Maybe<Array<NodePropsWhereInput>>;
  PropsType?: Maybe<PropsTypeRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  flowNode?: Maybe<FlowNodeRelationFilter>;
  flowNodeId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  templateNode?: Maybe<TemplateNodeRelationFilter>;
  templateNodeId?: Maybe<IntFilter>;
  type?: Maybe<StringFilter>;
};

export type NodePropsWhereUniqueInput = {
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  templateNodeId?: Maybe<Scalars['Int']>;
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
  id?: Maybe<SortOrder>;
};

export type NodeSwitchOptionPropsCountAggregate = {
  __typename?: 'NodeSwitchOptionPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  imageLink: Scalars['Int'];
  text: Scalars['Int'];
};

export type NodeSwitchOptionPropsCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imageLink?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeSwitchOptionPropsCreateInput = {
  imageLink: Scalars['String'];
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeSwitchOptionPropsInput>;
  text: Scalars['String'];
};

export type NodeSwitchOptionPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeSwitchOptionPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeSwitchOptionPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeSwitchOptionPropsCreateWithoutNodePropsInput>;
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
  id?: Maybe<SortOrder>;
  imageLink?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeSwitchOptionPropsMinAggregate = {
  __typename?: 'NodeSwitchOptionPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  imageLink?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type NodeSwitchOptionPropsMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imageLink?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeSwitchOptionPropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeSwitchOptionPropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeSwitchOptionPropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeSwitchOptionPropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeSwitchOptionPropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeSwitchOptionPropsSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  imageLink?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
};

export type NodeSwitchOptionPropsOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  imageLink?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  text?: Maybe<SortOrder>;
};

export type NodeSwitchOptionPropsRelationFilter = {
  is?: Maybe<NodeSwitchOptionPropsWhereInput>;
  isNot?: Maybe<NodeSwitchOptionPropsWhereInput>;
};

export enum NodeSwitchOptionPropsScalarFieldEnum {
  Id = 'id',
  ImageLink = 'imageLink',
  Text = 'text'
}

export type NodeSwitchOptionPropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeSwitchOptionPropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeSwitchOptionPropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeSwitchOptionPropsScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  imageLink?: Maybe<StringWithAggregatesFilter>;
  text?: Maybe<StringWithAggregatesFilter>;
};

export type NodeSwitchOptionPropsSumAggregate = {
  __typename?: 'NodeSwitchOptionPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeSwitchOptionPropsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeSwitchOptionPropsUpdateInput = {
  imageLink?: Maybe<StringFieldUpdateOperationsInput>;
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeSwitchOptionPropsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeSwitchOptionPropsUpdateManyMutationInput = {
  imageLink?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeSwitchOptionPropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeSwitchOptionPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeSwitchOptionPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeSwitchOptionPropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeSwitchOptionPropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeSwitchOptionPropsUpsertWithoutNodePropsInput>;
};

export type NodeSwitchOptionPropsUpdateWithoutNodePropsInput = {
  imageLink?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeSwitchOptionPropsUpsertWithoutNodePropsInput = {
  create: NodeSwitchOptionPropsCreateWithoutNodePropsInput;
  update: NodeSwitchOptionPropsUpdateWithoutNodePropsInput;
};

export type NodeSwitchOptionPropsWhereInput = {
  AND?: Maybe<Array<NodeSwitchOptionPropsWhereInput>>;
  NOT?: Maybe<Array<NodeSwitchOptionPropsWhereInput>>;
  OR?: Maybe<Array<NodeSwitchOptionPropsWhereInput>>;
  id?: Maybe<IntFilter>;
  imageLink?: Maybe<StringFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  text?: Maybe<StringFilter>;
};

export type NodeSwitchOptionPropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type NodeSwitchProps = {
  __typename?: 'NodeSwitchProps';
  SwitchDisplayType: SwitchDisplayType;
  displayType: Scalars['String'];
  id: Scalars['Int'];
  nodeProps: NodeProps;
  withImage: Scalars['Boolean'];
};

export type NodeSwitchPropsAvgAggregate = {
  __typename?: 'NodeSwitchPropsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NodeSwitchPropsAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeSwitchPropsCountAggregate = {
  __typename?: 'NodeSwitchPropsCountAggregate';
  _all: Scalars['Int'];
  displayType: Scalars['Int'];
  id: Scalars['Int'];
  withImage: Scalars['Int'];
};

export type NodeSwitchPropsCountOrderByAggregateInput = {
  displayType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  withImage?: Maybe<SortOrder>;
};

export type NodeSwitchPropsCreateInput = {
  SwitchDisplayType: SwitchDisplayTypeCreateNestedOneWithoutNodeSwitchPropsInput;
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeSwitchPropsInput>;
  withImage?: Maybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsCreateNestedManyWithoutSwitchDisplayTypeInput = {
  connect?: Maybe<Array<NodeSwitchPropsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NodeSwitchPropsCreateOrConnectWithoutSwitchDisplayTypeInput>>;
  create?: Maybe<Array<NodeSwitchPropsCreateWithoutSwitchDisplayTypeInput>>;
};

export type NodeSwitchPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeSwitchPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeSwitchPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeSwitchPropsCreateWithoutNodePropsInput>;
};

export type NodeSwitchPropsCreateOrConnectWithoutNodePropsInput = {
  create: NodeSwitchPropsCreateWithoutNodePropsInput;
  where: NodeSwitchPropsWhereUniqueInput;
};

export type NodeSwitchPropsCreateOrConnectWithoutSwitchDisplayTypeInput = {
  create: NodeSwitchPropsCreateWithoutSwitchDisplayTypeInput;
  where: NodeSwitchPropsWhereUniqueInput;
};

export type NodeSwitchPropsCreateWithoutNodePropsInput = {
  SwitchDisplayType: SwitchDisplayTypeCreateNestedOneWithoutNodeSwitchPropsInput;
  withImage?: Maybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsCreateWithoutSwitchDisplayTypeInput = {
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeSwitchPropsInput>;
  withImage?: Maybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsGroupBy = {
  __typename?: 'NodeSwitchPropsGroupBy';
  _avg?: Maybe<NodeSwitchPropsAvgAggregate>;
  _count?: Maybe<NodeSwitchPropsCountAggregate>;
  _max?: Maybe<NodeSwitchPropsMaxAggregate>;
  _min?: Maybe<NodeSwitchPropsMinAggregate>;
  _sum?: Maybe<NodeSwitchPropsSumAggregate>;
  displayType: Scalars['String'];
  id: Scalars['Int'];
  withImage: Scalars['Boolean'];
};

export type NodeSwitchPropsListRelationFilter = {
  every?: Maybe<NodeSwitchPropsWhereInput>;
  none?: Maybe<NodeSwitchPropsWhereInput>;
  some?: Maybe<NodeSwitchPropsWhereInput>;
};

export type NodeSwitchPropsMaxAggregate = {
  __typename?: 'NodeSwitchPropsMaxAggregate';
  displayType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  withImage?: Maybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsMaxOrderByAggregateInput = {
  displayType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  withImage?: Maybe<SortOrder>;
};

export type NodeSwitchPropsMinAggregate = {
  __typename?: 'NodeSwitchPropsMinAggregate';
  displayType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  withImage?: Maybe<Scalars['Boolean']>;
};

export type NodeSwitchPropsMinOrderByAggregateInput = {
  displayType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  withImage?: Maybe<SortOrder>;
};

export type NodeSwitchPropsOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type NodeSwitchPropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeSwitchPropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeSwitchPropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeSwitchPropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeSwitchPropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeSwitchPropsSumOrderByAggregateInput>;
  displayType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  withImage?: Maybe<SortOrder>;
};

export type NodeSwitchPropsOrderByWithRelationInput = {
  SwitchDisplayType?: Maybe<SwitchDisplayTypeOrderByWithRelationInput>;
  displayType?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  withImage?: Maybe<SortOrder>;
};

export type NodeSwitchPropsRelationFilter = {
  is?: Maybe<NodeSwitchPropsWhereInput>;
  isNot?: Maybe<NodeSwitchPropsWhereInput>;
};

export enum NodeSwitchPropsScalarFieldEnum {
  DisplayType = 'displayType',
  Id = 'id',
  WithImage = 'withImage'
}

export type NodeSwitchPropsScalarWhereInput = {
  AND?: Maybe<Array<NodeSwitchPropsScalarWhereInput>>;
  NOT?: Maybe<Array<NodeSwitchPropsScalarWhereInput>>;
  OR?: Maybe<Array<NodeSwitchPropsScalarWhereInput>>;
  displayType?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  withImage?: Maybe<BoolFilter>;
};

export type NodeSwitchPropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeSwitchPropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeSwitchPropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeSwitchPropsScalarWhereWithAggregatesInput>>;
  displayType?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  withImage?: Maybe<BoolWithAggregatesFilter>;
};

export type NodeSwitchPropsSumAggregate = {
  __typename?: 'NodeSwitchPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeSwitchPropsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeSwitchPropsUpdateInput = {
  SwitchDisplayType?: Maybe<SwitchDisplayTypeUpdateOneRequiredWithoutNodeSwitchPropsInput>;
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeSwitchPropsInput>;
  withImage?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type NodeSwitchPropsUpdateManyMutationInput = {
  withImage?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type NodeSwitchPropsUpdateManyWithWhereWithoutSwitchDisplayTypeInput = {
  data: NodeSwitchPropsUpdateManyMutationInput;
  where: NodeSwitchPropsScalarWhereInput;
};

export type NodeSwitchPropsUpdateManyWithoutSwitchDisplayTypeInput = {
  connect?: Maybe<Array<NodeSwitchPropsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NodeSwitchPropsCreateOrConnectWithoutSwitchDisplayTypeInput>>;
  create?: Maybe<Array<NodeSwitchPropsCreateWithoutSwitchDisplayTypeInput>>;
  delete?: Maybe<Array<NodeSwitchPropsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NodeSwitchPropsScalarWhereInput>>;
  disconnect?: Maybe<Array<NodeSwitchPropsWhereUniqueInput>>;
  set?: Maybe<Array<NodeSwitchPropsWhereUniqueInput>>;
  update?: Maybe<Array<NodeSwitchPropsUpdateWithWhereUniqueWithoutSwitchDisplayTypeInput>>;
  updateMany?: Maybe<Array<NodeSwitchPropsUpdateManyWithWhereWithoutSwitchDisplayTypeInput>>;
  upsert?: Maybe<Array<NodeSwitchPropsUpsertWithWhereUniqueWithoutSwitchDisplayTypeInput>>;
};

export type NodeSwitchPropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeSwitchPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeSwitchPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeSwitchPropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeSwitchPropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeSwitchPropsUpsertWithoutNodePropsInput>;
};

export type NodeSwitchPropsUpdateWithWhereUniqueWithoutSwitchDisplayTypeInput = {
  data: NodeSwitchPropsUpdateWithoutSwitchDisplayTypeInput;
  where: NodeSwitchPropsWhereUniqueInput;
};

export type NodeSwitchPropsUpdateWithoutNodePropsInput = {
  SwitchDisplayType?: Maybe<SwitchDisplayTypeUpdateOneRequiredWithoutNodeSwitchPropsInput>;
  withImage?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type NodeSwitchPropsUpdateWithoutSwitchDisplayTypeInput = {
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeSwitchPropsInput>;
  withImage?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type NodeSwitchPropsUpsertWithWhereUniqueWithoutSwitchDisplayTypeInput = {
  create: NodeSwitchPropsCreateWithoutSwitchDisplayTypeInput;
  update: NodeSwitchPropsUpdateWithoutSwitchDisplayTypeInput;
  where: NodeSwitchPropsWhereUniqueInput;
};

export type NodeSwitchPropsUpsertWithoutNodePropsInput = {
  create: NodeSwitchPropsCreateWithoutNodePropsInput;
  update: NodeSwitchPropsUpdateWithoutNodePropsInput;
};

export type NodeSwitchPropsWhereInput = {
  AND?: Maybe<Array<NodeSwitchPropsWhereInput>>;
  NOT?: Maybe<Array<NodeSwitchPropsWhereInput>>;
  OR?: Maybe<Array<NodeSwitchPropsWhereInput>>;
  SwitchDisplayType?: Maybe<SwitchDisplayTypeRelationFilter>;
  displayType?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  withImage?: Maybe<BoolFilter>;
};

export type NodeSwitchPropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  id?: Maybe<SortOrder>;
};

export type NodeTextPropsCountAggregate = {
  __typename?: 'NodeTextPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeTextPropsCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeTextPropsCreateInput = {
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeTextPropsInput>;
  src: Scalars['String'];
};

export type NodeTextPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeTextPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeTextPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeTextPropsCreateWithoutNodePropsInput>;
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
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeTextPropsMinAggregate = {
  __typename?: 'NodeTextPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeTextPropsMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeTextPropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeTextPropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeTextPropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeTextPropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeTextPropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeTextPropsSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeTextPropsOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  src?: Maybe<SortOrder>;
};

export type NodeTextPropsRelationFilter = {
  is?: Maybe<NodeTextPropsWhereInput>;
  isNot?: Maybe<NodeTextPropsWhereInput>;
};

export enum NodeTextPropsScalarFieldEnum {
  Id = 'id',
  Src = 'src'
}

export type NodeTextPropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeTextPropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeTextPropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeTextPropsScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  src?: Maybe<StringWithAggregatesFilter>;
};

export type NodeTextPropsSumAggregate = {
  __typename?: 'NodeTextPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeTextPropsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeTextPropsUpdateInput = {
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeTextPropsInput>;
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeTextPropsUpdateManyMutationInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeTextPropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeTextPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeTextPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeTextPropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeTextPropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeTextPropsUpsertWithoutNodePropsInput>;
};

export type NodeTextPropsUpdateWithoutNodePropsInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeTextPropsUpsertWithoutNodePropsInput = {
  create: NodeTextPropsCreateWithoutNodePropsInput;
  update: NodeTextPropsUpdateWithoutNodePropsInput;
};

export type NodeTextPropsWhereInput = {
  AND?: Maybe<Array<NodeTextPropsWhereInput>>;
  NOT?: Maybe<Array<NodeTextPropsWhereInput>>;
  OR?: Maybe<Array<NodeTextPropsWhereInput>>;
  id?: Maybe<IntFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  src?: Maybe<StringFilter>;
};

export type NodeTextPropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

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
  id?: Maybe<SortOrder>;
};

export type NodeVideoPropsCountAggregate = {
  __typename?: 'NodeVideoPropsCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeVideoPropsCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeVideoPropsCreateInput = {
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeVideoPropsInput>;
  src: Scalars['String'];
};

export type NodeVideoPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeVideoPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeVideoPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeVideoPropsCreateWithoutNodePropsInput>;
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
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeVideoPropsMinAggregate = {
  __typename?: 'NodeVideoPropsMinAggregate';
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeVideoPropsMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeVideoPropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeVideoPropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeVideoPropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeVideoPropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeVideoPropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeVideoPropsSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeVideoPropsOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  src?: Maybe<SortOrder>;
};

export type NodeVideoPropsRelationFilter = {
  is?: Maybe<NodeVideoPropsWhereInput>;
  isNot?: Maybe<NodeVideoPropsWhereInput>;
};

export enum NodeVideoPropsScalarFieldEnum {
  Id = 'id',
  Src = 'src'
}

export type NodeVideoPropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeVideoPropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeVideoPropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeVideoPropsScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  src?: Maybe<StringWithAggregatesFilter>;
};

export type NodeVideoPropsSumAggregate = {
  __typename?: 'NodeVideoPropsSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NodeVideoPropsSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type NodeVideoPropsUpdateInput = {
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeVideoPropsInput>;
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeVideoPropsUpdateManyMutationInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeVideoPropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeVideoPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeVideoPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeVideoPropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeVideoPropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeVideoPropsUpsertWithoutNodePropsInput>;
};

export type NodeVideoPropsUpdateWithoutNodePropsInput = {
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeVideoPropsUpsertWithoutNodePropsInput = {
  create: NodeVideoPropsCreateWithoutNodePropsInput;
  update: NodeVideoPropsUpdateWithoutNodePropsInput;
};

export type NodeVideoPropsWhereInput = {
  AND?: Maybe<Array<NodeVideoPropsWhereInput>>;
  NOT?: Maybe<Array<NodeVideoPropsWhereInput>>;
  OR?: Maybe<Array<NodeVideoPropsWhereInput>>;
  id?: Maybe<IntFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  src?: Maybe<StringFilter>;
};

export type NodeVideoPropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  delay?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type NodeWaitPropsCountAggregate = {
  __typename?: 'NodeWaitPropsCountAggregate';
  _all: Scalars['Int'];
  delay: Scalars['Int'];
  id: Scalars['Int'];
  src: Scalars['Int'];
};

export type NodeWaitPropsCountOrderByAggregateInput = {
  delay?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeWaitPropsCreateInput = {
  delay: Scalars['Int'];
  nodeProps?: Maybe<NodePropsCreateNestedOneWithoutNodeWaitPropsInput>;
  src: Scalars['String'];
};

export type NodeWaitPropsCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<NodeWaitPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeWaitPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeWaitPropsCreateWithoutNodePropsInput>;
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
  delay?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeWaitPropsMinAggregate = {
  __typename?: 'NodeWaitPropsMinAggregate';
  delay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type NodeWaitPropsMinOrderByAggregateInput = {
  delay?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeWaitPropsOrderByWithAggregationInput = {
  _avg?: Maybe<NodeWaitPropsAvgOrderByAggregateInput>;
  _count?: Maybe<NodeWaitPropsCountOrderByAggregateInput>;
  _max?: Maybe<NodeWaitPropsMaxOrderByAggregateInput>;
  _min?: Maybe<NodeWaitPropsMinOrderByAggregateInput>;
  _sum?: Maybe<NodeWaitPropsSumOrderByAggregateInput>;
  delay?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  src?: Maybe<SortOrder>;
};

export type NodeWaitPropsOrderByWithRelationInput = {
  delay?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  nodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  src?: Maybe<SortOrder>;
};

export type NodeWaitPropsRelationFilter = {
  is?: Maybe<NodeWaitPropsWhereInput>;
  isNot?: Maybe<NodeWaitPropsWhereInput>;
};

export enum NodeWaitPropsScalarFieldEnum {
  Delay = 'delay',
  Id = 'id',
  Src = 'src'
}

export type NodeWaitPropsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<NodeWaitPropsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<NodeWaitPropsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<NodeWaitPropsScalarWhereWithAggregatesInput>>;
  delay?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  src?: Maybe<StringWithAggregatesFilter>;
};

export type NodeWaitPropsSumAggregate = {
  __typename?: 'NodeWaitPropsSumAggregate';
  delay?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type NodeWaitPropsSumOrderByAggregateInput = {
  delay?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type NodeWaitPropsUpdateInput = {
  delay?: Maybe<IntFieldUpdateOperationsInput>;
  nodeProps?: Maybe<NodePropsUpdateOneRequiredWithoutNodeWaitPropsInput>;
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeWaitPropsUpdateManyMutationInput = {
  delay?: Maybe<IntFieldUpdateOperationsInput>;
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeWaitPropsUpdateOneWithoutNodePropsInput = {
  connect?: Maybe<NodeWaitPropsWhereUniqueInput>;
  connectOrCreate?: Maybe<NodeWaitPropsCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<NodeWaitPropsCreateWithoutNodePropsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<NodeWaitPropsUpdateWithoutNodePropsInput>;
  upsert?: Maybe<NodeWaitPropsUpsertWithoutNodePropsInput>;
};

export type NodeWaitPropsUpdateWithoutNodePropsInput = {
  delay?: Maybe<IntFieldUpdateOperationsInput>;
  src?: Maybe<StringFieldUpdateOperationsInput>;
};

export type NodeWaitPropsUpsertWithoutNodePropsInput = {
  create: NodeWaitPropsCreateWithoutNodePropsInput;
  update: NodeWaitPropsUpdateWithoutNodePropsInput;
};

export type NodeWaitPropsWhereInput = {
  AND?: Maybe<Array<NodeWaitPropsWhereInput>>;
  NOT?: Maybe<Array<NodeWaitPropsWhereInput>>;
  OR?: Maybe<Array<NodeWaitPropsWhereInput>>;
  delay?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  nodeProps?: Maybe<NodePropsRelationFilter>;
  src?: Maybe<StringFilter>;
};

export type NodeWaitPropsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Port = {
  __typename?: 'Port';
  Pos?: Maybe<Pos>;
  _count?: Maybe<PortCount>;
  flowNodeId: Scalars['Int'];
  id: Scalars['Int'];
  inConnection?: Maybe<Connection>;
  index: Scalars['Int'];
  node: FlowNode;
  outConnections: Array<Connection>;
};


export type PortOutConnectionsArgs = {
  cursor?: Maybe<ConnectionWhereUniqueInput>;
  distinct?: Maybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: Maybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ConnectionWhereInput>;
};

export type PortAvgAggregate = {
  __typename?: 'PortAvgAggregate';
  flowNodeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

export type PortAvgOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
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
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
};

export type PortCreateInput = {
  Pos?: Maybe<PosCreateNestedOneWithoutPortInput>;
  inConnection?: Maybe<ConnectionCreateNestedOneWithoutToPortInput>;
  index: Scalars['Int'];
  node: FlowNodeCreateNestedOneWithoutPortsInput;
  outConnections?: Maybe<ConnectionCreateNestedManyWithoutFromPortInput>;
};

export type PortCreateNestedManyWithoutNodeInput = {
  connect?: Maybe<Array<PortWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PortCreateOrConnectWithoutNodeInput>>;
  create?: Maybe<Array<PortCreateWithoutNodeInput>>;
};

export type PortCreateNestedOneWithoutInConnectionInput = {
  connect?: Maybe<PortWhereUniqueInput>;
  connectOrCreate?: Maybe<PortCreateOrConnectWithoutInConnectionInput>;
  create?: Maybe<PortCreateWithoutInConnectionInput>;
};

export type PortCreateNestedOneWithoutOutConnectionsInput = {
  connect?: Maybe<PortWhereUniqueInput>;
  connectOrCreate?: Maybe<PortCreateOrConnectWithoutOutConnectionsInput>;
  create?: Maybe<PortCreateWithoutOutConnectionsInput>;
};

export type PortCreateNestedOneWithoutPosInput = {
  connect?: Maybe<PortWhereUniqueInput>;
  connectOrCreate?: Maybe<PortCreateOrConnectWithoutPosInput>;
  create?: Maybe<PortCreateWithoutPosInput>;
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

export type PortCreateOrConnectWithoutPosInput = {
  create: PortCreateWithoutPosInput;
  where: PortWhereUniqueInput;
};

export type PortCreateWithoutInConnectionInput = {
  Pos?: Maybe<PosCreateNestedOneWithoutPortInput>;
  index: Scalars['Int'];
  node: FlowNodeCreateNestedOneWithoutPortsInput;
  outConnections?: Maybe<ConnectionCreateNestedManyWithoutFromPortInput>;
};

export type PortCreateWithoutNodeInput = {
  Pos?: Maybe<PosCreateNestedOneWithoutPortInput>;
  inConnection?: Maybe<ConnectionCreateNestedOneWithoutToPortInput>;
  index: Scalars['Int'];
  outConnections?: Maybe<ConnectionCreateNestedManyWithoutFromPortInput>;
};

export type PortCreateWithoutOutConnectionsInput = {
  Pos?: Maybe<PosCreateNestedOneWithoutPortInput>;
  inConnection?: Maybe<ConnectionCreateNestedOneWithoutToPortInput>;
  index: Scalars['Int'];
  node: FlowNodeCreateNestedOneWithoutPortsInput;
};

export type PortCreateWithoutPosInput = {
  inConnection?: Maybe<ConnectionCreateNestedOneWithoutToPortInput>;
  index: Scalars['Int'];
  node: FlowNodeCreateNestedOneWithoutPortsInput;
  outConnections?: Maybe<ConnectionCreateNestedManyWithoutFromPortInput>;
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
  every?: Maybe<PortWhereInput>;
  none?: Maybe<PortWhereInput>;
  some?: Maybe<PortWhereInput>;
};

export type PortMaxAggregate = {
  __typename?: 'PortMaxAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type PortMaxOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
};

export type PortMinAggregate = {
  __typename?: 'PortMinAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type PortMinOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
};

export type PortOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type PortOrderByWithAggregationInput = {
  _avg?: Maybe<PortAvgOrderByAggregateInput>;
  _count?: Maybe<PortCountOrderByAggregateInput>;
  _max?: Maybe<PortMaxOrderByAggregateInput>;
  _min?: Maybe<PortMinOrderByAggregateInput>;
  _sum?: Maybe<PortSumOrderByAggregateInput>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
};

export type PortOrderByWithRelationInput = {
  Pos?: Maybe<PosOrderByWithRelationInput>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  inConnection?: Maybe<ConnectionOrderByWithRelationInput>;
  index?: Maybe<SortOrder>;
  node?: Maybe<FlowNodeOrderByWithRelationInput>;
  outConnections?: Maybe<ConnectionOrderByRelationAggregateInput>;
};

export type PortRelationFilter = {
  is?: Maybe<PortWhereInput>;
  isNot?: Maybe<PortWhereInput>;
};

export enum PortScalarFieldEnum {
  FlowNodeId = 'flowNodeId',
  Id = 'id',
  Index = 'index'
}

export type PortScalarWhereInput = {
  AND?: Maybe<Array<PortScalarWhereInput>>;
  NOT?: Maybe<Array<PortScalarWhereInput>>;
  OR?: Maybe<Array<PortScalarWhereInput>>;
  flowNodeId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  index?: Maybe<IntFilter>;
};

export type PortScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PortScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PortScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PortScalarWhereWithAggregatesInput>>;
  flowNodeId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  index?: Maybe<IntWithAggregatesFilter>;
};

export type PortSumAggregate = {
  __typename?: 'PortSumAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
};

export type PortSumOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
};

export type PortUpdateInput = {
  Pos?: Maybe<PosUpdateOneWithoutPortInput>;
  inConnection?: Maybe<ConnectionUpdateOneWithoutToPortInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  node?: Maybe<FlowNodeUpdateOneRequiredWithoutPortsInput>;
  outConnections?: Maybe<ConnectionUpdateManyWithoutFromPortInput>;
};

export type PortUpdateManyMutationInput = {
  index?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PortUpdateManyWithWhereWithoutNodeInput = {
  data: PortUpdateManyMutationInput;
  where: PortScalarWhereInput;
};

export type PortUpdateManyWithoutNodeInput = {
  connect?: Maybe<Array<PortWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PortCreateOrConnectWithoutNodeInput>>;
  create?: Maybe<Array<PortCreateWithoutNodeInput>>;
  delete?: Maybe<Array<PortWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PortScalarWhereInput>>;
  disconnect?: Maybe<Array<PortWhereUniqueInput>>;
  set?: Maybe<Array<PortWhereUniqueInput>>;
  update?: Maybe<Array<PortUpdateWithWhereUniqueWithoutNodeInput>>;
  updateMany?: Maybe<Array<PortUpdateManyWithWhereWithoutNodeInput>>;
  upsert?: Maybe<Array<PortUpsertWithWhereUniqueWithoutNodeInput>>;
};

export type PortUpdateOneRequiredWithoutInConnectionInput = {
  connect?: Maybe<PortWhereUniqueInput>;
  connectOrCreate?: Maybe<PortCreateOrConnectWithoutInConnectionInput>;
  create?: Maybe<PortCreateWithoutInConnectionInput>;
  update?: Maybe<PortUpdateWithoutInConnectionInput>;
  upsert?: Maybe<PortUpsertWithoutInConnectionInput>;
};

export type PortUpdateOneRequiredWithoutOutConnectionsInput = {
  connect?: Maybe<PortWhereUniqueInput>;
  connectOrCreate?: Maybe<PortCreateOrConnectWithoutOutConnectionsInput>;
  create?: Maybe<PortCreateWithoutOutConnectionsInput>;
  update?: Maybe<PortUpdateWithoutOutConnectionsInput>;
  upsert?: Maybe<PortUpsertWithoutOutConnectionsInput>;
};

export type PortUpdateOneWithoutPosInput = {
  connect?: Maybe<PortWhereUniqueInput>;
  connectOrCreate?: Maybe<PortCreateOrConnectWithoutPosInput>;
  create?: Maybe<PortCreateWithoutPosInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PortUpdateWithoutPosInput>;
  upsert?: Maybe<PortUpsertWithoutPosInput>;
};

export type PortUpdateWithWhereUniqueWithoutNodeInput = {
  data: PortUpdateWithoutNodeInput;
  where: PortWhereUniqueInput;
};

export type PortUpdateWithoutInConnectionInput = {
  Pos?: Maybe<PosUpdateOneWithoutPortInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  node?: Maybe<FlowNodeUpdateOneRequiredWithoutPortsInput>;
  outConnections?: Maybe<ConnectionUpdateManyWithoutFromPortInput>;
};

export type PortUpdateWithoutNodeInput = {
  Pos?: Maybe<PosUpdateOneWithoutPortInput>;
  inConnection?: Maybe<ConnectionUpdateOneWithoutToPortInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  outConnections?: Maybe<ConnectionUpdateManyWithoutFromPortInput>;
};

export type PortUpdateWithoutOutConnectionsInput = {
  Pos?: Maybe<PosUpdateOneWithoutPortInput>;
  inConnection?: Maybe<ConnectionUpdateOneWithoutToPortInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  node?: Maybe<FlowNodeUpdateOneRequiredWithoutPortsInput>;
};

export type PortUpdateWithoutPosInput = {
  inConnection?: Maybe<ConnectionUpdateOneWithoutToPortInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  node?: Maybe<FlowNodeUpdateOneRequiredWithoutPortsInput>;
  outConnections?: Maybe<ConnectionUpdateManyWithoutFromPortInput>;
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

export type PortUpsertWithoutPosInput = {
  create: PortCreateWithoutPosInput;
  update: PortUpdateWithoutPosInput;
};

export type PortWhereInput = {
  AND?: Maybe<Array<PortWhereInput>>;
  NOT?: Maybe<Array<PortWhereInput>>;
  OR?: Maybe<Array<PortWhereInput>>;
  Pos?: Maybe<PosRelationFilter>;
  flowNodeId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  inConnection?: Maybe<ConnectionRelationFilter>;
  index?: Maybe<IntFilter>;
  node?: Maybe<FlowNodeRelationFilter>;
  outConnections?: Maybe<ConnectionListRelationFilter>;
};

export type PortWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Pos = {
  __typename?: 'Pos';
  FlowNode?: Maybe<FlowNode>;
  Port?: Maybe<Port>;
  flowNodeId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  portId?: Maybe<Scalars['Int']>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PosAvgAggregate = {
  __typename?: 'PosAvgAggregate';
  flowNodeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  portId?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type PosAvgOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  portId?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type PosCountAggregate = {
  __typename?: 'PosCountAggregate';
  _all: Scalars['Int'];
  flowNodeId: Scalars['Int'];
  id: Scalars['Int'];
  portId: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type PosCountOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  portId?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type PosCreateInput = {
  FlowNode?: Maybe<FlowNodeCreateNestedOneWithoutPosInput>;
  Port?: Maybe<PortCreateNestedOneWithoutPosInput>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PosCreateNestedOneWithoutFlowNodeInput = {
  connect?: Maybe<PosWhereUniqueInput>;
  connectOrCreate?: Maybe<PosCreateOrConnectWithoutFlowNodeInput>;
  create?: Maybe<PosCreateWithoutFlowNodeInput>;
};

export type PosCreateNestedOneWithoutPortInput = {
  connect?: Maybe<PosWhereUniqueInput>;
  connectOrCreate?: Maybe<PosCreateOrConnectWithoutPortInput>;
  create?: Maybe<PosCreateWithoutPortInput>;
};

export type PosCreateOrConnectWithoutFlowNodeInput = {
  create: PosCreateWithoutFlowNodeInput;
  where: PosWhereUniqueInput;
};

export type PosCreateOrConnectWithoutPortInput = {
  create: PosCreateWithoutPortInput;
  where: PosWhereUniqueInput;
};

export type PosCreateWithoutFlowNodeInput = {
  Port?: Maybe<PortCreateNestedOneWithoutPosInput>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PosCreateWithoutPortInput = {
  FlowNode?: Maybe<FlowNodeCreateNestedOneWithoutPosInput>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PosGroupBy = {
  __typename?: 'PosGroupBy';
  _avg?: Maybe<PosAvgAggregate>;
  _count?: Maybe<PosCountAggregate>;
  _max?: Maybe<PosMaxAggregate>;
  _min?: Maybe<PosMinAggregate>;
  _sum?: Maybe<PosSumAggregate>;
  flowNodeId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  portId?: Maybe<Scalars['Int']>;
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PosMaxAggregate = {
  __typename?: 'PosMaxAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  portId?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type PosMaxOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  portId?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type PosMinAggregate = {
  __typename?: 'PosMinAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  portId?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type PosMinOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  portId?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type PosOrderByWithAggregationInput = {
  _avg?: Maybe<PosAvgOrderByAggregateInput>;
  _count?: Maybe<PosCountOrderByAggregateInput>;
  _max?: Maybe<PosMaxOrderByAggregateInput>;
  _min?: Maybe<PosMinOrderByAggregateInput>;
  _sum?: Maybe<PosSumOrderByAggregateInput>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  portId?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type PosOrderByWithRelationInput = {
  FlowNode?: Maybe<FlowNodeOrderByWithRelationInput>;
  Port?: Maybe<PortOrderByWithRelationInput>;
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  portId?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type PosRelationFilter = {
  is?: Maybe<PosWhereInput>;
  isNot?: Maybe<PosWhereInput>;
};

export enum PosScalarFieldEnum {
  FlowNodeId = 'flowNodeId',
  Id = 'id',
  PortId = 'portId',
  X = 'x',
  Y = 'y'
}

export type PosScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PosScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PosScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PosScalarWhereWithAggregatesInput>>;
  flowNodeId?: Maybe<IntNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  portId?: Maybe<IntNullableWithAggregatesFilter>;
  x?: Maybe<FloatWithAggregatesFilter>;
  y?: Maybe<FloatWithAggregatesFilter>;
};

export type PosSumAggregate = {
  __typename?: 'PosSumAggregate';
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  portId?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type PosSumOrderByAggregateInput = {
  flowNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  portId?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type PosUpdateInput = {
  FlowNode?: Maybe<FlowNodeUpdateOneWithoutPosInput>;
  Port?: Maybe<PortUpdateOneWithoutPosInput>;
  x?: Maybe<FloatFieldUpdateOperationsInput>;
  y?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type PosUpdateManyMutationInput = {
  x?: Maybe<FloatFieldUpdateOperationsInput>;
  y?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type PosUpdateOneWithoutFlowNodeInput = {
  connect?: Maybe<PosWhereUniqueInput>;
  connectOrCreate?: Maybe<PosCreateOrConnectWithoutFlowNodeInput>;
  create?: Maybe<PosCreateWithoutFlowNodeInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PosUpdateWithoutFlowNodeInput>;
  upsert?: Maybe<PosUpsertWithoutFlowNodeInput>;
};

export type PosUpdateOneWithoutPortInput = {
  connect?: Maybe<PosWhereUniqueInput>;
  connectOrCreate?: Maybe<PosCreateOrConnectWithoutPortInput>;
  create?: Maybe<PosCreateWithoutPortInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PosUpdateWithoutPortInput>;
  upsert?: Maybe<PosUpsertWithoutPortInput>;
};

export type PosUpdateWithoutFlowNodeInput = {
  Port?: Maybe<PortUpdateOneWithoutPosInput>;
  x?: Maybe<FloatFieldUpdateOperationsInput>;
  y?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type PosUpdateWithoutPortInput = {
  FlowNode?: Maybe<FlowNodeUpdateOneWithoutPosInput>;
  x?: Maybe<FloatFieldUpdateOperationsInput>;
  y?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type PosUpsertWithoutFlowNodeInput = {
  create: PosCreateWithoutFlowNodeInput;
  update: PosUpdateWithoutFlowNodeInput;
};

export type PosUpsertWithoutPortInput = {
  create: PosCreateWithoutPortInput;
  update: PosUpdateWithoutPortInput;
};

export type PosWhereInput = {
  AND?: Maybe<Array<PosWhereInput>>;
  FlowNode?: Maybe<FlowNodeRelationFilter>;
  NOT?: Maybe<Array<PosWhereInput>>;
  OR?: Maybe<Array<PosWhereInput>>;
  Port?: Maybe<PortRelationFilter>;
  flowNodeId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  portId?: Maybe<IntNullableFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
};

export type PosWhereUniqueInput = {
  flowNodeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  portId?: Maybe<Scalars['Int']>;
};

export type PropsType = {
  __typename?: 'PropsType';
  NodeProps: Array<NodeProps>;
  _count?: Maybe<PropsTypeCount>;
  type: Scalars['String'];
};


export type PropsTypeNodePropsArgs = {
  cursor?: Maybe<NodePropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodePropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodePropsWhereInput>;
};

export type PropsTypeCount = {
  __typename?: 'PropsTypeCount';
  NodeProps: Scalars['Int'];
};

export type PropsTypeCountAggregate = {
  __typename?: 'PropsTypeCountAggregate';
  _all: Scalars['Int'];
  type: Scalars['Int'];
};

export type PropsTypeCountOrderByAggregateInput = {
  type?: Maybe<SortOrder>;
};

export type PropsTypeCreateInput = {
  NodeProps?: Maybe<NodePropsCreateNestedManyWithoutPropsTypeInput>;
  type?: Maybe<Scalars['String']>;
};

export type PropsTypeCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<PropsTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<PropsTypeCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<PropsTypeCreateWithoutNodePropsInput>;
};

export type PropsTypeCreateOrConnectWithoutNodePropsInput = {
  create: PropsTypeCreateWithoutNodePropsInput;
  where: PropsTypeWhereUniqueInput;
};

export type PropsTypeCreateWithoutNodePropsInput = {
  type?: Maybe<Scalars['String']>;
};

export type PropsTypeGroupBy = {
  __typename?: 'PropsTypeGroupBy';
  _count?: Maybe<PropsTypeCountAggregate>;
  _max?: Maybe<PropsTypeMaxAggregate>;
  _min?: Maybe<PropsTypeMinAggregate>;
  type: Scalars['String'];
};

export type PropsTypeMaxAggregate = {
  __typename?: 'PropsTypeMaxAggregate';
  type?: Maybe<Scalars['String']>;
};

export type PropsTypeMaxOrderByAggregateInput = {
  type?: Maybe<SortOrder>;
};

export type PropsTypeMinAggregate = {
  __typename?: 'PropsTypeMinAggregate';
  type?: Maybe<Scalars['String']>;
};

export type PropsTypeMinOrderByAggregateInput = {
  type?: Maybe<SortOrder>;
};

export type PropsTypeOrderByWithAggregationInput = {
  _count?: Maybe<PropsTypeCountOrderByAggregateInput>;
  _max?: Maybe<PropsTypeMaxOrderByAggregateInput>;
  _min?: Maybe<PropsTypeMinOrderByAggregateInput>;
  type?: Maybe<SortOrder>;
};

export type PropsTypeOrderByWithRelationInput = {
  NodeProps?: Maybe<NodePropsOrderByRelationAggregateInput>;
  type?: Maybe<SortOrder>;
};

export type PropsTypeRelationFilter = {
  is?: Maybe<PropsTypeWhereInput>;
  isNot?: Maybe<PropsTypeWhereInput>;
};

export enum PropsTypeScalarFieldEnum {
  Type = 'type'
}

export type PropsTypeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PropsTypeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PropsTypeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PropsTypeScalarWhereWithAggregatesInput>>;
  type?: Maybe<StringWithAggregatesFilter>;
};

export type PropsTypeUpdateInput = {
  NodeProps?: Maybe<NodePropsUpdateManyWithoutPropsTypeInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PropsTypeUpdateManyMutationInput = {
  type?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PropsTypeUpdateOneRequiredWithoutNodePropsInput = {
  connect?: Maybe<PropsTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<PropsTypeCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<PropsTypeCreateWithoutNodePropsInput>;
  update?: Maybe<PropsTypeUpdateWithoutNodePropsInput>;
  upsert?: Maybe<PropsTypeUpsertWithoutNodePropsInput>;
};

export type PropsTypeUpdateWithoutNodePropsInput = {
  type?: Maybe<StringFieldUpdateOperationsInput>;
};

export type PropsTypeUpsertWithoutNodePropsInput = {
  create: PropsTypeCreateWithoutNodePropsInput;
  update: PropsTypeUpdateWithoutNodePropsInput;
};

export type PropsTypeWhereInput = {
  AND?: Maybe<Array<PropsTypeWhereInput>>;
  NOT?: Maybe<Array<PropsTypeWhereInput>>;
  NodeProps?: Maybe<NodePropsListRelationFilter>;
  OR?: Maybe<Array<PropsTypeWhereInput>>;
  type?: Maybe<StringFilter>;
};

export type PropsTypeWhereUniqueInput = {
  type?: Maybe<Scalars['String']>;
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
  aggregatePos: AggregatePos;
  aggregatePropsType: AggregatePropsType;
  aggregateSwitchDisplayType: AggregateSwitchDisplayType;
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
  findFirstPos?: Maybe<Pos>;
  findFirstPropsType?: Maybe<PropsType>;
  findFirstSwitchDisplayType?: Maybe<SwitchDisplayType>;
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
  findManyPos: Array<Pos>;
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
  findUniquePos?: Maybe<Pos>;
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
  groupByPos: Array<PosGroupBy>;
  groupByPropsType: Array<PropsTypeGroupBy>;
  groupBySwitchDisplayType: Array<SwitchDisplayTypeGroupBy>;
  groupByTemplateNode: Array<TemplateNodeGroupBy>;
  groupByTemplateNodesGroup: Array<TemplateNodesGroupGroupBy>;
  nodeInfo?: Maybe<NodeInfo>;
  nodeInfos: Array<NodeInfo>;
  port?: Maybe<Port>;
  ports: Array<Port>;
  propsType?: Maybe<PropsType>;
  propsTypes: Array<PropsType>;
  switchDisplayType?: Maybe<SwitchDisplayType>;
  switchDisplayTypes: Array<SwitchDisplayType>;
  templateNode?: Maybe<TemplateNode>;
  templateNodes: Array<TemplateNode>;
  templateNodesGroup?: Maybe<TemplateNodesGroup>;
  templateNodesGroups: Array<TemplateNodesGroup>;
};


export type QueryAggregateBotFlowArgs = {
  cursor?: Maybe<BotFlowWhereUniqueInput>;
  orderBy?: Maybe<Array<BotFlowOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowWhereInput>;
};


export type QueryAggregateBotFlowVersionArgs = {
  cursor?: Maybe<BotFlowVersionWhereUniqueInput>;
  orderBy?: Maybe<Array<BotFlowVersionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowVersionWhereInput>;
};


export type QueryAggregateConnectionArgs = {
  cursor?: Maybe<ConnectionWhereUniqueInput>;
  orderBy?: Maybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ConnectionWhereInput>;
};


export type QueryAggregateFlowNodeArgs = {
  cursor?: Maybe<FlowNodeWhereUniqueInput>;
  orderBy?: Maybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FlowNodeWhereInput>;
};


export type QueryAggregateNodeAudioPropsArgs = {
  cursor?: Maybe<NodeAudioPropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeAudioPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeAudioPropsWhereInput>;
};


export type QueryAggregateNodeCountdownPropsArgs = {
  cursor?: Maybe<NodeCountdownPropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeCountdownPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeCountdownPropsWhereInput>;
};


export type QueryAggregateNodeFilePropsArgs = {
  cursor?: Maybe<NodeFilePropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeFilePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeFilePropsWhereInput>;
};


export type QueryAggregateNodeImagePropsArgs = {
  cursor?: Maybe<NodeImagePropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeImagePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeImagePropsWhereInput>;
};


export type QueryAggregateNodeInfoArgs = {
  cursor?: Maybe<NodeInfoWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeInfoOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeInfoWhereInput>;
};


export type QueryAggregateNodeLinkPropsArgs = {
  cursor?: Maybe<NodeLinkPropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeLinkPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeLinkPropsWhereInput>;
};


export type QueryAggregateNodePropsArgs = {
  cursor?: Maybe<NodePropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodePropsWhereInput>;
};


export type QueryAggregateNodeSwitchOptionPropsArgs = {
  cursor?: Maybe<NodeSwitchOptionPropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeSwitchOptionPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchOptionPropsWhereInput>;
};


export type QueryAggregateNodeSwitchPropsArgs = {
  cursor?: Maybe<NodeSwitchPropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeSwitchPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchPropsWhereInput>;
};


export type QueryAggregateNodeTextPropsArgs = {
  cursor?: Maybe<NodeTextPropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeTextPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeTextPropsWhereInput>;
};


export type QueryAggregateNodeVideoPropsArgs = {
  cursor?: Maybe<NodeVideoPropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeVideoPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeVideoPropsWhereInput>;
};


export type QueryAggregateNodeWaitPropsArgs = {
  cursor?: Maybe<NodeWaitPropsWhereUniqueInput>;
  orderBy?: Maybe<Array<NodeWaitPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeWaitPropsWhereInput>;
};


export type QueryAggregatePortArgs = {
  cursor?: Maybe<PortWhereUniqueInput>;
  orderBy?: Maybe<Array<PortOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PortWhereInput>;
};


export type QueryAggregatePosArgs = {
  cursor?: Maybe<PosWhereUniqueInput>;
  orderBy?: Maybe<Array<PosOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PosWhereInput>;
};


export type QueryAggregatePropsTypeArgs = {
  cursor?: Maybe<PropsTypeWhereUniqueInput>;
  orderBy?: Maybe<Array<PropsTypeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PropsTypeWhereInput>;
};


export type QueryAggregateSwitchDisplayTypeArgs = {
  cursor?: Maybe<SwitchDisplayTypeWhereUniqueInput>;
  orderBy?: Maybe<Array<SwitchDisplayTypeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SwitchDisplayTypeWhereInput>;
};


export type QueryAggregateTemplateNodeArgs = {
  cursor?: Maybe<TemplateNodeWhereUniqueInput>;
  orderBy?: Maybe<Array<TemplateNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodeWhereInput>;
};


export type QueryAggregateTemplateNodesGroupArgs = {
  cursor?: Maybe<TemplateNodesGroupWhereUniqueInput>;
  orderBy?: Maybe<Array<TemplateNodesGroupOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodesGroupWhereInput>;
};


export type QueryBotFlowArgs = {
  where: BotFlowWhereUniqueInput;
};


export type QueryBotFlowVersionArgs = {
  where: BotFlowVersionWhereUniqueInput;
};


export type QueryBotFlowVersionsArgs = {
  cursor?: Maybe<BotFlowVersionWhereUniqueInput>;
  distinct?: Maybe<Array<BotFlowVersionScalarFieldEnum>>;
  orderBy?: Maybe<Array<BotFlowVersionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowVersionWhereInput>;
};


export type QueryBotFlowsArgs = {
  cursor?: Maybe<BotFlowWhereUniqueInput>;
  distinct?: Maybe<Array<BotFlowScalarFieldEnum>>;
  orderBy?: Maybe<Array<BotFlowOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowWhereInput>;
};


export type QueryConnectionArgs = {
  where: ConnectionWhereUniqueInput;
};


export type QueryConnectionsArgs = {
  cursor?: Maybe<ConnectionWhereUniqueInput>;
  distinct?: Maybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: Maybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ConnectionWhereInput>;
};


export type QueryFindFirstBotFlowArgs = {
  cursor?: Maybe<BotFlowWhereUniqueInput>;
  distinct?: Maybe<Array<BotFlowScalarFieldEnum>>;
  orderBy?: Maybe<Array<BotFlowOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowWhereInput>;
};


export type QueryFindFirstBotFlowVersionArgs = {
  cursor?: Maybe<BotFlowVersionWhereUniqueInput>;
  distinct?: Maybe<Array<BotFlowVersionScalarFieldEnum>>;
  orderBy?: Maybe<Array<BotFlowVersionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowVersionWhereInput>;
};


export type QueryFindFirstConnectionArgs = {
  cursor?: Maybe<ConnectionWhereUniqueInput>;
  distinct?: Maybe<Array<ConnectionScalarFieldEnum>>;
  orderBy?: Maybe<Array<ConnectionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ConnectionWhereInput>;
};


export type QueryFindFirstFlowNodeArgs = {
  cursor?: Maybe<FlowNodeWhereUniqueInput>;
  distinct?: Maybe<Array<FlowNodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FlowNodeWhereInput>;
};


export type QueryFindFirstNodeAudioPropsArgs = {
  cursor?: Maybe<NodeAudioPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeAudioPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeAudioPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeAudioPropsWhereInput>;
};


export type QueryFindFirstNodeCountdownPropsArgs = {
  cursor?: Maybe<NodeCountdownPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeCountdownPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeCountdownPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeCountdownPropsWhereInput>;
};


export type QueryFindFirstNodeFilePropsArgs = {
  cursor?: Maybe<NodeFilePropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeFilePropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeFilePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeFilePropsWhereInput>;
};


export type QueryFindFirstNodeImagePropsArgs = {
  cursor?: Maybe<NodeImagePropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeImagePropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeImagePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeImagePropsWhereInput>;
};


export type QueryFindFirstNodeInfoArgs = {
  cursor?: Maybe<NodeInfoWhereUniqueInput>;
  distinct?: Maybe<Array<NodeInfoScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeInfoOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeInfoWhereInput>;
};


export type QueryFindFirstNodeLinkPropsArgs = {
  cursor?: Maybe<NodeLinkPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeLinkPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeLinkPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeLinkPropsWhereInput>;
};


export type QueryFindFirstNodePropsArgs = {
  cursor?: Maybe<NodePropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodePropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodePropsWhereInput>;
};


export type QueryFindFirstNodeSwitchOptionPropsArgs = {
  cursor?: Maybe<NodeSwitchOptionPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeSwitchOptionPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeSwitchOptionPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchOptionPropsWhereInput>;
};


export type QueryFindFirstNodeSwitchPropsArgs = {
  cursor?: Maybe<NodeSwitchPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeSwitchPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeSwitchPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchPropsWhereInput>;
};


export type QueryFindFirstNodeTextPropsArgs = {
  cursor?: Maybe<NodeTextPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeTextPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeTextPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeTextPropsWhereInput>;
};


export type QueryFindFirstNodeVideoPropsArgs = {
  cursor?: Maybe<NodeVideoPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeVideoPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeVideoPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeVideoPropsWhereInput>;
};


export type QueryFindFirstNodeWaitPropsArgs = {
  cursor?: Maybe<NodeWaitPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeWaitPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeWaitPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeWaitPropsWhereInput>;
};


export type QueryFindFirstPortArgs = {
  cursor?: Maybe<PortWhereUniqueInput>;
  distinct?: Maybe<Array<PortScalarFieldEnum>>;
  orderBy?: Maybe<Array<PortOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PortWhereInput>;
};


export type QueryFindFirstPosArgs = {
  cursor?: Maybe<PosWhereUniqueInput>;
  distinct?: Maybe<Array<PosScalarFieldEnum>>;
  orderBy?: Maybe<Array<PosOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PosWhereInput>;
};


export type QueryFindFirstPropsTypeArgs = {
  cursor?: Maybe<PropsTypeWhereUniqueInput>;
  distinct?: Maybe<Array<PropsTypeScalarFieldEnum>>;
  orderBy?: Maybe<Array<PropsTypeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PropsTypeWhereInput>;
};


export type QueryFindFirstSwitchDisplayTypeArgs = {
  cursor?: Maybe<SwitchDisplayTypeWhereUniqueInput>;
  distinct?: Maybe<Array<SwitchDisplayTypeScalarFieldEnum>>;
  orderBy?: Maybe<Array<SwitchDisplayTypeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SwitchDisplayTypeWhereInput>;
};


export type QueryFindFirstTemplateNodeArgs = {
  cursor?: Maybe<TemplateNodeWhereUniqueInput>;
  distinct?: Maybe<Array<TemplateNodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<TemplateNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodeWhereInput>;
};


export type QueryFindFirstTemplateNodesGroupArgs = {
  cursor?: Maybe<TemplateNodesGroupWhereUniqueInput>;
  distinct?: Maybe<Array<TemplateNodesGroupScalarFieldEnum>>;
  orderBy?: Maybe<Array<TemplateNodesGroupOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodesGroupWhereInput>;
};


export type QueryFindManyNodeAudioPropsArgs = {
  cursor?: Maybe<NodeAudioPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeAudioPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeAudioPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeAudioPropsWhereInput>;
};


export type QueryFindManyNodeCountdownPropsArgs = {
  cursor?: Maybe<NodeCountdownPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeCountdownPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeCountdownPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeCountdownPropsWhereInput>;
};


export type QueryFindManyNodeFilePropsArgs = {
  cursor?: Maybe<NodeFilePropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeFilePropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeFilePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeFilePropsWhereInput>;
};


export type QueryFindManyNodeImagePropsArgs = {
  cursor?: Maybe<NodeImagePropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeImagePropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeImagePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeImagePropsWhereInput>;
};


export type QueryFindManyNodeLinkPropsArgs = {
  cursor?: Maybe<NodeLinkPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeLinkPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeLinkPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeLinkPropsWhereInput>;
};


export type QueryFindManyNodePropsArgs = {
  cursor?: Maybe<NodePropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodePropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodePropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodePropsWhereInput>;
};


export type QueryFindManyNodeSwitchOptionPropsArgs = {
  cursor?: Maybe<NodeSwitchOptionPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeSwitchOptionPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeSwitchOptionPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchOptionPropsWhereInput>;
};


export type QueryFindManyNodeSwitchPropsArgs = {
  cursor?: Maybe<NodeSwitchPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeSwitchPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeSwitchPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchPropsWhereInput>;
};


export type QueryFindManyNodeTextPropsArgs = {
  cursor?: Maybe<NodeTextPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeTextPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeTextPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeTextPropsWhereInput>;
};


export type QueryFindManyNodeVideoPropsArgs = {
  cursor?: Maybe<NodeVideoPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeVideoPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeVideoPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeVideoPropsWhereInput>;
};


export type QueryFindManyNodeWaitPropsArgs = {
  cursor?: Maybe<NodeWaitPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeWaitPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeWaitPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeWaitPropsWhereInput>;
};


export type QueryFindManyPosArgs = {
  cursor?: Maybe<PosWhereUniqueInput>;
  distinct?: Maybe<Array<PosScalarFieldEnum>>;
  orderBy?: Maybe<Array<PosOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PosWhereInput>;
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


export type QueryFindUniquePosArgs = {
  where: PosWhereUniqueInput;
};


export type QueryFlowNodeArgs = {
  where: FlowNodeWhereUniqueInput;
};


export type QueryFlowNodesArgs = {
  cursor?: Maybe<FlowNodeWhereUniqueInput>;
  distinct?: Maybe<Array<FlowNodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FlowNodeWhereInput>;
};


export type QueryGroupByBotFlowArgs = {
  by: Array<BotFlowScalarFieldEnum>;
  having?: Maybe<BotFlowScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<BotFlowOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowWhereInput>;
};


export type QueryGroupByBotFlowVersionArgs = {
  by: Array<BotFlowVersionScalarFieldEnum>;
  having?: Maybe<BotFlowVersionScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<BotFlowVersionOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BotFlowVersionWhereInput>;
};


export type QueryGroupByConnectionArgs = {
  by: Array<ConnectionScalarFieldEnum>;
  having?: Maybe<ConnectionScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ConnectionOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ConnectionWhereInput>;
};


export type QueryGroupByFlowNodeArgs = {
  by: Array<FlowNodeScalarFieldEnum>;
  having?: Maybe<FlowNodeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<FlowNodeOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FlowNodeWhereInput>;
};


export type QueryGroupByNodeAudioPropsArgs = {
  by: Array<NodeAudioPropsScalarFieldEnum>;
  having?: Maybe<NodeAudioPropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeAudioPropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeAudioPropsWhereInput>;
};


export type QueryGroupByNodeCountdownPropsArgs = {
  by: Array<NodeCountdownPropsScalarFieldEnum>;
  having?: Maybe<NodeCountdownPropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeCountdownPropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeCountdownPropsWhereInput>;
};


export type QueryGroupByNodeFilePropsArgs = {
  by: Array<NodeFilePropsScalarFieldEnum>;
  having?: Maybe<NodeFilePropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeFilePropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeFilePropsWhereInput>;
};


export type QueryGroupByNodeImagePropsArgs = {
  by: Array<NodeImagePropsScalarFieldEnum>;
  having?: Maybe<NodeImagePropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeImagePropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeImagePropsWhereInput>;
};


export type QueryGroupByNodeInfoArgs = {
  by: Array<NodeInfoScalarFieldEnum>;
  having?: Maybe<NodeInfoScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeInfoOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeInfoWhereInput>;
};


export type QueryGroupByNodeLinkPropsArgs = {
  by: Array<NodeLinkPropsScalarFieldEnum>;
  having?: Maybe<NodeLinkPropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeLinkPropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeLinkPropsWhereInput>;
};


export type QueryGroupByNodePropsArgs = {
  by: Array<NodePropsScalarFieldEnum>;
  having?: Maybe<NodePropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodePropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodePropsWhereInput>;
};


export type QueryGroupByNodeSwitchOptionPropsArgs = {
  by: Array<NodeSwitchOptionPropsScalarFieldEnum>;
  having?: Maybe<NodeSwitchOptionPropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeSwitchOptionPropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchOptionPropsWhereInput>;
};


export type QueryGroupByNodeSwitchPropsArgs = {
  by: Array<NodeSwitchPropsScalarFieldEnum>;
  having?: Maybe<NodeSwitchPropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeSwitchPropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchPropsWhereInput>;
};


export type QueryGroupByNodeTextPropsArgs = {
  by: Array<NodeTextPropsScalarFieldEnum>;
  having?: Maybe<NodeTextPropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeTextPropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeTextPropsWhereInput>;
};


export type QueryGroupByNodeVideoPropsArgs = {
  by: Array<NodeVideoPropsScalarFieldEnum>;
  having?: Maybe<NodeVideoPropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeVideoPropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeVideoPropsWhereInput>;
};


export type QueryGroupByNodeWaitPropsArgs = {
  by: Array<NodeWaitPropsScalarFieldEnum>;
  having?: Maybe<NodeWaitPropsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<NodeWaitPropsOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeWaitPropsWhereInput>;
};


export type QueryGroupByPortArgs = {
  by: Array<PortScalarFieldEnum>;
  having?: Maybe<PortScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<PortOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PortWhereInput>;
};


export type QueryGroupByPosArgs = {
  by: Array<PosScalarFieldEnum>;
  having?: Maybe<PosScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<PosOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PosWhereInput>;
};


export type QueryGroupByPropsTypeArgs = {
  by: Array<PropsTypeScalarFieldEnum>;
  having?: Maybe<PropsTypeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<PropsTypeOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PropsTypeWhereInput>;
};


export type QueryGroupBySwitchDisplayTypeArgs = {
  by: Array<SwitchDisplayTypeScalarFieldEnum>;
  having?: Maybe<SwitchDisplayTypeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SwitchDisplayTypeOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SwitchDisplayTypeWhereInput>;
};


export type QueryGroupByTemplateNodeArgs = {
  by: Array<TemplateNodeScalarFieldEnum>;
  having?: Maybe<TemplateNodeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<TemplateNodeOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodeWhereInput>;
};


export type QueryGroupByTemplateNodesGroupArgs = {
  by: Array<TemplateNodesGroupScalarFieldEnum>;
  having?: Maybe<TemplateNodesGroupScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<TemplateNodesGroupOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodesGroupWhereInput>;
};


export type QueryNodeInfoArgs = {
  where: NodeInfoWhereUniqueInput;
};


export type QueryNodeInfosArgs = {
  cursor?: Maybe<NodeInfoWhereUniqueInput>;
  distinct?: Maybe<Array<NodeInfoScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeInfoOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeInfoWhereInput>;
};


export type QueryPortArgs = {
  where: PortWhereUniqueInput;
};


export type QueryPortsArgs = {
  cursor?: Maybe<PortWhereUniqueInput>;
  distinct?: Maybe<Array<PortScalarFieldEnum>>;
  orderBy?: Maybe<Array<PortOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PortWhereInput>;
};


export type QueryPropsTypeArgs = {
  where: PropsTypeWhereUniqueInput;
};


export type QueryPropsTypesArgs = {
  cursor?: Maybe<PropsTypeWhereUniqueInput>;
  distinct?: Maybe<Array<PropsTypeScalarFieldEnum>>;
  orderBy?: Maybe<Array<PropsTypeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PropsTypeWhereInput>;
};


export type QuerySwitchDisplayTypeArgs = {
  where: SwitchDisplayTypeWhereUniqueInput;
};


export type QuerySwitchDisplayTypesArgs = {
  cursor?: Maybe<SwitchDisplayTypeWhereUniqueInput>;
  distinct?: Maybe<Array<SwitchDisplayTypeScalarFieldEnum>>;
  orderBy?: Maybe<Array<SwitchDisplayTypeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SwitchDisplayTypeWhereInput>;
};


export type QueryTemplateNodeArgs = {
  where: TemplateNodeWhereUniqueInput;
};


export type QueryTemplateNodesArgs = {
  cursor?: Maybe<TemplateNodeWhereUniqueInput>;
  distinct?: Maybe<Array<TemplateNodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<TemplateNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodeWhereInput>;
};


export type QueryTemplateNodesGroupArgs = {
  where: TemplateNodesGroupWhereUniqueInput;
};


export type QueryTemplateNodesGroupsArgs = {
  cursor?: Maybe<TemplateNodesGroupWhereUniqueInput>;
  distinct?: Maybe<Array<TemplateNodesGroupScalarFieldEnum>>;
  orderBy?: Maybe<Array<TemplateNodesGroupOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodesGroupWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type SwitchDisplayType = {
  __typename?: 'SwitchDisplayType';
  NodeSwitchProps: Array<NodeSwitchProps>;
  _count?: Maybe<SwitchDisplayTypeCount>;
  type: Scalars['String'];
};


export type SwitchDisplayTypeNodeSwitchPropsArgs = {
  cursor?: Maybe<NodeSwitchPropsWhereUniqueInput>;
  distinct?: Maybe<Array<NodeSwitchPropsScalarFieldEnum>>;
  orderBy?: Maybe<Array<NodeSwitchPropsOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NodeSwitchPropsWhereInput>;
};

export type SwitchDisplayTypeCount = {
  __typename?: 'SwitchDisplayTypeCount';
  NodeSwitchProps: Scalars['Int'];
};

export type SwitchDisplayTypeCountAggregate = {
  __typename?: 'SwitchDisplayTypeCountAggregate';
  _all: Scalars['Int'];
  type: Scalars['Int'];
};

export type SwitchDisplayTypeCountOrderByAggregateInput = {
  type?: Maybe<SortOrder>;
};

export type SwitchDisplayTypeCreateInput = {
  NodeSwitchProps?: Maybe<NodeSwitchPropsCreateNestedManyWithoutSwitchDisplayTypeInput>;
  type: Scalars['String'];
};

export type SwitchDisplayTypeCreateNestedOneWithoutNodeSwitchPropsInput = {
  connect?: Maybe<SwitchDisplayTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<SwitchDisplayTypeCreateOrConnectWithoutNodeSwitchPropsInput>;
  create?: Maybe<SwitchDisplayTypeCreateWithoutNodeSwitchPropsInput>;
};

export type SwitchDisplayTypeCreateOrConnectWithoutNodeSwitchPropsInput = {
  create: SwitchDisplayTypeCreateWithoutNodeSwitchPropsInput;
  where: SwitchDisplayTypeWhereUniqueInput;
};

export type SwitchDisplayTypeCreateWithoutNodeSwitchPropsInput = {
  type: Scalars['String'];
};

export type SwitchDisplayTypeGroupBy = {
  __typename?: 'SwitchDisplayTypeGroupBy';
  _count?: Maybe<SwitchDisplayTypeCountAggregate>;
  _max?: Maybe<SwitchDisplayTypeMaxAggregate>;
  _min?: Maybe<SwitchDisplayTypeMinAggregate>;
  type: Scalars['String'];
};

export type SwitchDisplayTypeMaxAggregate = {
  __typename?: 'SwitchDisplayTypeMaxAggregate';
  type?: Maybe<Scalars['String']>;
};

export type SwitchDisplayTypeMaxOrderByAggregateInput = {
  type?: Maybe<SortOrder>;
};

export type SwitchDisplayTypeMinAggregate = {
  __typename?: 'SwitchDisplayTypeMinAggregate';
  type?: Maybe<Scalars['String']>;
};

export type SwitchDisplayTypeMinOrderByAggregateInput = {
  type?: Maybe<SortOrder>;
};

export type SwitchDisplayTypeOrderByWithAggregationInput = {
  _count?: Maybe<SwitchDisplayTypeCountOrderByAggregateInput>;
  _max?: Maybe<SwitchDisplayTypeMaxOrderByAggregateInput>;
  _min?: Maybe<SwitchDisplayTypeMinOrderByAggregateInput>;
  type?: Maybe<SortOrder>;
};

export type SwitchDisplayTypeOrderByWithRelationInput = {
  NodeSwitchProps?: Maybe<NodeSwitchPropsOrderByRelationAggregateInput>;
  type?: Maybe<SortOrder>;
};

export type SwitchDisplayTypeRelationFilter = {
  is?: Maybe<SwitchDisplayTypeWhereInput>;
  isNot?: Maybe<SwitchDisplayTypeWhereInput>;
};

export enum SwitchDisplayTypeScalarFieldEnum {
  Type = 'type'
}

export type SwitchDisplayTypeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SwitchDisplayTypeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SwitchDisplayTypeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SwitchDisplayTypeScalarWhereWithAggregatesInput>>;
  type?: Maybe<StringWithAggregatesFilter>;
};

export type SwitchDisplayTypeUpdateInput = {
  NodeSwitchProps?: Maybe<NodeSwitchPropsUpdateManyWithoutSwitchDisplayTypeInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SwitchDisplayTypeUpdateManyMutationInput = {
  type?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SwitchDisplayTypeUpdateOneRequiredWithoutNodeSwitchPropsInput = {
  connect?: Maybe<SwitchDisplayTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<SwitchDisplayTypeCreateOrConnectWithoutNodeSwitchPropsInput>;
  create?: Maybe<SwitchDisplayTypeCreateWithoutNodeSwitchPropsInput>;
  update?: Maybe<SwitchDisplayTypeUpdateWithoutNodeSwitchPropsInput>;
  upsert?: Maybe<SwitchDisplayTypeUpsertWithoutNodeSwitchPropsInput>;
};

export type SwitchDisplayTypeUpdateWithoutNodeSwitchPropsInput = {
  type?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SwitchDisplayTypeUpsertWithoutNodeSwitchPropsInput = {
  create: SwitchDisplayTypeCreateWithoutNodeSwitchPropsInput;
  update: SwitchDisplayTypeUpdateWithoutNodeSwitchPropsInput;
};

export type SwitchDisplayTypeWhereInput = {
  AND?: Maybe<Array<SwitchDisplayTypeWhereInput>>;
  NOT?: Maybe<Array<SwitchDisplayTypeWhereInput>>;
  NodeSwitchProps?: Maybe<NodeSwitchPropsListRelationFilter>;
  OR?: Maybe<Array<SwitchDisplayTypeWhereInput>>;
  type?: Maybe<StringFilter>;
};

export type SwitchDisplayTypeWhereUniqueInput = {
  type?: Maybe<Scalars['String']>;
};

export type TemplateNode = {
  __typename?: 'TemplateNode';
  FlowNode: Array<FlowNode>;
  NodeProps?: Maybe<NodeProps>;
  _count?: Maybe<TemplateNodeCount>;
  group?: Maybe<TemplateNodesGroup>;
  id: Scalars['Int'];
  info?: Maybe<NodeInfo>;
  order: Scalars['Int'];
  templateNodesGroupId?: Maybe<Scalars['Int']>;
};


export type TemplateNodeFlowNodeArgs = {
  cursor?: Maybe<FlowNodeWhereUniqueInput>;
  distinct?: Maybe<Array<FlowNodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FlowNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FlowNodeWhereInput>;
};

export type TemplateNodeAvgAggregate = {
  __typename?: 'TemplateNodeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  templateNodesGroupId?: Maybe<Scalars['Float']>;
};

export type TemplateNodeAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  templateNodesGroupId?: Maybe<SortOrder>;
};

export type TemplateNodeCount = {
  __typename?: 'TemplateNodeCount';
  FlowNode: Scalars['Int'];
};

export type TemplateNodeCountAggregate = {
  __typename?: 'TemplateNodeCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  templateNodesGroupId: Scalars['Int'];
};

export type TemplateNodeCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  templateNodesGroupId?: Maybe<SortOrder>;
};

export type TemplateNodeCreateInput = {
  FlowNode?: Maybe<FlowNodeCreateNestedManyWithoutTemplateNodeInput>;
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutTemplateNodeInput>;
  group?: Maybe<TemplateNodesGroupCreateNestedOneWithoutNodesInput>;
  info?: Maybe<NodeInfoCreateNestedOneWithoutTemplateNodeInput>;
  order: Scalars['Int'];
};

export type TemplateNodeCreateNestedManyWithoutGroupInput = {
  connect?: Maybe<Array<TemplateNodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TemplateNodeCreateOrConnectWithoutGroupInput>>;
  create?: Maybe<Array<TemplateNodeCreateWithoutGroupInput>>;
};

export type TemplateNodeCreateNestedOneWithoutFlowNodeInput = {
  connect?: Maybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<TemplateNodeCreateOrConnectWithoutFlowNodeInput>;
  create?: Maybe<TemplateNodeCreateWithoutFlowNodeInput>;
};

export type TemplateNodeCreateNestedOneWithoutInfoInput = {
  connect?: Maybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<TemplateNodeCreateOrConnectWithoutInfoInput>;
  create?: Maybe<TemplateNodeCreateWithoutInfoInput>;
};

export type TemplateNodeCreateNestedOneWithoutNodePropsInput = {
  connect?: Maybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<TemplateNodeCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<TemplateNodeCreateWithoutNodePropsInput>;
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
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutTemplateNodeInput>;
  group?: Maybe<TemplateNodesGroupCreateNestedOneWithoutNodesInput>;
  info?: Maybe<NodeInfoCreateNestedOneWithoutTemplateNodeInput>;
  order: Scalars['Int'];
};

export type TemplateNodeCreateWithoutGroupInput = {
  FlowNode?: Maybe<FlowNodeCreateNestedManyWithoutTemplateNodeInput>;
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutTemplateNodeInput>;
  info?: Maybe<NodeInfoCreateNestedOneWithoutTemplateNodeInput>;
  order: Scalars['Int'];
};

export type TemplateNodeCreateWithoutInfoInput = {
  FlowNode?: Maybe<FlowNodeCreateNestedManyWithoutTemplateNodeInput>;
  NodeProps?: Maybe<NodePropsCreateNestedOneWithoutTemplateNodeInput>;
  group?: Maybe<TemplateNodesGroupCreateNestedOneWithoutNodesInput>;
  order: Scalars['Int'];
};

export type TemplateNodeCreateWithoutNodePropsInput = {
  FlowNode?: Maybe<FlowNodeCreateNestedManyWithoutTemplateNodeInput>;
  group?: Maybe<TemplateNodesGroupCreateNestedOneWithoutNodesInput>;
  info?: Maybe<NodeInfoCreateNestedOneWithoutTemplateNodeInput>;
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
  order: Scalars['Int'];
  templateNodesGroupId?: Maybe<Scalars['Int']>;
};

export type TemplateNodeListRelationFilter = {
  every?: Maybe<TemplateNodeWhereInput>;
  none?: Maybe<TemplateNodeWhereInput>;
  some?: Maybe<TemplateNodeWhereInput>;
};

export type TemplateNodeMaxAggregate = {
  __typename?: 'TemplateNodeMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  templateNodesGroupId?: Maybe<Scalars['Int']>;
};

export type TemplateNodeMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  templateNodesGroupId?: Maybe<SortOrder>;
};

export type TemplateNodeMinAggregate = {
  __typename?: 'TemplateNodeMinAggregate';
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  templateNodesGroupId?: Maybe<Scalars['Int']>;
};

export type TemplateNodeMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  templateNodesGroupId?: Maybe<SortOrder>;
};

export type TemplateNodeOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TemplateNodeOrderByWithAggregationInput = {
  _avg?: Maybe<TemplateNodeAvgOrderByAggregateInput>;
  _count?: Maybe<TemplateNodeCountOrderByAggregateInput>;
  _max?: Maybe<TemplateNodeMaxOrderByAggregateInput>;
  _min?: Maybe<TemplateNodeMinOrderByAggregateInput>;
  _sum?: Maybe<TemplateNodeSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  templateNodesGroupId?: Maybe<SortOrder>;
};

export type TemplateNodeOrderByWithRelationInput = {
  FlowNode?: Maybe<FlowNodeOrderByRelationAggregateInput>;
  NodeProps?: Maybe<NodePropsOrderByWithRelationInput>;
  group?: Maybe<TemplateNodesGroupOrderByWithRelationInput>;
  id?: Maybe<SortOrder>;
  info?: Maybe<NodeInfoOrderByWithRelationInput>;
  order?: Maybe<SortOrder>;
  templateNodesGroupId?: Maybe<SortOrder>;
};

export type TemplateNodeRelationFilter = {
  is?: Maybe<TemplateNodeWhereInput>;
  isNot?: Maybe<TemplateNodeWhereInput>;
};

export enum TemplateNodeScalarFieldEnum {
  Id = 'id',
  Order = 'order',
  TemplateNodesGroupId = 'templateNodesGroupId'
}

export type TemplateNodeScalarWhereInput = {
  AND?: Maybe<Array<TemplateNodeScalarWhereInput>>;
  NOT?: Maybe<Array<TemplateNodeScalarWhereInput>>;
  OR?: Maybe<Array<TemplateNodeScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  order?: Maybe<IntFilter>;
  templateNodesGroupId?: Maybe<IntNullableFilter>;
};

export type TemplateNodeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TemplateNodeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TemplateNodeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TemplateNodeScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  order?: Maybe<IntWithAggregatesFilter>;
  templateNodesGroupId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type TemplateNodeSumAggregate = {
  __typename?: 'TemplateNodeSumAggregate';
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  templateNodesGroupId?: Maybe<Scalars['Int']>;
};

export type TemplateNodeSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
  templateNodesGroupId?: Maybe<SortOrder>;
};

export type TemplateNodeUpdateInput = {
  FlowNode?: Maybe<FlowNodeUpdateManyWithoutTemplateNodeInput>;
  NodeProps?: Maybe<NodePropsUpdateOneWithoutTemplateNodeInput>;
  group?: Maybe<TemplateNodesGroupUpdateOneWithoutNodesInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutTemplateNodeInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateManyMutationInput = {
  order?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateManyWithWhereWithoutGroupInput = {
  data: TemplateNodeUpdateManyMutationInput;
  where: TemplateNodeScalarWhereInput;
};

export type TemplateNodeUpdateManyWithoutGroupInput = {
  connect?: Maybe<Array<TemplateNodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TemplateNodeCreateOrConnectWithoutGroupInput>>;
  create?: Maybe<Array<TemplateNodeCreateWithoutGroupInput>>;
  delete?: Maybe<Array<TemplateNodeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TemplateNodeScalarWhereInput>>;
  disconnect?: Maybe<Array<TemplateNodeWhereUniqueInput>>;
  set?: Maybe<Array<TemplateNodeWhereUniqueInput>>;
  update?: Maybe<Array<TemplateNodeUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: Maybe<Array<TemplateNodeUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: Maybe<Array<TemplateNodeUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type TemplateNodeUpdateOneRequiredWithoutNodePropsInput = {
  connect?: Maybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<TemplateNodeCreateOrConnectWithoutNodePropsInput>;
  create?: Maybe<TemplateNodeCreateWithoutNodePropsInput>;
  update?: Maybe<TemplateNodeUpdateWithoutNodePropsInput>;
  upsert?: Maybe<TemplateNodeUpsertWithoutNodePropsInput>;
};

export type TemplateNodeUpdateOneWithoutFlowNodeInput = {
  connect?: Maybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<TemplateNodeCreateOrConnectWithoutFlowNodeInput>;
  create?: Maybe<TemplateNodeCreateWithoutFlowNodeInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TemplateNodeUpdateWithoutFlowNodeInput>;
  upsert?: Maybe<TemplateNodeUpsertWithoutFlowNodeInput>;
};

export type TemplateNodeUpdateOneWithoutInfoInput = {
  connect?: Maybe<TemplateNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<TemplateNodeCreateOrConnectWithoutInfoInput>;
  create?: Maybe<TemplateNodeCreateWithoutInfoInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TemplateNodeUpdateWithoutInfoInput>;
  upsert?: Maybe<TemplateNodeUpsertWithoutInfoInput>;
};

export type TemplateNodeUpdateWithWhereUniqueWithoutGroupInput = {
  data: TemplateNodeUpdateWithoutGroupInput;
  where: TemplateNodeWhereUniqueInput;
};

export type TemplateNodeUpdateWithoutFlowNodeInput = {
  NodeProps?: Maybe<NodePropsUpdateOneWithoutTemplateNodeInput>;
  group?: Maybe<TemplateNodesGroupUpdateOneWithoutNodesInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutTemplateNodeInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateWithoutGroupInput = {
  FlowNode?: Maybe<FlowNodeUpdateManyWithoutTemplateNodeInput>;
  NodeProps?: Maybe<NodePropsUpdateOneWithoutTemplateNodeInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutTemplateNodeInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateWithoutInfoInput = {
  FlowNode?: Maybe<FlowNodeUpdateManyWithoutTemplateNodeInput>;
  NodeProps?: Maybe<NodePropsUpdateOneWithoutTemplateNodeInput>;
  group?: Maybe<TemplateNodesGroupUpdateOneWithoutNodesInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TemplateNodeUpdateWithoutNodePropsInput = {
  FlowNode?: Maybe<FlowNodeUpdateManyWithoutTemplateNodeInput>;
  group?: Maybe<TemplateNodesGroupUpdateOneWithoutNodesInput>;
  info?: Maybe<NodeInfoUpdateOneWithoutTemplateNodeInput>;
  order?: Maybe<IntFieldUpdateOperationsInput>;
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
  AND?: Maybe<Array<TemplateNodeWhereInput>>;
  FlowNode?: Maybe<FlowNodeListRelationFilter>;
  NOT?: Maybe<Array<TemplateNodeWhereInput>>;
  NodeProps?: Maybe<NodePropsRelationFilter>;
  OR?: Maybe<Array<TemplateNodeWhereInput>>;
  group?: Maybe<TemplateNodesGroupRelationFilter>;
  id?: Maybe<IntFilter>;
  info?: Maybe<NodeInfoRelationFilter>;
  order?: Maybe<IntFilter>;
  templateNodesGroupId?: Maybe<IntNullableFilter>;
};

export type TemplateNodeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
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
  cursor?: Maybe<TemplateNodeWhereUniqueInput>;
  distinct?: Maybe<Array<TemplateNodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<TemplateNodeOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TemplateNodeWhereInput>;
};

export type TemplateNodesGroupAvgAggregate = {
  __typename?: 'TemplateNodesGroupAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TemplateNodesGroupAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
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
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TemplateNodesGroupCreateInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  nodes?: Maybe<TemplateNodeCreateNestedManyWithoutGroupInput>;
};

export type TemplateNodesGroupCreateNestedOneWithoutNodesInput = {
  connect?: Maybe<TemplateNodesGroupWhereUniqueInput>;
  connectOrCreate?: Maybe<TemplateNodesGroupCreateOrConnectWithoutNodesInput>;
  create?: Maybe<TemplateNodesGroupCreateWithoutNodesInput>;
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
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TemplateNodesGroupMinAggregate = {
  __typename?: 'TemplateNodesGroupMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TemplateNodesGroupMinOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TemplateNodesGroupOrderByWithAggregationInput = {
  _avg?: Maybe<TemplateNodesGroupAvgOrderByAggregateInput>;
  _count?: Maybe<TemplateNodesGroupCountOrderByAggregateInput>;
  _max?: Maybe<TemplateNodesGroupMaxOrderByAggregateInput>;
  _min?: Maybe<TemplateNodesGroupMinOrderByAggregateInput>;
  _sum?: Maybe<TemplateNodesGroupSumOrderByAggregateInput>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TemplateNodesGroupOrderByWithRelationInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  nodes?: Maybe<TemplateNodeOrderByRelationAggregateInput>;
};

export type TemplateNodesGroupRelationFilter = {
  is?: Maybe<TemplateNodesGroupWhereInput>;
  isNot?: Maybe<TemplateNodesGroupWhereInput>;
};

export enum TemplateNodesGroupScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type TemplateNodesGroupScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TemplateNodesGroupScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TemplateNodesGroupScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TemplateNodesGroupScalarWhereWithAggregatesInput>>;
  description?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type TemplateNodesGroupSumAggregate = {
  __typename?: 'TemplateNodesGroupSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TemplateNodesGroupSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type TemplateNodesGroupUpdateInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  nodes?: Maybe<TemplateNodeUpdateManyWithoutGroupInput>;
};

export type TemplateNodesGroupUpdateManyMutationInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TemplateNodesGroupUpdateOneWithoutNodesInput = {
  connect?: Maybe<TemplateNodesGroupWhereUniqueInput>;
  connectOrCreate?: Maybe<TemplateNodesGroupCreateOrConnectWithoutNodesInput>;
  create?: Maybe<TemplateNodesGroupCreateWithoutNodesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TemplateNodesGroupUpdateWithoutNodesInput>;
  upsert?: Maybe<TemplateNodesGroupUpsertWithoutNodesInput>;
};

export type TemplateNodesGroupUpdateWithoutNodesInput = {
  description?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TemplateNodesGroupUpsertWithoutNodesInput = {
  create: TemplateNodesGroupCreateWithoutNodesInput;
  update: TemplateNodesGroupUpdateWithoutNodesInput;
};

export type TemplateNodesGroupWhereInput = {
  AND?: Maybe<Array<TemplateNodesGroupWhereInput>>;
  NOT?: Maybe<Array<TemplateNodesGroupWhereInput>>;
  OR?: Maybe<Array<TemplateNodesGroupWhereInput>>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  nodes?: Maybe<TemplateNodeListRelationFilter>;
};

export type TemplateNodesGroupWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TestValeraQueryVariables = Exact<{ [key: string]: never; }>;


export type TestValeraQuery = { __typename?: 'Query', templateNodes: Array<{ __typename?: 'TemplateNode', id: number }> };


export const TestValeraQueryDocument = gql`
    query testValeraQuery {
  templateNodes {
    id
  }
}
    `;

/**
 * __useTestValeraQuery__
 *
 * To run a query within a React component, call `useTestValeraQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestValeraQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestValeraQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestValeraQuery(baseOptions?: Apollo.QueryHookOptions<TestValeraQuery, TestValeraQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestValeraQuery, TestValeraQueryVariables>(TestValeraQueryDocument, options);
      }
export function useTestValeraQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestValeraQuery, TestValeraQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestValeraQuery, TestValeraQueryVariables>(TestValeraQueryDocument, options);
        }
export type TestValeraQueryHookResult = ReturnType<typeof useTestValeraQuery>;
export type TestValeraQueryLazyQueryHookResult = ReturnType<typeof useTestValeraQueryLazyQuery>;
export type TestValeraQueryQueryResult = Apollo.QueryResult<TestValeraQuery, TestValeraQueryVariables>;