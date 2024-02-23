import { Search } from "@/assets/icons/Search";
import React from "react";

export const SearchField = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <div className="flex items-center px-2 border-2 border-grey-border rounded w-full">
      <input
        type="text"
        className="w-full p-2 text-grey outline-none"
        placeholder="Search Food"
        {...props}
      />
      <div className="ml-auto">
        <Search className="stroke-grey-border" />
      </div>
    </div>
  );
};
