import React, { MouseEventHandler, useState } from "react";
import { usePhoneAuth } from "../../service/firebase/phoneAuth";
import alpine from "../../service/alpine/alpine";
import { LoginBackground } from "@/assets/images/LoginBackground";
import OTPInput from "@/atomicComponents/OTPInput";
import LabelledTextField from "@/atomicComponents/LabelledTextField";
import { LeftArrow } from "@/assets/icons/LeftArrow";
import { Cross } from "@/assets/icons/Cross";
interface ILoginModal {
  closeModal?: MouseEventHandler;
}
export const LoginModal = ({ closeModal }: ILoginModal) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const { sendOTP, confirmOTP } = usePhoneAuth();
  const handleLogin = () => {
    //TODO: validate phone number
    sendOTP(phoneNumber);
  };
  const handleConfirmOtp = () => {
    confirmOTP(otp)?.then(() => alpine.userLogin(phoneNumber, otp));
  };
  const phoneInput = (
    <div className="flex-1 flex relative flex-col gap-6 place-items-center h-full w-full z-10 justify-center items-start px-7">
      <h4 className="text-green font-bold">Login</h4>
      <LabelledTextField
        label="Phone Number"
        placeholder="Enter your phone number"
      />
      <button className="uppercase bg-green w-full rounded-full py-3 text-white text-xs font-black font-NotoSans">
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
      <LabelledTextField label="Phone Number" value="+91 9639622223" disabled />
      <div className="flex flex-col gap-2 items-start">
        <p className="text-xs font-medium text-green">OTP</p>
        <OTPInput />
        <div className="flex gap-1 item-center mt-1">
          <p className="text-grey-dark text-xs">Didn’t Received OTP?</p>
          <button className="text-xs text-blue-600 font-semibold">
            RESEND
          </button>
        </div>
      </div>
      <button className="uppercase bg-green w-full rounded-full py-3 text-white text-xs font-black font-NotoSans">
        Login
      </button>
    </div>
  );
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-grey bg-opacity-50 z-30 flex place-items-center">
      <div className="h-1/2 w-full mx-2 bg-white rounded-xl relative z-0 flex flex-col">
        <div className="absolute right-2 top-2 w-fit z-20">
          <button onClick={closeModal}>
            <Cross className="fill-green" />
          </button>
        </div>
        <div className="absolute w-full h-full -right-[51px] overflow-hidden">
          <LoginBackground className="h-full w-full" />
        </div>
        <div className="flex-1">{otpVerification}</div>
        <div className="mt-auto self-center mb-4">
          <img src="/assets/logo-name.png" />
        </div>
      </div>
      {/* <input
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
      <button onClick={handleConfirmOtp}>CONFIRM</button> */}
    </div>
  );
};
