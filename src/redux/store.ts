import {
  configureStore,
  createAction,
  createAsyncThunk,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  canvasShape,
  clientPos,
  flowType,
  mainWindow,
  setStateFunction,
  sideWindow,
  Slices,
} from "../types";
import { drawflowSlice, selectActiveDrawflow, setState } from "./drawflowSlice";
import mock, { testNode } from "../mock";
import { initialState as drawflowInitialState } from "./drawflowSlice";
import handler from "../tools";
import { fetchGroups, fetchTemplateNodes } from "./api";

export const changeVersion = createAction<number>("versions/changed");
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
  flows: [drawflowInitialState, drawflowInitialState, drawflowInitialState],
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

    .addCase(changeVersion, (state, { payload }) => {
      state.version = payload;
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
        if (!appState.dragTemplate) return;
        if (!appState.canvas) {
          console.error("Canvas shape is not available");
          return;
        }

        const state = appState.flows[appState.version];

        // use template to get data for node
        const node = testNode();
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
      console.log(payload);
      state.templates = payload;
    })

    // .addCase(fetchFlowVersion.fulfilled, (state, action) => {
    //   const { nodes: drawflow, connections } = action.payload;
    //   state.flows[state.version] = drawflowSlice(state.flows[state.version], {
    //     type: Slices.Drawflow + "/load",
    //     payload: { drawflow, connections },
    //   });
    // })
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
