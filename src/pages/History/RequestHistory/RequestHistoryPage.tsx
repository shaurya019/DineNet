import React from 'react';
import Nav from '@/components/Navbar';
import EmptyRequestPage from './EmptyRequestPage';
import RequestHistoryComp from '@/components/RequestHistoryCom';
import Loader from "@/atomicComponents/Loader";
import { useGetComplimenatryProductHistory } from "@/hooks/useGetComplimenatryProductHistory";

export const RequestHistoryPage = () => {
  const { data, isLoading, error } = useGetComplimenatryProductHistory();

  if (isLoading) return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader />
    </div>
  );

  if (error) {
    // Handle error, e.g., show error message
    return <div>Error: {error.message}</div>;
  }

  // Extract the orders array from the data object
  const orders = data?.orders || [];

  // Check if orders array is empty
  if (orders.length === 0) {
    return <EmptyRequestPage />;
  }

  return (
    <>
      <Nav title="Request History" show="True" showEmpty="False"/> 
      {orders.map((item:any, index:any) => {
        const createdAt = new Date(item.created_at); 
        const date = createdAt.toISOString().split('T')[0];
        const time = createdAt.toTimeString().split(' ')[0];
        return (
          <RequestHistoryComp
            key={item.id}
            Request={item.product_name ? item.product_name : "Request Category"}
            Subject={item.text}
            Order={item.id} 
            Status="Received"
            Date={date}
            Time={time}
          />
        );
      })}
    </>
  );
};
