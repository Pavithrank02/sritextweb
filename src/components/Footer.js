import React from "react";
import { motion } from "framer-motion";
import { IconPhone, IconMapPin, IconMailFilled } from "@tabler/icons-react";
import { FloatingDockDemo } from "./FooterIcons";
import img from "../assets/images/sritex.jpg";
import {footerDesc,primaryContact,email,address} from '../data.js'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-customBgColor-bg flex flex-col justify-around w-full items-center py-6  border-y-2 border-customBorderColor">
      {/* Upper section with company info and contact */}
      <div className="flex flex-col md:flex-row justify-between w-11/12 lg:w-9/12 border-b-4 border-x-customBorderColor pb-4">
        {/* Company Info Section */}
        <div className="flex flex-col items-center sm:items-start justify-center text-justify mb-6 md:mb-0 md:w-1/2">
          <div className="flex items-center justify-center mb-4">
            <img src={img} className="h-16 md:h-32 md:w-72" alt="Logo" />
          </div>
          <div className="text-customTextColor-light text-sm md:text-lg font-bold w-full md:w-11/12">
           {footerDesc}
          </div>
        </div>

        {/* Contact and Info Sections */}
        <div className="flex flex-col justify-between items-start md:items-start md:w-1/2">
          <div className="text-customTextColor font-bold text-lg md:text-2xl mb-4 md:mb-0">
            Official info:
          </div>
          <div className="mb-6">
            <p className="text-customTextColor font-bold text-sm md:text-lg mb-2">
              Contact Us:
            </p>
            <div className="text-customTextColor-light font-bold text-sm md:text-base flex flex-row items-center mb-2">
              <IconPhone style={{ color: "#03C04A" }} />
              <span className="ml-2"> {primaryContact}</span>
            </div>
            <div className="text-customTextColor-light font-bold text-sm md:text-base flex flex-row items-center mb-2">
              <IconMailFilled style={{ color: "#03C04A" }} />
              <span className="ml-2"> {email}</span>
            </div>
            <div className="text-customTextColor-light font-bold text-sm md:text-base flex flex-row items-center">
              <IconMapPin style={{ color: "#03C04A" }} />
              <span className="ml-2">
                {" "}
                {address}
              </span>
            </div>
          </div>

          {/* Open Hours */}
          <div className="mb-6">
            <p className="text-customTextColor font-bold text-sm md:text-lg mb-2">
              Open Hours:
            </p>
            <p className="text-customTextColor-light font-semibold text-sm md:text-base">
              Monday-Saturday: 9:00AM – 6:00PM
              <br />
              Sun: CLOSED
            </p>
          </div>
        </div>
      </div>
      <div className="text-customTextColor font-bold text-sm md:text-lg text-center">
        <p className="mb-2">Follow Us</p>
        <motion.div
          className="flex flex-row justify-between text-customTextColor-light font-semibold w-32 md:w-44"
          animate={{ x: 0, scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ type: "spring", delay: 2 }}
        >
          <FloatingDockDemo />
        </motion.div>
      </div>

      {/* Bottom Section with Copyright */}
      <div className="text-customTextColor-light text-sm md:text-base mt-4 font-bold">
        <p>©{date} Sritex Hi Tech Machines Company – All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
