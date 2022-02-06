import { currentBotFlow } from "./index";
import { BotFlowVersion } from "../../generated/apollo";
import { RecursiveFunc } from "../../types";
import { alignNodeChildren } from "./alignNodeChildren";
import { setLaneNumbers } from "./setLaneNumbers";

export const getCurrentBotFlowVersion = () => {
  const currentVersion = currentBotFlow().version?.();
  // console.log(currentBotFlow().id());
  return currentBotFlow()
    .versions()
    .find((ver) => ver().version() === currentVersion);
};

export const getCurrentSelect = () => getCurrentBotFlowVersion()?.().select;

export const alignCurrentBotFlowVersion = () => {
  const selectedBotFlowVersion = getCurrentBotFlowVersion();
  if (selectedBotFlowVersion) {
    alignBotFlowVersion(selectedBotFlowVersion());
  } else {
    console.warn(
      "Cannot align current BotFlowVersion. Maybe current version is not set(is null)"
    );
  }
};

export const alignBotFlowVersion = (flow: RecursiveFunc<BotFlowVersion>) => {
  setLaneNumbers(flow);
  // console.log("Settled");
  flow.heads().forEach((node) => {
    alignNodeChildren(node());
  });
};

export const deleteConnection = (funcTodelete: () => void) => {
  const flowVersion = getCurrentBotFlowVersion();
  if (!flowVersion) return;
  const select = flowVersion().select?.();
  if (select?.__typename?.() === "Connection") {
    // // delete connection on server and update cache locally or refetch queries
    // flowVersion().connections.set((conns) => {
    //   const connections = unwrap(conns());
    //   console.log({ connections });
    //   return connections;
    // });
    // TODO delete inConnection and outConnection from ports query
    //  and instead implement search in connections in current flowVersion
  }
};
