import { Avatar, ConversationHeader } from "@chatscope/chat-ui-kit-react";

const zoeIco =
  "https://chatscope.io/storybook/react/static/media/akane.b135c3e3.svg";

export const ChatHeader = () => {
  return (
    <ConversationHeader>
      <Avatar src={zoeIco} name="Zoe" status="available" />
      <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
    </ConversationHeader>
  );
};
