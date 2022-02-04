import { BotFlowVersion } from "../../generated/apollo";
import { RecursiveFunc } from "../../types";

export const setLaneNumbers = (flow: RecursiveFunc<BotFlowVersion>) => {
  let laneNodes = flow.heads();
  laneNodes.forEach((node) => {
    node.lane.set(() => 0);
    node.head.set(() => node.id());
  });

  while (laneNodes.length) {
    const nextLaneNodes: typeof laneNodes = [];
    laneNodes.forEach((node) => {
      let lane = node.lane() + 1;
      const subnodes = node.subnodes();
      const head = node.head();
      if (typeof head !== "number") {
        throw new TypeError("Wrong type");
      }
      if (subnodes.length) {
        for (const sub of subnodes) {
          sub.lane.set(() => lane++);
          sub.head.set(() => head);
        }
      }
      const nextNodes = node.out1();
      nextNodes.forEach((nextNode) => {
        nextNode.head.set(() => head);
        nextNode.lane.set(() => lane);
      });
      nextLaneNodes.push(...nextNodes);
    });
    laneNodes = nextLaneNodes;
  }

  flow.heads().forEach((node) => {
    const head = node.head();
    for (
      let laneNumber = 0, positionNumber = 0, nextLaneNodes = [node];
      nextLaneNodes.length;
      ++laneNumber
    ) {
      nextLaneNodes = flow
        .nodes()
        .filter(
          (nextNode) =>
            nextNode.lane() === laneNumber && nextNode.head() === head
        );

      nextLaneNodes.forEach((nextNode) => {
        nextNode.positionNumber.set(() => positionNumber++);
      });
    }
  });
};
