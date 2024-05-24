import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { thunk } from "redux-thunk";

import { addOnReducer } from "./features/addon/addonSlice";
import { appReducer } from "./features/app/appSlice";
import { formReducer } from "./features/form/formSlice";
import { planReducer } from "./features/plan/planSlice";

const Reducer = combineReducers({
  app: appReducer,
  form: formReducer,
  plan: planReducer,
  addon: addOnReducer,
});

export const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
