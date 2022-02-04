import { FlowNode } from "../../generated/apollo";
import { RecursiveFunc, Spacing } from "../../types";

export const alignNodeChildren = (thisNode: RecursiveFunc<FlowNode>) => {
  const out1 = thisNode.out1();
  let xPos = thisNode.pos().x() - (thisNode.leftWidth() - thisNode.width() / 2);

  for (const node of out1) {
    const x = xPos + (node.leftWidth() - node.width() / 2);
    node.pos.set(() => ({
      x,
      y: thisNode.pos().y() + thisNode.height() + Spacing.y,
    }));

    if (node.visible() > 0) {
      xPos += node.totalWidth() + Spacing.x;
    }
    alignNodeChildren(node);
  }

  const subnodes = thisNode.subnodes();
  if (subnodes.length) {
    xPos = thisNode.pos().x() + thisNode.width() + Spacing.x;
    subnodes.forEach((subNode) => {
      subNode.pos.set(() => ({
        x: xPos,
        y: thisNode.pos().y() + (thisNode.height() / 2 - subNode.height() / 2),
      }));

      // delete this.state.ports[`${subNode.id}_out_2`]
      xPos += subNode.width() + Spacing.x;
    });
  }
};
