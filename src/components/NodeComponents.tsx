// import { useState } from "react";
// import { Grabme, More } from "../svg"

import { setStateAction } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";
import { ThreeDots } from "../svg";
import { mainWindow, pureNode } from "../types";
import { BlockDiv, TapMoreButton } from "./StyledComponents";

export const Block = (props: pureNode) => {
  // console.log(props);
  const dispatch = useAppDispatch();

  return (
    <BlockDiv>
      {/*<div>{props.id}</div>*/}
      {/*<span>{props.data.flow_node.node_name}</span>*/}
      <span>id: {props.id}</span>
      <TapMoreButton
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // console.log({ props });
          dispatch(
            setStateAction({
              windowConfig: {
                id: props.id,
                mainId: mainWindow.nodeSettings,
              },
            })
          );
        }}
      >
        <ThreeDots height={3} width={12} />
      </TapMoreButton>
    </BlockDiv>
  );
};
