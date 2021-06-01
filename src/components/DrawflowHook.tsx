import handler from "./drawflowHandler"
import { actions, selectActiveDrawflow } from '../redux/drawflowSlice'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import Connection from "./Connection";
import DrawflowNodeBlock from "./DrawflowNodeBlock";
import { useEffect } from "react";
import { fetchFlowVersion } from "../redux/store";
import DrawflowAdditionalArea from "./ButtonArea/DrawflowAdditionalArea";
import DrawflowZoomArea from "./ButtonArea/DrawflowZoomArea";
import { testNode } from "../Mock";

export const NewPath = () => {
    const state = useAppSelector(selectActiveDrawflow)

    const { select, config, ports, selectId, newPathDirection } = state;
    if (!select?.portId) { console.error(`Select port id not set!`); return null }
    const startKey = `${selectId}_out_${select.portId}`;

    if (!ports[startKey]) { console.error(`Start port key not exist`); return null }
    if (!newPathDirection) { console.error(`Path direction null`); return null }

    const start = {
        x: ports[startKey].x,
        y: ports[startKey].y,
    }
    const zoom = config.zoom.value;
    const { clientX, clientY } = newPathDirection;
    const end = handler.getPos(clientX, clientY, zoom);
    const d = handler.createCurvature(start, end, "openclose");

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        className="drawflow-connection"
    >
        <Connection.Path
            d={d}
        />
    </svg>

}

export const ConnectionList = () => {
    const { connections, ports } = useAppSelector(selectActiveDrawflow)

    const conns = Object.entries(connections).map(([key]) => {
        // key: fromId_portNum_toId_portNum
        const arr = key.split("_");
        const startKey = `${arr[0]}_out_${arr[1]}`;
        const endKey = `${arr[2]}_in_${arr[3]}`;

        if (!ports[startKey] || !ports[endKey]) {
            // console.error(`No such connection`, key);
            return null
        };

        const start = {
            x: ports[startKey].x,
            y: ports[startKey].y,
        }
        const end = {
            x: ports[endKey].x,
            y: ports[endKey].y,
        }
        const d = handler.createCurvature(start, end, "openclose")
        return <div key={key}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="drawflow-connection"
            >
                <Connection.Path
                    svgKey={key}
                    d={d}
                />
            </svg>
        </div>

    })
    return <>{conns}</>
}

export const NodeList = () => {
    const drawflow = useAppSelector(s => selectActiveDrawflow(s).drawflow)

    return <>{Object.values(drawflow).map((node) => {
        return <DrawflowNodeBlock
            // updateRef={(elem: HTMLElement) => {
            //     this.nodeRefs[node.id] = elem
            // }}
            key={node.id}
            id={node.id}
        />
    }
    )}</>
}


export const Drawflow = () => {
    const { select, config: { canvasTranslate: { x, y }, zoom }, newPathDirection }
        = useAppSelector(selectActiveDrawflow)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFlowVersion())
    }, [])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Delete") {
                if (select?.type === "path") {
                    dispatch(actions.deletePath())
                }
                else {
                    dispatch(actions.deleteNode())
                }
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [dispatch, select?.type])


    return (
        <div
            id="drawflow"
            className="parent-drawflow"
            onMouseDown={(e) => {
                if (!e.currentTarget.classList.contains("parent-drawflow")) return;
                dispatch(actions.canvasDrag(true))
                dispatch(actions.unSelect())
            }}
            onMouseUp={() => dispatch(actions.canvasMouseUp())}
            onMouseMove={(e) => {
                const { clientX, clientY, movementX, movementY, pageX, pageY } = e
                dispatch(actions.canvasMouseMove({ clientX, clientY, movementX, movementY }))
            }}
            onMouseEnter={(e) => {
                // const node = testNode()
                // node.pos = handler.getPos(e.clientX, e.clientY, zoom.value)
                // node.pos.x -= 10
                // node.pos.y -= 10
                // dispatch(actions.addNode(node))
            }}
        >
            <DrawflowAdditionalArea />
            <DrawflowZoomArea />
            <div
                className="drawflow"
                style={{
                    transform: `translate(${x}px, ${y}px) scale(${zoom.value})`
                }}
            >
                <NodeList />
                <ConnectionList />
                {newPathDirection && <NewPath />}
            </div>
        </div>
    )
}