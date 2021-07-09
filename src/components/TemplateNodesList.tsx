import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Plus } from "../svg";
import { block } from "../types";
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

export const getTemplateNode: () => block = () => ({
  flow_node_type_id: 0,
  nodes_id: 0,
  node_scrdata_id: 0,
  flow_action_scrdata_id: 0,
  order: 0,
  nodes_group_id: 0,
  name: "**",
  description: "**",
  icon_link: "https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",
  icon_link_selected: "https://tastypoints.io/akm/tasty_images/pQ6hREGM.png",
  nodes_tooltip: "",
  id_priority: 0,
  active: 0,
  execution_wait_time_seconds: 0,
  execute_node_specific_date_time: "2020-11-11T19:30",
  loop_cycles: 0,
  node_settings_json: {},
  node_response_settings_json: {},
  loop_cycle_reached_jump_to_node: 0,
  node_attributes: {},
  node_object_lists: {},
  node_story: "Node story",
});

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
