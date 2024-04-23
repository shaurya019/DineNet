import React, { useEffect, useState } from 'react';
import { AlertType, showAlert } from "@/service/Slice/alertSlice";
import EmptyOrder from '@/assets/icons/EmptyOrder';
import { useDispatch } from "react-redux";

const EmptyOrderPage = () => {
  const persistUserData = window.localStorage.getItem("persist:user");
  const userData = JSON.parse(persistUserData!);
  const loggedIn = userData?.loggedIn;
  const [isFirstRender,setIsFirstRender] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(loggedIn && isFirstRender){
      dispatch(showAlert({
        message: "",
        type: AlertType.login,
      }));
      setIsFirstRender(false);
    }
  },[loggedIn])

  return (
    <>
      <div className='flex flex-col items-center'>
        <h3 className='text-xl font-semibold mt-[46px] text-blue-pantone'>Track all your orders here !</h3>
        <EmptyOrder />
        <h5 className='text-xs font-semibold mt-[26px] text-center text-grey-dark'>No orders at the moment<br /><span className='text-sm text-blue-pantone'>We're ready whenever you place an order.</span></h5>
      </div>
    </>
  )
}

export default EmptyOrderPage;
