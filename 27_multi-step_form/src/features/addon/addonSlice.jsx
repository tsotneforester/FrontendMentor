export const initialStateAddOn = {
  active: [false, false, false],
};

export const addOnReducer = (state = initialStateAddOn, action) => {
  if (action.type == "ADDON_ACTIVATE") {
    return {
      ...state,
      active: action.payload,
    };
  }

  return state;
};
