import styled, { css } from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { Arrow } from "../svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import settingsPng from "../assets/flowsettings.png";
import Toggle from "react-toggle";

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
  ${buttonCss}
  :focus {
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
  place-items: left;
  div {
  }
`;

const FlowTitle = styled.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto;
`;
const FlowSubtitle = styled.div`
  color: #808292;
  font-size: 14px;
`;

const DeleteFlowButton = styled.button`
  ${buttonCss}

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`;
const SaveFlowButton = styled.button`
  background-color: #217ce8;
  ${buttonCss}
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
  const flowInfo = useAppSelector((s) => s.flowInfo);

  const { flow_name, flow_description, flow_active } = flowInfo || {};

  return (
    <HeaderSection>
      <FlowInfo>
        <CircleSpan>
          <Arrow height={14} />
        </CircleSpan>
        <InfoDiv>
          <FlowTitle>{flow_name || "Loading ..."}</FlowTitle>
          <FlowSubtitle>{flow_description || "Loading ..."}</FlowSubtitle>
        </InfoDiv>
      </FlowInfo>
      <ToggleSection>
        <ToggleButton>Diagram view</ToggleButton>
        <ToggleButton>Code editor</ToggleButton>
        <ToggleButton>
          <ActiveLabel>
            <span>Active</span>
            <Toggle
              defaultChecked={!!flow_active}
              icons={{
                checked: null,
                unchecked: null,
              }}
              onChange={(e) => console.log(e.target.checked)}
            />
          </ActiveLabel>
        </ToggleButton>
        <ToggleButton>
          <img src={settingsPng} alt="" />
        </ToggleButton>
      </ToggleSection>
      <Controls>
        <DeleteFlowButton>Delete flow</DeleteFlowButton>
        <SaveFlowButton>Save flow</SaveFlowButton>
      </Controls>
    </HeaderSection>
  );
};
