import React from 'react';

const ProductOverview = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-96 sm:w-96 md:w-60 cursor-pointer lg:w-96 h-auto mb-5 ml-10 sm:ml-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <img className="w-full h-72 object-fill" src={product.image} alt={product.name} />

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-grow p-4">
        {/* Product Name */}
        <h3 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-800 truncate mb-2">{product.name}</h3>
        
        {/* Product Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-sm truncate flex-grow mb-2">{product.description}</p>

        {/* Product Price */}
        <p className="text-xl sm:text-lg md:text-xl font-bold text-gray-900 mt-2">{`$${product.price.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default ProductOverview;
