import produce from "immer";
import lodash from "lodash";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
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

const getInitialChatState = (): chatState => ({
  id: 0,
  recording: null,
  messages: {},
  recordButtonIsAudio: true,
  showEmojiPicker: false,
  currentMessageValue: getDefaultCurrentMessageValue(),
});

const initialState: chatState = getInitialChatState();

export const reactions = {
  clearChat: (state: chatState) => {
    state.messages = {};
    // return getInitialChatState();
  },

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
    if (payload.id !== undefined && payload.id !== state.id) {
      return;
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
    if (type.includes("image")) {
      state.currentMessageValue.type = chatNodeType.Image;
    }
    if (type.includes("video")) {
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
  console.log("Render Chat");
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
  const activeFlowId = useAppSelector((s) => s.version);
  console.log(activeFlowId);
  useEffect(() => {
    console.log("Clear chat");
    actions.clearChat();
  }, [activeFlowId, actions]);
  const flowState = useAppSelector((s) => {
    const { drawflow, connections, ports } = selectActiveDrawflow(s);
    const purePorts = ObjectKeys(ports).reduce((acc, key) => {
      acc[key] = {
        // @ts-ignore
        ...ports[key],
      };
      delete acc[key].pos;
      return acc;
    }, {} as any);
    const nodes = ObjectKeys(drawflow).reduce((acc, key) => {
      acc[key] = {
        data: drawflow[key].data,
      };
      return acc;
    }, {} as any);
    return {
      drawflow: nodes,
      connections,
      ports: purePorts,
    };
  }, lodash.isEqual);
  const flow = useMemo(() => new Flow(flowState), [flowState]);
  const head = flow.heads[0];

  const [key, setKey] = useState(0);
  const startBot = () => {
    setKey((key) => key + 1);
    console.log(state);
    actions.clearChat();
    if (!head) return;
    console.log("Run");
    const defaultBotNodeData: IChatNodeDataPreview = {
      ...getDefaultBotNodeData(),
      ...head.nodeState.data.node_object_lists,
      flowNodeId: head.id,
    };
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
        <button
          onClick={() => console.log(state)}
          style={{
            position: "absolute",
            zIndex: 100,
            right: 100,
          }}
        >
          state
        </button>

        <ChatApp key={key} />
      </div>
    </ChatBotContext.Provider>
  );
};
