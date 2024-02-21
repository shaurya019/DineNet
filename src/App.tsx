import React from "react";
import { initializeFirebase } from "@utils/firebaseUtils";
import RecaptchaContainer from "@components/RecaptchaContainer";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import OrderPage from './pages/OrderConfirmation/index'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

initializeFirebase();
const queryClient = new QueryClient();

export default function App() {

  return (
    <div>
      <OrderPage />
      {/* <QueryClientProvider client={queryClient}>
        <RecaptchaContainer />
        <RouterProvider router={router} />
      </QueryClientProvider> */}
    </div>
  );
}
