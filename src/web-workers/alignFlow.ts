// @ts-ignore
import { Flow } from "../redux/Flow";

onmessage = ({ data: { 0: state, 1: version } }) => {
  const flow = new Flow(state);
  flow.alignAll();
  // @ts-ignore
  postMessage({
    drawflow: flow.state.drawflow,
    version,
  });
};
