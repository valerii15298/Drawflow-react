import { Drawflow } from "./Drawflow";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeVersion } from "../redux/store";

import "react-toggle/style.css";
import { Sidebar, ToggleSidebar } from "./Sidebar";
import { Header } from "./Header";
import styled from "styled-components";
import { useEffect } from "react";
import { fetchFlow, fetchGroups, fetchTemplateNodes } from "../redux/api";
import { FlowInfoSettings } from "./FlowInfoSettings";
import { mainWindow, sideWindow } from "../types";
import { GroupsSettings } from "./GroupsSettings";
import "jsoneditor/dist/jsoneditor.css";
import { TemplateNodeSettings } from "./NodeTemplateSettings";
import { CodeEditor } from "./CodeEditor";

const VersionsDiv = styled.div`
  display: flex;
  height: 40px;
`;

const FlowDiv = styled.div`
  flex: 1;
  order: -1;
`;

const Main = styled.main`
  display: flex;
  position: relative;
`;

const MainDiv = styled.div``;

const AppCodeEditor = () => {
  const json = useAppSelector((s) => s);
  return <CodeEditor values={json} setValues={(a: any) => null} />;
};

const MainTab = () => {
  const dispatch = useAppDispatch();
  const sidebarVisible = useAppSelector((s) => s.sidebarVisible) ?? true;
  const mainId = useAppSelector((s) => s.windowConfig.mainId);
  const id = useAppSelector((s) => s.windowConfig.id);

  if (mainId === mainWindow.templateNodeSettings) {
    return (
      <>
        <TemplateNodeSettings id={id} />
      </>
    );
  }

  if (mainId === mainWindow.mainFlow) {
    return (
      <FlowDiv>
        <VersionsDiv>
          {!sidebarVisible && <ToggleSidebar />}
          <button>Fetch flow version</button>
          <button onClick={() => dispatch(changeVersion(0))}>Version 1</button>
          <button onClick={() => dispatch(changeVersion(1))}>Version 2</button>
          <button onClick={() => dispatch(changeVersion(2))}>Version 3</button>
        </VersionsDiv>
        <Drawflow />
      </FlowDiv>
    );
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

export const Flow = () => {
  // console.log("Render Flow");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFlow());
    dispatch(fetchGroups());
    dispatch(fetchTemplateNodes());
  }, []);
  return (
    <MainDiv>
      <Header />
      <Main>
        <Sidebar />
        <MainTab />
        <RightBar />
      </Main>
    </MainDiv>
  );
};
