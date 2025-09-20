import React from "react";

function SearchBar() {
  return (
    <div className="flex align-items justify-between h-full space-x-3 mt-15">
      <span className="text-3xl">Search</span>
      <input
        type="search"
        placeholder="Search here"
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 outline-none transition-colors duration-150"
      />
    </div>
  );
}

export default SearchBar;
