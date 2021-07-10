import { createSelectorCreator, defaultMemoize } from "reselect";
import lodash from "lodash";
import { useMemo } from "react";
import { selectActiveDrawflow } from "./drawflowSlice";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";
import { portType, pureNode, purePort } from "../types";
import handler from "../tools";

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
                .filter(([id, { visible }]) => visible !== false)
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
            const state = selectActiveDrawflow(s);
            const {
              config: {
                // canvasTranslate: { x, y },
                zoom,
              },
              newPathDirection,
              canvasDrag,
            } = state;
            return {
              config: {
                // canvasTranslate: { x, y },
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
            if (portToConnect === undefined) return false;
            const port2 = JSON.parse(JSON.stringify(portToConnect));
            delete port2.pos;
            return lodash.isEqual(port, port2);
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

export const usePortPos = ({
  nodeId,
  portId,
  type,
}: {
  nodeId: number;
  portId: number;
  type: portType;
}) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            return selectActiveDrawflow(s).ports.find(
              (port) =>
                port.nodeId === nodeId &&
                port.portId === portId &&
                port.type === type
            )?.pos;
          },
          (s) => s
        ),
      [nodeId, portId, type]
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

            return connections.reduce((acc: Array<number>, conn, index) => {
              if (conn.visible) {
                acc.push(index);
              }
              return acc;
            }, []);
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

export const useConnectionCurvature = (index: number) =>
  useAppSelector(
    useMemo(
      () =>
        createDeepEqualSelector(
          (s: RootState) => {
            const state = selectActiveDrawflow(s);
            const { startId, startPort, endId, endPort } =
              state.connections[index];
            const startPos = state.ports.find(
              (port) =>
                port.nodeId === startId &&
                port.portId === startPort &&
                port.type === portType.out
            )?.pos;
            const endPos = state.ports.find(
              (port) =>
                port.nodeId === endId &&
                port.portId === endPort &&
                port.type === portType.in
            )?.pos;
            return startPos && endPos
              ? handler.createCurvature(startPos, endPos)
              : "";
          },
          (s) => s
        ),
      [index]
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
              console.error("Cannot draw new path!");
              return;
            }
            const selectedPort = state.ports[state.select.selectId];
            if (!selectedPort) {
              console.error("No start port in newPath");
              return;
            }
            const startPos = selectedPort.pos;
            if (!s.canvas) {
              console.error("Canvas shape is not available");
              return;
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
