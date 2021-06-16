import { useConnectionIds, usePortPos } from "../redux/selectors";
import { Path } from "./Path";
import handler from "./drawflowHandler";

const Connection = ({ id: key }: { id: string }) => {
  // key: fromId_portNum_toId_portNum
  const arr = key.split("_").map(Number);

  const startKey = `${arr[0]}_out_${arr[1]}`;
  const endKey = `${arr[2]}_in_${arr[3]}`;
  const start = usePortPos(startKey);
  const end = usePortPos(endKey);

  const d = start && end ? handler.createCurvature(start, end) : "";
  return <Path key={key} svgKey={key} d={d} />;
};

export const ConnectionList = () => {
  const connections = useConnectionIds();

  const conns = connections.map(([key]) => {
    return <Connection key={key} id={key} />;
  });
  return <>{conns}</>;
};
