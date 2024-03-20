import React from "react";
import { initializeFirebase } from "@utils/firebaseUtils";
import RecaptchaContainer from "@components/RecaptchaContainer";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { PersistGate } from "redux-persist/integration/react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import { persistor, store } from "./service/store/cartStore";
import Alert from "./components/Alert";

initializeFirebase();
const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <RecaptchaContainer />
            <RouterProvider router={router} />
          </QueryClientProvider>
          <Alert />
        </PersistGate>
      </Provider>
    </div>
  );
}
