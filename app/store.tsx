import { configureStore } from "@reduxjs/toolkit";
import portalReducer from "./portal";
export const store = configureStore({
  reducer: {
    portal: portalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
