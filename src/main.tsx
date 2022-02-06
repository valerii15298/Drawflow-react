import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { api } from "./redux/baseApi";

import Apollo from "./graphql/apollo";
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
