import React from 'react'

interface VegProps {
  color: string;
  height?: number; // Optional height prop
  width?: number; // Optional width prop
}

const Veg: React.FC<VegProps> = ({ height = 14, width = 14, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="13" height="13" rx="3.5" stroke={color}/>
      <circle cx="7" cy="7" r="3" fill={color}/>
    </svg>
  );
};

export default Veg;
