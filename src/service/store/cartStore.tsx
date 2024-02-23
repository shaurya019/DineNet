import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slice/cartSlice"
export const store = configureStore({
    reducer: cartSlice
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch