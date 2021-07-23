import {
  ChatContainer,
  InputToolbox,
  MainContainer,
  MessageInput,
  MessageList,
  SendButton,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import "emoji-mart/css/emoji-mart.css";
import produce from "immer";
import lodash from "lodash";

import { useMemo, useReducer, useRef, useState } from "react";
import styled from "styled-components";
import useLongPress from "../hooks/useLongPress";
import { startRecordMedia } from "../tools/recordMedia";
import { ObjectKeys, RecursivePartial } from "../types";
import { chatState, IMessage, msgDirection, msgType } from "./chat-types";
import { EmojiPicker } from "./EmojiPicker";
import { MessageAudio } from "./MessageAudio";
import { MessageFile } from "./MessageFile";

import { Messages } from "./Messages";
import { MessageVideoPreview } from "./MessageVideoPreview";
import "./style.scss";

import {
  AttachSvg,
  RecordCamera,
  RecordMicrophone,
  SmileSvg,
  Stop,
  Trash,
} from "./svg-components";
import { WaveJSAudioVisualizer } from "./WaveJSAudioVisualizer";

const getDefaultCurrentMessageValue: () => IMessage = () => ({
  type: msgType.Text,
  src: "",
  direction: msgDirection.Out,
});

const initialState: chatState = {
  recording: null,
  messages: [],
  recordButtonIsAudio: true,
  currentMessageValue: getDefaultCurrentMessageValue(),
};

// {
//   [k: string]: (state: chatState, payload?: any) => chatState | void;
// }

// const getCurrentTime

const reactions = {
  recordingEnded: (state: chatState) => {
    state.recording = null;
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
      direction: msgDirection.Out,
    };
  },

  cleanCurrentMessage: (state: chatState) => {
    state.recording = null;
    state.currentMessageValue = {
      type: msgType.Text,
      src: "",
      direction: msgDirection.Out,
    };
  },

  // handle file, and chose maybe different type
  fileChosen: (state: chatState, file: File) => {
    const url = URL.createObjectURL(file);
    state.currentMessageValue = {
      src: url,
      type: msgType.File,
      direction: msgDirection.Out,
    };
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
    state.messages.push(state.currentMessageValue);
    state.currentMessageValue = getDefaultCurrentMessageValue();
    // console.log(current(state));
  },
};

const chatReducer = (
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

const FileChooserButton = styled.span`
  background: 0;
  border: 0;
  display: grid;
  place-items: center;

  label {
    display: grid;
    place-items: center;

    svg {
      cursor: pointer;
      fill: #0084ff;
      height: 30px;
    }
  }
`;
const FileChooser = ({ setFile }: { setFile: (file: File) => void }) => {
  return (
    <FileChooserButton>
      <label>
        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files?.length) {
              console.error("No files chosen!");
              return;
            }
            const file = e.target.files[0];
            e.target.value = "";
            setFile(file);
          }}
          style={{ display: "none" }}
        />
        <AttachSvg />
      </label>
    </FileChooserButton>
  );
};

const StopButton = styled.div`
  background: 0;
  display: grid;
  place-items: center;
  height: 2em;
  margin-right: 0.5em;

  svg {
    height: 90%;
    cursor: pointer;
  }
`;

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
    [dispatch]
  );

  const { messages, currentMessageValue, recordButtonIsAudio, recording } =
    state;

  const inputRef = useRef();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const streamRef = useRef<MediaStream | null>(null);
  const stopRecordingRef = useRef<(() => void) | null>(null);

  const startRecording = async (options: MediaStreamConstraints) => {
    if (recording) {
      return;
    }
    const setStream = (stream: MediaStream) => (streamRef.current = stream);
    // const setUrl = (url: string) => setState({cu})
    const stopRecording = await startRecordMedia(
      (url) => {
        actions.setState({ currentMessageValue: { src: url } });
        console.log({ url });
      },
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
    console.log(state);
  };

  const switchRecordButtonType = () =>
    !recording &&
    actions.setState({ recordButtonIsAudio: !recordButtonIsAudio });

  const longPressAudioEvent = useLongPress(
    () => startRecording({ audio: true }),
    undefined,
    switchRecordButtonType
  );

  const longPressVideoEvent = useLongPress(
    () =>
      startRecording({
        audio: true,
        video: true,
      }),
    undefined,
    switchRecordButtonType
  );

  const smileButton = currentMessageValue.type === msgType.Text && (
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
      className={"recordMicrophone" + (recording?.audio ? " active" : "")}
    >
      <RecordMicrophone />
    </button>
  );

  const recordVideoButton = (
    <button {...longPressVideoEvent} className={"recordMicrophone"}>
      <RecordCamera />
    </button>
  );

  const trashButton = currentMessageValue.type !== msgType.Text &&
    currentMessageValue.src && (
      <Trash onClick={actions.cleanCurrentMessage} className="trashButton" />
    );

  const sendButton = currentMessageValue.src !== "" && (
    <SendButton className={"sendButton"} onClick={actions.sendMessage} />
  );

  const fileChooserButton = currentMessageValue.src === "" && !recording && (
    <FileChooser setFile={actions.fileChosen} />
  );

  const recordButton =
    (currentMessageValue.src === "" || recording) &&
    (recordButtonIsAudio ? recordAudioButton : recordVideoButton);

  const stopRecordingButton = recording && (
    <StopButton>
      <Stop onClick={stopRecording} />
    </StopButton>
  );

  const inputToolbox = (
    <div
      //@ts-ignore
      as={InputToolbox}
    >
      {currentMessageValue.type === msgType.Video && (
        <MessageVideoPreview
          stream={streamRef.current}
          src={currentMessageValue.src}
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
          <Messages
            //@ts-ignore
            as={MessageList}
            messages={messages}
          />

          <div
            className="MessageInput"
            // @ts-ignore
            as={MessageInput}
          >
            {trashButton}
            {smileButton}
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
            {stopRecordingButton}
            {recordButton}
          </div>
          {inputToolbox}
        </ChatContainer>
      </MainContainer>
    </div>
  );
};
