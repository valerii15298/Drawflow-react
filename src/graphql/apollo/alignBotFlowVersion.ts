import { BotFlowVersion } from "../../generated/apollo";
import { RecursiveFunc } from "../../types";
import { alignNodeChildren } from "./alignNodeChildren";
import { setLaneNumbers } from "./setLaneNumbers";

export const alignBotFlowVersion = (flow: RecursiveFunc<BotFlowVersion>) => {
  setLaneNumbers(flow);
  flow.heads().forEach((node) => {
    alignNodeChildren(node);
  });
};
