import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Context } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
