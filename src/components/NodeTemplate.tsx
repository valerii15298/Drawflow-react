import { useRef } from "react";
import { setStateAction } from "../redux/actions";
import { getFileUrl } from "../redux/api";
import { useAppDispatch } from "../redux/hooks";
import { ThreeDots } from "../svg";
import { mainWindow } from "../types";
import { eventEmitter } from "./Drawflow";
import { formType } from "./NodeSettings/TemplateNodeSettings";
import {
  NodeDiv,
  NodeImg,
  NodeTitleSpan,
  TapMoreButton,
} from "./StyledComponents";

export const NodeTemplate = (props: formType) => {
  const { id, order } = props;
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(setStateAction({ dragTemplate: id }));
    const { current } = ref;
    if (!current) {
      throw new TypeError("No node to copy");
    }
    const { left, top } = current.getBoundingClientRect();
    const dx = e.clientX - left;
    const dy = e.clientY - top;

    const cloned = current.cloneNode(true) as HTMLDivElement;
    cloned.style.position = "absolute";
    cloned.style.left = left + window.scrollX + "px";
    cloned.style.top = top + window.scrollY + "px";
    document.body.appendChild(cloned);
    cloned.style.pointerEvents = "none";
    const drag = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cloned.style.left = clientX - dx + window.scrollX + "px";
      cloned.style.top = clientY - dy + window.scrollY + "px";
    };
    eventEmitter.on("enter", () => {
      document.removeEventListener("mousemove", drag);
      cloned.parentNode?.removeChild(cloned);
    });
    document.addEventListener("mousemove", drag);

    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", drag);
        cloned.parentNode?.removeChild(cloned);
        dispatch(setStateAction({ dragTemplate: null }));
      },
      { once: true }
    );
    const { height, width } = getComputedStyle(current);
    cloned.style.height = height;
    cloned.style.width = width;
  };

  return (
    <NodeDiv style={{ order }} ref={ref} onMouseDown={onClick}>
      <TapMoreButton
        onMouseDown={() => {
          // console.log({ nodes_id });
          dispatch(
            setStateAction({
              windowConfig: {
                id,
                mainId: mainWindow.templateNodeSettings,
              },
            })
          );
        }}
      >
        <ThreeDots height={3} width={12} />
      </TapMoreButton>
      <NodeImg
        onDragOver={(e) => {
          const event = e;
          event.stopPropagation();
          event.preventDefault();
        }}
        onDrop={async (e) => {
          e.stopPropagation();
          e.preventDefault();
          // const corsUrl = "https://drawflow.ml:8080/";
          const icon_link = await getFileUrl(e.dataTransfer.files[0]);
          // const icon_link =
          //   "https://tastypoints.io/akm/tasty_images/6WBIrTaO.png";
          // dispatch(updateTemplateNode({ nodes_id, icon_link }));
        }}
        draggable={false}
        src={props.info.iconLink}
      />
      <NodeTitleSpan>{props.info.name}</NodeTitleSpan>
    </NodeDiv>
  );
};
