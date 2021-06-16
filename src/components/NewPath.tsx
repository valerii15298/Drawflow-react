import { selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector } from "../redux/hooks";
import { Path } from "./Path";
import handler from "./drawflowHandler";
import { usePortPos } from "../redux/selectors";

export const NewPath = () => {
  console.log("Render new Path");

  const zoom = useAppSelector((s) => selectActiveDrawflow(s).config.zoom.value);
  const select = useAppSelector((s) => selectActiveDrawflow(s).select);
  const newPathDirection = useAppSelector(
    (s) => selectActiveDrawflow(s).newPathDirection
  );

  const startKey = `${select?.selectId}_out_${select?.portId}`;
  const start = usePortPos(startKey);

  if (!start) {
    console.error("No start port in newPath");
    return null;
  }

  if (!select?.portId) {
    console.error(`Select port id not set!`);
    return null;
  }

  if (!newPathDirection) {
    console.error(`Path direction null`);
    return null;
  }

  const { clientX, clientY } = newPathDirection;
  const end = handler.getPos(clientX, clientY, zoom);
  const d = handler.createCurvature(start, end);

  return <Path d={d} />;
};
