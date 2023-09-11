import { configureStore } from "@reduxjs/toolkit";
import { calcSlice } from "../modules/Calculator";

export const store = configureStore({
  reducer: {
    calc: calcSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
