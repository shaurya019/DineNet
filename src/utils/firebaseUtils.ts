import { getApp } from "firebase/app";
import { RecaptchaVerifier, getAuth } from "firebase/auth";

import { firebaseConfig } from "../configuration/firebase.ts";
import { initializeApp } from "firebase/app";

export const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export const getRecaptchaVerifier = () => {
  const app = getApp();
  const auth = getAuth(app);

  return new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
};
