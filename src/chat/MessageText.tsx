import { htmlToText } from "html-to-text";

export const MessageText = ({ src }: { src: string; file?: File }) => {
  return <div>{htmlToText(src)}</div>;
};
