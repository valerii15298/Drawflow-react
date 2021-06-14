import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { addNewNode, fetchFlowVersion } from "../redux/store";
import DrawflowAdditionalArea from "./ButtonArea/DrawflowAdditionalArea";
import DrawflowZoomArea from "./ButtonArea/DrawflowZoomArea";
import { NewPath } from "./NewPath";

import { NodeList } from "./NodeList";
import { ConnectionList } from "./ConnectionList";
import styled from "styled-components";

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
  const {
    config: {
      canvasTranslate: { x, y },
      zoom,
    },
    newPathDirection,
  } = useAppSelector(selectActiveDrawflow);
  // console.log(`Render Drawflow`)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFlowVersion());
  }, [dispatch]);

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
        className="drawflow"
        style={{
          transform: `translate(${x}px, ${y}px) scale(${zoom.value})`,
        }}
      >
        <NodeList />
        <ConnectionList />
        {newPathDirection && <NewPath />}
      </InnerDrawflow>
    </ParentDrawflow>
  );
};
