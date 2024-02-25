import React, { useEffect, useState } from "react";
import SearchField from "@components/SearchField";
import Filter from "@components/Filter";
import AccordionItem from "@components/Accordion";
import Fooditem from "@components/FoodItem";
import BottonTabs from "@components/BottomTabs";
import LandingHeader from "@/components/LandingHeader";
import FoodCategoryMenu from "@/components/FoodCategoryMenu";
import { useGetClientProducts } from "@/hooks/useGetClientProducts";
import { useLocation } from "react-router";
import { getQueryParam } from "@/utils/routerUtils";
import _ from "lodash";
enum FilterValue {
  none,
  veg,
  nonVeg,
}
export const RestaurantLandingPage = () => {
  const location = useLocation();
  const { data = [], isLoading } = useGetClientProducts(
    getQueryParam(location.search, "clientId")!
  );
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterValue | string>(FilterValue.none);
  useEffect(() => {
    const testFilter = (product: any) => {
      if (filter === FilterValue.veg) {
        return !product.non_veg;
      }
      if (filter === FilterValue.nonVeg) {
        return product.non_veg;
      }
      return true;
    };
    let filteredData =
      searchQuery || filter
        ? data.filter((category: any) => {
            return category?.products?.filter?.(
              (item: any) =>
                new RegExp(`${searchQuery}`).test(item["product_name"]) &&
                testFilter(item)
            )?.length;
          })
        : data;
    setFilteredData(filteredData);
  }, [searchQuery, data, filter]);
  const toggleFilter = (value: FilterValue) => {
    if (filter!==FilterValue.none) setFilter(FilterValue.none);
    else setFilter(value);
  };
  if (isLoading) return;
  return (
    <div className="flex flex-col max-h-screen">
      <FoodCategoryMenu data={data} />
      <div className="flex flex-col gap-3 p-2">
        <LandingHeader />
        <div>
          <SearchField
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>
        <div className="flex flex-row gap-2 justify-start">
          <Filter
            onSelect={() => toggleFilter(FilterValue.veg)}
            title="Veg"
            selected={filter === FilterValue.veg}
            selectedColor="bg-green-600"
          />
          <Filter
            onSelect={() => toggleFilter(FilterValue.nonVeg)}
            title="Non Veg"
            selected={filter === FilterValue.nonVeg}
            selectedColor="bg-orange-700"
          />
        </div>
      </div>
      <div className="flex flex-col overflow-auto max-h-full mb-12">
        {filteredData?.map?.((category: any) => (
          <AccordionItem
            defaultState={true}
            title={<CategoryTitle title={category.category_name} />}
            color="green"
          >
            {category.products.map((item: any) => (
              <Fooditem data={item} />
            ))}
          </AccordionItem>
        ))}
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
