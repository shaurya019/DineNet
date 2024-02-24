import React from 'react'

interface ReqHistoryComProps {
    Request: string;
    Room: string;
    Order: string;
    Status: string;
    Date: string;
    Time: string;
    RequestStatus: string;
  }

  
  export const ReqHistoryCom = ({ Request, Room, Order, Status, Date, Time, RequestStatus }: ReqHistoryComProps) => {
  return (
    <div>
       <div className='flex flex-col m-1 '>
        <div className='h-11 rounded-t-[20px] bg-gallery items-center border border-solid border-gallery flex flex-row px-5 justify-between'>
        <div className='flex flex-col'>
        <h4 className='text-sm text-green-willam font-medium'>{Request}</h4>
        <div className='flex flex-row'>
        <h4 className='text-[8px] font-normal text-grey-dark'>Room No.:<span className='text-[10px] text-grey font-medium'>{Room}</span></h4>
        <h4 className='text-[8px] mx-1'>|</h4>
        <h4 className='text-[8px] text-grey-dark'>Order No.:<span className='text-[10px] text-grey font-medium'>{Order}</span></h4>
        </div>
        </div>  
        <div className=''>
            <h4 className='text-[10px] text-green-willam px-2 bg-white border border-solid rounded-md'>{Status}</h4>
        </div>
        </div>
        <div className='h-11 rounded-b-[20px] items-center border border-t-none border-solid border-gallery flex flex-row px-5 justify-between'>
        <h4 className='text-[10px] font-medium text-grey'>{Date} at {Time}</h4>
        <h4 className='text-[10px] border border-solid rounded-md bg-grey-matterhorn text-white px-4 py-1 items-center'>{RequestStatus}</h4>
        </div> 
        </div>
    </div>
  )
}
