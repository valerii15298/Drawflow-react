import { selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector } from "../redux/hooks";
import { CirclePortComponent } from "./Circle";
import handler from "./drawflowHandler";

export const NewPath = () => {
  const { select, config, ports, selectId, newPathDirection } =
    useAppSelector(selectActiveDrawflow);
  if (!select?.portId) {
    console.error(`Select port id not set!`);
    return null;
  }
  const startKey = `${selectId}_out_${select.portId}`;

  if (!ports[startKey]) {
    console.error(`Start port key not exist`);
    return null;
  }
  if (!newPathDirection) {
    console.error(`Path direction null`);
    return null;
  }

  const start = {
    x: ports[startKey].x,
    y: ports[startKey].y,
  };
  const zoom = config.zoom.value;
  const { clientX, clientY } = newPathDirection;
  const end = handler.getPos(clientX, clientY, zoom);
  const d = handler.createCurvature(start, end);

  return <CirclePortComponent d={d} />;
};
