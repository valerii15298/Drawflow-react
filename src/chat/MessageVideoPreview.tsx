import { MouseEvent, useEffect, useRef } from "react";

const handleVideoClick = (e: MouseEvent) => {
  const target = e.target as HTMLVideoElement;
  if (target.paused) {
    target.play().then();
  } else {
    target.pause();
  }
};

export const MessageVideoPreview = ({
  src,
  stream,
}: {
  src?: string;
  stream: MediaStream | null;
}) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    const { current: video } = videoRef;
    if (!video) {
      return;
    }
    if (stream) {
      video.srcObject = stream;
      video.muted = true;
      console.log("srcObject set");
    } else if (src) {
      video.srcObject = null;
      video.src = src;
      video.muted = false;
      video.play().then();
    }
  }, [src, stream]);

  return (
    <div className="mediaPreviewContainer">
      <video
        autoPlay
        className="videoPreview"
        ref={videoRef}
        onClick={handleVideoClick}
      />
    </div>
  );
};
