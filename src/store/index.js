import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cart-slice';
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: CartReducer,
  },
});

export default store;