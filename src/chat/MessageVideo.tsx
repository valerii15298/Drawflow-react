import { useRef } from "react";

export const MessageVideo = ({ src }: { src: string }) => {
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
