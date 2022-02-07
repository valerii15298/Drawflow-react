import { configureStore, createReducer } from "@reduxjs/toolkit";
import lodash from "lodash";
import { getDefaultFlowNode } from "../models/getDefaultFlowNode";
import { getFlowInitialState } from "../models/getFlowInitialState";
import handler from "../models/tools";
import {
  clientPos,
  flowType,
  node,
  ObjectKeys,
  portType,
  Slices,
} from "../types";
import {
  addNewNode,
  canvasShapeUpdated,
  insertCopiedNode,
  setStateAction,
  toggleSidebar,
} from "./actions";
import { fetchBotFlow } from "./api";
import {
  drawflowSlice,
  getDefaultStateData,
  selectActiveDrawflow,
  setState,
} from "./drawflowSlice";

const reducer = createReducer(getFlowInitialState(), (builder) => {
  builder
    .addCase(setStateAction, setState)
    .addCase(insertCopiedNode, (appState) => {
      const state = selectActiveDrawflow(appState);
      if (state.nodeToCopyId === undefined) return;
      const { clientX, clientY } = state.clientCurrentMousePos as clientPos;
      const node = JSON.parse(
        JSON.stringify(state.drawflow[state.nodeToCopyId])
      );
      if (!appState.canvas) {
        console.error("Canvas shape is not available");
        return;
      }
      node.pos = handler.getPos(
        clientX,
        clientY,
        state.config.zoom.value,
        appState.canvas
      );
      const getId = () => {
        const ids = ObjectKeys(state.drawflow);
        return ids.length ? Math.max(...ids) + 1 : 1;
      };

      const id = getId();
      state.drawflow[id] = {
        ...node,
        id,
        height: 0,
        width: 0,
      };
    })

    .addCase(toggleSidebar, (state) => {
      state.sidebarVisible = !(state.sidebarVisible ?? true);
    })

    .addCase(
      addNewNode,
      (appState: flowType, { payload: { clientX, clientY, templateNode } }) => {
        const state = appState.flows[appState.version];

        if (!appState.canvas) {
          throw new TypeError("Canvas shape is not available");
        }

        // use template to get data for node
        const node: node = {
          ...templateNode,
          visible: 0,
          id: 0,
          pos: {
            x: 0,
            y: 0,
          },
          isSub: false,
          height: 0,
          width: 0,
        };

        node.pos = handler.getPos(
          clientX,
          clientY,
          state.config.zoom.value,
          appState.canvas
        );
        state.mouseBlockDragPos = {
          clientX,
          clientY,
        };
        // TODO change for id from server
        const getId = (obj: Record<number, any>) => {
          const ids = ObjectKeys(obj);
          return ids.length ? Math.max(...ids) + 1 : 1;
        };

        // add ports to node

        const id = getId(state.drawflow);
        state.drawflow[id] = {
          ...node,
          id,
        };
        state.select = {
          type: "node",
          selectId: id,
        };
        state.config.drag = true;

        let pid = getId(state.ports);
        state.ports[pid] = {
          id: pid,
          type: portType.in,
          nodeId: id,
          portId: 1,
          pos: {
            x: 0,
            y: 0,
          },
        };

        pid = getId(state.ports);
        state.ports[pid] = {
          id: pid,
          type: portType.out,
          nodeId: id,
          portId: 1,
          pos: {
            x: 0,
            y: 0,
          },
        };

        pid = getId(state.ports);
        state.ports[pid] = {
          id: pid,
          type: portType.out,
          nodeId: id,
          portId: 2,
          pos: {
            x: 0,
            y: 0,
          },
        };
      }
    )
    .addCase(canvasShapeUpdated, (appState, { payload }) => {
      appState.canvas = payload;
    })

    .addCase(fetchBotFlow.fulfilled, (state, { payload }) => {
      if (!payload) return;

      const { flows } = state;
      const newFlows = {} as typeof flows;
      for (const id in flows) {
        if (!(id in payload)) {
          newFlows[id] = flows[id];
        }
      }
      for (const flowId in payload) {
        const newFlow = payload[flowId];
        const oldFlow = flows[flowId];
        const flow = (newFlows[flowId] = getDefaultStateData());

        if (oldFlow) {
          lodash.merge(flow, oldFlow);
        }
        // merge connections
        flow.connections = {};
        for (const connId in newFlow.connections) {
          const oldConn = oldFlow?.connections[connId];
          flow.connections[connId] = {
            ...newFlow.connections[connId],
            visible: oldConn ? oldConn.visible : 0,
          };
        }

        //merge ports
        flow.ports = {};
        for (const portId in newFlow.ports) {
          const oldPort = oldFlow?.ports[portId];
          flow.ports[portId] = {
            ...newFlow.ports[portId],
            pos: oldPort
              ? oldPort.pos
              : {
                  x: 0,
                  y: 0,
                },
          };
        }

        // merge nodes
        flow.drawflow = {};
        for (const nodeId in newFlow.drawflow) {
          const newNode = newFlow.drawflow[nodeId];
          const oldNode = oldFlow?.drawflow[nodeId];
          const node = (flow.drawflow[nodeId] = {
            ...getDefaultFlowNode(),
          });
          lodash.merge(node, oldNode ?? {});
          lodash.merge(node, newNode);
        }
      }
      console.log({ newFlows });
      state.flows = newFlows;
    })

    // reducer for drawflow
    .addMatcher(
      (action) => action.type.startsWith(Slices.Drawflow),
      (state, action) => {
        state.flows[state.version] = drawflowSlice(
          state.flows[state.version],
          action
        );
      }
    );
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// store.subscribe(() => console.log(store.getState()))
