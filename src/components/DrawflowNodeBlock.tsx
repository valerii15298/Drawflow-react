import { useEffect, useRef, } from "react";
import { portType } from "../types";

import { actions, selectActiveDrawflow } from '../redux/drawflowSlice'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { Round } from "./NodeComponents";


const DrawflowNodeBlock = ({ id }: { id: number }) => {
    const { portToConnect, nodeId, selectId, select, config, drawflow: { [id]: node } } =
        useAppSelector(selectActiveDrawflow)
    const dispatch = useAppDispatch()
    const { port, pos } = node;

    const ref = useRef<HTMLDivElement>(null);

    const portComponent = (type: portType) => {
        let arr = [];

        for (let i = 1; i <= port[type]; i++) {
            const key = `${type}put-${i}`;
            const portKey = `${id}_${type}_${i}`
            const port =
                <div
                    onMouseDown={(e) => {
                        e.stopPropagation()
                        dispatch(actions.select({
                            type: (type + 'put') as ('input' | 'output'),
                            portId: i,
                            selectId: id
                        }))
                    }}
                    key={key}
                    className={`${type}put ${key} ${portKey}`}
                    onMouseUp={e => {
                        if (type !== "in" || typeof selectId !== "number" || !select?.portId) return
                        const endId = id
                        const endPort = i
                        const startId = selectId
                        const startPort = select.portId
                        // if connect to same node
                        if (startId === endId) return
                        dispatch(actions.addConnection({ startId, startPort, endId, endPort }))
                    }}
                >
                    <div className={`indicator ${(portToConnect === portKey && ' ') || 'invisible'}`}></div>
                </div>
            arr.push(port);
        }

        return (
            <div className={`${type}puts`}>
                {arr}
            </div>
        );
    }

    useEffect(() => {
        if (ref.current) {
            const { offsetHeight, offsetWidth } = ref.current
            dispatch(actions.nodeSize({ height: offsetHeight, width: offsetWidth, id }))
        }
    })

    useEffect(() => {
        const getPortPos = (type: portType, i: number, elmt: Element) => {
            const key = `${id}_${type}_${i}`;
            const x = parseInt(getComputedStyle(elmt).left) + node.pos.x
            const y = parseInt(getComputedStyle(elmt).top) + node.pos.y

            return {
                [key]: { x, y }
            }
        }

        if (ref.current) {
            const inputs = Array.from((ref.current.querySelector(".inputs") as HTMLDivElement).children);
            const outputs = Array.from((ref.current.querySelector(".outputs") as HTMLDivElement).children);
            let newPorts = {};
            newPorts = Object.assign(newPorts, inputs.reduce((acc, elmt, i) => {
                return Object.assign(acc, getPortPos(portType.in, i + 1, elmt));
            }, {}));
            newPorts = Object.assign(newPorts, outputs.reduce((acc, elmt, i) => {
                return Object.assign(acc, getPortPos(portType.out, i + 1, elmt));
            }, {}));
            dispatch(actions.pushPorts(newPorts))
        }


    }, [dispatch, id, node]);

    useEffect(() => {
        // when add new node shift it to left and up
        if (ref.current && nodeId - 1 === id && config.drag) {
            const { offsetHeight, offsetWidth } = ref.current
            dispatch(actions.moveNode({ nodeId: id, dx: -offsetWidth * 0.2, dy: -offsetHeight * 0.2 }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            ref={ref}
            className={`node-${id} drawflow-node-block-default`
                + (selectId === id ? ' select' : '')
                + (node.isSub ? ' subnode' : '')}
            style={{
                top: pos.y + "px",
                left: pos.x + "px",
                cursor: "move",
            }}
            onMouseDown={e => {
                e.stopPropagation()
                const { clientX, clientY } = e
                dispatch(actions.select({ type: 'node', selectId: id }))
                dispatch(actions.setMouseBlockDragPos({ clientX, clientY }))
            }}
            onContextMenu={e => {
                // TODO show delete button
            }}
            onDoubleClick={() => {
                // show node settings
            }}
        >
            {portComponent(portType.in)}
            <div
                className="drawflow-node-content"
            >
                <Round {...node} />
            </div>
            {portComponent(portType.out)}
            {/* <button
            style={{
                display: showButton === id ? "block" : "none"
            }}
            className="drawflow-delete"
            onMouseDown={(e) => { e.stopPropagation(); event.deleteNode() }}
        >X</button> */}
        </div>)


}

export default DrawflowNodeBlock;
