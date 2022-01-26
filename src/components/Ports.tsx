import styled, { css } from "styled-components";
import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";
import { useNodeIsSub, usePortIsActive } from "../redux/selectors";
import { alignCurrentFlow } from "../redux/thunks/alignWorkerThunk";
import { port, portType, purePort } from "../types";
import { MouseEvent } from "react";

import Tooltip from "@mui/material/Tooltip";

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

  const toggleSubnodes = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(actions.toggleSubnodes({ id: nodeId }));
    dispatch(alignCurrentFlow());
    e.stopPropagation();
  };

  const toggleChildren = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(actions.toggleChildren({ id: nodeId }));
    dispatch(alignCurrentFlow());
    e.stopPropagation();
  };

  const comp = (
    <StyledPort
      isSub={isSub}
      onMouseDown={(e) => {
        e.stopPropagation();
        dispatch(
          actions.selectPort({
            type,
            nodeId,
            portId,
          })
        );
      }}
      onMouseUp={() => {
        dispatch(
          actions.portMouseUp({
            nodeId,
            portId,
            PortType: type,
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

export const Ports = (props: { type: portType; id: number; port: port }) => {
  const { id, port, type } = props;
  const arr = [];

  for (let i = 1; i <= port[type]; i++) {
    arr.push(<Port key={i} nodeId={id} portId={i} type={type} />);
  }

  return <div className={`${type}puts`}>{arr}</div>;
};
