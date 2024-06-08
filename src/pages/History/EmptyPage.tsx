import React from 'react'
import { useEffect, useState } from 'react';
import EmptyOrder from '@/assets/icons/EmptyOrder';
import EmptyRequest from '@/assets/icons/EmptyRequest';
import { AlertType, showAlert } from "@/service/Slice/alertSlice";
import { useDispatch } from "react-redux";

const EmptyPage = ({Order}:any) => {

    // const LoggInCreds = window.localStorage.getItem("firebaseToken");

    // const [isFirstRender,setIsFirstRender] = useState(true);
    // const dispatch = useDispatch();
    
    // useEffect(()=>{
    //   if(LoggInCreds===null && isFirstRender){
    //     dispatch(showAlert({
    //       message: "",
    //       type: AlertType.login,
    //     }));
    //     setIsFirstRender(false);
    //   }
    // },[LoggInCreds]);

    
  return (
    <div className='flex flex-col items-center'>
    <h3  className='text-xl font-semibold mt-[46px] text-center text-blue-pantone'>{Order==='Order' ? 'Track all your orders here !' : 'Keep an eye on your Requests here !'}</h3>
    {Order==='Order' ? <EmptyOrder /> : <EmptyRequest />}
    <h5 className='text-xs font-semibold mt-[26px] text-center text-grey-dark'>
      {Order==='Order' ? "No orders at the moment" : "Currently, there are no requests at the moment."}
      <br />
      <span className='text-sm text-blue-pantone'>
        {Order==='Order' ? "We're ready whenever you place an order." : "Feel free to check back later!"}
      </span>
    </h5>
  </div>
  )
}

export default EmptyPage
