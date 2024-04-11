import React, { useEffect, useState } from "react";
import Nav from "@/components/Navbar";
import { useGetOrderHistory } from "@/hooks/useGetOrderHistory";
import OrderHistoryComp from "@/components/OrderHistoryComp";
import EmptyOrderPage from "./EmptyOrderPage";
import Loader from "@/atomicComponents/Loader";
import { useNavigate } from "react-router-dom";

export const OrderHistoryPage = () => {
  const persistUserData = localStorage.getItem("persist:user");
  const userData = JSON.parse(persistUserData!);
  const loggedIn = userData?.loggedIn;

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showData, setShowData] = useState<any[]>([]);
  const { data = {}, isLoading } = useGetOrderHistory(page);
  const [entry, setEntry] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.results) {
      if (data.results.length > 0) {
        setShowData(prevData => [...prevData, ...data.results]);
        setTotalPages(data.total_pages);
      }
      setEntry(false);
      // Scroll to the bottom after new data is loaded
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [data, loggedIn]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom && page < totalPages) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, totalPages]);

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
          {showData.map((item: any, index: any) => (
            <OrderHistoryComp key={index} Request="Hotel Name" item={item} />
          ))}
          {isLoading && <Loader />}
        </>
      )}
    </>
  );
};
