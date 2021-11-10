import styled from "styled-components";
import {
  useTemplateNodesMutation,
  useTemplateNodesQuery,
} from "../generated/apollo";
import { getTemplateNode } from "../models/getTemplateNode";
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
  selectedGroup: string;
}) => {
  const { data, loading, error } = useTemplateNodesQuery();
  const [addTemplateNodes] = useTemplateNodesMutation({
    refetchQueries: ["templateNodes"],
  });
  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;
  const list = data.queryTemplateNode;
  // console.log(list);
  // const dispatch = useAppDispatch();
  const { searchWord, selectedGroup } = props;
  const searchArr = searchWord
    .toLowerCase()
    .split(" ")
    .filter((item) => item.length > 0);

  return (
    <ListDiv>
      {list.map((block) => {
        // const label = JSON.stringify(block, null, 2);
        const label = block.info.name + " " + block.info.description;

        return (
          (selectedGroup === "All" || block.group.id === selectedGroup) &&
          (searchArr.find((word) => label.toLowerCase().includes(word)) ||
            !searchArr.length) && <NodeTemplate key={block.id} {...block} />
        );
      })}
      <AddTemplateNodeDiv
        onClick={() => {
          const templateNode = getTemplateNode();
          // const a:TemplateNode
          delete templateNode.props;
          delete templateNode.id;
          templateNode.group = { id: "0x2715" };
          const input = [
            {
              ...templateNode,
              props: {
                nodeImagePropsRef: {
                  src: "https://tastypoints.io/akm/tasty_images/cuTWiGOJ.png",
                },
              },
            },
          ];
          console.log(input);
          addTemplateNodes({
            variables: {
              input,
            },
          }).then((a) => {
            console.log(a);
          });
          // dispatch(
          //   updateTemplateNode({
          //     ...templateNode,
          //     order: Math.max(...list.map((v) => v.order)) + 1,
          //   })
          // );
        }}
      >
        <Plus />
      </AddTemplateNodeDiv>
    </ListDiv>
  );
};

export default TemplateNodesList;
