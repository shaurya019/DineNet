import React, { useRef,useEffect, useState } from "react";
import Nav from '@/components/Navbar';
import EmptyRequestPage from './EmptyRequestPage';
import RequestHistoryComp from '@/components/RequestHistoryCom';
import Loader from "@/atomicComponents/Loader";
import { useGetComplimenatryProductHistory } from "@/hooks/useGetComplimenatryProductHistory";

export const RequestHistoryPage = () => {

  const [page, setPage] = useState(1);
  const { data, isLoading, } = useGetComplimenatryProductHistory(page);
  const [totalPages, setTotalPages] = useState(1);
  const [showData, setShowData] = useState<any[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const source = window.localStorage.getItem("source") || "Room No. 1";

  const handleButtonClick = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  useEffect(() => {
    if (listRef.current) {
      const scrollToIndex = (page - 1) * 10;
      listRef.current.children[scrollToIndex]?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [page,showData]);




  useEffect(() => {
    if (data && data?.orders && data.orders?.length > 0) {
      setShowData((prevData) => [...prevData, ...data.orders]); 
  
      setTotalPages(data.total_pages);
    }
  }, [data,page]);





  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
       <Loader />
      </div>
    );
  }




  return (
    <>
      <Nav title="Request History" show="True" showEmpty="False" />
        <div ref={listRef}>
          {(data?.orders && data.orders?.length > 0) ? 
          page===1
          ?
          data?.orders.map((item: any, index: any) => {
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
                Source={source}
              />
            );
          })
          :
          showData.map((item: any, index: any) => {
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
                Source={source}
              />
            );
          })
           : <Loader Component={() => <EmptyRequestPage />}  time={2000} />}
          {page < totalPages && <button onClick={handleButtonClick}>Load More</button>}
        </div>
    </>
  );
};
