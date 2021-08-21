import { userMessageType } from "./chat-types";
import { MessageAudio } from "./MessageAudio";
import { MessageFile } from "./MessageFile";
import { MessageImage } from "./MessageImage";
import { MessageText } from "./MessageText";
import { MessageVideo } from "./MessageVideo";

export const messagesMap = {
  [userMessageType.Text]: MessageText,
  [userMessageType.Audio]: MessageAudio,
  [userMessageType.Video]: MessageVideo,
  [userMessageType.Image]: MessageImage,
  [userMessageType.File]: MessageFile,
};
