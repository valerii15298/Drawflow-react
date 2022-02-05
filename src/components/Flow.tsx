import "jsoneditor/dist/jsoneditor.css";
import { createContext, useContext, useEffect } from "react";

import "react-toggle/style.css";
import { defaultBackgroundConfig } from "../config";
import { SideWindow, useRootInfoQuery } from "../generated/apollo";
import { useData } from "../graphql/apollo/useData";
import {
  fetchFlow,
  fetchGroups,
  fetchTemplateNodes,
  initFlow,
} from "../redux/api";
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
} from "../redux/hooks";
import { mainWindow } from "../types";
import { CodeEditor } from "./CodeEditor";
import { Drawflow } from "./Drawflow";
import { FlowInfoSettings } from "./FlowInfoSettings";
import { GroupsSettings } from "./GroupsSettings";
import { Header } from "./Header";
import { NodeSettings } from "./NodeSettings/NodeSettings";
import { TemplateNodeSettings } from "./NodeSettings/TemplateNodeSettings";
import { Sidebar } from "./Sidebar";
import { AppWrapperDiv, FlowDiv, Main, MainDiv } from "./StyledComponents";

const AppCodeEditor = () => {
  const json = useAppSelector((s) => s);
  return <CodeEditor values={json} setValues={() => null} />;
};

const useLocalStorageBackground = () =>
  useLocalStorage("windowConfig", defaultBackgroundConfig);

const BackgroundContext = createContext<ReturnType<
  typeof useLocalStorageBackground
> | null>(null);

export const useBackground = () => useContext(BackgroundContext);

const MainFlow = () => {
  return (
    <FlowDiv>
      <Drawflow />
    </FlowDiv>
  );
};

const MainTab = () => {
  const mainId = useAppSelector((s) => s.windowConfig.mainId);
  const id = useAppSelector((s) => s.windowConfig.id);
  const version = useAppSelector((s) => s.version);
  // const {data} = useRootInfoQuery()

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
    return <AppCodeEditor />;
  }
  console.error("No correspondig component");
  return null;
};

const RightBar = () => {
  // const sideId = useAppSelector((s) => s.windowConfig.sideId);
  const sideId = useRootInfoQuery().data?.windowConfig.sideId;

  if (sideId === SideWindow.FlowSettings) {
    return <FlowInfoSettings />;
  }
  if (sideId === SideWindow.GroupSettings) {
    return <GroupsSettings />;
  }

  return null;
};

export const Flow = () => {
  // console.log("Render Flow");
  useData();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFlow());
    dispatch(fetchGroups());
    dispatch(fetchTemplateNodes());
    dispatch(initFlow());
  }, []);

  const bg = useLocalStorageBackground();

  return (
    <BackgroundContext.Provider value={bg}>
      <MainDiv>
        <AppWrapperDiv>
          <Header />
          <Main>
            <Sidebar />
            <MainTab />
            <RightBar />
          </Main>
        </AppWrapperDiv>
        {/*<Chat />*/}
      </MainDiv>
    </BackgroundContext.Provider>
  );
};
