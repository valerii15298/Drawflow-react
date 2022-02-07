import { useEffect, useRef } from "react";

import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  useDrag,
  useNode,
  useNodeIsSelected,
  useNodePos,
} from "../redux/selectors";
import { Block } from "./NodeComponents";
import { Ports } from "./Ports";
import { BlockStyled } from "./StyledComponents";

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
    }
  }, [dispatch, id, node]);

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
      <Ports id={id} />
    </BlockStyled>
  );
};

export default DrawflowNodeBlock;
