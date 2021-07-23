import {
  Message,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { htmlToText } from "html-to-text";
import { IMessage, msgType } from "./chat-types";
import { MessageAudio } from "./MessageAudio";
import { MessageFile } from "./MessageFile";
import { MessageImage } from "./MessageImage";
import { MessageVideo } from "./MessageVideo";

export const Messages = ({ messages }: { messages: IMessage[] }) => {
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
    let content;
    switch (m.type) {
      case msgType.Text:
        content = <div>{htmlToText(m.src)}</div>;
        break;
      case msgType.Audio:
        content = <MessageAudio src={m.src} />;
        break;
      case msgType.Video:
        content = <MessageVideo src={m.src} />;
        break;
      case msgType.Image:
        content = <MessageImage src={m.src} />;
        break;
      case msgType.File:
        content = <MessageFile {...m} />;
        break;
      default:
        content = "Invalid type";
        break;
    }
    result.push(
      <Message
        className={m.type + "_message"}
        model={{ direction: m.direction }}
        key={i}
      >
        <Message.CustomContent>
          {content}
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
