import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCard } = location.state || {};

  const handleConfirmOrder = () => {
    // Show success toast
    toast.success("Order Placed Successfully! 🎉", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // Redirect after a delay
    setTimeout(() => {
      navigate("/"); // Replace with your desired path
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 md:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Order Page
        </h1>
        {selectedCard ? (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              {selectedCard.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              {selectedCard.description}
            </p>
            <div className="overflow-auto">
              <table className="w-full border-collapse mb-6 text-sm md:text-base">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="px-4 py-2 text-left font-medium">
                      Attribute
                    </th>
                    <th className="px-4 py-2 text-left font-medium">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCard.details.map((detail, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-customBgColor-bg" : "bg-white"
                      } hover:bg-blue-100 transition-all`}
                    >
                      <td className="px-4 py-2 text-gray-800">{detail[0]}</td>
                      <td className="px-4 py-2 text-gray-800">{detail[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleConfirmOrder}
                className="bg-green-600 text-white font-bold text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Confirm Order
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No card selected</p>
        )}
      </div>
    </div>
  );
};

export default Order;
