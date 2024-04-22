import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyles } from "./styled.jsx";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./store.jsx";

const store = configureStore({
  reducer: counterSlice.reducer,
  // reducer: {
  //   slice1: counterSlice.reducer,
  // },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
