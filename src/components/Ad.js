import React from "react";
import { NavLink } from "react-router-dom";
import {contactNow,adDesc} from '../data.js'
//dvsssd
const Ad = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center h-auto sm:h-28 px-4 sm:px-8 border-4 border-customBgColor bg-customBgColor-bg">
      <div className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-customTextColor text-center sm:text-left">
        {adDesc}
      </div>
      <div className="mt-4 sm:mt-0 w-full mb-5 sm:mb-0 sm:w-auto">
        <NavLink to="/contact">
          <button className="w-full sm:w-40 h-12 sm:h-14 rounded-xl bg-customBgColor border dark:border-white border-transparent text-white font-bold text-sm sm:text-base transition duration-300 ease-in-out hover:bg-green-500 hover:scale-110">
            {contactNow}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Ad;
