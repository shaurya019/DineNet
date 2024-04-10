import React, { useEffect, useState, useRef } from "react";
import Nav from '@/components/Navbar';
import EmptyRequestPage from './EmptyRequestPage';
import RequestHistoryComp from '@/components/RequestHistoryCom';
import Loader from "@/atomicComponents/Loader";
import { useGetComplimenatryProductHistory } from "@/hooks/useGetComplimenatryProductHistory";

export const RequestHistoryPage = () => {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showData, setShowData] = useState<any[]>([]);
  const { data, isLoading, error } = useGetComplimenatryProductHistory(page);
  const [entry,setEntry] = useState(true);

  useEffect(() => {
    console.log(data);
    if (data && data.orders) {
if(data.orders.length > 0){
  setShowData(prevData => [...prevData, ...data.orders]);
  setTotalPages(data.totalCount); 
}
setEntry(false);
    }
  }, [data]);
  

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const scrollTop = e.target.documentElement.scrollTop;
      const clientHeight = e.target.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        if (page + 1 <= totalPages) {
          setPage(prevPage => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, totalPages]);

  
  if (isLoading || data === null || entry) return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Loader />
    </div>
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }




  return (
    <>
      <Nav title="Request History" show="True" showEmpty="False"/> 
      {showData.length === 0 && !isLoading && !entry ? (
       <EmptyRequestPage />
      ) : (
        <>
            {showData.map((item:any, index:any) => {
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
          {isLoading && <Loader />}
        </>
      )}
    </>
  );
};
