import React, { useRef, useEffect, useState } from "react";
import Nav from '@/components/Navbar';
import RequestHistoryComp from '@/components/RequestHistoryCom';
import Loader from "@/atomicComponents/Loader";
import { defaultClientId as clientId, defaultSource as source } from '@/utils/constants';
import { useGetComplimenatryProductHistory } from "@/hooks/useGetComplimenatryProductHistory";
import EmptyPage from "../EmptyPage";

export const RequestHistoryPage = () => {

  const [page, setPage] = useState(1);
  const { data, isLoading, } = useGetComplimenatryProductHistory(page);
  const [totalPages, setTotalPages] = useState(1);
  const [showData, setShowData] = useState<any[]>([]);

  // const handleButtonClick = (page:any) => {
  //   setPage(page);
  // };





  useEffect(() => {
    if (data && data?.orders && data.orders?.length > 0) {
      setShowData(data.orders);
      setTotalPages(data.total_pages);
    }
  }, [data, page]);





  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  const PrevBut = () => {
    setPage(page-1);
  }

  const NextBut = () => {
    setPage(page+1);
  }

  // const renderPageButtons = () => {
  //   const buttons = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     buttons.push(
  //       <button
  //         key={i}
  //         className={`w-12 h-12 flex items-center justify-center mr-2 bg-greenCyan text-white rounded hover:bg-greenCyan-light shadow-md`}
  //         onClick={() => handleButtonClick(i)}
  //       >
  //         {i}
  //       </button>
  //     );
  //   }
  //   return buttons;
  // };
  




  return (
    <>
      <Nav title="Request History" show="True" showEmpty="False" />
      <div>
        {(data?.orders && data.orders?.length > 0) ?
          page === 1
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
          : <Loader Component={() => <EmptyPage Order="Request"/>} time={2000} />}
           <div className="flex justify-between items-center m-5">
         <button  className={`font-bold text-sm ${page > 1 ? 'text-green-willam' : 'text-white'}`}  onClick={() => page > 1 && PrevBut()}>Prev</button>
         {data?.orders && data.orders?.length > 0 && page!==totalPages  && <button className="font-bold text-sm text-green-willam" onClick={()=>NextBut()}>Next</button>}
        </div>
      </div>
    </>
  );
};
