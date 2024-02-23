import { FilledCircle } from "@/assets/icons/FilledCircle";
import React, { MouseEventHandler } from "react";
interface IFilter {
  selected?: boolean;
  title: string;
  selectedColor: string;
  onSelect: MouseEventHandler
}
export const Filter = ({
  selected,
  title,
  selectedColor = "green-600",
  onSelect
}: IFilter) => {
  return (
    <div
      className={`rounded-3xl px-2 py-1 flex justify-between gap-2 items-center border border-grey-light ${
        selected && selectedColor
      }`}
      onClick={onSelect}
    >
      {selected ? (
        <>
          <p className="text-white text-sm">{title}</p>
          <FilledCircle className="fill-white" />
        </>
      ) : (
        <>
          <FilledCircle className="fill-grey-light" />
          <p className="text-grey-light text-sm">{title}</p>
        </>
      )}
    </div>
  );
};
