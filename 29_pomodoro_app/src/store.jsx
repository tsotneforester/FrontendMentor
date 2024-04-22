//store.js

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    timer: 0, // 0:pomodoro 1:short 2:long
    modalOpened: false,
    theme: "#F87070",
    font: `"Kumbh Sans", sans-serif`,
    minutes: {
      pomodoro: 25,
      short: 5,
      long: 15,
    },
    secondsLeft: null,
    isRunning: false,
  },
  reducers: {
    //actions
    setTimer(state, action) {
      state.timer = action.payload;
    },

    setModalOpened(state) {
      state.modalOpened = !state.modalOpened;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setFont(state, action) {
      state.font = action.payload;
    },
    setMinutes(state, action) {
      state.minutes = action.payload;
    },
    setSecondsLeft(state, action) {
      state.secondsLeft = action.payload;
    },
    setIsRunning(state, action) {
      state.isRunning = action.payload;
    },
  },
});

export const { setTimer, setModalOpened, setTheme, setFont, setMinutes, setSecondsLeft, setIsRunning } = counterSlice.actions;

//||||||||||||||| Middleware - thunk |||||||||||||||||
export const fetchIncrementAsync = () => {
  return async function (dispatch) {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data.name); // Luke Skywalker
    dispatch(increment());
  };
};
