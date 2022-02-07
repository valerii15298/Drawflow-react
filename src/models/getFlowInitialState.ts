import { getDefaultStateData } from "../redux/drawflowSlice";
import { flowType, mainWindow, sideWindow } from "../types";

export const getFlowInitialState = (): flowType => ({
  dragTemplate: null,
  version: 0,
  flows: { 0: getDefaultStateData() },
  windowConfig: {
    id: 0,
    mainId: mainWindow.mainFlow,
    sideId: sideWindow.none,
    background: {
      opacity: 0,
      blur: 0,
      imageUrl: "",
    },
  },
});
