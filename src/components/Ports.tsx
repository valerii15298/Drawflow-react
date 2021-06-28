import styled, { css } from "styled-components";
import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";
import { useNodeIsSub, usePortIsActive } from "../redux/selectors";
import { portType, port, purePort } from "../types";

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
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
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
  return (
    <StyledPort
      isSub={isSub}
      onMouseDown={(e) => {
        e.stopPropagation();
        dispatch(actions.selectPort({ type, nodeId, portId }));
      }}
      onMouseUp={() => {
        dispatch(actions.portMouseUp({ nodeId, portId, PortType: type }));
      }}
    >
      <Indicator visible={isActive} />
    </StyledPort>
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
