import { useConnectionCurvature, useConnectionIds } from "../redux/selectors";
import { Path } from "./Path";

const Connection = ({ id }: { id: number }) => {
  const d = useConnectionCurvature(id);
  return <Path key={id} id={id} d={d} />;
};

export const ConnectionList = () => {
  const connections = useConnectionIds();

  const conns = connections.map((id) => {
    return <Connection key={id} id={id} />;
  });
  return <>{conns}</>;
};
