import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RestaurantLandingPage from "./pages/RestaurantLandingPage";
import KitchenTimePage from "./pages/KitchenTime"
import Request from "./pages/Request";
import Cart from "./pages/Cart";
import OrderPage from "./pages/Confirmation/OrderConfirmation";
import TrackOrder from "./pages/Track/TrackOrder"
import TrackRequest from "./pages/Track/TrackRequests"
import PaymentFailed from "./pages/Payment/PaymentFailed"
import PaymentMade from "./pages/Payment/PaymentMade"
import OrderHistory from "./pages/History/OrderHistory"
import RequestHistroy from "./pages/History/RequestHistory"
import ConfirmationRequest from "./pages/Confirmation/RequestConfirmation"


const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantLandingPage />,
  },
  {
    path: "/KitchenTimePage",
    element: <KitchenTimePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/request",
    element: <Request />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path:"/order",
    element: <OrderPage />,
  },
  {
    path:"/orderHistory",
    element: <OrderHistory />,
  },
  {
    path:"/requestHistory",
    element: <RequestHistroy />,
  },
  {
    path:"/trackOrder",
    element: <TrackOrder />,
  },
  {
    path:"/trackRequest",
    element: <TrackRequest />,
  },
  {
    path:"/paymentMade",
    element: <PaymentMade />,
  },
  {
    path:"/paymentFailed",
    element: <PaymentFailed />,
  },
  {
    path:"/confirmationRequest",
    element: <ConfirmationRequest />,
  },
  {
    path: "/payment",
    element: <PaymentMade />,
  },
]);
export default router