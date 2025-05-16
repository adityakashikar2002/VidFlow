// // pages/Report.jsx
// import { useState } from 'react';
// import { FiAlertTriangle, FiSend } from 'react-icons/fi';

// const Report = () => {
//   const [reportType, setReportType] = useState('');
//   const [description, setDescription] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const reportOptions = [
//     { value: 'copyright', label: 'Copyright Infringement' },
//     { value: 'harassment', label: 'Harassment or Bullying' },
//     { value: 'spam', label: 'Spam or Misleading Content' },
//     { value: 'privacy', label: 'Privacy Violation' },
//     { value: 'other', label: 'Other' }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!reportType || !description.trim()) return;
    
//     // Here you would typically send the report to your backend
//     console.log('Report submitted:', { reportType, description });
//     setSubmitted(true);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-2xl">
//       <h1 className="text-3xl font-bold mb-6">Report an Issue</h1>
      
//       {submitted ? (
//         <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-6 rounded-xl text-center">
//           <h2 className="text-xl font-semibold mb-2">Report Submitted</h2>
//           <p>Thank you for bringing this to our attention.</p>
//           <p>Our team will review your report and take appropriate action.</p>
//         </div>
//       ) : (
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
//           <div className="p-6">
//             <div className="flex items-start mb-6">
//               <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full mr-3">
//                 <FiAlertTriangle className="text-red-500 dark:text-red-400" />
//               </div>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Please use this form to report violations of our Community Guidelines. 
//                 False reports may result in account restrictions.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="reportType" className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
//                   Type of Report
//                 </label>
//                 <select
//                   id="reportType"
//                   value={reportType}
//                   onChange={(e) => setReportType(e.target.value)}
//                   className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent"
//                   required
//                 >
//                   <option value="">Select an option</option>
//                   {reportOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="description" className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
//                   Detailed Description
//                 </label>
//                 <textarea
//                   id="description"
//                   rows="4"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent"
//                   placeholder="Please provide as much detail as possible..."
//                   required
//                 ></textarea>
//               </div>

//               <div className="mb-4">
//                 <label className="flex items-start">
//                   <input
//                     type="checkbox"
//                     className="mt-1 mr-2"
//                     required
//                   />
//                   <span className="text-gray-600 dark:text-gray-400">
//                     I confirm that this report is accurate and submitted in good faith.
//                   </span>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 disabled={!reportType || !description.trim()}
//                 className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
//               >
//                 <FiSend className="mr-2" />
//                 Submit Report
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Report;

// pages/Report.jsx
import { useState } from 'react';
import { FiFlag, FiAlertTriangle } from 'react-icons/fi';

const Report = () => {
  const [reportType, setReportType] = useState('content');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log({ reportType, details });
    setSubmitted(true);
    setDetails('');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <FiFlag className="mr-2" /> Report
      </h1>
      
      {submitted ? (
        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
          Thank you for your report. We've received it and will review it shortly.
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 p-4 rounded-lg mb-6 flex items-start">
              <FiAlertTriangle className="mt-1 mr-2 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Important</h3>
                <p className="text-sm">
                  Please only use this form for legitimate reports. False reports may result in account restrictions.
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="reportType" className="block mb-2 font-medium">
                  What are you reporting?
                </label>
                <select
                  id="reportType"
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                >
                  <option value="content">Inappropriate content</option>
                  <option value="copyright">Copyright infringement</option>
                  <option value="harassment">Harassment or bullying</option>
                  <option value="privacy">Privacy violation</option>
                  <option value="spam">Spam or misleading content</option>
                  <option value="other">Other issue</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="details" className="block mb-2 font-medium">
                  Details
                </label>
                <textarea
                  id="details"
                  rows="5"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700"
                  placeholder="Please provide as much detail as possible..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center"
              >
                <FiFlag className="mr-2" /> Submit Report
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;