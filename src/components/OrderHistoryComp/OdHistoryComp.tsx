
import React,{useState} from 'react'
import Down from "../../assets/icons/DownArrow";
import Up from "../../assets/icons/UpwardArrow";
import Veg from "../../assets/icons/Veg";

interface OdHistoryCompProps {
    Request: string;
    Room: string;
    Order: string;
    Status: string;
    Date: string;
    Paid:string;
    Time: string;
    RequestStatus: string;
  }

  export const OdHistoryComp = ({
    Request,
    Room,
    Order,
    Status,
    Date,
    Time,
    Paid,
    RequestStatus,
  }:OdHistoryCompProps) => {
  
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setExpanded(!expanded);
    };
    return (
      <>
        <div className="flex flex-col m-1 ">
          <div className="h-[79px] rounded-t-[20px] bg-grey-gallery border border-solid border-grey-gallery px-[18px]">
            <div className="flex-col justify-center items-center">
              <div className="flex flex-row justify-between mt-3">
                <div className="flex flex-col">
                  <h4 className="text-xs text-green-willam font-medium">
                    {Request}
                  </h4>
                  <div className="flex flex-row">
                    <h4 className="text-[8px] font-normal text-grey-fortysix">
                      Room No.:
                      <span className="text-[10px] text-grey font-medium">
                        {Room}
                      </span>
                    </h4>
                    <h4 className="text-[8px] mx-1">|</h4>
                    <h4 className="text-[8px] text-grey-dark">
                      Order No.:
                      <span className="text-[10px] text-grey font-medium">
                        {Order}
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <h4
                    className={`text-[8px] p-[5px] mr-2 ${
                      Paid === "Cash At Counter"
                        ? "bg-blue-bright"
                        : "bg-green-japanese"
                    } text-white border border-solid rounded-2xl px-3`}
                  >
                    {Paid}
                  </h4>
                  {
                    expanded === true ?  <button onClick={toggleExpansion}><Down/></button> :  <button onClick={toggleExpansion}><Up/></button>
                  }
                </div>
              </div>
  
              <div className="flex flex-row justify-between mt-2">
               {
                expanded === true ?  <h4 className="text-[10px] text-greenCyan px-2 mr-[10px] bg-white border border-solid rounded">
                {Status}
               </h4> : null
               }
                <h4 className="text-[10px] font-medium text-grey">
                  {Date} at {Time}
                </h4>
              </div>
            </div>
          </div>
          { expanded === true ? 
          <div className='h-16 rounded-b-[20px] items-center border border-t-none border-solid border-grey-gallery flex flex-row px-5 justify-between'>
            <h4 className='text-[10px] border border-solid rounded-md bg-grey-matterhorn text-white px-4 py-1 items-center'>{RequestStatus}</h4>
            <h4 className='text-[10px] border border-solid rounded-md bg-greenCyan text-white px-4 py-1 items-center'>Download Invoice</h4>
          </div> 
          :
          <div className="h-[472px] rounded-b-[20px] items-center border border-t-none border-solid border-grey-gallery flex flex-col">
            <div className="h-6 w-full bg-red-light flex flex-row items-center justify-between">
              <h4 className="text-[10px] font-semibold text-green-mineral ml-5">
                Item Details
              </h4>
              <h4 className="mr-5 text-[10px] text-greenCyan px-2 mr-[10px] bg-white border border-solid rounded">
              {Paid === "Cash At Counter" ? Status : 'Preparing'}
              </h4>
            </div>
            <div className="w-full mt-3 flex flex-col justify-between text-center">
              <div className="flex flex-row justify-between mx-[18px]">
                <div className="w-1/3 flex flex row">
                  <Veg />
                  <h4 className=" text-[10px] text-left ml-2 ">Paneer Pakoda</h4>
                </div>
                <h4 className="w-1/3 text-[10px] ">QTY:1</h4>
                <h4 className="w-1/3 text-[10px] text-right">
                  <span>&#8377;</span> 60
                </h4>
              </div>
              <div className=" flex flex-row justify-between mx-[18px] my-[11px]">
                <div className="w-1/3 flex flex row">
                  <Veg />
                  <h4 className=" text-[10px] text-left  ml-2 ">Papdi chat</h4>
                </div>
                <h4 className="w-1/3 text-[10px] ">QTY:1</h4>
                <h4 className="w-1/3 text-[10px] text-right">
                  <span>&#8377;</span> 60
                </h4>
              </div>
              <div className="flex flex-row justify-between mx-[18px]">
                <div className="w-1/3 flex flex row">
                  <Veg />
                  <h4 className=" text-[10px] text-left  ml-2 ">Chicken</h4>
                </div>
                <h4 className="w-1/3 text-[10px] ">QTY:1</h4>
                <h4 className="w-1/3 text-[10px] text-right">
                  <span>&#8377;</span> 240
                </h4>
              </div>
            </div>
            <div className="w-full">
            <hr className="bg-silver  mx-3 my-3" />
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <h4 className="text-[12px] ml-6 font-semibold text-blue-dark">
                Item Total :
              </h4>
              <h4 className="text-[14px] font-semibold mr-[18px] text-blue-dark">
                <span>&#8377;</span>150.00
              </h4>
            </div>
            <div className="w-full">
            <hr className="bg-silver  mx-3 my-3" />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex flex-row justify-between">
                <h5 className="ml-6 font-normal text-xs">Service Charge :</h5>
                <h5 className="mr-6 font-normal font-semibold text-grey text-xs">
                  <span>&#8377;</span>30.00
                </h5>
              </div>
              <div className="flex flex-row py-2.5 justify-between">
                <h5 className="ml-6 font-normal text-xs">CGST :</h5>
                <h5 className="mr-6 font-semibold text-grey text-xs">
                  <span>&#8377;</span>30.00
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h5 className="ml-6 font-normal text-xs">SGST :</h5>
                <h5 className="mr-6  font-semibold text-grey text-xs">
                  <span>&#8377;</span>30.00
                </h5>
              </div>
            </div>
            <hr className="bg-silver  mx-3 my-3" />
            <div className="w-full h-[42px] bg-green-finn px-5 font-bold text-blue-oxford flex flex-row items-center justify-between">
              <h4 className="text-[10px]">Total Price</h4>
              <h4 className="text-[15px] px-2">
                <span>&#8377;</span>360
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
                Make it spicy
              </h4>
            </div>
            </div>
  
            <div className="mb-7 w-full flex flex-row px-5 items-center justify-between">
             {Paid !== "Cash At Counter" ? (
      <h4 className="text-[10px] border border-solid rounded-md bg-grey-matterhorn text-white px-4 py-1 items-center">
          {RequestStatus}
      </h4>
  ) : <h4 className="text-[10px] border border-solid rounded-md bg-white border-white text-white px-4 py-1 items-center">
  {RequestStatus}
  </h4>}
              <h4 className="text-[10px] border border-solid rounded-md bg-greenCyan text-white px-4 py-1 items-center">
                Download Invoice
              </h4>
            </div>
          </div>
          }
        </div>
      </>
    );
  };
  
  