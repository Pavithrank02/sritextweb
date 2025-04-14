"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils.ts";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}
      className="-mt-20 text-center mb-5">
        {wordsArray.map((word, idx) => {
          return (
            (<motion.span
              key={word + idx}
              className="dark:text-white text-customTextColor-dark opacity-0 "
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className=" dark:text-white text-customTextColor-dark text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>)
  );
};
