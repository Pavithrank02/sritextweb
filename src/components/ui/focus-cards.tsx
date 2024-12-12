"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils.ts";

// Modal Component
const Modal = ({ isOpen, onClose, card }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg max-w-lg w-full p-6 transition-transform transform ${
          isOpen ? "scale-100" : "scale-90 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent the modal from closing when clicking inside
      >
        <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
        <img src={card.src} alt={card.title} className="mb-4 w-full h-64 object-cover rounded" />
        <p className="text-lg text-gray-700">{card.description}</p>
        <div className="mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const Card = React.memo(({ card, index, hovered, setHovered, onCardClick }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => onCardClick(card)} // Trigger modal on card click
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
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
));

Card.displayName = "Card";

export function FocusCards({ cards, size, width }) {
  const [hovered, setHovered] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set selected card to open the modal
  };

  const closeModal = () => {
    setSelectedCard(null); // Close the modal
  };

  return (
    <div className="w-full px-4 py-6 border-4 border-neutral-300 rounded-xl shadow-xl justify-center items-center">
      <p className="text-4xl font-extrabold mb-5 text-green-600">Product Overview</p>
      {/* Frame for the grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-${size} md:grid-cols-${size} gap-10 w-${width} cursor-pointer`}>
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onCardClick={handleCardClick}
          />
        ))}
      </div>

      {/* Modal to show card details */}
      {selectedCard && (
        <Modal isOpen={true} onClose={closeModal} card={selectedCard} />
      )}
    </div>
  );
}
