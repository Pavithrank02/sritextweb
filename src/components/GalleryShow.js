"use client";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { ParallaxScroll } from "../components/ui/parallax-scroll.tsx";

export function GalleryShow() {
  const products = [
    {
      name: "Products",
      images: [
        "https://ik.imagekit.io/wratuu6c1/IMG_2684.jpg?updatedAt=1735361971674",
        "https://ik.imagekit.io/wratuu6c1/IMG_2681.jpg?updatedAt=1735361971587",
        "https://ik.imagekit.io/wratuu6c1/IMG_2678.jpg?updatedAt=1735361971474",
        "https://ik.imagekit.io/wratuu6c1/IMG_2676.jpg?updatedAt=1735361971413",
        "https://ik.imagekit.io/wratuu6c1/IMG_2677.jpg?updatedAt=1735361971372",
        "https://ik.imagekit.io/wratuu6c1/IMG_2679.jpg?updatedAt=1735361971290",
        "https://ik.imagekit.io/wratuu6c1/IMG_2672.jpg?updatedAt=1735360101822",
      ],
    },
    { name: "Machinaries", images: ["<URL4>", "<URL5>", "<URL6>"] },
    { name: "SriTex", images: ["<URL7>", "<URL8>", "<URL9>"] },
    {
      name: "Office",
      images: [
        "https://ik.imagekit.io/wratuu6c1/IMG_2684.jpg?updatedAt=1735361971674",
        "https://ik.imagekit.io/wratuu6c1/IMG_2681.jpg?updatedAt=1735361971587",
        "https://ik.imagekit.io/wratuu6c1/IMG_2678.jpg?updatedAt=1735361971474",
        "https://ik.imagekit.io/wratuu6c1/IMG_2676.jpg?updatedAt=1735361971413",
        "https://ik.imagekit.io/wratuu6c1/IMG_2677.jpg?updatedAt=1735361971372",
        "https://ik.imagekit.io/wratuu6c1/IMG_2679.jpg?updatedAt=1735361971290",
        "https://ik.imagekit.io/wratuu6c1/IMG_2672.jpg?updatedAt=1735360101822",
      ],
    },
    {
      name: "Ginning Automation Systems",
      images: ["<URL13>", "<URL14>", "<URL15>"],
    },
    // { name: "Cotton Bale Press", images: ["<URL16>", "<URL17>", "<URL18>"] },
    // {
    //   name: "Lint Super Cleaning Machine",
    //   images: ["<URL19>", "<URL20>", "<URL21>"],
    // },
    // { name: "Belt Conveyor System", images: ["<URL22>", "<URL23>", "<URL24>"] },
    // {
    //   name: "Bucket Elevator System",
    //   images: ["<URL25>", "<URL26>", "<URL27>"],
    // },
  ];

  // State to manage the expanded state for each product
  const [expandStates, setExpandStates] = useState(
    products.reduce((acc, _, index) => {
      acc[index] = false; // Initially all are collapsed
      return acc;
    }, {})
  );

  // Function to toggle the expand state of a specific product
  const handleExpand = (index) => {
    setExpandStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the expand state for the clicked product
    }));
  };

  return (
    <div className="mt-28">
      {products.map((product, index) => (
        <div
          className="w-12/12 flex flex-col justify-center items-center mb-5"
          key={index}
          onClick={() => handleExpand(index)}
        >
          {/* The div with the border and content */}
          <div className="w-10/12 h-16 border-4 border-green-700 flex flex-row justify-between items-center rounded-md p-3">
            <div className="text-lg font-extrabold cursor-pointer w-full sm:w-2/3 md:w-1/2 ml-3 truncate">
              {product.name}
            </div>
            <div className="bg-slate-200 cursor-pointer p-2 mr-3">
              {expandStates[index] ? (
                <IconMinus className="h-6 w-6 text-green-700 font-extrabold dark:text-neutral-300" />
              ) : (
                <IconPlus className="h-6 w-6 text-green-700 font-extrabold dark:text-neutral-300" />
              )}
            </div>
          </div>

          {/* Content for the expanded view */}
          <div className="w-10/12 h-full border-2 border-s-4 mt-3">
            {expandStates[index] && <ParallaxScroll images={product.images} />}
          </div>
        </div>
      ))}
    </div>
  );
}
