/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import TruncatedParagraph from "../TruncatedParagraph";
import AddToCartButton from "../AddToCartButton";
import Veg from '../../assets/icons/Veg';
import defaultImage from '../../logo.svg';

interface IFooditem {
  data: any;
  kitchenSetup: any;
}
export const Fooditem = ({ data, kitchenSetup }: IFooditem) => {
  const ref = useRef<HTMLImageElement>(null);

  return (
    <div className="flex flex-row gap-2 border-b p-1 py-2 mb-2">
      <div className="flex h-24 w-24 relative">
        <img
          ref={ref}
          className=""
          src={data.thumbnail_url}
          alt={data.product_name}
          onError={() => {
            if (ref.current) ref.current.src = "/assets/default_food.png";
          }}
        />
        {data.non_veg === true ? (
          <div className="absolute top-0 left-0 rounded-full">
            <Veg height={20} width={20} color="#E8505B" />
          </div>
        ) : (
          <div className="absolute top-0 left-0 rounded-full">
            <Veg height={20} width={20} color="#4CAF50" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 items-start justify-evenly">
        <div className="flex flex-row gap-1">
          <h4 className="text-grey text-xs font-semibold font-MontserratMedium">
            {data.product_name}
          </h4>
        </div>
        <TruncatedParagraph className="text-[8px] text-grey">
          {data.description}
        </TruncatedParagraph>
        <p className="text-grey text-xs">
          {data.pieces} Pcs | Serves {data.serving}
        </p>
        <h4 className="text-sm text-grey">
          <span>&#8377;</span>
          {data.price}
        </h4>
      </div>
      <div className="ml-auto flex items-start">
        {
          // <AddToCartButton item={data} kitchenSetup={kitchenSetup}/>
          data?.availability ? <AddToCartButton item={data} kitchenSetup={kitchenSetup} /> : <h5 className="text-red-dark font-medium text-xs">Out of Stock</h5>
        }
      </div>
    </div>
  );
};