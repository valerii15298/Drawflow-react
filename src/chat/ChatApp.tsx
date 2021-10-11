import {
  ChatContainer,
  ConversationHeader,
  InputToolbox,
  MainContainer,
  MessageInput,
  MessageList,
  SendButton,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import "emoji-mart/css/emoji-mart.css";

import { useRef } from "react";
import useLongPress from "../hooks/useLongPress";
import { startRecordMedia } from "../tools/recordMedia";
import { useChatBotContext } from "./Chat";
import { ChatHeader } from "./ChatHeader";
import { chatNodeType } from "./chatNodes/chatNodeType";
import { EmojiPicker } from "./EmojiPicker";
import { FileChooser } from "./FileChooser";
import { NodeAudio } from "./chatNodes/Audio";
import { NodeFile } from "./chatNodes/File";
import { MessageImagePreview } from "./MessageImagePreview";

import { Messages } from "./Messages";
import { MessageVideoPreview } from "./MessageVideoPreview";
import { StopButton } from "./StopButton";
import "./style.scss";
import {
  RecordCamera,
  RecordMicrophone,
  SmileSvg,
  Trash,
} from "./svg-components";
import { WaveJSAudioVisualizer } from "./WaveJSAudioVisualizer";


export const ChatApp = () => {
  const { state, actions } = useChatBotContext();

  const {
    messages,
    currentMessageValue,
    recordButtonIsAudio,
    recording,
    showEmojiPicker,
  } = state;

  const inputRef = useRef();
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
    actions.recordingEnded();
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

  const showSmileButton = currentMessageValue.type === chatNodeType.Text;

  const smileButton = showSmileButton && (
    <SmileSvg className="smile" onClick={() => actions.toggleEmojiPicker()} />
  );
  // if (!messageValue || msgInputValue)

  const messageInput = currentMessageValue?.type === chatNodeType.Text && (
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

  const trashButton = currentMessageValue.type !== chatNodeType.Text &&
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
    <StopButton onClick={stopRecording} />
  );
  const inputToolbox = (
    <div
      //@ts-ignore
      as={InputToolbox}
    >
      {currentMessageValue.type === chatNodeType.Video && (
        <MessageVideoPreview
          stream={streamRef.current}
          src={currentMessageValue.src}
        />
      )}

      {currentMessageValue.type === chatNodeType.Image && (
        <MessageImagePreview src={currentMessageValue.src as string} />
      )}

      {showEmojiPicker && (
        <EmojiPicker
          onValue={(emoji) =>
            showSmileButton &&
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
          <ChatHeader
            //@ts-ignore
            as={ConversationHeader}
          />
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

            {currentMessageValue.type === chatNodeType.Audio &&
              currentMessageValue.src && (
                <NodeAudio src={currentMessageValue.src} />
              )}

            {currentMessageValue.type === chatNodeType.File && (
              <NodeFile
                {...{
                  ...currentMessageValue,
                  file: currentMessageValue.file as File,
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
