import React, { MouseEvent } from "react";
import DrawflowAdditionalArea from "./ButtonArea/DrawflowAdditionalArea";
import DrawflowZoomArea from "./ButtonArea/DrawflowZoomArea";
import DrawflowNodeBlock from "./DrawflowNodeBlock";
import Connection from "./Connection";
import DrawflowModal from "./Modal";
import handler from "./drawflowHandler";
import { MODAL_TYPE, NODE_COMPONENT } from "../../common/Enum";
import Node from './Node'
import "./style/drawflow.css";

import { port, pos, block, data, stateData, clientPos, ports } from '../../types'

type Props = { canvasData: data, editLock: boolean, setEditLock: React.Dispatch<React.SetStateAction<boolean>> }

class Drawflow extends React.Component<Props, stateData> {
    tmpPorts: any
    NodeComponent: any

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
            selectPoint: null,
            showButton: null,
            newPathDirection: null,
            modalType: null,
        }
        this.tmpPorts = {};
        this.NodeComponent = NODE_COMPONENT
    }

    node(id: number) {
        return new Node(id, this)
    }

    addNode = (nodeInfo: any, port: port, pos: pos, data: block) => {
        const { nodeId, drawflow } = this.state;
        const params = {
            id: nodeId,
            type: nodeInfo.nodeType,
            modalType: nodeInfo.modalType,
            data: {
                ...data,
                create: true,
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
    }

    addNodeToDrawFlow = (data: block, x: number, y: number) => {
        const { config } = this.state;
        if (this.props.editLock) return;
        const pos = handler.getPos(x, y, config.zoom.value);
        const nodeInfo = { ...data };

        // get template data from store
        this.addNode(nodeInfo, { in: 1, out: 2 }, pos, data);
    }

    drop = () => {
        // e.preventDefault();
        console.log('Drop')
        console.log(this.node(1).setPos({ x: 0, y: 0 }))
        // e.dataTransfer
        // console.log(e.dataTransfer)
        // e.dataTransfer.dropEffect = 'move'
        // const data = JSON.parse(e.dataTransfer.getData("data"));
        // this.addNodeToDrawFlow(data, e.clientX, e.clientY);
    }

    unSelect = (e: MouseEvent) => {
        e.stopPropagation();
        const { select, config } = this.state;
        if (select) select.classList.remove("select");
        this.setState({
            config: {
                ...config,
                drag: false,
            },
            select: null,
            selectId: null,
            selectPoint: null,
            showButton: null,
        });
    }

    select = (e: any, selectInfo: any) => {
        e.stopPropagation();
        const { config, select } = this.state;
        if (select) select.classList.remove("select");
        let target = e.currentTarget;
        const isPort = e.target.classList.contains("input") || e.target.classList.contains("output");
        const isNotSeletElement = target.tagName === "circle" || isPort;
        if (!isNotSeletElement)
            target.classList.add("select");
        if (isPort) target = e.target;
        this.setState({
            config: {
                ...config,
                drag: isPort ? false : true,
            },
            select: target,
            selectId: selectInfo && !selectInfo.svgKey ? selectInfo : null,
            selectPoint: selectInfo && selectInfo.svgKey ? selectInfo : null,
        });
    }

    movePoint = (e: MouseEvent, svgKey: any, i: any) => {
        const { config, select } = this.state;
        if (!config.drag) return;
        if (e.target !== select) return;
        const { movementX, movementY } = e;
        if (movementX === 0 && movementY === 0) return;

        const { connections } = this.state;
        const oldPos = connections[svgKey][i];
        const after = {
            x: oldPos.x + movementX,
            y: oldPos.y + movementY,
        }
        let clone = [...connections[svgKey]];
        clone[i] = after;
        this.setState({
            connections: {
                ...connections,
                [svgKey]: clone,
            }
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

    drawConnections = (start: any, end: any, points: Array<pos>, idx: string | number, svgKey: string) => {
        const { connections, config } = this.state;
        let circles = points.reduce((acc: Array<JSX.Element>, val, i) => {
            const key = "draw-flow-svg-" + idx + "circle-" + i;
            const property = {
                key,
                style: {
                    cursor: this.props.editLock ? "auto" : "move",
                },
                cx: val.x,
                cy: val.y,
            }
            acc.push(
                <Connection.Circle
                    key={key}
                    property={property}
                    points={connections[svgKey]}
                    svgKey={svgKey}
                    i={i}
                    editLock={this.props.editLock}
                    select={this.select}
                    movePoint={this.movePoint}
                    setConnections={this.setConnections}
                />);
            return acc;
        }, []);

        let d = null;
        if (points.length > 0) {
            let paths = null;
            paths = [{ start: start, end: points[0], type: "open" }];
            for (let i = 0; i < points.length - 1; i++) {
                paths.push({ start: { ...points[i] }, end: { ...points[i + 1] }, type: "openclose" });
            }
            paths.push({ start: points.slice(-1)[0], end: end, type: "close" });
            d = paths.reduce((acc, val) => {
                return acc + handler.createCurvature(val.start, val.end, val.type) + " ";
            }, "");
        }
        else {
            d = handler.createCurvature(start, end, "openclose");
        }

        return (
            <>
                <Connection.Path
                    editLock={this.props.editLock}
                    points={connections[svgKey]}
                    zoom={config.zoom.value}
                    start={start}
                    end={end}
                    svgKey={svgKey}
                    d={d}
                    select={this.select}
                    setConnections={this.setConnections}
                />
                {circles.map(comp => comp)}
            </>
        );
    }

    // TODO : label div size에 따라 위치 조정 필요
    // TODO : style(z-index, border, background, etc...) 조정 필요
    drawConnectionsLabel = (points: pos[], label: string) => {
        // calc label position
        const pointsLength = points.length;
        const mid = Math.floor(pointsLength / 2);
        let pos: pos;
        if (pointsLength % 2 === 1) {
            pos = points[mid];
        } else {      // even
            const start = points[mid - 1];
            const end = points[mid];
            pos = {
                x: Math.abs(end.x + start.x) / 2,
                y: Math.abs(end.y + start.y) / 2,
            }
        }

        return (
            <div
                style={{
                    position: "absolute",
                    top: pos.y,
                    left: pos.x,
                    border: "1px solid red"
                }}
            >
                {label}
            </div>);
    }

    getPortListByNodeId = (nodeId: number) => {
        const { ports } = this.state;
        return Object.keys(ports).filter(key => key.split(/_/g)[0] === "" + nodeId);
    }

    setPosByNodeId = (nodeId: number, pos: pos, ports: ports | null = null) => {
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
        const { config, select } = this.state;
        if (!config.drag) return;
        if (e.currentTarget !== select) return;
        const { movementX, movementY } = e;
        if (movementX === 0 && movementY === 0) return;

        this.movePosition(nodeId, {
            x: movementX,
            y: movementY,
        });
    }

    setPosWithCursorOut = (e: any) => {
        const { config, selectId, selectPoint } = this.state;
        //* typeof selectId === string -> path
        const exitCond = (!this.state.select || !config.drag) || (!selectId && !selectPoint) || ((typeof selectId) === (typeof ""));
        if (exitCond) return;

        const mousePos = handler.getPos(e.clientX, e.clientY, config.zoom.value);
        const select = {
            top: this.state.select.style.top.slice(0, -2) * 1,
            left: this.state.select.style.left.slice(0, -2) * 1,
            width: this.state.select.clientWidth,
            height: this.state.select.clientHeight,
        };
        const isInX = mousePos.x >= select.left && mousePos.x <= select.left + select.width;
        const isInY = mousePos.y >= select.top && mousePos.y <= select.top + select.height;
        if (isInX && isInY) return;
        const pos = {
            x: mousePos.x - select.width / 2 - select.left,
            y: mousePos.y - select.height / 2 - select.top,
        }
        if (selectId && typeof selectId === 'number') {
            this.movePosition(selectId, pos);
        } else if (selectPoint) {
            const { svgKey, i } = selectPoint;
            const after = {
                x: pos.x,
                y: pos.y,
            }
            let clone = [...this.state.connections[svgKey]];
            clone[i] = after;
            this.setState({
                connections: {
                    ...this.state.connections,
                    [svgKey]: clone,
                }
            });
        }
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
        const { connections, drawflow, ports, select, selectId } = this.state;
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
        if (select) select.classList.remove("select");
        // 5. state clear
        const newState = {
            ...obj,
            select: null,
            selectId: null,
            selectPoint: null,
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
        if (select && select.classList.contains("output")) {
            const { clientX, clientY } = e;

            this.setState({
                newPathDirection: {
                    clientX,
                    clientY,
                },
            });
        }
        this.setPosWithCursorOut(e);
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
        if (select && select.classList.contains("output")) {
            obj.select = null;
        }
        this.setState(obj);
    }

    onKeyDown = (e: any) => {
        if (e.key === "Delete") {
            const { select } = this.state;
            if (select && select.tagName === "path") {
                this.pathDelete();
            }
            else {
                this.deleteNode();
            }
        }
    }

    load = async (data: data) => {
        const { connections } = data;
        if (!connections) console.log('bad')
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
        const idx = handler.findIndexByElement(select);
        const startKey = `${selectId}_out_${idx + 1}`;

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
                    editLock={this.props.editLock}
                    zoom={zoom}
                    start={start}
                    end={end}
                    d={d}
                    select={this.select}
                    setConnections={this.setConnections}
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
        this.setState({
            modalType: MODAL_TYPE.import,
        });
    }

    exportJson = () => {
        const { drawflow, connections, connectionsLabel, config } = this.state;
        const nodes = Object.entries(drawflow).reduce((acc, [nodeId, data]) => {
            return {
                ...acc,
                [nodeId]: data,
            }
        }, {});
        const exportData = Object.assign({
            nodes,
            connections,
        }, config.connectionsLabelEnable ? { connectionsLabel } : {});
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
            alert("clipboard api");
            return;
        }
        navigator.clipboard.writeText(JSON.stringify(exportData, null, 2)).then(() => {
            alert("json export");
        });
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
            selectPoint: null,
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
                    const startPort = handler.findIndexByElement(select) + 1;
                    this.createPath(e, selectId as number, startPort, endId, endPort);
                },
                deleteNode: this.deleteNode,
            };

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
                                clear={this.clear}
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
                                {Object.values(this.state.drawflow).map((node: any, idx) =>
                                    <DrawflowNodeBlock
                                        key={"drawflow-node-block-" + idx}
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
                                )}
                                {Object.entries(this.state.connections).map(([key, points]: [key: any, points: any], idx) => {
                                    // key: fromId_portNum_toId_portNum
                                    const { ports, connectionsLabel, config } = this.state;
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
                                    return (
                                        <div key={idx}>
                                            <svg
                                                key={"drawflow-svg-" + idx}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="drawflow-connection"
                                            >
                                                {this.drawConnections(start, end, points, idx, key)}
                                            </svg>
                                            {config.connectionsLabelEnable &&
                                                <div>
                                                    {this.drawConnectionsLabel([start, ...points, end], connectionsLabel[key])}
                                                </div>}
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
