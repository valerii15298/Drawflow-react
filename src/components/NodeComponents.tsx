// import { useState } from "react";
// import { Grabme, More } from "../svg"

import styled from "styled-components";
import { setStateAction } from "../redux/actions";
import { block, mainWindow, pureNode } from "../types";
import { ThreeDots } from "../svg";
import { TapMoreButton } from "./NodeTemplate";
import { useAppDispatch } from "../redux/hooks";

const BlockDiv = styled.div`
  max-height: 100%;
  overflow: hidden;
`;

export const Block = (props: pureNode) => {
  // console.log(props);
  const dispatch = useAppDispatch();

  return (
    <BlockDiv>
      <div>{props.id}</div>
      {/*<span>{props.data.flow_node.node_name}</span>*/}
      <span>{props.data.flow_node.node_description}</span>
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
