import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducer.jsx";

let store = createStore(reducer);
import { GlobalStyles } from "./styled.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </>
);
