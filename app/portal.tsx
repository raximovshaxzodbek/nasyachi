import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface CounterState {
  isClientPortal: Boolean;
  isPurchasePortal: Boolean;
}
const initialState: CounterState = {
  isClientPortal: false,
  isPurchasePortal: false,
};

export const counterSlice = createSlice({
  name: "portal",
  initialState,
  reducers: {
    addPurchasePortal: (state) => {
      state.isPurchasePortal = true;
    },
    removePurchasePortal: (state) => {
      state.isPurchasePortal = false;
    },
    addClientPortal: (state) => {
      state.isClientPortal = true;
    },
    removeClientPortal: (state) => {
      state.isClientPortal = false;
    },
  },
});

export const {
  addPurchasePortal,
  removePurchasePortal,
  addClientPortal,
  removeClientPortal,
} = counterSlice.actions;
export default counterSlice.reducer;
