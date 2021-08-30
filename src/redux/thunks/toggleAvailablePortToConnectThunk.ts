import { createAsyncThunk } from "@reduxjs/toolkit";
import { flowType } from "../../types";
// @ts-ignore
import TogglePortWorker from "../../web-workers/toggleAvailablePortToConnect?worker";
import { actions, selectActiveDrawflow } from "../drawflowSlice";
import { store } from "../store";

const togglePortWorker = new TogglePortWorker();
togglePortWorker.onmessage = (m) => {
  const { version } = store.getState();
  if (version === m.data.version) {
    store.dispatch(actions.setState({ portToConnect: m.data.portToConnect }));
  }
};

export const toggleAvailablePortToConnectThunk = createAsyncThunk(
  "toggleAvailablePortToConnect",
  async (_, { getState }) => {
    const appState = getState() as flowType;
    const { version } = appState;
    const state = selectActiveDrawflow(appState);
    togglePortWorker.postMessage([state, version]);
  }
);
