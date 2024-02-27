import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantLandingPage from "./pages/RestaurantLandingPage";
import Request from "./pages/Request";
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Request />,
  },
  // {
  //   path: "/cart",
  //   element: <CartPage />,
  // },
]);
export default router