import { useEffect, useState, useRef, } from "react";
import { node, ports, portType } from "../types";
import handler from "./drawflowHandler";

type Props = {
    zoom: number,
    NodeContent: any,
    params: node,
    editLock: boolean,
    ports: ports,
    pushPorts: (ports: ports) => void,
    showButton: number | null,
    setShowButton: (nodeId: number) => void,
    showModal: (type: string) => void,
    event: {
        select: any,
        moveNode: any,
        createPath: any,
        deleteNode: any,
    },
    updateRef: any
}

const DrawflowNodeBlock = (props: Props) => {
    const {
        zoom,
        NodeContent,
        params,
        editLock,
        ports,
        pushPorts,
        showButton,
        setShowButton,
        showModal,
        event,
        updateRef,
    } = props;

    const [refs, setRefs] = useState({
        inputs: [],
        outputs: [],
    });
    const ref = useRef(null);

    const portComponent = (type: portType) => {
        let arr = [];

        for (let i = 1; i <= params.port[type]; i++) {
            const port =
                <div
                    key={`drawflow-node-${type}put-${i}`}
                    className={`${type}put`}
                    onMouseUp={e => {
                        event.createPath(e, params.id, i);
                    }}
                ></div>;
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
            updateRef(ref.current)
        }
    }, [ref]);

    const getPortPos = (type: portType, i: number, elmt: HTMLElement) => {
        const key = `${params.id}_${type}_${i}`;
        if (!ports[key]) {
            const rect = elmt.getBoundingClientRect();
            const size = {
                width: elmt.offsetWidth,
                height: elmt.offsetHeight,
            };
            const pos = {
                x: rect.x,
                y: rect.y,
            };
            return {
                [key]: handler.getPortPosWithZoom(size, pos, zoom),
            }
        }
    }

    useEffect(() => {
        if (refs.inputs && refs.outputs && params.port.in === refs.inputs.length && params.port.out === refs.outputs.length) {
            let newPorts = {};
            newPorts = Object.assign(newPorts, refs.inputs.reduce((acc, elmt, i) => {
                return Object.assign(acc, getPortPos("in", i + 1, elmt));
            }, {}));
            newPorts = Object.assign(newPorts, refs.outputs.reduce((acc, elmt, i) => {
                return Object.assign(acc, getPortPos("out", i + 1, elmt));
            }, {}));
            pushPorts(newPorts);
        }
    }, [refs]);

    useEffect(() => {
        if (params.data.create) {
            // showModal(params.modalType);
        }
    }, [params.data]);

    const className = `drawflow-node-block-${params.type.replace(/\s/g, "").toLowerCase()}`;

    return <div
        ref={ref}
        className={"drawflow-node-block-default " + className}
        style={{
            top: params.pos.y + "px",
            left: params.pos.x + "px",
            cursor: editLock ? "auto" : "move",
        }}
        onMouseDown={e => {
            if (e.currentTarget.classList.contains(className)) {
                event.select(e, params.id);
            }
        }}
        onMouseMove={e => {
            event.moveNode(e, params.id);
        }}
        onContextMenu={e => {
            e.preventDefault();
            e.stopPropagation();
            setShowButton(params.id);
        }}
        onDoubleClick={() => {
            showModal('common');
        }}
    >
        {portComponent("in")}
        <div
            className="drawflow-node-content"
        >
            <NodeContent
                {...params}
            />
        </div>
        {portComponent("out")}
        <button
            style={{
                display: showButton === params.id ? "block" : "none"
            }}
            className="drawflow-delete"
            onMouseDown={(e) => { e.stopPropagation(); event.deleteNode() }}
        >X</button>
    </div>


}

export default DrawflowNodeBlock;
