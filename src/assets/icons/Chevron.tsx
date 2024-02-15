import React from "react";
interface IChevron {
  isOpen: Boolean;
}
export const Chevron = ({ isOpen }: IChevron) => {
  return (
    <svg
      className={`w-6 h-6 transition-transform ${
        isOpen ? "transform rotate-360" : ""
      } stroke-green`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
      />
    </svg>
  );
};
