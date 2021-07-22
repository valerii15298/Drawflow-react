import { Picker } from "emoji-mart";

export const EmojiPicker = ({
  onValue,
}: {
  onValue: (emoji: string) => void;
}) => {
  return (
    <Picker
      style={{
        width: "99vw",
        margin: "auto",
        alignSelf: "center",
      }}
      onSelect={(e) => {
        if ("native" in e) {
          onValue(e.native);
        } else {
          console.error("Emoji not supported", e);
        }
      }}
      native
    />
  );
};
