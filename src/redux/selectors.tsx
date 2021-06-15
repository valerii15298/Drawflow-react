import { createSelectorCreator, defaultMemoize } from "reselect";
import lodash from "lodash";
import { useCallback, useMemo } from "react";
import { selectActiveDrawflow } from "./drawflowSlice";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  lodash.isEqual
);

const selectNodeIds = () =>
  createDeepEqualSelector(
    (s: RootState) => {
      const { drawflow } = selectActiveDrawflow(s);
      const data = Object.entries(drawflow)
        .filter(([id, { visible }]) => visible !== false)
        .map(([id]) => Number(id));
      return data;
    },
    (s) => s
  );

export const useNodeIds = () =>
  useAppSelector(useMemo(() => selectNodeIds(), []));

const selectActiveFlow = createDeepEqualSelector(
  (s: RootState) => {
    const state = selectActiveDrawflow(s);
    const {
      config: {
        // canvasTranslate: { x, y },
        zoom,
      },
      newPathDirection,
      canvasDrag,
    } = state;
    const obj = {
      config: {
        // canvasTranslate: { x, y },
        zoom,
      },
      newPathDirection,
      canvasDrag,
    };
    return obj;
  },
  (s) => s
);
export const useActiveFlow = () =>
  useAppSelector(useCallback(selectActiveFlow, []));

// export const useNodePos = (id: number) =>
//   useAppSelector(useCallback(() => selectDrawflow(), []));
