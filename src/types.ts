export enum NODE_TYPE {
    START = 'START',
    MIDDLE = 'MIDDLE',
    END = 'END',
}

export enum Slices {
    Drawflow = 'drawflow'
}

export const CURV = 0.3;

export enum MODAL_TYPE {
    NODE_SETTINGS = "NODE_SETTINGS",
    GROUP_SETTINGS = "GROUP_SETTINGS",
}

export enum portType {
    in='in',
    out='out'
}

export type pos = {
    x: number,
    y: number,
}

export type clientPos = {
    clientX: number,
    clientY: number,
}

export type port = {
    in: number,
    out: number,
}



export type ports = {
    [propName: string]: pos
}



export type block = {
    name: string,
    type: string,
    value: string,
    create?: boolean
}



export type dataNode = {
    type: string
    data: block
    port: port
    pos: pos
    isSub: boolean
}

export interface node extends dataNode {
    id: number
    height: number
    width: number
    lane?: number
    position?: number
    head?: number
    positionNumber?: number
}

type RecursivePartial<T> = {
    [P in keyof T]?:
    T[P] extends (infer U)[] ? RecursivePartial<U>[] :
    T[P] extends object ? RecursivePartial<T[P]> :
    T[P];
}

export type updateNode = RecursivePartial<node>

export type drawflow = {
    [id: number]: node
}

export type connections = {
    [propName: string]: pos[]
}

export type data = {
    nodes: drawflow,
    connections: connections,
    connectionsLabel?: {
        [propName: string]: string
    },
}

export interface stateData {
    nodeId: number,
    canvasDrag: boolean,
    config: {
        drag: boolean,
        connectionsLabelEnable: boolean,
        canvasTranslate: pos,
        zoom: {
            value: number,
            max: number,
            min: number,
            tick: number,
        },
    },
    drawflow: drawflow,
    modalType: string | null,
    newPathDirection: clientPos | null,
    ports: ports,
    connections: connections,
    connectionsLabel: {
        [propName: string]: string
    },
    selectId: string | number | null,
    select: { type: string, portId?: number, selectId?: string | number } | null,
    selectPath: string | null,
    showButton: number | null,
    editLock: boolean,
    mouseBlockDragPos: { clientX?: number, clientY?: number },
    portToConnect?: string | undefined
}

export interface flowType {
    version: number
    flows: stateData[]
    dragTemplate?: number | undefined
    templates: block[]
}

export type addConnectionType = { startId: number, startPort: number, endId: number, endPort: number }
export type loadType = { drawflow: drawflow, connections: connections }
export type moveNodeType = { dx: number, dy: number, nodeId: number }