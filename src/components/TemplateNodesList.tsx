import {
  useTemplateNodesMutation,
  useTemplateNodesQuery,
} from "../generated/apollo";
import { getTemplateNode } from "../models/getTemplateNode";
import { Plus } from "../svg";
import { NodeTemplate } from "./NodeTemplate";
import { AddTemplateNodeDiv, ListDiv } from "./StyledComponents";

const TemplateNodesList = (props: {
  searchWord: string;
  selectedGroup: number;
}) => {
  const { data, loading, error } = useTemplateNodesQuery();
  const [addTemplateNodes] = useTemplateNodesMutation({
    refetchQueries: ["templateNodes"],
  });
  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;
  const list = data?.templateNodes ?? [];
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
          (selectedGroup === -1 || block.group.id === Number(selectedGroup)) &&
          (searchArr.find((word) => label.toLowerCase().includes(word)) ||
            !searchArr.length) && <NodeTemplate key={block.id} {...block} />
        );
      })}
      <AddTemplateNodeDiv
        onClick={() => {
          const templateNode = getTemplateNode();
          templateNode.order =
            list.length === 0
              ? 1
              : Math.max(...list.map(({ order }) => order)) + 1;
          addTemplateNodes({
            variables: {
              input: templateNode,
            },
          }).then((a) => {
            console.log(a);
          });
        }}
      >
        <Plus />
      </AddTemplateNodeDiv>
    </ListDiv>
  );
};

export default TemplateNodesList;
