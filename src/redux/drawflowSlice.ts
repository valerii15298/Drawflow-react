import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { dataNode, connections, drawflow, node, ports, pos, Slices, stateData } from '../types'
import type { RootState } from './store'

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
  connections: {},
  connectionsLabel: {},
  ports: {},
  select: null,
  selectId: null,
  selectPath: null,
  showButton: null,
  newPathDirection: null,
  modalType: null,
  editLock: false
}


const getPortListByNodeId = (nodeId: number, state: stateData) => {
  const { ports } = state;
  return Object.keys(ports).filter(key => key.split(/_/g)[0] === "" + nodeId);
}

const addNode = (state: stateData, { payload }: PayloadAction<dataNode>) => {
  state.drawflow[state.nodeId] = { ...payload, id: state.nodeId, height: 0, width: 0 }
  state.selectId = state.nodeId++
  state.select = {type: 'node', selectId: state.selectId}
  state.config.drag = true
}

// load version from server
const load = (state: stateData, { payload }: PayloadAction<{ drawflow: drawflow, connections: connections }>) => {
  state.drawflow = payload.drawflow
  state.nodeId = Object.keys(payload.drawflow).length + 1
  state.connections = payload.connections
}

const addConnection = (state: stateData, { payload: { startId, startPort, endId, endPort } }:
  PayloadAction<{ startId: number, startPort: number, endId: number, endPort: number }>) => {
  const key = `${startId}_${startPort}_${endId}_${endPort}`;
  const { connections } = state;

  // if such connection already exist
  if (connections[key] !== undefined) return;

  // add connection:
  connections[key] = []
}

const slice = createSlice({
  name: Slices.Drawflow,
  initialState,
  reducers: {
    setEditLock: (state, { payload }: PayloadAction<boolean>) => {
      state.editLock = payload
    },
    addNode,
    unSelect: (state) => {
      state.config.drag = false
      state.select = null
      state.selectId = null
      state.showButton = null
    },
    select: (state, { payload }: PayloadAction<{ type: 'node' | 'path' | 'input' | 'output', portId?: number, selectId?: string | number }>) => {
      const { type, selectId } = payload;
      state.config.drag = type === 'node'
      state.select = payload
      state.selectId = selectId ?? null;
    },
    movePosition: (state, { payload: { nodeId, pos } }: PayloadAction<{ nodeId: number, pos: pos }>) => {
      const portKeys = getPortListByNodeId(nodeId, state);
      const coef = (state.config.zoom.value)
      pos.x /= coef
      pos.y /= coef


      // update ports position
      state.ports = portKeys.reduce((acc, portKey) => {
        acc[portKey] = {
          x: acc[portKey].x + pos.x,
          y: acc[portKey].y + pos.y,
        };
        return acc;
      }, { ...state.ports });

      // update node position
      state.drawflow[nodeId].pos.x += pos.x
      state.drawflow[nodeId].pos.y += pos.y
    },
    moveCanvas: (state, { payload: { movementX, movementY } }: PayloadAction<{ movementX: number, movementY: number }>) => {
      if (state.canvasDrag) {
        state.config.canvasTranslate.x += movementX
        state.config.canvasTranslate.y += movementY
      }
    },
    canvasDrag: (state, { payload }: PayloadAction<boolean>) => {
      state.canvasDrag = payload
    },
    canvasMouseMove: (state, { payload: { movementX, movementY, clientX, clientY } }: PayloadAction<{ clientX: number, clientY: number, movementX: number, movementY: number }>) => {
      if (state.canvasDrag) {
        state.config.canvasTranslate.x += movementX
        state.config.canvasTranslate.y += movementY
      } else if (state.select?.type === 'output') {
        state.newPathDirection = { clientX, clientY }
      }
    },
    canvasMouseUp: (state) => {
      state.newPathDirection = null
      state.canvasDrag = false
      state.config.drag = false
      if (state.select?.type === 'output') {
        state.select = null
      }
    },
    deleteNode: (state) => {
      const { connections, drawflow, ports, selectId } = state;
      if (!selectId || (typeof selectId !== 'number')) return;

      // 1. find in connections
      Object.keys(connections).reduce((_, val) => {
        const arr = val.split("_").map(v => parseInt(v));
        if (arr[0] * 1 === selectId || arr[2] * 1 === selectId) {
          delete connections[val];
        }
        return null;
      }, null);
      // 2. find in ports
      Object.keys(ports).reduce((_, val) => {
        const arr = val.split("_").map(v => parseInt(v));
        if (arr[0] * 1 === selectId) {
          delete ports[val];
        }
        return null;
      }, null);
      // 3. find in drawflow
      delete drawflow[selectId];

      state.select = null
      state.selectId = null
      state.showButton = null
    },
    deletePath: (state) => {
      const { selectId, connections } = state;
      if (typeof selectId === 'string')
        delete connections[selectId];
    },
    load,
    addConnection,
    clear: () => initialState,
    pushPorts: (state, { payload }: PayloadAction<ports>) => {
      state.ports = { ...state.ports, ...payload }
    },
    zoom: (state, { payload }: PayloadAction<boolean | null>) => {
      const { zoom } = state.config;
      const { value, max, min, tick } = zoom
      const newValue = value + (payload ? tick : -tick)
      if (newValue <= max && newValue >= min) {
        zoom.value = newValue
      }
      if (payload === null) {
        state.config.canvasTranslate = { x: 0, y: 0 }
        zoom.value = 1
      }
    },
    nodeSize: (state, { payload: { height, width, id } }: PayloadAction<{ id: number, height: number, width: number }>) => {
      state.drawflow[id].height = height
      state.drawflow[id].width = width
    }

  },
})

export const actions = slice.actions
export const drawflowSlice = slice.reducer

// Other code such as selectors can use the imported `RootState` type
export const selectActiveDrawflow = (state: RootState) => state.flows[state.version]