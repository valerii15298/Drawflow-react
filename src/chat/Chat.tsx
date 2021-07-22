import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./style.scss";
import {
  Avatar,
  ChatContainer,
  ConversationHeader,
  InputToolbox,
  MainContainer,
  MessageInput,
  MessageList,
  SendButton,
} from "@chatscope/chat-ui-kit-react";

import { useMemo, useReducer, useRef, useState } from "react";

import "emoji-mart/css/emoji-mart.css";

import {
  Attach,
  RecordCamera,
  RecordMicrophone,
  SmileSvg,
  Stop,
  Trash,
} from "./svg-components";

import { Messages } from "./Messages";
import useLongPress from "../hooks/useLongPress";
import { WaveJSAudioVisualizer } from "./WaveJSAudioVisualizer";
import { EmojiPicker } from "./EmojiPicker";
import { msgType } from "./chat-types";
import { startRecordMedia } from "../tools/recordMedia";
import produce from "immer";
import { ObjectKeys, RecursivePartial } from "../types";
import lodash from "lodash";
import { MessageVideoPreview } from "./MessageVideoPreview";
import { MessageFile } from "./MessageFile";
import { current } from "@reduxjs/toolkit";
import { MessageAudio } from "./MessageAudio";

const zoeIco =
  "https://chatscope.io/storybook/react/static/media/akane.b135c3e3.svg";

interface chatState {
  messages: any[];
  recording: MediaStreamConstraints;
  recordButtonIsAudio: boolean;
  currentMessageValue: {
    type: msgType;
    src: string;
    meta?: File;
  };
}

const initialState: chatState = {
  recording: {},
  messages: [],
  recordButtonIsAudio: true,
  currentMessageValue: {
    type: msgType.Text,
    src: "",
  },
};

// {
//   [k: string]: (state: chatState, payload?: any) => chatState | void;
// }

const reactions = {
  recordingEnded: (state: chatState) => {
    state.recording = {};
  },

  setState: (state: chatState, payload: RecursivePartial<chatState>) => {
    return lodash.merge(state, payload);
  },
  recordingStarted: (state: chatState, options: MediaStreamConstraints) => {
    state.recording = options;
    const type = options.video ? msgType.Video : msgType.Audio;
    state.currentMessageValue = {
      type,
      src: "",
    };
  },

  cleanCurrentMessage: (state: chatState) => {
    state.recording = {};
    state.currentMessageValue = {
      type: msgType.Text,
      src: "",
    };
  },

  // handle file, and chose maybe different type
  fileChosen: (state: chatState, file: File) => {
    const url = URL.createObjectURL(file);
    state.currentMessageValue = { src: url, type: msgType.File };
    state.currentMessageValue.meta = file;
    const { type } = file;
    if (type.includes(msgType.Image)) {
      state.currentMessageValue.type = msgType.Image;
    }
    if (type.includes(msgType.Video)) {
      state.currentMessageValue.type = msgType.Video;
    }
    console.log(`File chosen:`, file);
  },

  // send current message value, clear current
  sendMessage: (state: chatState) => {
    console.log(current(state));
  },
};

const reducer = (
  state: chatState,
  action: { type: keyof typeof reactions; payload: any }
) => {
  // using immer to generate next state
  return produce(state, (draft) =>
    reactions[action.type](draft, action.payload)
  );
};

const MessageImagePreview = ({ src }: { src: string }) => {
  if (!src) return null;
  return (
    <div className="mediaPreviewContainer">
      <img src={src} alt={"Selected by user"} />
    </div>
  );
};

type ActionType = {
  [p in keyof typeof reactions]: (
    k: Parameters<typeof reactions[p]>[1]
  ) => void;
};

export const Chat = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useMemo(
    () =>
      ObjectKeys(reactions).reduce((acc: ActionType, type) => {
        acc[type] = (payload?: any) => {
          dispatch({ type, payload });
        };
        return acc;
      }, {} as ActionType),
    [dispatch]
  );

  const { messages, currentMessageValue, recordButtonIsAudio, recording } =
    state;

  const inputRef = useRef();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const streamRef = useRef<MediaStream | null>(null);
  const stopRecordingRef = useRef<(() => void) | null>(null);

  const startRecording = async (options: MediaStreamConstraints) => {
    const setStream = (stream: MediaStream) => (streamRef.current = stream);
    // const setUrl = (url: string) => setState({cu})
    const stopRecording = await startRecordMedia(
      (url) => actions.setState({ currentMessageValue: { src: url } }),
      setStream,
      options
    );
    if (stopRecording) {
      actions.recordingStarted(options);
      stopRecordingRef.current = stopRecording;
    }
  };

  const stopRecording = () => {
    streamRef.current = null;
    stopRecordingRef.current?.();
    actions.recordingEnded(undefined);
  };

  const switchRecordButtonType = () =>
    actions.setState({ recordButtonIsAudio: !recordButtonIsAudio });

  const longPressAudioEvent = useLongPress(
    () => startRecording({ audio: true }),
    undefined,
    switchRecordButtonType
  );

  const longPressVideoEvent = useLongPress(
    () => startRecording({ audio: true, video: true }),
    undefined,
    switchRecordButtonType
  );

  const smileButton = (
    <SmileSvg
      className="smile"
      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
    />
  );

  // if (!messageValue || msgInputValue)
  const messageInput = currentMessageValue?.type === msgType.Text && (
    <MessageInput
      ref={inputRef}
      onChange={(text: string) =>
        actions.setState({
          currentMessageValue: {
            src: text,
          },
        })
      }
      value={currentMessageValue.src}
      sendButton={false}
      attachButton={false}
      onSend={actions.sendMessage}
      placeholder="Type message here..."
    />
  );

  const recordAudioButton = (
    <button
      {...longPressAudioEvent}
      className={"recordMicrophone" + (recording.audio ? " active" : "")}
    >
      <RecordMicrophone />
    </button>
  );

  const recordVideoButton = (
    <button {...longPressVideoEvent} className={"recordMicrophone"}>
      <RecordCamera />
    </button>
  );

  const trashButton = (
    <Trash onClick={actions.cleanCurrentMessage} className="trashButton" />
  );

  // if messageValue && !isRecording
  const sendButton = (
    <SendButton className={"sendButton"} onClick={actions.sendMessage} />
  );

  // if !messageValue &&
  const fileChooserButton = (
    <label>
      <input
        type="file"
        onChange={(e) => {
          if (!e.target.files?.length) {
            console.error("No files chosen!");
            return;
          }
          const file = e.target.files[0];
          actions.fileChosen(file);
        }}
        style={{ display: "none" }}
      />
      <Attach fill="#0084ff" className={"attachButton"} />
    </label>
  );

  //(!messageValue || isRecording) &&
  const recordButton = recordButtonIsAudio
    ? recordAudioButton
    : recordVideoButton;

  const stopRecordingButton = (recording.audio || recording.video) && (
    <Stop onClick={stopRecording} className={"stopButton"} />
  );

  const inputToolbox = (
    <div
      style={{
        margin: "auto",
        alignSelf: "center",
      }}
      //@ts-ignore
      as={InputToolbox}
    >
      {currentMessageValue.type === msgType.Video && (
        <MessageVideoPreview
          stream={streamRef.current}
          src={currentMessageValue.src as string}
        />
      )}

      {currentMessageValue.type === msgType.Image && (
        <MessageImagePreview src={currentMessageValue.src as string} />
      )}

      {showEmojiPicker && (
        <EmojiPicker
          onValue={(emoji) =>
            actions.setState({
              currentMessageValue: {
                src: currentMessageValue.src + emoji,
              },
            })
          }
        />
      )}
    </div>
  );
  return (
    <div className="mainChatContainer">
      <MainContainer responsive>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src={zoeIco} name="Zoe" status="available" />
            <ConversationHeader.Content
              userName="Zoe"
              info="Active 10 mins ago"
            />
          </ConversationHeader>

          <Messages as={MessageList} messages={messages} />

          <div
            className="MessageInput"
            // @ts-ignore
            as={MessageInput}
          >
            {smileButton}
            {trashButton}
            {streamRef.current && (
              <WaveJSAudioVisualizer audioStream={streamRef.current} />
            )}

            {currentMessageValue.type === msgType.Audio &&
              currentMessageValue.src && (
                <MessageAudio src={currentMessageValue.src} />
              )}

            {currentMessageValue.type === msgType.File && (
              <MessageFile
                {...{
                  ...currentMessageValue,
                  meta: currentMessageValue.meta as File,
                  type: undefined,
                }}
              />
            )}

            {messageInput}
            {sendButton}
            {fileChooserButton}
            {recordButton}
            {stopRecordingButton}
          </div>
          {inputToolbox}
        </ChatContainer>
      </MainContainer>
    </div>
  );
};
