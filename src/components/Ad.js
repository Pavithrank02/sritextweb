import React from "react";

const Ad = () => {
  return (
    <div className="flex flex-row justify-evenly h-28 items-center">
      <div className="font-bold text-4xl">Learn More About Product</div>
      <div>
        <button className="w-40 h-14 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm transition duration-300 ease-in-out hover:bg-green-500 hover:scale-110">
          Contact now
        </button>
      </div>
    </div>
  );
};

export default Ad;
