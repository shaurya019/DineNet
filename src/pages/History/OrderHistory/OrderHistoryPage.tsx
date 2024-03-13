import React, { useEffect, useState } from 'react'
import Nav from '@/components/Navbar';
import { useGetOrderHistory } from "@/hooks/useGetOrderHistory";
import OrderHistoryComp from '@/components/OrderHistoryComp'
import EmptyOrderPage from './EmptyOrderPage';

export const OrderHistoryPage = () => {
  const [len,setLen] = useState(0);
  const { data = [], isLoading } = useGetOrderHistory();
  console.log("OrderHistoryPage",data)
  useEffect(()=>{
    const results = data.results;
   if(results){
    setLen(results.length);
   }
  },[data]);
  if (isLoading) return;
  return (
    <>
        <Nav title="Order History"  show="True" showEmpty="False"/> 
        {len === 0 ?
        <EmptyOrderPage />
        : 
       <>
       <OrderHistoryComp Request="Request Category" Room="102" Order="112" Status="Received" Date="07 Oct 2023" Time="9:30 P.M" Paid="Paid Online" RequestStatus="Track Request" />
        <OrderHistoryComp Request="Request Category" Room="102" Order="112" Status="Delivered" Date="07 Oct 2023" Time="9:30 P.M" Paid="Paid Online" RequestStatus="Track Request" />
        <OrderHistoryComp Request="Request Category" Room="102" Order="112" Status="Delivered" Date="07 Oct 2023" Time="9:30 P.M" Paid="Cash At Counter" RequestStatus="Track Request" />
        <OrderHistoryComp Request="Request Category" Room="102" Order="112" Status="Received" Date="07 Oct 2023" Time="9:30 P.M"  Paid="Paid Online" RequestStatus="Track Request" /> 
        </>
      }
    </>
  )
}


