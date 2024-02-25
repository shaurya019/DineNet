import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantLandingPage from "./pages/RestaurantLandingPage";
import CartPage from "./pages/Cart";
 const router = createBrowserRouter([
  {
    path: "/",
    element: <CartPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);
export default router