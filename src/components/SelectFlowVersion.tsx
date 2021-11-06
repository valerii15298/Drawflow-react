import { Autocomplete, TextField } from "@mui/material";
import { changeVersion } from "../redux/api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const SelectFlowVersion = () => {
  const countVersions = useAppSelector((s) => s.flows.length);
  const selectedVersion = useAppSelector((s) => s.version);
  const dispatch = useAppDispatch();

  const max = countVersions - 1;
  const options = Array.from({ length: max }, (_, i) => i + 1);
  return (
    <Autocomplete
      getOptionLabel={(n) => n.toString()}
      disablePortal
      size={"small"}
      options={options}
      id="versionNumber"
      sx={{ width: "min-content" }}
      value={selectedVersion}
      onChange={(ev, value) => {
        dispatch(changeVersion(value as number));
      }}
      renderInput={(params) => {
        return <TextField {...params} label="Version" />;
      }}
    />
  );
};