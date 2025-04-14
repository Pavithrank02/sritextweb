import React from "react";
import { NavLink } from "react-router-dom";
import { FlipWords } from "../components/ui/flip-words.tsx";
import {contactNow} from '../data.js'

export function FlipWordsDemo() {
  const words = ["Better", "Smarter", "Harder", "Modern"];

  return (
    <div className="h-auto sm:h-[30rem] flex flex-col justify-center items-center sm:items-start mt-24 sm:mt-14 px-6 sm:px-8 lg:ml-40 space-y-8">
      {/* First Text Block */}
      <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-customTextColor-dark  text-center sm:text-left">
        Build
        <FlipWords className="text-customTextColor font-extrabold" words={words} /> <br />
        machineries with Sritex Hi-Tech Machines
      </div>

      {/* Second Text Block */}
      <div className="text-lg sm:text-xl md:text-2xl text-left font-bold ">
        We specialize in bending, welding, and finishing to meet your exact
        <br />
        specifications with durability and precision.
      </div>

      {/* Contact Button */}
      <div>
        <NavLink to="/contact">
          <button className="w-36 sm:w-40 h-12 sm:h-14 rounded-2xl bg-customBgColor border border-transparent text-white font-semibold text-base sm:text-lg">
            {contactNow}
          </button>
        </NavLink>
      </div>
    </div>
  );
}
