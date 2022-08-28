import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchInput = ({ searchText, onSearchChange }) => {
  return (
    <div className="relative mb-12">
      <RiSearchLine
        className="fill-dark absolute top-1/2 left-12 transform -translate-y-1/2 pointer-events-none"
        size="16px"
      />
      <input
        value={searchText}
        onChange={onSearchChange}
        className="bg-gray-300 text-body font-semibold rounded-md transition w-full h-40 pl-40 pr-16 border border-transparent text-semibold placeholder:text-disabled focus:outline-none focus:bg-white focus:border-brand-300 focus:shadow-focus-primary"
        placeholder="Type to Search in results..."
      />
    </div>
  );
};

export default SearchInput;
