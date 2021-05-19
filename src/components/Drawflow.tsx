// @ts-nocheck

import React, { MouseEvent } from "react";
import DrawflowAdditionalArea from "./ButtonArea/DrawflowAdditionalArea";
import DrawflowZoomArea from "./ButtonArea/DrawflowZoomArea";
import DrawflowNodeBlock from "./DrawflowNodeBlock";
import Connection from "./Connection";
import DrawflowModal from "./Modal";
import handler from "./drawflowHandler";
import Node from './Node'
import "./style/drawflow.css";

import { port, pos, block, data, stateData, clientPos, ports, NODE_TYPE, node } from '../types'

import { MODAL_TYPE, NODE_COMPONENT } from '../types'

type Props = { canvasData: data, editLock: boolean, setEditLock: React.Dispatch<React.SetStateAction<boolean>> }

const newDraw = (props: Props) => {
    return <div></div>
}

const sObj = {}

class Drawflow extends React.Component<Props, stateData> {
    tmpPorts: any
    NodeComponent: any
    nodeRefs: { [propName: number]: HTMLElement } = {}

    constructor(props: Props) {
        super(props);
        this.state = {
            nodeId: 1,
            canvasDrag: false,
            config: {
                drag: false,
                connectionsLabelEnable: false,
                canvasTranslate: {
                    x: 0,
                    y: 0,
                },
                zoom: {
                    value: 1,
                    max: 2,
                    min: 0.5,
                    tick: 0.1,
                },
            },
            drawflow: {},
            connections: {},
            connectionsLabel: {},
            ports: {},
            select: null,
            selectId: null,
            selectPath: null,
            showButton: null,
            newPathDirection: null,
            modalType: null,
        }
        this.tmpPorts = {};
        this.NodeComponent = NODE_COMPONENT
    }

    addNode = (port: port, pos: pos, data: block) => {
        const { nodeId, drawflow } = this.state;
        const params = {
            id: nodeId,
            type: NODE_TYPE.MIDDLE,
            data: {
                ...data,
            },
            port,
            pos: {
                x: pos.x,
                y: pos.y,
            },
        };
        this.setState({
            nodeId: nodeId + 1,
            selectId: nodeId,
            drawflow: {
                ...drawflow,
                [nodeId]: { ...params },
            }
        });
        return nodeId;
    }

    drop = (e: MouseEvent) => {
        if (this.props.editLock) return;
        // if (!this.props.dragging) return;
        const { clientX, clientY } = e;
        const pos = handler.getPos(clientX, clientY, this.state.config.zoom.value);

        // // get template data from store
        const data = {
            name: 'Node name',
            type: 'sdd',
            value: 'Node value',
        }

        const id = this.addNode({ in: 1, out: 2 }, pos, data)
        console.log(id)
        console.log(this.nodeRefs)
        // console.log(this.node(1).setPos({ x: 0, y: 0 }))
    }

    unSelect = (e: MouseEvent) => {
        e.stopPropagation();
        const { select, config } = this.state;
        // TODO instead document use current drawflow node
        // if (select) document.querySelector('.select')?.classList.remove("select");
        this.setState({
            config: {
                ...config,
                drag: false,
            },
            select: null,
            selectId: null,
            selectPath: null,
            showButton: null,
        });
    }

    select = (e: any, selectInfo: any) => {
        e.stopPropagation();
        const { config, select } = this.state;

        // TODO instead document use current drawflow node
        // if (select) document.querySelector('.select')?.classList.remove("select");

        let target = e.currentTarget;
        const isInput = e.target.classList.contains("input");
        const isOutput = e.target.classList.contains("output");

        const isPort = isInput || isOutput;

        if (isPort) target = e.target;

        const newSelect: { type?: string, id?: number } = {}
        if (isPort) {
            newSelect.type = isInput ? 'input' : 'output'
            newSelect.id = handler.findIndexByElement(target) + 1;
        }
        else if (e.currentTarget.closest('.drawflow-node-block-default')) {
            newSelect.type = 'node';
        }
        else if (typeof selectInfo === 'string') {
            newSelect.type = 'path';
        }


        this.setState({
            config: {
                ...config,
                drag: isPort ? false : true,
            },
            select: newSelect,
            selectId: selectInfo && !selectInfo.svgKey ? selectInfo : null
        });
    }

    setConnections = (svgKey: string, newConnections: pos[]) => {
        const { connections } = this.state;
        this.setState({
            connections: {
                ...connections,
                [svgKey]: newConnections,
            }
        });
    }

    getPortListByNodeId = (nodeId: number) => {
        const { ports } = this.state;
        return Object.keys(ports).filter(key => key.split(/_/g)[0] === "" + nodeId);
    }

    setPosByNodeId = (nodeId: number, pos: pos, ports: ports) => {
        const { drawflow } = this.state;
        this.setState({
            drawflow: {
                ...drawflow,
                [nodeId]: {
                    ...drawflow[nodeId],
                    pos: {
                        x: pos.x,
                        y: pos.y,
                    }
                }
            },
        });
        ports && this.setState({ ports })
    }

    movePosition = (nodeId: number, pos: pos) => {
        const portKeys = this.getPortListByNodeId(nodeId);
        const ports = portKeys.reduce((acc, portKey) => {
            acc[portKey] = {
                x: acc[portKey].x + pos.x,
                y: acc[portKey].y + pos.y,
            };
            return acc;
        }, { ...this.state.ports });
        const tmpPos = {
            x: this.state.drawflow[nodeId].pos.x + pos.x,
            y: this.state.drawflow[nodeId].pos.y + pos.y,
        }
        this.setPosByNodeId(nodeId, tmpPos, ports);
    }

    moveNode = (e: MouseEvent, nodeId: number) => {
        const { config, selectId } = this.state;
        if (!config.drag) return;
        if (nodeId !== selectId) return;
        const { movementX, movementY } = e;
        if (movementX === 0 && movementY === 0) return;

        this.movePosition(nodeId, {
            x: movementX,
            y: movementY,
        });
    }

    moveCanvas = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const { movementX, movementY } = e;
        if (movementX === 0 && movementY === 0) return;
        this.setState({
            config: {
                ...this.state.config,
                canvasTranslate: {
                    x: this.state.config.canvasTranslate.x + movementX,
                    y: this.state.config.canvasTranslate.y + movementY,
                }
            }
        });
    }

    createPath = (e: any, startId: number, startPort: number, endId: number, endPort: number) => {
        const { target } = e;
        if (!target.classList.contains("input")) return;
        const key = `${startId}_${startPort}_${endId}_${endPort}`;
        const { connections } = this.state;

        // if such connection already exist
        if (connections[key] !== undefined) return;

        this.setState({
            connections: {
                ...this.state.connections,
                [key]: [],
            }
        });
    }

    deleteNode = () => {
        if (this.props.editLock) return;
        const { connections, drawflow, ports, selectId } = this.state;
        if (!selectId || (typeof selectId !== 'number')) return;
        let obj = {
            connections: { ...connections },
            ports: { ...ports },
            drawflow: { ...drawflow },
        }
        // 1. find in connections
        Object.keys(obj.connections).reduce((_, val) => {
            const arr = val.split("_").map(v => parseInt(v));
            if (arr[0] * 1 === selectId || arr[2] * 1 === selectId) {
                delete obj.connections[val];
            }
            return null;
        }, null);
        // 2. find in ports
        Object.keys(obj.ports).reduce((_, val) => {
            const arr = val.split("_").map(v => parseInt(v));
            if (arr[0] * 1 === selectId) {
                delete obj.ports[val];
            }
            return null;
        }, null);
        // 3. find in drawflow
        delete obj.drawflow[selectId];
        // 4. remove class "select"
        // if (select) select.classList.remove("select");
        // 5. state clear
        const newState = {
            ...obj,
            select: null,
            selectId: null,
            selectPath: null,
            showButton: null,
        }
        // 4. set state
        this.setState(newState);
    }

    pathDelete = () => {
        if (this.props.editLock) return;
        const { selectId, connections } = this.state;
        let newConnections = { ...connections };
        if (typeof selectId === 'string')
            delete newConnections[selectId];
        this.setState({
            connections: newConnections,
        });
    }

    pushPorts = (ports: any) => {
        // console.log('pushPorts', this.state.ports)
        this.tmpPorts = {
            ...this.tmpPorts,
            ...this.state.ports,
            ...ports,
        }
        this.setState({
            ports: {
                ...this.state.ports,
                ...this.tmpPorts,
            }
        });
    }

    onMouseMoveCanvas = (e: MouseEvent<HTMLElement>) => {
        const { canvasDrag } = this.state;
        if (canvasDrag) this.moveCanvas(e);

        const { select } = this.state;
        if (select && select.type === ("output")) {
            const { clientX, clientY } = e;

            this.setState({
                newPathDirection: {
                    clientX,
                    clientY,
                },
            });
        }
    }

    onMouseDownCanvas = (e: any) => {
        if (e.target.id !== "drawflow" && !e.target.classList.contains("drawflow")) return;
        this.setState({
            canvasDrag: true,
        });
        this.unSelect(e);
    }

    onMouseUpCanvas = (e: MouseEvent<HTMLElement>) => {
        let obj: any = {
            newPathDirection: null,
            canvasDrag: false,
            config: {
                ...this.state.config,
                drag: false,
            }
        }
        const { select } = this.state;
        if (select && select.type === ("output")) {
            obj.select = null;
        }
        this.setState(obj);
    }

    onKeyDown = (e: any) => {
        if (e.key === "Delete") {
            const { select } = this.state;
            if (select && select.type === "path") {
                this.pathDelete();
            }
            else {
                this.deleteNode();
            }
        }
    }

    load = async (data: data) => {
        const { connections } = data;
        if (!connections) return;

        let obj: any = {
            connections,
            drawflow: data.nodes,
            config: {
                ...this.state.config,
            }
        };

        if (data.connectionsLabel) {
            obj.connectionsLabel = data.connectionsLabel;
            obj.config.connectionsLabelEnable = true;
        }

        const dataKeys = Object.keys(data.nodes).map(key => parseInt(key) * 1).sort();
        if (dataKeys.length > 0) {
            obj.nodeId = dataKeys.length + 1;
        }

        this.setState({
            ...obj,
        });
    }

    newPath = () => {
        const { select, config, ports, selectId, newPathDirection } = this.state;
        const idx = select.id;
        if (!idx) console.error(select);
        const startKey = `${selectId}_out_${idx}`;

        if (!ports[startKey]) return null;

        const start = {
            x: ports[startKey].x,
            y: ports[startKey].y,
        }
        const zoom = config.zoom.value;
        const { clientX, clientY } = newPathDirection as clientPos;
        const end = handler.getPos(clientX, clientY, zoom);
        const d = handler.createCurvature(start, end, "openclose");

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="drawflow-connection"
            >
                <Connection.Path
                    d={d}
                />
            </svg>
        );
    }

    /* Life Cycle Function Start */
    componentDidMount() {
        if (this.props.canvasData) {
            this.load(this.props.canvasData);
            document.addEventListener("keydown", this.onKeyDown);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown);
    }
    /* Life Cycle Function End */

    /* Button Function Area Start */
    importJson = () => {
    }

    exportJson = () => {

    }

    clear = () => {
        this.setState({
            nodeId: 1,
            config: {
                ...this.state.config,
                canvasTranslate: {
                    x: 0,
                    y: 0,
                },
                zoom: {
                    ...this.state.config.zoom,
                    value: 1,
                },
            },
            drawflow: {},
            connections: {},
            ports: {},
            select: null,
            selectId: null,
            selectPath: null,
            showButton: null,
            newPathDirection: null,
            modalType: null,
        });
    }

    /**
     * @param {Boolean} plag true: zoom in, false: zoom out, null: zoom reset
     */
    zoom = (plag: boolean | null) => {
        const { zoom } = this.state.config;
        const { value, max, min, tick } = zoom;
        let afterZoom = plag ? value + tick : value - tick;
        let obj: any = {
            zoom: {
                ...zoom,
                value: afterZoom,
            }
        }
        if (plag === null) {
            obj.zoom.value = 1;
            obj.canvasTranslate = {
                x: 0,
                y: 0,
            }
        }
        if (afterZoom > max || afterZoom < min) return;
        this.setState({
            config: {
                ...this.state.config,
                ...obj,
            }
        });
    }
    /* Button Function Area End */

    render() {
        const nodeBlockEvent = this.props.editLock ?
            {
                select: () => { },
                moveNode: () => { },
                createPath: () => { },
                deleteNode: () => { },
            }
            :
            {
                select: this.select,
                moveNode: this.moveNode,
                createPath: (e: any, endId: number, endPort: number) => {
                    const { selectId, select } = this.state;
                    if (selectId === endId) return;
                    const startPort = select.id;
                    this.createPath(e, selectId as number, startPort, endId, endPort);
                },
                deleteNode: this.deleteNode,
            };

        const keys = Object.keys(this.nodeRefs).filter(key => key in this.state.drawflow)
        for (let key in this.nodeRefs) {
            if (!keys.includes(key)) {
                delete this.nodeRefs[key]
            }
        }

        return (
            <div className="drawflow-container">
                {this.state.modalType &&
                    <DrawflowModal
                        type={this.state.modalType}
                        data={this.state.selectId && this.state.drawflow[this.state.selectId as any].data}
                        setData={(data: any) => {
                            const { drawflow, selectId } = this.state;
                            this.setState({
                                drawflow: {
                                    ...drawflow,
                                    [selectId as number]: {
                                        ...drawflow[selectId as number],
                                        data: data,
                                    }
                                }
                            });
                        }}
                        close={() => {
                            this.setState({
                                modalType: null,
                            });
                        }}
                        event={{
                            importData: (data: any) => {
                                try {
                                    this.load(data);
                                }
                                catch {
                                    alert("Is not regular format.");
                                }
                            },
                            deleteNode: this.deleteNode,
                        }}
                    />
                }
                <div className="drawflow-wrapper">
                    <div className="drawflow-main">
                        <div
                            id="drawflow"
                            className="parent-drawflow"
                            onMouseDown={this.onMouseDownCanvas}
                            onMouseUp={this.onMouseUpCanvas}
                            onMouseMove={this.onMouseMoveCanvas}
                            onDragOver={e => { e.preventDefault() }}
                            onMouseEnter={this.drop}
                        >
                            <DrawflowAdditionalArea
                                importJson={this.importJson}
                                exportJson={this.exportJson}
                                editLock={this.props.editLock}
                                setEditorMode={this.props.setEditLock}
                            />
                            <DrawflowZoomArea
                                zoomIn={() => this.zoom(true)}
                                zoomOut={() => this.zoom(false)}
                                zoomReset={() => this.zoom(null)}
                            />
                            <div
                                className="drawflow"
                                style={{
                                    transform: `translate(${this.state.config.canvasTranslate.x}px, ${this.state.config.canvasTranslate.y}px) scale(${this.state.config.zoom.value})`
                                }}
                            >
                                {Object.values(this.state.drawflow).map((node: node) => {
                                    return <DrawflowNodeBlock
                                        updateRef={(elem: HTMLElement) => {
                                            this.nodeRefs[node.id] = elem
                                        }}
                                        key={"drawflow-node-block-" + node.id}
                                        zoom={this.state.config.zoom.value}
                                        NodeContent={this.NodeComponent[node.type]}
                                        params={node}
                                        editLock={this.props.editLock}
                                        ports={this.state.ports}
                                        pushPorts={this.pushPorts}
                                        showButton={this.state.showButton}
                                        setShowButton={(nodeId: number) => {
                                            this.setState({
                                                showButton: nodeId,
                                            });
                                        }}
                                        showModal={(type: string) => {
                                            this.setState({
                                                modalType: type,
                                            });
                                        }}
                                        event={nodeBlockEvent}
                                    />
                                }
                                )}
                                {Object.entries(this.state.connections).map(([key]: [key: string, points: any], idx) => {
                                    // key: fromId_portNum_toId_portNum
                                    const { ports } = this.state;
                                    const arr = key.split("_");
                                    const startKey = `${arr[0]}_out_${arr[1]}`;
                                    const endKey = `${arr[2]}_in_${arr[3]}`;

                                    if (!ports[startKey] || !ports[endKey]) return null;

                                    const start = {
                                        x: ports[startKey].x,
                                        y: ports[startKey].y,
                                    }
                                    const end = {
                                        x: ports[endKey].x,
                                        y: ports[endKey].y,
                                    }
                                    const d = handler.createCurvature(start, end, "openclose");
                                    return (
                                        <div key={idx}>
                                            <svg
                                                key={"drawflow-svg-" + idx}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="drawflow-connection"
                                            >
                                                <Connection.Path
                                                    svgKey={key}
                                                    d={d}
                                                />
                                            </svg>
                                        </div>
                                    );
                                })}
                                {this.state.newPathDirection && this.newPath()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Drawflow;
