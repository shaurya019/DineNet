import React, { useEffect } from "react";
import LoginModal from "./components/Login/LoginModal.tsx";
import { initializeFirebase } from "./utils/firebaseUtils.ts";
initializeFirebase();

export default function App() {

  return (
    <div>
      <div id="recaptcha-container"></div>
      <LoginModal />
    </div>
  );
}
