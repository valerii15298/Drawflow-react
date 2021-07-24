import { useAppSelector } from "../../redux/hooks";
import { NodeSettingsContext, Settings } from "./Settings";

export const TemplateNodeSettings = ({ id }: { id: number }) => {
  const json = useAppSelector((s) =>
    s.templates.find(({ nodes_id }) => nodes_id === id)
  );
  if (json === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <NodeSettingsContext.Provider value={{ type: "template" }}>
      <Settings json={json} id={id} />
    </NodeSettingsContext.Provider>
  );
};
