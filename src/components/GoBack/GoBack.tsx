import React from "react";
import { useNavigate } from "react-router-dom";

export interface GoBackProps extends React.SVGAttributes<SVGSVGElement> {
  fillColor?: string;
}

export const GoBack: React.FC<GoBackProps> = ({ fillColor = "white", ...props }) => {

  return (
    <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
       <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.34716 0.376437L0.357955 4.59253C0.119318 4.82542 2.38419e-07 5.14264 2.38419e-07 5.49197C2.38419e-07 5.8413 0.119318 6.1545 0.357955 6.3914L4.34716 10.6236C4.82045 11.1255 5.59205 11.1255 6.06534 10.6236C6.53864 10.1216 6.53864 9.31055 6.06534 8.80863L4.1483 6.78491H12.779C13.4551 6.78491 14 6.21071 14 5.5C14 4.78929 13.4551 4.21509 12.783 4.21509H4.15227L6.06932 2.19137C6.54261 1.68945 6.54261 0.878354 6.06932 0.376437C5.59205 -0.125479 4.82443 -0.125479 4.34716 0.376437Z" fill={fillColor}/>
    </svg>     
    </button>   
  );
};
