import styled, { css } from "styled-components";
import { Button } from "../StyledComponents";
import { FC } from "react";
import { Arrow } from "../../svg";

export const Details = styled.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`;
export const NodesChooserDetails = styled(Details)<{ leftShift: string }>`
  position: relative;

  summary ~ * {
    margin-left: ${({ leftShift }) => leftShift};
  }
`;
export const SelectNodeSettingsItem = styled.div`
  cursor: pointer;
  margin-top: 0.2em;
  padding: 0.4em;
  border-radius: 0.3em;
  background: #8db6f6;

  &:hover {
    background: #3377e4;
  }
`;
export const NodeJumpControlsDiv = styled.div`
  display: flex;
  margin-left: 1em;

  & > * {
    margin-left: 0.1em;
    //padding: 1em;
  }

  summary {
    padding-right: 0.3em;
  }
`;
export const JumpButton = styled.button`
  background-color: white;
  border: 0;
  border-radius: 0.4em;
  padding: 0.3em;
  margin: 0.5em;
`;
export const NodeSettingsDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`;
export const LeftBarForm = styled.form`
  min-width: fit-content;
`;
export const TitleDiv = styled.div`
  font-weight: bold;
`;
export const DescriptionDiv = styled.div``;
export const TitleInfoDiv = styled.div`
  display: grid;
  gap: 0.3em;
`;
export const LeftBarHeader = styled.header<{ shift: boolean }>`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  min-width: fit-content;
  ${({ shift }) =>
    shift &&
    css`
      padding-left: 0;
    `}
`;
export const TitleImg = styled.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`;
export const DefaultSettingsDetails = styled(Details)``;
export const Summary = styled.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`;
export const ArrowSpan = styled.span`
  display: grid;
  place-items: center;

  svg {
    height: 1em;
    width: 1.4em;
  }
`;
export const ItemSettingLabel = styled.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
  align-items: center;
`;
export const ListSettingsDiv = styled.div``;
export const NodeSettingsWrapper = styled.div`
  flex: 1;
  height: max-content;
`;
export const ToggleSidebarDiv = styled.div`
  margin-left: -0.2em;
`;
export const SaveButton = styled(Button)``;
export const DeleteButton = styled(Button)``;
export const ResetButton = styled(Button)``;
export const ControlsDiv = styled.div`
  text-align: center;
`;
export const SelectorButton = styled.button`
  text-align: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: 0;
`;
export const SelectorJparamDiv = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  //background-color: blue;
  margin-left: 0.2em;
`;
export const RightInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ListChooserDiv = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  width: max-content;
  max-width: 30vw;
  padding: 10px;
  background-color: #f5f0e5;
  border: 3px solid #3883fa;
  border-radius: 10px;
`;
export const SelectorJparamOptionsDiv = styled(ListChooserDiv)`
  //position: absolute;
  left: 100%;
  //right: -100%;
  top: 0;
  //background-color: red;
`;
export const StyledSummary: FC = ({ children }) => {
  return (
    <Summary>
      <ArrowSpan>
        <Arrow />
      </ArrowSpan>
      <span>{children}</span>
    </Summary>
  );
};
export const SelectJparamDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
