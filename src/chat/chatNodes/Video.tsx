import { useRef } from "react";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

export const NodeVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playPause = () => {
    const video = videoRef.current as HTMLVideoElement;
    if (video.paused) {
      video.play().then();
    } else {
      video.pause();
    }
  };

  return (
    <video
      onClick={playPause}
      className="messageVideo"
      ref={videoRef}
      src={src}
    />
  );
};
mapChatNodeTypeToComponent[chatNodeType.Video] = NodeVideo;
