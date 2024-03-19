import React from "react";
interface ILoader {
  size?: string;
  color?: string;
}
export const Loader = ({ size = "32", color = "green" }: ILoader) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-${color}`}
      ></div>
    </div>
  );
};
