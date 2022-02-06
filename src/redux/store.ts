import { configureStore, createReducer } from "@reduxjs/toolkit";
import { getFlowInitialState } from "../models/getFlowInitialState";
import handler from "../models/tools";
import { clientPos, Slices } from "../types";
import {
  canvasShapeUpdated,
  dragTemplate,
  insertCopiedNode,
  setStateAction,
  toggleSidebar,
} from "./actions";
import { fetchBotFlow } from "./api";
import { drawflowSlice, selectActiveDrawflow, setState } from "./drawflowSlice";

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
      state.drawflow[state.nodeId] = {
        ...node,
        id: state.nodeId,
        height: 0,
        width: 0,
      };
      ++state.nodeId;
    })

    .addCase(toggleSidebar, (state) => {
      state.sidebarVisible = !(state.sidebarVisible ?? true);
    })

    // .addCase(
    //   addNewNode,
    //   (
    //     appState: flowType,
    //     { payload: { clientX, clientY } }: PayloadAction<clientPos>
    //   ) => {
    //     const state = appState.flows[appState.version];
    //     const templateNode = appState.templates.find(
    //       ({ nodes_id }) => nodes_id === appState.dragTemplate
    //     );
    //
    //     if (!appState.dragTemplate) return;
    //     if (!appState.canvas) {
    //       console.error("Canvas shape is not available");
    //       return;
    //     }
    //     if (!templateNode) {
    //       console.error("Template node not found");
    //       return;
    //     }
    //
    //     // use template to get data for node
    //     const node: node = {
    //       id: 0,
    //       data: getNodeFromTemplate(templateNode),
    //       port: {
    //         in: 1,
    //         out: 2,
    //       },
    //       pos: {
    //         x: 0,
    //         y: 0,
    //       },
    //       isSub: false,
    //       height: 0,
    //       width: 0,
    //     };
    //     node.data.this_node_unique_id = state.nodeId;
    //
    //     node.pos = handler.getPos(
    //       clientX,
    //       clientY,
    //       state.config.zoom.value,
    //       appState.canvas
    //     );
    //     state.mouseBlockDragPos = {
    //       clientX,
    //       clientY,
    //     };
    //     state.drawflow[state.nodeId] = {
    //       ...node,
    //       id: state.nodeId,
    //       height: 0,
    //       width: 0,
    //     };
    //     state.select = {
    //       type: "node",
    //       selectId: state.nodeId++,
    //     };
    //     state.config.drag = true;
    //
    //     appState.dragTemplate = undefined;
    //   }
    // )
    .addCase(dragTemplate, (appState, { payload }) => {
      appState.dragTemplate = payload;
    })
    .addCase(canvasShapeUpdated, (appState, { payload }) => {
      appState.canvas = payload;
    })

    .addCase(fetchBotFlow.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.flows = payload;
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
