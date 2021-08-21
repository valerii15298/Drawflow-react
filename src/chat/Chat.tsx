import produce from "immer";
import lodash from "lodash";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { shallowEqual } from "react-redux";
import { selectActiveDrawflow } from "../redux/drawflowSlice";
import { Flow } from "../redux/Flow";
import { useAppSelector } from "../redux/hooks";
import Node from "../redux/Node";
import { ObjectKeys, RecursivePartial } from "../types";
import { BotNode, mapBotTypeToClass } from "./BotNode";
import {
  botNodeType,
  chatState,
  IMessage,
  msgDirection,
  userMessageType,
} from "./chat-types";
import { ChatApp } from "./ChatApp";
import("./nodeTypes/Wait");

const getDefaultCurrentMessageValue: () => IMessage = () => ({
  type: userMessageType.Text,
  src: "",
  direction: msgDirection.Out,
});
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

  setState: (state: chatState, payload: RecursivePartial<chatState>) => {
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
  appendMessageNode: (state: chatState, botNode: BotNode) => {
    state.messages.push(botNode);
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
});

enum StackNodeItemStatus {
  Started = "started",
  Finished = "finished",
  Aborted = "aborted",
}

interface IStackNodeItem {
  messageId?: number;
  status: StackNodeItemStatus;
}

export const handleNode = async (
  node: Node,
  state: chatState,
  actions: ActionType
) => {
  return null;
};
/* type one different Bot display node types
 *  one from templates which can can be displayed,
 *  for example web link or text etc...
 *
 * IMessage incorrect, because there can be another data(for example from flow node data)
 */

const RenderBotNode = (msg: IMessage) => {
  // Also we cann access state and actions via context if we want from useChat TODO
  const { type, src } = msg;
  const flowState = useAppSelector(selectActiveDrawflow);
  const flow = new Flow(flowState);
  return null;
};

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
  const selectId = useAppSelector(
    (s) => selectActiveDrawflow(s).select?.selectId
  );
  const flowState = useAppSelector(selectActiveDrawflow);
  // console.log({ selectId });

  useEffect(() => {
    if (!selectId) return;
    const flow = new Flow(flowState);
    const node = flow.getNode(selectId);
    const type = node.nodeState.data.node_object_lists.type as botNodeType;
    // console.log(mapBotTypeToClass);
    const classOf = mapBotTypeToClass[type];
    // console.log(classOf);
    const botNode = new classOf(node, actions);
    botNode.execute(state).then();
  }, [selectId]);
  // const stackOfNodesRef = useRef<IStackNodeItem[]>([]);
  return (
    <ChatBotContext.Provider
      value={{
        state,
        actions,
      }}
    >
      <ChatApp />
    </ChatBotContext.Provider>
  );
};
