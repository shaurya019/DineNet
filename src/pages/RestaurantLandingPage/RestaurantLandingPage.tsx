import React, { useEffect, useRef, useState } from "react";
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
import Loader from "@/atomicComponents/Loader";
import useGetKitchenTiming from "@/hooks/useGetKitchenTiming";
import { defaultClientId, defaultSource, defaultCloseTime, defaultOpenTime } from "@/utils/constants";

enum FilterValue {
  none,
  veg,
  nonVeg,
  recommended
}

export const RestaurantLandingPage = () => {
  const location = useLocation();
  const localClientId = window.localStorage.getItem("clientId") || defaultClientId;
  const localSource = window.localStorage.getItem("source") || defaultSource;
  const clientId = getQueryParam(location.search, "clientid") || getQueryParam(location.search, "clientId") || localClientId;
  const source = getQueryParam(location.search, "source") || localSource;
  const { data = { category_map: [] }, isLoading } = useGetClientProducts(clientId);

  const { kitchenSetup, openTime } = useGetKitchenTiming({
    open_Time: data.client?.open_time || defaultOpenTime,
    close_Time: data.client?.close_time || defaultCloseTime,
  });

  const [filteredData, setFilteredData] = useState(data.category_map);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterValue | string>(FilterValue.none);
  const [hasNonVegProducts, setHasNonVegProducts] = useState(true);
  const [hasRecommendedProducts, setHasRecommendedProducts] = useState(false);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    window.localStorage.setItem("clientId", clientId);
    window.localStorage.setItem("source", source);
  }, [clientId, source]);

  useEffect(() => {
    const nonVegCheck = data.category_map?.some((category: any) =>
      category.products.some((product: any) => product.non_veg)
    );
    setHasNonVegProducts(nonVegCheck);
    if (filter === FilterValue.veg && nonVegCheck) {
      setFilter(FilterValue.none);
    }
    if (!nonVegCheck) {
      setFilter(FilterValue.veg);
    }

    const recommendedCheck = data.category_map?.some((category: any) =>
      category.products.some((product: any) => product.recommended)
    );
    setHasRecommendedProducts(recommendedCheck);
  }, [data, hasNonVegProducts]);

  useEffect(() => {
    const testFilter = (product: any): boolean => {
      if (filter === FilterValue.veg) {
        return !product.non_veg;
      }
      if (filter === FilterValue.nonVeg) {
        return product.non_veg;
      }
      if (filter === FilterValue.recommended) {
        return product.recommended;
      }
      return true;
    };

    let updatedFilteredData: any[] = [];
    if (searchQuery || filter !== FilterValue.none) {
      updatedFilteredData = data?.category_map?.map((category: any) => ({
        ...category,
        products: category.products.filter((item: any) =>
          new RegExp(`${searchQuery}`, 'i').test(item.product_name) && testFilter(item)
        ),
      })).filter((category: any) => category.products.length > 0);
    } else {
      updatedFilteredData = data.category_map;
    }
    setFilteredData(updatedFilteredData);
  }, [searchQuery, data.category_map, filter]);

  const toggleFilter = (value: FilterValue) => {
    if (filter === value) {
      setFilter(FilterValue.none);
    } else {
      setFilter(value);
    }
  };

  const handleCategoryClick = (index: number) => {
    const element = itemsRef.current[index];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-1 items-center justify-center h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-col max-h-screen">
      <FoodCategoryMenu data={data.category_map} onClick={handleCategoryClick} />
      <div className="flex flex-col gap-3 p-2">
        <LandingHeader clientName={data.client?.client_title ?? data.client?.client_name} />
        <div>
          <SearchField onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
        </div>
        <div className="flex flex-row gap-2 justify-start">
          <Filter
            onSelect={() => toggleFilter(FilterValue.veg)}
            title="Veg"
            selected={filter === FilterValue.veg}
            selectedColor="bg-green-600"
          />
          {hasNonVegProducts && <Filter
            onSelect={() => toggleFilter(FilterValue.nonVeg)}
            title="Non Veg"
            selected={filter === FilterValue.nonVeg}
            selectedColor="bg-red-500"
          />}
          {hasRecommendedProducts && <Filter
            onSelect={() => toggleFilter(FilterValue.recommended)}
            title="Recommended"
            selected={filter === FilterValue.recommended}
            selectedColor="bg-blue-600"
          />}
        </div>
        {kitchenSetup && <p className="text-[11px] font-medium text-red-dark">Kitchen Closed : Our kitchen opens at {openTime} everyday</p>}
      </div>
      <div className="flex flex-col overflow-auto max-h-full mb-12 ">
        {(filteredData && filteredData.length > 0) ? filteredData?.map((category: any, index: number) => (
          <AccordionItem
            key={category.id}
            defaultState={true}
            title={<h2 ref={(elem) => (itemsRef.current[index] = elem)} className="text-sm text-green font-semibold">{category.category_name}</h2>}
            color="green"
            isLast={index === filteredData.length - 1}
          >
            {category.products?.map((item: any) => (
              <Fooditem key={item.id} data={item} kitchenSetup={kitchenSetup} />
            ))}
          </AccordionItem>
        )) : <h1>No Such Item</h1>}
      </div>
      <BottonTabs kitchenSetup={kitchenSetup} />
    </div>
  );
};
