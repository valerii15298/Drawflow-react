import { gql } from "@apollo/client";
import {
  TemplateNodesQuery,
  useTemplateNodesQuery,
} from "../../generated/apollo";
import { apolloClient } from "../../graphql";
import { NodeSettingsContext, Settings } from "./Settings";

const IS_LOGGED_IN = gql`
  query FFF {
    queryTemplateNode(filter: { id: ["0x273e"] }) {
      id
      info {
        name
      }
    }
  }
`;

console.log(
  apolloClient.readQuery({
    query: IS_LOGGED_IN,
  })
);

export type formType = TemplateNodesQuery["queryTemplateNode"][number];

export const TemplateNodeSettings = ({ id }: { id: string }) => {
  const { data, loading, error } = useTemplateNodesQuery();

  if (loading) return <>Loading...</>;
  if (error) return <>Error...</>;
  const json = data.queryTemplateNode.find((t) => t.id === id);

  return (
    <NodeSettingsContext.Provider value={{ type: "template" }}>
      <Settings json={json} id={id} />
    </NodeSettingsContext.Provider>
  );
};
