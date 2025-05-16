// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiMenu, FiSearch, FiBell, FiMic } from 'react-icons/fi';
// import { BsPersonCircle } from 'react-icons/bs';
// // import { RiPremiumLine } from 'react-icons/ri';
// import { RiAwardFill } from 'react-icons/ri';
// import ThemeToggle from './ThemeToggle';
// import Logo from '../assets/icons/logo-2.png';
// import { Link } from 'react-router-dom';

// const Header = ({ sidebarOpen, setSidebarOpen }) => {
//   const [searchQuery, setSearchQuery] = useState('');
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

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const searchParam = params.get('search');
//     if (searchParam) setSearchQuery(searchParam);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 shadow-lg p-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-full text-white hover:bg-black/10 transition-colors"
//           >
//             <FiMenu className="text-xl" />
//           </button>
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex items-center"
//           >
//             <a href="/" className="flex items-center space-x-2 group">
//               <img src={Logo} alt="vidflow" className="h-16" />
//               {/* <h2 className="text-2xl font-bold text-white font-[Poppins] tracking-tighter">
//                 VidFlow
//               </h2> */}
//             </a>
//           </motion.div>
//         </div>

//         <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               placeholder="Search videos..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 pl-12 rounded-full border-0 focus:ring-2 focus:ring-purple-400 bg-white/90 backdrop-blur-sm shadow-md"
//             />
//             <FiSearch className="absolute left-4 text-gray-500" />
//             <button
//               type="button"
//               onClick={handleVoiceSearch}
//               className={`absolute right-2 p-2 rounded-full ${isListening 
//                 ? 'bg-red-500 text-white animate-pulse' 
//                 : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
//             >
//               <FiMic className="text-lg" />
//             </button>
//           </div>
//         </form>

//         <div className="flex items-center space-x-3">
//           <Link 
//             to="/premium"
//             className="flex items-center px-3 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
//           >
//             <RiAwardFill className="mr-2" />
//             <span>Premium</span>
//           </Link>
//           <ThemeToggle />
//           <button className="p-2 rounded-full text-white hover:bg-black/10 relative">
//             <FiBell className="text-xl" />
//             <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
//           </button>
//           <button className="p-2 rounded-full text-white hover:bg-black/10">
//             <BsPersonCircle className="text-xl" />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiSearch, FiBell, FiMic, FiX } from 'react-icons/fi'; // Import FiX for the clear button
import { BsPersonCircle } from 'react-icons/bs';
import { RiAwardFill } from 'react-icons/ri';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/icons/logo-2.png';
import { Link } from 'react-router-dom';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

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
    recognition.lang = 'en-US'; // Set language for better accuracy

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (e) => {
      let transcript = e.results[0][0].transcript.trim(); // Trim whitespace first

      // Remove trailing punctuation (dot, comma, question mark, exclamation mark)
      // This regex matches one or more punctuation characters at the end of the string
      transcript = transcript.replace(/[.,!?;]+$/, '');

      setSearchQuery(transcript);
      navigate(`/?search=${encodeURIComponent(transcript)}`);
      setIsListening(false);
    };
    recognition.onerror = (e) => {
      console.error('Speech recognition error:', e.error);
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    // Optionally navigate back to home or clear search param from URL
    const params = new URLSearchParams(window.location.search);
    if (params.has('search')) {
      params.delete('search');
      navigate(`/?${params.toString()}`);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    if (searchParam) setSearchQuery(decodeURIComponent(searchParam));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-full text-white hover:bg-black/10 transition-colors"
          >
            <FiMenu className="text-xl" />
          </button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <a href="/" className="flex items-center space-x-2 group">
              <img src={Logo} alt="vidflow" className="h-16" />
              {/* <h2 className="text-2xl font-bold text-white font-[Poppins] tracking-tighter">
                VidFlow
              </h2> */}
            </a>
          </motion.div>
        </div>

        <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
          <div className="relative flex items-center">
            <FiSearch className="absolute left-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-12 pr-24 rounded-full border-0 focus:ring-2 focus:ring-purple-400 bg-white/90 backdrop-blur-sm shadow-md"
            />
            {searchQuery && ( // Conditionally render clear button
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-14 p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                aria-label="Clear search"
              >
                <FiX className="text-lg" />
              </button>
            )}
            <button
              type="button"
              onClick={handleVoiceSearch}
              className={`absolute right-2 p-2 rounded-full ${isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
              aria-label="Voice search"
            >
              <FiMic className="text-lg" />
            </button>
          </div>
        </form>

        <div className="flex items-center space-x-3">
          <Link
            to="/premium"
            className="flex items-center px-3 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
          >
            <RiAwardFill className="mr-2" />
            <span>Premium</span>
          </Link>
          <ThemeToggle />
          <button className="p-2 rounded-full text-white hover:bg-black/10 relative">
            <FiBell className="text-xl" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 rounded-full text-white hover:bg-black/10">
            <BsPersonCircle className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;