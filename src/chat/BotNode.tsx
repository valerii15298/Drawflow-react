import { useCallback, useEffect } from "react";
import { useChatBotContext } from "./Chat";
import { getDefaultBotNodeData, IChatNodeData } from "./chat-types";
import "./chatNodes";
import { chatNodeType, executedAfterRender } from "./chatNodes/chatNodeType";
import { mapChatNodeTypeToComponent } from "./MapChatNodeTypeToComponent";

/*
 *
 * TODO available features:
 *  - ability sending nodes between clients instead of plain data,
 *      so we can map data to component node
 *  - Ability for admins chose path in flow, e. g. control flow in real time
 *      saved flows, so admin just can choose from options what to send to user
 *        also there can be lot of config, need to think
 *  - Migrate to redux toolkit(Done)
 *
 * */

export const BotNodeMessageComponent = (props: IChatNodeData) => {
  const { flowNodeId, executed } = props;
  const {
    flow,
    actions,
    state: { id },
  } = useChatBotContext();
  let { type } = props;

  let flowNodeData: any = {};
  if (flowNodeId !== undefined) {
    // TODO fix this
    //flow.state.drawflow[flowNodeId]?.data.node_object_lists
    const data = {
      type: chatNodeType.Empty,
      renderable: false,
    } as {
      type: chatNodeType;
      [propName: string]: any;
    };
    // console.log(data.type);
    if (!Object.values(chatNodeType).includes(data.type)) {
      console.log(data, flowNodeId);
      throw new Error("Invalid type of node");
    }
    type = data.type as chatNodeType;
    flowNodeData = data;
  }

  const pushNextNode = usePushNextNode(flowNodeId);

  useEffect(() => {
    if (!executed && executedAfterRender.includes(type)) {
      // TODO we also can put here stateId but we are omitting it for now
      actions.setState({ messages: { [props.id]: { executed: true } } });
      pushNextNode();
    }

    if (flowNodeData) {
      ["executed", "running", "as", "flowNodeId"].forEach((key) => {
        if (key in flowNodeData) {
          throw new Error(
            `Key ${key} is used internally and not allowed in node parameters`
          );
        }
      });
      actions.setState({ messages: { [props.id]: flowNodeData } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // One of components from ./chatNodes
  const NodeComponent = mapChatNodeTypeToComponent[type];
  // console.log({ NodeComponent });

  return <NodeComponent {...{ ...props, ...flowNodeData }} />;
};

export const usePushNextNode = (flowNodeId: number) => {
  const { actions, flow } = useChatBotContext();

  return useCallback(() => {
    // set active node in flow to see that it is executing TODO
    const currentNode = flow.getNode(flowNodeId);
    const nextNodeId = currentNode.out1[0]?.id;
    if (!nextNodeId) return;
    actions.appendMessageNode({
      ...getDefaultBotNodeData(),
      flowNodeId: nextNodeId,
    });
  }, [actions, flow, flowNodeId]);
};
