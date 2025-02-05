// src/FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows you to return products within 30 days of purchase. Make sure the product is in its original condition.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to select countries. Shipping fees and delivery times vary by location.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.',
    },
    {
      question: 'What warranties do you offer on machinery?',
      answer: 'We offer a one-year warranty on all of our machinery. Extended warranties are available upon request.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-7/12 mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold text-center text-customTextColor mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="border-b border-customBgColor">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left py-4 px-6 text-xl font-semibold text-gray-800 hover:bg-customBgColor-bg transition duration-300 ease-in-out transform hover:scale-105"
              >
                {item.question}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out transform ${isActive ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} `}
              >
                <div className="p-6 bg-gray-50 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
