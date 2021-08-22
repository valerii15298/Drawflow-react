import { useEffect } from "react";
import { usePushNextNode } from "../BotNode";
import { useChatBotContext } from "../Chat";
import { IChatNodeData } from "../chat-types";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

const waitNumberOfMilliseconds = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

interface IWaitBotNodeData {
  delay: number;
  type: chatNodeType;
}

interface Props extends IChatNodeData {
  nodeConfig: IWaitBotNodeData;
}

const NodeWait = (props: Props) => {
  const {
    id,
    flowNodeId,
    executed,
    running,
    nodeConfig: { delay },
  } = props;
  const { actions } = useChatBotContext();

  const pushNextNode = usePushNextNode(flowNodeId);

  useEffect(() => {
    if (executed || running) return;
    actions.setState({ messages: { [id]: { running: true } } });
    console.log("Execute");
    const execute = async () => {
      await waitNumberOfMilliseconds(delay);
    };

    execute().then(() => {
      actions.setState({
        messages: {
          [id]: {
            running: false,
            renderable: true,
            executed: true,
          },
        },
      });
      pushNextNode();
    });
  }, [actions, executed, flowNodeId, delay, pushNextNode, id, running]);

  if (!executed) return null;
  return <div>Hello delay: {JSON.stringify(props)}</div>;
};

mapChatNodeTypeToComponent[chatNodeType.Delay] = NodeWait;
