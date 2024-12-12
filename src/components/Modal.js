import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <div>
      {/* Modal Background */}
      <div
        className={`abolute inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div
        className={`fixed inset-0 flex items-center justify-center transition-transform transform ${isOpen ? 'scale-100' : 'scale-90 opacity-0'} bg-transparent transition-all duration-300`}
      >
        <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Modal Title</h2>
          <p className="text-center text-gray-600 mb-6">
            This is a modal with a smooth entrance and exit animation.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modals = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 z-50">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
      >
        Open Modal
      </button>
      
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Modals;
