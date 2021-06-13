import styled from "styled-components";
import { actions, selectActiveDrawflow } from "../../redux/drawflowSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Div = styled.div`
  position: absolute;
  top: 10px;
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
`;

const DrawflowAdditionalArea = () => {
  const editLock = useAppSelector((s) => selectActiveDrawflow(s).editLock);
  const dispatch = useAppDispatch();

  return (
    <Div className="drawflow-additional">
      {!editLock && (
        <Button
          className="drawflow-additional-button"
          onClick={() => console.log("clear")}
        >
          Clear
        </Button>
      )}
      <Button
        className="drawflow-additional-button"
        onClick={() => dispatch(actions.setEditLock(!editLock))}
      >
        {editLock ? "UnLock" : "Lock"}
      </Button>
    </Div>
  );
};

export default DrawflowAdditionalArea;
