import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-300 dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex justify-between items-center h-20 px-4 md:px-10">
        <div className="cursor-pointer text-2xl font-bold text-green-500" onClick={handleClick}>
          Sritex
        </div>
        <div className="flex justify-around font-bold text-xs sm:text-sm md:text-lg lg:text-lg w-full md:w-2/3">
          <div className="p-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border-b-2 border-green-700"
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
                  ? "text-green-500 border-b-2 border-green-700"
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
                  ? "text-green-500 border-b-2 border-green-700"
                  : "hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              }
            >
              Products
            </NavLink>
          </div>
          <div className="p-2">
            <NavLink
              to="/capability"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border-b-2 border-green-700"
                  : "hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              }
            >
              Gallery
            </NavLink>
          </div>
        </div>
        <div>
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm transition duration-300 ease-in-out hover:bg-green-500 hover:scale-110">
            Contact now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
