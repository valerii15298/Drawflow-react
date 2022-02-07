import { Autocomplete, TextField } from "@mui/material";
import { setStateAction } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const SelectFlowVersion = () => {
  const allVersions = useAppSelector((s) => Object.keys(s.flows));
  const selectedVersion = useAppSelector((s) => s.version);
  const dispatch = useAppDispatch();

  return (
    <Autocomplete
      getOptionLabel={(n) => n.toString()}
      disablePortal
      size={"small"}
      options={[...allVersions]}
      id="versionNumber"
      sx={{ width: "min-content" }}
      value={selectedVersion.toString()}
      defaultValue={"0"}
      onChange={(ev, value) => {
        dispatch(setStateAction({ version: Number(value) ?? 0 }));
        // dispatch(changeVersion(value as number));
      }}
      renderInput={(params) => {
        return <TextField {...params} label="Version" />;
      }}
    />
  );
};
