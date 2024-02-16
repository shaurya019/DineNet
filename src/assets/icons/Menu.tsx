import React from "react";

export const Menu = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1.25H3.33333V13.75H2V1.25ZM6.66667 3.75H11.3333V5H6.66667V3.75ZM6.66667 6.25H11.3333V7.5H6.66667V6.25Z"
        fill={props.fill}
      />
      <path
        d="M12.6667 1.25H4V13.75H12.6667C13.402 13.75 14 13.1894 14 12.5V2.5C14 1.81063 13.402 1.25 12.6667 1.25ZM12.6667 12.5H5.33333V2.5H12.6667V12.5Z"
        fill={props.fill}
      />
    </svg>
  );
};
