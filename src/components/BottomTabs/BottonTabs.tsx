import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store/cartStore";
import { Tab } from "./Tab";
import { Home } from "@assets/icons/Home";
import { Request } from "@assets/icons/Request";
import { Cart } from "@/assets/icons/Cart";
import './BottomTabs.css'
import { useNavigate } from "react-router-dom";

export const BottonTabs = () => {
  const clientId = window.localStorage.getItem("clientId") || "1";
  const source = window.localStorage.getItem("source") || "1";
  const totalCartItems = useSelector((state: RootState) => state.cart.carts[clientId]?.[source]?.totalCartItems);
  const navigate = useNavigate()
  const handleNavigateCart = () => {
    navigate('/cart')
  }
  const handleNavigateRequest = () => {
    navigate('/request')
  }
  return (
    <div className="fixed bottom-0 z-10 bg-white w-full border-t border-green p-2">
      <div className="flex justify-around gap-[50%]">
        <Tab Icon={Home} text="Home" selected={true} />
        <div onClick={handleNavigateCart} className="drop-shadow-lg cursor-pointer hover:drop-shadow-xl absolute z-20 bg-white aspect-square w-16 -top-1/2 rounded-full flex justify-center items-center flex-col gap-1 border border-green negative-shadow">
          <div className="relative">
           {
            totalCartItems > 0 ?  <div className="absolute bottom-3 left-3 h-4 w-4 text-xs text-center text-white bg-red-500 rounded-full">{totalCartItems}</div> : ''
           }
            <svg className="h-5 w-5">
              <Cart className="stroke-green" />
            </svg>
          </div>
          <p className="text-[9px] font-medium text-green">Cart</p>
        </div>
        <Tab onClick={handleNavigateRequest} Icon={Request} text="Requests" selected={false} />
      </div>
    </div>
  );
};
