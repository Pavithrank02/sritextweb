"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import '../../global.css'
import { cn } from "../../lib/utils.ts";

export const ParallaxScroll = ({
  images,
  className
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // Apply scroll logic to this container
    offset: ["start start", "end start"], // Scroll effects based on the scroll position
  });

  // Animations for different rows
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Divide the images into four parts for each row
  const quarter = Math.ceil(images.length / 4);

  const firstPart = images.slice(0, quarter);
  const secondPart = images.slice(quarter, 2 * quarter);
  const thirdPart = images.slice(2 * quarter, 3 * quarter);
  const fourthPart = images.slice(3 * quarter);

  return (
    <div
      className={cn("h-[60rem] scrollbar-hide items-start overflow-y-auto w-full -mt-10", className)}
      ref={gridRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        
        {/* First Row */}
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1-" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail" />
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2-" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail" />
            </motion.div>
          ))}
        </div>

        {/* Third Row */}
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3-" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail" />
            </motion.div>
          ))}
        </div>

        {/* Fourth Row */}
        <div className="grid gap-10">
          {fourthPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFourth }}
              key={"grid-4-" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
