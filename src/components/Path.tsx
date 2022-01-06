import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";
import { usePathIsSelected } from "../redux/selectors";
import { StyledPath, Svg } from "./StyledComponents";

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
          dispatch(
            actions.select({
              type: "path",
              selectId: id,
            })
          );
        }}
      />
    </Svg>
  );
};
