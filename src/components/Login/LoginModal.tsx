import React, { MouseEventHandler, useEffect, useState } from "react";
import { usePhoneAuth } from "../../service/firebase/phoneAuth";
import alpine from "../../service/alpine";
import OTPInput from "@/atomicComponents/OTPInput";
import LabelledTextField from "@/atomicComponents/LabelledTextField";
import { Cross } from "@/assets/icons/Cross";
import { LeftArrow } from "@/assets/icons/LeftArrow";
import { useDispatch } from "react-redux";
import { signInUser } from "@/service/Slice/userSlice";
import { AlertType, showAlert } from "@/service/Slice/alertSlice";

interface ILoginModal {
  closeModal?: (action: string) => void;
  phone?: string;
}

export const LoginModal = ({ closeModal = () => { }, phone }: ILoginModal) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [isIncorrectOTP, setIsIncorrectOTP] = useState(false);
  const [isLoadingOtp, setIsLoadingOtp] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [errorType, setErrorType] = useState<string>("");
  const [resendTimer, setResendTimer] = useState<number>(60);
  const { sendOTP, confirmOTP } = usePhoneAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    if (phone?.length && phone?.length >= 10 && !phoneNumber) {
      setPhoneNumberError(false);
      setPhoneNumber(phone);
      handleLogin(phone);
    }
  }, [phone])

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleLogin = (phoneNumber: string) => {
    setIsLoadingOtp(true);
    setResendTimer(60);
    sendOTP("+91" + phoneNumber).then(() => {
      setShowOtp(true);
    }).catch((error) => {
      dispatch(showAlert({
        message: error.message,
        type: AlertType.error,
      }));
    }).finally(() => {
      setIsLoadingOtp(false);
    });
  };



  const handleConfirmOtp = async (e: any) => {
    e.preventDefault();
    setIsLoadingLogin(true);
    try {
      const response = await confirmOTP(otp);
      const token = await response!.user.getIdToken();
      await alpine.userLogin(phoneNumber, token);
      window.localStorage.setItem("firebaseToken", token);
      dispatch(signInUser({ phone: phoneNumber, firebaseToken: token }));
      dispatch(showAlert({
        message: "Congratulations! You have successfully logged In",
        type: AlertType.success,
      }));

      closeModal("otp");
    } catch (error: any) {
      dispatch(showAlert({
        message: error.message,
        type: AlertType.error,
      }));
      console.error("Failed to confirm OTP:", error);
      setIsIncorrectOTP(true);
      console.log("Value 1", isIncorrectOTP)
      return;
    } finally {
      console.log("Value 2", isIncorrectOTP)
      // closeModal("cross");
      setIsLoadingLogin(false);
    }
  };



  // const handleConfirmOtp: MouseEventHandler = (e) => {
  //   e.preventDefault();
  //   setIsLoadingLogin(true);
  //   confirmOTP(otp)?.then(async (response: UserCredential) => {
  //     const token = await response.user.getIdToken();
  //     alpine.userLogin(phoneNumber, token).then(() => {
  //       window.localStorage.setItem("firebaseToken", token);
  //       dispatch(signInUser({ phone: phoneNumber, firebaseToken: token }));
  //       dispatch(
  //         showAlert({
  //           message: "Successfully Logged In",
  //           type: AlertType.success,
  //         })
  //       );
  //       closeModal("otp");
  //     });
  //   }).catch(() => {
  //     setIsIncorrectOTP(true);
  //   }).finally(()=>{
  //     console.log("Model",isIncorrectOTP);
  //     //  closeModal("cross");
  //     setIsLoadingLogin(false);
  //   });
  // };




  // e.preventDefault();






  const phoneInput = (
    <div className="flex-1 flex relative flex-col gap-6 place-items-center h-full w-full z-10 justify-center items-start px-7">
      <h4 className="text-green font-bold">Login</h4>
      <LabelledTextField
        label="Phone Number"
        labelClassName="montserrat-label"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
          setPhoneNumberError(false);
        }}
        error={phoneNumberError === true ? errorType === 'empty' ? "Phone number cannot be empty" : errorType === 'length' ? "Phone number should be of 10 digits" : errorType === 'Invalid' ? "Enter a valid phone number" : undefined : undefined}
        errorClassName="text-red-500"
        inputClassName={phoneNumberError ? "border-red-500" : ""}
        disabled={isLoadingOtp}
      />
      <button
        disabled={isLoadingOtp}
        onClick={() => {
          if (phoneNumber === "") {
            setPhoneNumberError(true);
            setErrorType('empty');
            return;
          } else if (phoneNumber.length < 10) {
            setPhoneNumberError(true);
            setErrorType('length');
            return;
          } else if (!(/^[0-9]*$/.test(phoneNumber))) {
            setPhoneNumberError(true);
            setErrorType('Invalid');
            return;
          }
          handleLogin(phoneNumber);
        }}
        className="uppercase bg-green w-full rounded-full py-3 text-white text-xs font-black font-[NotoSans]"
      >
        {isLoadingOtp ?
          <svg className="animate-spin h-4 w-5  mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.007 8.007 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.314 0-6.292-1.346-8.485-3.515l-1.415 1.415z"></path>
          </svg>
          :
          "Send OTP"
        }
      </button>
    </div>
  );
  const otpVerification = (
    <div className="flex-1 flex relative flex-col gap-6 place-items-center h-full w-full z-10 justify-center items-start px-7">
      <div className="flex gap-2 items-center">
      <LeftArrow onClick={()=>setShowOtp(false)} className="fill-green" />
        <h4 className="text-green font-bold">Verify</h4>
      </div>
      <h6 className="text-grey-dark text-xs font-normal">
        We have sent OTP on given mobile number.
      </h6>
      <LabelledTextField label="Phone Number" value={phoneNumber} disabled />
      <div className="flex flex-col gap-2 items-start">
        <p className="text-xs font-medium text-green">OTP</p>
        <OTPInput wrongOtp={isIncorrectOTP} onChange={(otp: string) => setOtp(otp)} />
        {isIncorrectOTP && <p className="text-red-warm text-xs">Wrong Otp Entered</p>}
        <div className="flex gap-1 item-center mt-1">
          <p className="text-grey-dark text-xs">Didn’t Received OTP?</p>
          {resendTimer === 0 ? (
            <button onClick={() => handleLogin(phoneNumber)} className="text-xs text-blue-600 font-semibold">
              RESEND
            </button>
          ) : (
            <p className="text-xs">{`Resend in ${resendTimer} seconds`}</p>
          )}
        </div>
      </div>
      <button
        onClick={handleConfirmOtp}
        disabled={!otp || otp.length < 6 || isLoadingLogin}
        className="uppercase bg-green w-full rounded-full py-3 text-white text-xs font-black font-[NotoSans]"
      >
        {isLoadingLogin ?
          <svg className="animate-spin h-4 w-5  mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.007 8.007 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.314 0-6.292-1.346-8.485-3.515l-1.415 1.415z"></path>
          </svg> :
          "Login"
        }
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
          <button onClick={() => closeModal("cross")}>
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
