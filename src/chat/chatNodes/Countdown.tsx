import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { usePushNextNode } from "../BotNode";
import { useChatBotContext } from "../Chat";
import { IChatNodeData } from "../chat-types";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

interface Props extends IChatNodeData {
  duration: number;
}

const NodeCountdown = (props: Props) => {
  const { id, flowNodeId, executed, running, duration } = props;
  const { actions } = useChatBotContext();

  const pushNextNode = usePushNextNode(flowNodeId);

  useEffect(() => {
    if (executed || running) return;
    actions.setState({ messages: { [id]: { running: true } } });
  }, [actions, executed, flowNodeId, pushNextNode, id, running]);

  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
      onComplete={() => {
        actions.setState({
          messages: {
            [id]: {
              running: false,
              executed: true,
            },
          },
        });
        pushNextNode();
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

mapChatNodeTypeToComponent[chatNodeType.Countdown] = NodeCountdown;
