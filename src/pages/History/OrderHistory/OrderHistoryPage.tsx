import React, { useEffect, useState, useRef } from "react";
import Nav from "@/components/Navbar";
import { useGetOrderHistory } from "@/hooks/useGetOrderHistory";
import OrderHistoryComp from "@/components/OrderHistoryComp";
import EmptyOrderPage from "./EmptyOrderPage";
import Loader from "@/atomicComponents/Loader";

export const OrderHistoryPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showData, setShowData] = useState<any[]>([]);
  const { data = {}, isLoading } = useGetOrderHistory(page);
  const [entry,setEntry] = useState(true);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (data.results) {
      if(data.results.length > 0){
        setShowData(prevData => [...prevData, ...data.results]);
        setTotalPages(data.total_pages);
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

  if (isLoading || data === null || entry) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Nav title="Order History" show="True" showEmpty="False" />
      {showData.length === 0 && !isLoading && !entry ? (
        <EmptyOrderPage />
      ) : (
        <>
          {showData.map((item: any, index: any) => (
            <OrderHistoryComp key={index} Request="Hotel Name" item={item} />
          ))}
          {isLoading && <Loader />}
        </>
      )}
    </>
  );
};
