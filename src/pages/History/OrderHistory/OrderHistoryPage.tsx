import React, { useRef ,useEffect, useState } from "react";
import Nav from "@/components/Navbar";
import { useGetOrderHistory } from "@/hooks/useGetOrderHistory";
import OrderHistoryComp from "@/components/OrderHistoryComp";
import EmptyOrderPage from "./EmptyOrderPage";
import Loader from "@/atomicComponents/Loader";


export const OrderHistoryPage = () => {
  const persistUserData = localStorage.getItem("persist:user");
  const userData = JSON.parse(persistUserData!)?.loggedIn;

  console.log(userData);
  const [page, setPage] = useState(1);
  const { data = {}, isLoading } = useGetOrderHistory(page);

  const [entry, setEntry] = useState(true);
  const [totalPages, setTotalPages] = useState(data.total_pages);
  const [showData, setShowData] = useState<any[]>([]);
  const listRef = useRef<HTMLDivElement>(null);


  const handleButtonClick = () => {
    setPage((prevPage) => prevPage + 1); 
  };


  useEffect(() => {
    if (userData) {
      setEntry(false);
    }
  }, [userData]);



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
  }, [data]);


  if (isLoading || data === null || entry) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
       <Loader />
      </div>
    );
  }


  if (!isLoading && userData === false) {
    return (
      <>
        <Nav title="Order History" show="True" showEmpty="False" />
        <EmptyOrderPage />
      </>
    );
  }
  

  if (!isLoading && data && data.results && data.results?.length === 0) {
    return (
      <>
        <Nav title="Order History" show="True" showEmpty="False" />
        <EmptyOrderPage />
      </>
    );
  }

  console.log("userData:", userData);
  return (
    <>
      <Nav title="Order History" show="True" showEmpty="False" />
      <>
        <div ref={listRef}>
          {showData.map((item: any, index: any) => (
            <OrderHistoryComp key={index} item={item} />
          ))}
        </div>
        {page < totalPages && <button onClick={handleButtonClick}>Load More</button>}
      </>
    </>
  );
};


