// depends on key and value
import { NodeType } from "../generated/apollo";

export const mapNodeSettingsKeyToComponent = {
  info: {
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
};
