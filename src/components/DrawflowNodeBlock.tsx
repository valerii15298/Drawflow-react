import { useEffect, useRef } from "react";
import { portType } from "../types";

import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import styled, { css } from "styled-components";
import { Round } from "./NodeComponents";
import { subnodeStyle } from "../styles";
import { Ports } from "./Ports";
import {
  useDrag,
  useNode,
  useNodeIsSelected,
  useNodePos,
} from "../redux/selectors";

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

const DrawflowNodeBlock = ({ id }: { id: number }) => {
  // console.log(`Render node id: ${id}`);
  // return null;

  const drag = useDrag();
  const nodeId = useAppSelector((s) => selectActiveDrawflow(s).nodeId);

  const pos = useNodePos(id);

  const selected = useNodeIsSelected(id);
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const node = useNode(id);
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

  // update ports positions
  useEffect(() => {
    const getPorts = (type: portType, box: HTMLDivElement) => {
      const puts = Array.from(
        (box.querySelector(`.${type}puts`) as HTMLDivElement).children
      );
      return puts.map((elmt, portId) => {
        const x = parseInt(getComputedStyle(elmt).left) + pos.x;
        const y = parseInt(getComputedStyle(elmt).top) + pos.y;

        return {
          nodeId: id,
          pos: { x, y },
          portId: portId + 1,
          type,
        };
      });
    };

    if (ref.current) {
      const inputs = getPorts(portType.in, ref.current);
      const outputs = getPorts(portType.out, ref.current);
      dispatch(actions.pushPorts([...inputs, ...outputs]));
    }
  }, [dispatch, id, pos]);

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
      <button>X</button>
    </BlockStyled>
  );
};

export default DrawflowNodeBlock;
