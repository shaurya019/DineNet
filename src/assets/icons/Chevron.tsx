import React from "react";
interface IChevron extends React.SVGAttributes<SVGSVGElement> {
  isOpen: Boolean;
}
export const Chevron = ({ isOpen }: IChevron) => {
  return (
    <svg
      className={`w-6 h-6 transition-transform ${
        isOpen ? "transform rotate-360" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
      />
    </svg>
  );
};
