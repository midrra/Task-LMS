import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row align-items justify-center md:justify-between h-full space-x-3 mt-15">
      <span className="text-3xl mb-4 md:mb-0">Search</span>
      <input
        type="search"
        placeholder="Search here"
        className="w-50 md:w-full m-auto text-center max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 outline-none transition-colors duration-150"
      />
    </div>
  );
}

export default SearchBar;
