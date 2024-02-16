import { Cross } from "@/assets/icons/Cross";
import React, { ReactNode } from "react";
interface ISideMenu {
  children: ReactNode;
  onClose: React.MouseEventHandler 
}
export const SideMenu = ({ children , onClose}: ISideMenu) => {
  return (
    <div className="fixed z-30 h-screen w-screen bg-grey bg-opacity-50 flex justify-end">
      <div className="w-3/4 bg-white flex flex-col z-40" >
        <div className="bg-green flex justify-between p-3">
          <h4 className="text-white text-sm font-bold">Menu</h4>
          <Cross className="fill-white" onClick={onClose}/>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};
