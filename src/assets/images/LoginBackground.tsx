import React from "react";

export const LoginBackground = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="244"
      height="384"
      viewBox="0 0 244 384"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H234C239.523 0 244 4.47715 244 10V374C244 379.523 239.523 384 234 384H83.6715C278.07 342.439 138.784 91.3171 0 0Z"
        fill="url(#paint0_linear_1405_920)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1405_920"
          x1="122"
          y1="0"
          x2="-183.912"
          y2="717.314"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C3D5CF" />
          <stop offset="1" stop-color="#C3D5CF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
