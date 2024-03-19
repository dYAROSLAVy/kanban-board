import { combineReducers } from "@reduxjs/toolkit";
import columnReducer from "./columns/columnSlice";
import nameReducer from "./name/nameSlice";

export const rootReducer = combineReducers({
  columns: columnReducer,
  userName: nameReducer,
});
