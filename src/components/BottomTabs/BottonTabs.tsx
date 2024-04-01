import React from "react";
import { Tab } from "./Tab";
import { Home } from "@assets/icons/Home";
import { Request } from "@assets/icons/Request";
import { Cart } from "@/assets/icons/Cart";
import './BottomTabs.css'
import { useNavigate } from "react-router-dom";

interface BottonTabsProps {
  clientId: any;
}

export const BottonTabs = ({clientId}:BottonTabsProps) => {
  const navigate=useNavigate()
  const handleNavigateCart = () => { 
    const id = {
      id: clientId!,
    };
    navigate('/cart',{state:{id}})
   }
   const handleNavigateRequest = () => { 
    navigate('/request')
   }
  return (
    <div className="fixed bottom-0 z-10 bg-white w-full border-t border-green p-2">
      <div className="flex justify-around gap-[50%]">
        <Tab Icon={Home} text="Home" selected={true} />
        <div onClick={handleNavigateCart} className="drop-shadow-lg cursor-pointer hover:drop-shadow-xl absolute z-20 bg-white aspect-square w-16 -top-1/2 rounded-full flex justify-center items-center flex-col gap-1 border border-green negative-shadow">
          <div className="h-5 w-5 ">
            <Cart className="stroke-green" />
          </div>
          <p className="text-[9px] font-medium text-green">Cart</p>
        </div>
        <Tab onClick={handleNavigateRequest} Icon={Request} text="Requests" selected={false} />
      </div>
    </div>
  );
};
