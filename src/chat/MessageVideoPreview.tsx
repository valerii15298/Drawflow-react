import { MouseEvent, useEffect, useRef } from "react";

export const MessageVideoPreview = ({
  src,
  stream,
}: {
  src?: string;
  stream: MediaStream | null;
}) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.muted = true;
      console.log("srcObject set");
    } else if (src) {
      videoRef.current.srcObject = null;
      videoRef.current.src = src;
      videoRef.current.muted = false;
      videoRef.current.play();
    } else {
      console.error("Empty params");
    }
  }, [src, stream]);

  const handleVideoClick = (e: MouseEvent) => {
    const target = e.target as HTMLVideoElement;
    if (target.paused) {
      target.play().then();
    } else {
      target.pause();
    }
  };

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
