import { actions } from "../../redux/drawflowSlice";
import { useAppDispatch } from "../../redux/hooks";

const DrawflowZoomArea = () => {
    const dispatch = useAppDispatch()

    return (
        <div className="drawflow-zoom">
            <button className="drawflow-zoom-button" onClick={() => dispatch(actions.zoom(true))}>+</button>
            <button className="drawflow-zoom-button" onClick={() => dispatch(actions.zoom(false))}>-</button>
            <button className="drawflow-zoom-button" onClick={() => dispatch(actions.zoom(null))}>reset</button>
        </div>
    )
}

export default DrawflowZoomArea;
