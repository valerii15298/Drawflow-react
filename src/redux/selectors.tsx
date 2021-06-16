import { createSelectorCreator, defaultMemoize } from "reselect";
import lodash from "lodash";
import { useMemo } from "react";
import { selectActiveDrawflow } from "./drawflowSlice";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";
import { pureNode } from "../types";

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  lodash.isEqual
);

export const useNodeIds = () =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            const { drawflow } = selectActiveDrawflow(s);
            const data = Object.entries(drawflow)
              .filter(([id, { visible }]) => visible !== false)
              .map(([id]) => Number(id));
            return data;
          },
          (s) => s
        ),
      []
    )
  );

export const useActiveFlow = () =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
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
        ),
      []
    )
  );

export const useNodePos = (id: number) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            return selectActiveDrawflow(s).drawflow[id].pos;
          },
          (s) => s
        ),
      [id]
    )
  );

export const useNodeIsSelected = (id: number) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            return selectActiveDrawflow(s).selectId === id;
          },
          (s) => s
        ),
      [id]
    )
  );

export const useNodeIsSub = (id: number) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            return selectActiveDrawflow(s).drawflow[id].isSub;
          },
          (s) => s
        ),
      [id]
    )
  );

export const useNode = (id: number): pureNode =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            const node = JSON.parse(
              JSON.stringify(selectActiveDrawflow(s).drawflow[id])
            );
            delete node.pos;
            return node;
          },
          (s) => s
        ),
      [id]
    )
  );

export const useDrag = () =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            return selectActiveDrawflow(s).config.drag;
          },
          (s) => s
        ),
      []
    )
  );

export const usePortPos = (id: string) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            return selectActiveDrawflow(s).ports[id];
          },
          (s) => s
        ),
      [id]
    )
  );

export const useConnectionIds = () =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            const { connections } = selectActiveDrawflow(s);

            return Object.entries(connections).filter(([, conn]) => conn);
          },
          (s) => s
        ),
      []
    )
  );
