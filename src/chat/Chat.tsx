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
  IBotNodeData,
  msgDirection,
  userMessageType,
} from "./chat-types";
import { ChatApp } from "./ChatApp";
import "./nodeTypes/Wait";

export const initialState: chatState = {
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
    const type = options.video ? userMessageType.Video : userMessageType.Audio;
    state.currentMessageValue = {
      type,
      src: "",
      direction: msgDirection.Out,
    };
  },

  cleanCurrentMessage: (state: chatState) => {
    state.recording = null;
    state.currentMessageValue = {
      type: userMessageType.Text,
      src: "",
      direction: msgDirection.Out,
    };
  },

  // handle file, and chose maybe different type
  fileChosen: (state: chatState, file: File) => {
    const url = URL.createObjectURL(file);
    state.currentMessageValue = {
      src: url,
      type: userMessageType.File,
      direction: msgDirection.Out,
    };
    state.currentMessageValue.file = file;
    const { type } = file;
    if (type.includes(userMessageType.Image)) {
      state.currentMessageValue.type = userMessageType.Image;
    }
    if (type.includes(userMessageType.Video)) {
      state.currentMessageValue.type = userMessageType.Video;
    }
    console.log(`File chosen:`, file);
  },

  // send current message value, clear current
  sendMessage: (state: chatState) => {
    state.messages.push(state.currentMessageValue);
    state.currentMessageValue = getDefaultCurrentMessageValue();
    // console.log(current(state));
  },
  appendMessageNode: (state: chatState, botNodeData: IBotNodeData) => {
    state.messages.push(botNodeData);
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

  const flowState = useAppSelector(selectActiveDrawflow);
  const flow = useMemo(() => new Flow(flowState), [flowState.drawflow]);
  // console.log({ selectId, flow });

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
          style={{ position: "absolute", zIndex: 100, right: 0 }}
        >
          Start bot
        </button>
        <ChatApp />
      </div>
    </ChatBotContext.Provider>
  );
};
