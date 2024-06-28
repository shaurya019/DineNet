import React from 'react'
import { useNavigate } from "react-router-dom";

interface ReqHistoryComProps {
  Request: string;
  Order: string;
  Subject: string
  Status: string;
  Source: string;
  CreatedAt: any;
  ClientTitle:string
}


export const ReqHistoryCom = ({ Request, Order, Status, Subject, CreatedAt, Source,ClientTitle }: ReqHistoryComProps) => {

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

  const Date = CreatedAt.toLocaleDateString('en-US', dateFormatOptions);
  const Time = CreatedAt.toLocaleTimeString('en-US', timeFormatOptions);


  // Navigation
  const navigate = useNavigate();

  const handleTrackRequest = () => {
    const requestData = {
      Order,
      ClientTitle
    };

    // Navigate to the target route with data
    navigate('/trackRequest', { state: requestData });
  };

  return (
    <div>
      <div className='flex flex-col m-1 '>
        <div className='h-11 rounded-t-[20px] bg-grey-gallery items-center border border-solid border-gallery flex flex-row px-5 justify-between'>
          <div className='flex flex-col'>
            <h4 className='text-sm text-green-willam font-medium'>{Request}</h4>
            <div className='flex flex-row'>
              <h4 className="text-[8px] font-normal text-grey-fortysix">
              {Source}
              </h4>
              <h4 className="text-[8px] mx-1">|</h4>
              <h4 className='text-[8px] text-grey-dark'>Order No.: <span className='text-[10px] text-grey font-medium'>{Order}</span></h4>
            </div>
          </div>
          <div className=''>
            <h4 className='text-[10px] text-green-willam px-2 bg-white border border-solid rounded-md'>{Status}</h4>
          </div>
        </div>
        <div className='h-11 rounded-b-[20px] items-center border border-t-none border-solid border-gallery flex flex-row px-5 justify-between'>
          <h4 className='text-[10px] font-medium text-grey'>{Date} at {Time}</h4>
          <button onClick={handleTrackRequest} className='text-[10px] border border-solid rounded-md bg-grey-matterhorn text-white px-4 py-1 items-center'> {Status === "completed" ? "Show Details" : "Track Request"}</button>
        </div>
      </div>
    </div>
  )
}
