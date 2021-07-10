import styled from "styled-components";
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
  max-height: calc(100vh - 10%);
  /* width: 100%; */
`;

const AddTemplateNodeDiv = styled(NodeDiv)`
  /* min-height: 5em; */
  padding: 25px;
  :hover {
    cursor: pointer;
  }
`;

const TemplateNodesList = (props: { searchWord: string }) => {
  const list = useAppSelector((s) => s.templates);
  const dispatch = useAppDispatch();
  const { searchWord } = props;
  const searchArr = searchWord
    .toLowerCase()
    .split(" ")
    .filter((item) => item.length > 0);

  return (
    <ListDiv>
      {list.map((block) => {
        const label = JSON.stringify(block, null, 2);

        return (
          (searchArr.find((word) => label.toLowerCase().includes(word)) ||
            !searchArr.length) && (
            <NodeTemplate key={block.nodes_id} {...block} />
          )
        );
      })}
      <AddTemplateNodeDiv>
        <Plus />
      </AddTemplateNodeDiv>
    </ListDiv>
  );
};

export default TemplateNodesList;
