import React from "react";

export const Minus = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="2"
      viewBox="0 0 14 2"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H13"
        stroke={props.stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
