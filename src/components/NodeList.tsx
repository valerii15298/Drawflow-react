import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { selectActiveDrawflow } from "../redux/drawflowSlice";
import { useAppSelector } from "../redux/hooks";
import DrawflowNodeBlock from "./DrawflowNodeBlock";

const selectNodeIds = createDraftSafeSelector(selectActiveDrawflow, (s) =>
  Object.entries(s.drawflow)
    .filter(([id, { visible }]) => visible !== false)
    .map(([id]) => Number(id))
);

export const NodeList = () => {
  const drawflow = useAppSelector(selectNodeIds);
  // console.log(`Render NodeList`)

  return (
    <>
      {drawflow.map((id) => {
        return <DrawflowNodeBlock key={id} id={id} />;
      })}
    </>
  );
};
