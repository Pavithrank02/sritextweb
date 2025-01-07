"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils.ts";
import "../../global.css";
import Modals from "../Modal.js";

// Modal Component
export const Card = React.memo(
  ({ card, index, hovered, setHovered, onCardClick }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onCardClick(card)} // Trigger modal on card click
      className={cn(
        "rounded-lg relative  overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="absolute h-full w-full object-center inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards, size, width,modalData }) {
  console.log("cards", cards);
  const [hovered, setHovered] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalDataIndex, setModalDataIndex] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the selected card to open the modal
  };

  const closeModal = () => {
    setSelectedCard(null); // Close the modal
  };

  // Safely access the products data: Make sure `cards` and `cards[0].products` exist
  const products =
    cards && cards[0] && Array.isArray(cards[0].products)
      ? cards[0].products
      : [];
  
  return (
    <div className="md:flex md:justify-center ">
      <div className="mt-28 mb-5 md:w-10/12 px-4 py-6 border-4 border-neutral-300 rounded-xl shadow-xl flex flex-col justify-center items-center">
        <div className="w-full">
          <p className="text-4xl font-extrabold mb-5 text-green-600 items-center">
            {cards && cards[0] && cards[0].List}
          </p>
        </div>

        {/* Grid for the cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-${size} md:grid-cols-${size} gap-10 w-${width} cursor-pointer `}
        >
          {products.length > 0
            ? products.map((card, index) => (
                <div className="flex flex-col justify-between border-4 border-customBorderColor rounded-xl shadow-xl" key={card.title}>
                  <Card
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                    onCardClick={handleCardClick}
                  />
                </div>
              ))
            : null}{" "}
          {/* Don't display anything if no products are available */}
        </div>

        {/* Modal to show card details */}
        
        {selectedCard && (
          <Modals isOpen={true} onClose={closeModal} card={selectedCard}  />
        )}
      </div>
    </div>
  );
}
