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
  selectedColor,
  onSelect,
}: IFilter) => {
  const borderColor = selected && title === "Recommended" ? "border-green-600" : "border-grey-light";
  return (
    <div
    className={`rounded-3xl px-2 py-1 flex justify-between gap-2 items-center border ${borderColor} ${selected && selectedColor}`}
    onClick={onSelect}
  >
    {/* Conditional rendering based on selected and title */}
    {selected ? (
      title === "Recommended" ? (
        <>
          <p className="text-green-600 text-sm">{title}</p>
        </>
      ) : (
        <>
          <p className="text-white text-sm">{title}</p>
          <FilledCircle className="fill-white" />
        </>
      )) : (
        <>
          <FilledCircle className="fill-grey-light" />
          <p className="text-grey-light text-sm">{title}</p>
        </>
      )}
    </div>
  );
};
