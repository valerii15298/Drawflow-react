import styled from "styled-components";
import { getTemplateNode } from "../models/getTemplateNode";
import { updateTemplateNode } from "../redux/api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Plus } from "../svg";
import { NodeDiv, NodeTemplate } from "./NodeTemplate";

const ListDiv = styled.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;

  overflow-y: auto;
  //max-height: calc(100vh - 55px);
  max-height: calc(100vh - 90px);

  min-height: 0; /* NEW */
  min-width: 0;

  &:after {
    grid-column: span 3;
    //background-color: red;
    height: 0.1em; /* 3em (desired padding effect) minus 1em (grid-gap setting) */
    content: "";
    order: 999;
  }

  //&::-webkit-scrollbar-thumb {
  //  background-color: #217ce8;
  //  border-radius: 1em;
  //}

  &::-webkit-scrollbar {
    //display: none;
    //height: 0.1em;
    width: 0.5em;
  }
`;

const AddTemplateNodeDiv = styled(NodeDiv)`
  /* min-height: 5em; */
  padding: 25px;
  order: 998;

  :hover {
    cursor: pointer;
  }
`;

const TemplateNodesList = (props: {
  searchWord: string;
  selectedGroup: number;
}) => {
  const list = useAppSelector((s) => s.templates);
  const dispatch = useAppDispatch();
  const { searchWord, selectedGroup } = props;
  const searchArr = searchWord
    .toLowerCase()
    .split(" ")
    .filter((item) => item.length > 0);

  return (
    <ListDiv>
      {list.map((block) => {
        // const label = JSON.stringify(block, null, 2);
        const label = block.name + " " + block.description;

        return (
          (selectedGroup === 0 || block.nodes_group_id === selectedGroup) &&
          (searchArr.find((word) => label.toLowerCase().includes(word)) ||
            !searchArr.length) && (
            <NodeTemplate key={block.nodes_id} {...block} />
          )
        );
      })}
      <AddTemplateNodeDiv
        onClick={() => {
          const templateNode = getTemplateNode();
          templateNode.nodes_group_id = selectedGroup;
          dispatch(
            updateTemplateNode({
              ...templateNode,
              order: Math.max(...list.map((v) => v.order)) + 1,
            })
          );
        }}
      >
        <Plus />
      </AddTemplateNodeDiv>
    </ListDiv>
  );
};

export default TemplateNodesList;
