// import { useState } from "react";
// import { Grabme, More } from "../svg"

import styled from "styled-components";
import { block, mainWindow, pureNode } from "../types";
import { setStateAction } from "../redux/store";
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
      {props.data.description}
      <TapMoreButton
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // console.log({ nodes_id });
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
