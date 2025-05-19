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