import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainButton from "./Ui/MainButton";
import { useAuth } from "../components/hook/useAuth";
import ProfileIcon from "../assets/user_icon.svg";

function NavBar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="shadow-md px-4 py-3 flex items-center justify-between relative">
      <h1 className="font-bold text-xl">Al-Awael</h1>

      <div className="hidden md:flex space-x-2 items-center md:text-sm lg:text-base">
        <Link
          to="/"
          className="px-2 py-1 rounded hover:bg-orange-400 transition"
        >
          Home
        </Link>
        <Link
          to="/pricing"
          className="px-2 py-1 rounded hover:bg-orange-400 transition"
        >
          Pricing & FAQ
        </Link>
        <Link
          to="/contact"
          className="px-2 py-1 rounded hover:bg-orange-400 transition"
        >
          Contact
        </Link>
        <Link
          to="about-us"
          className="px-2 py-1 rounded hover:bg-orange-400 transition"
        >
          About Us
        </Link>
        {user?.role === "student" && (
          <Link
            to="/student/my-courses"
            className="px-2 py-1 rounded hover:bg-orange-400 transition"
          >
            My Courses
          </Link>
        )}
        {user?.role === "instructor" && (
          <Link
            to="/instructor/dashboard "
            className="px-2 py-1 rounded hover:bg-orange-400 transition"
          >
            Instructor
          </Link>
        )}
        {user?.role === "admin" && (
          <Link
            to="/admin/dashboard "
            className="px-2 py-1 rounded hover:bg-orange-400 transition"
          >
            Admin Dashboard
          </Link>
        )}

        {/* if we build ower authentication system */}
        {user && <Link to="/profile">Profile</Link>}
        <MainButton>
          {user ? (
            <img src={ProfileIcon} alt="ProfileIcon" />
          ) : (
            <Link to="/login">Create Account</Link>
          )}
        </MainButton>
      </div>

      {/* Hamburger */}
      <div className="md:hidden relative z-20">
        <button
          className="relative w-10 h-10 flex items-center justify-center focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          {/* Hamburger bars */}
          <span
            className={`
              absolute block w-9 h-1 bg-white transform transition duration-500 ease-in-out
              ${isOpen ? "rotate-45" : "-translate-y-2"}
            `}
          ></span>
          <span
            className={`
              absolute block w-9 h-1 bg-white transition duration-500 ease-in-out c
              ${isOpen ? "opacity-0" : "opacity-100"}
            `}
          ></span>
          <span
            className={`
              absolute block w-9 h-1 bg-white transform transition duration-500 ease-in-out
              ${isOpen ? "-rotate-45" : "translate-y-2"}
            `}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          absolute z-10 top-16 left-0 w-full bg-white text-black shadow-md flex flex-col items-center md:hidden
          transform origin-top transition-all duration-500 ease-in-out p-5
          ${
            isOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }
        `}
      >
        <Link
          className="px-4 py-2 rounded hover:bg-orange-400 transition"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          className="px-4 py-2 rounded hover:bg-orange-400 transition"
          onClick={toggleMenu}
        >
          All Courses
        </Link>
        <Link
          className="px-4 py-2 rounded hover:bg-orange-400 transition"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          className="px-4 py-2 rounded hover:bg-orange-400 transition"
          onClick={toggleMenu}
        >
          Instructors
        </Link>
        <Link
          className="px-4 py-2 rounded hover:bg-orange-400 transition"
          onClick={toggleMenu}
        >
          Pricing & FAQ
        </Link>
        <Link
          className="px-4 py-2 rounded hover:bg-orange-400 transition"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <button
          className="px-6 py-2 rounded-full bg-orange-400 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          onClick={toggleMenu}
        >
          Create Account
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
