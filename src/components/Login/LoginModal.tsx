import React, { useState } from "react";
import { usePhoneAuth } from "../../service/firebase/phoneAuth";
import alpine from "../../service/alpine/alpine";

export default function LoginModal() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const { sendOTP, confirmOTP } = usePhoneAuth();
  const handleLogin = () => {
    //TODO: validate phone number
    sendOTP(phoneNumber);
  };    
  const handleConfirmOtp = () => { 
    confirmOTP(otp)?.then(() => alpine.userLogin(phoneNumber, otp));
   }

  return (
    <div>
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handleLogin}>GET OTP</button>
      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleConfirmOtp}>CONFIRM</button>
    </div>
  );
}
