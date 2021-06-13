import styled from "styled-components";
import { actions } from "../../redux/drawflowSlice";
import { useAppDispatch } from "../../redux/hooks";

const ZoomArea = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 3px 10px;
`;

const DrawflowZoomArea = () => {
  const dispatch = useAppDispatch();

  return (
    <ZoomArea className="drawflow-zoom">
      <Button
        className="drawflow-zoom-button"
        onClick={() => dispatch(actions.zoom(true))}
      >
        +
      </Button>
      <Button
        className="drawflow-zoom-button"
        onClick={() => dispatch(actions.zoom(false))}
      >
        -
      </Button>
      <Button
        className="drawflow-zoom-button"
        onClick={() => dispatch(actions.zoom(null))}
      >
        reset
      </Button>
    </ZoomArea>
  );
};

export default DrawflowZoomArea;
