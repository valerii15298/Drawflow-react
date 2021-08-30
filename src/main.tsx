import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Flow } from "./components/Flow";
import "./draft";
import "./drawflow.scss";
import { store } from "./redux/store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>{<Flow />}</Provider>
  </StrictMode>,
  document.getElementById("root")
);
