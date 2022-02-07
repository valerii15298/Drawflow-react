import { createSelectorCreator, defaultMemoize } from "reselect";
import lodash from "lodash";
import { useMemo } from "react";
import { selectActiveDrawflow } from "./drawflowSlice";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";
import { portType, pureNode, purePort } from "../types";
import handler from "../models/tools";

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
            return (
              Object.entries(drawflow)
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .filter(([id, { visible }]) => visible >= 0)
                .map(([id]) => Number(id))
            );
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
            console.log({ s });
            const state = selectActiveDrawflow(s);
            const {
              config: {
                canvasTranslate: { x, y },
                zoom,
              },
              newPathDirection,
              canvasDrag,
            } = state;
            return {
              config: {
                canvasTranslate: {
                  x,
                  y,
                },
                zoom,
              },
              newPathDirection,
              canvasDrag,
            };
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
            const select = selectActiveDrawflow(s).select;
            return select?.selectId === id && select.type === "node";
          },
          (s) => s
        ),
      [id]
    )
  );

export const usePathIsSelected = (id: number | undefined) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            if (id === undefined) return false;
            const select = selectActiveDrawflow(s).select;
            return select?.type === "path" && select.selectId === id;
          },
          (s) => s
        ),
      [id]
    )
  );

export const usePortIsActive = (port: purePort) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            const { portToConnect } = selectActiveDrawflow(s);
            if (!portToConnect) return false;
            return portToConnect.id === port.id;
          },
          (s) => s
        ),
      [port]
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

export const usePortPos = ({ id }: { id: number }) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            return selectActiveDrawflow(s).ports[id].pos;
          },
          (s) => s
        ),
      [id]
    )
  );

export const useConnection = (index: number) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            return selectActiveDrawflow(s).connections[index];
          },
          (s) => s
        ),
      [index]
    )
  );

export const useConnectionIds = () =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            const { connections } = selectActiveDrawflow(s);

            return Object.values(connections)
              .filter((conn) => conn.visible >= 0)
              .map((conn) => conn.id);
          },
          (s) => s
        ),
      []
    )
  );

// export const usePortSelected = () =>
//   useAppSelector(
//     useMemo(
//       () =>
//         createDeepEqualSelector(
//           (s: RootState) => {
//             const state = selectActiveDrawflow(s);
//             if (!state.select || state.select.type !== portType.out) return;
//             return state.ports[state.select.selectId];
//           },
//           (s) => s
//         ),
//       []
//     )
//   );

export const useConnectionCurvature = (connId: number) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            const state = selectActiveDrawflow(s);
            const { fromPort, toPort } = state.connections[connId];
            const startPos = state.ports[fromPort.id].pos;
            const endPos = state.ports[toPort.id].pos;
            if (!startPos || !endPos) {
              throw new TypeError("Cannot draw connection");
            }
            return handler.createCurvature(startPos, endPos);
          },
          (s) => s
        ),
      [connId]
    )
  );

export const useNewPathCurvature = () =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            const state = selectActiveDrawflow(s);
            if (
              !state.select ||
              state.select.type !== portType.out ||
              !state.newPathDirection
            ) {
              return null;
            }
            const selectedPort = state.ports[state.select.selectId];
            if (!selectedPort) {
              throw new TypeError("No start port in newPath");
            }
            const startPos = selectedPort.pos;
            if (!s.canvas) {
              throw new TypeError("Canvas shape is not available");
            }

            const { clientX, clientY } = state.newPathDirection;
            const endPos = handler.getPos(
              clientX,
              clientY,
              state.config.zoom.value,
              s.canvas
            );
            return handler.createCurvature(startPos, endPos);
          },
          (s) => s
        ),
      []
    )
  );
