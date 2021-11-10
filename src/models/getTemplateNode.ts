import {
  ChatNodeType,
  TemplateNode,
  TemplateNodePatch,
} from "../generated/apollo";
import { RecursivePartial } from "../types";

type PartialBy<T, K extends keyof T> = Omit<T, K> &
  RecursivePartial<Pick<T, K>>;

export type templateNode = Omit<TemplateNode, "group"> & {
  group: { id: string };
};

export const getTemplateNode: () => TemplateNodePatch = () => ({
  id: "",
  order: 0,
  props: {
    nodeImagePropsRef: {
      src: "https://tastypoints.io/akm/tasty_images/cuTWiGOJ.png",
    },
  },
  group: {
    id: "",
  },
  info: {
    description: "New template node description",
    name: "New template node",
    type: ChatNodeType.Image,
    iconLink: "https://tastypoints.io/akm/tasty_images/cuTWiGOJ.png",
  },
});
