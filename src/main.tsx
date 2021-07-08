import ReactDOM from "react-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { Flow } from "./components/Flow";
import "./drawflow.scss";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Flow />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
