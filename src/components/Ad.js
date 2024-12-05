import React from "react";
import { NavLink } from "react-router-dom";

const Ad = () => {
  return (
    <div className="flex flex-row justify-evenly h-28 items-center">
      <div className="font-extrabold text-4xl text-green-500">
        Learn More About Product
      </div>
      <div>
        <NavLink to="/contact">
          <button className="w-40 h-14 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm transition duration-300 ease-in-out hover:bg-green-500 hover:scale-110">
            Contact now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Ad;
