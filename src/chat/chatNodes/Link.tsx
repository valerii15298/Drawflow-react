import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

export const NodeLink = ({ src, text }: { src: string; text: string }) => {
  return <a href={src}>{text}</a>;
};

mapChatNodeTypeToComponent[chatNodeType.Link] = NodeLink;
