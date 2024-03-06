import React, { MouseEventHandler, useState } from "react";
import { usePhoneAuth } from "../../service/firebase/phoneAuth";
import alpine from "../../service/alpine";
import OTPInput from "@/atomicComponents/OTPInput";
import LabelledTextField from "@/atomicComponents/LabelledTextField";
import { LeftArrow } from "@/assets/icons/LeftArrow";
import { Cross } from "@/assets/icons/Cross";
import { UserCredential } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInUser } from "@/service/Slice/userSlice";
interface ILoginModal {
  closeModal?: MouseEventHandler;
}
export const LoginModal = ({ closeModal = () => {} }: ILoginModal) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [showOtp, setShowOtp] = useState(false);
  const { sendOTP, confirmOTP } = usePhoneAuth();
  const dispatch = useDispatch();
  const handleLogin = () => {
    //TODO: validate phone number
    sendOTP("+91" + phoneNumber).then(() => setShowOtp(true));
  };
  const handleConfirmOtp: MouseEventHandler = (e) => {
    confirmOTP(otp)?.then(async (response: UserCredential) => {
      const token = await response.user.getIdToken();
      alpine.userLogin(phoneNumber, token).then(() => {
        window.localStorage.setItem("firebaseToken", token);
        dispatch(signInUser({ phone: phoneNumber, firebaseToken: token }));
        closeModal(e);
      });
    });
  };
  const phoneInput = (
    <div className="flex-1 flex relative flex-col gap-6 place-items-center h-full w-full z-10 justify-center items-start px-7">
      <h4 className="text-green font-bold">Login</h4>
      <LabelledTextField
        label="Phone Number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="uppercase bg-green w-full rounded-full py-3 text-white text-xs font-black font-NotoSans"
      >
        Send OTP
      </button>
    </div>
  );
  const otpVerification = (
    <div className="flex-1 flex relative flex-col gap-6 place-items-center h-full w-full z-10 justify-center items-start px-7">
      <div className="flex gap-2 items-center">
        <LeftArrow className="fill-green" />
        <h4 className="text-green font-bold">Verify</h4>
      </div>
      <h6 className="text-grey-dark text-xs font-normal">
        We have sent OTP on given mobile number.
      </h6>
      <LabelledTextField label="Phone Number" value={phoneNumber} disabled />
      <div className="flex flex-col gap-2 items-start">
        <p className="text-xs font-medium text-green">OTP</p>
        <OTPInput onChange={(otp: string) => setOtp(otp)} />
        <div className="flex gap-1 item-center mt-1">
          <p className="text-grey-dark text-xs">Didn’t Received OTP?</p>
          <button className="text-xs text-blue-600 font-semibold">
            RESEND
          </button>
        </div>
      </div>
      <button
        onClick={handleConfirmOtp}
        className="uppercase bg-green w-full rounded-full py-3 text-white text-xs font-black font-NotoSans"
      >
        Login
      </button>
    </div>
  );
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-grey bg-opacity-50 z-30 flex place-items-center">
      <div
        className="h-1/2 w-full mx-2 bg-white rounded-xl relative z-0 flex flex-col !bg-no-repeat !bg-cover"
        style={{
          background: "url('/assets/loginBg.png')",
        }}
      >
        <div className="absolute right-2 top-2 w-fit z-20">
          <button onClick={closeModal}>
            <Cross className="fill-green" />
          </button>
        </div>
        <div className="flex-1">{showOtp ? otpVerification : phoneInput}</div>
        <div className="mt-auto self-center mb-4">
          <img src="/assets/logo-name.png" />
        </div>
      </div>
    </div>
  );
};
