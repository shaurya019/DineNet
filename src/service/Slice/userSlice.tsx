import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserItem {
  name?: string;
  phone?: string;
  firebaseToken: string;
}

export interface UserState {
  loggedIn: boolean;
  firebaseToken: string | null;
  phone?: string;
}

const initialState: UserState = {
  loggedIn: false,
  firebaseToken: null,
  phone: "",
};

export const fetchUserLoginStatus = createAsyncThunk(
  "users/fetchUserLoginStatus",
  async () => {
    const firebaseToken = await window.localStorage.getItem("firebaseToken");
    if (firebaseToken) return firebaseToken;
    else return null;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser(state, action: PayloadAction<UserItem>) {
      const { firebaseToken, phone } = action.payload;
      state.firebaseToken = firebaseToken;
      state.phone = phone;
      state.loggedIn = true;
    },
    signOutUser(state) {
      state.firebaseToken = null;
      state.phone = "";
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserLoginStatus.fulfilled, (state, action) => {
      if (action.payload != null) {
        state.loggedIn = true;
        state.firebaseToken = action.payload;
      }
    });
  },
});

export const { signInUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;
