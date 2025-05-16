// // pages/Feedback.jsx
// import { useState } from 'react';
// import { FiSend, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

// const Feedback = () => {
//   const [feedbackType, setFeedbackType] = useState(null);
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!feedbackType || !message.trim()) return;
    
//     // Here you would typically send the feedback to your backend
//     console.log('Feedback submitted:', { feedbackType, message });
//     setSubmitted(true);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-2xl">
//       <h1 className="text-3xl font-bold mb-6">Share Your Feedback</h1>
      
//       {submitted ? (
//         <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-6 rounded-xl text-center">
//           <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
//           <p>Your feedback has been submitted successfully.</p>
//           <p>We appreciate your input to help improve VidFow.</p>
//         </div>
//       ) : (
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
//           <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">How would you rate your experience?</h2>
            
//             <div className="flex space-x-4 mb-6">
//               <button
//                 onClick={() => setFeedbackType('positive')}
//                 className={`flex items-center px-4 py-2 rounded-lg ${
//                   feedbackType === 'positive'
//                     ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
//                     : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
//                 }`}
//               >
//                 <FiThumbsUp className="mr-2" />
//                 Positive
//               </button>
//               <button
//                 onClick={() => setFeedbackType('negative')}
//                 className={`flex items-center px-4 py-2 rounded-lg ${
//                   feedbackType === 'negative'
//                     ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
//                     : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
//                 }`}
//               >
//                 <FiThumbsDown className="mr-2" />
//                 Negative
//               </button>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="message" className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
//                   {feedbackType === 'positive' 
//                     ? 'What did you like about VidFow?' 
//                     : 'What can we improve?'}
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent"
//                   placeholder="Share your thoughts..."
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={!feedbackType || !message.trim()}
//                 className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//               >
//                 <FiSend className="mr-2" />
//                 Submit Feedback
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Feedback;

// pages/Feedback.jsx
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log({ feedback, rating });
    setSubmitted(true);
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Feedback</h1>
      
      {submitted ? (
        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
          Thank you for your feedback! We appreciate your input.
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Share your thoughts</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              We'd love to hear your feedback about our platform. What do you like? What can we improve?
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="rating" className="block mb-2 font-medium">
                  How would you rate your experience?
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        rating >= star
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {star}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="feedback" className="block mb-2 font-medium">
                  Your feedback
                </label>
                <textarea
                  id="feedback"
                  rows="5"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700"
                  placeholder="What do you like or dislike about vidflow?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center"
              >
                <FiSend className="mr-2" /> Submit Feedback
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;