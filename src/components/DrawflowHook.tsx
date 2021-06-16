import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";
import { useEffect, useRef } from "react";
import { addNewNode, fetchFlowVersion } from "../redux/store";
import DrawflowAdditionalArea from "./DrawflowAdditionalArea";
import DrawflowZoomArea from "./DrawflowZoomArea";
import { NewPath } from "./NewPath";

import { NodeList } from "./NodeList";
import { ConnectionList } from "./ConnectionList";
import styled from "styled-components";
import { useActiveFlow } from "../redux/selectors";

const ParentDrawflow = styled.div`
  position: relative;
  height: 100%;
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
          dispatch(actions.insertCopiedNode());
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
          // console.log(flowDiv.style.transform);
          const [x, y] = getComputedStyle(flowDiv)
            .transform.match(/^matrix\((.+)\)$/)?.[1]
            .split(",")
            .slice(-2)
            .map(Number) || [0, 0];
          flowDiv.style.transform = `translate(${x + movementX}px, ${
            y + movementY
          }px) scale(${zoom.value})`;
        }
        dispatch(
          actions.canvasMouseMove({ clientX, clientY, movementX, movementY })
        );
      }}
      onMouseEnter={(e) => {
        const { clientX, clientY } = e;
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
