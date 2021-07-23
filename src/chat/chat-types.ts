// export type msgType = "text" | "audio" | "video" | "file" | "image";

export enum msgType {
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

export interface IMessage {
  type: msgType;
  src: string;
  meta?: File;
  direction: msgDirection;
}

export interface chatState {
  messages: any[];
  recording: MediaStreamConstraints | null;
  recordButtonIsAudio: boolean;
  currentMessageValue: IMessage;
}
