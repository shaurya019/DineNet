import React from "react";
interface ITab {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  selected: boolean;
}
export const Tab = ({ Icon, text, selected }: ITab) => {
  return (
    <div
      className={`flex flex-col gap-1  ${
        selected && "border-b-2 border-green"
      } items-center p-1 cursor-pointer`}
    >
      <div className="h-5 w-5 ">
        <Icon className={`${selected ? "stroke-green" : "stroke-grey"}`} />
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
