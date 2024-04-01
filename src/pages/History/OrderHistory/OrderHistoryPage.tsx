import React, { useEffect, useState, useRef } from 'react';
import Nav from '@/components/Navbar';
import { useGetOrderHistory } from "@/hooks/useGetOrderHistory";
import OrderHistoryComp from '@/components/OrderHistoryComp';
import EmptyOrderPage from './EmptyOrderPage';
import Loader from "@/atomicComponents/Loader";

export const OrderHistoryPage = () => {
  const [page, setPage] = useState(1); // Initialize page number
  const { data = {}, isLoading, } = useGetOrderHistory(page);
  const observer = useRef<IntersectionObserver>();
  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Nav title="Order History" show="True" showEmpty="False" />
      {data.length === 0 ? (
        <EmptyOrderPage />
      ) : (
        <>
          {data.results && data.results.map((item: any, index: any) => (
            <OrderHistoryComp key={index} Request="Hotel Name" item={item} />
          ))}
          <div className="bottom-of-page" style={{ height: '10px' }} />
        </>
      )}
    </>
  );
};
