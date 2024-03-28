import React, { useReducer, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import App from "./App";
import { reducer } from "./Reducer";
import { initialState } from "./Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
let URL = "http://localhost:3000/quizzes";

let store = createStore(reducer);

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
