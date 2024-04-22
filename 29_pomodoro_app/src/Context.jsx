import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./styled";

import styled, { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./store.jsx";

function Context({ children }) {
  const font = useSelector((state) => state.font);

  const theme = {
    font: font,
  };

  const store = configureStore({
    reducer: counterSlice.reducer,
    // reducer: {
    //   slice1: counterSlice.reducer,
    // },
  });

  return (
    <Provider store={store}>
      <GlobalStyles />
      {children}
    </Provider>
  );
}

export { Context };
