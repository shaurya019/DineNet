import React from "react";

export const SearchField = () => {
  return (
    <div className="flex items-center px-2 border-2 border-grey-border rounded w-full">
      <input
        type="text"
        className="w-full p-2 text-grey"
        placeholder="Search Food"
      />
      <div className="ml-auto">
        <img src="@assets/logo.png" />
      </div>
    </div>
  );
};
