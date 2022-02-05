import { ReadFieldOptions } from "@apollo/client/cache";
import { chatNodeType } from "./chat/chatNodes/chatNodeType";

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
  // id: number
  nodeId: number;
  portId: number; // TODO delete field
  // index: number;
  type: portType; // TODO delete field
}

export interface Port extends purePort {
  pos: pos;
}

// export type ports = {
//     [propName: string]: pos
// }

export type ports = Array<Port>;

type dateTimeString = `${number}-${number}-${number}T${number}:${number}`;

export interface block {
  active: 0 | 1;
  description: string;
  execute_node_specific_date_time: dateTimeString;
  execution_wait_time_seconds: number;
  flow_action_scrdata_id: number;
  flow_node_type_id: number;
  icon_link: string;
  icon_link_selected: string;
  id_priority: number;
  loop_cycle_reached_jump_to_node: number;
  loop_cycles: number;
  name: string;
  node_attributes: any[];
  node_object_lists: {
    type: chatNodeType;
    renderable: boolean;
    props: any;
  };
  node_scrdata_id: number;
  node_story: string;
  nodes_group_id: number;
  nodes_id: number;
  nodes_tooltip: string;
  order: number;
  node_settings_json: Record<string, unknown>;
  node_response_settings_json: Record<string, unknown>;
  delete?: 0 | 1;
}

export const ObjectKeys = <O>(o: O) => {
  return Object.keys(o) as (keyof O)[];
};

export const isArray = Array.isArray as (
  arg: unknown
) => arg is unknown[] | readonly unknown[];

// export const blockTypes = {
//   active: "select",
//   description: "text",
//   execute_node_specific_date_time: "datetime",
//   execution_wait_time_seconds: "number",
//   flow_action_scrdata_id: "number",
//   flow_node_type_id: "number",
//   icon_link: "text",
//   icon_link_selected: "text",
//   id_priority: "number",
//   loop_cycle_reached_jump_to_node: "number",
//   loop_cycles: "number",
//   name: "text",
//   node_attributes: "any",
//   node_object_lists: "any",
//   node_scrdata_id: "number",
//   node_story: "text",
//   nodes_group_id: "number",
//   nodes_id: "number",
//   nodes_tooltip: "text",
//   order: "number",
//   node_settings_json: "any",
//   node_response_settings_json: "any",
// };

export type dataNode = {
  data: step;
  port: port;
  pos: pos;
  isSub: boolean;
};

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
};

export type select = {
  type: portType | "node" | "path";
  selectId: number;
};

export interface newStateData {
  drawflow: drawflow;
  ports: ports;
  connections: connections;
  portToConnect?: Port | undefined;
}

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
  mouseBlockDragPos: {
    clientX?: number | undefined;
    clientY?: number | undefined;
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

// type RecObj<T> = T extends (infer U)[]
//   ? {
//       (options?: Omit<ReadFieldOptions, "fieldName" | "from">): RecObj<U>[];
//       set: (arg: RecursivePartial<U>[]) => void;
//     }
//   : T extends primitiveType
//   ? {
//       (options?: Omit<ReadFieldOptions, "fieldName" | "from">): T;
//       set: (setFunc: (currentField: (args?: any) => T) => T) => void;
//     }
//   : {
//       (
//         options?: Omit<ReadFieldOptions, "fieldName" | "from">
//       ): RecursiveFunc<T>;
//       set: (
//         setFunc: (
//           currentField: (args?: any) => RecursiveFunc<T>
//         ) => RecursivePartial<T>
//       ) => void;
//     };

// export type RecursiveFunc<T extends Record<string, any>> = {
//   [P in keyof T]: T[P] extends (infer U)[]
//     ? {
//         (
//           options?: Omit<ReadFieldOptions, "fieldName" | "from">
//         ): RecursiveFunc<U>[];
//         set: (arg: RecursivePartial<U>[]) => void;
//       }
//     : T[P] extends primitiveType
//     ? {
//         (options?: Omit<ReadFieldOptions, "fieldName" | "from">): T[P];
//         set: (setFunc: (currentField: (args?: any) => T[P]) => T[P]) => void;
//       }
//     : {
//         (options?: Omit<ReadFieldOptions, "fieldName" | "from">): RecursiveFunc<
//           T[P]
//         >;
//         set: (
//           setFunc: (
//             currentField: (args?: any) => RecursiveFunc<T[P]>
//           ) => RecursivePartial<T[P]>
//         ) => void;
//       };
// };

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

export interface group {
  id: number;
  node_group_order: null | number;
  node_group_name: string;
  node_group_description: string;
}

export interface optGroup extends RecursivePartial<group> {
  delete?: 0 | 1;
}

export type groups = {
  [id: number]: group;
};

export interface flowType {
  version: number;
  flows: stateData[];
  dragTemplate?: number | undefined;
  templates: block[];
  canvas?: canvasShape;
  precanvas?: canvasShape;
  sidebarVisible?: boolean;
  flowInfo?: flowInfo;
  groups: groups;
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

export interface step extends block {
  flow_lane_id: number;
  flow_node: {
    node_name: string;
    node_description: string;
    node_icon_link: string;
    node_icon_link_selected: string;
    node_tooltip: string;
  };
  node_position: number;
  prev_node_unique_id: number;
  this_node_unique_id: number;
  update_version: number;
  id_nodes: number;

  [propName: string]: any;
}
