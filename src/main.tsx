import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Flow } from "./components/Flow";
import "./draft";
import "./drawflow.scss";
import { store } from "./redux/store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Button from "@mui/material/Button";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Flow />
      {/*<App />*/}
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
