import React from "react";

export const Home = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
        <path
          d="M16.8751 18.1248H3.12506V10.6248H2.02193C1.31068 10.6248 0.97881 9.73797 1.51443 9.26984L8.83193 2.34047C9.48693 1.71984 10.5126 1.71984 11.1676 2.34047L18.4844 9.26984C19.0207 9.73734 18.6888 10.6248 17.9769 10.6248H16.8751V18.1248Z"
          stroke={props.stroke}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 18.125H7.5V14.375C7.5 12.9944 8.61937 11.875 10 11.875C11.3806 11.875 12.5 12.9944 12.5 14.375V18.125Z"
          stroke={props.stroke}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      {/* <g clip-path="url(#clip0_1027_363)">
      </g> */}
      <defs>
        <clipPath id="clip0_1027_363">
          <rect width="20" height="20" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};
