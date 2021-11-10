// depends on key and value
import { ChatNodeType } from "../generated/apollo";

export const mapNodeSettingsKeyToComponent = {
  info: {
    type: ({ field }: any) => {
      return (
        <select {...field} disabled>
          {Object.entries(ChatNodeType).map(([type, value], i) => (
            <option key={i} value={value}>
              {type}
            </option>
          ))}
        </select>
      );
    },
  },
};
