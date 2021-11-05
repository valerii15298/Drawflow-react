import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const NodeInput = ({
  inputType,
  label,
}: {
  inputType: string;
  label: string;
}) => {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <div>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
};

mapChatNodeTypeToComponent[chatNodeType.Input] = NodeInput;
