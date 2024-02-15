import { Minus } from "@/assets/icons/Minus";
import { Plus } from "@/assets/icons/Plus";
import React from "react";
interface IAddToCartButton {
  count?: number;
}
export const AddToCartButton = ({ count = 1 }: IAddToCartButton) => {
  return count ? (
    <div className="bg-white border-2 border-green text-green px-2 py-1 rounded flex justify-between gap-5">
      <button>
        <Minus className="stroke-green" />
      </button>
      <h4>1</h4>
      <button>
        <Plus className="stroke-green" />
      </button>
    </div>
  ) : (
    <button className="bg-white border-2 border-green text-green px-6 py-1 rounded">
      ADD
    </button>
  );
};
