import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface LoginState {
  username: String;
  password: String;
  isLoggedIn: Boolean;
}
export interface ActionPayloadState {
  username: String;
  password: String;
}
const initialState: LoginState = {
  username: "",
  password: "",
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handlerLogin: (state, action: PayloadAction<ActionPayloadState>) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { handlerLogin } = loginSlice.actions;
export default loginSlice.reducer;
