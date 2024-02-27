import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantLandingPage from "./pages/RestaurantLandingPage";
import Request from "./pages/Request";
import CartPage from "./pages/Cart";
const router = createBrowserRouter([
  {
    path: "/requests",
    element: <Request />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/",
    element: <RestaurantLandingPage />,
  },
]);
export default router