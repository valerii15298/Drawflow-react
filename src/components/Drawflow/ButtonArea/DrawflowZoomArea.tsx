import { MouseEventHandler } from "react";

type Props = {
    zoomIn: MouseEventHandler,
    zoomOut: MouseEventHandler,
    zoomReset: MouseEventHandler
}

const DrawflowZoomArea = (props: Props) => {
    const { zoomIn, zoomOut, zoomReset } = props;

    return (
        <div className="drawflow-zoom">
            <button className="drawflow-zoom-button" onClick={zoomIn}>+</button>
            <button className="drawflow-zoom-button" onClick={zoomOut}>-</button>
            <button className="drawflow-zoom-button" onClick={zoomReset}>reset</button>
        </div>
    );
}

export default DrawflowZoomArea;
