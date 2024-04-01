import { combineReducers } from "redux";

const initialStateApp = {
  step: 1,
  status: "active",
};

const AppReducer = (state = initialStateApp, action) => {
  //state = initialState
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

const initialStateForm = {
  fname: "",
  fnameWarning: "",
  email: "",
  emailWarning: "",
  phone: "",
  phoneWarning: "",
};

const FormReducer = (state = initialStateForm, action) => {
  //state = initialState
  //||||||||||||||  FNAME ||||||||||||||||
  if (action.type == "FNAME_INPUT") {
    return {
      ...state,
      fname: action.payload,
      fnameWarning: "",
    };
  }
  if (action.type == "FNAME_WARNING") {
    return {
      ...state,
      fnameWarning: "This field is required",
    };
  }
  //||||||||||||||  EMAIL ||||||||||||||||
  if (action.type == "EMAIL_INPUT") {
    return {
      ...state,
      email: action.payload,
      emailWarning: "",
    };
  }
  if (action.type == "EMAIL_WARNING") {
    return {
      ...state,
      emailWarning: action.payload,
    };
  }

  //||||||||||||||  PHONE ||||||||||||||||
  if (action.type == "PHONE_INPUT") {
    return {
      ...state,
      phone: action.payload,
      phoneWarning: "",
    };
  }
  if (action.type == "PHONE_WARNING") {
    return {
      ...state,
      phoneWarning: action.payload,
    };
  }
  return state;
};

const initialStatePlan = {
  name: null,
  nameIndex: null,
  period: "month",
  price: 0,
};

const PlanReducer = (state = initialStatePlan, action) => {
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

const initialStateAddOn = {
  active: [false, false, false],
};

const AddOnReducer = (state = initialStateAddOn, action) => {
  if (action.type == "ADDON_ACTIVATE") {
    return {
      ...state,
      active: action.payload,
    };
  }

  return state;
};

const Reducer = combineReducers({
  app: AppReducer,
  form: FormReducer,
  plan: PlanReducer,
  addon: AddOnReducer,
});

export default Reducer;
