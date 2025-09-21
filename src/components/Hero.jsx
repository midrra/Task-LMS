import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./Ui/MainButton";
import ArrowIcon from "../assets/arrow_icon.svg";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-7">
      <h1 className="text-2xl md:text-4xl font-bold">Welcome to Al-Awael</h1>
      <p className="text-lg">Your journey to knowledge begins here.</p>
      <div className="flex  w-100 items-center justify-center space-x-4">
        <Link to="/student/my-courses">
          <MainButton>Explore Courses</MainButton>
        </Link>
        <Link
          to="/student/my-courses"
          className="flex items-center px-6 py-2 font-bold hover:text-orange-400"
        >
          All Courses
          <img src={ArrowIcon} alt="ArrowIcon" className="px-2" />
        </Link>
      </div>
      <SearchBar />
    </main>
  );
}

export default Hero;
