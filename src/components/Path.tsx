import styled, { css } from "styled-components";
import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";
import { usePathIsSelected } from "../redux/selectors";

const Svg = styled.svg`
  position: absolute;
  overflow: visible;
`;

const StyledPath = styled.path<{
  selected: boolean;
}>`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }
  fill: none;
  stroke-width: 6px;
  stroke: steelblue;
  ${({ selected }) =>
    selected &&
    css`
      stroke-width: 7px;
      stroke: red;
    `};
`;

type Props = {
  id?: number;
  d: string;
};

export const Path = (props: Props) => {
  const { id, d } = props;
  const selected = usePathIsSelected(id);
  const dispatch = useAppDispatch();

  return (
    <Svg>
      <StyledPath
        selected={selected}
        d={d}
        onMouseDown={(e) => {
          if (id === undefined) return;
          e.stopPropagation();
          // if (editLock) return;
          dispatch(actions.select({ type: "path", selectId: id }));
        }}
      ></StyledPath>
    </Svg>
  );
};
