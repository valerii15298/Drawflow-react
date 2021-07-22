import { useCallback, useRef, useState } from "react";

const checkMicrophonePermission = () =>
  navigator.permissions
    .query({
      name: "microphone",
    })
    .then((p) => p.state);

const checkCameraPermission = () =>
  navigator.permissions
    .query({
      name: "camera",
    })
    .then((p) => p.state);

const destroyMediaStream = (stream: MediaStream) =>
  stream.getTracks().forEach((track) => track.stop());

const askMicrophoneAccess = async () => {
  const microphonePermissionStatus = await checkMicrophonePermission();

  if (microphonePermissionStatus === "denied") {
    alert("Access to microphone is denied. Please allow access and try again");
  }

  if (microphonePermissionStatus === "prompt") {
    alert("Please allow access to microphone and try again");
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(destroyMediaStream);
  }

  return microphonePermissionStatus === "granted";
};

const askCameraAccess = async () => {
  const cameraPermissionStatus = await checkCameraPermission();

  if (cameraPermissionStatus === "denied") {
    alert(
      "Access to camera is denied. Please allow access to camera and try again"
    );
  }

  if (cameraPermissionStatus === "prompt") {
    alert("Please allow access to camera and try again");
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(destroyMediaStream);
  }
  return cameraPermissionStatus === "granted";
};

const askMicroAndCameraAccess = async () => {
  const cameraPermissionStatus = await checkCameraPermission();
  const microphonePermissionStatus = await checkMicrophonePermission();
  if (
    cameraPermissionStatus === "denied" ||
    microphonePermissionStatus === "denied"
  ) {
    alert(
      "Access to camera or microphone is denied. Please give permissions and try again"
    );
  }

  if (
    cameraPermissionStatus === "prompt" ||
    microphonePermissionStatus === "prompt"
  ) {
    alert("Please allow access to camera and microphone and try again");
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(destroyMediaStream);
  }
  return (
    cameraPermissionStatus === "granted" &&
    microphonePermissionStatus === "granted"
  );
};

/*
If permissions needed to start recording are given, then starts recording and returns function to stop recording.
Else returns null, asks user to give permissions,
 and if user give needed permissions then in next calls will start recording successfully.
* */
export const startRecordMedia = async (
  setUrl: (url: string) => void,
  setStream: (stream: MediaStream) => void,
  options: MediaStreamConstraints = { audio: true }
) => {
  // check permissions
  if (options.audio && options.video && !(await askMicroAndCameraAccess())) {
    return null;
  }
  if (options.audio && !(await askMicrophoneAccess())) {
    return null;
  }
  if (options.video && !(await askCameraAccess())) {
    return null;
  }

  const chunks: Blob[] = [];
  const stream = await navigator.mediaDevices.getUserMedia(options);
  setStream(stream);
  const recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    chunks.push(e.data);
  };
  recorder.onstop = () => {
    const blob = new Blob(chunks, {
      type: options.video ? "video/webm" : "audio/ogg; codecs=opus",
    });
    // setBlob(blob)
    chunks.splice(0, chunks.length);
    const url = window.URL.createObjectURL(blob);
    setUrl(url);
  };

  recorder.start();
  return () => {
    recorder.stop();
    destroyMediaStream(recorder.stream);
  };
};

const useRecorder = () => {
  const recorderRef = useRef<Promise<MediaRecorder> | null>(null);

  const optionsRef = useRef<MediaStreamConstraints>({ audio: true });
  const [stream, setStream] = useState<null | MediaStream>(null);
  // const [blob, setBlob] = useState<null | Blob>(null);
  const [url, setUrl] = useState<string | null>(null);

  const initializeRecorder = useCallback(async () => {
    const chunks: Blob[] = [];
    const stream = await navigator.mediaDevices.getUserMedia(
      optionsRef.current
    );
    setStream(stream);
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunks, {
        type: optionsRef.current.video
          ? "video/webm"
          : "audio/ogg; codecs=opus",
      });
      // setBlob(blob)
      chunks.splice(0, chunks.length);
      const url = window.URL.createObjectURL(blob);
      setUrl(url);
    };
    console.log("Init");
    return recorder;
  }, []);

  const startRecording = () => {
    if (recorderRef.current) {
      const msg = "Already started, stop recording before start new one!";
      // throw new Error(msg);
      return console.error(msg);
    }
    recorderRef.current = initializeRecorder();
    recorderRef.current.then((recorder) => recorder.start());
  };

  const stopRecording = () => {
    if (!recorderRef.current) {
      const msg = "Already stopped!";
      // throw new Error(msg);
      return console.error(msg);
    }
    setStream(null);
    setUrl(null);
    recorderRef.current.then((recorder) => {
      recorder.stop();
      recorder.stream.getTracks().forEach((track) => track.stop());
    });
    recorderRef.current = null;
  };
  const isRecording = !!recorderRef.current;

  return {
    isRecording,
    url,
    stream,
    startRecording,
    stopRecording,
  };
};
