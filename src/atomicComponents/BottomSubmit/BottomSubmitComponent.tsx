import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { clearCart } from "@/service/Slice/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store/cartStore";
import { usePostOrderDetails } from '@/hooks/usePostOrderDetails'
import { usePostComplimentaryOrder } from '@/hooks/usePostComplimentaryOrder'

interface BottomSubmitComponentProps {
  Heading: string;
  submit?: Boolean;
  setSubmit?: React.Dispatch<React.SetStateAction<boolean>>;
  imageFile?: File | null;
  textRequest?: string;
  path: string;
  category?: string;
  requestText?: string;
  ChooseOption?: string | null;
  phone?: string;
  name?: string;
  setFinal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BottomSubmitComponent: React.FC<BottomSubmitComponentProps> = ({ Heading, submit, setSubmit, imageFile, textRequest, path, category, requestText, ChooseOption, phone, name, setFinal }) => {

  // Redux User Data
  const { firebaseToken } = useSelector((state: RootState) => state.user);
  console.log(firebaseToken);

  //Mutation
  const { data: orderDetailsData, mutate: orderDetailsMutate } = usePostOrderDetails(name, phone, firebaseToken, ChooseOption);
  const { data: complimentaryOrderData, mutate: complimentaryOrderMutate } = usePostComplimentaryOrder(textRequest,imageFile);
  console.log(complimentaryOrderData);
  

  // React Hooks
  const [isLoading, setIsLoading] = useState(false);


  // Navigation
  const navigate = useNavigate();

  // Redux Dispatch
  const dispatch = useDispatch();


  // Use to naviagte to phonePay Url
  useEffect(() => {
    const fetchPaymentData = async () => {
      if (orderDetailsData && orderDetailsData.payment_info) {
        let url = orderDetailsData.payment_info.url;
        // Redirect to the payment URL
        window.location.href = url;

        // Dispatch and navigate after the redirection is complete
        const handleRedirectComplete = () => {
          dispatch(clearCart());
          navigate('/order', { replace: true });
        };

        handleRedirectComplete();
      }
    };

    fetchPaymentData();
}, [orderDetailsData, dispatch, navigate]);




  // Post method for Payment
  // const paymentFetchData = async () => {
  //   try {
  //     const paymentSource = ChooseOption === "Option1" ? 'ONLINE' : 'OFFLINE';
  //     console.log('ChooseOption', ChooseOption, ' ', paymentSource);
  //     const response = await fetch('http://alpine-staging-lb-1249159613.ap-south-1.elb.amazonaws.com/api/v1/orders', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         customer_name: name,
  //         customer_phone: phone,
  //         client_id: 1,
  //         source: 'A',
  //         customization: 'A',
  //         order_items: [
  //           {
  //             quantity: 1,
  //             product_id: 1,
  //             campaign_name: 'TEST'
  //           }
  //         ],
  //         payment_source: paymentSource,
  //         firebase_token: firebaseToken,
  //       })
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch');
  //     }

  //     const responseData = await response.json();
  //     console.log('Order submitted successfully:', responseData);

  //     // Extract payment URL from response
  //     if (paymentSource === 'ONLINE') {
  //       const { payment_info: { url } } = responseData;
  //       console.log(url);
  //       setPaymentUrl(url);
  //       console.log("End");
  //     } else {
  //       dispatch(clearCart());
  //       navigate('/order', { replace: true });
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };


  // Post method to store fileData to the s3 bucket
  // const storeFileData = async () => {
  //   console.log("firebaseToken-", firebaseToken);
  //   try {
  //     const formData = new FormData();
  //     formData.append('text', textRequest ?? '');
  //     if (imageFile) {
  //       formData.append('image', imageFile);
  //     }

  //     const response = await fetch('http://alpine-staging-lb-1249159613.ap-south-1.elb.amazonaws.com/api/v1/complimentary_order', {
  //       method: 'POST',
  //       body: formData
  //     });

  //     if (!response.ok) {
  //       setIsLoading(false);
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.error('Error occurred:', error);
  //   } finally {
  //     navigate('/requestCart', { replace: true, state: { category, requestText } });
  //     setIsLoading(false);
  //   }
  // };


  // Navigation Switch
  const navigateTo = (path: string) => {
    switch (path) {
      case "RestaurantLandingPage":
        navigate('/', { replace: true });
        break;
      case "PaymentMade":
        navigate('/paymentMade');
        break;
      case "OrderPage":
        orderDetailsMutate();
        break;
      case "RequestCart":
        complimentaryOrderMutate();
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

  return (
    <div className='fixed bottom-0 w-full bg-white border-t-whiteSmoke mt-10 py-3 px-2.5' style={{ boxShadow: '0 -4px 4px 0px rgba(0, 0, 0, 0.07)', minHeight: '60px' }}>
      <div className="bg-greenCyan text-center py-3 rounded-2xl"
        onClick={() => {
          if (ChooseOption !== null) {
            if (ChooseOption !== "Option3" && phone !== '' && name !== '') {
              proceedWithOrder();
            } else {
              processOfOrder();
            }
          } else {
            if (submit) {
              proceedWithOrder();
            } else {
              processOfOrder();
            }
          }
        }}
      >
        {category !== "NotDisclosed" && isLoading ? (
          <div className="flex justify-center items-center text-white">
            <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.007 8.007 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.314 0-6.292-1.346-8.485-3.515l-1.415 1.415z"></path>
            </svg>
          </div>
        ) : (
          <button className="uppercase text-white font-black text-xs">{Heading}</button>
        )}
      </div>
    </div>
  );
}
