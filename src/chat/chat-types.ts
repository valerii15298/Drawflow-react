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

export interface IBotNodeData extends IMessage {
  flowNodeId: number;
  executed: boolean;
  renderable: boolean;
}

export interface chatState {
  messages: Array<IMessage | IBotNodeData>;
  recording: MediaStreamConstraints | null;
  recordButtonIsAudio: boolean;
  showEmojiPicker: boolean;
  currentMessageValue: IMessage;
}

export const getDefaultCurrentMessageValue: () => IMessage = () => ({
  type: userMessageType.Text,
  src: "",
  direction: msgDirection.Out,
});

export const getDefaultBotNodeData = (): IBotNodeData => ({
  flowNodeId: 0,
  executed: false,
  type: botNodeType.Empty,
  direction: msgDirection.In,
  src: "",
  renderable: false,
});
