import { BotNode } from "./BotNode";

export enum userMessageType {
  Text = "text",
  Audio = "audio",
  Video = "video",
  File = "file",
  Image = "image",
}

export enum msgDirection {
  In = "incoming",
  Out = "outgoing",
}

export enum botNodeType {
  Empty = "empty",

  Link = "link",
  Switch = "switch", // Choose some option

  // not renderable
  Delay = "delay",
  HttpRequest = "httpRequest",
  AllowUserToSendMessages = "allowUserToSendMessages",
  DisallowUserToSendMessages = "disallowUserToSendMessages",
  ShowTypingIndicator = "showTypingIndicator",
  HideTypingIndicator = "hideTypingIndicator",

  // plus all the same that on user mesage
}

export interface IMessage {
  type: userMessageType | botNodeType;
  src: string;
  file?: File;
  direction: msgDirection;
}

export interface chatState {
  messages: Array<IMessage | BotNode>;
  recording: MediaStreamConstraints | null;
  recordButtonIsAudio: boolean;
  showEmojiPicker: boolean;
  currentMessageValue: IMessage;
}
