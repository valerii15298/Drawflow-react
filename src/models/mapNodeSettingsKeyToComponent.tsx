// depends on key and value
import { NodeType, useTemplateNodesGroupsQuery } from "../generated/apollo";

const ChooseGroup = ({ field }: any) => {
  const { data, loading, error } = useTemplateNodesGroupsQuery();
  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;
  return (
    <select {...field}>
      {data.templateNodesGroups.map(({ id, name }) => (
        <option key={id} value={id}>
          {name} ID.{id}
        </option>
      ))}
    </select>
  );
};

export const mapNodeSettingsKeyToComponent = {
  NodeProps: {
    type: ({ field }: any) => {
      return (
        <select {...field} disabled>
          {Object.entries(NodeType).map(([type, value], i) => (
            <option key={i} value={value}>
              {type}
            </option>
          ))}
        </select>
      );
    },
  },
  group: {
    id: ChooseGroup,
  },
};
