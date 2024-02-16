import FloatingButton from "@/atomicComponents/FloatingButton";
import SideMenu from "@/atomicComponents/SideMenu";
import React, { useState } from "react";
import AccordionItem from "../Accordion";

export const FoodCategoryMenu = () => {
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
            <AccordionItem
              title={<h6 className="text-sm font-medium">Recommended</h6>}
              color="black"
            >
              <div className="flex flex-col">
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              title={<h6 className="text-sm font-medium">Recommended</h6>}
              color="black"
            >
              <div className="flex flex-col">
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              title={<h6 className="text-sm font-medium">Recommended</h6>}
              color="black"
            >
              <div className="flex flex-col">
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
                <div className="py-2 px-4 text-sm font-medium border-b">
                  Starter
                </div>
              </div>
            </AccordionItem>
          </div>
        </SideMenu>
      )}
    </>
  );
};
