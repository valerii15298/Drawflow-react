import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css";
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

  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // variableWidth: true,
    adaptiveHeight: true,
    className: "myslider",
    arrows: false,
    // focusOnSelect: true,
  };

  const options = flow.getNode(flowNodeId).out1;

  const onChooseOption = (option) => {
    if (option.out1[0]?.id !== undefined) {
      actions.appendMessageNode({
        ...getDefaultBotNodeData(),
        flowNodeId: option.out1[0].id,
      });
    }
  };

  return (
    <Slider {...settings}>
      {options.map((option, i) => {
        return (
          <button key={i} onClick={() => onChooseOption(option)}>
            {option.nodeState.data.flow_node.node_name}
          </button>
        );
      })}
    </Slider>
  );
};

mapChatNodeTypeToComponent[chatNodeType.Switch] = NodeSwitch;
