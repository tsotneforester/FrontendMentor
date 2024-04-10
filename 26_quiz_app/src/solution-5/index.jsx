import React from "react";
import App from "./App";
import { reducer } from "./Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(reducer);

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
