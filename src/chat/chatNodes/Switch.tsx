import { useChatBotContext } from "../Chat";
import { getDefaultBotNodeData, IChatNodeData } from "../chat-types";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

interface Props extends IChatNodeData {
  any?: any;
}

const NodeSwitch = (props: Props) => {
  const { id, flowNodeId } = props;
  const { actions, flow } = useChatBotContext();

  const options = flow.getNode(flowNodeId).out1;

  const onChooseOption = (option) => {
    actions.appendMessageNode({
      ...getDefaultBotNodeData(),
      flowNodeId: option.out1[0].id,
    });
  };

  return (
    <div>
      {options.map((option, i) => {
        return (
          <button key={i} onClick={() => onChooseOption(option)}>
            {option.nodeState.data.flow_node.node_name}
          </button>
        );
      })}
    </div>
  );
};

mapChatNodeTypeToComponent[chatNodeType.Switch] = NodeSwitch;
