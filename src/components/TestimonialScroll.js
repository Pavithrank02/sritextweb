import React, { useState, useEffect } from 'react';
import TestimonyCard from './TestimonyCard'; // Import the individual Testimony Card
import { motion } from 'framer-motion';  // Optional for advanced animations

const TestimonialScroll = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initial set of testimonials (Simulating data)
  const initialTestimonials = [
    { name: 'John Doe', text: 'This is an amazing service!', image: 'https://via.placeholder.com/100' },
    { name: 'Jane Smith', text: 'I love using this product every day.', image: 'https://via.placeholder.com/100' },
    { name: 'Bob Brown', text: 'Highly recommended to all my friends!', image: 'https://via.placeholder.com/100' },
  ];

  // Simulate fetching data and adding more testimonials
  const fetchTestimonials = () => {
    setLoading(true);
    setTimeout(() => {
      setTestimonials(prevState => [
        ...prevState,
        ...initialTestimonials,  // Simulate more data
      ]);
      setLoading(false);
    }, 1500);
  };

  // Check when the user has scrolled to the bottom to trigger loading
  const loadMore = () => {
    const bottom = document.documentElement.scrollHeight === document.documentElement.scrollTop + window.innerHeight;
    if (bottom && !loading) {
      fetchTestimonials();
    }
  };

  useEffect(() => {
    // Initial load
    fetchTestimonials();

    // Attach scroll event listener
    window.addEventListener('scroll', loadMore);

    return () => window.removeEventListener('scroll', loadMore);
  }, [loading]);

  return (
    <div className="testimonial-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <TestimonyCard {...testimonial} />
          </motion.div>
        ))}
      </div>
      {loading && <div className="text-center py-4">Loading...</div>}
    </div>
  );
};

export default TestimonialScroll;
