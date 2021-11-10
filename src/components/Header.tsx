import Toggle from "react-toggle";
import styled, { css } from "styled-components";
import settingsPng from "../assets/flowsettings.png";
import { setStateAction } from "../redux/actions";
import { postFlow } from "../redux/api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { mainWindow, sideWindow } from "../types";
import { SelectFlowVersion } from "./SelectFlowVersion";
import { ToggleSidebar } from "./Sidebar";

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`;

const FlowInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const buttonCss = css`
  text-align: center;
  height: 39px;
  font-size: 14px;
  border: 1px solid #e8e8ef;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    max-height: 90%;
    max-width: 90%;
  }

  margin: 0;
`;
const ToggleSection = styled.div`
  display: flex;
  align-items: center;
`;
const ToggleButton = styled.button`
  ${buttonCss};

  &:focus {
    background-color: #dfdfdf;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const CircleSpan = styled.button`
  margin: 0 10px;
  background-color: #eaecf1;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
`;
const InfoDiv = styled.div`
  display: grid;
  margin-left: 1em;
  //place-items: left;
  div {
  }
`;

const FlowTitle = styled.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto, serif;
`;
const FlowSubtitle = styled.div`
  color: #808292;
  font-size: 14px;
`;

const DeleteFlowButton = styled.button`
  ${buttonCss};

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`;
const SaveFlowButton = styled.button`
  background-color: #217ce8;
  ${buttonCss};
  color: white;
`;

const ActiveLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`;

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
