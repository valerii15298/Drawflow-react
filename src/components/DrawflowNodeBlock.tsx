import { useEffect, useMemo, useRef } from "react";
import { node, portType, pureNode } from "../types";

import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { createDraftSafeSelector } from "@reduxjs/toolkit";
import styled, { css } from "styled-components";
import { Round } from "./NodeComponents";
import { subnodeStyle } from "../styles";
import { Ports } from "./Ports";
import { useSelector } from "react-redux";

const isSelected = (id: number) =>
  createDraftSafeSelector(
    selectActiveDrawflow,
    ({ selectId }) => id === selectId
  );

const BlockStyled = styled.div<{
  isSub: boolean;
  selected: boolean;
}>`
  display: inline-block;
  position: absolute;
  padding: 5px;
  width: 200px;
  min-height: 60px;
  background-color: #d3d3d3;
  z-index: 1;
  cursor: move;

  ${({ isSub }) =>
    isSub &&
    css`
      height: ${subnodeStyle.height}px;
      width: ${subnodeStyle.width}px;
    `}
  ${({ selected }) =>
    selected &&
    css`
      box-shadow: 0 2px 15px 2px #cacaca;
      z-index: 2;
    `};
`;

const selectNode = (id: number) => {
  let obj: pureNode | {} = {};
  return createDraftSafeSelector(selectActiveDrawflow, (state): pureNode => {
    const tmp: pureNode = { ...state.drawflow[id], pos: undefined };
    for (const key in tmp) {
      if (key !== "pos") {
        //@ts-ignore
        if (JSON.stringify(tmp[key]) !== JSON.stringify(obj[key])) {
          // console.log({ obj, tmp });
          obj = {};
          Object.assign(obj, tmp);
          // obj = { ...tmp };
          return obj as pureNode;
        }
      }
    }
    return obj as pureNode;
  });
};

const DrawflowNodeBlock = ({ id }: { id: number }) => {
  // console.log(`Render node id: ${id}`);
  // return null;
  const {
    nodeId,
    config: { drag },
    drawflow: {
      [id]: { pos },
    },
  } = useAppSelector(selectActiveDrawflow);

  const selectIsSelected = useMemo(() => isSelected(id), [id]);
  const selected = useAppSelector(selectIsSelected);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const select_node = useMemo(() => selectNode(id), [id]);
  const node = useSelector(select_node);
  const { port } = node;

  useEffect(() => {
    if (ref.current) {
      const { offsetHeight, offsetWidth } = ref.current;
      dispatch(
        actions.nodeSize({ height: offsetHeight, width: offsetWidth, id })
      );
      dispatch(actions.align());
      // console.log("align node");
    }
  }, [dispatch, id, node]);

  useEffect(() => {
    const getPortPos = (type: portType, i: number, elmt: Element) => {
      const key = `${id}_${type}_${i}`;
      const x = parseInt(getComputedStyle(elmt).left) + pos.x;
      const y = parseInt(getComputedStyle(elmt).top) + pos.y;

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
  }, [dispatch, id, pos.x, pos.y]);

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

  return (
    <BlockStyled
      selected={selected}
      ref={ref}
      style={{ left: pos.x, top: pos.y }}
      isSub={node.isSub}
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
      <Round {...node} {...pos} />

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
              dispatch(actions.toggleChildren({ id }));
            }}
          >
            toggle children
          </div>
        </>
      )}
      <Ports id={id} port={port} type={portType.in} />
      <Ports id={id} port={port} type={portType.out} />
      <button
        style={
          {
            // display: showButton === id ? "block" : "none"
          }
        }
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        X
      </button>
    </BlockStyled>
  );
};

export default DrawflowNodeBlock;
