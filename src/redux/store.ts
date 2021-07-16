import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  canvasShape,
  clientPos,
  connections,
  drawflow,
  flowType,
  mainWindow,
  node,
  NODE_TYPE,
  setStateFunction,
  sideWindow,
  Slices,
} from "../types";
import {
  drawflowSlice,
  initialState as drawflowInitialState,
  selectActiveDrawflow,
  setState,
} from "./drawflowSlice";
import handler from "../tools";
import {
  changeVersion,
  fetchFlowVersion,
  fetchGroups,
  fetchTemplateNodes,
} from "./api";
import { getNodeFromTemplate } from "../models/tools";
import { Flow } from "./Flow";

export const addNewNode = createAction<clientPos>("addNewNode");
export const dragTemplate = createAction<number | undefined>("dragTemplate");
export const canvasShapeUpdated =
  createAction<canvasShape>("canvasShapeUpdated");
export const insertCopiedNode = createAction("insertCopiedNode");
export const toggleSidebar = createAction("toggleSidebar");
export const setStateAction = createAction<
  Record<string, any> | setStateFunction
>("setState");

export const flowTypeActions = {
  setStateAction,
};

const initialState: flowType = {
  version: 0,
  flows: [drawflowInitialState],
  templates: [],
  dragTemplate: 0,
  groups: {},
  windowConfig: {
    id: 0,
    mainId: mainWindow.mainFlow,
    sideId: sideWindow.none,
    background: {
      opacity: 0,
      blur: 0,
      imageUrl: "",
    },
  },
};

const reducer = createReducer(initialState, (builder) => {
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
      state.drawflow[state.nodeId] = {
        ...node,
        id: state.nodeId,
        height: 0,
        width: 0,
      };
      ++state.nodeId;
    })

    .addCase(changeVersion.fulfilled, (state, { payload }) => {
      payload !== undefined && (state.version = payload);
    })

    .addCase(toggleSidebar, (state) => {
      state.sidebarVisible = !(state.sidebarVisible ?? true);
    })

    .addCase(
      addNewNode,
      (
        appState: flowType,
        { payload: { clientX, clientY } }: PayloadAction<clientPos>
      ) => {
        const state = appState.flows[appState.version];
        const templateNode = appState.templates.find(
          ({ nodes_id }) => nodes_id === appState.dragTemplate
        );

        if (!appState.dragTemplate) return;
        if (!appState.canvas) {
          console.error("Canvas shape is not available");
          return;
        }
        if (!templateNode) {
          console.error("Template node not found");
          return;
        }

        // use template to get data for node
        const node: node = {
          id: 0,
          type: NODE_TYPE.MIDDLE,
          data: getNodeFromTemplate(templateNode),
          port: { in: 1, out: 2 },
          pos: { x: 0, y: 0 },
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
        state.mouseBlockDragPos = { clientX, clientY };
        state.drawflow[state.nodeId] = {
          ...node,
          id: state.nodeId,
          height: 0,
          width: 0,
        };
        state.select = { type: "node", selectId: state.nodeId++ };
        state.config.drag = true;

        appState.dragTemplate = undefined;
      }
    )
    .addCase(dragTemplate, (appState, { payload }) => {
      appState.dragTemplate = payload;
    })
    .addCase(canvasShapeUpdated, (appState, { payload }) => {
      appState.canvas = payload;
    })

    .addCase(fetchTemplateNodes.fulfilled, (state, { payload }) => {
      // console.log(payload);
      state.templates = payload;
    })

    .addCase(fetchFlowVersion.fulfilled, (state, { payload: steps }) => {
      // console.log(steps);
      if (!steps || steps.length === 0) {
        return;
      }
      console.log(steps);
      state.version = steps[0].update_version;
      const drawflow: drawflow = {};
      const connections: connections = [];
      const subParents: Record<number, number> = {};
      const firstSubs: Record<number, boolean> = {};
      steps.forEach((step) => {
        step.node_attributes?.forEach((subId, idx) => {
          subParents[subId] = step.this_node_unique_id;
          if (idx === 0) {
            firstSubs[subId] = true;
          }
        });
      });
      steps.forEach((step) => {
        const { this_node_unique_id, prev_node_unique_id } = step;
        const isSub = subParents[this_node_unique_id] !== undefined;

        prev_node_unique_id !== null &&
          connections.push({
            startId: isSub
              ? prev_node_unique_id
              : subParents[prev_node_unique_id] ?? prev_node_unique_id,
            endId: this_node_unique_id,
            startPort: firstSubs[this_node_unique_id] ? 2 : 1,
            endPort: 1,
            visible: true,
          });

        drawflow[this_node_unique_id] = {
          id: this_node_unique_id,
          height: 0,
          width: 0,
          type: NODE_TYPE.MIDDLE,
          isSub,
          port: { out: isSub ? 1 : 2, in: 1 },
          pos: { x: 0, y: 0 },
          data: step,
        };
        ["name", "description", "icon_link_selected"].forEach((key) => {
          const pKey = `node_${key}` as keyof typeof step.flow_node;
          step[key] = step.flow_node?.[pKey];
        });
        step.nodes_tooltip = step.flow_node?.node_tooltip || "";
        delete step.flow_node;
      });
      state.flows[state.version] = drawflowSlice(state.flows[state.version], {
        type: Slices.Drawflow + "/load",
        payload: { drawflow, connections },
      });

      // Put in center
      const flow = new Flow(
        JSON.parse(JSON.stringify(state.flows[state.version]))
      );
      const { heads } = flow;
      if (!state.canvas) {
        console.error("Canvas not initialized");
        return;
      }
      const { height, width } = state.canvas;
      heads[0].setPos({ x: width / 3, y: height / 10 });
      state.flows[state.version] = flow.state;
    })
    .addCase(fetchGroups.fulfilled, (state, { payload }) => {
      state.groups = payload;
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
export const getAppState = store.getState;
