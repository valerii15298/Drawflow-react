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
    if (!videoRef.current) return;
    if (stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.muted = true;
    } else {
      videoRef.current.play();
    }
  }, [videoRef.current]);

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
        className="videoPreview"
        ref={videoRef}
        onClick={handleVideoClick}
        src={src}
      />
    </div>
  );
};
