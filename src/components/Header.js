import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navgate = useNavigate();
    const handleClick = () => {
      navgate('/')
    }
  return (
    <div className=" flex flex-row justify-evenly items-center h-20  bg-slate-300">
      <div className=" md:block cursor-pointer" onClick={handleClick}>
        {/* <img src={img} className="h-10 md:h-14" alt="Logo" /> */}
        Sritex
      </div>
      <div className="flex justify-around font-bold text-xs sm:text-sm md:text-lg lg:text-lg w-full md:w-2/3">
        <div className="p-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 border-b-2 border-green-500"
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
                ? "text-green-500 border-b-2 border-green-500"
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
                ? "text-green-500 border-b-2 border-green-500"
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
                ? "text-green-500 border-b-2 border-green-500"
                : "hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
            }
          >
            Gallery
          </NavLink>
        </div>
      </div>
      <div>
      <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Contact now
        </button>
      </div>
    </div>
  );
};

export default Header;
