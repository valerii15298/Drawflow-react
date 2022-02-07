import { pureTemplateNode } from "../types";
import { getDefaultNodeProps } from "./getDefaultNodeProps";

export const getDefaultPureTemplateNode = (): pureTemplateNode => ({
  info: {
    id: 0,
    description: "Default template",
    name: "Default template",
    iconLink: "Default template",
  },
  NodeProps: getDefaultNodeProps(),
});
