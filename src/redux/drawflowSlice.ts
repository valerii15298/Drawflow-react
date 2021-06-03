import { createSlice, PayloadAction, createAsyncThunk, current } from '@reduxjs/toolkit'
import handler, { getPortListByNodeId } from '../components/drawflowHandler'
import { testNode } from '../Mock'
import { dataNode, connections, drawflow, node, ports, pos, Slices, stateData, clientPos, flowType, addConnectionType, loadType, moveNodeType } from '../types'
import { Flow } from './Node'
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
  editLock: false,
  mouseBlockDragPos: { clientX: undefined, clientY: undefined },
}

export const addNode = (state: stateData, payload: dataNode) => {
  state.drawflow[state.nodeId] = { ...payload, id: state.nodeId, height: 0, width: 0 }
  state.selectId = state.nodeId++
  state.select = { type: 'node', selectId: state.selectId }
  state.config.drag = true
}

// load version from server

const load = (state: stateData, { payload }: PayloadAction<loadType>) => {
  Object.assign(state, initialState)
  state.drawflow = payload.drawflow
  state.nodeId = Object.keys(payload.drawflow).length + 1
  state.connections = payload.connections
  return state
}

const align = (state: stateData) => {
  const flow = new Flow(state)
  // const { isSub, id } = flow.getNode(1)
  // console.log(flow.getNode(1).calculateFullWidth())
  // flow.setLaneNumbers()
  flow.alignAll()

}
const setLaneNumbers = () => {
  // iterate over nodes and add to state numbers(id, position, lane, etc: then this data will be rendered in every node)
  // let laneNodes = this.heads
}


const slice = createSlice({
  name: Slices.Drawflow,
  initialState,
  reducers: {
    setEditLock: (state, { payload }: PayloadAction<boolean>) => {
      state.editLock = payload
    },
    align,
    addNode: (state: stateData, { payload }: PayloadAction<dataNode>) => addNode(state, payload),
    moveNode: (state, action: PayloadAction<moveNodeType>) => (new Flow(state)).dragNode(action.payload),
    setMouseBlockDragPos: (state: stateData, { payload }: PayloadAction<clientPos>) => {
      state.mouseBlockDragPos = payload
    },
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
      } else if (state.config.drag && typeof state.selectId === 'number') {
        // move node
        const nodeId = state.selectId
        const { clientX: prevX, clientY: prevY } = state.mouseBlockDragPos as clientPos
        state.mouseBlockDragPos = { clientX, clientY }
        const coef = (state.config.zoom.value)
        const dx = (clientX - prevX) / coef
        const dy = (clientY - prevY) / coef;
        (new Flow(state)).dragNode({ nodeId, dy, dx })
      }
    },
    canvasMouseUp: (state) => {
      const flow = new Flow(state)
      if (state.portToConnect) {
        const [startId, _, startPort] = state.portToConnect.split('_').map(v => Number(v))
        const endId = Number(state.selectId)
        const endPort = 1
        flow.addConnection({startId, startPort, endId, endPort})
      }
      state.portToConnect = undefined
      state.newPathDirection = null
      state.canvasDrag = false
      state.config.drag = false
      if (state.select?.type === 'output') {
        state.select = null
      }
      flow.alignAll()
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
      const { selectId, connections } = state
      if (typeof selectId === 'string')
        delete connections[selectId];
    },
    load,
    addConnection: (state, action: PayloadAction<addConnectionType>) => {
      const flow = new Flow(state)
      flow.addConnection(action.payload)
    },
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
