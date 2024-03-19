import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slice/cartSlice"
import userSlice from "../Slice/userSlice";
import alertSlice from "../Slice/alertSlice";
export const store = configureStore({
  reducer: { cart: cartSlice, user: userSlice, alert: alertSlice },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch