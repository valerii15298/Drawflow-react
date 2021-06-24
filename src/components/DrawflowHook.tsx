import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";
import { useEffect, useRef } from "react";
import {
  addNewNode,
  canvasShapeUpdated,
  fetchFlowVersion,
  insertCopiedNode,
} from "../redux/store";
import DrawflowAdditionalArea from "./DrawflowAdditionalArea";
import DrawflowZoomArea from "./DrawflowZoomArea";
import { NewPath } from "./NewPath";

import { NodeList } from "./NodeList";
import { ConnectionList } from "./ConnectionList";
import styled from "styled-components";
import { useActiveFlow } from "../redux/selectors";
import { canvasShape } from "../types";

const ParentDrawflow = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #282a36;
  background-size: 25px 25px;
  background-image: linear-gradient(to right, #2f323d 1px, transparent 1px),
    linear-gradient(to bottom, #2f323d 1px, transparent 1px);
`;

const InnerDrawflow = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const updateTransform = (
  el: HTMLElement,
  dx: number,
  dy: number,
  scale: number
) => {
  const [x, y] = getComputedStyle(el)
    .transform.match(/^matrix\((.+)\)$/)?.[1]
    .split(",")
    .slice(-2)
    .map(Number) || [0, 0];
  el.style.transform = `translate(${x + dx}px, ${y + dy}px) scale(${scale})`;
};

export const Drawflow = () => {
  console.log(`Render Drawflow`);
  // return null;

  const {
    config: {
      // canvasTranslate: { x, y },
      zoom,
    },
    newPathDirection,
    canvasDrag,
  } = useActiveFlow();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFlowVersion());
  }, [dispatch]);

  const flowRef = useRef<HTMLDivElement>(null);

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
  }, [dispatch, flowRef]);

  return (
    <ParentDrawflow
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
      onMouseDown={(e) => {
        dispatch(actions.canvasDrag(true));
        dispatch(actions.unSelect());
      }}
      onMouseUp={() => dispatch(actions.canvasMouseUp())}
      onMouseMove={(e) => {
        const { clientX, clientY, movementX, movementY } = e;
        const { current: flowDiv } = flowRef;
        if (canvasDrag && flowDiv) {
          updateTransform(flowDiv, movementX, movementY, zoom.value);
        }
        dispatch(
          actions.canvasMouseMove({ clientX, clientY, movementX, movementY })
        );
      }}
      onMouseEnter={(e) => {
        const { clientX, clientY } = e;
        console.log("enter");
        dispatch(addNewNode({ clientX, clientY }));
      }}
    >
      <DrawflowAdditionalArea />
      <DrawflowZoomArea />
      <InnerDrawflow
        ref={flowRef}
        className="drawflow"
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
