import { ReadFieldOptions } from "@apollo/client/cache";
import { BotFlowQuery } from "./generated/graphql-request";

export enum Slices {
  Drawflow = "drawflow",
  Groups = "groups",
}

export enum LocalStorageKey {
  backgroundOpacity = "backgroundOpacity",
  backgroundBlur = "backgroundBlur",
  backgroundImageUrl = "backgroundImageUrl",
}

export enum Spacing {
  x = 40,
  y = 60,
}

export enum PORT {
  in = 1,
  out,
  sub,
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
  id: number;
  nodeId: number;
  portId: number; // TODO delete field
  // index: number;
  type: portType; // TODO delete field
}

export interface Port extends purePort {
  pos: pos;
}

export type ports = Array<Port>;

export interface block {
  renderable: boolean;
  props: any;
}

export const ObjectKeys = <O>(o: O) => {
  return Object.keys(o) as (keyof O)[];
};

export const isArray = Array.isArray as (
  arg: unknown
) => arg is unknown[] | readonly unknown[];

export interface dataNode extends Omit<sNode, "ports" | "id"> {
  // data: step;
  port: port;
  pos: pos;
  isSub: boolean;
}

export interface node extends dataNode {
  id: number;
  height: number;
  width: number;
  lane?: number;
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

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends primitiveType
    ? T[P]
    : RecursivePartial<T[P]>;
};

type OmitDistributive<T, K extends PropertyKey> = T extends any
  ? T extends object
    ? Id<OmitRecursively<T, K>>
    : T
  : never;
// eslint-disable-next-line @typescript-eslint/ban-types
type Id<T> = {} & { [P in keyof T]: T[P] }; // Cosmetic use only makes the tooltips expad the type can be removed
type OmitRecursively<T, K extends PropertyKey> = Omit<
  { [P in keyof T]: OmitDistributive<T[P], K> },
  K
>;

export type updateNode = RecursivePartial<node>;

export type drawflow = {
  [id: number]: node;
};

// export type connections = {
//     [propName: string]: boolean
// }

type botFlow = Exclude<BotFlowQuery["botFlow"], null | undefined>;
type versions = botFlow["versions"];
type sNode = versions[number]["nodes"][number];
// type purePort = versions[number]["nodes"][number]["ports"][number];

type connection = versions[number]["connections"][number] & {
  visible?: boolean;
};

export type addConnectionType = Omit<connection, "id">;

export type connections = Array<connection>;

export type data = {
  nodes: drawflow;
  connections: connections;
};

export type select = {
  type: portType | "node" | "path";
  selectId: number;
};

export interface stateData {
  nodeId: number;
  canvasDrag: boolean;
  config: {
    drag: boolean;
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
  select: select | null;
  editLock: boolean;
  mouseBlockDragPos?: {
    clientX: number;
    clientY: number;
  };
  portToConnect?: Port | undefined;
  nodeToCopyId?: number;
  clientCurrentMousePos?: clientPos;
  computing?: number;
}

// export type optStateData = RecursivePartial<stateData>;

export type canvasShape = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type flowInfoStrict = {
  flow_name: string;
  flow_description: string;
  flow_active: number;
  run_times_max: number;
  user_run_limit_seconds: number;
  flow_story: string;
  flow_canvas_background_image: string;
  flow_canvas_background_opacity: string;
};

type RecursiveNull<T> = {
  [P in keyof T]: T[P] extends (infer U)[]
    ? RecursiveNull<U>[]
    : T[P] extends primitiveType
    ? T[P] | null
    : RecursiveNull<T[P]>;
};

// added symbol | bigint, ???
type primitiveType =
  | string
  | number
  | boolean
  | undefined
  | null
  | symbol
  | bigint;

export type setFunc<T> = {
  set: (
    setFunc: (
      currentField: (
        options?: Omit<ReadFieldOptions, "fieldName" | "from">
      ) => T
    ) => T extends primitiveType ? T : RecursivePartial<T>
  ) => void;
};

type optionsType = Omit<ReadFieldOptions, "fieldName" | "from">;

type wrapGetFunc<T, Q extends boolean = true> = (
  ...params: Q extends false ? [] : [optionsType?]
) => T extends primitiveType
  ? T
  : T extends (infer U)[]
  ? wrapObj<U, false>[]
  : RecursiveFunc<T>;

//Q - make options to function optional
export type wrapObj<T, Q extends boolean = true> = {
  set: (
    setFunc: (
      currentField: wrapGetFunc<T, Q>
    ) => T extends primitiveType ? T : RecursivePartial<T>
  ) => void;
} & wrapGetFunc<T, Q>;

export type RecursiveFunc<T extends Record<string, any>> = {
  [P in keyof T]: wrapObj<T[P]>;
};

export type flowInfo = RecursiveNull<flowInfoStrict>;

export enum mainWindow {
  mainFlow,
  codeEditor,
  templateNodeSettings,
  nodeSettings,
}

export enum sideWindow {
  groupSettings,
  flowSettings,
  none,
}

export interface flowType {
  version: number;
  flows: stateData[];
  dragTemplate?: number | undefined;
  canvas?: canvasShape;
  precanvas?: canvasShape;
  sidebarVisible?: boolean;
  flowInfo?: flowInfo;
  windowConfig: {
    id: number;
    mainId: mainWindow;
    sideId: sideWindow;
    background: {
      opacity: number;
      blur: number;
      imageUrl: string;
    };
  };
}

export type loadType = {
  drawflow: drawflow;
  connections: connections;
};
export type moveNodeType = {
  dx: number;
  dy: number;
  nodeId: number;
};

export type setStateFunction = (state: Record<string, any>) => void;
