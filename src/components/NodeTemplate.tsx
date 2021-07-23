import { useRef } from "react";
import styled from "styled-components";
import { dragTemplate, setStateAction } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ThreeDots } from "../svg";
import { block, mainWindow } from "../types";

export const TapMoreButton = styled.button`
  position: absolute;
  right: 0.2em;
  top: 0.2em;
  display: grid;
  place-items: center;
  padding: 8px 8px 4px 4px;
  border: 0;
  background: 0;

  svg {
    /* stroke: red; */

    circle {
      fill: black;
    }
  }

  :hover {
    background-color: #d8d8d8;
    cursor: pointer;
    border-radius: 0.2em;
  }
`;

export const NodeDiv = styled.div`
  /* width: min-content; */
  position: relative;
  display: grid;
  place-items: center;
  padding: 0.5em;

  background-color: white;
  box-shadow: 0 4px 30px rgb(22 33 74 / 25%);
  border-radius: 5px;

  :hover {
    box-shadow: 0 4px 30px rgb(22 33 74 / 15%);
    background-color: #f8f8f8;
  }
`;

const NodeImg = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const NodeTitleSpan = styled.span``;

export const NodeTemplate = (props: block) => {
  const { nodes_id, order } = props;
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const canvas = useAppSelector((s) => s.precanvas);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragTemplate === undefined) {
      return;
    }
    dispatch(dragTemplate(nodes_id));
    const { current } = ref;
    if (!current) {
      console.error("No node to copy");
      return;
    }
    const { left, top } = current.getBoundingClientRect();
    const dx = e.clientX - left;
    const dy = e.clientY - top;

    const cloned = current.cloneNode(true) as HTMLDivElement;
    cloned.style.position = "absolute";
    cloned.style.left = left + window.scrollX + "px";
    cloned.style.top = top + window.scrollY + "px";
    document.body.appendChild(cloned);
    const drag = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (!canvas) {
        console.error("Canvas is not ready! Cannot drag template");
        return;
      }
      if (clientX >= canvas.x && clientY >= canvas.y) {
        document.removeEventListener("mousemove", drag);
        cloned.parentNode?.removeChild(cloned);
        return;
      }
      cloned.style.left = clientX - dx + window.scrollX + "px";
      cloned.style.top = clientY - dy + window.scrollY + "px";
    };
    document.addEventListener("mousemove", drag);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", drag);
        cloned.parentNode?.removeChild(cloned);
        dispatch(dragTemplate(undefined));
      },
      { once: true }
    );
    const { height, width } = getComputedStyle(current);
    cloned.style.height = height;
    cloned.style.width = width;
  };

  return (
    <NodeDiv style={{ order }} ref={ref} onMouseDown={onClick}>
      <NodeImg src={props.icon_link} />
      <NodeTitleSpan>{props.name}</NodeTitleSpan>
      <TapMoreButton
        onMouseDown={() => {
          // console.log({ nodes_id });
          dispatch(
            setStateAction({
              windowConfig: {
                id: nodes_id,
                mainId: mainWindow.templateNodeSettings,
              },
            })
          );
        }}
      >
        <ThreeDots height={3} width={12} />
      </TapMoreButton>
    </NodeDiv>
  );
};
