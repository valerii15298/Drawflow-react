import { FlowNode } from "../../generated/apollo";
import { RecursiveFunc, Spacing } from "../../types";

export const alignNodeChildren = (node: RecursiveFunc<FlowNode>) => {
  const out1 = node.out1();
  let xPos = node.pos().x() - (node.leftWidth() - node.width() / 2);

  for (const node of out1) {
    const x = xPos + (node.leftWidth() - node.width() / 2);
    node.pos.set(() => ({
      x,
      y: node.pos().y() + node.height() + Spacing.y,
    }));

    if (node.visible() > 0) {
      xPos += node.totalWidth() + Spacing.x;
    }
    alignNodeChildren(node);
  }

  const subnodes = node.subnodes();
  if (subnodes.length) {
    xPos = node.pos().x() + node.width() + Spacing.x;
    subnodes.forEach((subNode) => {
      subNode.pos.set(() => ({
        x: xPos,
        y: node.pos().y() + (node.height() / 2 - subNode.height() / 2),
      }));

      // delete this.state.ports[`${subNode.id}_out_2`]
      xPos += subNode.width() + Spacing.x;
    });
  }
};
