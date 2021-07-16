import {
  clientPos,
  loadType,
  moveNodeType,
  ObjectKeys,
  ports,
  portType,
  select,
  setStateFunction,
  Slices,
  stateData,
  step,
} from "../types";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
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
const load = (
  state: stateData,
  { payload: { drawflow, connections } }: PayloadAction<loadType>
) => {
  Object.assign(state, initialState);
  state.drawflow = drawflow;
  state.nodeId = Math.max(...Object.keys(drawflow).map(Number)) + 1;
  state.connections = connections;
};

const align = (state: stateData) => {
  const flow = new Flow(state);
  flow.alignAll();
};

export const setState = (
  state: Record<string, any>,
  { payload }: PayloadAction<Record<string, unknown> | setStateFunction>
) => {
  if (typeof payload === "function") {
    payload(state);
    return;
  }
  const newState = lodash.merge(state, payload);
  ObjectKeys(newState).forEach((key) => {
    state[key] = newState[key];
  });
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
    updateNode: (state, { payload: step }: PayloadAction<step>) => {
      const id = step.this_node_unique_id;
      state.drawflow[id].data = step;
    },
    deleteNode: (state) => {
      const { connections, drawflow, ports, select } = state;
      if (select?.type !== "node") return;
      const { selectId } = select;

      // find and delete connections
      let connIndex = connections.length;
      while (connIndex--) {
        const { endId, startId } = connections[connIndex];
        if ([startId, endId].includes(selectId)) {
          connections.splice(connIndex, 1);
          console.log(current(connections));
        }
      }

      // find and delete ports
      let portIndex = ports.length;
      while (portIndex--) {
        const { nodeId } = ports[portIndex];
        if (nodeId === selectId) {
          ports.splice(portIndex, 1);
        }
      }

      // 3. find in drawflow
      delete drawflow[selectId];

      state.select = null;
      console.log("GGG");
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
