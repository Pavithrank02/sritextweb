import React from "react";
import { FlipWords } from "../components/ui/flip-words.tsx";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[30rem] flex flex-col justify-center items-start px-4 ml-40 space-y-10">
      {/* First Text Block */}
      <div className="text-6xl font-semibold text-neutral-600 dark:text-neutral-400 text-left">
        Build
        <FlipWords className="text-lime-600" words={words} /> <br />
        websites with Aceternity UI
      </div>

      {/* Second Text Block */}
      <div className="text-2xl text-left text-neutral-600 font-bold dark:text-neutral-400">
        We specialize in bending, welding, and finishing to meet your exact
        <br />
        specifications with durability and precision.
      </div>
      <div>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Contact now
        </button>
      </div>
    </div>
  );
}
