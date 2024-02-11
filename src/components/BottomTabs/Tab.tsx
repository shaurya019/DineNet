import React from "react";
interface ITab {
  imgSrc: string;
  text: string;
  selected: boolean;
}
export const Tab = ({ imgSrc, text, selected }: ITab) => {
  return (
    <div
      className={`flex flex-col gap-1  ${
        selected && "border-b-2 border-green"
      } items-center p-1`}
    >
      <div className="h-5 w-5 ">
        <img src={imgSrc} />
      </div>
      <p
        className={`text-[9px] font-medium ${
          selected ? "text-green" : "text-grey"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
