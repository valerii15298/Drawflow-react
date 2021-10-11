import {
  Message,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { BotNodeMessageComponent } from "./BotNode";
import { IChatNodes } from "./chat-types";
import { chatNodeType } from "./chatNodes/chatNodeType";

export const Messages = ({ messages }: { messages: IChatNodes }) => {
  const result: Array<JSX.Element> = [];
  Object.entries(messages).forEach(([i, m]) => {
    if (!m.renderable || m.type === chatNodeType.Empty) {
      // console.log(m);
      result.push(<BotNodeMessageComponent {...m} key={i} as={Message} />);
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
          <BotNodeMessageComponent {...m} />
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
