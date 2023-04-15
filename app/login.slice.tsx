import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface LoginState {
  username: String;
  password: String;
}
const initialState: LoginState = {
  username: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handlerLogin: (state, action: PayloadAction<LoginState>) => {
      return (state = action.payload);
    },
  },
});

export const { handlerLogin } = loginSlice.actions;
export default loginSlice.reducer;
