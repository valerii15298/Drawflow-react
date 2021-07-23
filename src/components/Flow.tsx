import { Chat } from "../chat/Chat";
import { Drawflow } from "./Drawflow";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import "react-toggle/style.css";
import { Sidebar, ToggleSidebar } from "./Sidebar";
import { Header } from "./Header";
import styled, { css } from "styled-components";
import { useEffect } from "react";
import {
  changeVersion,
  fetchFlow,
  fetchGroups,
  fetchTemplateNodes,
  initFlow,
} from "../redux/api";
import { FlowInfoSettings } from "./FlowInfoSettings";
import { mainWindow, sideWindow } from "../types";
import { GroupsSettings } from "./GroupsSettings";
import "jsoneditor/dist/jsoneditor.css";
import { CodeEditor } from "./CodeEditor";
import { NodeSettings } from "./NodeSettings/NodeSettings";
import { TemplateNodeSettings } from "./NodeSettings/TemplateNodeSettings";

const VersionsDiv = styled.div`
  display: flex;
  align-items: normal;
  overflow-x: auto;

  &::-webkit-scrollbar-thumb {
    background-color: #217ce8;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }
`;

const FlowDiv = styled.div`
  flex: 1;
  order: -1;
  width: 0;
`;

const Main = styled.main`
  display: flex;
  position: relative;
`;

const MainDiv = styled.div`
  display: flex;
`;

const AppCodeEditor = () => {
  const json = useAppSelector((s) => s);
  return <CodeEditor values={json} setValues={() => null} />;
};

const VersionButton = styled.button<{ selected: boolean }>`
  white-space: nowrap;
  //display: inline-block;
  ${({ selected }) =>
    selected &&
    css`
      font-weight: bold;
    `}
`;

const Versions = () => {
  const sidebarVisible = useAppSelector((s) => s.sidebarVisible) ?? true;
  const flows = useAppSelector((s) => s.flows);
  const countVersions = useAppSelector((s) => s.flows.length);
  const selectedVersion = useAppSelector((s) => s.version);
  const dispatch = useAppDispatch();
  const versions = [
    !sidebarVisible ? (
      <ToggleSidebar style={{ height: "2em" }} key={-1} />
    ) : null,
    <VersionButton
      key={0}
      selected={0 === selectedVersion}
      onClick={() => dispatch(changeVersion(0))}
    >
      Prototyping{flows[0] && ":" + Object.keys(flows[0].drawflow).length}
    </VersionButton>,
  ];
  for (
    let versionNumber = countVersions - 1;
    versionNumber > 0;
    --versionNumber
  ) {
    versions.push(
      <VersionButton
        key={versionNumber}
        selected={versionNumber === selectedVersion}
        onClick={() => dispatch(changeVersion(versionNumber))}
      >
        Version {versionNumber}
        {flows[versionNumber] &&
          ":" + Object.keys(flows[versionNumber].drawflow).length}
      </VersionButton>
    );
  }
  return <VersionsDiv>{versions}</VersionsDiv>;
};

const MainFlow = () => {
  return (
    <FlowDiv>
      <Versions />
      <Drawflow />
    </FlowDiv>
  );
};

const MainTab = () => {
  const dispatch = useAppDispatch();
  const sidebarVisible = useAppSelector((s) => s.sidebarVisible) ?? true;
  const mainId = useAppSelector((s) => s.windowConfig.mainId);
  const id = useAppSelector((s) => s.windowConfig.id);
  const version = useAppSelector((s) => s.version);

  if (mainId === mainWindow.templateNodeSettings) {
    return (
      <>
        <TemplateNodeSettings key={id} id={id} />
      </>
    );
  }

  if (mainId === mainWindow.nodeSettings) {
    return <>{<NodeSettings key={id} id={id} />}</>;
  }

  if (mainId === mainWindow.mainFlow) {
    return <MainFlow key={version} />;
  }

  if (mainId === mainWindow.codeEditor) {
    return (
      <>
        <span
          style={{
            position: "absolute",
            zIndex: 2,
            backgroundColor: "white",
            top: -8,
          }}
        >
          {!sidebarVisible && <ToggleSidebar />}
        </span>
        <AppCodeEditor />
      </>
    );
  }
  return null;
};

const RightBar = () => {
  const sideId = useAppSelector((s) => s.windowConfig.sideId);

  if (sideId === sideWindow.flowSettings) {
    return <FlowInfoSettings />;
  }
  if (sideId === sideWindow.groupSettings) {
    return <GroupsSettings />;
  }

  return null;
};

const AppWrapperDiv = styled.div`
  width: calc(100vw - 417px);
`;

export const Flow = () => {
  // console.log("Render Flow");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFlow());
    dispatch(fetchGroups());
    dispatch(fetchTemplateNodes());
    dispatch(initFlow());
  }, []);

  return (
    <MainDiv>
      <AppWrapperDiv>
        <Header />
        <Main>
          <Sidebar />
          <MainTab />
          <RightBar />
        </Main>
      </AppWrapperDiv>
      <Chat />
    </MainDiv>
  );
};
