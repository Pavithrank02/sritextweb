import React, { useState } from "react";
import { IconPhoneCall, IconMailFilled } from "@tabler/icons-react";
import "animate.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormStatus("Submitting...");

      // Simulate form submission
      setTimeout(() => {
        setFormStatus("Thank you for your message!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      }, 2000);
    }
  };

  return (
    <div className="flex w-full items-center mt-28 justify-center mb-5">
      <div className="flex flex-col lg:flex-row justify-center rounded-xl w-full max-w-screen-xl p-4 lg:p-8">
        {/* Form Section */}
        <div className="max-w-lg w-full p-6 shadow-lg rounded-lg border flex flex-col items-start lg:w-1/2">
          <div className="flex flex-col justify-around mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 animate__animated animate__fadeIn">
              Contact <span className="text-green-700">Us</span>
            </h2>
            <p className="text-sm sm:text-base mb-5">
              If you have any questions, concerns, or feedback, please feel free
              to reach out to us using the form.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Name Field */}
            <div className="form-group w-full">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-green-700"
              >
                Contact Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleInputChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
              {errors.name && (
                <small className="text-red-500 text-xs">{errors.name}</small>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group w-full">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-green-600"
              >
                Email Id
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email id"
                onChange={handleInputChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
              {errors.email && (
                <small className="text-red-500 text-xs">{errors.email}</small>
              )}
            </div>

            {/* City Field */}
            <div className="form-group w-full">
              <label
                htmlFor="city"
                className="block text-sm font-bold text-green-600"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                placeholder="Enter your city name"
                onChange={handleInputChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Message Field */}
            <div className="form-group w-full">
              <label
                htmlFor="message"
                className="block text-sm font-bold text-green-700"
              >
                Let's Talk About Your Idea
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Enter your message..."
                onChange={handleInputChange}
                className="mt-2 p-3 w-full h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
              {errors.message && (
                <small className="text-red-500 text-xs">{errors.message}</small>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full font-bold text-xl bg-green-700 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {formStatus ? formStatus : "Submit"}
              </button>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 w-full">
              <div className="flex flex-row justify-start items-center mb-4 sm:mb-0">
                <IconPhoneCall className="h-8 w-8 text-green-700" />
                <div className="ml-3">
                  <div className="font-bold">Phone</div>
                  <div className="text-lime-800">91 9095726699</div>
                  <div className="text-lime-800">91 9585590358</div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center">
                <IconMailFilled className="h-8 w-8 text-green-700" />
                <div className="ml-3">
                  <div className="font-bold">Email</div>
                  <div className="text-lime-800">sritex06@gmail.com</div>
                </div>
              </div>
            </div>
          </form>

          {/* Display status message */}
          {formStatus && (
            <p className="mt-4 text-center text-green-700 font-semibold">
              {formStatus}
            </p>
          )}
        </div>

        {/* Google Maps Section */}
        <div className="lg:w-1/2 w-full flex justify-center items-center bg-emerald-700 rounded-r-xl p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.323293542337!2d77.14356367587104!3d11.089265253343703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857a12fce0e59%3A0xa8be78090c68acc5!2sSritex%20Hi-Tech%20Machines!5e0!3m2!1sen!2sin!4v1734683477582!5m2!1sen!2sin"
            width="100%"
            height="730"
            title="map"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

