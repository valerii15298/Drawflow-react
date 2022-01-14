import { gql } from "@apollo/client";
import {
  TemplateNodesQuery,
  useTemplateNodesQuery,
} from "../../generated/apollo";
import { apolloClient } from "../../graphql";
import { NodeSettingsContext, Settings } from "./Settings";

export type formType = TemplateNodesQuery["templateNodes"][number];

export const TemplateNodeSettings = ({ id }: { id: number }) => {
  const { data, loading, error } = useTemplateNodesQuery();

  if (loading) return <>Loading...</>;
  if (error) return <>Error...</>;
  const json = data.templateNodes.find((t) => t.id === id);

  return (
    <NodeSettingsContext.Provider value={{ type: "template" }}>
      <Settings json={json} id={id} />
    </NodeSettingsContext.Provider>
  );
};
