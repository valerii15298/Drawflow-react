import { IChatNodeData } from "../chat-types";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

interface Props extends IChatNodeData {
  props: {
    text: string;
    image_link: string;
  };
}

export const NodeSwitchOption = (props: Props) => {
  return null;
};

mapChatNodeTypeToComponent[chatNodeType.SwitchOption] = NodeSwitchOption;
