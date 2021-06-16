import styled from "styled-components";
import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

const Svg = styled.svg`
  position: absolute;
  overflow: visible;
`;

const StyledPath = styled.path`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }
  fill: none;
  stroke-width: ${({ theme }) => (theme.selected ? 7 : 6)}px;
  stroke: steelblue;
`;

type Props = {
  svgKey?: string;
  d: string;
};

export const Path = (props: Props) => {
  const { svgKey, d } = props;
  const selectId = useAppSelector((s) => selectActiveDrawflow(s).selectId);
  const dispatch = useAppDispatch();

  return (
    <Svg>
      <StyledPath
        theme={{ selected: selectId === svgKey && svgKey }}
        d={d}
        onMouseDown={(e) => {
          if (!svgKey) return;
          e.stopPropagation();
          // if (editLock) return;
          dispatch(actions.select({ type: "path", selectId: svgKey }));
        }}
      ></StyledPath>
    </Svg>
  );
};
