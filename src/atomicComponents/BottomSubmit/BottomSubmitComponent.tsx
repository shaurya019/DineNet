import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { clearCart } from "@/service/Slice/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store/cartStore";
import { usePostOrderDetails } from '@/hooks/usePostOrderDetails'
import { usePostComplimentaryOrder } from '@/hooks/usePostComplimentaryOrder'
import LoginModal from '@/components/Login';
import { AlertType, showAlert } from "@/service/Slice/alertSlice";
import { defaultClientId, defaultSource } from '@/utils/constants';

interface BottomSubmitComponentProps {
  Heading: string;
  outOfStock?: Boolean;
  submit?: Boolean;
  setSubmit?: React.Dispatch<React.SetStateAction<boolean>>;
  imageFile?: File | null;
  productId?: number;
  textRequest?: string;
  path: string;
  category?: string;
  areaValue?: string;
  requestText?: string;
  ChooseOption?: string | null;
  phone?: string;
  name?: string;
  instruction?: string;
  setFinal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BottomSubmitComponent: React.FC<BottomSubmitComponentProps> = ({ Heading, outOfStock, submit, setSubmit, imageFile, productId, textRequest, path, category, areaValue, requestText, ChooseOption, phone, name, setFinal, instruction }) => {
  const [showOtpModal, setShowOtpModal] = useState<Boolean>(false);
  const clientId = window.localStorage.getItem("clientId") || defaultClientId;
  const source = window.localStorage.getItem("source") || defaultSource;

  const { loggedIn, firebaseToken } = useSelector((state: RootState) => state.user);

  //Mutation
  const { data: orderDetailsData, mutate: orderDetailsMutate } = usePostOrderDetails(name, phone, instruction, firebaseToken, ChooseOption);
  const { data: complimentaryOrderData, mutate: complimentaryOrderMutate } = usePostComplimentaryOrder(productId, textRequest, imageFile);


  // React Hooks
  const [isLoading, setIsLoading] = useState(false);


  // Navigation
  const navigate = useNavigate();

  // Redux Dispatch
  const dispatch = useDispatch();


  useEffect(() => {
    if (complimentaryOrderData != null) {
      if (textRequest !== undefined && textRequest.length > 0 && category !== 'NotDisclosed') {
        const Order = {
          id: complimentaryOrderData.id,
        };
        navigate('/confirmationRequest', { replace: true, state: { Order } });
      }
    }
  }, [complimentaryOrderData, textRequest, category]);


  // Dispatch and navigate after the redirection is complete
  const handleRedirectComplete = (Id: any) => {
    dispatch(clearCart({ clientId, source }));
    const Order = {
      id: Id,
    };
    navigate('/order', { replace: true, state: { Order } });
  };


  // Use to naviagte to phonePay Url
  useEffect(() => {
    const fetchPaymentData = async () => {
      if (orderDetailsData) {
        if (ChooseOption === 'OFFLINE') {
          handleRedirectComplete(orderDetailsData.id);
        } else if (orderDetailsData.payment_info) {
          let url = orderDetailsData.payment_info.url;
          window.location.replace(url);
        }
        dispatch(clearCart({ clientId, source }));
      }
    };

    fetchPaymentData();
  }, [orderDetailsData, dispatch, navigate]);


  // Navigation Switch
  const navigateTo = (path: string) => {
    switch (path) {
      case "RestaurantLandingPage":
        navigate(`/?clientId=${clientId}`, { replace: true });
        break;
      case "PaymentMade":
        if (outOfStock) {
          dispatch(showAlert({
            message: "Remove out of stock item!!",
            type: AlertType.error,
          }));
          setIsLoading(false);
        } else {
          navigate('/paymentMade', { state: { instruction: instruction ?? " " } });
        }
        break;
      case "OrderPage":
      case "RequestCart":
        // if (loggedIn || ChooseOption === 'ONLINE') {
        //   handleCreateOrder();
        // } else {
        //   setShowOtpModal(true)
        // }
        handleCreateOrder();
        break;
      default:
        console.error("Invalid path provided.");
    }
  };

  const proceedWithOrder = () => {
    if (setSubmit !== null) {
      setFinal?.(true);
      setIsLoading(true);
      setSubmit?.(true);
    }
    navigateTo(path);
  };

  const processOfOrder = () => {
    setSubmit?.(true);
    if (path === "RestaurantLandingPage" || path === "PaymentMade") {
      navigateTo(path);
    }
  }

  const handleCreateOrder = () => {
    switch (path) {
      case "OrderPage":
        orderDetailsMutate();
        break;
      case "RequestCart":
        if (textRequest !== undefined && textRequest.length > 0 && category !== 'NotDisclosed') {
          complimentaryOrderMutate();
        } else {
          setIsLoading(false);
        }
        break;
      default:
        console.error("Invalid path provided.");
    }
  }


  const handleCloseOtpModal = (action: string) => {
    if (action === "otp") {
      window.localStorage.removeItem("loginCredentials");
      handleCreateOrder();
    } else {
      setShowOtpModal(false);
    }
    setIsLoading(false);
  }


  const handleOnSubmit = () => {
    if (ChooseOption) {
      // if (ChooseOption !== "Option3" && phone !== '' && name !== '') {
      //   proceedWithOrder();
      // } else {
      //   processOfOrder();
      // }
      if (ChooseOption !== "Option3" && name !== '') {
        proceedWithOrder();
      } else {
        processOfOrder();
      }
    }
    else if (textRequest !== null && category !== null) {
      if (textRequest !== '' && category !== 'NotDisclosed') {
        proceedWithOrder();
      } else {
        processOfOrder();
      }
    }
    else {
      if (submit) {
        proceedWithOrder();
      } else {
        processOfOrder();
      }
    }
  }

  return (
    <div className='fixed bottom-0 w-full bg-white border-t-whiteSmoke mt-10 py-3 px-2.5' style={{ boxShadow: '0 -4px 4px 0px rgba(0, 0, 0, 0.07)', minHeight: '60px' }}>
      {showOtpModal && <LoginModal closeModal={handleCloseOtpModal} phone={phone} />}
      <div className="bg-greenCyan text-center py-3 rounded-2xl"
        onClick={handleOnSubmit}
      >
        {isLoading ? (
          <div className="flex justify-center items-center text-white">
            <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.007 8.007 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.314 0-6.292-1.346-8.485-3.515l-1.415 1.415z"></path>
            </svg>
          </div>
        ) : (
          <button className="uppercase font-[NotoSans] text-white font-black text-xs">{Heading}</button>
        )}
      </div>
    </div>
  );
}
