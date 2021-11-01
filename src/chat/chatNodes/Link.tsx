import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";
import Link from "@mui/material/Link";

export const NodeLink = ({ src, text }: { src: string; text: string }) => {
  return <Link href={src}>{text}</Link>;
};

mapChatNodeTypeToComponent[chatNodeType.Link] = NodeLink;
