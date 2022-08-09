import { combineReducers } from "redux";

import counterReducer from "./counter/reducer"

export const combinedReducers = combineReducers({
  counter: counterReducer
})