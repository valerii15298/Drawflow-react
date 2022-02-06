import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css";
import { useChatBotContext } from "../Chat";
import { getDefaultBotNodeData, IChatNodeData } from "../chat-types";
import { mapChatNodeTypeToComponent } from "../MapChatNodeTypeToComponent";
import { chatNodeType } from "./chatNodeType";

enum DisplayType {
  Select = "select",
  Carousel = "carousel",
  List = "list",
}

interface Props extends IChatNodeData {
  props: {
    display_type: DisplayType;
  };
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

  const onChooseOption = (option: typeof options[number]) => {
    console.log(option);
    if (option.id !== undefined) {
      actions.appendMessageNode({
        ...getDefaultBotNodeData(),
        flowNodeId: option.id,
      });
    }
  };

  return (
    <Slider {...settings}>
      {options.map((option, i) => {
        return (
          <div key={i}>
            <div
              style={{
                textAlign: "center",
                width: "100%",
              }}
            >
              <img
                style={{
                  height: 100,
                  width: 100,
                  margin: "auto",
                }}
                src={option.nodeState.NodeProps.NodeImageProps?.src}
                alt=""
              />
              <button key={i} onClick={() => onChooseOption(option)}>
                {option.nodeState.NodeProps.NodeImageProps?.src}
              </button>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

mapChatNodeTypeToComponent[chatNodeType.Switch] = NodeSwitch;
