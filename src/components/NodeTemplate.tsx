import { useRef } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { dragTemplate } from "../redux/store";
import { MessageSvg } from "../svg";

const NodeDiv = styled.div`
  display: grid;
  place-items: center;
  padding: 0.5em;
  background-color: white;
  box-shadow: 0px 4px 30px rgb(22 33 74 / 25%);
  border-radius: 5px;
  :hover {
    background-color: red;
    box-shadow: 0px 4px 30px rgb(22 33 74 / 15%);
    background-color: #fff;
  }
`;

export const NodeTemplate = (props: any) => {
  const { name, type, value, id } = props;
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const canvas = useAppSelector((s) => s.canvas);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragTemplate === undefined) {
      return;
    }
    dispatch(dragTemplate(id));
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
        console.error("Canvas is not ready! Cannnot drag template");
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
      },
      { once: true }
    );
    const { height, width } = getComputedStyle(current);
    cloned.style.height = height;
    cloned.style.width = width;
  };

  return (
    <NodeDiv ref={ref} onMouseDownCapture={onClick}>
      <MessageSvg />
      {value}
    </NodeDiv>
  );
};
