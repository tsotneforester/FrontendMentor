//store.js

import { createSlice } from "@reduxjs/toolkit";

export const tempOptionsSlice = createSlice({
  name: "tempOptions",
  initialState: {
    theme: "#F87070",
    font: `"Kumbh Sans", sans-serif`,
    durations: {
      pomodoro: 25,
      short: 1,
      long: 15,
    },
  },
  reducers: {
    //actions

    setTheme(state, action) {
      state.theme = action.payload;
    },
    setFont(state, action) {
      state.font = action.payload;
    },
    setDurations(state, action) {
      state.durations = action.payload;
    },
  },
});

export const { setTheme, setFont, setDurations } = tempOptionsSlice.actions;
