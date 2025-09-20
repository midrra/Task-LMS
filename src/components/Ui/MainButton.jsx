import React from "react";

function MainButton({ children }) {
  return (
    <button className="px-4 py-2 rounded-full bg-orange-400 cursor-pointer hover:text-white hover:scale-105 transition duration-300 ease-in-out">
      {children}
    </button>
  );
}

export default MainButton;
