import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantLandingPage from "./pages/RestaurantLandingPage";
 const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantLandingPage />,
  },
]);
export default router