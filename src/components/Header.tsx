import styled from "styled-components";
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

const ToggleSection = styled.div``;
const ToggleButton = styled.button`
  text-align: center;
  height: 39px;
  font-size: 14px;
  border: 1px solid #e8e8ef;
  :hover {
    opacity: 0.7;
  }
  :focus {
    background-color: #fbfbfb;
    font-weight: bold;
  }
`;

const Controls = styled.div``;

const CircleSpan = styled.button`
  margin: 0 10px;
  background-color: #dbdee7;
  height: 37px;
  width: 37px;
  display: grid;
  place-items: center;
  border-radius: 50%;
`;
const InfoDiv = styled.div`
  display: grid;
  place-items: left;
  div {
  }
`;

export const Header = () => {
  return (
    <HeaderSection>
      <FlowInfo>
        <CircleSpan>
          <Arrow height={15} />
        </CircleSpan>
        <InfoDiv>
          <div>Flow name</div>
          <div>Flow description</div>
        </InfoDiv>
      </FlowInfo>
      <ToggleSection>
        <ToggleButton>Diagram view</ToggleButton>
        <ToggleButton>Code editor</ToggleButton>
        <ToggleButton>Active</ToggleButton>
        <ToggleButton>Settings</ToggleButton>
      </ToggleSection>
      <Controls>
        <button>Delete flow</button>
        <button>Save flow</button>
      </Controls>
    </HeaderSection>
  );
};
