import { useAppSelector } from "../../redux/hooks";
import { selectActiveDrawflow } from "../../redux/drawflowSlice";
import { NodeSettingsContext, Settings } from "./Settings";

export const NodeSettings = ({ id }: { id: number }) => {
  const json = useAppSelector((s) => selectActiveDrawflow(s).drawflow[id].data);
  // console.log(json);
  return (
    <NodeSettingsContext.Provider value={{ type: "node" }}>
      <Settings json={json} />
    </NodeSettingsContext.Provider>
  );
};
