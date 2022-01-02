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
  group: {
    connectOrCreate: {
      create: {
        name: `Some group ${Date.now()}`,
        description: `Some description ${Date.now()}`,
      },
      where: { id: 1 },
    },
  },
  info: {
    create: {
      description: "New template node description",
      name: "New template node",
      iconLink: "https://tastypoints.io/akm/tasty_images/cuTWiGOJ.png",
    },
  },
  NodeProps: {
    create: {
      type: NodeType.Image,
      NodeImageProps: {
        create: { src: "https://tastypoints.io/akm/tasty_images/cuTWiGOJ.png" },
      },
    },
  },
});
