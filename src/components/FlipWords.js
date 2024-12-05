import React from "react";
import { FlipWords } from "../components/ui/flip-words.tsx";

export function FlipWordsDemo() {
  const words = ["Better", "Smarter", "Harder", "Modern"];

  return (
    <div className="h-[30rem] flex flex-col justify-center items-start mt-6 px-6 ml-40 space-y-8">
      {/* First Text Block */}
      <div className="text-5xl font-semibold text-neutral-600 dark:text-neutral-400 text-left">
        Build
        <FlipWords className="text-lime-600" words={words} /> <br />
        machinaries with Sritex Hi-Tech Machines
      </div>

      {/* Second Text Block */}
      <div className="text-xl text-left text-neutral-600 font-bold dark:text-neutral-400">
        We specialize in bending, welding, and finishing to meet your exact
        <br />
        specifications with durability and precision.
      </div>
      <div>
        <button className="w-40 h-14 rounded-2xl bg-black border dark:border-white border-transparent text-white font-semibold text-lg">
          Contact now
        </button>
      </div>
    </div>
  );
}
