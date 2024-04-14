import { getApp } from "firebase/app";
import { RecaptchaVerifier, getAuth } from "firebase/auth";

import { firebaseConfig } from "../configuration/firebase";
import { initializeApp } from "firebase/app";

export const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

let recaptchaVerifier:RecaptchaVerifier;

export const getRecaptchaVerifier = () => {
  if (!recaptchaVerifier) {
    const app = getApp();
    const auth = getAuth(app);
    recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });
    recaptchaVerifier.render().catch((e) => console.error("Error rendering recaptcha:", e));
  }
  return recaptchaVerifier;
}
