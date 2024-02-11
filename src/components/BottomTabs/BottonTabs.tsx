import React from "react";
import { Tab } from "./Tab";

export const BottonTabs = () => {
  return (
    <div className="fixed bottom-0  z-10 bg-white w-full border-t border-green p-2">
      <div className="flex justify-around gap-[50%]">
        <Tab imgSrc="/assets/home.png" text="Home" selected={true} />
        <div className="absolute z-20 bg-white aspect-square w-16 -top-1/2 rounded-full flex justify-center items-center flex-col gap-1 border border-green">
          <div className="h-5 w-5 ">
            <img src="/assets/cart.png" />
          </div>
          <p className="text-[9px] font-medium text-green">Cart</p>
        </div>
        <Tab imgSrc="/assets/request.png" text="Requests" selected={false} />
      </div>
    </div>
  );
};
