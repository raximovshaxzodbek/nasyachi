import { configureStore } from "@reduxjs/toolkit";
import portalReducer from "./portal.slice";
import loginReducer from "./login.slice";
export const store = configureStore({
  reducer: {
    portal: portalReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
