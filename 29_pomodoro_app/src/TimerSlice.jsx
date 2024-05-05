//store.js

import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    activeTimer: 1, // 0:pomodoro 1:short 2:long
    modalOpened: false,
    theme: "#F87070",
    font: `"Kumbh Sans", sans-serif`,
    durations: {
      pomodoro: 25,
      short: 7,
      long: 15,
    },
    secondsLeft: null,
    isRunning: false,
  },
  reducers: {
    //actions
    setActiveTimer(state, action) {
      state.activeTimer = action.payload;
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
    setDurations(state, action) {
      state.durations = action.payload;
    },
    setSecondsLeft(state, action) {
      state.secondsLeft = action.payload;
    },
    setIsRunning(state, action) {
      state.isRunning = action.payload;
    },

    mergeTemp(state, action) {
      state.theme = action.payload.theme;
      state.font = action.payload.font;
      state.durations = action.payload.durations;
      state.secondsLeft = action.payload.seconds;
    },
  },
});

export const { setActiveTimer, setModalOpened, setTheme, setFont, setDurations, setSecondsLeft, setIsRunning, mergeTemp } = timerSlice.actions;
