import React from 'react';

const TestimonyCard = ({ name, text, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out transform hover:scale-105">
      <div className="flex items-center mb-4">
        <img src={image} alt={`${name}'s photo`} className="w-16 h-16 rounded-full object-cover mr-4" />
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      </div>
      <p className="text-gray-600 text-sm">{`"${text}"`}</p>
    </div>
  );
};

export default TestimonyCard;
