import React from "react";
import { initializeFirebase } from "@utils/firebaseUtils";
import RecaptchaContainer from "@components/RecaptchaContainer";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

initializeFirebase();

export default function App() {

  return (
    <div>
      <RecaptchaContainer />
      <RouterProvider router={router} />
    </div>
  );
}
