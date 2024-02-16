import React from 'react'
import SearchField from "@components/SearchField";
import Filter from "@components/Filter";
import AccordionItem from "@components/Accordion";
import Fooditem from "@components/FoodItem";
import BottonTabs from '@components/BottomTabs';
import LandingHeader from '@/components/LandingHeader';
import FoodCategoryMenu from "@/components/FoodCategoryMenu";

export const RestaurantLandingPage = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <FoodCategoryMenu />
      <div className="flex flex-col gap-3 p-2">
        <LandingHeader />
        <div>
          <SearchField />
        </div>
        <div className="flex flex-row gap-2 justify-start">
          <Filter selected />
          <Filter />
        </div>
      </div>
      <div className="flex flex-col overflow-auto max-h-full mb-12">
        <AccordionItem
          defaultState={true}
          title={<CategoryTitle title="Recommended ( 12 )" />}
          color="green"
        >
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
        <AccordionItem
          defaultState={true}
          title={<CategoryTitle title="Recommended ( 12 )"/>}
          color="green"
        >
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
        <AccordionItem
          defaultState={true}
          title={<CategoryTitle title="Recommended ( 12 )" />}
          color="green"
        >
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

const CategoryTitle = ({ title }: { title: String }) => (
  <h2 className="text-sm text-green font-semibold">{title}</h2>
);