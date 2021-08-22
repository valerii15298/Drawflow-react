import { FC, useCallback } from "react";
import { selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector } from "../redux/hooks";
import { useChatBotContext } from "./Chat";
import { getDefaultBotNodeData, IBotNodeData } from "./chat-types";

export const mapBotTypeToComponent: { [p: string]: FC<any> } = {};

export const BotNodeMessageComponent = (props: IBotNodeData) => {
  const { flowNodeId } = props;
  const type = useAppSelector(
    (s) =>
      selectActiveDrawflow(s).drawflow[flowNodeId].data.node_object_lists.type
  ) as string;
  const Component = mapBotTypeToComponent[type];

  return <Component {...props} />;
};

export const usePushNextNode = (flowNodeId) => {
  const { actions, flow } = useChatBotContext();

  return useCallback(() => {
    const currentNode = flow.getNode(flowNodeId);
    const nextNodeId = currentNode.out1[0]?.id;
    if (!nextNodeId) return;
    actions.appendMessageNode({
      ...getDefaultBotNodeData(),
      flowNodeId: nextNodeId,
    });
  }, [actions, flow, flowNodeId]);
};
