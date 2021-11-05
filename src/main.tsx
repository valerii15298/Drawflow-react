import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Apollo from "./apollo/index";
import { Flow } from "./components/Flow";
import "./draft";
import "./drawflow.scss";
import { store } from "./redux/store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Apollo>
        <Flow />
      </Apollo>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
