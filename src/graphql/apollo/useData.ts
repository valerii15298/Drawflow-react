import { getDefaultZoomConfig } from "../../config";
import { BotFlow, useBotFlowQuery } from "../../generated/apollo";
import { cache, wrapById } from "./index";

const queryString = window.location.search;
const queryParams = new URLSearchParams(queryString);
export const botFlowIdParam = Number(queryParams.get("botFlowId"));

const done = { v: false };

export const useData = () => {
  const { data, ...rest } = useBotFlowQuery({
    variables: { where: { id: botFlowIdParam } },
    onCompleted(resp) {
      if (done.v) return;
      if (!resp.botFlow) return;
      const cacheId = cache.identify(resp.botFlow);
      if (cacheId === undefined) {
        console.error("Cannot identify");
        return;
      }
      const botFlow = wrapById<BotFlow>(cacheId);

      botFlow()
        .versions()
        .forEach((botFlowVersion) => {
          done.v = true;
          botFlowVersion.set(() => ({
            zoom: getDefaultZoomConfig(),
            canvasTranslate: {
              y: 0,
              x: 0,
            },
          }));
        });

      console.log("On completed");
    },
  });
  return { data: data?.botFlow?.versions[0], ...rest };
};
