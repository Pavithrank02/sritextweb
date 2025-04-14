import React from "react";
import {infraDesc,clientDesc,whyDesc,infraDescTitle,clientDescTitle, whyDescTitle} from "../data.js"

const WorkingDesc = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-16 bg-customBgColor-bg ">
      {/* Our Infrastructure Section */}
      <div className="w-full sm:w-10/12 mb-16 px-4 sm:px-8">
        <p className="text-3xl sm:text-4xl font-extrabold text-customTextColor mb-8 text-center">
          {infraDescTitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-6">
          <div className="w-full sm:w-1/2 text-justify text-lg font-medium text-customTextColor-dark ">
            {infraDesc}
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/8/332893768/MV/XS/VA/2995798/img-1156-500x500.jpeg"
              alt="Infrastructure"
              className="h-72 w-full sm:w-[60%] object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="w-full sm:w-10/12 mb-16 px-4 sm:px-8">
        <p className="text-3xl sm:text-4xl font-extrabold text-customTextColor mb-8 text-center">
          {whyDescTitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-6">
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <img
              src="https://media.istockphoto.com/id/1639553609/photo/why-choose-us-symbol-concept-words-why-choose-us-on-wooden-blocks-business-and-why-choose-us.jpg?s=612x612&w=0&k=20&c=znNPjmDPfKyX24Belbpd_4aub3qvAr7kdJ5pSJI6Yq4="
              alt="Why Us"
              className="h-72 w-full sm:w-[60%] object-contain rounded-md shadow-lg"
            />
          </div>
         {whyDesc}
        </div>
      </div>

      {/* Client Satisfaction Section */}
      <div className="w-full sm:w-10/12 mb-16 px-4 sm:px-8">
        <p className="text-3xl sm:text-4xl font-extrabold text-customTextColor mb-8 text-center">
          {clientDescTitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0 sm:space-x-6">
          <div className="w-full sm:w-1/2 text-justify text-lg text-customTextColor-dark  font-medium">
            {clientDesc}
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <img
              src="https://st3.depositphotos.com/3732989/14379/i/450/depositphotos_143792125-stock-photo-customer-satisfaction-scale-with-colored.jpg"
              alt="Client Satisfaction"
              className="h-72 w-full sm:w-[60%] object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingDesc;
