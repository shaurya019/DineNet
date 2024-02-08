import React, { useState } from "react";
import { usePhoneAuth } from "../../service/firebase/phoneAuth";
import alpine from "../../service/alpine/alpine";
import { Box, Grid } from "@mui/material";
import RecaptchaContainer from "../RecaptchaContainer";

export default function LoginModal() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const { sendOTP, confirmOTP } = usePhoneAuth();
  const handleLogin = () => {
    //TODO: validate phone number
    console.log(phoneNumber);
    sendOTP(phoneNumber);
  };
  const handleConfirmOtp = () => {
    confirmOTP(otp)?.then((response) => {
      alert("User Logged in");
      console.log(response);
    });
  };

  return (
    <Box>
      <RecaptchaContainer />
      <Grid container direction="column" gap={2}>
        <Grid container gap={2}>
          <Grid item>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
            />
          </Grid>
          <Grid item>
            <button onClick={handleLogin}>GET OTP</button>
          </Grid>
        </Grid>
        <Grid container gap={2}>
          <Grid item>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </Grid>
          <Grid item>
            <button onClick={handleConfirmOtp}>CONFIRM</button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
