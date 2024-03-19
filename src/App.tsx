import React from "react";
import { initializeFirebase } from "@utils/firebaseUtils";
import RecaptchaContainer from "@components/RecaptchaContainer";
import { RouterProvider } from "react-router-dom";
import router from "./Router";



import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./service/store/cartStore";
import Alert from "./components/Alert";

initializeFirebase();
const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RecaptchaContainer />
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Alert />
      </Provider>
    </div>
  );
}
