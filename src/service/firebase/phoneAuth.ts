import {
  ConfirmationResult,
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useState } from "react";
import { getRecaptchaVerifier } from "@utils/firebaseUtils";

let userCred: ConfirmationResult;

export const usePhoneAuth = () => {
  const [app,setApp] = useState<RecaptchaVerifier>();

  const auth = getAuth();
  const confirmationData = localStorage.getItem('confirmationData');
  // const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(
  //   confirmationData ? JSON.parse(confirmationData) : null
  // );

  const sendOTP = async (phoneNumber: string) => {
    const appVerifier = getRecaptchaVerifier();

    setApp(appVerifier);
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier!
    );

    const confirmationData = {
      onConfirmation: (confirmationResult as any).onConfirmation, // Convert the function to a string
      verificationId: (confirmationResult as any).verificationId
    };


    // Serialize confirmationData and store it in localStorage
    localStorage.setItem('confirmationData', JSON.stringify(confirmationData));
    console.log("confirmationResult ***",confirmationData);
    // setConfirmationResult(confirmationResult);
    userCred = confirmationResult;
    // SET ITEM LOCAL STORAGE
  };

  const confirmOTP = (otp: string) => {
    // console.log("confirmationResult *",(confirmationResult as any)?.onConfirmation);
    // console.log("confirmationResult *",confirmationResult?.confirm);

    return userCred?.confirm?.(otp);
  };

  return {
    sendOTP,
    confirmOTP,
  };
};
