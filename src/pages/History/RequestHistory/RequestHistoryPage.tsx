import React, { useRef,useEffect, useState } from "react";
import Nav from '@/components/Navbar';
import EmptyRequestPage from './EmptyRequestPage';
import RequestHistoryComp from '@/components/RequestHistoryCom';
import Loader from "@/atomicComponents/Loader";
import { useGetComplimenatryProductHistory } from "@/hooks/useGetComplimenatryProductHistory";

export const RequestHistoryPage = () => {
  const persistUserData = window.localStorage.getItem("persist:user");
  const userData = JSON.parse(persistUserData!);
  const loggedIn = userData?.loggedIn;

  const [page, setPage] = useState(1);
  const [entry, setEntry] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [showData, setShowData] = useState<any[]>([]);
  const { data, isLoading, error } = useGetComplimenatryProductHistory(page);
  const source = window.localStorage.getItem("source") || "1";
  const listRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setPage(page + 1);
  };


  useEffect(() => {
    console.log(data);
    if (data && data.orders) {
      if (data.orders.length > 0) {
        setShowData(prevData => [...prevData, ...data.orders]);
        setTotalPages(data.total_pages);
      }
      setEntry(false);
    }
  }, [data,loggedIn]);


  

  useEffect(() => {
    if (listRef.current) {
      const scrollToIndex = (page - 1) * 10;
      listRef.current.children[scrollToIndex]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [page, showData]);



  useEffect(() => {
    if (loggedIn) {
      setEntry(false);
    }
  }, [loggedIn]);




  if (isLoading || data === null || entry) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }


  return (
    <>
      <Nav title="Request History" show="True" showEmpty="False" />
      {showData.length === 0 && !isLoading && !entry ? (
        <EmptyRequestPage />
      ) : (
        <div ref={listRef}>
          {showData.map((item: any, index: any) => {
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
          })}
          {page < totalPages && <button onClick={handleButtonClick}>Load More</button>}
        </div>
      )}
    </>
  );
};
