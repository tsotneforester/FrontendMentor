export const initialStatePlan = {
  name: null,
  nameIndex: null,
  period: "month",
  price: 0,
};

export const planReducer = (state = initialStatePlan, action) => {
  if (action.type == "PLAN_PERIOD") {
    return {
      ...state,
      period: action.payload.period,
      price: action.payload.price,
    };
  }

  if (action.type == "PLAN_NAME") {
    return {
      ...state,
      name: action.payload.name,
      nameIndex: action.payload.index,
      price: action.payload.price,
    };
  }

  return state;
};
