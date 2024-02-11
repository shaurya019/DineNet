import React from 'react'
import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";
import AccordionItem from "../../components/Accordion";
import Fooditem from "../../components/FoodItem";
import BottonTabs from '../../components/BottomTabs';

export const RestaurantLandingPage = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <div className="flex flex-col gap-3 p-2">
        <div className="flex flex-row flex-nowrap gap-2 items-center ">
          <div>
            <img src="/assets/logo.png" />
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="text-grey-dark font-bold">Welcome to Hotel!</h3>
            <p className="text-grey-dark text-xs">
              You have checked in into room no. 06
            </p>
          </div>
          <div className="ml-auto">
            <button className="bg-green px-2 py-1 rounded border-2 border-grey text-white ">
              Log-in
            </button>
          </div>
        </div>
        <div>
          <SearchField />
        </div>
        <div className="flex flex-row gap-2 justify-start">
          <Filter />
          <Filter />
        </div>
      </div>
      <div className="flex flex-col overflow-auto max-h-full gap-2">
        <AccordionItem title="Recommended (12)">
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
        <AccordionItem title="Recommended (12)">
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
        <AccordionItem title="Recommended (12)">
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
