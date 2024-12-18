import React, { useState } from 'react';
import ProductOverview from './ProductOverview'; // Import the ProductOverview component

// Sample products (you can add more)
const products = [
  { id: 1, name: 'Product 1', description: 'This is a great product.', price: 29.99, image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Product 2', description: 'This is another great product.', price: 49.99, image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Product 3', description: 'Best seller product.', price: 99.99, image: 'https://via.placeholder.com/300x200' },
  { id: 4, name: 'Product 4', description: 'Affordable and high quality.', price: 19.99, image: 'https://via.placeholder.com/300x200' },
  { id: 5, name: 'Product 5', description: 'Premium quality product.', price: 149.99, image: 'https://via.placeholder.com/300x200' },
  { id: 6, name: 'Product 6', description: 'New arrival product.', price: 79.99, image: 'https://via.placeholder.com/300x200' },
  { id: 7, name: 'Product 7', description: 'Hot product of the season.', price: 129.99, image: 'https://via.placeholder.com/300x200' },
  { id: 8, name: 'Product 8', description: 'Limited edition item.', price: 199.99, image: 'https://via.placeholder.com/300x200' },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsToShow = 5; // Number of products to show at once

  const [startTouch, setStartTouch] = useState(0); // Store the starting touch position

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Calculate the translateX value to show products correctly
  const translateX = (currentIndex * (100 / productsToShow)) + '%';

  // Handle touch start event
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX; // Get the initial touch position
    setStartTouch(touchStart);
  };

  // Handle touch move event
  const handleTouchMove = (e) => {
    e.preventDefault(); // Prevent scrolling while swiping
  };

  // Handle touch end event
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX; // Get the final touch position
    const swipeDistance = startTouch - touchEnd;

    if (swipeDistance > 50) {
      nextSlide(); // Swipe left
    } else if (swipeDistance < -50) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div className="relative w-full h-4/6 overflow-hidden mt-5 mb-5">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-green-700">
        Product Overview
      </h1>

      <div className="relative"
        onTouchStart={handleTouchStart} // Handle touch start
        onTouchMove={handleTouchMove}   // Handle touch move (to prevent scrolling)
        onTouchEnd={handleTouchEnd}     // Handle touch end
      >
        <div className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${translateX})`, // Apply translateX to move slider
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {/* Render Product Cards */}
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-full px-4">
              <ProductOverview product={product} />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-600 focus:outline-none"
          >
            &lt;
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-600 focus:outline-none"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
