export const MessageImagePreview = ({ src }: { src: string }) => {
  if (!src) return null;
  return (
    <div className="mediaPreviewContainer">
      <img src={src} alt={"Selected by user"} />
    </div>
  );
};
