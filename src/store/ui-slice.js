import { createSlice } from "@reduxjs/toolkit";

const uiSclice = createSlice({
  name: "ui",
  initialState: { cartItemVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartItemVisible = !state.cartItemVisible;
    },
    showNotifivation(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSclice.actions;

export default uiSclice.reducer;
