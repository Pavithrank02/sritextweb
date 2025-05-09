import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FloatingButton from "./FloatingButton";
import img from "../assets/images/sritex.jpg";
import {contactNow} from '../data.js'
const Header = () => {
  //sd
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/");
  };
  

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-customBgColor-bg shadow-md border-b-8 border-customBorderColor ">
      <div className="flex justify-between items-center h-20 px-4 md:px-10">
        {/* Logo Section */}
        <div
          className="cursor-pointer  text-green-700"
          onClick={handleClick}
        >
          <img src={img} 
          alt="logo" 
          className="h-16 w-36"/>

        </div>

        {/* Navigation Links */}
        <div className="flex flex-row md:flex justify-around font-bold text-sm sm:text-sm md:text-lg lg:text-lg w-full md:w-2/3">
          <div className="p-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-700"
                  : "hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              }
            >
              Home
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              }
            >
              About Us
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              }
            >
              Products
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              }
            >
              Gallery
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button (Visible only on small screens and fixed at the bottom-right) */}
        <div className="md:hidden fixed bottom-4 right-4 z-50">
          <FloatingButton />
        </div>

        {/* Contact Button */}
        <div>
          <NavLink to="/contact">
            <button className="w-40 h-10 rounded-xl bg-customBgColor border  border-transparent text-white text-lg font-medium transition duration-300 ease-in-out hover:bg-green-700 hover:scale-110 hidden md:block">
            {contactNow}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
