import { configureStore } from "@reduxjs/toolkit";
import columnReducer from "./columns/columnSlice";

export const store = configureStore({
  reducer: {
    columns: columnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;