import React, { useEffect, useState } from "react";
interface ILoader {
  size?: string;
  color?: string;
  Component?: any;
  time?: number;
}

export const Loader = ({ size = "32", color = "green", Component, time }: ILoader) => {
  const [timeoutEnd, setTimeoutEnd] = useState(false);

  useEffect(() => {
    time && setTimeout(() => setTimeoutEnd(true), time || 5000)
  }, []);

  return (
    timeoutEnd ?
      <>
      <Component />
      </>
      :
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="border-t-4 border-b-4 border-green rounded-full w-12 h-12 animate-spin"></div>
        </div>
      </>
  );
};
