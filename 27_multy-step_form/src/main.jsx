import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

import { GlobalStyles } from "./Styled.jsx";

import Reducer from "./Reducer.jsx";

let store = createStore(Reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
      <GlobalStyles />
      <App />
    </>
  </Provider>
);
