import Tooltip from "@mui/material/Tooltip";
import { MouseEvent, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNodeIsSub, useNodePos, usePortIsActive } from "../redux/selectors";
import { portType, purePort } from "../types";

const Indicator = styled.div<{ visible: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 60px;
  background-color: #217ce8;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: scale(${({ visible }) => (visible ? 1 : 0)});
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
`;

const portStyle = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  border: 2px solid #cacaca;

  &:hover {
    background: #4ea9ff;
  }
`;

const Output1 = styled(portStyle)<{ isSub: boolean }>`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  ${({ isSub }) =>
    isSub &&
    css`
      left: 100%;
      top: 50%;
    `}
`;
const Output2 = styled(portStyle)<{ isSub: boolean }>`
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({ isSub }) =>
    isSub &&
    css`
      display: none;
    `}
`;

const Input1 = styled(portStyle)<{ isSub: boolean }>`
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  ${({ isSub }) =>
    isSub &&
    css`
      left: 0;
      top: 50%;
    `}
`;
const styledPorts = {
  [portType.in]: [Input1],
  [portType.out]: [Output1, Output2],
};

const Port = (port: purePort) => {
  const { nodeId, portId, type } = port;
  const dispatch = useAppDispatch();
  const isActive = usePortIsActive(port);
  const isSub = useNodeIsSub(nodeId);
  const StyledPort = styledPorts[type][portId - 1];
  const nodePos = useNodePos(nodeId);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      const elmt = ref.current;
      const x = parseInt(getComputedStyle(elmt).left) + nodePos.x;
      const y = parseInt(getComputedStyle(elmt).top) + nodePos.y;
      dispatch(
        actions.pushPort({
          id: port.id,
          pos: {
            x,
            y,
          },
        })
      );
    }
  }, [dispatch, nodePos]);

  const toggleSubnodes = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(actions.toggleSubnodes({ id: nodeId }));
    // dispatch(alignCurrentFlow());
    dispatch(actions.alignCurrentFlow());
    e.stopPropagation();
  };

  const toggleChildren = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(actions.toggleChildren({ id: nodeId }));
    // dispatch(alignCurrentFlow());
    dispatch(actions.alignCurrentFlow());

    e.stopPropagation();
  };

  const comp = (
    <StyledPort
      ref={ref}
      isSub={isSub}
      onMouseDown={(e) => {
        e.stopPropagation();
        dispatch(
          actions.selectPort({
            id: port.id,
          })
        );
      }}
      onMouseUp={() => {
        dispatch(
          actions.portMouseUp({
            id: port.id,
          })
        );
      }}
      onContextMenu={(e) => {
        if (type === "in") {
          return;
        }
        if (portId === 1) {
          toggleChildren(e);
        }
        if (portId === 2) {
          toggleSubnodes(e);
        }
      }}
    >
      <Indicator visible={isActive} />
    </StyledPort>
  );

  if (type === "in" || isSub) {
    return comp;
  }

  const toolTipMap = {
    1: "Right click to toggle children",
    2: "Right click to toggle subnodes",
  };

  if (!(portId in toolTipMap)) {
    throw new Error(`"portId" must be in ${toolTipMap}`);
  }
  return (
    <Tooltip title={toolTipMap[portId as keyof typeof toolTipMap]}>
      {comp}
    </Tooltip>
  );
};

export const Ports = ({ id }: { id: number }) => {
  const ports = useAppSelector((s) =>
    Object.values(selectActiveDrawflow(s).ports).filter((p) => p.nodeId === id)
  );

  const portsIn = ports.filter((p) => p.type === portType.in);
  const portsOut = ports.filter((p) => p.type === portType.out);

  return (
    <>
      <div className={`inputs`}>
        {portsIn.map((p) => (
          <Port key={p.id} {...p} />
        ))}
      </div>
      <div className={`outputs`}>
        {portsOut.map((p) => (
          <Port key={p.id} {...p} />
        ))}
      </div>
    </>
  );
};
