import React from "react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import { TextGenerate } from "./TextGenerate";

const Modals = ({ isOpen, onClose, card, modalDatas }) => {

  return (
    <div
      className={`fixed inset-0 bg-customBgColor-dark bg-opacity-50 flex items-center justify-center transition-opacity z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-customBgColor-bg mt-8 rounded-xl max-w-4xl w-full p-6 md:p-8 transition-transform transform scrollbar-hide ${
          isOpen ? "scale-100" : "scale-90 opacity-0"
        } max-h-[80vh] sm:max-h-[85vh] lg:max-h-[90vh] overflow-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          {card.title}
        </h2>
        {/* <img
          src={card.src}
          alt={card.title}
          className="mb-6 w-full h-60 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
        /> */}
        <div>
          <AnimatedTestimonialsDemo modalDatas={card.modalData} />
          {card.description ? <TextGenerate words={card?.description} /> : ""}
        </div>

        {/* Table displaying product details */}
        <table className="min-w-full table-auto mb-6 border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-green-600 to-lime-500 text-white">
              <th className="px-6 py-3 text-left text-lg font-medium">
                Attribute
              </th>
              <th className="px-6 py-3 text-left text-lg font-medium">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {card.details &&
              card.details.map((detail, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-blue-50 transition-all duration-300`}
                >
                  <td className="px-6 py-4 text-lg font-medium text-customTextColor-dark">
                    {detail[0]}
                  </td>
                  <td className="px-6 py-4 text-lg text-customTextColor-dark">
                    {detail[1]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex flex-row justify-evenly ">
          <div className="mt-4 flex justify-end ">
            <button
              onClick={onClose}
              className="bg-customBgColor font-bold text-xl text-customBgColor-bg px-6 py-3 rounded-lg hover:bg-customTextColor-light transition w-36"
            >
              Order
            </button>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
