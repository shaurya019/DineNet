import React from "react";
import TruncatedParagraph from "../TruncatedParagraph";

export const Fooditem = () => {
  return (
    <div className="flex flex-row gap-2 border-b p-2 mb-2">
      <div className="flex h-24 w-24">
        <img className="" src="/assets/food.png"/>
      </div>
      <div className="flex flex-1 flex-col gap-1 items-start justify-evenly">
        <div className="flex flex-row gap-1">
          <h4 className="text-grey text-xs font-semibold font-MontserratMedium">Paneer Pakoda</h4>
        </div>
        <TruncatedParagraph className="text-[8px] text-grey"/>
        <p className="text-grey text-xs">4 Pcs | Serves 2</p>
        <h4 className="text-sm text-grey"><span>&#8377;</span>120</h4>
      </div>
      <div className="ml-auto flex items-end">
        <button className="bg-white border-2 border-green text-green px-4 py-1 rounded">
            ADD
        </button>
      </div>
    </div>
  );
};
