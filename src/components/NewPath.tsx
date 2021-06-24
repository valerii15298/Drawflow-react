import { Path } from "./Path";
import { useNewPathCurvature } from "../redux/selectors";

export const NewPath = () => {
  console.log("Render new Path");
  const d = useNewPathCurvature() ?? "";

  return <Path d={d} />;
};
