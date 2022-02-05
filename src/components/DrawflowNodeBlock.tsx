import { gql } from "@apollo/client";
import { useEffect, useRef } from "react";
import { useBotFlowQuery } from "../generated/apollo";
import { useData } from "../graphql/apollo/useData";
import { useFragment } from "../graphql/apollo/useFragment";

import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  useDrag,
  useNode,
  useNodeIsSelected,
  useNodePos,
} from "../redux/selectors";
import { portType } from "../types";
import { Block } from "./NodeComponents";
import { Ports } from "./Ports";
import { BlockStyled } from "./StyledComponents";

const DrawflowNodeBlock = ({ id }: { id: number }) => {
  // console.log(`Render node id: ${id}`);
  // return null;

  const drag = useDrag();
  const nodeId = useAppSelector((s) => selectActiveDrawflow(s).nodeId);
  //${Math.random().toString().replaceAll(".", "_")}
  const { data } = useData();

  const pos = useNodePos(id);

  const selected = useNodeIsSelected(id);

  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const node = useNode(id);
  const { port } = node;

  // // move to resize observer
  useEffect(() => {
    if (ref.current) {
      const { offsetHeight, offsetWidth } = ref.current;
      dispatch(
        actions.nodeSize({
          height: offsetHeight,
          width: offsetWidth,
          id,
        })
      );
      // dispatch(actions.align());
      // console.log(`align node ${id}`);
    }
  }, []);

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
          pos: {
            x,
            y,
          },
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
  }, []);

  // if (loading) return <div>Loading</div>;
  // if (error) return <div>Error</div>;
  // if (!data) return <div>No data</div>;
  // const node = data.botFlow?.versions[0].nodes[0];
  // if (!node) return <div>No node</div>;
  // const selected = node.selected;
  // const pos = node.pos;

  return (
    <BlockStyled
      selected={selected}
      ref={ref}
      style={{
        left: pos.x,
        top: pos.y,
        // ...(node.isSub ? subnodeStyle : nodeStyle),
      }}
      isSub={node.isSub}
      onMouseDown={(e) => {
        e.stopPropagation();
        const { clientX, clientY } = e;
        dispatch(
          actions.select({
            type: "node",
            selectId: id,
          })
        );
        dispatch(
          actions.setMouseBlockDragPos({
            clientX,
            clientY,
          })
        );
      }}
      onContextMenu={() => {
        // TODO show delete button
      }}
      onDoubleClick={() => {
        // show node settings
      }}
    >
      <div style={{ color: "blue" }}>
        {node.id}:{node.positionNumber}
      </div>
      <Block {...node} />
      <Ports id={id} port={port} type={portType.in} />
      <Ports id={id} port={port} type={portType.out} />
    </BlockStyled>
  );
};

export default DrawflowNodeBlock;
