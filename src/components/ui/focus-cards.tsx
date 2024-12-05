"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils.ts";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered,
  
  
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden  h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img
      src={card.src}
      alt={card.title}
      className=" absolute h-full w-full object-center inset-0" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      <div
        className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards, size, width
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full px-4 py-6 border-4 border-neutral-300 rounded-xl shadow-xl justify-center items-center">
        <p className="text-4xl font-extrabold mb-5 text-green-600">Product Overview </p>
      {/* Frame for the grid */}
      <div className={`grid grid-cols-1 md:grid-cols-${size} gap-10 w-${width} `}>
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered} />
        ))}
      </div>
    </div>
  );
}
