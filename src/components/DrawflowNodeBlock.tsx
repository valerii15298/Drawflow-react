import { useEffect, useState, useRef, } from "react";
import { node, ports, portType } from "../types";
import handler from "./drawflowHandler";

import { actions, selectActiveDrawflow } from '../redux/drawflowSlice'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { Round } from "./NodeComponents";


const DrawflowNodeBlock = ({ id }: { id: number }) => {
    const { portToConnect, nodeId, selectId, select, ports, config, drawflow: { [id]: node } } =
        useAppSelector(selectActiveDrawflow)
    const dispatch = useAppDispatch()
    const { port, pos } = node;
    const { zoom } = config

    const [refs, setRefs] = useState({
        inputs: [],
        outputs: [],
    });
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
            //@ts-ignore
            const inputs = Array.from(ref.current.querySelector(".inputs").children);
            //@ts-ignore
            const outputs = Array.from(ref.current.querySelector(".outputs").children);
            //@ts-ignore
            setRefs({ inputs, outputs, });
        }
    }, [ref]);

    useEffect(() => {
        if (ref.current) {
            const { offsetHeight, offsetWidth } = ref.current
            dispatch(actions.nodeSize({ height: offsetHeight, width: offsetWidth, id }))
        }
    }, [dispatch, id, ref, node])


    useEffect(() => {
        const getPortPos = (type: portType, i: number, elmt: HTMLElement) => {
            const key = `${id}_${type}_${i}`;
            if (!ports[key]) {
                const x = parseInt(getComputedStyle(elmt).left) + node.pos.x
                const y = parseInt(getComputedStyle(elmt).top) + node.pos.y

                return {
                    [key]: { x, y }
                }
            }
        }

        if (refs.inputs && refs.outputs && port.in === refs.inputs.length && port.out === refs.outputs.length) {
            let newPorts = {};
            newPorts = Object.assign(newPorts, refs.inputs.reduce((acc, elmt, i) => {
                return Object.assign(acc, getPortPos(portType.in, i + 1, elmt));
            }, {}));
            newPorts = Object.assign(newPorts, refs.outputs.reduce((acc, elmt, i) => {
                return Object.assign(acc, getPortPos(portType.out, i + 1, elmt));
            }, {}));
            dispatch(actions.pushPorts(newPorts))
        }
    }, [dispatch, port, refs]);

    useEffect(() => {
        // when add new node shift it to left and up
        if (ref.current && nodeId - 1 === id && config.drag) {
            const { offsetHeight, offsetWidth } = ref.current
            dispatch(actions.moveNode({ nodeId: id, dx: -offsetWidth * 0.2, dy: -offsetHeight * 0.2 }))
        }
    }, [])

    return (
        <div
            ref={ref}
            className={`node-${id} drawflow-node-block-default` + (selectId === id ? ' select' : '')}
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
