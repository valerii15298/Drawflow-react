import { useEffect, useMemo, useRef } from "react";
import { port, portType, stateData } from "../types";

import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Round } from "./NodeComponents";
import { subnodeStyle } from "../styles";
import styled, { css } from "styled-components";
import { createDraftSafeSelector } from "@reduxjs/toolkit";

const Indicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  ${({ theme }) =>
    theme.visible ||
    css`
      opacity: 0;
      transform: scale(0);
    `}
`;

const selectPortToConnect = createDraftSafeSelector(
  selectActiveDrawflow,
  ({ portToConnect }) => portToConnect
);

const selectIsSub = (id: number) =>
  createDraftSafeSelector(
    selectActiveDrawflow,
    ({
      drawflow: {
        [id]: { isSub },
      },
    }) => isSub
  );

const isSelected = (id: number) =>
  createDraftSafeSelector(
    selectActiveDrawflow,
    ({ selectId }) => id === selectId
  );

const portStyle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
`;

const Output1 = styled(portStyle)`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({ theme }) =>
    theme.isSub &&
    css`
      left: 100%;
      top: 50%;
    `}
`;
const Output2 = styled(portStyle)`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({ theme }) =>
    theme.isSub &&
    css`
      display: none;
    `}
`;

const Input1 = styled(portStyle)`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({ theme }) =>
    theme.isSub &&
    css`
      left: 0;
      top: 50%;
    `}
`;
const styledPorts = {
  [portType.in]: [Input1],
  [portType.out]: [Output1, Output2],
};

const Ports = (props: { type: portType; id: number; port: port }) => {
  const { id, port, type } = props;
  const dispatch = useAppDispatch();
  const portToConnect = useAppSelector(selectPortToConnect);
  const isSub = useAppSelector(selectIsSub(id));
  let arr = [];

  for (let i = 1; i <= port[type]; i++) {
    const key = `${type}put-${i}`;
    const portKey = `${id}_${type}_${i}`;
    const StyledPort = styledPorts[type][i - 1];
    const port = (
      <StyledPort
        theme={{ isSub }}
        onMouseDown={(e) => {
          e.stopPropagation();
          dispatch(
            actions.select({
              type,
              portId: i,
              selectId: id,
            })
          );
        }}
        key={key}
        onMouseUp={(e) => {
          dispatch(
            actions.portMouseUp({ nodeId: id, portId: i, PortType: type })
          );
        }}
      >
        <Indicator theme={{ visible: portToConnect === portKey && " " }} />
      </StyledPort>
    );
    arr.push(port);
  }

  return <div className={`${type}puts`}>{arr}</div>;
};

const BlockStyled = styled.div`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: #d3d3d3;
  z-index: 1;
  ${({ theme }) =>
    theme.selected &&
    css`
      box-shadow: 0 2px 15px 2px #cacaca;
      z-index: 2;
    `}
`;

const DrawflowNodeBlock = ({ id }: { id: number }) => {
  // console.log(`Render node id: ${id}`)
  const {
    nodeId,
    config: { drag },
    drawflow: { [id]: node },
  } = useAppSelector(selectActiveDrawflow);

  const selected = useAppSelector(isSelected(id));
  const dispatch = useAppDispatch();
  const { port, pos } = node;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { offsetHeight, offsetWidth } = ref.current;
      dispatch(
        actions.nodeSize({ height: offsetHeight, width: offsetWidth, id })
      );
    }
  }, [dispatch, id, node]);

  useEffect(() => {
    const getPortPos = (type: portType, i: number, elmt: Element) => {
      const key = `${id}_${type}_${i}`;
      const x = parseInt(getComputedStyle(elmt).left) + node.pos.x;
      const y = parseInt(getComputedStyle(elmt).top) + node.pos.y;

      return {
        [key]: { x, y },
      };
    };

    if (ref.current) {
      const inputs = Array.from(
        (ref.current.querySelector(".inputs") as HTMLDivElement).children
      );
      const outputs = Array.from(
        (ref.current.querySelector(".outputs") as HTMLDivElement).children
      );
      let newPorts = {};
      newPorts = Object.assign(
        newPorts,
        inputs.reduce((acc, elmt, i) => {
          return Object.assign(acc, getPortPos(portType.in, i + 1, elmt));
        }, {})
      );
      newPorts = Object.assign(
        newPorts,
        outputs.reduce((acc, elmt, i) => {
          return Object.assign(acc, getPortPos(portType.out, i + 1, elmt));
        }, {})
      );
      dispatch(actions.pushPorts(newPorts));
    }
  }, [dispatch, id, node.pos.x, node.pos.y]);

  useEffect(() => {
    // when add new node shift it to left and up
    if (ref.current && nodeId - 1 === id && drag) {
      const { offsetHeight, offsetWidth } = ref.current;
      dispatch(
        actions.moveNode({
          nodeId: id,
          dx: -offsetWidth * 0.2,
          dy: -offsetHeight * 0.2,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let style = {
    top: pos.y + "px",
    left: pos.x + "px",
    cursor: "move",
  };
  if (node.isSub) {
    style = { ...style, ...subnodeStyle };
  }

  return (
    <BlockStyled
      theme={{ selected }}
      ref={ref}
      style={style}
      onMouseDown={(e) => {
        e.stopPropagation();
        const { clientX, clientY } = e;
        dispatch(actions.select({ type: "node", selectId: id }));
        dispatch(actions.setMouseBlockDragPos({ clientX, clientY }));
      }}
      onContextMenu={(e) => {
        // TODO show delete button
      }}
      onDoubleClick={() => {
        // show node settings
      }}
    >
      <Round {...node} />

      {!node.isSub && (
        <>
          <div
            onClick={() => {
              dispatch(actions.toggleSubnodes({ id }));
            }}
          >
            toggle sub
          </div>
          <div
            onClick={() => {
              console.log(22);
              dispatch(actions.toggleChildren({ id }));
            }}
          >
            toggle children
          </div>
        </>
      )}
      <Ports id={id} port={port} type={portType.in} />
      <Ports id={id} port={port} type={portType.out} />
      {/* <button
            style={{
                display: showButton === id ? "block" : "none"
            }}
            className="drawflow-delete"
            onMouseDown={(e) => { e.stopPropagation(); event.deleteNode() }}
        >X</button> */}
    </BlockStyled>
  );
};

export default DrawflowNodeBlock;
