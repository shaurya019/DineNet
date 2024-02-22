import React from "react";
import TruncatedParagraph from "../TruncatedParagraph";
import AddToCartButton from "../AddToCartButton";
interface IFooditem {
  data: any;
}
export const Fooditem = ({ data }: IFooditem) => {
  return (
    <div className="flex flex-row gap-2 border-b p-1 py-2 mb-2">
      <div className="flex h-24 w-24">
        <img className="" src={data.thumbnail_url} />
      </div>
      <div className="flex flex-1 flex-col gap-1 items-start justify-evenly">
        <div className="flex flex-row gap-1">
          <h4 className="text-grey text-xs font-semibold font-MontserratMedium">
            {data.product_name}
          </h4>
        </div>
        <TruncatedParagraph className="text-[8px] text-grey">{data.description}</TruncatedParagraph>
        <p className="text-grey text-xs">{data.pieces} Pcs | Serves {data.serving}</p>
        <h4 className="text-sm text-grey">
          <span>&#8377;</span>{data.price}
        </h4>
      </div>
      <div className="ml-auto flex items-end">
        <AddToCartButton />
      </div>
    </div>
  );
};
