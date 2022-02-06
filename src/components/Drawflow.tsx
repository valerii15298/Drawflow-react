import { useEffect, useRef } from "react";
import { defaultBackgroundConfig, getDefaultZoomConfig } from "../config";
import {
  BotFlowVersion,
  FlowNode,
  Port,
  useDeleteConnectionMutation,
  useDeleteFlowNodeMutation,
  useRootInfoQuery,
} from "../generated/apollo";
import { currentBotFlow, rootQuery, wrapById } from "../graphql";
import {
  alignBotFlowVersion,
  alignCurrentBotFlowVersion,
  getCurrentBotFlowVersion,
  getCurrentSelect,
} from "../graphql/apollo/alignBotFlowVersion";
import { useData } from "../graphql/apollo/useData";
import {
  addNewNode,
  canvasShapeUpdated,
  insertCopiedNode,
  setStateAction,
} from "../redux/actions";
import { postFlowVersion } from "../redux/api";
import { actions } from "../redux/drawflowSlice";
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
} from "../redux/hooks";
import { useActiveFlow } from "../redux/selectors";
import { alignCurrentFlow } from "../redux/thunks/alignWorkerThunk";
import { toggleAvailablePortToConnectThunk } from "../redux/thunks/toggleAvailablePortToConnectThunk";
import { canvasShape, LocalStorageKey, RecursiveFunc } from "../types";
import { ConnectionList } from "./ConnectionList";
import DrawflowZoomArea from "./DrawflowZoomArea";
import { useBackground } from "./Flow";
import { NewPath } from "./NewPath";

import { NodeList } from "./NodeList";
import {
  BackgroundDiv,
  CommitFlowButton,
  InnerDrawflow,
  ParentDrawflow,
} from "./StyledComponents";

const updateTransform = (
  el: HTMLElement,
  dx: number,
  dy: number,
  scale: number
) => {
  // return;
  // console.log({ scale });
  const [x, y] = getComputedStyle(el)
    .transform.match(/^matrix\((.+)\)$/)?.[1]
    .split(",")
    .slice(-2)
    .map(Number) || [0, 0];
  el.style.transform = `translate(${x + dx}px, ${y + dy}px) scale(${scale})`;
};

// const useBackground = () => {
//   const dispatch = useAppDispatch();
//   const [backgroundOpacity] = useLocalStorage(
//     LocalStorageKey.backgroundOpacity,
//     50
//   );
//   const [backgroundBlur] = useLocalStorage(LocalStorageKey.backgroundBlur, 50);
//   const [backgroundImageUrl] = useLocalStorage(
//     LocalStorageKey.backgroundImageUrl,
//     ""
//   );
//
//   useEffect(() => {
//     dispatch(
//       setStateAction({
//         windowConfig: {
//           background: {
//             opacity: backgroundOpacity,
//             blur: backgroundBlur,
//             imageUrl: backgroundImageUrl,
//           },
//         },
//       })
//     );
//   }, []);
// };

export const Drawflow = () => {
  // console.log("Render Drawflow");
  // return null;

  const { data: allData } = useData();

  const zoom = allData?.zoom ?? getDefaultZoomConfig();
  // const canvasTranslate = allData?.canvasTranslate ?? {
  //   x: 0,
  //   y: 0,
  // };

  // console.log({ allData });

  const { newPathDirection, canvasDrag } = useRootInfoQuery().data ?? {
    newPathDirection: null,
    canvasDrag: false,
  };

  const dispatch = useAppDispatch();

  const flowRef = useRef<HTMLDivElement>(null);
  const precanvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // dispatch(alignCurrentFlow());
    allData && alignCurrentBotFlowVersion();
    console.log("Align current");
  }, [!!allData]);

  useEffect(() => {
    const { current: flowDiv } = flowRef;
    if (flowDiv) {
      // console.log(flowDiv.style.transform);
      updateTransform(flowDiv, 0, 0, zoom.value);
    }
  }, [canvasDrag, zoom.value]);

  // maybe change with ResizeObserver
  useEffect(() => {
    const { current: canvas } = flowRef;
    if (canvas) {
      const canvasRect = canvas.getBoundingClientRect();
      const payload: canvasShape = {
        x: canvasRect.x,
        y: canvasRect.y,
        width: canvas.clientWidth,
        height: canvas.clientHeight,
      };
      // dispatch(canvasShapeUpdated(payload));
      rootQuery.set(() => ({ canvas: payload }));
    }

    const { current } = precanvas;
    if (current) {
      const canvasRect = current.getBoundingClientRect();
      const payload: canvasShape = {
        x: canvasRect.x,
        y: canvasRect.y,
        width: current.clientWidth,
        height: current.clientHeight,
      };
      // dispatch(setStateAction({ precanvas: payload }));
      rootQuery.set(() => ({ precanvas: payload }));
    }
  });

  const [{ opacity, blur, imageUrl }] = useBackground() ?? [
    defaultBackgroundConfig,
  ];

  const [deleteConn] = useDeleteConnectionMutation({
    refetchQueries: ["botFlow"],
  });
  const [deleteFlowNode] = useDeleteFlowNodeMutation({
    refetchQueries: ["botFlow"],
  });
  const deleteSelected = () => {
    const select = getCurrentSelect()?.();
    const typename = select?.__typename?.();
    const id = select?.id();
    if (id === undefined || typename === undefined) {
      throw new TypeError("id or __typename is undefined");
    }
    if (typename === "FlowNode") {
      deleteFlowNode({ variables: { where: { id } } }).then(console.log);
      // advanced: TODO update cache
    }
    if (typename === "Connection") {
      deleteConn({ variables: { where: { id } } }).then(console.log);
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

  return (
    <ParentDrawflow
      ref={precanvas}
      className={"drawflow"}
      tabIndex={0}
      onKeyDownCapture={(e) => {
        if (e.key === "Delete") {
          deleteSelected();
          // dispatch(actions.deletePath());
          // dispatch(actions.deleteNode());
        }
        if (e.ctrlKey && e.key === "c") {
          // dispatch(actions.copyNode());
        }
        if (e.ctrlKey && e.key === "v") {
          // dispatch(insertCopiedNode());
        }
      }}
      onMouseDown={() => {
        rootQuery.set(() => ({
          canvasDrag: true,
          drag: false,
        }));
        getCurrentBotFlowVersion()?.set(() => ({ select: null }));

        // dispatch(actions.canvasDrag(true));
        dispatch(actions.unSelect());
      }}
      onMouseUp={() => {
        // dispatch(actions.canvasMouseUp());
        rootQuery.set(() => ({
          portToConnect: null,
          newPathDirection: null,
          canvasDrag: false,
          drag: false,
        }));
        const select = getCurrentSelect();
        if (select) {
          if (select()?.__typename?.() === "Port") {
            select.set(() => null);
          }
        }
        // dispatch(alignCurrentFlow());
        alignCurrentBotFlowVersion();
      }}
      onMouseMove={(e) => {
        const { clientX, clientY, movementX, movementY } = e;
        const { current: flowDiv } = flowRef;
        if (canvasDrag && flowDiv) {
          updateTransform(flowDiv, movementX, movementY, zoom.value);
        }
        rootQuery.set(() => ({
          clientCurrentMousePos: {
            clientX,
            clientY,
          },
        }));
        if (!allData) return;
        if (rootQuery().canvasDrag()) {
          getCurrentBotFlowVersion()?.().canvasTranslate.set((prev) => ({
            x: prev().x() + movementX,
            y: prev().y() + movementY,
          }));
        } else {
          const select = getCurrentSelect()?.();
          if (select) {
            if (select.__typename?.() === "Port") {
              const selectedPort = select as RecursiveFunc<Port>;
              if (selectedPort.index() === 2) {
                rootQuery.set(() => ({
                  newPathDirection: {
                    clientX,
                    clientY,
                  },
                }));
              }
            } else if (
              select.__typename?.() === "FlowNode" &&
              rootQuery().drag()
            ) {
              // Drag node
              console.log("Drag node");
              const mouseBlockDragPos = rootQuery().mouseBlockDragPos;
              if (mouseBlockDragPos?.()) {
                const prevX = mouseBlockDragPos()!.clientX();
                const prevY = mouseBlockDragPos()!.clientY();
                mouseBlockDragPos.set(() => ({
                  clientX,
                  clientY,
                }));
                const coef = getCurrentBotFlowVersion()?.().zoom().value();
                if (typeof coef !== "number") {
                  throw new TypeError("zoom.value must be a number");
                }
                const dx = (clientX - prevX) / coef;
                const dy = (clientY - prevY) / coef;
                const selectedNode = select as RecursiveFunc<FlowNode>;
                selectedNode.pos.set((pos) => ({
                  x: pos().x() + dx,
                  y: pos().y() + dy,
                }));
                // TODO untie if far away
              }
            }
          }
        }
        // dispatch(
        //   actions.canvasMouseMove({
        //     clientX,
        //     clientY,
        //     movementX,
        //     movementY,
        //   })
        // );
        // dispatch(toggleAvailablePortToConnectThunk());
      }}
      onMouseEnter={(e) => {
        const { clientX, clientY } = e;
        // console.log("enter");
        // dispatch(
        //   addNewNode({
        //     clientX,
        //     clientY,
        //   })
        // );
      }}
      style={{ backgroundColor: `rgba(251, 251, 251, ${opacity}%)` }}
    >
      <BackgroundDiv
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: `blur(${blur / 10}px)`,
        }}
      />
      <DrawflowZoomArea />
      <CommitFlowButton
        onClick={(e) => {
          e.preventDefault();
          // dispatch(postFlowVersion());
        }}
      >
        Commit
      </CommitFlowButton>
      <InnerDrawflow
        ref={flowRef}
        style={
          {
            // transform: `translate(${x}px, ${y}px) scale(${zoom.value})`,
          }
        }
      >
        <NodeList />
        <ConnectionList />
        {/*{newPathDirection && <NewPath />}*/}
      </InnerDrawflow>
    </ParentDrawflow>
  );
};
