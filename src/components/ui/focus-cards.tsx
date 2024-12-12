"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils.ts";
import "../../global.css";
import Modals from "../Modal.js";
// Modal Component
const products = [
  {
    id: 1,
    title: "Automatic Cotton Baling Press",
    description:
      "This is a high-capacity automatic baling press used in textile industries.",
    src: "https://example.com/press-image.jpg",
    details: [
      ["Price", "₹ 12,00,000/ Unit"],
      ["Phase", "Three Phase"],
      ["Automatic Grade", "Manual, Semi-Automatic, Automatic"],
      ["Capacity", "150 - 300 tons"],
      ["Material (To be worked upon)", "Textile"],
      ["Hydraulic Pressure (Bar)", "150 - 180 bar"],
      ["Production Rate (Bales/Hour)", "4-12 bale/hr"],
      ["Power", "10 - 40 HP"],
    ],
  },
  {
    id: 2,
    title: "Cotton Baling Press",
    description:
      "This is a high-capacity automatic baling press used in textile industries.",
    src: "https://example.com/press-image.jpg",
    details: [
      ["Price", "₹ 5,00,000/ Unit"],
      ["Phase", "Three Phase"],
      ["Automatic Grade", "Manual, Semi-Automatic, Automatic"],
      ["Capacity", "150 - 300 tons"],
      ["Material (To be worked upon)", "Textile"],
      ["Hydraulic Pressure (Bar)", "150 - 180 bar"],
      ["Production Rate (Bales/Hour)", "4-12 bale/hr"],
      ["Power", "10 - 40 HP"],
    ],
  },
  // Add more products here
];

const det = products.map((product) => {
  // Use map to transform the details array for each product
  const details = product.details.map(([attribute, detail]) => {
    return {
      attribute: attribute,
      detail: detail,
    };
  });

  // Return the details array for this product
  return details;
});

// const Modal = ({ isOpen, onClose, card, det}) => {
//   return <Modals isOpen={isOpen} onClose={onClose} card={card} det={det}/>;
// };

export const Card = React.memo(
  ({ card, index, hovered, setHovered, onCardClick }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onCardClick(card)} // Trigger modal on card click
      className={cn(
        "bg-slate-300 rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
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

export function FocusCards({ cards, size, width }) {
  // console.log(cards)
  const [hovered, setHovered] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the selected card to open the modal
  };

  const closeModal = () => {
    setSelectedCard(null); // Close the modal
  };

  return (
    <div className="mt-28 mb-5 w-full px-4 py-6 border-4 border-neutral-300 rounded-xl shadow-xl flex flex-col justify-center items-center">
      <div className="w-full">
        <p className="text-4xl font-extrabold mb-5 text-green-600 items-center">
          Product Listing
        </p>
      </div>

      <div className="text-green-700 font-semibold text-2xl">
              <p>{cards[0].List}</p>
            </div>
      {/* Grid for the cards */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-${size} md:grid-cols-${size} gap-10 w-${width} cursor-pointer`}
      >
        {cards[0].products.map((card, index) => (
          console.log(card, index),
          <div className="flex flex-col justify-between">
            
            <Card
              key={card.title}
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
              onCardClick={handleCardClick}
            />
          </div>
        ))}
      </div>

      {/* Modal to show card details */}
      {selectedCard && (
        <Modals
          isOpen={true}
          onClose={closeModal}
          card={selectedCard}
          det={det}
        />
      )}
    </div>
  );
}
