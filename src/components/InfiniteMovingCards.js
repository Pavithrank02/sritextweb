import React from "react";
import { motion } from "framer-motion";

export function InfiniteMovingCards({ items, direction, speed }) {
  const animationSpeed = speed === "fast" ? "15s" : speed === "slow" ? "30s" : "20s";
  const directionClass = direction === "right" ? "animate-slide-right" : "animate-slide-left";

  return (
    <div className="w-full overflow-hidden">
      <div className={`flex ${directionClass} gap-12`}>
        {/* Repeat the items to create the infinite effect */}
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            className="flex-none w-[300px] p-6 bg-customBgColor-bg border border-x-4 border-customBorderColor rounded-xl shadow-md "
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.3 }}
          >
            <p className="text-lg font-semibold">{item.quote}</p>
            <p className="mt-4 text-sm text-customTextColor-light ">– {item.name}, <span className="italic">{item.title}</span></p>
          </motion.div>
        ))}
      </div>

      {/* TailwindCSS animation for sliding */}
      <style jsx>{`
        @keyframes animate-slide-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes animate-slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slide-left {
          animation: animate-slide-left ${animationSpeed} linear infinite;
        }

        .animate-slide-right {
          animation: animate-slide-right ${animationSpeed} linear infinite;
        }
      `}</style>
    </div>
  );
}
