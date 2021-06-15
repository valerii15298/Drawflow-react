import { useNodeIds } from "../redux/selectors";
import DrawflowNodeBlock from "./DrawflowNodeBlock";

export const NodeList = () => {
  console.log(`Render NodeList`);

  const drawflow = useNodeIds();

  // return null;

  return (
    <>
      {drawflow.map((id) => {
        return <DrawflowNodeBlock key={id} id={id} />;
      })}
    </>
  );
};
