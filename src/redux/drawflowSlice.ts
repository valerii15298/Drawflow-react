import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import lodash from "lodash";
import {
  clientPos,
  loadType,
  moveNodeType,
  ObjectKeys,
  ports,
  portType,
  pos,
  select,
  setStateFunction,
  Slices,
  stateData,
} from "../types";
import { Flow } from "./Flow";
import type { RootState } from "./store";

export const getDefaultStateData = (): stateData => ({
  nodeId: 1,
  canvasDrag: false,
  config: {
    drag: false,
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
  ports: [],
  select: null,
  newPathDirection: null,
  modalType: null,
  editLock: false,
  portToConnect: null,
});
export const initialState: stateData = getDefaultStateData();

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

export const setState = (
  state: Record<string, any>,
  { payload }: PayloadAction<Record<string, unknown> | setStateFunction>
) => {
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
    moveNode: (state, action: PayloadAction<moveNodeType>) => {
      // state = JSON.parse(JSON.stringify(state));
      new Flow(state).moveNode(action.payload);
      // return state;
    },
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
    selectPort: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      const port = state.ports[id];
      if (!port) {
        throw new TypeError("Cannot find port to select in state.ports");
      }
      const selectId = port.id;
      state.select = {
        type: port.type,
        selectId,
      };
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
      // state = JSON.parse(JSON.stringify(state));
      state.clientCurrentMousePos = {
        clientX,
        clientY,
      };
      // return undefined
      if (state.canvasDrag) {
        state.config.canvasTranslate.x += movementX;
        state.config.canvasTranslate.y += movementY;
        // console.log('Drag canvas')
      } else if (state.select?.type === portType.out) {
        state.newPathDirection = {
          clientX,
          clientY,
        };
        // console.log('New path')
      } else if (state.config.drag && state.select) {
        // move node
        // console.log('Move node')
        const nodeId = state.select.selectId;
        const { clientX: prevX, clientY: prevY } =
          state.mouseBlockDragPos as clientPos;
        state.mouseBlockDragPos = {
          clientX,
          clientY,
        };
        const coef = state.config.zoom.value;
        const dx = (clientX - prevX) / coef;
        const dy = (clientY - prevY) / coef;

        state.drawflow[nodeId].pos.x += dx;
        state.drawflow[nodeId].pos.y += dy;
        const flow = new Flow(state);
        flow.untieNodeIfFarAway(nodeId);
        flow.toggleAvailablePortToConnect(nodeId);
      }
      // return state;
    },
    alignCurrentFlow: (state) => {
      new Flow(state).alignAll();
    },
    canvasMouseUp: (state) => {
      // state = JSON.parse(JSON.stringify(state));
      const flow = new Flow(state);
      if (state.portToConnect && state.select?.selectId) {
        const { id } = state.portToConnect;
        // console.log(current(state.portToConnect));
        const endId = state.select.selectId;
        flow.addConnection({
          visible: 0,
          fromPort: {
            id,
          },
          toPort: {
            id: flow.getNode(endId).inPort.id,
          },
        });
      }
      state.portToConnect = null;
      state.newPathDirection = null;
      state.canvasDrag = false;
      state.config.drag = false;
      if (state.select?.type === portType.out) {
        state.select = null;
      }
      // return flow.state;
    },
    // updateNode: (state, { payload: step }: PayloadAction<step>) => {
    //   const id = step.this_node_unique_id;
    //   state.drawflow[id].data = step;
    // },
    deleteNode: (state) => {
      const { drawflow, ports, select } = state;
      if (select?.type !== "node") return;
      const { selectId } = select;
      const flow = new Flow(state);
      const selectedNode = flow.getNode(selectId);

      // find and delete connections
      Object.values(state.connections).forEach((conn) => {
        const { fromPort, toPort } = conn;
        if (
          selectedNode.nodePorts.some((p) =>
            [fromPort.id, toPort.id].includes(p.id)
          )
        ) {
          delete state.connections[conn.id];
        }
      });

      // find and delete ports
      Object.values(state.ports).forEach((port) => {
        if (port.nodeId === selectId) {
          delete state.ports[port.id];
        }
      });

      // 3. find in drawflow
      delete drawflow[selectId];

      // clear select
      state.select = null;
    },
    deletePath: (state) => {
      const { select } = state;
      if (select?.type === "path") {
        console.log("delete");
        delete state.connections[select.selectId];
        new Flow(state).setLaneNumbers();
      }
    },
    load,
    portMouseUp: (
      state,
      { payload: { id } }: PayloadAction<{ id: number }>
    ) => {
      const { select } = state;
      const portTo = state.ports[id];
      if (!portTo) {
        throw new TypeError("Port not found!!");
      }

      if (portTo.type !== portType.in || !select) return;
      if (select.type !== portType.out) {
        return;
      }
      const port = state.ports[select.selectId];

      if (!port) {
        throw new TypeError("Port not found!!");
      }

      // if connect to same node
      if (port.id === portTo.id) return;

      const flow = new Flow(state);
      flow.addConnection({
        visible: 0,
        fromPort: {
          id: select.selectId,
        },
        toPort: {
          id: portTo.id,
        },
      });
    },
    clear: () => initialState,
    pushPort: (
      state: stateData,
      { payload: { id, pos } }: PayloadAction<{ id: number; pos: pos }>
    ) => {
      // console.log(...Object.values(pos), id);
      state.ports[id].pos = pos;
    },
    zoom: (state, { payload }: PayloadAction<boolean | null>) => {
      const { zoom } = state.config;
      const { value, max, min, tick } = zoom;
      const newValue = value + (payload ? tick : -tick);
      if (newValue <= max && newValue >= min) {
        zoom.value = newValue;
      }
      if (payload === null) {
        state.config.canvasTranslate = {
          x: 0,
          y: 0,
        };
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
      // state = JSON.parse(JSON.stringify(state));
      const flow = new Flow(state);
      const node = flow.getNode(id);
      node.toggleSubnodesVisibility();
      // return flow.state;
    },
    toggleChildren: (
      state,
      { payload: { id } }: PayloadAction<{ id: number }>
    ) => {
      // state = JSON.parse(JSON.stringify(state));
      const flow = new Flow(state);
      const node = flow.getNode(id);
      node.toggleChildrenVisibility();
      // return flow.state;
    },
    copyNode: (state) => {
      if (state.select?.type === "node") {
        state.nodeToCopyId = state.select.selectId;
      }
    },
  },
});

export const actions = slice.actions;
export const drawflowSlice = slice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectActiveDrawflow = (state: RootState) =>
  state.flows[state.version];
