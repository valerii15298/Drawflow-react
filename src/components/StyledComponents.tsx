import styled, { css } from "styled-components";
import tilePng from "../assets/tile.png";

export const Button = styled.button`
  /* margin-left: auto */
  padding: 4px 6px;
  text-align: center;
  outline: none;
  color: #fff;
  background-color: #217ce8;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #999;

  :active {
    background-color: red;
    color: black;
    font-weight: bold;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const CodeEditorDiv = styled.div<{ shift?: boolean }>`
  flex: 1;
  max-height: 100vh;
  min-width: 480px;
  height: 100%;
  ${({ shift }) =>
    shift &&
    css`
      div.ql-toolbar.ql-snow {
        padding-left: 40px;
      }

      .jsoneditor-menu {
        padding-left: 40px;
      }
    `}
`;
export const InnerDrawflow = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const ParentDrawflow = styled.div`
  position: relative;
  height: 100vh;
  //height: 100%;
  overflow: hidden;
  background-image: url(${tilePng});
  background-repeat: repeat;
  background-size: 30px 30px;
`;
export const CommitFlowButton = styled.button`
  padding: 5px 10px;
  font-style: italic;
  font-size: 16px;
  top: 10px;
  position: absolute;
  cursor: pointer;
  z-index: 50;
  border: 1px solid #e8e8ef;
  border-radius: 5px;
  color: #fff;
  background-color: #217ce8;
  left: 10px;
`;
export const BackgroundDiv = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;
export const Div = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ddd;
  font-weight: bold;
  z-index: 1;
`;
export const BlockStyled = styled.div<{
  isSub: boolean;
  selected: boolean;
}>`
  display: inline-block;
  position: absolute;
  padding: 0 0.7em;
  width: 200px;
  min-height: 60px;
  background-color: white;
  border-radius: 0.2em;
  z-index: 1;
  cursor: move;

  ${({ selected }) =>
    selected &&
    css`
      //box-shadow: 0 2px 15px 2px #cacaca;
      box-shadow: 0 2px 20px 2px #4ea9ff;
      z-index: 2;
    `};
`;
export const ZoomArea = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 1;
  display: flex;
  width: 6em;
  justify-content: space-between;
`;
export const MainDiv = styled.div`
  display: flex;
  //width: 100vw;
`;
const VersionButton = styled.button<{ selected: boolean }>`
  white-space: nowrap;
  //display: inline-block;
  ${({ selected }) =>
    selected &&
    css`
      font-weight: bold;
    `}
`;
export const Main = styled.main`
  display: flex;
  position: relative;
`;
const VersionsDiv = styled.div`
  display: flex;
  align-items: normal;
  overflow-x: auto;

  &::-webkit-scrollbar-thumb {
    background-color: #2986f5;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }
`;
export const FlowDiv = styled.div`
  flex: 1;
  order: -1;
  width: 0;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
`;
export const FlowInfoSettingsSection = styled.section`
  position: relative;
  flex: 0 0 400px;
  overflow-y: auto;
  max-height: calc(100vh + 40px);
  padding-top: 30px;
  border: 1px solid #e8e8ef;
`;
export const SettingsLabel = styled.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
export const BackgroundImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-top: 10px;
  padding: 10px;

  button {
    background: none;
    border: none;
    outline: none;
  }

  img {
    height: 100px;
    width: 150px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const BackgroundSettingsDiv = styled.div`
  background: #e8e8ef;

  label {
    margin: 10px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 2px;
    }
  }
`;
export const ControlButtonsDiv = styled.div``;
export const GroupsDiv = styled.div`
  padding: 0 10px 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`;
export const GroupDiv = styled.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`;
export const GroupIdSpan = styled.span`
  color: blue;

  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`;
export const AddNewGroupButton = styled(Button)`
  text-align: center;
`;
export const ButtonDeleteGroup = styled(Button)`
  margin-left: 5px;
`;
export const ButtonSaveGroup = styled(Button)`
  margin-left: 5px;
`;
export const DivGroup1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`;
export const GroupsSettingsH1 = styled.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`;
const GroupTitleInput = styled.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`;
const GroupDescriptionTextarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`;
export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e8e8ef;
`;
export const FlowInfo = styled.div`
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
export const ToggleSection = styled.div`
  display: flex;
  align-items: center;
`;
export const ToggleButton = styled.button`
  ${buttonCss};

  &:focus {
    background-color: #dfdfdf;
  }
`;
export const Controls = styled.div`
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
export const InfoDiv = styled.div`
  display: grid;
  margin-left: 1em;
  //place-items: left;
  div {
  }
`;
export const FlowTitle = styled.div`
  font-size: 16px;
  color: #393c44;
  font-family: Roboto, serif;
`;
export const FlowSubtitle = styled.div`
  color: #808292;
  font-size: 14px;
`;
export const DeleteFlowButton = styled.button`
  ${buttonCss};

  background-color: #e31c5c;
  display: inline-block;
  margin-right: 10px;
  color: white;
`;
export const SaveFlowButton = styled.button`
  background-color: #217ce8;
  ${buttonCss};
  color: white;
`;
export const ActiveLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:first-child {
    display: inline-block;
    margin-right: 4px;
  }
`;
export const BlockDiv = styled.div`
  max-height: 100%;
  overflow: hidden;
`;
export const TapMoreButton = styled.button`
  position: absolute;
  right: 0.2em;
  top: 0.2em;
  display: grid;
  place-items: center;
  padding: 8px 8px 4px 4px;
  border: 0;
  background: 0;

  svg {
    /* stroke: red; */

    circle {
      fill: black;
    }
  }

  :hover {
    background-color: #d8d8d8;
    cursor: pointer;
    border-radius: 0.2em;
  }
`;
export const NodeDiv = styled.div`
  /* width: min-content; */
  position: relative;
  padding: 1em 0.3em 0.3em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  text-align: center;
  background-color: white;
  box-shadow: 0 4px 30px rgb(22 33 74 / 25%);
  border-radius: 5px;
  //max-width: 100%;

  :hover {
    box-shadow: 0 4px 30px rgb(22 33 74 / 15%);
    background-color: #f8f8f8;
  }
`;
export const NodeImg = styled.img`
  max-height: 70%;
  max-width: 70%;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
  //align-self: flex-start;
`;
export const NodeTitleSpan = styled.div`
  //word-break: break-word;
  //hyphens: auto;
`;
export const Svg = styled.svg`
  position: absolute;
  overflow: visible;
`;
export const StyledPath = styled.path<{
  selected: boolean;
}>`
  :hover {
    stroke-width: 6px;
    stroke: purple;
    cursor: pointer;
  }

  fill: none;
  stroke-width: 6px;
  stroke: steelblue;
  ${({ selected }) =>
    selected &&
    css`
      stroke-width: 7px;
      stroke: red;
    `};
`;
export const SidebarDiv = styled.div`
  width: 300px;
  order: -2;
  max-height: calc(100vh + 40px);
`;
export const SearchInput = styled.input`
  display: block;
  width: 75%;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e8e8ef;
  box-shadow: 0 2px 8px rgb(34 34 87 / 5%);
  border-radius: 5px;
  text-indent: 35px;
  font-size: 16px;
  margin-right: 3px;
`;
export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-top: 10px;
`;
export const SearchSpan = styled.span`
  margin-left: auto;
  margin-right: -25px;
  display: inline-block;
  z-index: 2;
  height: 18px;
  width: 18px;
  background-color: white;
  position: relative;

  ::before,
  ::after {
    content: "";
    background-color: white;
    width: 5px;
    height: 20px;
    position: absolute;
  }

  ::before {
    left: -5px;
  }

  ::after {
    right: -5px;
  }
`;
export const OpenGroupSettingButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;
export const ExpandDiv = styled.div<{ opened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `};
`;
export const GroupsListDiv = styled.div`
  border-bottom: 1px solid #e8e8ef;
  max-height: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  text-align: center;
  transition: all 0.5s ease;
  justify-content: space-around;

  :hover {
    max-height: 500px;

    div {
      order: unset;
    }
  }
`;
export const GroupItemDiv = styled.div<{ selected: boolean }>`
  display: grid;
  place-items: center;
  font-family: Roboto, serif;
  height: 48px;
  padding: 1em;
  text-align: center;
  position: relative;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

  ${({ selected }) =>
    selected &&
    css`
      order: -1;

      :after {
        position: absolute;
        display: block;
        content: "";
        width: 100%;
        height: 4px;
        background-color: #217ce8;
        bottom: 0;
      }
    `};
`;
export const ListDiv = styled.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, max-content));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;

  overflow-y: auto;
  //max-height: calc(100vh - 55px);
  max-height: calc(100vh - 90px);

  min-height: 0; /* NEW */
  min-width: 0;

  &:after {
    grid-column: span 3;
    //background-color: red;
    height: 0.1em; /* 3em (desired padding effect) minus 1em (grid-gap setting) */
    content: "";
    order: 999;
  }

  //&::-webkit-scrollbar-thumb {
  //  background-color: #217ce8;
  //  border-radius: 1em;
  //}

  &::-webkit-scrollbar {
    //display: none;
    //height: 0.1em;
    width: 0.5em;
  }
`;
export const AddTemplateNodeDiv = styled(NodeDiv)`
  /* min-height: 5em; */
  padding: 25px;
  order: 998;

  :hover {
    cursor: pointer;
  }
`;
export const AppWrapperDiv = styled.div`
  flex: 1;
  //width: calc(100vw - 408px);
  //border-right: 2px solid lightgray;
`;
