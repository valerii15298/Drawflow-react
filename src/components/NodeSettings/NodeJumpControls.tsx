import PropTypes from "prop-types";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { setStateAction } from "../../redux/actions";
import { selectActiveDrawflow } from "../../redux/drawflowSlice";
import { Flow } from "../../redux/Flow";
import { useAppSelector } from "../../redux/hooks";
import Node from "../../redux/Node";
import { store } from "../../redux/store";
import { mainWindow } from "../../types";
import {
  JumpButton,
  ListChooserDiv,
  ListSettingsDiv,
  NodeJumpControlsDiv,
  NodesChooserDetails,
  SelectNodeSettingsItem,
  StyledSummary,
} from "./StyledComponents";

const jumpToNodeSettings = (id: number) => {
  store.dispatch(
    setStateAction({
      windowConfig: {
        id,
        mainId: mainWindow.nodeSettings,
      },
    })
  );
};
const SelectNextNodeItem = ({
  node,
  getNextListFromNode,
}: {
  node: Node;
  getNextListFromNode: (p: Node) => Node[];
}) => {
  const {
    id,
    nodeState: {
      positionNumber,
      info: { name },
    },
  } = node;
  return (
    <NodesChooserDetails leftShift={"1em"}>
      <StyledSummary>
        {name} #{id}:{positionNumber}
        <JumpButton onClick={() => jumpToNodeSettings(id)} key={id}>
          Jump
        </JumpButton>
      </StyledSummary>
      <ListSettingsDiv>
        {getNextListFromNode(node).map((nextNode) => (
          <SelectNextNodeItem
            getNextListFromNode={getNextListFromNode}
            key={nextNode.id}
            node={nextNode}
          />
        ))}
      </ListSettingsDiv>
    </NodesChooserDetails>
  );
};

export const PrevNodesChooser = ({
  id,
  render,
}: {
  render: (arg: any) => void;
  id: number;
}) => {
  const state = useAppSelector(selectActiveDrawflow);
  const flow = new Flow(state);
  const node = flow.getNode(id);
  const { prevDirectNodes } = node;

  return (
    <NodesChooserDetails leftShift={"0"}>
      <StyledSummary>Prev nodes</StyledSummary>
      {prevDirectNodes.length > 0 && (
        <ListChooserDiv>{prevDirectNodes.map(render)}</ListChooserDiv>
      )}
    </NodesChooserDetails>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
const JumpNodesChooserList = <T extends {}>(props: {
  list: T[];
  render: (item: T) => JSX.Element;
  title: string;
}) => {
  const { render, list, title } = props;
  const ref = useRef<HTMLDetailsElement>(null);
  useClickOutside(ref, () => {
    if (ref.current) {
      ref.current.open = false;
    }
  });
  return (
    <NodesChooserDetails leftShift={"0"} ref={ref}>
      <StyledSummary>{title}</StyledSummary>
      {list.length > 0 && <ListChooserDiv>{list.map(render)}</ListChooserDiv>}
    </NodesChooserDetails>
  );
};

const NodeJumpControls = ({ id }: { id: number }) => {
  const state = useAppSelector(selectActiveDrawflow);
  const flow = new Flow(state);
  // @ts-ignore
  const node = flow.getNode(id);
  const { subnodes, out1, prevDirectNodes } = node;

  const render = ({
    nodeState: {
      positionNumber,
      id,
      info: { name },
    },
  }: Node) => (
    <SelectNodeSettingsItem onClick={() => jumpToNodeSettings(id)} key={id}>
      {name} #{id}:{positionNumber}
    </SelectNodeSettingsItem>
  );

  return (
    <NodeJumpControlsDiv>
      <JumpNodesChooserList
        list={subnodes}
        render={render}
        title={"Subnodes"}
      />
      <JumpNodesChooserList
        list={prevDirectNodes}
        render={render}
        title={"Prev"}
      />
      <JumpNodesChooserList
        list={out1}
        render={(nextNode) => (
          <SelectNextNodeItem
            getNextListFromNode={({ out1 }) => out1}
            key={nextNode.id}
            node={nextNode}
          />
        )}
        title={"Next"}
      />
    </NodeJumpControlsDiv>
  );
};

NodeJumpControls.propTypes = {
  id: PropTypes.number,
};

export { NodeJumpControls };
