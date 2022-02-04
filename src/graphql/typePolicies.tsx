import lodash from "lodash";
import { noContext } from "optimism";
import {
  BotFlowVersion,
  Connection,
  FlowNode,
  NodeInfo,
  Pos,
  SelectEntity,
} from "../generated/apollo";
import {
  StrictTypedTypePolicies,
  TypedTypePolicies,
} from "../generated/apollo-helpers";
import { waitNumberOfMilliseconds } from "../tools/helpers";
import { Spacing } from "../types";
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
      heads: {
        read(_, ctx) {
          const flowVersion = wrap<BotFlowVersion>(ctx)();
          const nodes = flowVersion.nodes();
          return unwrap(nodes.filter((node) => !node.parent?.()));
        },
      },
    },
  },
  FlowNode: {
    fields: {
      height: {
        read() {
          return 200;
        },
      },
      width: {
        read() {
          return 300;
        },
      },
      selected: {
        read(selected, ctx) {
          const node = wrap<FlowNode>(ctx);
          const select = node().flow().select?.();
          if (!select) {
            return false;
          }
          const __typename = select.__typename?.();
          const id = select.id();
          return (
            __typename === "FlowNode" &&
            node().__typename?.() === __typename &&
            node().id() === id
          );
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
          flow()
            .connections()
            .forEach(({ fromPort, toPort }) => {
              if (
                fromPort().index() === portIndex &&
                ports().some((port) => fromPort().id() === port.id())
              ) {
                nodes.push(toPort().node());
              }
            });

          // console.log({ nodes });

          return unwrap(nodes);
        },
      },
      visible: {
        read() {
          return 0;
        },
      },
      out1: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx);
          return unwrap(node().children({ args: { portIndex: 2 } }));
        },
      },
      firstSubnode: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx);
          const children = node().children({ args: { portIndex: 3 } });
          return unwrap(children[0]) ?? null;
        },
      },
      subnodes: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx);
          const rez = unwrap(
            node().firstSubnode?.()?.flowLine?.()?.flowLineNodes() || []
          );
          // console.log({ rez });
          return rez;
        },
      },
      flowLine: {
        read(_, ctx) {
          let node = wrap<FlowNode>(ctx);
          const flowLineNodes = [node()];
          let hasSubnodes = node().firstSubnode?.();
          while (node().out1().length === 1) {
            // @ts-ignore
            node = node().out1()[0];
            // @ts-ignore
            flowLineNodes.push(node);
            hasSubnodes = hasSubnodes || node().firstSubnode?.();
          }
          return node().out1().length > 1
            ? null
            : {
                flowLineNodes: unwrap(flowLineNodes),
                hasSubnodes: unwrap(hasSubnodes),
              };
        },
      },
      childrenTotalWidth: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx);
          const out1 = node().out1();
          if (!out1.length) return 0;
          let totalWidth = 0;
          out1.forEach((node) => {
            totalWidth += node.totalWidth();
          });
          return totalWidth + Spacing.x * (out1.length - 1);
        },
      },
      totalWidth: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx);
          if (node().visible() < 0) {
            return 0;
          }
          return Math.max(
            node().width() + node().subnodesWidth(),
            node().leftWidth() + node().rightWidth()
          );
        },
      },
      leftWidth: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          if (node.visible() < 0) {
            return 0;
          }
          const childrenTotalWidth = node.childrenTotalWidth();
          const out1 = node.out1();

          const selfLeftWidth = node.width() / 2;
          if (!out1.length) {
            return selfLeftWidth;
          }

          const leftChildWidth = out1[0].leftWidth();
          const rightChildWidth = out1[out1.length - 1].rightWidth();

          const childrenRightWidth =
            leftChildWidth +
            (childrenTotalWidth - leftChildWidth - rightChildWidth) / 2;
          return Math.max(childrenRightWidth, selfLeftWidth);
        },
      },
      rightWidth: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          if (node.visible() < 0) {
            return 0;
          }
          const childrenTotalWidth = node.childrenTotalWidth();
          const out1 = node.out1();

          const selfRightWidth = node.width() / 2 + node.subnodesWidth();
          if (!out1.length) {
            return selfRightWidth;
          }

          const leftChildWidth = out1[0].leftWidth();
          const rightChildWidth = out1[out1.length - 1].rightWidth();

          const childrenRightWidth =
            rightChildWidth +
            (childrenTotalWidth - leftChildWidth - rightChildWidth) / 2;
          return Math.max(childrenRightWidth, selfRightWidth);
        },
      },
      complexParentNode: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          // if is sub return complexNode to which belongs this subnode
          const parent = node.parent?.();
          if (parent) {
            if (parent.firstSubnode?.() === node) return unwrap(parent);
            return unwrap(parent.complexParentNode?.());
          }
          return null;
        },
      },
      subnodesWidth: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          if (node.visible() < 0) {
            return 0;
          }
          return node.subnodes().reduce((acc, subNode) => {
            return acc + subNode.width() + Spacing.x;
          }, 0);
        },
      },
      prevDirectNodes: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          const prevNodes = [];
          let nextParent = node.parent?.();
          while (nextParent) {
            // include subnodes of another nodes
            prevNodes.push(...nextParent.subnodes().reverse());
            prevNodes.push(nextParent);
            nextParent = nextParent.parent?.();
          }
          return unwrap(prevNodes);
        },
      },
      outConnections: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          const outPorts = node.ports().filter((port) => port.index() !== 1);
          const outConnections = outPorts.reduce((acc, port) => {
            acc.push(...port.outConnections());
            return acc;
          }, [] as any[]);
          return unwrap(outConnections);
        },
      },
      allSuccessors: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();

          const successors = [...node.out1(), ...node.subnodes()];
          const allSuccessors = [...successors];
          // console.log({ allSuccessors });
          successors.forEach((node) =>
            allSuccessors.push(...node.allSuccessors())
          );
          return unwrap(allSuccessors);
        },
      },
      parent: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          const rez = unwrap(
            node.parentConnection?.()?.fromPort().node() || null
          );
          return rez;
        },
      },
      parentConnection: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          const port = node.ports().find((port) => port.index() === 1);
          return unwrap(port?.inConnection?.());
        },
      },
      isSub: {
        read(_, ctx) {
          const node = wrap<FlowNode>(ctx)();
          return node.complexParentNode?.() !== null;
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
