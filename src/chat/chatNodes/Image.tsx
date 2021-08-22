import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

export const NodeImage = ({ src }: { src: string }) => {
  return <img className="messageImage" src={src} alt="Message content" />;
};

mapChatNodeTypeToComponent[chatNodeType.Image] = NodeImage;
