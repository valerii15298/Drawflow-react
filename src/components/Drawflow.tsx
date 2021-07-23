import { useEffect, useRef } from "react";
import styled from "styled-components";
import tilePng from "../assets/tile.png";
import { postFlowVersion } from "../redux/api";
import { actions } from "../redux/drawflowSlice";
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
} from "../redux/hooks";
import { useActiveFlow } from "../redux/selectors";
import {
  addNewNode,
  canvasShapeUpdated,
  insertCopiedNode,
  setStateAction,
} from "../redux/store";
import { canvasShape, LocalStorageKey } from "../types";
import { ConnectionList } from "./ConnectionList";
import DrawflowZoomArea from "./DrawflowZoomArea";
import { NewPath } from "./NewPath";

import { NodeList } from "./NodeList";

const ParentDrawflow = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url(${tilePng});
  background-repeat: repeat;
  background-size: 30px 30px;
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
  return;
  const [x, y] = getComputedStyle(el)
    .transform.match(/^matrix\((.+)\)$/)?.[1]
    .split(",")
    .slice(-2)
    .map(Number) || [0, 0];
  el.style.transform = `translate(${x + dx}px, ${y + dy}px) scale(${scale})`;
};

const BackgroundDiv = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

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

const CommitFlowButton = styled.button`
  padding: 5px 10px;
  font-style: italic;
  font-size: 16px;
  top: 10px;
  position: absolute;
  cursor: pointer;
  z-index: 50;
  border: 1px solid #e8e8ef;
  border-radius: 5px;
  color: #fff;
  background-color: #217ce8;
  left: 10px;
`;
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
    dispatch(actions.align());
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
      onMouseUp={() => dispatch(actions.canvasMouseUp())}
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
      }}
      onMouseEnter={(e) => {
        const { clientX, clientY } = e;
        // console.log("enter");
        dispatch(
          addNewNode({
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
