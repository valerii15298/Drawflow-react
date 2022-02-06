import { useData } from "../graphql/apollo/useData";
import { useNodeIds } from "../redux/selectors";
import DrawflowNodeBlock from "./DrawflowNodeBlock";

export const NodeList = () => {
  // console.log("Render NodeList");

  // const drawflow = useNodeIds();
  const drawflow = useData().data?.nodes;
  if (!drawflow) return <div>Loading...</div>;

  return (
    <>
      {drawflow.map((node) => {
        return <DrawflowNodeBlock key={node.id} id={node.id} />;
      })}
    </>
  );
};
