import { chatNodeType } from "./chatNodes/chatNodeType";

export enum msgDirection {
  In = "incoming",
  Out = "outgoing",
}

export interface IChatNodeData {
  id: number;
  type: chatNodeType;
  src: string;
  file?: File;
  direction: msgDirection;
  renderable: boolean;

  flowNodeId?: number;
  executed: boolean;
  running?: boolean;
  as?: any;
}

export type IChatNodeDataPreview = Omit<IChatNodeData, "id" | "executed">;

export type IChatNodes = { [id: number]: IChatNodeData };

export interface chatState {
  id: number;
  messages: IChatNodes;
  recording: MediaStreamConstraints | null;
  recordButtonIsAudio: boolean;
  showEmojiPicker: boolean;
  currentMessageValue: IChatNodeDataPreview;
}

export const getDefaultCurrentMessageValue: () => IChatNodeDataPreview =
  () => ({
    type: chatNodeType.Text,
    src: "",
    direction: msgDirection.Out,
    renderable: true,
  });

export const getDefaultBotNodeData = (): IChatNodeDataPreview => ({
  type: chatNodeType.Empty,
  src: "",
  direction: msgDirection.In,
  renderable: false,
  flowNodeId: 0,
});
