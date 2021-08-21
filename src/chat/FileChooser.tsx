import styled from "styled-components";
import { AttachSvg } from "./svg-components";

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
export const FileChooser = ({ setFile }: { setFile: (file: File) => void }) => {
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
