import React, { useRef ,useEffect, useState } from "react";
import Nav from "@/components/Navbar";
import { useGetOrderHistory } from "@/hooks/useGetOrderHistory";
import OrderHistoryComp from "@/components/OrderHistoryComp";
import EmptyOrderPage from "./EmptyOrderPage";
import Loader from "@/atomicComponents/Loader";


export const OrderHistoryPage = () => {
  const persistUserData = localStorage.getItem("persist:user");
  const userData = JSON.parse(persistUserData!);
  const loggedIn = userData?.loggedIn;

  const [page, setPage] = useState(1);
  const [entry, setEntry] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [showData, setShowData] = useState<any[]>([]);
  const { data = {}, isLoading } = useGetOrderHistory(page);
  const listRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data.results) {
      console.log(data.results)
      if (data.results.length > 0) {
        setShowData(prevData => [...prevData, ...data.results]);
        setTotalPages(data.total_pages);
      }
      setEntry(false);
    }
  }, [data, loggedIn]);

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
      <Nav title="Order History" show="True" showEmpty="False" />
      {showData.length === 0 && !isLoading && !entry ? (
        <EmptyOrderPage />
      ) : (
        <>
          <div ref={listRef}>
            {showData.map((item: any, index: any) => (
              <OrderHistoryComp key={index} item={item} />
            ))}
          </div>
          {page < totalPages && <button onClick={handleButtonClick}>Load More</button>}
        </>
      )}
    </>
  );
};
