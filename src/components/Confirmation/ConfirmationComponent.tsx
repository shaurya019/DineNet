import React from 'react'
import Nav from '../Navbar';
import { useNavigate } from "react-router-dom";
import Bottom from '../../atomicComponents/BottomSubmit';

interface ConfirmationComponentProps {
  title: string;
  message1: string;
  message2: string;
  message3: string;
  message4: string;
  message5?: string;
  buttonName: string;
  Order?: string;
  svg: React.ReactNode;
  showBillDetails?:boolean
}


export const ConfirmationComponent: React.FC<ConfirmationComponentProps> = ({ title, message1, message2, message3, message4, message5, buttonName, Order, svg,showBillDetails }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (buttonName === "Track Request") {
      navigate('/trackRequest', { replace: true, state: { Order } });
    } else {
      let id = Order;
      navigate('/trackOrder', { replace: true, state: { id } });
    }
  };

  const handleBillButtonClick = () => {
    let id = Order;
    navigate('/billDetails', { replace: true, state: { id } });
  };

  return (
    <div>
      <Nav title="Home" show="False" showEmpty="False" />
      <div className='flex flex-col mb-20 mx-10 justify-center items-center'>
        <h3 className="font-semibold text-green-willam text-center text-2xl mb-2">{title}</h3>
        <h4 className="font-normal text-center text-green-willam text-sm mb-1">{message1}</h4>
        {svg}
        <h4 className="font-normal text-center text-green-willam text-sm mt-1 mb-4">{message2}<span className="font-semibold"> {message3}</span></h4>
        <h4 className="font-normal text-center text-center text-green-willam text-xs  mb-4">{message4}</h4>
        {message5 && <div className='flex flex-row mb-7'>
          <h4 className=" text-center text-center text-green-willam text-xs font-bold pr-1">Note: </h4>
          <h4 className="font-normal text-center text-center text-green-willam text-xs">{message5}</h4>
        </div>}
        <button onClick={handleButtonClick} className='mb-4 h-7 w-56 border border-green-willam rounded rounded-md border-2'>
          <h5 className=' text-green-willam text-center font-medium'>{buttonName}</h5>
        </button>
        {showBillDetails === false && <button onClick={handleBillButtonClick} className='mb-4 h-7 w-56'>
          <h5 className=' text-blue text-center font-medium'>Check Bill Details</h5>
        </button>
        }
      </div>
      <Bottom Heading="Home" path="RestaurantLandingPage" />
    </div>
  )
}

