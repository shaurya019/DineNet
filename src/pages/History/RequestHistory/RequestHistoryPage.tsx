import React from 'react'
import Nav from '@/components/Navbar';
import RequestHistoryComp from '@/components/RequestHistoryCom'

export const RequestHistoryPage = () => {
  return (
    <>
      <Nav title="Request History "  show="True" showEmpty="False"/> 
      <RequestHistoryComp Request="Request Category" Room="102" Order="112" Status="Received" Date="07 Oct 2023" Time="9:30 P.M" RequestStatus="Track Request" />
      <RequestHistoryComp Request="Request Category" Room="102" Order="112" Status="Accepted" Date="07 Oct 2023" Time="9:30 P.M" RequestStatus="Track Request" />
      <RequestHistoryComp Request="Request Category" Room="102" Order="112" Status="Completed" Date="07 Oct 2023" Time="9:30 P.M" RequestStatus="Show Details" />
      <RequestHistoryComp Request="Request Category" Room="102" Order="112" Status="Completed" Date="07 Oct 2023" Time="9:30 P.M" RequestStatus="Show Details" />
    </>
  )
}
