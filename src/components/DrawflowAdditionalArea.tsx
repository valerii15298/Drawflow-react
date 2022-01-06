import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Div, Button } from "./StyledComponents";

const DrawflowAdditionalArea = () => {
  const editLock = useAppSelector((s) => selectActiveDrawflow(s).editLock);
  const dispatch = useAppDispatch();

  return (
    <Div>
      {!editLock && <Button>Clear</Button>}
      <Button onClick={() => dispatch(actions.setEditLock(!editLock))}>
        {editLock ? "UnLock" : "Lock"}
      </Button>
    </Div>
  );
};

export default DrawflowAdditionalArea;
