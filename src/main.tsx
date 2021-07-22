import ReactDOM from "react-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import "./drawflow.scss";
import { Flow } from "./components/Flow";
import { Chat } from "./chat/Chat";

ReactDOM.render(
  <StrictMode>
    {/*<Provider store={store}>{<Flow />}</Provider>*/}
    <Chat />
  </StrictMode>,
  document.getElementById("root")
);
