import React from "react";
import ReactDOM from "react-dom/client";
import { Context } from "./Context.jsx";
import "./index.css";
import Router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <Router />
  </Context>
);
