import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantLandingPage from "./pages/RestaurantLandingPage";
import Request from "./pages/Request";
import CartPage from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantLandingPage />,
  },
  {
    path: "/request",
    element: <Request />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);
export default router