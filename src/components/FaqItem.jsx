// components/FaqItem.jsx
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="font-medium text-lg">{question}</h3>
        {isOpen ? (
          <FiChevronUp className="text-gray-500" />
        ) : (
          <FiChevronDown className="text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600 dark:text-gray-400">{answer}</p>
      )}
    </div>
  );
};

export default FaqItem;