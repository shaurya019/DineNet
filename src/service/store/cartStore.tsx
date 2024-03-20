import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slice/cartSlice"
import userSlice from "../Slice/userSlice";
import alertSlice from "../Slice/alertSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const getPersistConfig = (key:string) => ({
  key,
  version: 1,
  storage,
});

const reducers = {
  cart: persistReducer(getPersistConfig('cart'), cartSlice),
  user: persistReducer(getPersistConfig('user'), userSlice),
  alert: alertSlice,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch