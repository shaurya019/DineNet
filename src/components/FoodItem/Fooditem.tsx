/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import TruncatedParagraph from "../TruncatedParagraph";
import AddToCartButton from "../AddToCartButton";
import Veg from '../../assets/icons/Veg';

interface IFooditem {
  data: any;
  kitchenSetup:any;
}
export const Fooditem = ({ data,kitchenSetup }: IFooditem) => {
  const ref = useRef<HTMLImageElement>(null);
  return (
    <div className="flex flex-row gap-2 border-b p-1 py-2 mb-2">
      <div className="flex h-24 w-24">
        <img
          ref={ref}
          className=""
          src={data.thumbnail_url}
          onError={() => {
            if (ref.current) ref.current.src = "/assets/default_food.png";
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 items-start justify-evenly">
        <div className="flex flex-row gap-1">
          <h4 className="text-grey text-xs font-semibold font-MontserratMedium">
            {data.product_name}
          </h4>
          {data.non_veg === true ? <Veg color="#E8505B"/>  : <Veg color="#4CAF50"/> }
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
      <div className="ml-auto flex items-end">
        {
          // <AddToCartButton item={data} kitchenSetup={kitchenSetup}/>
          data?.availability ? <AddToCartButton item={data} kitchenSetup={kitchenSetup}/> : <h5 className="text-red-dark font-medium text-xs">Out of Stock</h5>
        }
       </div>
    </div>
  );
};
