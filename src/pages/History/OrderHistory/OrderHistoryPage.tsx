import React from 'react'
import Nav from '@/components/Navbar';
import OrderHistoryComp from '@/components/OrderHistoryComp'

export const OrderHistoryPage = () => {
  return (
    <>
        <Nav title="Order History"  show="True" showEmpty="False"/> 
        <OrderHistoryComp Request="Request Category" Room="102" Order="112" Status="Received" Date="07 Oct 2023" Time="9:30 P.M" Paid="Paid Online" RequestStatus="Track Request" />
        <OrderHistoryComp Request="Request Category" Room="102" Order="112" Status="Delivered" Date="07 Oct 2023" Time="9:30 P.M" Paid="Paid Online" RequestStatus="Track Request" />
        <OrderHistoryComp Request="Request Category" Room="102" Order="112" Status="Delivered" Date="07 Oct 2023" Time="9:30 P.M" Paid="Cash At Counter" RequestStatus="Track Request" />
        <OrderHistoryComp Request="Request Category" Room="102" Order="112" Status="Received" Date="07 Oct 2023" Time="9:30 P.M"  Paid="Paid Online" RequestStatus="Track Request" />
    </>
  )
}


