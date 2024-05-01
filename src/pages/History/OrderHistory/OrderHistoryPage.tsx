import React, { useRef ,useEffect, useState } from "react";
import Nav from "@/components/Navbar";
import { useGetOrderHistory } from "@/hooks/useGetOrderHistory";
import OrderHistoryComp from "@/components/OrderHistoryComp";
import EmptyOrderPage from "./EmptyOrderPage";
import Loader from "@/atomicComponents/Loader";


export const OrderHistoryPage = () => {
  const [page, setPage] = useState(1);
  
  const { data = {}, isLoading } = useGetOrderHistory(page);

  const [totalPages, setTotalPages] = useState(data.total_pages);
  const [showData, setShowData] = useState<any[]>([]);
  const listRef = useRef<HTMLDivElement>(null);


  const handleButtonClick = () => {
    setPage((prevPage) => prevPage + 1); 
  };




  useEffect(() => {
    if (listRef.current) {
      const scrollToIndex = (page - 1) * 10;
      const elementToScroll = listRef.current.children[scrollToIndex];
      if (elementToScroll) {
        elementToScroll.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [page,showData]);
  

  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      setShowData((prevData) => [...prevData, ...data.results]);
      setTotalPages(data.total_pages);
    }
  }, [page,data]);


  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
       <Loader />
      </div>
    );
  }
  console.log("WHAT is ",isLoading,data);

  return (
    <>
      <Nav title="Order History" show="True" showEmpty="False" />
      <>
        <div ref={listRef}>
          {(data?.results && data.results?.length > 0) ? 
          page===1 ? 
          data?.results?.map((item: any, index: any) => (
            <OrderHistoryComp key={index} item={item} />
          ))
          :
          showData?.map((item: any, index: any) => (
            <OrderHistoryComp key={index} item={item} />
          ))
           :  <Loader Component={() => <EmptyOrderPage />}  time={2000} />}
        </div>
        {page < totalPages && <button onClick={handleButtonClick}>Load More</button>}
      </>
    </>
  );
};


