// depends on key and value
import { chatNodeType } from "../chat/chatNodes/chatNodeType";

export const mapNodeSettingsKeyToComponent = {
  node_object_lists: {
    type: ({ field }: any) => {
      return (
        <select {...field}>
          {Object.entries(chatNodeType).map(([type, value], i) => (
            <option key={i} value={value}>
              {type}
            </option>
          ))}
        </select>
      );
    },
  },
};
