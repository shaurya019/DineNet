import FloatingButton from "@/atomicComponents/FloatingButton";
import SideMenu from "@/atomicComponents/SideMenu";
import React, { useState } from "react";
import AccordionItem from "../Accordion";
interface IFoodCategoryMenu {
  data: any;
}
export const FoodCategoryMenu = ({ data }: IFoodCategoryMenu) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <FloatingButton onClick={toggleOpen} />
      {isOpen && (
        <SideMenu onClose={toggleOpen}>
          <div className="flex flex-col">
            {data.map((category: any) => (
              <AccordionItem
                title={
                  <h6 className="text-sm font-medium">
                    {category.category_name}
                  </h6>
                }
                color="black"
              >
                <div className="flex flex-col">
                  {category.products.map((item: any) => (
                    <div className="py-2 px-4 text-sm font-medium border-b">
                      {item.product_name}
                    </div>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </div>
        </SideMenu>
      )}
    </>
  );
};
