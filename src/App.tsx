import React from "react";
import { initializeFirebase } from "@utils/firebaseUtils";
import RecaptchaContainer from "@components/RecaptchaContainer";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import {OrderPage} from './pages/Confirmation/OrderConfirmation/OrderPage'
import {RequestCartPage} from './pages/Confirmation/RequestConfirmation/RequestCartPage'
import {OrderHistoryPage} from './pages/History/OrderHistory/OrderHistoryPage'
import {RequestHistoryPage} from './pages/History/RequestHistory/RequestHistoryPage'
import {PaymentFailedPage} from './pages/Payment/PaymentFailed/PaymentFailedPage'
import {PaymentMadePage} from './pages/Payment/PaymentMade/PaymentMadePage'
import {RequestPage} from './pages/Requests/RequestPage'
import {TrackOrderPage} from './pages/Track/TrackOrder/TrackOrderPage'
import {TrackRequestPage} from './pages/Track/TrackRequests/TrackRequestPage'



import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

initializeFirebase();
const queryClient = new QueryClient();

export default function App() {

  return (
    <div>
      <RequestPage />
      {/* <QueryClientProvider client={queryClient}>
        <RecaptchaContainer />
        <RouterProvider router={router} />
      </QueryClientProvider> */}
    </div>
  );
}
