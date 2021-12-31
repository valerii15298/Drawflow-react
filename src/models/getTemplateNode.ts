import {
  NodeType,
  TemplateNode,
  TemplateNodeCreateInput,
} from "../generated/apollo";
import { RecursivePartial } from "../types";

type PartialBy<T, K extends keyof T> = Omit<T, K> &
  RecursivePartial<Pick<T, K>>;

export type templateNode = Omit<TemplateNode, "group"> & {
  group: { id: string };
};

export const getTemplateNode: () => TemplateNodeCreateInput = () => ({
  order: 0,
  NodeProps: {
    create: {
      type: NodeType.Audio,
      NodeAudioProps: { create: { src: "SomeTestaudioUrl" } },
    },
  },
  group: {
    create: {
      name: `Some group ${Date.now()}`,
      description: `Some description ${Date.now()}`,
    },
  },
  info: {
    create: {
      description: "New template node description",
      name: "New template node",
      type: NodeType.Image,
      iconLink: "https://tastypoints.io/akm/tasty_images/cuTWiGOJ.png",
    },
  },
});
