import React from "react";

export const FilledCircle = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill={props.fill} />
    </svg>
  );
};
