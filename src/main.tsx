import ReactDOM from "react-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import "./drawflow.scss";
import { Flow } from "./components/Flow";

// import { fromEvent, Observable } from "rxjs";
// import { exhaustMap } from "rxjs/operators";
//
// const clicks = fromEvent(document, "click");
// const result = clicks.pipe(
//   exhaustMap((ev) => {
//     return new Observable((observer) => {
//       for (let i = 0; i < 3_999_999_999; ++i) {
//         let y = i;
//       }
//       observer.next("Done");
//       observer.complete();
//       // console.log("FF");
//     });
//   })
// );
// result.subscribe((x) => console.log(x));

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>{<Flow />}</Provider>
  </StrictMode>,
  document.getElementById("root")
);
