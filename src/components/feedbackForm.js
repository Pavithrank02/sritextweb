import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the data to the console
    console.log("Feedback Submitted: ", formData);
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <div className="flex flex-col justify-center w-11/12 sm:w-7/12 mx-auto p-4 bg-customBgColor-bg shadow-lg rounded-md mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-customBgColor">
        Feedback Form
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm sm:text-base font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-customBgColor rounded-md focus:outline-none focus:ring-2 focus:ring-customBgColor"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm sm:text-base font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-customBgColor rounded-md focus:outline-none focus:ring-2 focus:ring-customBgColor"
          />
        </div>

        {/* Feedback Input */}
        <div className="mb-4">
          <label
            htmlFor="feedback"
            className="block text-sm sm:text-base font-medium text-gray-700"
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border border-customBgColor rounded-md focus:outline-none focus:ring-2 focus:ring-customBgColor"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="w-48 sm:w-56 font-bold py-2 bg-customBgColor text-white rounded-md hover:bg-customTextColor-light focus:outline-none focus:ring-2 focus:ring-customBgColor"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
