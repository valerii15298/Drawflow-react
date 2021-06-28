import { select } from "./../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ports,
  Slices,
  stateData,
  clientPos,
  loadType,
  moveNodeType,
  portType,
} from "../types";
import { Flow } from "./Flow";
import type { RootState } from "./store";
import lodash from "lodash";

export const initialState: stateData = {
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
  connections: [],
  connectionsLabel: {},
  ports: [],
  select: null,
  newPathDirection: null,
  modalType: null,
  editLock: false,
  mouseBlockDragPos: { clientX: undefined, clientY: undefined },
};

// load version from server

const load = (state: stateData, { payload }: PayloadAction<loadType>) => {
  Object.assign(state, initialState);
  state.drawflow = payload.drawflow;
  state.nodeId = Object.keys(payload.drawflow).length + 1;
  state.connections = payload.connections;
  return state;
};

const align = (state: stateData) => {
  const flow = new Flow(state);
  flow.alignAll();
};

export const setState = (
  state: Record<string, unknown>,
  { payload }: PayloadAction<Record<string, unknown>>
) => {
  const newState = lodash.merge(state, payload);
  for (const key in newState) {
    state[key] = newState[key];
  }
};

const slice = createSlice({
  name: Slices.Drawflow,
  initialState,
  reducers: {
    setState,
    setEditLock: (state, { payload }: PayloadAction<boolean>) => {
      state.editLock = payload;
    },
    align,
    moveNode: (state, action: PayloadAction<moveNodeType>) =>
      new Flow(state).dragNode(action.payload),
    setMouseBlockDragPos: (
      state: stateData,
      { payload }: PayloadAction<clientPos>
    ) => {
      state.mouseBlockDragPos = payload;
    },
    unSelect: (state) => {
      state.config.drag = false;
      state.select = null;
    },
    select: (state, { payload }: PayloadAction<select>) => {
      state.config.drag = payload.type === "node";
      state.select = payload;
    },
    selectPort: (
      state,
      {
        payload,
      }: PayloadAction<{ type: portType; nodeId: number; portId: number }>
    ) => {
      const port = state.ports.find(
        ({ nodeId, portId, type }) =>
          type === payload.type &&
          portId === payload.portId &&
          nodeId === payload.nodeId
      );
      if (!port) {
        console.error("Cannot find port to select in state.ports");
        return;
      }
      const selectId = state.ports.indexOf(port);
      state.select = { type: payload.type, selectId };
    },
    moveCanvas: (
      state,
      {
        payload: { movementX, movementY },
      }: PayloadAction<{ movementX: number; movementY: number }>
    ) => {
      if (state.canvasDrag) {
        state.config.canvasTranslate.x += movementX;
        state.config.canvasTranslate.y += movementY;
      }
    },
    canvasDrag: (state, { payload }: PayloadAction<boolean>) => {
      state.canvasDrag = payload;
    },
    canvasMouseMove: (
      state,
      {
        payload: { movementX, movementY, clientX, clientY },
      }: PayloadAction<{
        clientX: number;
        clientY: number;
        movementX: number;
        movementY: number;
      }>
    ) => {
      state.clientCurrentMousePos = { clientX, clientY };
      // return undefined
      if (state.canvasDrag) {
        state.config.canvasTranslate.x += movementX;
        state.config.canvasTranslate.y += movementY;
        // console.log('Drag canvas')
      } else if (state.select?.type === portType.out) {
        state.newPathDirection = { clientX, clientY };
        // console.log('New path')
      } else if (state.config.drag && state.select) {
        // move node
        // console.log('Move node')
        const nodeId = state.select.selectId;
        const { clientX: prevX, clientY: prevY } =
          state.mouseBlockDragPos as clientPos;
        state.mouseBlockDragPos = { clientX, clientY };
        const coef = state.config.zoom.value;
        const dx = (clientX - prevX) / coef;
        const dy = (clientY - prevY) / coef;
        new Flow(state).dragNode({ nodeId, dy, dx });
      }
      // align(state)
    },
    canvasMouseUp: (state) => {
      const flow = new Flow(state);
      if (state.portToConnect && state.select?.selectId) {
        const { nodeId: startId, portId: startPort } = state.portToConnect;
        // console.log(current(state.portToConnect));
        // console.log([startId, startPort]);
        const endId = state.select.selectId;
        const endPort = 1;
        flow.addConnection({ startId, startPort, endId, endPort });
      }
      state.portToConnect = undefined;
      state.newPathDirection = null;
      state.canvasDrag = false;
      state.config.drag = false;
      if (state.select?.type === portType.out) {
        state.select = null;
      }
      flow.alignAll();
    },
    deleteNode: (state) => {
      const { connections, drawflow, ports, select } = state;
      if (select?.type !== "node") return;
      const { selectId } = select;

      // find and delete connections
      connections.forEach(({ endId, startId }, index) => {
        if ([startId, endId].includes(selectId)) {
          delete connections[index];
        }
      });

      // find and delete ports
      ports.forEach(({ nodeId }, index) => {
        if (nodeId === selectId) {
          delete ports[index];
        }
      });

      // 3. find in drawflow
      delete drawflow[selectId];

      state.select = null;
    },
    deletePath: (state) => {
      const { connections, select } = state;
      if (select?.type === "path") {
        console.log("delete");
        connections.splice(select.selectId, 1);
      }
    },
    load,
    portMouseUp: (
      state,
      {
        payload: { nodeId, portId, PortType },
      }: PayloadAction<{ PortType: portType; nodeId: number; portId: number }>
    ) => {
      const { select } = state;
      if (PortType !== portType.in || !select) return;
      const port = state.ports[select.selectId];

      const endId = nodeId;
      const endPort = portId;

      const startId = port.nodeId;
      const startPort = port.portId;
      // if connect to same node
      if (startId === endId) return;
      const flow = new Flow(state);
      flow.addConnection({ startId, startPort, endId, endPort });
    },
    clear: () => initialState,
    pushPorts: (state: stateData, { payload: ports }: PayloadAction<ports>) => {
      if (ports.length === 0) return;
      const { nodeId } = ports[0];
      state.ports = state.ports.filter((port) => port.nodeId !== nodeId);
      state.ports.push(...ports);
    },
    zoom: (state, { payload }: PayloadAction<boolean | null>) => {
      const { zoom } = state.config;
      const { value, max, min, tick } = zoom;
      const newValue = value + (payload ? tick : -tick);
      if (newValue <= max && newValue >= min) {
        zoom.value = newValue;
      }
      if (payload === null) {
        state.config.canvasTranslate = { x: 0, y: 0 };
        zoom.value = 1;
      }
    },
    nodeSize: (
      state,
      {
        payload: { height, width, id },
      }: PayloadAction<{ id: number; height: number; width: number }>
    ) => {
      state.drawflow[id].height = height;
      state.drawflow[id].width = width;
    },
    toggleSubnodes: (
      state,
      { payload: { id } }: PayloadAction<{ id: number }>
    ) => {
      const flow = new Flow(state);
      const node = flow.getNode(id);
      node.toggleSubnodesVisibility();
      align(state);
    },
    toggleChildren: (
      state,
      { payload: { id } }: PayloadAction<{ id: number }>
    ) => {
      const flow = new Flow(state);
      const node = flow.getNode(id);
      node.toggleChildrenVisibility();
      align(state);
    },
    copyNode: (state) => {
      if (state.select?.type === "node")
        state.nodeToCopyId = state.select.selectId;
    },
  },
});

export const actions = slice.actions;
export const drawflowSlice = slice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectActiveDrawflow = (state: RootState) =>
  state.flows[state.version];
