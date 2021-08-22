import produce from "immer";
import lodash from "lodash";
import { createContext, useContext, useMemo, useReducer } from "react";
import { selectActiveDrawflow } from "../redux/drawflowSlice";
import { Flow } from "../redux/Flow";
import { useAppSelector } from "../redux/hooks";
import { ObjectKeys, RecursivePartial } from "../types";
import {
  chatState,
  getDefaultBotNodeData,
  getDefaultCurrentMessageValue,
  IChatNodeDataPreview,
  msgDirection,
} from "./chat-types";
import { ChatApp } from "./ChatApp";
import { chatNodeType } from "./chatNodes/chatNodeType";

const initialState: chatState = {
  recording: null,
  messages: [],
  recordButtonIsAudio: true,
  showEmojiPicker: false,
  currentMessageValue: getDefaultCurrentMessageValue(),
};
export const reactions = {
  toggleEmojiPicker: (state: chatState) => {
    state.showEmojiPicker = !state.showEmojiPicker;
  },

  recordingEnded: (state: chatState) => {
    state.recording = null;
  },

  setState: (
    state: chatState,
    payload: RecursivePartial<chatState> | ((state: chatState) => void)
  ) => {
    if (typeof payload === "function") {
      return payload(state);
    }
    return lodash.merge(state, payload);
  },

  recordingStarted: (state: chatState, options: MediaStreamConstraints) => {
    state.recording = options;
    const type = options.video ? chatNodeType.Video : chatNodeType.Audio;
    state.currentMessageValue = {
      ...state.currentMessageValue,
      type,
      src: "",
      direction: msgDirection.Out,
    };
  },

  cleanCurrentMessage: (state: chatState) => {
    state.recording = null;
    state.currentMessageValue = getDefaultCurrentMessageValue();
  },

  // handle file, and chose maybe different type
  fileChosen: (state: chatState, file: File) => {
    const url = URL.createObjectURL(file);
    state.currentMessageValue = {
      renderable: true,
      src: url,
      type: chatNodeType.File,
      direction: msgDirection.Out,
    };
    state.currentMessageValue.file = file;
    const { type } = file;
    if (type.includes(chatNodeType.Image)) {
      state.currentMessageValue.type = chatNodeType.Image;
    }
    if (type.includes(chatNodeType.Video)) {
      state.currentMessageValue.type = chatNodeType.Video;
    }
    console.log(`File chosen:`, file);
  },

  // send current message value, clear current
  sendMessage: (state: chatState) => {
    const id = Object.keys(state.messages).length + 1;
    state.messages[id] = {
      ...state.currentMessageValue,
      id,
      executed: true,
    };
    state.currentMessageValue = getDefaultCurrentMessageValue();
  },
  appendMessageNode: (state: chatState, botNodeData: IChatNodeDataPreview) => {
    const id = Object.keys(state.messages).length + 1;

    state.messages[id] = {
      ...botNodeData,
      id,
      executed: false,
    };
  },
};
export type ActionType = {
  [p in keyof typeof reactions]: (
    // k: Parameters<typeof reactions[p]>[1],
    ...k: Parameters<typeof reactions[p]>[1] extends undefined
      ? [undefined?]
      : [Parameters<typeof reactions[p]>[1]]
  ) => void;
};
export const chatReducer = (
  state: chatState,
  action: { type: keyof typeof reactions; payload: any }
) => {
  // using immer to generate next state
  return produce(state, (draft) =>
    reactions[action.type](draft, action.payload)
  );
};

export const ChatBotContext = createContext({
  state: initialState,
  actions: {} as ActionType,
  flow: null as Flow,
});
export const useChatBotContext = () => useContext(ChatBotContext);
export const Chat = () => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const actions = useMemo(
    () =>
      ObjectKeys(reactions).reduce((acc: ActionType, type) => {
        acc[type] = (payload?: any) => {
          dispatch({
            type,
            payload,
          });
        };
        return acc;
      }, {} as ActionType),
    []
  );
  const flowState = useAppSelector((s) => {
    const { drawflow, connections, ports } = selectActiveDrawflow(s);
    return { drawflow, connections, ports };
  }, lodash.isEqual);
  const flow = useMemo(() => new Flow(flowState), [flowState]);
  const head = flow.heads[0];
  const startBot = () => {
    if (!head) return;
    console.log("Run");
    const defaultBotNodeData = getDefaultBotNodeData();
    defaultBotNodeData.flowNodeId = head.id;
    actions.appendMessageNode(defaultBotNodeData);
  };
  return (
    <ChatBotContext.Provider
      value={{
        state,
        actions,
        flow,
      }}
    >
      <div>
        <button
          onClick={startBot}
          style={{
            position: "absolute",
            zIndex: 100,
            right: 0,
          }}
        >
          Start bot
        </button>
        <ChatApp />
      </div>
    </ChatBotContext.Provider>
  );
};
