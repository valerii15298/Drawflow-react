import { useCallback, useEffect } from "react";
import { useChatBotContext } from "./Chat";
import { getDefaultBotNodeData, IChatNodeData } from "./chat-types";
import "./chatNodes";
import { chatNodeType } from "./chatNodes/chatNodeType";
import { mapChatNodeTypeToComponent } from "./MapChatNodeTypeToComponent";

/*
 *
 * TODO available features:
 *  - ability sending nodes between clients instead of plain data,
 *      so we can map data to component node
 *  - Ability for admins chose path in flow, e. g. control flow in real time
 *      saved flows, so admin just can choose from options what to send to user
 *        also there can be lot of config, need to think
 *  - Migrate to redux toolkit
 *
 * */

export const BotNodeMessageComponent = (props: IChatNodeData) => {
  const { flowNodeId } = props;
  const { flow, actions } = useChatBotContext();
  let { type } = props;

  let flowNodeData: any;
  if (flowNodeId) {
    const data = flow.state.drawflow[flowNodeId].data.node_object_lists as {
      type: chatNodeType;
      [propName: string]: any;
    };
    if (!Object.values(chatNodeType).includes(data.type)) {
      throw new Error("Invalid type of node");
    }
    type = data.type as chatNodeType;
    flowNodeData = data;
  }

  useEffect(() => {
    if (flowNodeData) {
      ["executed", "running", "as", "flowNodeId"].forEach((key) => {
        if (key in flowNodeData) {
          throw new Error(
            `Key ${key} is used internally and not allowed in node parameters`
          );
        }
      });
      const newObj = {};
      for (const key in flowNodeData) {
        if (key in props) {
          newObj[key] = flowNodeData[key];
        }
      }
      actions.setState({ messages: { [props.id]: newObj } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // One of components from ./chatNodes
  const NodeComponent = mapChatNodeTypeToComponent[type];

  return <NodeComponent {...props} nodeConfig={flowNodeData} />;
};

export const usePushNextNode = (flowNodeId) => {
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
