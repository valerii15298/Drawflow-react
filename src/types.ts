import NodeComponents from "./components/NodeComponents"

export enum NODE_TYPE {
    START = 'START',
    MIDDLE = 'MIDDLE',
    END = 'END',
}

export const NODE_COMPONENT = {
    [NODE_TYPE.MIDDLE]: NodeComponents.Common,
}

export const CURV = 0.5;

export enum MODAL_TYPE  {
    import = "import",
    common = "common",
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

export type portType = 'in' | 'out'

export type ports = {
    [propName: string]: pos
}

export type block = {
    name: string,
    type: string,
    value: string,
    create?: boolean
}

export type node = {
    id: number
    type: string
    data: block
    port: port
    pos: pos
}

export type Nodes = {
    [propName: string]: node
}


export type data = {
    nodes: Nodes,
    connections: {
        [propName: string]: pos[]
    },
    connectionsLabel: {
        [propName: string]: string
    },
}

export type stateData = {
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
    drawflow: {
        [propName: number]: node
    },
    modalType: string | null,
    newPathDirection: clientPos | null,
    ports: {
        [propName: string]: pos
    }
    connections: {
        [propName: string]: pos[]
    },
    connectionsLabel: {
        [propName: string]: string
    },
    selectId: string | number | null,
    select: any,
    selectPoint: { i: number, svgKey: string } | null,
    showButton: number | null,
}
