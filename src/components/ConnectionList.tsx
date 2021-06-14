import { selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector } from "../redux/hooks";
import Connection from "./Connection";
import handler from "./drawflowHandler";

export const ConnectionList = () => {
  const { connections, ports } = useAppSelector(selectActiveDrawflow);

  const conns = Object.entries(connections)
    .filter(([, conn]) => conn)
    .map(([key]) => {
      // key: fromId_portNum_toId_portNum
      const arr = key.split("_").map(Number);

      const startKey = `${arr[0]}_out_${arr[1]}`;
      const endKey = `${arr[2]}_in_${arr[3]}`;

      if (!ports[startKey] || !ports[endKey]) {
        // console.error(`No such connection`, key);
        return null;
      }

      const start = {
        x: ports[startKey].x,
        y: ports[startKey].y,
      };
      const end = {
        x: ports[endKey].x,
        y: ports[endKey].y,
      };
      const d = handler.createCurvature(start, end);
      return <Connection.Path key={key} svgKey={key} d={d} />;
    });
  return <>{conns}</>;
};
