import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./styled.jsx";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
