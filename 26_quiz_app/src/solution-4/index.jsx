import React from "react";
import App from "./App";
import { reducer } from "./Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

let store = createStore(reducer);

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
