import styled from "styled-components";
import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";

const ZoomArea = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 1;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  font-size: 0.9em;
  margin: 0.1em;
  padding: 0.1em 0.5em;
  display: inline-grid;
  place-items: center;
`;

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
