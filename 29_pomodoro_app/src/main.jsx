import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyles } from "./styled.jsx";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { timerSlice } from "./TimerSlice.jsx";
import { tempOptionsSlice } from "./components/features/options/tempOptionsSlice.jsx";

const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    tempOptions: tempOptionsSlice.reducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
