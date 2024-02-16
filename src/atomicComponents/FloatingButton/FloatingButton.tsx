import { Menu } from "@/assets/icons/Menu";
import React, { MouseEventHandler } from "react";
interface IFloatingButton {
  onClick: MouseEventHandler;
}
export const FloatingButton = ({ onClick }: IFloatingButton) => {
  return (
    <div
      className="fixed right-2 bottom-[5rem] z-20 bg-green border rounded-full h-12 w-12 p-2 flex flex-col gap place-items-center shadow-2xl"
      onClick={onClick}
    >
      <Menu className="fill-white" />
      <p className="text-white text-[8px] font-medium">Menu</p>
    </div>
  );
};
