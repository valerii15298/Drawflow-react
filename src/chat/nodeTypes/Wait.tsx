import { useEffect } from "react";
import { selectActiveDrawflow } from "../../redux/drawflowSlice";
import { useAppSelector } from "../../redux/hooks";
import { mapBotTypeToComponent, usePushNextNode } from "../BotNode";
import { useChatBotContext } from "../Chat";
import { botNodeType, IBotNodeData } from "../chat-types";

const waitNumberOfMilliseconds = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

interface IWaitBotNodeData {
  delay: number;
}

const Wait = ({ flowNodeId }: IBotNodeData) => {
  const { state, actions } = useChatBotContext();
  const { executed } = state.messages.find(
    (m) => "flowNodeId" in m && m.flowNodeId === flowNodeId
  ) as IBotNodeData;
  const nodeData = useAppSelector(
    (s) => selectActiveDrawflow(s).drawflow[flowNodeId].data.node_object_lists
  ) as unknown as IWaitBotNodeData;

  const pushNextNode = usePushNextNode(flowNodeId);

  useEffect(() => {
    if (executed) return;
    // console.log("Execute");
    const execute = async () => {
      await waitNumberOfMilliseconds(nodeData.delay);
    };

    execute().then(() => {
      actions.setState((s) => {
        const node = s.messages.find(
          (m) => "flowNodeId" in m && m.flowNodeId === flowNodeId
        ) as IBotNodeData;

        node.renderable = true;
        node.executed = true;
      });
      pushNextNode();
    });
  }, [actions, executed, flowNodeId, nodeData.delay, pushNextNode]);

  if (!executed) return <div>Executing</div>;
  return <div>Hello delay: {JSON.stringify(nodeData)}</div>;
};

mapBotTypeToComponent[botNodeType.Delay] = Wait;
