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
  const [totalPages, setTotalPages] = useState(1);
  const [showData, setShowData] = useState<any[]>([]);
  const { data = {}, isLoading } = useGetOrderHistory(page);
  const listRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data.results) {
      if (data.results.length > 0) {
        setShowData(prevData => [...prevData, ...data.results]);
        setTotalPages(data.total_pages);
      }
    }
  }, [data, loggedIn]);

  useEffect(() => {
    if (listRef.current) {
      const itemsPerPage = 10;
      const scrollToIndex = (page - 1) * itemsPerPage;
      listRef.current.children[scrollToIndex]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showData]);

  if (isLoading || data === null) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Nav title="Order History" show="True" showEmpty="False" />
      {showData.length === 0 && !isLoading ? (
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
