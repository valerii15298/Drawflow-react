import { Drawflow } from "./components/DrawflowHook";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { changeVersion, fetchFlowVersion } from "./redux/store";

import "./drawflow.scss";
import { Sidebar, ToggleSidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import styled from "styled-components";

const VersionsDiv = styled.div`
  display: flex;
  height: 40px;
`;

function App() {
  console.log("Render App");

  const dispatch = useAppDispatch();
  const sidebarVisible = useAppSelector((s) => s.sidebarVisible) ?? true;
  return (
    <div className="App">
      <Header />
      <main>
        <Sidebar />
        <div className="flow">
          <VersionsDiv>
            {!sidebarVisible && <ToggleSidebar />}
            <button onClick={() => dispatch(fetchFlowVersion())}>
              Fetch flow version
            </button>

            <button onClick={() => dispatch(changeVersion(0))}>
              Version 1
            </button>
            <button onClick={() => dispatch(changeVersion(1))}>
              Version 2
            </button>
            <button onClick={() => dispatch(changeVersion(2))}>
              Version 3
            </button>
          </VersionsDiv>
          <Drawflow />
        </div>
      </main>
    </div>
  );
}

export default App;
