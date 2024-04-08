import React, { useState, useEffect } from 'react';
import {useLocation,useNavigate } from 'react-router-dom';
import Confirmation from "@/components/Confirmation";
import Loader from "@/atomicComponents/Loader";
import { OrderConfirmation } from "@/assets/icons/OrderConfirmation";
import { useGetTransactionStatus } from '@/hooks/useGetTransactionStatus';

export const ConfirmationOrderPage = () => {

  const location = useLocation();
  const history = useNavigate();


  const queryParams = new URLSearchParams(location.search);
  const transactionId = queryParams.get('transacation_id');

  const { id } = location.state?.Order || {};

  const [orderId, setOrderId] = useState('');

  const [paystatus, setPayStatus] = useState('');

  const { data = [], isLoading } = useGetTransactionStatus(transactionId);

  useEffect(() => {
    
    if(id){
      setOrderId(id);
    }else{
      setOrderId(data.order_id);
      setPayStatus(data.status);
    }
  }, [data, orderId, paystatus,id]);

  if(id===null && isLoading){
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  if (paystatus && paystatus !== "COMPLETED") {
    history('/paymentFailed'); 
    return null;
  }

  return (
    <Confirmation
      title="Yay!!"
      message1="Order Placed Successfully for TN 06"
      message2="Your order estimated"
      message3="serving time is 20 mins"
      message4="Thank you for your patience. We will serve you as soon as possible"
      buttonName="Track Order"
      Order={orderId}
      svg={<OrderConfirmation />}
    />
  );
};


