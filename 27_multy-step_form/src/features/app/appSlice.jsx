import React from "react";

export const initialStateApp = {
  step: 1,
  status: "active",
};

export const appReducer = (state = initialStateApp, action) => {
  if (action.type == "PREVIOUS_STEP") {
    return {
      ...state,
      step: state.step - 1,
    };
  }

  if (action.type == "NEXT_STEP") {
    return {
      ...state,
      step: state.step + 1,
    };
  }

  if (action.type == "STATUS-FINISHED") {
    return {
      ...state,
      status: "finished",
    };
  }
  if (action.type == "BACK_TO_PLAN") {
    return {
      ...state,
      step: 2,
    };
  }

  return state;
};
