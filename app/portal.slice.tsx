import { createSlice } from "@reduxjs/toolkit";
export interface portalState {
  isClientPortal: Boolean;
  isPurchasePortal: Boolean;
}
const initialState: portalState = {
  isClientPortal: false,
  isPurchasePortal: false,
};

export const portalSlice = createSlice({
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
} = portalSlice.actions;
export default portalSlice.reducer;
