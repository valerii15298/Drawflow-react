import lodash from "lodash";
import { Connection, FlowNode, Pos } from "../generated/apollo";
import {
  StrictTypedTypePolicies,
  TypedTypePolicies,
} from "../generated/apollo-helpers";
import { cache } from "./index";
import { wrap } from "./wrap";

export const typePolicies: TypedTypePolicies = {
  Connection: {
    fields: {
      curvature: {
        read(curvature, ctx) {
          if (curvature) {
            return curvature;
          }
          const connection = wrap<Connection>(ctx);

          const toPos = connection().toPort().pos();
          const fromPos = connection().fromPort().pos();
          return `${fromPos} - ${JSON.stringify(toPos)}`;
        },
        merge(existing, incoming, ctx) {
          // console.log("Merge Curvyy");
          // console.log({
          //   existing,
          //   incoming,
          // });
          const conn = wrap<Connection>(ctx, {
            id: 2,
            __typename: "Connection",
          });
          // console.log(conn().toPort().node().id);
          conn().toPort().node().pos.set({
            x: -1,
          });

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
          // console.log(selected);
          const node = wrap<FlowNode>(ctx);
          const id = node().id;
          const select = node().flow().select();
          return select.__typename === "FlowNode" && id === select.id;
        },
      },
      pos: {
        read(existingPos = {}): Pos {
          const pos = {
            x: 0,
            y: 0,
          };
          lodash.merge(pos, existingPos);
          return pos;
        },
        merge(pos, newPos) {
          // console.log("Merge Pos", pos, newPos);
          return newPos;
        },
      },
      children: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx);
          const portIndex = ctx.args.portIndex as number;
          const { ports, flow } = node();

          const nodes = [];
          flow().connections.forEach(({ fromPort, toPort }) => {
            if (
              fromPort().index === portIndex &&
              ports.some((port) => fromPort().id === port.id)
            ) {
              nodes.push(toPort().node.target);
            }
          });

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

export const keyFieldsByTypename = (
  typename: keyof StrictTypedTypePolicies
) => {
  return typePolicies[typename].keyFields ?? ["__typename", "id"];
};
