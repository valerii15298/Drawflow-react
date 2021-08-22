import { htmlToText } from "html-to-text";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

export const NodeText = ({ src }: { src: string; file?: File }) => {
  return <div>{htmlToText(src)}</div>;
};

mapChatNodeTypeToComponent[chatNodeType.Text] = NodeText;
