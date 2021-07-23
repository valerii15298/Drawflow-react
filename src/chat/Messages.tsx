import {
  Message,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { htmlToText } from "html-to-text";
import { MessageAudio } from "./MessageAudio";
import { MessageVideo } from "./MessageVideo";
import { MessageImage } from "./MessageImage";
import { MessageFile } from "./MessageFile";

export const Messages = ({ messages }: any) => {
  const result: Array<JSX.Element> = [];
  messages.forEach((m: any, i: number) => {
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
      case "text":
        content = <div>{htmlToText(m.src)}</div>;
        break;
      case "audio":
        content = <MessageAudio src={m.src} />;
        break;
      case "video":
        content = <MessageVideo src={m.src} />;
        break;
      case "image":
        content = <MessageImage src={m.src} />;
        break;
      case "file":
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
