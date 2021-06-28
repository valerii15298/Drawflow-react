import styled, { css } from "styled-components";
import { Arrow } from "../svg";

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
`;
const ToggleSection = styled.div``;
const ToggleButton = styled.button`
  ${buttonCss}
  :focus {
    background-color: #fbfbfb;
    font-weight: bold;
  }
`;

const Controls = styled.div``;

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
  background-color: #e31c5c;
  margin-right: 10px;
  ${buttonCss}
  color: white;
`;
const SaveFlowButton = styled.button`
  background-color: #217ce8;
  ${buttonCss}
  color: white;
`;

export const Header = () => {
  return (
    <HeaderSection>
      <FlowInfo>
        <CircleSpan>
          <Arrow height={14} />
        </CircleSpan>
        <InfoDiv>
          <FlowTitle>Flow name</FlowTitle>
          <FlowSubtitle>Flow description</FlowSubtitle>
        </InfoDiv>
      </FlowInfo>
      <ToggleSection>
        <ToggleButton>Diagram view</ToggleButton>
        <ToggleButton>Code editor</ToggleButton>
        <ToggleButton>Active</ToggleButton>
        <ToggleButton>Settings</ToggleButton>
      </ToggleSection>
      <Controls>
        <DeleteFlowButton>Delete flow</DeleteFlowButton>
        <SaveFlowButton>Save flow</SaveFlowButton>
      </Controls>
    </HeaderSection>
  );
};
