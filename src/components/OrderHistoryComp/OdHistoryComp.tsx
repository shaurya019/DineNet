import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Down from "../../assets/icons/DownArrow";
import Up from "../../assets/icons/UpwardArrow";
import Veg from "../../assets/icons/Veg";

interface OdHistoryCompProps {
  item: any;
}

export const OdHistoryComp = ({ item }: OdHistoryCompProps) => {
  const navigate = useNavigate();
  const createdAt = new Date(item.created_at);
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  const timeFormatOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const Dates = createdAt.toLocaleDateString('en-US', dateFormatOptions);
  const Time = createdAt.toLocaleTimeString('en-US', timeFormatOptions);
  const [expanded, setExpanded] = useState(true);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const trackOrderDetails = () => {
    const requestData = {
      id: item.id.toString()
    };

    navigate('/trackOrder', { state: requestData });
  };

  const downloadOrderDetails = () => {

  };


  const total = Object.keys(item.total_amount_breakup)
    .reduce((acc, key) => acc + item.total_amount_breakup[key], 0);

  return (
    <>
      <div className="flex flex-col m-1 ">
        <div className="h-[79px] rounded-t-[20px] bg-grey-gallery border border-solid border-grey-gallery px-[18px]" onClick={toggleExpansion}>
          <div className="flex-col justify-center items-center">
            <div className="flex flex-row justify-between mt-3">
              <div className="flex flex-col">
                <h4 className="text-xs text-green-willam font-medium">
                  {item.client.client_name}
                </h4>
                <div className="flex flex-row">
                  <h4 className="text-[8px] font-normal text-grey-fortysix">
                    Room No. :
                    <span className="text-[10px] pl-1 text-grey font-medium">
                      {item.source}
                    </span>
                  </h4>
                  <h4 className="text-[8px] mx-1">|</h4>
                  <h4 className="text-[8px] text-grey-dark">
                    Order No.:
                    <span className="text-[10px] pl-1 text-grey font-medium">
                      {item.id}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <h4
                  className={`text-[8px] p-[5px] mr-2 ${item.payment_source === "OFFLINE"
                    ? "bg-blue-bright"
                    : "bg-green-japanese"
                    } text-white border border-solid rounded-2xl px-3`}
                >
                  {item.payment_source === "OFFLINE" ? "Cash at Counter" : item.payment_source}
                </h4>
                {expanded === true ? (
                  <button>
                    <Down />
                  </button>
                ) : (
                  <button>
                    <Up />
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-row justify-between mt-2">
              {expanded === true ? (
                <h4 className={`text-[10px] px-2 mr-[10px]  border border-solid rounded ${item.status === 'Cancelled' ? 'bg-red-warm' : 'bg-white'} ${item.status === 'Cancelled' ? 'text-white' : 'text-greenCyan'}`}>
                  {item.status}
                </h4>

              ) : null}
              <h4 className="text-[10px] font-medium text-grey">
                {Dates} at {Time}
              </h4>
            </div>
          </div>
        </div>
        {expanded === true ? (
          <div className="h-16 rounded-b-[20px] items-center border border-t-none border-solid border-grey-gallery flex flex-row px-5 justify-between">
            <button
              onClick={item.status === 'PLACED' ? trackOrderDetails : undefined}
              className={`text-[10px] rounded-md ${item.status === 'PLACED' ? 'border border-solid rounded-md' : ''} ${item.status === 'PLACED' ? 'bg-grey-matterhorn' : 'bg-white'}  text-white px-4 py-1 flex items-center justify-center`}>
              Track Order
            </button>
            <button
              onClick={item.status !== 'Cancelled' ? downloadOrderDetails : undefined}
              className={`text-[10px] border border-solid rounded-md text-white px-4 py-1 flex items-center justify-center ${item.status === 'Cancelled' ? 'bg-greenCyan-light' : 'bg-greenCyan'
                }`}
            >
              Download Invoice
            </button>
          </div>
        ) : (
          <div className="rounded-b-[20px] items-center border border-t-none border-solid border-grey-gallery flex flex-col">
            <div className="h-6 w-full bg-red-light flex flex-row items-center justify-between">
              <h4 className="text-[10px] font-semibold text-green-mineral ml-5">
                Item Details
              </h4>
              <h4 className="mr-5 text-[10px] text-greenCyan px-2 mr-[10px] bg-white border border-solid rounded">
                {item.payment_source === "OFFLINE" ? item.status : "Preparing"}
              </h4>
            </div>
            <div className="w-full mt-3 flex flex-col justify-between text-center">
              {item.order_items ? (
                item.order_items.map((orderItem: any, orderIndex: any) => (
                  <div
                    className="flex flex-row justify-between mx-[18px] mb-2"
                    key={orderIndex}
                  >
                    <div className="w-1/3 flex flex-row">
                      {orderItem.product.non_veg ? <Veg color="#E8505B" /> : <Veg color="#4CAF50" />}
                      <h4 className="text-[10px] text-left ml-2">
                        {orderItem.product.name}
                      </h4>
                    </div>
                    <h4 className="w-1/3 text-[10px]">
                      QTY: {orderItem.quantity}
                    </h4>
                    <h4 className="w-1/3 text-[10px] text-right">
                      <span>&#8377;</span> {orderItem.price}
                    </h4>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>

            <div className="w-full">
              <hr className="bg-silver  mx-3 my-3" />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <h4 className="text-[12px] ml-6 font-semibold text-blue-dark">
                Item Total :
              </h4>
              <h4 className="text-[14px] font-semibold mr-[18px] text-blue-dark">
                <span>&#8377;</span>
                {item.total_amount_breakup.amount}
              </h4>
            </div>
            <div className="w-full">
              <hr className="bg-silver  mx-3 my-3" />
            </div>
            <div className="w-full flex flex-col">
              {Object.keys(item.total_amount_breakup).map((key, i) => {
                if (key !== "amount") {
                  return (
                    <div className="flex flex-row justify-between mb-3" key={i}>
                      <h5 className="ml-6 font-normal text-[10px]">{key} :</h5>
                      <h5 className="mr-6 font-semibold text-grey text-[12px]">
                        <span>&#8377;</span>
                        {item.total_amount_breakup[key]}
                      </h5>
                    </div>
                  );
                }
              })}
            </div>
            <hr className="bg-silver  mx-3 my-3" />
            <div className="w-full h-[42px] bg-green-finn px-5 font-bold text-blue-oxford flex flex-row items-center justify-between">
              <h4 className="text-[10px]">Total Price</h4>
              <h4 className="text-[15px] px-2">
                <span>&#8377;</span>{total}
              </h4>
            </div>
            <div className="w-full h-6 bg-red-light flex items-center">
              <h4 className="text-[10px] font-semibold text-greenCyan ml-5">
                Customization
              </h4>
            </div>
            <div className="w-full">
              <div className="mx-3 h-16 bg-white border border-solid border-whiteSmoking flex mt-1 mb-4 rounded">
                <h4 className="text-[10px] text-left font-semibold text-grey ml-1 mt-1">
                  {item.customization}
                </h4>
              </div>
            </div>

            <div className="mb-7 w-full flex flex-row px-5 items-center justify-between">
              <button
                onClick={item.status === 'PLACED' ? trackOrderDetails : undefined}
                className={`h-8 text-[10px] rounded-md ${item.status === 'PLACED' ? 'border border-solid rounded-md' : ''} ${item.status === 'PLACED' ? 'bg-grey-matterhorn' : 'bg-white'}  text-white px-4 flex items-center justify-center`}>
                Track Order
              </button>
              <button
                onClick={downloadOrderDetails}
                className={`h-8 text-[10px] border border-solid rounded-md text-white px-4 flex items-center justify-center ${item.status === 'Cancelled' ? 'bg-greenCyan-light' : 'bg-greenCyan'
                  }`}
              >
                Download Invoice
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
