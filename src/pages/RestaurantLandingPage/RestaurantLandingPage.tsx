import React from 'react'
import SearchField from "@components/SearchField";
import Filter from "@components/Filter";
import AccordionItem from "@components/Accordion";
import Fooditem from "@components/FoodItem";
import BottonTabs from '@components/BottomTabs';
import LandingHeader from '@/components/LandingHeader';

export const RestaurantLandingPage = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <div className="flex flex-col gap-3 p-2">
        <LandingHeader />
        <div>
          <SearchField />
        </div>
        <div className="flex flex-row gap-2 justify-start">
          <Filter selected/>
          <Filter />
        </div>
      </div>
      <div className="flex flex-col overflow-auto max-h-full gap-2">
        <AccordionItem title="Recommended ( 12 )">
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
        </AccordionItem>
        <AccordionItem title="Main Course ( 08 )">
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
        </AccordionItem>
        <AccordionItem title="Starters ( 04 )">
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
          <Fooditem />
        </AccordionItem>
      </div>
      <div>
        <BottonTabs />
      </div>
    </div>
  );
};
