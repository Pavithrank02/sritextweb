import React, { useState } from 'react';
import ProductOverview from './ProductOverview'; // Import the ProductOverview component

// Sample products (you can add more)
const products = [
  { id: 1, name: 'Air bLower', description: 'This is a great product.', price: "Get Quote", image: 'https://5.imimg.com/data5/EF/RX/MY-2995798/industrial-air-blower-500x500.jpg' },
  { id: 2, name: 'Product 2', description: 'This is another great product.', price: "Get Quote", image: 'https://ik.imagekit.io/wratuu6c1/IMG_1035.JPEG?updatedAt=1735289152986' },
  { id: 3, name: 'Product 3', description: 'Best seller product.', price: "Get Quote", image: 'https://ik.imagekit.io/wratuu6c1/IMG_1075.JPEG?updatedAt=1735289004158' },
  { id: 4, name: 'Product 4', description: 'Affordable and high quality.', price: "Get Quote", image: 'https://ik.imagekit.io/wratuu6c1/IMG_1089.JPEG?updatedAt=1735271418463' },
  { id: 5, name: 'Product 5', description: 'Premium quality product.', price: "Get Quote", image: 'https://ik.imagekit.io/wratuu6c1/Baling%20Machine%201.jpg?updatedAt=1735288594343' },
  { id: 6, name: 'Product 6', description: 'New arrival product.', price: "Get Quote", image: 'https://5.imimg.com/data5/FN/QO/MY-2995798/manual-baling-press-500x500.jpg' },
  { id: 7, name: 'Product 7', description: 'Hot product of the season.', price: "Get Quote", image: 'https://5.imimg.com/data5/YW/RT/MY-2995798/hydraulic-baling-press-500x500.jpg' },
  { id: 8, name: 'Product 8', description: 'Limited edition item.', price: "Get Quote", image: 'https://5.imimg.com/data5/IE/YH/MY-2995798/cotton-baling-press-500x500.jpg' },
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
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-customTextColor">
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
            className="bg-customTextColor-light text-customBgColor-bg text-xl font-bold p-4 rounded-full hover:bg-customTextColor focus:outline-none"
          >
            &lt;
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-customTextColor-light text-customBgColor-bg text-xl font-bold p-4 rounded-full hover:bg-customTextColor focus:outline-none"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
