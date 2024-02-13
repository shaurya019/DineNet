import { FilledCircle } from "@/assets/icons/FilledCircle";
import React from "react";
interface IFilter {
  selected?: boolean;
}
export const Filter = ({ selected }: IFilter) => {
  return (
    <div
      className={`rounded-3xl px-2 py-1 flex justify-between gap-2 items-center border border-grey-light ${
        selected && "bg-green-600"
      }`}
    >
      {selected ? (
        <>
          <p className="text-white text-sm">Pure Veg</p>
          <FilledCircle className="fill-white" />
        </>
      ) : (
        <>
          <FilledCircle className="fill-grey-light" />
          <p className="text-grey-light text-sm">Pure Veg</p>
        </>
      )}
    </div>
  );
};
