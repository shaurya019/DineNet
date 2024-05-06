import React, { useRef, useEffect, useState } from "react";
import Nav from "@/components/Navbar";
import { useGetOrderHistory } from "@/hooks/useGetOrderHistory";
import OrderHistoryComp from "@/components/OrderHistoryComp";
import EmptyPage from "../EmptyPage";
import Loader from "@/atomicComponents/Loader";


export const OrderHistoryPage = () => {
  const [page, setPage] = useState(1);

  const { data = {}, isLoading } = useGetOrderHistory(page);

  const [totalPages, setTotalPages] = useState(data.total_pages);
  const [showData, setShowData] = useState<any[]>([]);
  // const listRef = useRef<HTMLDivElement>(null);


  const handleButtonClick = (page:any) => {
    setPage(page);
  };




  // useEffect(() => {
  //   if (listRef.current) {
  //     const scrollToIndex = (page - 1) * 10;
  //     const elementToScroll = listRef.current.children[scrollToIndex];
  //     if (elementToScroll) {
  //       elementToScroll.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [page, showData]);


  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      setShowData(data.results);
      setTotalPages(data.total_pages);
    }
  }, [page, data]);


  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`w-12 h-12 flex items-center justify-center mr-2 bg-greenCyan text-white rounded hover:bg-greenCyan-light shadow-md`}
          onClick={() => handleButtonClick(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };
  
  return (
    <>
      <Nav title="Order History" show="True" showEmpty="False" />
      <>
      <div>
        {/* <div ref={listRef}> */}
          {(data?.results && data.results?.length > 0) ?
            page === 1 ?
              data?.results?.map((item: any, index: any) => (
                <OrderHistoryComp key={index} item={item} />
              ))
              :
              showData?.map((item: any, index: any) => (
                <OrderHistoryComp key={index} item={item} />
              ))
            : <Loader Component={() => <EmptyPage Order="Order"/>} time={2000} />}
        </div>
       <div className="flex justify-center items-center my-5"> {renderPageButtons()}</div>
        {/* {page < totalPages && <button onClick={handleButtonClick}>Load More</button>} */}
      </>
    </>
  );
};


