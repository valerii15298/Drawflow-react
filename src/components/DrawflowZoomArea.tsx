import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";
import { ZoomArea, Button } from "./StyledComponents";

const DrawflowZoomArea = () => {
  const dispatch = useAppDispatch();

  return (
    <ZoomArea>
      <Button onClick={() => dispatch(actions.zoom(true))}>+</Button>
      <Button onClick={() => dispatch(actions.zoom(false))}>-</Button>
      <Button onClick={() => dispatch(actions.zoom(null))}>reset</Button>
    </ZoomArea>
  );
};

export default DrawflowZoomArea;
