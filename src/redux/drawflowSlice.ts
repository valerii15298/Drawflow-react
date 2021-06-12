import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import handler from '../components/drawflowHandler'
import { dataNode, ports, Slices, stateData, clientPos, addConnectionType, loadType, moveNodeType, pos } from '../types'
import { Flow } from './Flow'
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
  flow.alignAll()
}


const slice = createSlice({
  name: Slices.Drawflow,
  initialState,
  reducers: {
    setEditLock: (state, { payload }: PayloadAction<boolean>) => {
      state.editLock = payload
    },
    align,
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
      state.clientCurrentMousePos = { clientX, clientY }
      if (state.canvasDrag) {
        state.config.canvasTranslate.x += movementX
        state.config.canvasTranslate.y += movementY
        // console.log('Drag canvas')
      } else if (state.select?.type === 'output') {
        state.newPathDirection = { clientX, clientY }
        // console.log('New path')
      } else if (state.config.drag && typeof state.selectId === 'number') {
        // move node
        // console.log('Move node')
        const nodeId = state.selectId
        const { clientX: prevX, clientY: prevY } = state.mouseBlockDragPos as clientPos
        state.mouseBlockDragPos = { clientX, clientY }
        const coef = (state.config.zoom.value)
        const dx = (clientX - prevX) / coef
        const dy = (clientY - prevY) / coef;
        (new Flow(state)).dragNode({ nodeId, dy, dx })
      }
      // align(state)
    },
    canvasMouseUp: (state) => {
      const flow = new Flow(state)
      if (state.portToConnect) {
        const [startId, , startPort] = state.portToConnect.split('_').map(v => Number(v))
        // console.log([startId, startPort])
        const endId = Number(state.selectId)
        const endPort = 1
        flow.addConnection({ startId, startPort, endId, endPort })
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
    pushPorts: (state: stateData, { payload }: PayloadAction<ports>) => {
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
    },
    toggleSubnodes: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      const flow = new Flow(state)
      const node = flow.getNode(id)
      node.toggleSubnodesVisibility()
      align(state)
    },
    toggleChildren: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      const flow = new Flow(state)
      const node = flow.getNode(id)
      node.toggleChildrenVisibility()
      align(state)
    },
    copyNode: (state, { payload }: PayloadAction<number>) => {
      state.nodeToCopyId = payload
    },
    insertCopiedNode: (state) => {
      if (state.nodeToCopyId === undefined) return
      const { clientX, clientY } = state.clientCurrentMousePos as clientPos
      const node = JSON.parse(JSON.stringify(state.drawflow[state.nodeToCopyId]))
      node.pos = handler.getPos(clientX, clientY, state.config.zoom.value)
      state.drawflow[state.nodeId] = { ...node, id: state.nodeId, height: 0, width: 0 }
      ++state.nodeId
    },
  },
})

export const actions = slice.actions
export const drawflowSlice = slice.reducer

// Other code such as selectors can use the imported `RootState` type
export const selectActiveDrawflow = (state: RootState) => state.flows[state.version]
