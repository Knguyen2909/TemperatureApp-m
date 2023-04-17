import React from "react";
import ReactDOM from "react-dom";

import TempApp from "./pages/TempApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TempApp />
  </React.StrictMode>,
  rootElement
);