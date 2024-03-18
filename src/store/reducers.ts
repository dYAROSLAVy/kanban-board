import { combineReducers } from "@reduxjs/toolkit";
import columnReducer from "./columns/columnSlice";

export const rootReducer = combineReducers({
  columns: columnReducer,
});
