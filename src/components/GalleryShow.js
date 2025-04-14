"use client";
import { useEffect, useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { ParallaxScroll } from "../components/ui/parallax-scroll.tsx";

export function GalleryShow() {
  const [img, setImg] = useState();
  console.log(img);

  useEffect(() => {
    fetchImg();
  }, []);
  const fetchImg = async () => {
    const data = await fetch(
      "https://ik.imagekit.io/wratuu6c1/dashboard/media-collections/Office"
    );
    const json = await data.json();
    setImg(json);
  };
  const products = [
    {
      name: "Products",
      images: [
        "https://ik.imagekit.io/wratuu6c1/blower%20manapparai.PNG?updatedAt=1735291707050",
        "https://ik.imagekit.io/wratuu6c1/blower%203.PNG?updatedAt=1735291707025",
        "https://ik.imagekit.io/wratuu6c1/IMG_1111.JPEG?updatedAt=1735290483064",
        "https://ik.imagekit.io/wratuu6c1/IMG_1110.JPEG?updatedAt=1735290483066",
        "https://ik.imagekit.io/wratuu6c1/Blower%20Air%20seperator%20Kappas%20cleaner%20front%20(1).JPEG?updatedAt=1735291706944",
        "https://ik.imagekit.io/wratuu6c1/IMG_1035.JPEG?updatedAt=1735289152986",
        "https://ik.imagekit.io/wratuu6c1/IMG_1075.JPEG?updatedAt=1735289004158",
        "https://ik.imagekit.io/wratuu6c1/Baling%20Machine%201.jpg?updatedAt=1735288594343",
        "https://ik.imagekit.io/wratuu6c1/IMG_1089.JPEG?updatedAt=1735271418463",
        "https://ik.imagekit.io/wratuu6c1/IMG_1143.JPEG?updatedAt=1735271418455",
        "https://ik.imagekit.io/wratuu6c1/IMG_1116.JPEG?updatedAt=1735271418396",
      ],
    },
    // {
    //   name: "Machinaries",
    //   images: [
    //     "https://ik.imagekit.io/wratuu6c1/machinaries/IMG_2689.jpg?updatedAt=1735380286197",
    //     "https://ik.imagekit.io/wratuu6c1/machinaries/IMG_2688.jpg?updatedAt=1735380283468",
    //     "https://ik.imagekit.io/wratuu6c1/machinaries/IMG_2687.jpg?updatedAt=1735380286113",
    //     "https://ik.imagekit.io/wratuu6c1/machinaries/IMG_2690.jpg?updatedAt=1735380286107",
    //     "https://ik.imagekit.io/wratuu6c1/machinaries/IMG_2686.jpg?updatedAt=1735380285875",
    //     "https://ik.imagekit.io/wratuu6c1/machinaries/IMG_2691.jpg?updatedAt=1735380286116"
    //   ],
    // },
    {
      name: "SriTex",
      images: [
        "https://ik.imagekit.io/wratuu6c1/IMG_2667.jpg?updatedAt=1735360101798",
        "https://ik.imagekit.io/wratuu6c1/IMG_2670.jpg?updatedAt=1735360101543",
        "https://ik.imagekit.io/wratuu6c1/IMG_2666.jpg?updatedAt=1735360101528",
        "https://ik.imagekit.io/wratuu6c1/IMG_2668.jpg?updatedAt=1735360100850",
        "https://ik.imagekit.io/wratuu6c1/IMG_2664.jpg?updatedAt=1735360100821",
        "https://ik.imagekit.io/wratuu6c1/IMG_2673.jpg?updatedAt=1735360100788",
        "https://ik.imagekit.io/wratuu6c1/IMG_2669.jpg?updatedAt=1735360100730",
      ],
    },
    // {
    //   name: "Office",
    //   images: [
    //     "https://ik.imagekit.io/wratuu6c1/IMG_2684.jpg?updatedAt=1735361971674",
    //     "https://ik.imagekit.io/wratuu6c1/IMG_2681.jpg?updatedAt=1735361971587",
    //     "https://ik.imagekit.io/wratuu6c1/IMG_2678.jpg?updatedAt=1735361971474",
    //     "https://ik.imagekit.io/wratuu6c1/IMG_2676.jpg?updatedAt=1735361971413",
    //     "https://ik.imagekit.io/wratuu6c1/IMG_2677.jpg?updatedAt=1735361971372",
    //     "https://ik.imagekit.io/wratuu6c1/IMG_2679.jpg?updatedAt=1735361971290",
    //     "https://ik.imagekit.io/wratuu6c1/IMG_2672.jpg?updatedAt=1735360101822",
    //   ],
    // },
    // {
    //   name: "Ginning Automation Systems",
    //   images: ["<URL13>", "<URL14>", "<URL15>"],
    // },
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
        >
          {/* The div with the border and content */}
          <div
            className="w-10/12 h-16 border-4 border-customBorderColor flex flex-row justify-between items-center rounded-md p-3"
            onClick={() => handleExpand(index)}
          >
            <div className="text-lg font-extrabold cursor-pointer w-full sm:w-2/3 md:w-1/2 ml-3 truncate">
              {product.name}
            </div>
            <div className="bg-slate-200 cursor-pointer p-2 mr-3">
              {expandStates[index] ? (
                <IconMinus className="h-6 w-6 text-customTextColor font-extrabold " />
              ) : (
                <IconPlus className="h-6 w-6 text-customTextColor font-extrabold " />
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
