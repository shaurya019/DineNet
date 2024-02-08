import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantLandingPage from "./pages/RestaurantLandingPage";
import LoginModal from "./components/Login/LoginModal";
 const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantLandingPage />,
  },
  {
    path: "/login",
    element: <LoginModal />,
  },
]);
export default router