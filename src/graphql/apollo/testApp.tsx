import { gql } from "@apollo/client";
import { BotFlowVersion, FlowNode } from "../../generated/apollo";
import {
  alignBotFlowVersion,
  alignCurrentBotFlowVersion,
} from "./alignBotFlowVersion";
import { alignNodeChildren } from "./alignNodeChildren";
import { useData } from "./useData";
import { cache, data as cacheData, rootQuery, wrapById } from "./index";
import { unwrap, wrap } from "./wrap";

export const TestApp = () => {
  // const { data: allData } = useData();
  //
  // const { data } = useRootInfoQuery();
  //
  // if (!allData || !data) {
  //   return <div>Loading...</div>;
  // }

  return <div>dede</div>;

  return (
    <div>
      {/*<pre>{JSON.stringify(allData || {}, null, 2)}</pre>*/}
      <button
        onClick={() => {
          //@ts-ignore
          console.log(cacheData);
        }}
      >
        Show cache
      </button>
      <button
        onClick={() => {
          const y = cache.writeFragment({
            id: `Connection:2`,
            fragment: gql`
              fragment test2 on Connection {
                curvature
              }
            `,
            data: {
              curvature: "I am here bro:)",
            },
          });
          console.log({ y });
        }}
      >
        Merge curvature
      </button>

      <button
        onClick={() => {
          const node = wrap<FlowNode>(cache, "FlowNode:1")();
          alignNodeChildren(node);
          const flow = wrap<BotFlowVersion>(cache, "BotFlowVersion:1")();
          alignBotFlowVersion(flow);
        }}
      >
        Align
      </button>
      {/*<button onClick={() => {}}>fill data</button>*/}
      <button
        onClick={() => {
          rootQuery().sidebarVisible.set((prev) => {
            return !prev();
          });
        }}
      >
        sidebar flip
      </button>
      <button
        onClick={() => {
          alignCurrentBotFlowVersion();
        }}
      >
        align current
      </button>
    </div>
  );
};
