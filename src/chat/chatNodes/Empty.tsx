import { useEffect } from "react";
import { useChatBotContext } from "../Chat";
import { IChatNodeData } from "../chat-types";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

type Props = IChatNodeData;

export const NodeEmpty = (props: Props) => {
  const { actions } = useChatBotContext();

  useEffect(() => {
    actions.setState({
      messages: {
        [props.id]: {
          executed: true,
          renderable: false,
        },
      },
    });
  }, []);
  return null;
};

mapChatNodeTypeToComponent[chatNodeType.Empty] = NodeEmpty;
