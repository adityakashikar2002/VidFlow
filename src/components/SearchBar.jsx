// import { useState } from 'react';
// import { FiSearch, FiMic, FiX } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';

// const SearchBar = ({ initialValue = '' }) => {
//   const [searchQuery, setSearchQuery] = useState(initialValue);
//   const [isListening, setIsListening] = useState(false);
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
//     }
//   };

//   const handleVoiceSearch = () => {
//     if (!('webkitSpeechRecognition' in window)) {
//       alert('Your browser does not support voice recognition. Please try Chrome.');
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onstart = () => setIsListening(true);
//     recognition.onresult = (e) => {
//       const transcript = e.results[0][0].transcript;
//       setSearchQuery(transcript);
//       navigate(`/?search=${encodeURIComponent(transcript)}`);
//       setIsListening(false);
//     };
//     recognition.onerror = () => setIsListening(false);
//     recognition.onend = () => setIsListening(false);
//     recognition.start();
//   };

//   const clearSearch = () => {
//     setSearchQuery('');
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSearch} className="w-full max-w-2xl">
//       <div className="relative flex items-center">
//         <input
//           type="text"
//           placeholder="Search videos..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-3 pl-12 pr-10 rounded-full border-0 focus:ring-2 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 shadow-sm"
//         />
//         <FiSearch className="absolute left-4 text-gray-500" />
//         {searchQuery && (
//           <button
//             type="button"
//             onClick={clearSearch}
//             className="absolute right-12 p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//           >
//             <FiX size={18} />
//           </button>
//         )}
//         <button
//           type="button"
//           onClick={handleVoiceSearch}
//           className={`absolute right-2 p-2 rounded-full ${
//             isListening
//               ? 'bg-red-500 text-white animate-pulse'
//               : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'
//           }`}
//         >
//           <FiMic size={18} />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;
//---------------------------------
//------------------------------------

// components/SearchBar.jsx
import { useState, useEffect } from 'react';
import { FiSearch, FiMic, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ initialValue = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    if (searchParam) setSearchQuery(searchParam);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support voice recognition. Please try Chrome.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (e) => {
      let transcript = e.results[0][0].transcript;
      // Remove trailing period if present
      transcript = transcript.replace(/\.$/, '');
      setSearchQuery(transcript);
      navigate(`/?search=${encodeURIComponent(transcript)}`);
      setIsListening(false);
    };
    recognition.onerror = (e) => {
      console.error('Voice recognition error', e.error);
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const clearSearch = () => {
    setSearchQuery('');
    navigate('/');
  };

  // Auto-search when query changes (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      } else if (searchQuery === '') {
        navigate('/');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, navigate]);

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-12 pr-10 rounded-full border-0 focus:ring-2 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 shadow-sm"
        />
        <FiSearch className="absolute left-4 text-gray-500" />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-12 p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <FiX size={18} />
          </button>
        )}
        <button
          type="button"
          onClick={handleVoiceSearch}
          className={`absolute right-2 p-2 rounded-full ${
            isListening
              ? 'bg-red-500 text-white animate-pulse'
              : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'
          }`}
        >
          <FiMic size={18} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;