import Toggle from "react-toggle";
import settingsPng from "../assets/flowsettings.png";
import { setStateAction } from "../redux/actions";
import { postFlow } from "../redux/api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { mainWindow, sideWindow } from "../types";
import { SelectFlowVersion } from "./SelectFlowVersion";
import { ToggleSidebar } from "./Sidebar";
import {
  ActiveLabel,
  Controls,
  DeleteFlowButton,
  FlowInfo,
  FlowSubtitle,
  FlowTitle,
  HeaderSection,
  InfoDiv,
  SaveFlowButton,
  ToggleButton,
  ToggleSection,
} from "./StyledComponents";

export const Header = () => {
  const dispatch = useAppDispatch();
  const flowInfo = useAppSelector((s) => s.flowInfo);

  const sidebarVisible = useAppSelector((s) => s.sidebarVisible) ?? true;
  const mainId = useAppSelector((s) => s.windowConfig.mainId);

  const { flow_name, flow_description, flow_active } = flowInfo || {};
  // console.log({ flow_active });

  return (
    <HeaderSection>
      <FlowInfo>
        {!sidebarVisible ? <ToggleSidebar /> : null}
        {/*<CircleSpan>*/}
        {/*  <Arrow height={14} />*/}
        {/*</CircleSpan>*/}
        <InfoDiv>
          <FlowTitle>{flow_name || "Loading ..."}</FlowTitle>
          <FlowSubtitle>{flow_description || "Loading ..."}</FlowSubtitle>
        </InfoDiv>
      </FlowInfo>

      <ToggleSection>
        <ToggleButton
          onClick={() =>
            dispatch(
              setStateAction({
                windowConfig: { mainId: mainWindow.mainFlow },
              })
            )
          }
        >
          Diagram view
        </ToggleButton>
        <ToggleButton
          onClick={() =>
            dispatch(
              setStateAction({
                windowConfig: { mainId: mainWindow.codeEditor },
              })
            )
          }
        >
          Code editor
        </ToggleButton>
        <ToggleButton>
          <ActiveLabel>
            <span>Active</span>
            <Toggle
              checked={!!flow_active}
              icons={{
                checked: null,
                unchecked: null,
              }}
              onChange={(e) =>
                dispatch(
                  setStateAction({
                    flowInfo: { flow_active: +e.target.checked },
                  })
                )
              }
            />
          </ActiveLabel>
        </ToggleButton>
        <ToggleButton
          onClick={() =>
            dispatch(
              setStateAction({
                windowConfig: { sideId: sideWindow.flowSettings },
              })
            )
          }
        >
          <img src={settingsPng} alt="" />
        </ToggleButton>
      </ToggleSection>
      {mainId === mainWindow.mainFlow && <SelectFlowVersion />}

      <Controls>
        <DeleteFlowButton>Delete flow</DeleteFlowButton>
        <SaveFlowButton onClick={() => dispatch(postFlow())}>
          Save flow
        </SaveFlowButton>
      </Controls>
    </HeaderSection>
  );
};
