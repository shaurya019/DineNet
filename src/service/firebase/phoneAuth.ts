import {
  ConfirmationResult,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useState } from "react";
import { getRecaptchaVerifier } from "../../utils/firebaseUtils";

export const usePhoneAuth = () => {
  const auth = getAuth();

  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

  const sendOTP = async (phoneNumber: string) => {
    const appVerifier = getRecaptchaVerifier();
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier!
    );
    setConfirmationResult(confirmationResult);
  };

  const confirmOTP = (otp: string) => {
    return confirmationResult?.confirm?.(otp);
  };

  return {
    sendOTP,
    confirmOTP,
  };
};
