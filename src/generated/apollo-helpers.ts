import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AffectedRowsOutputKeySpecifier = ('count' | AffectedRowsOutputKeySpecifier)[];
export type AffectedRowsOutputFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateBotFlowKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateBotFlowKeySpecifier)[];
export type AggregateBotFlowFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateBotFlowVersionKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateBotFlowVersionKeySpecifier)[];
export type AggregateBotFlowVersionFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateConnectionKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateConnectionKeySpecifier)[];
export type AggregateConnectionFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateFlowNodeKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateFlowNodeKeySpecifier)[];
export type AggregateFlowNodeFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeAudioPropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeAudioPropsKeySpecifier)[];
export type AggregateNodeAudioPropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeCountdownPropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeCountdownPropsKeySpecifier)[];
export type AggregateNodeCountdownPropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeFilePropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeFilePropsKeySpecifier)[];
export type AggregateNodeFilePropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeImagePropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeImagePropsKeySpecifier)[];
export type AggregateNodeImagePropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeInfoKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeInfoKeySpecifier)[];
export type AggregateNodeInfoFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeLinkPropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeLinkPropsKeySpecifier)[];
export type AggregateNodeLinkPropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodePropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodePropsKeySpecifier)[];
export type AggregateNodePropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeSwitchOptionPropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeSwitchOptionPropsKeySpecifier)[];
export type AggregateNodeSwitchOptionPropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeSwitchPropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeSwitchPropsKeySpecifier)[];
export type AggregateNodeSwitchPropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeTextPropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeTextPropsKeySpecifier)[];
export type AggregateNodeTextPropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeVideoPropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeVideoPropsKeySpecifier)[];
export type AggregateNodeVideoPropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNodeWaitPropsKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateNodeWaitPropsKeySpecifier)[];
export type AggregateNodeWaitPropsFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregatePortKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregatePortKeySpecifier)[];
export type AggregatePortFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTemplateNodeKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateTemplateNodeKeySpecifier)[];
export type AggregateTemplateNodeFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTemplateNodesGroupKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateTemplateNodesGroupKeySpecifier)[];
export type AggregateTemplateNodesGroupFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowKeySpecifier = ('_count' | 'description' | 'id' | 'name' | 'nextVersionNumber' | 'versions' | BotFlowKeySpecifier)[];
export type BotFlowFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nextVersionNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	versions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowAvgAggregateKeySpecifier = ('id' | 'nextVersionNumber' | BotFlowAvgAggregateKeySpecifier)[];
export type BotFlowAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nextVersionNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowCountKeySpecifier = ('versions' | BotFlowCountKeySpecifier)[];
export type BotFlowCountFieldPolicy = {
	versions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowCountAggregateKeySpecifier = ('_all' | 'description' | 'id' | 'name' | 'nextVersionNumber' | BotFlowCountAggregateKeySpecifier)[];
export type BotFlowCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nextVersionNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'description' | 'id' | 'name' | 'nextVersionNumber' | BotFlowGroupByKeySpecifier)[];
export type BotFlowGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nextVersionNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowMaxAggregateKeySpecifier = ('description' | 'id' | 'name' | 'nextVersionNumber' | BotFlowMaxAggregateKeySpecifier)[];
export type BotFlowMaxAggregateFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nextVersionNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowMinAggregateKeySpecifier = ('description' | 'id' | 'name' | 'nextVersionNumber' | BotFlowMinAggregateKeySpecifier)[];
export type BotFlowMinAggregateFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nextVersionNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowSumAggregateKeySpecifier = ('id' | 'nextVersionNumber' | BotFlowSumAggregateKeySpecifier)[];
export type BotFlowSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nextVersionNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowVersionKeySpecifier = ('_count' | 'botFlow' | 'botFlowId' | 'canvasTranslate' | 'connections' | 'heads' | 'id' | 'nodes' | 'select' | 'version' | 'zoom' | BotFlowVersionKeySpecifier)[];
export type BotFlowVersionFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowId?: FieldPolicy<any> | FieldReadFunction<any>,
	canvasTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	connections?: FieldPolicy<any> | FieldReadFunction<any>,
	heads?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	select?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	zoom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowVersionAvgAggregateKeySpecifier = ('botFlowId' | 'id' | 'version' | BotFlowVersionAvgAggregateKeySpecifier)[];
export type BotFlowVersionAvgAggregateFieldPolicy = {
	botFlowId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowVersionCountKeySpecifier = ('connections' | 'nodes' | BotFlowVersionCountKeySpecifier)[];
export type BotFlowVersionCountFieldPolicy = {
	connections?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowVersionCountAggregateKeySpecifier = ('_all' | 'botFlowId' | 'id' | 'version' | BotFlowVersionCountAggregateKeySpecifier)[];
export type BotFlowVersionCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowVersionGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'botFlowId' | 'id' | 'version' | BotFlowVersionGroupByKeySpecifier)[];
export type BotFlowVersionGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowVersionMaxAggregateKeySpecifier = ('botFlowId' | 'id' | 'version' | BotFlowVersionMaxAggregateKeySpecifier)[];
export type BotFlowVersionMaxAggregateFieldPolicy = {
	botFlowId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowVersionMinAggregateKeySpecifier = ('botFlowId' | 'id' | 'version' | BotFlowVersionMinAggregateKeySpecifier)[];
export type BotFlowVersionMinAggregateFieldPolicy = {
	botFlowId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BotFlowVersionSumAggregateKeySpecifier = ('botFlowId' | 'id' | 'version' | BotFlowVersionSumAggregateKeySpecifier)[];
export type BotFlowVersionSumAggregateFieldPolicy = {
	botFlowId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionKeySpecifier = ('botFlowVersionId' | 'createdAt' | 'curvature' | 'flow' | 'from' | 'fromPort' | 'id' | 'selected' | 'to' | 'toPort' | 'visible' | ConnectionKeySpecifier)[];
export type ConnectionFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	curvature?: FieldPolicy<any> | FieldReadFunction<any>,
	flow?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	fromPort?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	selected?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>,
	toPort?: FieldPolicy<any> | FieldReadFunction<any>,
	visible?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionAvgAggregateKeySpecifier = ('botFlowVersionId' | 'from' | 'id' | 'to' | ConnectionAvgAggregateKeySpecifier)[];
export type ConnectionAvgAggregateFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionCountAggregateKeySpecifier = ('_all' | 'botFlowVersionId' | 'createdAt' | 'from' | 'id' | 'to' | ConnectionCountAggregateKeySpecifier)[];
export type ConnectionCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'botFlowVersionId' | 'createdAt' | 'from' | 'id' | 'to' | ConnectionGroupByKeySpecifier)[];
export type ConnectionGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionMaxAggregateKeySpecifier = ('botFlowVersionId' | 'createdAt' | 'from' | 'id' | 'to' | ConnectionMaxAggregateKeySpecifier)[];
export type ConnectionMaxAggregateFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionMinAggregateKeySpecifier = ('botFlowVersionId' | 'createdAt' | 'from' | 'id' | 'to' | ConnectionMinAggregateKeySpecifier)[];
export type ConnectionMinAggregateFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionSumAggregateKeySpecifier = ('botFlowVersionId' | 'from' | 'id' | 'to' | ConnectionSumAggregateKeySpecifier)[];
export type ConnectionSumAggregateFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowLineKeySpecifier = ('flowLineNodes' | 'hasSubnodes' | FlowLineKeySpecifier)[];
export type FlowLineFieldPolicy = {
	flowLineNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	hasSubnodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowNodeKeySpecifier = ('NodeProps' | '_count' | 'allSuccessors' | 'botFlowVersionId' | 'children' | 'childrenTotalWidth' | 'childrenVisible' | 'complexParentNode' | 'firstSubnode' | 'flow' | 'flowLine' | 'head' | 'height' | 'id' | 'info' | 'isSub' | 'lane' | 'leftWidth' | 'nodeInfoId' | 'nodePropsId' | 'out1' | 'outConnections' | 'parent' | 'parentConnection' | 'ports' | 'pos' | 'positionNumber' | 'prevDirectNodes' | 'rightWidth' | 'selected' | 'subnodes' | 'subnodesVisible' | 'subnodesWidth' | 'templateNode' | 'templateNodeId' | 'totalWidth' | 'updatedAt' | 'visible' | 'width' | FlowNodeKeySpecifier)[];
export type FlowNodeFieldPolicy = {
	NodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	allSuccessors?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	childrenTotalWidth?: FieldPolicy<any> | FieldReadFunction<any>,
	childrenVisible?: FieldPolicy<any> | FieldReadFunction<any>,
	complexParentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	firstSubnode?: FieldPolicy<any> | FieldReadFunction<any>,
	flow?: FieldPolicy<any> | FieldReadFunction<any>,
	flowLine?: FieldPolicy<any> | FieldReadFunction<any>,
	head?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	isSub?: FieldPolicy<any> | FieldReadFunction<any>,
	lane?: FieldPolicy<any> | FieldReadFunction<any>,
	leftWidth?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	out1?: FieldPolicy<any> | FieldReadFunction<any>,
	outConnections?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	parentConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ports?: FieldPolicy<any> | FieldReadFunction<any>,
	pos?: FieldPolicy<any> | FieldReadFunction<any>,
	positionNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	prevDirectNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	rightWidth?: FieldPolicy<any> | FieldReadFunction<any>,
	selected?: FieldPolicy<any> | FieldReadFunction<any>,
	subnodes?: FieldPolicy<any> | FieldReadFunction<any>,
	subnodesVisible?: FieldPolicy<any> | FieldReadFunction<any>,
	subnodesWidth?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	totalWidth?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	visible?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowNodeAvgAggregateKeySpecifier = ('botFlowVersionId' | 'id' | 'nodeInfoId' | 'nodePropsId' | 'templateNodeId' | FlowNodeAvgAggregateKeySpecifier)[];
export type FlowNodeAvgAggregateFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodeId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowNodeCountKeySpecifier = ('ports' | FlowNodeCountKeySpecifier)[];
export type FlowNodeCountFieldPolicy = {
	ports?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowNodeCountAggregateKeySpecifier = ('_all' | 'botFlowVersionId' | 'id' | 'nodeInfoId' | 'nodePropsId' | 'templateNodeId' | 'updatedAt' | FlowNodeCountAggregateKeySpecifier)[];
export type FlowNodeCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowNodeGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'botFlowVersionId' | 'id' | 'nodeInfoId' | 'nodePropsId' | 'templateNodeId' | 'updatedAt' | FlowNodeGroupByKeySpecifier)[];
export type FlowNodeGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowNodeMaxAggregateKeySpecifier = ('botFlowVersionId' | 'id' | 'nodeInfoId' | 'nodePropsId' | 'templateNodeId' | 'updatedAt' | FlowNodeMaxAggregateKeySpecifier)[];
export type FlowNodeMaxAggregateFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowNodeMinAggregateKeySpecifier = ('botFlowVersionId' | 'id' | 'nodeInfoId' | 'nodePropsId' | 'templateNodeId' | 'updatedAt' | FlowNodeMinAggregateKeySpecifier)[];
export type FlowNodeMinAggregateFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlowNodeSumAggregateKeySpecifier = ('botFlowVersionId' | 'id' | 'nodeInfoId' | 'nodePropsId' | 'templateNodeId' | FlowNodeSumAggregateKeySpecifier)[];
export type FlowNodeSumAggregateFieldPolicy = {
	botFlowVersionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodeId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createBotFlow' | 'createBotFlowVersion' | 'createConnection' | 'createFlowNode' | 'createManyBotFlow' | 'createManyBotFlowVersion' | 'createManyConnection' | 'createManyFlowNode' | 'createManyNodeAudioProps' | 'createManyNodeCountdownProps' | 'createManyNodeFileProps' | 'createManyNodeImageProps' | 'createManyNodeInfo' | 'createManyNodeLinkProps' | 'createManyNodeProps' | 'createManyNodeSwitchOptionProps' | 'createManyNodeSwitchProps' | 'createManyNodeTextProps' | 'createManyNodeVideoProps' | 'createManyNodeWaitProps' | 'createManyPort' | 'createManyTemplateNode' | 'createManyTemplateNodesGroup' | 'createNodeAudioProps' | 'createNodeCountdownProps' | 'createNodeFileProps' | 'createNodeImageProps' | 'createNodeInfo' | 'createNodeLinkProps' | 'createNodeProps' | 'createNodeSwitchOptionProps' | 'createNodeSwitchProps' | 'createNodeTextProps' | 'createNodeVideoProps' | 'createNodeWaitProps' | 'createPort' | 'createTemplateNode' | 'createTemplateNodesGroup' | 'deleteBotFlow' | 'deleteBotFlowVersion' | 'deleteConnection' | 'deleteFlowNode' | 'deleteManyBotFlow' | 'deleteManyBotFlowVersion' | 'deleteManyConnection' | 'deleteManyFlowNode' | 'deleteManyNodeAudioProps' | 'deleteManyNodeCountdownProps' | 'deleteManyNodeFileProps' | 'deleteManyNodeImageProps' | 'deleteManyNodeInfo' | 'deleteManyNodeLinkProps' | 'deleteManyNodeProps' | 'deleteManyNodeSwitchOptionProps' | 'deleteManyNodeSwitchProps' | 'deleteManyNodeTextProps' | 'deleteManyNodeVideoProps' | 'deleteManyNodeWaitProps' | 'deleteManyPort' | 'deleteManyTemplateNode' | 'deleteManyTemplateNodesGroup' | 'deleteNodeAudioProps' | 'deleteNodeCountdownProps' | 'deleteNodeFileProps' | 'deleteNodeImageProps' | 'deleteNodeInfo' | 'deleteNodeLinkProps' | 'deleteNodeProps' | 'deleteNodeSwitchOptionProps' | 'deleteNodeSwitchProps' | 'deleteNodeTextProps' | 'deleteNodeVideoProps' | 'deleteNodeWaitProps' | 'deletePort' | 'deleteTemplateNode' | 'deleteTemplateNodesGroup' | 'updateBotFlow' | 'updateBotFlowVersion' | 'updateConnection' | 'updateFlowNode' | 'updateManyBotFlow' | 'updateManyBotFlowVersion' | 'updateManyConnection' | 'updateManyFlowNode' | 'updateManyNodeAudioProps' | 'updateManyNodeCountdownProps' | 'updateManyNodeFileProps' | 'updateManyNodeImageProps' | 'updateManyNodeInfo' | 'updateManyNodeLinkProps' | 'updateManyNodeProps' | 'updateManyNodeSwitchOptionProps' | 'updateManyNodeSwitchProps' | 'updateManyNodeTextProps' | 'updateManyNodeVideoProps' | 'updateManyNodeWaitProps' | 'updateManyPort' | 'updateManyTemplateNode' | 'updateManyTemplateNodesGroup' | 'updateNodeAudioProps' | 'updateNodeCountdownProps' | 'updateNodeFileProps' | 'updateNodeImageProps' | 'updateNodeInfo' | 'updateNodeLinkProps' | 'updateNodeProps' | 'updateNodeSwitchOptionProps' | 'updateNodeSwitchProps' | 'updateNodeTextProps' | 'updateNodeVideoProps' | 'updateNodeWaitProps' | 'updatePort' | 'updateTemplateNode' | 'updateTemplateNodesGroup' | 'upsertBotFlow' | 'upsertBotFlowVersion' | 'upsertConnection' | 'upsertFlowNode' | 'upsertNodeAudioProps' | 'upsertNodeCountdownProps' | 'upsertNodeFileProps' | 'upsertNodeImageProps' | 'upsertNodeInfo' | 'upsertNodeLinkProps' | 'upsertNodeProps' | 'upsertNodeSwitchOptionProps' | 'upsertNodeSwitchProps' | 'upsertNodeTextProps' | 'upsertNodeVideoProps' | 'upsertNodeWaitProps' | 'upsertPort' | 'upsertTemplateNode' | 'upsertTemplateNodesGroup' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	createBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	createConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	createFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyPort?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createPort?: FieldPolicy<any> | FieldReadFunction<any>,
	createTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	createTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyPort?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePort?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	updateConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyPort?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePort?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertPort?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeAudioPropsKeySpecifier = ('id' | 'nodeProps' | 'src' | NodeAudioPropsKeySpecifier)[];
export type NodeAudioPropsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeAudioPropsAvgAggregateKeySpecifier = ('id' | NodeAudioPropsAvgAggregateKeySpecifier)[];
export type NodeAudioPropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeAudioPropsCountAggregateKeySpecifier = ('_all' | 'id' | 'src' | NodeAudioPropsCountAggregateKeySpecifier)[];
export type NodeAudioPropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeAudioPropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'src' | NodeAudioPropsGroupByKeySpecifier)[];
export type NodeAudioPropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeAudioPropsMaxAggregateKeySpecifier = ('id' | 'src' | NodeAudioPropsMaxAggregateKeySpecifier)[];
export type NodeAudioPropsMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeAudioPropsMinAggregateKeySpecifier = ('id' | 'src' | NodeAudioPropsMinAggregateKeySpecifier)[];
export type NodeAudioPropsMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeAudioPropsSumAggregateKeySpecifier = ('id' | NodeAudioPropsSumAggregateKeySpecifier)[];
export type NodeAudioPropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeCountdownPropsKeySpecifier = ('duration' | 'id' | 'nodeProps' | NodeCountdownPropsKeySpecifier)[];
export type NodeCountdownPropsFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeCountdownPropsAvgAggregateKeySpecifier = ('duration' | 'id' | NodeCountdownPropsAvgAggregateKeySpecifier)[];
export type NodeCountdownPropsAvgAggregateFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeCountdownPropsCountAggregateKeySpecifier = ('_all' | 'duration' | 'id' | NodeCountdownPropsCountAggregateKeySpecifier)[];
export type NodeCountdownPropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeCountdownPropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'duration' | 'id' | NodeCountdownPropsGroupByKeySpecifier)[];
export type NodeCountdownPropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeCountdownPropsMaxAggregateKeySpecifier = ('duration' | 'id' | NodeCountdownPropsMaxAggregateKeySpecifier)[];
export type NodeCountdownPropsMaxAggregateFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeCountdownPropsMinAggregateKeySpecifier = ('duration' | 'id' | NodeCountdownPropsMinAggregateKeySpecifier)[];
export type NodeCountdownPropsMinAggregateFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeCountdownPropsSumAggregateKeySpecifier = ('duration' | 'id' | NodeCountdownPropsSumAggregateKeySpecifier)[];
export type NodeCountdownPropsSumAggregateFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeFilePropsKeySpecifier = ('id' | 'info' | 'nodeProps' | 'url' | NodeFilePropsKeySpecifier)[];
export type NodeFilePropsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeFilePropsAvgAggregateKeySpecifier = ('id' | NodeFilePropsAvgAggregateKeySpecifier)[];
export type NodeFilePropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeFilePropsCountAggregateKeySpecifier = ('_all' | 'id' | 'info' | 'url' | NodeFilePropsCountAggregateKeySpecifier)[];
export type NodeFilePropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeFilePropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'info' | 'url' | NodeFilePropsGroupByKeySpecifier)[];
export type NodeFilePropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeFilePropsMaxAggregateKeySpecifier = ('id' | 'info' | 'url' | NodeFilePropsMaxAggregateKeySpecifier)[];
export type NodeFilePropsMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeFilePropsMinAggregateKeySpecifier = ('id' | 'info' | 'url' | NodeFilePropsMinAggregateKeySpecifier)[];
export type NodeFilePropsMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeFilePropsSumAggregateKeySpecifier = ('id' | NodeFilePropsSumAggregateKeySpecifier)[];
export type NodeFilePropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeImagePropsKeySpecifier = ('id' | 'nodeProps' | 'src' | NodeImagePropsKeySpecifier)[];
export type NodeImagePropsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeImagePropsAvgAggregateKeySpecifier = ('id' | NodeImagePropsAvgAggregateKeySpecifier)[];
export type NodeImagePropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeImagePropsCountAggregateKeySpecifier = ('_all' | 'id' | 'src' | NodeImagePropsCountAggregateKeySpecifier)[];
export type NodeImagePropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeImagePropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'src' | NodeImagePropsGroupByKeySpecifier)[];
export type NodeImagePropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeImagePropsMaxAggregateKeySpecifier = ('id' | 'src' | NodeImagePropsMaxAggregateKeySpecifier)[];
export type NodeImagePropsMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeImagePropsMinAggregateKeySpecifier = ('id' | 'src' | NodeImagePropsMinAggregateKeySpecifier)[];
export type NodeImagePropsMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeImagePropsSumAggregateKeySpecifier = ('id' | NodeImagePropsSumAggregateKeySpecifier)[];
export type NodeImagePropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeInfoKeySpecifier = ('FlowNode' | 'TemplateNode' | 'description' | 'iconLink' | 'id' | 'name' | NodeInfoKeySpecifier)[];
export type NodeInfoFieldPolicy = {
	FlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	iconLink?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeInfoAvgAggregateKeySpecifier = ('id' | NodeInfoAvgAggregateKeySpecifier)[];
export type NodeInfoAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeInfoCountAggregateKeySpecifier = ('_all' | 'description' | 'iconLink' | 'id' | 'name' | NodeInfoCountAggregateKeySpecifier)[];
export type NodeInfoCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	iconLink?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeInfoGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'description' | 'iconLink' | 'id' | 'name' | NodeInfoGroupByKeySpecifier)[];
export type NodeInfoGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	iconLink?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeInfoMaxAggregateKeySpecifier = ('description' | 'iconLink' | 'id' | 'name' | NodeInfoMaxAggregateKeySpecifier)[];
export type NodeInfoMaxAggregateFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	iconLink?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeInfoMinAggregateKeySpecifier = ('description' | 'iconLink' | 'id' | 'name' | NodeInfoMinAggregateKeySpecifier)[];
export type NodeInfoMinAggregateFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	iconLink?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeInfoSumAggregateKeySpecifier = ('id' | NodeInfoSumAggregateKeySpecifier)[];
export type NodeInfoSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeLinkPropsKeySpecifier = ('id' | 'nodeProps' | 'src' | 'text' | NodeLinkPropsKeySpecifier)[];
export type NodeLinkPropsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeLinkPropsAvgAggregateKeySpecifier = ('id' | NodeLinkPropsAvgAggregateKeySpecifier)[];
export type NodeLinkPropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeLinkPropsCountAggregateKeySpecifier = ('_all' | 'id' | 'src' | 'text' | NodeLinkPropsCountAggregateKeySpecifier)[];
export type NodeLinkPropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeLinkPropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'src' | 'text' | NodeLinkPropsGroupByKeySpecifier)[];
export type NodeLinkPropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeLinkPropsMaxAggregateKeySpecifier = ('id' | 'src' | 'text' | NodeLinkPropsMaxAggregateKeySpecifier)[];
export type NodeLinkPropsMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeLinkPropsMinAggregateKeySpecifier = ('id' | 'src' | 'text' | NodeLinkPropsMinAggregateKeySpecifier)[];
export type NodeLinkPropsMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeLinkPropsSumAggregateKeySpecifier = ('id' | NodeLinkPropsSumAggregateKeySpecifier)[];
export type NodeLinkPropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodePropsKeySpecifier = ('NodeAudioProps' | 'NodeCountdownProps' | 'NodeFileProps' | 'NodeImageProps' | 'NodeLinkProps' | 'NodeSwitchOptionProps' | 'NodeSwitchProps' | 'NodeTextProps' | 'NodeVideoProps' | 'NodeWaitProps' | 'createdAt' | 'flowNode' | 'id' | 'templateNode' | 'type' | NodePropsKeySpecifier)[];
export type NodePropsFieldPolicy = {
	NodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	flowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodePropsAvgAggregateKeySpecifier = ('id' | NodePropsAvgAggregateKeySpecifier)[];
export type NodePropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodePropsCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'type' | NodePropsCountAggregateKeySpecifier)[];
export type NodePropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodePropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'createdAt' | 'id' | 'type' | NodePropsGroupByKeySpecifier)[];
export type NodePropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodePropsMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'type' | NodePropsMaxAggregateKeySpecifier)[];
export type NodePropsMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodePropsMinAggregateKeySpecifier = ('createdAt' | 'id' | 'type' | NodePropsMinAggregateKeySpecifier)[];
export type NodePropsMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodePropsSumAggregateKeySpecifier = ('id' | NodePropsSumAggregateKeySpecifier)[];
export type NodePropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchOptionPropsKeySpecifier = ('id' | 'imageLink' | 'nodeProps' | 'text' | NodeSwitchOptionPropsKeySpecifier)[];
export type NodeSwitchOptionPropsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchOptionPropsAvgAggregateKeySpecifier = ('id' | NodeSwitchOptionPropsAvgAggregateKeySpecifier)[];
export type NodeSwitchOptionPropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchOptionPropsCountAggregateKeySpecifier = ('_all' | 'id' | 'imageLink' | 'text' | NodeSwitchOptionPropsCountAggregateKeySpecifier)[];
export type NodeSwitchOptionPropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchOptionPropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'imageLink' | 'text' | NodeSwitchOptionPropsGroupByKeySpecifier)[];
export type NodeSwitchOptionPropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchOptionPropsMaxAggregateKeySpecifier = ('id' | 'imageLink' | 'text' | NodeSwitchOptionPropsMaxAggregateKeySpecifier)[];
export type NodeSwitchOptionPropsMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchOptionPropsMinAggregateKeySpecifier = ('id' | 'imageLink' | 'text' | NodeSwitchOptionPropsMinAggregateKeySpecifier)[];
export type NodeSwitchOptionPropsMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageLink?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchOptionPropsSumAggregateKeySpecifier = ('id' | NodeSwitchOptionPropsSumAggregateKeySpecifier)[];
export type NodeSwitchOptionPropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchPropsKeySpecifier = ('SwitchDisplayType' | 'id' | 'nodeProps' | 'withImage' | NodeSwitchPropsKeySpecifier)[];
export type NodeSwitchPropsFieldPolicy = {
	SwitchDisplayType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	withImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchPropsAvgAggregateKeySpecifier = ('id' | NodeSwitchPropsAvgAggregateKeySpecifier)[];
export type NodeSwitchPropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchPropsCountAggregateKeySpecifier = ('SwitchDisplayType' | '_all' | 'id' | 'withImage' | NodeSwitchPropsCountAggregateKeySpecifier)[];
export type NodeSwitchPropsCountAggregateFieldPolicy = {
	SwitchDisplayType?: FieldPolicy<any> | FieldReadFunction<any>,
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	withImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchPropsGroupByKeySpecifier = ('SwitchDisplayType' | '_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'withImage' | NodeSwitchPropsGroupByKeySpecifier)[];
export type NodeSwitchPropsGroupByFieldPolicy = {
	SwitchDisplayType?: FieldPolicy<any> | FieldReadFunction<any>,
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	withImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchPropsMaxAggregateKeySpecifier = ('SwitchDisplayType' | 'id' | 'withImage' | NodeSwitchPropsMaxAggregateKeySpecifier)[];
export type NodeSwitchPropsMaxAggregateFieldPolicy = {
	SwitchDisplayType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	withImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchPropsMinAggregateKeySpecifier = ('SwitchDisplayType' | 'id' | 'withImage' | NodeSwitchPropsMinAggregateKeySpecifier)[];
export type NodeSwitchPropsMinAggregateFieldPolicy = {
	SwitchDisplayType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	withImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSwitchPropsSumAggregateKeySpecifier = ('id' | NodeSwitchPropsSumAggregateKeySpecifier)[];
export type NodeSwitchPropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeTextPropsKeySpecifier = ('id' | 'nodeProps' | 'src' | NodeTextPropsKeySpecifier)[];
export type NodeTextPropsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeTextPropsAvgAggregateKeySpecifier = ('id' | NodeTextPropsAvgAggregateKeySpecifier)[];
export type NodeTextPropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeTextPropsCountAggregateKeySpecifier = ('_all' | 'id' | 'src' | NodeTextPropsCountAggregateKeySpecifier)[];
export type NodeTextPropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeTextPropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'src' | NodeTextPropsGroupByKeySpecifier)[];
export type NodeTextPropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeTextPropsMaxAggregateKeySpecifier = ('id' | 'src' | NodeTextPropsMaxAggregateKeySpecifier)[];
export type NodeTextPropsMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeTextPropsMinAggregateKeySpecifier = ('id' | 'src' | NodeTextPropsMinAggregateKeySpecifier)[];
export type NodeTextPropsMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeTextPropsSumAggregateKeySpecifier = ('id' | NodeTextPropsSumAggregateKeySpecifier)[];
export type NodeTextPropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeVideoPropsKeySpecifier = ('id' | 'nodeProps' | 'src' | NodeVideoPropsKeySpecifier)[];
export type NodeVideoPropsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeVideoPropsAvgAggregateKeySpecifier = ('id' | NodeVideoPropsAvgAggregateKeySpecifier)[];
export type NodeVideoPropsAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeVideoPropsCountAggregateKeySpecifier = ('_all' | 'id' | 'src' | NodeVideoPropsCountAggregateKeySpecifier)[];
export type NodeVideoPropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeVideoPropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'src' | NodeVideoPropsGroupByKeySpecifier)[];
export type NodeVideoPropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeVideoPropsMaxAggregateKeySpecifier = ('id' | 'src' | NodeVideoPropsMaxAggregateKeySpecifier)[];
export type NodeVideoPropsMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeVideoPropsMinAggregateKeySpecifier = ('id' | 'src' | NodeVideoPropsMinAggregateKeySpecifier)[];
export type NodeVideoPropsMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeVideoPropsSumAggregateKeySpecifier = ('id' | NodeVideoPropsSumAggregateKeySpecifier)[];
export type NodeVideoPropsSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWaitPropsKeySpecifier = ('delay' | 'id' | 'nodeProps' | 'src' | NodeWaitPropsKeySpecifier)[];
export type NodeWaitPropsFieldPolicy = {
	delay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWaitPropsAvgAggregateKeySpecifier = ('delay' | 'id' | NodeWaitPropsAvgAggregateKeySpecifier)[];
export type NodeWaitPropsAvgAggregateFieldPolicy = {
	delay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWaitPropsCountAggregateKeySpecifier = ('_all' | 'delay' | 'id' | 'src' | NodeWaitPropsCountAggregateKeySpecifier)[];
export type NodeWaitPropsCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	delay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWaitPropsGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'delay' | 'id' | 'src' | NodeWaitPropsGroupByKeySpecifier)[];
export type NodeWaitPropsGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	delay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWaitPropsMaxAggregateKeySpecifier = ('delay' | 'id' | 'src' | NodeWaitPropsMaxAggregateKeySpecifier)[];
export type NodeWaitPropsMaxAggregateFieldPolicy = {
	delay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWaitPropsMinAggregateKeySpecifier = ('delay' | 'id' | 'src' | NodeWaitPropsMinAggregateKeySpecifier)[];
export type NodeWaitPropsMinAggregateFieldPolicy = {
	delay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWaitPropsSumAggregateKeySpecifier = ('delay' | 'id' | NodeWaitPropsSumAggregateKeySpecifier)[];
export type NodeWaitPropsSumAggregateFieldPolicy = {
	delay?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PortKeySpecifier = ('_count' | 'flowNodeId' | 'id' | 'inConnection' | 'index' | 'isActive' | 'node' | 'outConnections' | 'pos' | 'selected' | PortKeySpecifier)[];
export type PortFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	flowNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	outConnections?: FieldPolicy<any> | FieldReadFunction<any>,
	pos?: FieldPolicy<any> | FieldReadFunction<any>,
	selected?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PortAvgAggregateKeySpecifier = ('flowNodeId' | 'id' | 'index' | PortAvgAggregateKeySpecifier)[];
export type PortAvgAggregateFieldPolicy = {
	flowNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PortCountKeySpecifier = ('outConnections' | PortCountKeySpecifier)[];
export type PortCountFieldPolicy = {
	outConnections?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PortCountAggregateKeySpecifier = ('_all' | 'flowNodeId' | 'id' | 'index' | PortCountAggregateKeySpecifier)[];
export type PortCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	flowNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PortGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'flowNodeId' | 'id' | 'index' | PortGroupByKeySpecifier)[];
export type PortGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	flowNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PortMaxAggregateKeySpecifier = ('flowNodeId' | 'id' | 'index' | PortMaxAggregateKeySpecifier)[];
export type PortMaxAggregateFieldPolicy = {
	flowNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PortMinAggregateKeySpecifier = ('flowNodeId' | 'id' | 'index' | PortMinAggregateKeySpecifier)[];
export type PortMinAggregateFieldPolicy = {
	flowNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PortSumAggregateKeySpecifier = ('flowNodeId' | 'id' | 'index' | PortSumAggregateKeySpecifier)[];
export type PortSumAggregateFieldPolicy = {
	flowNodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PosKeySpecifier = ('x' | 'y' | PosKeySpecifier)[];
export type PosFieldPolicy = {
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('aggregateBotFlow' | 'aggregateBotFlowVersion' | 'aggregateConnection' | 'aggregateFlowNode' | 'aggregateNodeAudioProps' | 'aggregateNodeCountdownProps' | 'aggregateNodeFileProps' | 'aggregateNodeImageProps' | 'aggregateNodeInfo' | 'aggregateNodeLinkProps' | 'aggregateNodeProps' | 'aggregateNodeSwitchOptionProps' | 'aggregateNodeSwitchProps' | 'aggregateNodeTextProps' | 'aggregateNodeVideoProps' | 'aggregateNodeWaitProps' | 'aggregatePort' | 'aggregateTemplateNode' | 'aggregateTemplateNodesGroup' | 'botFlow' | 'botFlowVersion' | 'botFlowVersions' | 'botFlows' | 'canvas' | 'canvasDrag' | 'clientCurrentMousePos' | 'connection' | 'connections' | 'drag' | 'dragTemplate' | 'findFirstBotFlow' | 'findFirstBotFlowVersion' | 'findFirstConnection' | 'findFirstFlowNode' | 'findFirstNodeAudioProps' | 'findFirstNodeCountdownProps' | 'findFirstNodeFileProps' | 'findFirstNodeImageProps' | 'findFirstNodeInfo' | 'findFirstNodeLinkProps' | 'findFirstNodeProps' | 'findFirstNodeSwitchOptionProps' | 'findFirstNodeSwitchProps' | 'findFirstNodeTextProps' | 'findFirstNodeVideoProps' | 'findFirstNodeWaitProps' | 'findFirstPort' | 'findFirstTemplateNode' | 'findFirstTemplateNodesGroup' | 'findManyNodeAudioProps' | 'findManyNodeCountdownProps' | 'findManyNodeFileProps' | 'findManyNodeImageProps' | 'findManyNodeLinkProps' | 'findManyNodeProps' | 'findManyNodeSwitchOptionProps' | 'findManyNodeSwitchProps' | 'findManyNodeTextProps' | 'findManyNodeVideoProps' | 'findManyNodeWaitProps' | 'findUniqueNodeAudioProps' | 'findUniqueNodeCountdownProps' | 'findUniqueNodeFileProps' | 'findUniqueNodeImageProps' | 'findUniqueNodeLinkProps' | 'findUniqueNodeProps' | 'findUniqueNodeSwitchOptionProps' | 'findUniqueNodeSwitchProps' | 'findUniqueNodeTextProps' | 'findUniqueNodeVideoProps' | 'findUniqueNodeWaitProps' | 'flowNode' | 'flowNodes' | 'groupByBotFlow' | 'groupByBotFlowVersion' | 'groupByConnection' | 'groupByFlowNode' | 'groupByNodeAudioProps' | 'groupByNodeCountdownProps' | 'groupByNodeFileProps' | 'groupByNodeImageProps' | 'groupByNodeInfo' | 'groupByNodeLinkProps' | 'groupByNodeProps' | 'groupByNodeSwitchOptionProps' | 'groupByNodeSwitchProps' | 'groupByNodeTextProps' | 'groupByNodeVideoProps' | 'groupByNodeWaitProps' | 'groupByPort' | 'groupByTemplateNode' | 'groupByTemplateNodesGroup' | 'mouseBlockDragPos' | 'newPathDirection' | 'nodeInfo' | 'nodeInfos' | 'nodeToCopy' | 'port' | 'portToConnect' | 'ports' | 'precanvas' | 'sidebarVisible' | 'templateNode' | 'templateNodes' | 'templateNodesGroup' | 'templateNodesGroups' | 'version' | 'windowConfig' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	aggregateBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregatePort?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlowVersions?: FieldPolicy<any> | FieldReadFunction<any>,
	botFlows?: FieldPolicy<any> | FieldReadFunction<any>,
	canvas?: FieldPolicy<any> | FieldReadFunction<any>,
	canvasDrag?: FieldPolicy<any> | FieldReadFunction<any>,
	clientCurrentMousePos?: FieldPolicy<any> | FieldReadFunction<any>,
	connection?: FieldPolicy<any> | FieldReadFunction<any>,
	connections?: FieldPolicy<any> | FieldReadFunction<any>,
	drag?: FieldPolicy<any> | FieldReadFunction<any>,
	dragTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstPort?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findManyNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	findUniqueNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	flowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	flowNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByBotFlow?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByBotFlowVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByFlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeAudioProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeCountdownProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeFileProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeImageProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeLinkProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeSwitchOptionProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeSwitchProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeTextProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeVideoProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByNodeWaitProps?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByPort?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByTemplateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByTemplateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	mouseBlockDragPos?: FieldPolicy<any> | FieldReadFunction<any>,
	newPathDirection?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfos?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeToCopy?: FieldPolicy<any> | FieldReadFunction<any>,
	port?: FieldPolicy<any> | FieldReadFunction<any>,
	portToConnect?: FieldPolicy<any> | FieldReadFunction<any>,
	ports?: FieldPolicy<any> | FieldReadFunction<any>,
	precanvas?: FieldPolicy<any> | FieldReadFunction<any>,
	sidebarVisible?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNode?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	windowConfig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodeKeySpecifier = ('FlowNode' | 'NodeProps' | '_count' | 'group' | 'id' | 'info' | 'nodeInfoId' | 'nodePropsId' | 'order' | 'templateNodesGroupId' | TemplateNodeKeySpecifier)[];
export type TemplateNodeFieldPolicy = {
	FlowNode?: FieldPolicy<any> | FieldReadFunction<any>,
	NodeProps?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodeAvgAggregateKeySpecifier = ('id' | 'nodeInfoId' | 'nodePropsId' | 'order' | 'templateNodesGroupId' | TemplateNodeAvgAggregateKeySpecifier)[];
export type TemplateNodeAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodeCountKeySpecifier = ('FlowNode' | TemplateNodeCountKeySpecifier)[];
export type TemplateNodeCountFieldPolicy = {
	FlowNode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodeCountAggregateKeySpecifier = ('_all' | 'id' | 'nodeInfoId' | 'nodePropsId' | 'order' | 'templateNodesGroupId' | TemplateNodeCountAggregateKeySpecifier)[];
export type TemplateNodeCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodeGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'id' | 'nodeInfoId' | 'nodePropsId' | 'order' | 'templateNodesGroupId' | TemplateNodeGroupByKeySpecifier)[];
export type TemplateNodeGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodeMaxAggregateKeySpecifier = ('id' | 'nodeInfoId' | 'nodePropsId' | 'order' | 'templateNodesGroupId' | TemplateNodeMaxAggregateKeySpecifier)[];
export type TemplateNodeMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodeMinAggregateKeySpecifier = ('id' | 'nodeInfoId' | 'nodePropsId' | 'order' | 'templateNodesGroupId' | TemplateNodeMinAggregateKeySpecifier)[];
export type TemplateNodeMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodeSumAggregateKeySpecifier = ('id' | 'nodeInfoId' | 'nodePropsId' | 'order' | 'templateNodesGroupId' | TemplateNodeSumAggregateKeySpecifier)[];
export type TemplateNodeSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	nodePropsId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	templateNodesGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodesGroupKeySpecifier = ('_count' | 'description' | 'id' | 'name' | 'nodes' | TemplateNodesGroupKeySpecifier)[];
export type TemplateNodesGroupFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodesGroupAvgAggregateKeySpecifier = ('id' | TemplateNodesGroupAvgAggregateKeySpecifier)[];
export type TemplateNodesGroupAvgAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodesGroupCountKeySpecifier = ('nodes' | TemplateNodesGroupCountKeySpecifier)[];
export type TemplateNodesGroupCountFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodesGroupCountAggregateKeySpecifier = ('_all' | 'description' | 'id' | 'name' | TemplateNodesGroupCountAggregateKeySpecifier)[];
export type TemplateNodesGroupCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodesGroupGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'description' | 'id' | 'name' | TemplateNodesGroupGroupByKeySpecifier)[];
export type TemplateNodesGroupGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodesGroupMaxAggregateKeySpecifier = ('description' | 'id' | 'name' | TemplateNodesGroupMaxAggregateKeySpecifier)[];
export type TemplateNodesGroupMaxAggregateFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodesGroupMinAggregateKeySpecifier = ('description' | 'id' | 'name' | TemplateNodesGroupMinAggregateKeySpecifier)[];
export type TemplateNodesGroupMinAggregateFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateNodesGroupSumAggregateKeySpecifier = ('id' | TemplateNodesGroupSumAggregateKeySpecifier)[];
export type TemplateNodesGroupSumAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ZoomKeySpecifier = ('max' | 'min' | 'tick' | 'value' | ZoomKeySpecifier)[];
export type ZoomFieldPolicy = {
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	tick?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type backgroundKeySpecifier = ('blur' | 'imageUrl' | 'opacity' | backgroundKeySpecifier)[];
export type backgroundFieldPolicy = {
	blur?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	opacity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type canvasShapeKeySpecifier = ('height' | 'width' | 'x' | 'y' | canvasShapeKeySpecifier)[];
export type canvasShapeFieldPolicy = {
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>,
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>
};
export type windowConfigKeySpecifier = ('id' | windowConfigKeySpecifier)[];
export type windowConfigFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AffectedRowsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AffectedRowsOutputKeySpecifier | (() => undefined | AffectedRowsOutputKeySpecifier),
		fields?: AffectedRowsOutputFieldPolicy,
	},
	AggregateBotFlow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateBotFlowKeySpecifier | (() => undefined | AggregateBotFlowKeySpecifier),
		fields?: AggregateBotFlowFieldPolicy,
	},
	AggregateBotFlowVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateBotFlowVersionKeySpecifier | (() => undefined | AggregateBotFlowVersionKeySpecifier),
		fields?: AggregateBotFlowVersionFieldPolicy,
	},
	AggregateConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateConnectionKeySpecifier | (() => undefined | AggregateConnectionKeySpecifier),
		fields?: AggregateConnectionFieldPolicy,
	},
	AggregateFlowNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateFlowNodeKeySpecifier | (() => undefined | AggregateFlowNodeKeySpecifier),
		fields?: AggregateFlowNodeFieldPolicy,
	},
	AggregateNodeAudioProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeAudioPropsKeySpecifier | (() => undefined | AggregateNodeAudioPropsKeySpecifier),
		fields?: AggregateNodeAudioPropsFieldPolicy,
	},
	AggregateNodeCountdownProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeCountdownPropsKeySpecifier | (() => undefined | AggregateNodeCountdownPropsKeySpecifier),
		fields?: AggregateNodeCountdownPropsFieldPolicy,
	},
	AggregateNodeFileProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeFilePropsKeySpecifier | (() => undefined | AggregateNodeFilePropsKeySpecifier),
		fields?: AggregateNodeFilePropsFieldPolicy,
	},
	AggregateNodeImageProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeImagePropsKeySpecifier | (() => undefined | AggregateNodeImagePropsKeySpecifier),
		fields?: AggregateNodeImagePropsFieldPolicy,
	},
	AggregateNodeInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeInfoKeySpecifier | (() => undefined | AggregateNodeInfoKeySpecifier),
		fields?: AggregateNodeInfoFieldPolicy,
	},
	AggregateNodeLinkProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeLinkPropsKeySpecifier | (() => undefined | AggregateNodeLinkPropsKeySpecifier),
		fields?: AggregateNodeLinkPropsFieldPolicy,
	},
	AggregateNodeProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodePropsKeySpecifier | (() => undefined | AggregateNodePropsKeySpecifier),
		fields?: AggregateNodePropsFieldPolicy,
	},
	AggregateNodeSwitchOptionProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeSwitchOptionPropsKeySpecifier | (() => undefined | AggregateNodeSwitchOptionPropsKeySpecifier),
		fields?: AggregateNodeSwitchOptionPropsFieldPolicy,
	},
	AggregateNodeSwitchProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeSwitchPropsKeySpecifier | (() => undefined | AggregateNodeSwitchPropsKeySpecifier),
		fields?: AggregateNodeSwitchPropsFieldPolicy,
	},
	AggregateNodeTextProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeTextPropsKeySpecifier | (() => undefined | AggregateNodeTextPropsKeySpecifier),
		fields?: AggregateNodeTextPropsFieldPolicy,
	},
	AggregateNodeVideoProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeVideoPropsKeySpecifier | (() => undefined | AggregateNodeVideoPropsKeySpecifier),
		fields?: AggregateNodeVideoPropsFieldPolicy,
	},
	AggregateNodeWaitProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNodeWaitPropsKeySpecifier | (() => undefined | AggregateNodeWaitPropsKeySpecifier),
		fields?: AggregateNodeWaitPropsFieldPolicy,
	},
	AggregatePort?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregatePortKeySpecifier | (() => undefined | AggregatePortKeySpecifier),
		fields?: AggregatePortFieldPolicy,
	},
	AggregateTemplateNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTemplateNodeKeySpecifier | (() => undefined | AggregateTemplateNodeKeySpecifier),
		fields?: AggregateTemplateNodeFieldPolicy,
	},
	AggregateTemplateNodesGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTemplateNodesGroupKeySpecifier | (() => undefined | AggregateTemplateNodesGroupKeySpecifier),
		fields?: AggregateTemplateNodesGroupFieldPolicy,
	},
	BotFlow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowKeySpecifier | (() => undefined | BotFlowKeySpecifier),
		fields?: BotFlowFieldPolicy,
	},
	BotFlowAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowAvgAggregateKeySpecifier | (() => undefined | BotFlowAvgAggregateKeySpecifier),
		fields?: BotFlowAvgAggregateFieldPolicy,
	},
	BotFlowCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowCountKeySpecifier | (() => undefined | BotFlowCountKeySpecifier),
		fields?: BotFlowCountFieldPolicy,
	},
	BotFlowCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowCountAggregateKeySpecifier | (() => undefined | BotFlowCountAggregateKeySpecifier),
		fields?: BotFlowCountAggregateFieldPolicy,
	},
	BotFlowGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowGroupByKeySpecifier | (() => undefined | BotFlowGroupByKeySpecifier),
		fields?: BotFlowGroupByFieldPolicy,
	},
	BotFlowMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowMaxAggregateKeySpecifier | (() => undefined | BotFlowMaxAggregateKeySpecifier),
		fields?: BotFlowMaxAggregateFieldPolicy,
	},
	BotFlowMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowMinAggregateKeySpecifier | (() => undefined | BotFlowMinAggregateKeySpecifier),
		fields?: BotFlowMinAggregateFieldPolicy,
	},
	BotFlowSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowSumAggregateKeySpecifier | (() => undefined | BotFlowSumAggregateKeySpecifier),
		fields?: BotFlowSumAggregateFieldPolicy,
	},
	BotFlowVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowVersionKeySpecifier | (() => undefined | BotFlowVersionKeySpecifier),
		fields?: BotFlowVersionFieldPolicy,
	},
	BotFlowVersionAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowVersionAvgAggregateKeySpecifier | (() => undefined | BotFlowVersionAvgAggregateKeySpecifier),
		fields?: BotFlowVersionAvgAggregateFieldPolicy,
	},
	BotFlowVersionCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowVersionCountKeySpecifier | (() => undefined | BotFlowVersionCountKeySpecifier),
		fields?: BotFlowVersionCountFieldPolicy,
	},
	BotFlowVersionCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowVersionCountAggregateKeySpecifier | (() => undefined | BotFlowVersionCountAggregateKeySpecifier),
		fields?: BotFlowVersionCountAggregateFieldPolicy,
	},
	BotFlowVersionGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowVersionGroupByKeySpecifier | (() => undefined | BotFlowVersionGroupByKeySpecifier),
		fields?: BotFlowVersionGroupByFieldPolicy,
	},
	BotFlowVersionMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowVersionMaxAggregateKeySpecifier | (() => undefined | BotFlowVersionMaxAggregateKeySpecifier),
		fields?: BotFlowVersionMaxAggregateFieldPolicy,
	},
	BotFlowVersionMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowVersionMinAggregateKeySpecifier | (() => undefined | BotFlowVersionMinAggregateKeySpecifier),
		fields?: BotFlowVersionMinAggregateFieldPolicy,
	},
	BotFlowVersionSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BotFlowVersionSumAggregateKeySpecifier | (() => undefined | BotFlowVersionSumAggregateKeySpecifier),
		fields?: BotFlowVersionSumAggregateFieldPolicy,
	},
	Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionKeySpecifier | (() => undefined | ConnectionKeySpecifier),
		fields?: ConnectionFieldPolicy,
	},
	ConnectionAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionAvgAggregateKeySpecifier | (() => undefined | ConnectionAvgAggregateKeySpecifier),
		fields?: ConnectionAvgAggregateFieldPolicy,
	},
	ConnectionCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionCountAggregateKeySpecifier | (() => undefined | ConnectionCountAggregateKeySpecifier),
		fields?: ConnectionCountAggregateFieldPolicy,
	},
	ConnectionGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionGroupByKeySpecifier | (() => undefined | ConnectionGroupByKeySpecifier),
		fields?: ConnectionGroupByFieldPolicy,
	},
	ConnectionMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionMaxAggregateKeySpecifier | (() => undefined | ConnectionMaxAggregateKeySpecifier),
		fields?: ConnectionMaxAggregateFieldPolicy,
	},
	ConnectionMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionMinAggregateKeySpecifier | (() => undefined | ConnectionMinAggregateKeySpecifier),
		fields?: ConnectionMinAggregateFieldPolicy,
	},
	ConnectionSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionSumAggregateKeySpecifier | (() => undefined | ConnectionSumAggregateKeySpecifier),
		fields?: ConnectionSumAggregateFieldPolicy,
	},
	FlowLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowLineKeySpecifier | (() => undefined | FlowLineKeySpecifier),
		fields?: FlowLineFieldPolicy,
	},
	FlowNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowNodeKeySpecifier | (() => undefined | FlowNodeKeySpecifier),
		fields?: FlowNodeFieldPolicy,
	},
	FlowNodeAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowNodeAvgAggregateKeySpecifier | (() => undefined | FlowNodeAvgAggregateKeySpecifier),
		fields?: FlowNodeAvgAggregateFieldPolicy,
	},
	FlowNodeCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowNodeCountKeySpecifier | (() => undefined | FlowNodeCountKeySpecifier),
		fields?: FlowNodeCountFieldPolicy,
	},
	FlowNodeCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowNodeCountAggregateKeySpecifier | (() => undefined | FlowNodeCountAggregateKeySpecifier),
		fields?: FlowNodeCountAggregateFieldPolicy,
	},
	FlowNodeGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowNodeGroupByKeySpecifier | (() => undefined | FlowNodeGroupByKeySpecifier),
		fields?: FlowNodeGroupByFieldPolicy,
	},
	FlowNodeMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowNodeMaxAggregateKeySpecifier | (() => undefined | FlowNodeMaxAggregateKeySpecifier),
		fields?: FlowNodeMaxAggregateFieldPolicy,
	},
	FlowNodeMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowNodeMinAggregateKeySpecifier | (() => undefined | FlowNodeMinAggregateKeySpecifier),
		fields?: FlowNodeMinAggregateFieldPolicy,
	},
	FlowNodeSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlowNodeSumAggregateKeySpecifier | (() => undefined | FlowNodeSumAggregateKeySpecifier),
		fields?: FlowNodeSumAggregateFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NodeAudioProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeAudioPropsKeySpecifier | (() => undefined | NodeAudioPropsKeySpecifier),
		fields?: NodeAudioPropsFieldPolicy,
	},
	NodeAudioPropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeAudioPropsAvgAggregateKeySpecifier | (() => undefined | NodeAudioPropsAvgAggregateKeySpecifier),
		fields?: NodeAudioPropsAvgAggregateFieldPolicy,
	},
	NodeAudioPropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeAudioPropsCountAggregateKeySpecifier | (() => undefined | NodeAudioPropsCountAggregateKeySpecifier),
		fields?: NodeAudioPropsCountAggregateFieldPolicy,
	},
	NodeAudioPropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeAudioPropsGroupByKeySpecifier | (() => undefined | NodeAudioPropsGroupByKeySpecifier),
		fields?: NodeAudioPropsGroupByFieldPolicy,
	},
	NodeAudioPropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeAudioPropsMaxAggregateKeySpecifier | (() => undefined | NodeAudioPropsMaxAggregateKeySpecifier),
		fields?: NodeAudioPropsMaxAggregateFieldPolicy,
	},
	NodeAudioPropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeAudioPropsMinAggregateKeySpecifier | (() => undefined | NodeAudioPropsMinAggregateKeySpecifier),
		fields?: NodeAudioPropsMinAggregateFieldPolicy,
	},
	NodeAudioPropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeAudioPropsSumAggregateKeySpecifier | (() => undefined | NodeAudioPropsSumAggregateKeySpecifier),
		fields?: NodeAudioPropsSumAggregateFieldPolicy,
	},
	NodeCountdownProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeCountdownPropsKeySpecifier | (() => undefined | NodeCountdownPropsKeySpecifier),
		fields?: NodeCountdownPropsFieldPolicy,
	},
	NodeCountdownPropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeCountdownPropsAvgAggregateKeySpecifier | (() => undefined | NodeCountdownPropsAvgAggregateKeySpecifier),
		fields?: NodeCountdownPropsAvgAggregateFieldPolicy,
	},
	NodeCountdownPropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeCountdownPropsCountAggregateKeySpecifier | (() => undefined | NodeCountdownPropsCountAggregateKeySpecifier),
		fields?: NodeCountdownPropsCountAggregateFieldPolicy,
	},
	NodeCountdownPropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeCountdownPropsGroupByKeySpecifier | (() => undefined | NodeCountdownPropsGroupByKeySpecifier),
		fields?: NodeCountdownPropsGroupByFieldPolicy,
	},
	NodeCountdownPropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeCountdownPropsMaxAggregateKeySpecifier | (() => undefined | NodeCountdownPropsMaxAggregateKeySpecifier),
		fields?: NodeCountdownPropsMaxAggregateFieldPolicy,
	},
	NodeCountdownPropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeCountdownPropsMinAggregateKeySpecifier | (() => undefined | NodeCountdownPropsMinAggregateKeySpecifier),
		fields?: NodeCountdownPropsMinAggregateFieldPolicy,
	},
	NodeCountdownPropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeCountdownPropsSumAggregateKeySpecifier | (() => undefined | NodeCountdownPropsSumAggregateKeySpecifier),
		fields?: NodeCountdownPropsSumAggregateFieldPolicy,
	},
	NodeFileProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeFilePropsKeySpecifier | (() => undefined | NodeFilePropsKeySpecifier),
		fields?: NodeFilePropsFieldPolicy,
	},
	NodeFilePropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeFilePropsAvgAggregateKeySpecifier | (() => undefined | NodeFilePropsAvgAggregateKeySpecifier),
		fields?: NodeFilePropsAvgAggregateFieldPolicy,
	},
	NodeFilePropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeFilePropsCountAggregateKeySpecifier | (() => undefined | NodeFilePropsCountAggregateKeySpecifier),
		fields?: NodeFilePropsCountAggregateFieldPolicy,
	},
	NodeFilePropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeFilePropsGroupByKeySpecifier | (() => undefined | NodeFilePropsGroupByKeySpecifier),
		fields?: NodeFilePropsGroupByFieldPolicy,
	},
	NodeFilePropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeFilePropsMaxAggregateKeySpecifier | (() => undefined | NodeFilePropsMaxAggregateKeySpecifier),
		fields?: NodeFilePropsMaxAggregateFieldPolicy,
	},
	NodeFilePropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeFilePropsMinAggregateKeySpecifier | (() => undefined | NodeFilePropsMinAggregateKeySpecifier),
		fields?: NodeFilePropsMinAggregateFieldPolicy,
	},
	NodeFilePropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeFilePropsSumAggregateKeySpecifier | (() => undefined | NodeFilePropsSumAggregateKeySpecifier),
		fields?: NodeFilePropsSumAggregateFieldPolicy,
	},
	NodeImageProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeImagePropsKeySpecifier | (() => undefined | NodeImagePropsKeySpecifier),
		fields?: NodeImagePropsFieldPolicy,
	},
	NodeImagePropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeImagePropsAvgAggregateKeySpecifier | (() => undefined | NodeImagePropsAvgAggregateKeySpecifier),
		fields?: NodeImagePropsAvgAggregateFieldPolicy,
	},
	NodeImagePropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeImagePropsCountAggregateKeySpecifier | (() => undefined | NodeImagePropsCountAggregateKeySpecifier),
		fields?: NodeImagePropsCountAggregateFieldPolicy,
	},
	NodeImagePropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeImagePropsGroupByKeySpecifier | (() => undefined | NodeImagePropsGroupByKeySpecifier),
		fields?: NodeImagePropsGroupByFieldPolicy,
	},
	NodeImagePropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeImagePropsMaxAggregateKeySpecifier | (() => undefined | NodeImagePropsMaxAggregateKeySpecifier),
		fields?: NodeImagePropsMaxAggregateFieldPolicy,
	},
	NodeImagePropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeImagePropsMinAggregateKeySpecifier | (() => undefined | NodeImagePropsMinAggregateKeySpecifier),
		fields?: NodeImagePropsMinAggregateFieldPolicy,
	},
	NodeImagePropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeImagePropsSumAggregateKeySpecifier | (() => undefined | NodeImagePropsSumAggregateKeySpecifier),
		fields?: NodeImagePropsSumAggregateFieldPolicy,
	},
	NodeInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeInfoKeySpecifier | (() => undefined | NodeInfoKeySpecifier),
		fields?: NodeInfoFieldPolicy,
	},
	NodeInfoAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeInfoAvgAggregateKeySpecifier | (() => undefined | NodeInfoAvgAggregateKeySpecifier),
		fields?: NodeInfoAvgAggregateFieldPolicy,
	},
	NodeInfoCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeInfoCountAggregateKeySpecifier | (() => undefined | NodeInfoCountAggregateKeySpecifier),
		fields?: NodeInfoCountAggregateFieldPolicy,
	},
	NodeInfoGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeInfoGroupByKeySpecifier | (() => undefined | NodeInfoGroupByKeySpecifier),
		fields?: NodeInfoGroupByFieldPolicy,
	},
	NodeInfoMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeInfoMaxAggregateKeySpecifier | (() => undefined | NodeInfoMaxAggregateKeySpecifier),
		fields?: NodeInfoMaxAggregateFieldPolicy,
	},
	NodeInfoMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeInfoMinAggregateKeySpecifier | (() => undefined | NodeInfoMinAggregateKeySpecifier),
		fields?: NodeInfoMinAggregateFieldPolicy,
	},
	NodeInfoSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeInfoSumAggregateKeySpecifier | (() => undefined | NodeInfoSumAggregateKeySpecifier),
		fields?: NodeInfoSumAggregateFieldPolicy,
	},
	NodeLinkProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeLinkPropsKeySpecifier | (() => undefined | NodeLinkPropsKeySpecifier),
		fields?: NodeLinkPropsFieldPolicy,
	},
	NodeLinkPropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeLinkPropsAvgAggregateKeySpecifier | (() => undefined | NodeLinkPropsAvgAggregateKeySpecifier),
		fields?: NodeLinkPropsAvgAggregateFieldPolicy,
	},
	NodeLinkPropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeLinkPropsCountAggregateKeySpecifier | (() => undefined | NodeLinkPropsCountAggregateKeySpecifier),
		fields?: NodeLinkPropsCountAggregateFieldPolicy,
	},
	NodeLinkPropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeLinkPropsGroupByKeySpecifier | (() => undefined | NodeLinkPropsGroupByKeySpecifier),
		fields?: NodeLinkPropsGroupByFieldPolicy,
	},
	NodeLinkPropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeLinkPropsMaxAggregateKeySpecifier | (() => undefined | NodeLinkPropsMaxAggregateKeySpecifier),
		fields?: NodeLinkPropsMaxAggregateFieldPolicy,
	},
	NodeLinkPropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeLinkPropsMinAggregateKeySpecifier | (() => undefined | NodeLinkPropsMinAggregateKeySpecifier),
		fields?: NodeLinkPropsMinAggregateFieldPolicy,
	},
	NodeLinkPropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeLinkPropsSumAggregateKeySpecifier | (() => undefined | NodeLinkPropsSumAggregateKeySpecifier),
		fields?: NodeLinkPropsSumAggregateFieldPolicy,
	},
	NodeProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodePropsKeySpecifier | (() => undefined | NodePropsKeySpecifier),
		fields?: NodePropsFieldPolicy,
	},
	NodePropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodePropsAvgAggregateKeySpecifier | (() => undefined | NodePropsAvgAggregateKeySpecifier),
		fields?: NodePropsAvgAggregateFieldPolicy,
	},
	NodePropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodePropsCountAggregateKeySpecifier | (() => undefined | NodePropsCountAggregateKeySpecifier),
		fields?: NodePropsCountAggregateFieldPolicy,
	},
	NodePropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodePropsGroupByKeySpecifier | (() => undefined | NodePropsGroupByKeySpecifier),
		fields?: NodePropsGroupByFieldPolicy,
	},
	NodePropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodePropsMaxAggregateKeySpecifier | (() => undefined | NodePropsMaxAggregateKeySpecifier),
		fields?: NodePropsMaxAggregateFieldPolicy,
	},
	NodePropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodePropsMinAggregateKeySpecifier | (() => undefined | NodePropsMinAggregateKeySpecifier),
		fields?: NodePropsMinAggregateFieldPolicy,
	},
	NodePropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodePropsSumAggregateKeySpecifier | (() => undefined | NodePropsSumAggregateKeySpecifier),
		fields?: NodePropsSumAggregateFieldPolicy,
	},
	NodeSwitchOptionProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchOptionPropsKeySpecifier | (() => undefined | NodeSwitchOptionPropsKeySpecifier),
		fields?: NodeSwitchOptionPropsFieldPolicy,
	},
	NodeSwitchOptionPropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchOptionPropsAvgAggregateKeySpecifier | (() => undefined | NodeSwitchOptionPropsAvgAggregateKeySpecifier),
		fields?: NodeSwitchOptionPropsAvgAggregateFieldPolicy,
	},
	NodeSwitchOptionPropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchOptionPropsCountAggregateKeySpecifier | (() => undefined | NodeSwitchOptionPropsCountAggregateKeySpecifier),
		fields?: NodeSwitchOptionPropsCountAggregateFieldPolicy,
	},
	NodeSwitchOptionPropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchOptionPropsGroupByKeySpecifier | (() => undefined | NodeSwitchOptionPropsGroupByKeySpecifier),
		fields?: NodeSwitchOptionPropsGroupByFieldPolicy,
	},
	NodeSwitchOptionPropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchOptionPropsMaxAggregateKeySpecifier | (() => undefined | NodeSwitchOptionPropsMaxAggregateKeySpecifier),
		fields?: NodeSwitchOptionPropsMaxAggregateFieldPolicy,
	},
	NodeSwitchOptionPropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchOptionPropsMinAggregateKeySpecifier | (() => undefined | NodeSwitchOptionPropsMinAggregateKeySpecifier),
		fields?: NodeSwitchOptionPropsMinAggregateFieldPolicy,
	},
	NodeSwitchOptionPropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchOptionPropsSumAggregateKeySpecifier | (() => undefined | NodeSwitchOptionPropsSumAggregateKeySpecifier),
		fields?: NodeSwitchOptionPropsSumAggregateFieldPolicy,
	},
	NodeSwitchProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchPropsKeySpecifier | (() => undefined | NodeSwitchPropsKeySpecifier),
		fields?: NodeSwitchPropsFieldPolicy,
	},
	NodeSwitchPropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchPropsAvgAggregateKeySpecifier | (() => undefined | NodeSwitchPropsAvgAggregateKeySpecifier),
		fields?: NodeSwitchPropsAvgAggregateFieldPolicy,
	},
	NodeSwitchPropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchPropsCountAggregateKeySpecifier | (() => undefined | NodeSwitchPropsCountAggregateKeySpecifier),
		fields?: NodeSwitchPropsCountAggregateFieldPolicy,
	},
	NodeSwitchPropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchPropsGroupByKeySpecifier | (() => undefined | NodeSwitchPropsGroupByKeySpecifier),
		fields?: NodeSwitchPropsGroupByFieldPolicy,
	},
	NodeSwitchPropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchPropsMaxAggregateKeySpecifier | (() => undefined | NodeSwitchPropsMaxAggregateKeySpecifier),
		fields?: NodeSwitchPropsMaxAggregateFieldPolicy,
	},
	NodeSwitchPropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchPropsMinAggregateKeySpecifier | (() => undefined | NodeSwitchPropsMinAggregateKeySpecifier),
		fields?: NodeSwitchPropsMinAggregateFieldPolicy,
	},
	NodeSwitchPropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSwitchPropsSumAggregateKeySpecifier | (() => undefined | NodeSwitchPropsSumAggregateKeySpecifier),
		fields?: NodeSwitchPropsSumAggregateFieldPolicy,
	},
	NodeTextProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeTextPropsKeySpecifier | (() => undefined | NodeTextPropsKeySpecifier),
		fields?: NodeTextPropsFieldPolicy,
	},
	NodeTextPropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeTextPropsAvgAggregateKeySpecifier | (() => undefined | NodeTextPropsAvgAggregateKeySpecifier),
		fields?: NodeTextPropsAvgAggregateFieldPolicy,
	},
	NodeTextPropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeTextPropsCountAggregateKeySpecifier | (() => undefined | NodeTextPropsCountAggregateKeySpecifier),
		fields?: NodeTextPropsCountAggregateFieldPolicy,
	},
	NodeTextPropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeTextPropsGroupByKeySpecifier | (() => undefined | NodeTextPropsGroupByKeySpecifier),
		fields?: NodeTextPropsGroupByFieldPolicy,
	},
	NodeTextPropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeTextPropsMaxAggregateKeySpecifier | (() => undefined | NodeTextPropsMaxAggregateKeySpecifier),
		fields?: NodeTextPropsMaxAggregateFieldPolicy,
	},
	NodeTextPropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeTextPropsMinAggregateKeySpecifier | (() => undefined | NodeTextPropsMinAggregateKeySpecifier),
		fields?: NodeTextPropsMinAggregateFieldPolicy,
	},
	NodeTextPropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeTextPropsSumAggregateKeySpecifier | (() => undefined | NodeTextPropsSumAggregateKeySpecifier),
		fields?: NodeTextPropsSumAggregateFieldPolicy,
	},
	NodeVideoProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeVideoPropsKeySpecifier | (() => undefined | NodeVideoPropsKeySpecifier),
		fields?: NodeVideoPropsFieldPolicy,
	},
	NodeVideoPropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeVideoPropsAvgAggregateKeySpecifier | (() => undefined | NodeVideoPropsAvgAggregateKeySpecifier),
		fields?: NodeVideoPropsAvgAggregateFieldPolicy,
	},
	NodeVideoPropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeVideoPropsCountAggregateKeySpecifier | (() => undefined | NodeVideoPropsCountAggregateKeySpecifier),
		fields?: NodeVideoPropsCountAggregateFieldPolicy,
	},
	NodeVideoPropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeVideoPropsGroupByKeySpecifier | (() => undefined | NodeVideoPropsGroupByKeySpecifier),
		fields?: NodeVideoPropsGroupByFieldPolicy,
	},
	NodeVideoPropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeVideoPropsMaxAggregateKeySpecifier | (() => undefined | NodeVideoPropsMaxAggregateKeySpecifier),
		fields?: NodeVideoPropsMaxAggregateFieldPolicy,
	},
	NodeVideoPropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeVideoPropsMinAggregateKeySpecifier | (() => undefined | NodeVideoPropsMinAggregateKeySpecifier),
		fields?: NodeVideoPropsMinAggregateFieldPolicy,
	},
	NodeVideoPropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeVideoPropsSumAggregateKeySpecifier | (() => undefined | NodeVideoPropsSumAggregateKeySpecifier),
		fields?: NodeVideoPropsSumAggregateFieldPolicy,
	},
	NodeWaitProps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWaitPropsKeySpecifier | (() => undefined | NodeWaitPropsKeySpecifier),
		fields?: NodeWaitPropsFieldPolicy,
	},
	NodeWaitPropsAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWaitPropsAvgAggregateKeySpecifier | (() => undefined | NodeWaitPropsAvgAggregateKeySpecifier),
		fields?: NodeWaitPropsAvgAggregateFieldPolicy,
	},
	NodeWaitPropsCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWaitPropsCountAggregateKeySpecifier | (() => undefined | NodeWaitPropsCountAggregateKeySpecifier),
		fields?: NodeWaitPropsCountAggregateFieldPolicy,
	},
	NodeWaitPropsGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWaitPropsGroupByKeySpecifier | (() => undefined | NodeWaitPropsGroupByKeySpecifier),
		fields?: NodeWaitPropsGroupByFieldPolicy,
	},
	NodeWaitPropsMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWaitPropsMaxAggregateKeySpecifier | (() => undefined | NodeWaitPropsMaxAggregateKeySpecifier),
		fields?: NodeWaitPropsMaxAggregateFieldPolicy,
	},
	NodeWaitPropsMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWaitPropsMinAggregateKeySpecifier | (() => undefined | NodeWaitPropsMinAggregateKeySpecifier),
		fields?: NodeWaitPropsMinAggregateFieldPolicy,
	},
	NodeWaitPropsSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWaitPropsSumAggregateKeySpecifier | (() => undefined | NodeWaitPropsSumAggregateKeySpecifier),
		fields?: NodeWaitPropsSumAggregateFieldPolicy,
	},
	Port?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PortKeySpecifier | (() => undefined | PortKeySpecifier),
		fields?: PortFieldPolicy,
	},
	PortAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PortAvgAggregateKeySpecifier | (() => undefined | PortAvgAggregateKeySpecifier),
		fields?: PortAvgAggregateFieldPolicy,
	},
	PortCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PortCountKeySpecifier | (() => undefined | PortCountKeySpecifier),
		fields?: PortCountFieldPolicy,
	},
	PortCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PortCountAggregateKeySpecifier | (() => undefined | PortCountAggregateKeySpecifier),
		fields?: PortCountAggregateFieldPolicy,
	},
	PortGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PortGroupByKeySpecifier | (() => undefined | PortGroupByKeySpecifier),
		fields?: PortGroupByFieldPolicy,
	},
	PortMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PortMaxAggregateKeySpecifier | (() => undefined | PortMaxAggregateKeySpecifier),
		fields?: PortMaxAggregateFieldPolicy,
	},
	PortMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PortMinAggregateKeySpecifier | (() => undefined | PortMinAggregateKeySpecifier),
		fields?: PortMinAggregateFieldPolicy,
	},
	PortSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PortSumAggregateKeySpecifier | (() => undefined | PortSumAggregateKeySpecifier),
		fields?: PortSumAggregateFieldPolicy,
	},
	Pos?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PosKeySpecifier | (() => undefined | PosKeySpecifier),
		fields?: PosFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	TemplateNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodeKeySpecifier | (() => undefined | TemplateNodeKeySpecifier),
		fields?: TemplateNodeFieldPolicy,
	},
	TemplateNodeAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodeAvgAggregateKeySpecifier | (() => undefined | TemplateNodeAvgAggregateKeySpecifier),
		fields?: TemplateNodeAvgAggregateFieldPolicy,
	},
	TemplateNodeCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodeCountKeySpecifier | (() => undefined | TemplateNodeCountKeySpecifier),
		fields?: TemplateNodeCountFieldPolicy,
	},
	TemplateNodeCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodeCountAggregateKeySpecifier | (() => undefined | TemplateNodeCountAggregateKeySpecifier),
		fields?: TemplateNodeCountAggregateFieldPolicy,
	},
	TemplateNodeGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodeGroupByKeySpecifier | (() => undefined | TemplateNodeGroupByKeySpecifier),
		fields?: TemplateNodeGroupByFieldPolicy,
	},
	TemplateNodeMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodeMaxAggregateKeySpecifier | (() => undefined | TemplateNodeMaxAggregateKeySpecifier),
		fields?: TemplateNodeMaxAggregateFieldPolicy,
	},
	TemplateNodeMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodeMinAggregateKeySpecifier | (() => undefined | TemplateNodeMinAggregateKeySpecifier),
		fields?: TemplateNodeMinAggregateFieldPolicy,
	},
	TemplateNodeSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodeSumAggregateKeySpecifier | (() => undefined | TemplateNodeSumAggregateKeySpecifier),
		fields?: TemplateNodeSumAggregateFieldPolicy,
	},
	TemplateNodesGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodesGroupKeySpecifier | (() => undefined | TemplateNodesGroupKeySpecifier),
		fields?: TemplateNodesGroupFieldPolicy,
	},
	TemplateNodesGroupAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodesGroupAvgAggregateKeySpecifier | (() => undefined | TemplateNodesGroupAvgAggregateKeySpecifier),
		fields?: TemplateNodesGroupAvgAggregateFieldPolicy,
	},
	TemplateNodesGroupCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodesGroupCountKeySpecifier | (() => undefined | TemplateNodesGroupCountKeySpecifier),
		fields?: TemplateNodesGroupCountFieldPolicy,
	},
	TemplateNodesGroupCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodesGroupCountAggregateKeySpecifier | (() => undefined | TemplateNodesGroupCountAggregateKeySpecifier),
		fields?: TemplateNodesGroupCountAggregateFieldPolicy,
	},
	TemplateNodesGroupGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodesGroupGroupByKeySpecifier | (() => undefined | TemplateNodesGroupGroupByKeySpecifier),
		fields?: TemplateNodesGroupGroupByFieldPolicy,
	},
	TemplateNodesGroupMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodesGroupMaxAggregateKeySpecifier | (() => undefined | TemplateNodesGroupMaxAggregateKeySpecifier),
		fields?: TemplateNodesGroupMaxAggregateFieldPolicy,
	},
	TemplateNodesGroupMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodesGroupMinAggregateKeySpecifier | (() => undefined | TemplateNodesGroupMinAggregateKeySpecifier),
		fields?: TemplateNodesGroupMinAggregateFieldPolicy,
	},
	TemplateNodesGroupSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateNodesGroupSumAggregateKeySpecifier | (() => undefined | TemplateNodesGroupSumAggregateKeySpecifier),
		fields?: TemplateNodesGroupSumAggregateFieldPolicy,
	},
	Zoom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ZoomKeySpecifier | (() => undefined | ZoomKeySpecifier),
		fields?: ZoomFieldPolicy,
	},
	background?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | backgroundKeySpecifier | (() => undefined | backgroundKeySpecifier),
		fields?: backgroundFieldPolicy,
	},
	canvasShape?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | canvasShapeKeySpecifier | (() => undefined | canvasShapeKeySpecifier),
		fields?: canvasShapeFieldPolicy,
	},
	windowConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | windowConfigKeySpecifier | (() => undefined | windowConfigKeySpecifier),
		fields?: windowConfigFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;