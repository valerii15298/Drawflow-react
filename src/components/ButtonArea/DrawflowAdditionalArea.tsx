import { actions, selectActiveDrawflow } from "../../redux/drawflowSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const DrawflowAdditionalArea = () => {
    const editLock = useAppSelector(s => selectActiveDrawflow(s).editLock)
    const dispatch = useAppDispatch()

    return (
        <div className="drawflow-additional">
            {!editLock &&
                <>
                    <button className="drawflow-additional-button" onClick={() => console.log('clear')}>Clear</button>
                </>
            }
            <button className="drawflow-additional-button" onClick={() => dispatch(actions.setEditLock(!editLock))}>{editLock ? "UnLock" : "Lock"}</button>
        </div>
    );
}

export default DrawflowAdditionalArea;
