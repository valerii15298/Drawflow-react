import {
  Message,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { BotNodeMessageComponent } from "./BotNode";
import { IBotNodeData, IMessage } from "./chat-types";
import { messagesMap } from "./MessagesMap";

export const Messages = ({
  messages,
}: {
  messages: Array<IMessage | IBotNodeData>;
}) => {
  const result: Array<JSX.Element> = [];
  messages.forEach((m, i) => {
    const isBotNode = "flowNodeId" in m;
    const MessageComponent =
      "flowNodeId" in m ? BotNodeMessageComponent : messagesMap[m.type];
    const renderable = !isBotNode || ("renderable" in m && m.renderable);
    if (!renderable) {
      result.push(<MessageComponent {...m} key={i} as={Message} />);
      return;
    }

    const messageSide = (
      <span className="messageSide">
        <span className="sentTime">10:42 PM</span>
        <span className="marks">
          <span>&#10003;</span>
          <span>&#10003;</span>
        </span>
      </span>
    );
    result.push(
      <Message
        className={m.type + "_message"}
        model={{ direction: m.direction }}
        key={i}
      >
        <Message.CustomContent>
          <MessageComponent {...m} />
          {messageSide}
        </Message.CustomContent>
      </Message>
    );
  });
  return (
    <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
      {result.map((a) => a)}
    </MessageList>
  );
};
