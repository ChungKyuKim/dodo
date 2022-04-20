import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import GlobalStyle from "./style/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
