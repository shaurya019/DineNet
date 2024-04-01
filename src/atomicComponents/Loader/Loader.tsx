import React from "react";
interface ILoader {
  size?: string;
  color?: string;
}
export const Loader = ({ size = "32", color = "green" }: ILoader) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-b-4 border-green rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};
