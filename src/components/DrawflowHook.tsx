import handler from "./drawflowHandler"
import { actions, selectActiveDrawflow } from '../redux/drawflowSlice'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import Connection from "./Connection";
import DrawflowNodeBlock from "./DrawflowNodeBlock";
import { useEffect } from "react";
import { addNewNode, fetchFlowVersion } from "../redux/store";
import DrawflowAdditionalArea from "./ButtonArea/DrawflowAdditionalArea";
import DrawflowZoomArea from "./ButtonArea/DrawflowZoomArea";
import { createSelector, createDraftSafeSelector } from "@reduxjs/toolkit";

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
    const d = handler.createCurvature(start, end);

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

    const conns = Object.entries(connections)
        .filter(([, conn]) => conn)
        .map(([key]) => {
            // key: fromId_portNum_toId_portNum
            const arr = key.split("_").map(Number);


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
            const d = handler.createCurvature(start, end)
            return (
                <div key={key}>
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
            )

        })
    return <>{conns}</>
}

const selectDrawflow = createDraftSafeSelector(selectActiveDrawflow, (s) => s.drawflow)

export const NodeList = () => {
    const drawflow = useAppSelector(selectDrawflow)
    // console.log(`Render NodeList`)

    return (
        <>{Object.values(drawflow)
            .filter(node => node.visible !== false)
            .map((node) => {
                return <DrawflowNodeBlock
                    key={node.id}
                    id={node.id}
                />
            })
        }</>
    )
}


export const Drawflow = () => {
    const { select, config: { canvasTranslate: { x, y }, zoom }, newPathDirection }
        = useAppSelector(selectActiveDrawflow)
    // console.log(`Render Drawflow`)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFlowVersion())
    }, [dispatch])


    return (
        <div
            tabIndex={0}
            onKeyDownCapture={(e) => {
                if (e.key === "Delete") {
                    if (select?.type === "path") {
                        dispatch(actions.deletePath())
                    }
                    else {
                        dispatch(actions.deleteNode())
                    }
                }
                if (e.ctrlKey && e.key === 'c' && select?.type === 'node' && typeof select.selectId === 'number') {
                    dispatch(actions.copyNode(select.selectId))
                }
                if (e.ctrlKey && e.key === 'v') {
                    dispatch(actions.insertCopiedNode())
                }
            }}
            id="drawflow"
            className="parent-drawflow"
            onMouseDown={(e) => {
                if (!e.currentTarget.classList.contains("parent-drawflow")) return;
                dispatch(actions.canvasDrag(true))
                dispatch(actions.unSelect())
            }}
            onMouseUp={() => dispatch(actions.canvasMouseUp())}
            onMouseMove={(e) => {
                const { clientX, clientY, movementX, movementY } = e
                dispatch(actions.canvasMouseMove({ clientX, clientY, movementX, movementY }))
            }}
            onMouseEnter={(e) => {
                const { clientX, clientY } = e
                dispatch(addNewNode({ clientX, clientY }))
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