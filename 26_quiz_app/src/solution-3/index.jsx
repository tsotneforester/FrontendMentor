import React, { useReducer, useEffect } from "react";
import axios from "axios";
import App from "./App";
import { reducer } from "./Reducer";
import { initialState } from "./Reducer";
let URL = "http://localhost:3000/quizzes";
const DataContext = React.createContext();

export default function index() {
  const [{ status, data, titleIndex, questionIndex, choise, showSelectionError, submitted, didNotScore, didScore, score }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(URL).then((e) => {
      dispatch({ type: "dataReceived", payload: e.data });
    });
  }, []);

  return (
    <DataContext.Provider value={{ data, status, dispatch, titleIndex, questionIndex, didScore, didNotScore, score, choise, submitted, showSelectionError }}>
      <App />
    </DataContext.Provider>
  );
}

export { DataContext };
