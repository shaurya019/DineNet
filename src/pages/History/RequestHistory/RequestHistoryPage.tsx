import React, {useState, useEffect } from 'react'
import Nav from '@/components/Navbar';
import EmptyRequestPage from './EmptyRequestPage';
import RequestHistoryComp from '@/components/RequestHistoryCom'
import { useGetComplimenatryProductHistory } from "@/hooks/useGetComplimenatryProductHistory";

export const RequestHistoryPage = () => {
  const [len,setLen] = useState(0);
  const { data = [], isLoading } = useGetComplimenatryProductHistory();
  console.log('RequestHistoryPage',data);
  useEffect(()=>{
    const results = data.results;
   if(results){
    setLen(results.length);
   }
  },[data]);
  if (isLoading) return;
  return (
    <>
      <Nav title="Request History "  show="True" showEmpty="False"/> 
      {len === 0 ?
        <EmptyRequestPage />
        : 
       <>
      <RequestHistoryComp Request="Request Category" Room="102" Order="112" Status="Received" Date="07 Oct 2023" Time="9:30 P.M" RequestStatus="Track Request" />
      <RequestHistoryComp Request="Request Category" Room="102" Order="112" Status="Accepted" Date="07 Oct 2023" Time="9:30 P.M" RequestStatus="Track Request" />
      <RequestHistoryComp Request="Request Category" Room="102" Order="112" Status="Completed" Date="07 Oct 2023" Time="9:30 P.M" RequestStatus="Show Details" />
      <RequestHistoryComp Request="Request Category" Room="102" Order="112" Status="Completed" Date="07 Oct 2023" Time="9:30 P.M" RequestStatus="Show Details" />
      </>
      }
    </>
  )
}
