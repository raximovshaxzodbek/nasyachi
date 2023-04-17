import { createSlice } from "@reduxjs/toolkit";
export interface portalState {
  isClientPortal: Boolean;
  isPurchasePortal: Boolean;
  isCategoryPortal: Boolean;
}
const initialState: portalState = {
  isClientPortal: false,
  isPurchasePortal: false,
  isCategoryPortal: false,
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
    addCategoryPortal: (state) => {
      state.isCategoryPortal = true;
    },
    removeCategoryPortal: (state) => {
      state.isCategoryPortal = false;
    },
  },
});

export const {
  addPurchasePortal,
  removePurchasePortal,
  addClientPortal,
  removeClientPortal,
  addCategoryPortal,
  removeCategoryPortal,
} = portalSlice.actions;
export default portalSlice.reducer;
