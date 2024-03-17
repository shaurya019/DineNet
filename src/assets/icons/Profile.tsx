import React from "react";
interface ProfileProps extends React.SVGAttributes<SVGSVGElement> {}

export const Profile = React.forwardRef<SVGSVGElement, ProfileProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 16 15"
      fill={props.fill}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.50863 9.55029C3.86139 8.44787 5.9261 7.76026 8.01676 7.70222C10.1083 7.64416 12.1325 8.21733 13.4549 9.5191C14.8283 10.8711 15.1189 11.9685 15.1191 12.6738C15.1192 13.0344 15.0436 13.3155 14.9717 13.5017C14.9662 13.516 14.9607 13.5297 14.9552 13.5428H1.07355C1.06306 13.515 1.05229 13.4851 1.04147 13.4532C0.962407 13.2202 0.882583 12.8867 0.881005 12.4903C0.877942 11.7206 1.16817 10.6427 2.50863 9.55029Z"
        stroke={props.stroke}
      />
      <circle cx="8.31239" cy="3.20179" r="2.55872" stroke={props.stroke} />
    </svg>
  );
});
