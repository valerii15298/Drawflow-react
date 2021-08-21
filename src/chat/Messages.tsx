import {
  Message,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { BotNode } from "./BotNode";
import { IMessage } from "./chat-types";
import { messagesMap } from "./MessagesMap";

export const Messages = ({
  messages,
}: {
  messages: Array<IMessage | BotNode>;
}) => {
  const result: Array<JSX.Element> = [];
  messages.forEach((m, i) => {
    // console.log(m);
    const messageSide = (
      <span className="messageSide">
        <span className="sentTime">10:42 PM</span>
        <span className="marks">
          <span>&#10003;</span>
          <span>&#10003;</span>
        </span>
      </span>
    );
    const MessageComponent =
      m instanceof BotNode ? m.getComponent() : messagesMap[m.type];
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
