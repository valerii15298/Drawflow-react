// @ts-ignore
import { Flow } from "../redux/Flow";
import { stateData } from "../types";

let running = false;

onmessage = ({ data: { 0: state, 1: version } }) => {
  if (running) {
    return;
  }
  running = true;
  if (state.config.drag && state.select) {
    const s = state as stateData;
    const flow = new Flow(state);
    flow.toggleAvailablePortToConnect(s.select!.selectId);
    const { portToConnect } = flow.state;
    // @ts-ignore
    postMessage({
      portToConnect,
      version,
    });
  }
  running = false;
};
