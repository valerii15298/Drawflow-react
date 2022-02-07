import { EventEmitter } from "eventemitter3";
import gql from "graphql-tag";
import { useEffect, useRef } from "react";
import { TemplateNodeFragmentDoc } from "../generated/graphql-request";
import { cache } from "../graphql/apollo";
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
import { canvasShape, LocalStorageKey, pureTemplateNode } from "../types";
import { ConnectionList } from "./ConnectionList";
import DrawflowZoomArea from "./DrawflowZoomArea";
import { NewPath } from "./NewPath";

import { NodeList } from "./NodeList";
import {
  BackgroundDiv,
  CommitFlowButton,
  InnerDrawflow,
  ParentDrawflow,
} from "./StyledComponents";

import gg from "../graphql/operations.graphql";

// console.log({ gg });

const updateTransform = (
  el: HTMLElement,
  dx: number,
  dy: number,
  scale: number
) => {
  // return;
  const [x, y] = getComputedStyle(el)
    .transform.match(/^matrix\((.+)\)$/)?.[1]
    .split(",")
    .slice(-2)
    .map(Number) || [0, 0];
  el.style.transform = `translate(${x + dx}px, ${y + dy}px) scale(${scale})`;
};

export const eventEmitter = new EventEmitter();

const useBackground = () => {
  const dispatch = useAppDispatch();
  const [backgroundOpacity] = useLocalStorage(
    LocalStorageKey.backgroundOpacity,
    50
  );
  const [backgroundBlur] = useLocalStorage(LocalStorageKey.backgroundBlur, 50);
  const [backgroundImageUrl] = useLocalStorage(
    LocalStorageKey.backgroundImageUrl,
    ""
  );

  useEffect(() => {
    dispatch(
      setStateAction({
        windowConfig: {
          background: {
            opacity: backgroundOpacity,
            blur: backgroundBlur,
            imageUrl: backgroundImageUrl,
          },
        },
      })
    );
  }, []);
};

export const Drawflow = () => {
  // console.log("Render Drawflow");
  // return null;
  useBackground();

  const activeFlow = useActiveFlow();

  const {
    config: {
      canvasTranslate: { x, y },
      zoom,
    },
    newPathDirection,
    canvasDrag,
  } = activeFlow;

  const dispatch = useAppDispatch();

  const flowRef = useRef<HTMLDivElement>(null);
  const precanvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // dispatch(alignCurrentFlow());
    dispatch(actions.alignCurrentFlow());
  }, []);

  useEffect(() => {
    const { current: flowDiv } = flowRef;
    if (flowDiv) {
      // console.log(flowDiv.style.transform);
      updateTransform(flowDiv, 0, 0, zoom.value);
    }
  }, [canvasDrag, zoom.value]);

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
      dispatch(canvasShapeUpdated(payload));
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
      dispatch(setStateAction({ precanvas: payload }));
    }
  });

  const { opacity, blur, imageUrl } = useAppSelector(
    (s) => s.windowConfig.background
  );

  const dragTemplate = useAppSelector((s) => s.dragTemplate);

  return (
    <ParentDrawflow
      ref={precanvas}
      className={"drawflow"}
      tabIndex={0}
      onKeyDownCapture={(e) => {
        if (e.key === "Delete") {
          dispatch(actions.deletePath());
          dispatch(actions.deleteNode());
        }
        if (e.ctrlKey && e.key === "c") {
          dispatch(actions.copyNode());
        }
        if (e.ctrlKey && e.key === "v") {
          dispatch(insertCopiedNode());
        }
      }}
      onMouseDown={() => {
        dispatch(actions.canvasDrag(true));
        dispatch(actions.unSelect());
      }}
      onMouseUp={() => {
        dispatch(actions.canvasMouseUp());
        // dispatch(alignCurrentFlow());
        dispatch(actions.alignCurrentFlow());
      }}
      onMouseMove={(e) => {
        const { clientX, clientY, movementX, movementY } = e;
        const { current: flowDiv } = flowRef;
        if (canvasDrag && flowDiv) {
          updateTransform(flowDiv, movementX, movementY, zoom.value);
        }
        dispatch(
          actions.canvasMouseMove({
            clientX,
            clientY,
            movementX,
            movementY,
          })
        );
        // dispatch(toggleAvailablePortToConnectThunk());
      }}
      onMouseEnter={(e) => {
        const { clientX, clientY } = e;
        eventEmitter.emit("enter");
        if (typeof dragTemplate !== "number") return;
        const data = cache.readFragment({
          id: `TemplateNode:${dragTemplate}`,
          fragment: gql`
            fragment templateDrag on TemplateNode {
              ...templateNode
            }
            ${TemplateNodeFragmentDoc}
          `,
          fragmentName: "templateDrag",
        });
        if (!data) {
          throw new TypeError("Fragment not found");
        }
        const { info, NodeProps } = data as pureTemplateNode;
        console.log({
          info,
          NodeProps,
        });
        dispatch(
          addNewNode({
            templateNode: {
              NodeProps,
              info,
            },
            clientX,
            clientY,
          })
        );
      }}
      style={{ backgroundColor: `rgba(251, 251, 251, ${opacity}%)` }}
    >
      <BackgroundDiv
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: `blur(${blur / 10}px)`,
        }}
      />
      {/*<DrawflowAdditionalArea />*/}
      <DrawflowZoomArea />
      <CommitFlowButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(postFlowVersion());
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
        {newPathDirection && <NewPath />}
      </InnerDrawflow>
    </ParentDrawflow>
  );
};
