import { useEffect } from "react";
import { usePushNextNode } from "../BotNode";
import { useChatBotContext } from "../Chat";
import { IChatNodeData } from "../chat-types";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

const waitNumberOfMilliseconds = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

interface Props extends IChatNodeData {
  delay: number;
}

const NodeWait = (props: Props) => {
  const { id, flowNodeId, executed, running, delay } = props;
  const {
    actions,
    state: { id: stateId },
  } = useChatBotContext();

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
        id: stateId,
        messages: {
          [id]: {
            running: false,
            renderable: false,
            executed: true,
          },
        },
      });
      pushNextNode();
    });
  }, []);

  return null;
};

mapChatNodeTypeToComponent[chatNodeType.Delay] = NodeWait;
