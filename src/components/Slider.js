import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const images = [
  "https://via.placeholder.com/1920x1080?text=Image+1",
  "https://via.placeholder.com/1920x1080?text=Image+2",
  "https://via.placeholder.com/1920x1080?text=Image+3",
  "https://via.placeholder.com/1920x1080?text=Image+4",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // React Spring animation for smooth sliding
  const slide = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`, // Slide horizontally by 100% for each image
    config: { tension: 250, friction: 40 },
  });

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    ); // Cycle backwards
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextImage, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[66vh] overflow-hidden top-3">
      {/* Slider Wrapper */}
      <animated.div
        style={slide}
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </animated.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition duration-300 ease-in-out"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none transition duration-300 ease-in-out"
      >
        &#10095;
      </button>

      {/* Indicator Dots (Optional) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
