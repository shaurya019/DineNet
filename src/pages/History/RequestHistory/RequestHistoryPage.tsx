import React from 'react';
import Nav from '@/components/Navbar';
import EmptyRequestPage from './EmptyRequestPage';
import RequestHistoryComp from '@/components/RequestHistoryCom';
import { useGetComplimenatryProductHistory } from "@/hooks/useGetComplimenatryProductHistory";

export const RequestHistoryPage = () => {
  const { data = [], isLoading } = useGetComplimenatryProductHistory();

  if (isLoading) return null; 

  return (
    <>
      <Nav title="Request History " show="True" showEmpty="False"/> 
      {data.length === 0 ?
        <EmptyRequestPage />
        : 
        data.map((item:any, index:any) => {
          const createdAt = new Date(item.created_at); 
          const date = createdAt.toISOString().split('T')[0];
          const time = createdAt.toTimeString().split(' ')[0];
          return (
            <RequestHistoryComp
              key={index}
              Request="Request Category"
              // Room="102"
              Subject={item.text}
              Order={item.id} 
              Status="Received"
              Date={date}
              Time={time}
            />
          );
        })
      }
    </>
  );
};
