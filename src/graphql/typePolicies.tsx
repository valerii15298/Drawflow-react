import lodash from "lodash";
import { noContext } from "optimism";
import { Connection, FlowNode, NodeInfo, Pos } from "../generated/apollo";
import {
  StrictTypedTypePolicies,
  TypedTypePolicies,
} from "../generated/apollo-helpers";
import { waitNumberOfMilliseconds } from "../tools/helpers";
import { proxyTarget, unwrap, wrap } from "./wrap";

export const typePolicies: TypedTypePolicies = {
  Connection: {
    // keyFields: ["id"],
    fields: {
      curvature: {
        read(curvature, ctx) {
          if (curvature) {
            return curvature;
          }
          const connection = wrap<Connection>(ctx);

          const { y: y1, x: x1 } = connection().toPort().pos();
          const { y: y2, x: x2 } = connection().fromPort().pos();
          const coordinates = [x1() - x2() + 1, y1() - y2() + 1];
          // console.log({ coordinates });
          return `${Math.hypot(...coordinates)}`;
        },
        merge(existing, incoming, ctx) {
          // console.log({
          //   existing,
          //   incoming,
          // });

          // const conn = wrap<Connection>(ctx, "Connection:2");
          // conn()
          //   .toPort()
          //   .node()
          //   .info()
          //   .name.set((name) => name() + " Obraham");
          //
          // conn()
          //   .toPort()
          //   .node()
          //   .pos.set((pos) => ({
          //     x: 2,
          //     y: 5,
          //   }));
          // waitNumberOfMilliseconds(2000).then(() => {
          //   conn()
          //     .toPort()
          //     .node()
          //     .pos()
          //     .y.set((prevY) => prevY() + 1);
          // });

          return "After merge";
        },
      },
      selected: {
        read(selected = false) {
          // console.log({ connSelected: selected });
          return selected;
        },
      },
      visible: {
        read(visible = false) {
          return visible;
        },
      },
    },
  },
  BotFlowVersion: {
    fields: {
      select: {
        read(_, { toReference }) {
          return toReference({
            id: 1,
            __typename: "FlowNode",
          });
        },
      },
    },
  },
  FlowNode: {
    fields: {
      selected: {
        read(selected, ctx) {
          const node = wrap<FlowNode>(ctx);
          const id = node().id();
          const select = node!()!.flow!()!.select?.id;
          console.log({ select: select?.id });
          return false;
          // return select?.__typename === "FlowNode" && id === select?.id;
        },
      },
      pos: {
        read(existingPos = {}): Pos {
          // if (existingPos?.x !== undefined && existingPos?.y !== undefined) {
          //   return existingPos;
          // }
          const pos = {
            x: 0,
            y: 0,
          };
          lodash.merge(pos, existingPos);
          return pos;
        },
        merge(pos, newPos) {
          // console.log("Merge Pos", pos, newPos);
          return { ...pos, ...newPos };
        },
      },
      children: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx);
          const portIndex = ctx.args?.portIndex as number;
          if (!portIndex) {
            throw new TypeError("portIndex is not provided");
          }
          const { ports, flow } = node();

          const nodes: any[] = [];
          // flow().connections.forEach(({ fromPort, toPort }) => {
          //   if (
          //     fromPort().index === portIndex &&
          //     ports.some((port) => fromPort().id === port.id)
          //   ) {
          //     nodes.push(toPort().node.target);
          //   }
          // });

          return nodes;
        },
      },
      firstSubnode: {
        read(_, ctx) {
          return null;
          const node = wrap<FlowNode>(ctx);
          const children = node().children;
          // const children = readField<FlowNode, "children">(ctx, {
          //   fieldName: "children",
          //   args: { portIndex: 3 },
          // });
          // return children[0]?.target ?? null;
        },
      },
    },
  },
  Port: {
    fields: {
      pos: {
        read() {
          return {
            x: 10,
            y: 20,
          };
        },
      },
    },
  },
};
