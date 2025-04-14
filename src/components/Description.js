import React from "react";
import {AboutDesc} from '../data.js'

const Description = () => {
  return (
    <div className="flex flex-col items-center mt-28 w-full mb-5 px-4 sm:px-8">
      <div className="flex flex-col md:flex-col sm:flex-row justify-between items-center w-full sm:w-10/12 ">
        {/* Image Section */}
        <div className=" mb-4 sm:mb-0 sm:w-6/12">
          <img
            src="https://ik.imagekit.io/wratuu6c1/IMG_1089.JPEG?updatedAt=1735271418463"
            alt="aboutimg"
            className="  object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className=" md:w-10/12  flex flex-col justify-start items-center sm:items-center">
          <div className="font-bold text-4xl sm:text-5xl text-customTextColor mb-4">
            <h1 className="font-extrabold text-center sm:text-left">
              About Sritex
            </h1>
          </div>
         {AboutDesc}
        </div>
      </div>
    </div>
  );
};

export default Description;
