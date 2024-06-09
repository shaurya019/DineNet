import FloatingButton from "@/atomicComponents/FloatingButton";
import SideMenu from "@/atomicComponents/SideMenu";
import React, { useState } from "react";
interface IFoodCategoryMenu {
  data: any;
  onClick: (index: number) => void;
}
export const FoodCategoryMenu = ({ data, onClick }: IFoodCategoryMenu) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const handleClick = (index: number) => {
    onClick(index);
    toggleOpen();
  };
  return (
    <>
      <FloatingButton onClick={toggleOpen} />
      {isOpen && (
       <SideMenu onClose={toggleOpen}>
       <div className="flex flex-col gap-1 h-full">
         {data.map((category: any, index: number) => (
           <div
             key={index}
             className="px-3 py-4 border cursor-pointer"
             onClick={() => handleClick(index)}
           >
             <h4 className="text-xs text-grey capitalize">
               {category.category_name}
             </h4>
           </div>
         ))}
       </div>
     </SideMenu>
     
      )}
    </>
  );
};
