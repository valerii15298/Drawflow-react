export enum NODE_TYPE {
  START = "START",
  MIDDLE = "MIDDLE",
  END = "END",
}

export enum Slices {
  Drawflow = "drawflow",
}

export const CURV = 0.3;

export enum MODAL_TYPE {
  NODE_SETTINGS = "NODE_SETTINGS",
  GROUP_SETTINGS = "GROUP_SETTINGS",
}

export enum portType {
  in = "in",
  out = "out",
}

export type pos = {
  x: number;
  y: number;
};

export type clientPos = {
  clientX: number;
  clientY: number;
};

export type port = {
  in: number;
  out: number;
};

export interface purePort {
  nodeId: number;
  portId: number;
  type: portType;
}

export interface Port extends purePort {
  pos: pos;
}

// export type ports = {
//     [propName: string]: pos
// }

export type ports = Array<Port>;

export type block = {
  name: string;
  type: string;
  value: string;
  create?: boolean;
};

export type dataNode = {
  type: string;
  data: block;
  port: port;
  pos: pos;
  isSub: boolean;
};

export interface node extends dataNode {
  id: number;
  height: number;
  width: number;
  lane?: number;
  position?: number;
  head?: number;
  positionNumber?: number;
  subnodesVisibility?: boolean;
  childrenVisibility?: boolean;
  visible?: boolean;
  selected?: boolean;
}

export interface pureNode extends Omit<node, "pos"> {
  pos: undefined;
}

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type updateNode = RecursivePartial<node>;

export type drawflow = {
  [id: number]: node;
};

// export type connections = {
//     [propName: string]: boolean
// }
export interface addConnectionType {
  startId: number;
  startPort: number;
  endId: number;
  endPort: number;
}
export interface connection extends addConnectionType {
  visible?: boolean;
}

export type connections = Array<connection>;

export type data = {
  nodes: drawflow;
  connections: connections;
  connectionsLabel?: {
    [propName: string]: string;
  };
};

export type select = { type: portType | "node" | "path"; selectId: number };
export interface stateData {
  nodeId: number;
  canvasDrag: boolean;
  config: {
    drag: boolean;
    connectionsLabelEnable: boolean;
    canvasTranslate: pos;
    zoom: {
      value: number;
      max: number;
      min: number;
      tick: number;
    };
  };
  drawflow: drawflow;
  modalType: string | null;
  newPathDirection: clientPos | null;
  ports: ports;
  connections: connections;
  connectionsLabel: {
    [propName: string]: string;
  };
  select: select | null;
  editLock: boolean;
  mouseBlockDragPos: {
    clientX?: number | undefined;
    clientY?: number | undefined;
  };
  portToConnect?: Port | undefined;
  nodeToCopyId?: number;
  clientCurrentMousePos?: clientPos;
  computing?: number;
}

export type canvasShape = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export interface flowType {
  version: number;
  flows: stateData[];
  dragTemplate?: number | undefined;
  templates: block[];
  canvas?: canvasShape;
  sidebarVisible?: boolean;
}

export type loadType = { drawflow: drawflow; connections: connections };
export type moveNodeType = { dx: number; dy: number; nodeId: number };
