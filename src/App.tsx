import React from "react";
import LoginModal from "./components/Login/LoginModal";
import { initializeFirebase } from "./utils/firebaseUtils";
import RecaptchaContainer from "./components/RecaptchaContainer";

initializeFirebase();

export default function App() {

  return (
    <div>
      <RecaptchaContainer />
      <LoginModal />
    </div>
  );
}
