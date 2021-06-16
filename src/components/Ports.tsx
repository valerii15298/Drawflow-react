import styled, { css } from "styled-components";
import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNodeIsSub } from "../redux/selectors";
import { portType, port } from "../types";

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

export const Ports = (props: { type: portType; id: number; port: port }) => {
  const { id, port, type } = props;
  const dispatch = useAppDispatch();
  const portToConnect = useAppSelector(
    (s) => selectActiveDrawflow(s).portToConnect
  );
  const isSub = useNodeIsSub(id);
  let arr = [];

  for (let i = 1; i <= port[type]; i++) {
    const key = `${type}put-${i}`;
    const portKey = `${id}_${type}_${i}`;
    const StyledPort = styledPorts[type][i - 1];
    const port = (
      <StyledPort
        isSub={isSub}
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
        <Indicator visible={!!(portToConnect === portKey && " ")} />
      </StyledPort>
    );
    arr.push(port);
  }

  return <div className={`${type}puts`}>{arr}</div>;
};
