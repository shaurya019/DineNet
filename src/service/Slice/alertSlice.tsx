import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store/cartStore";
export enum AlertType {
  error,
  warning,
  info,
  success,
}
interface AlertState {
  showAlert: boolean;
  type: AlertType;
  message: string;
}
const initialState: AlertState = {
  showAlert: false,
  type: AlertType.error,
  message: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.showAlert = true;
    },
    clearAlert: (state, action) => {
      state.showAlert = false;
      state.message = initialState.message;
      state.type = initialState.type;
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
