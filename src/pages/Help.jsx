// pages/Help.jsx
import FaqItem from '../components/FaqItem';

const Help = () => {
  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'To create an account, click on the "Sign Up" button in the top right corner and follow the instructions to register with your email address.'
    },
    {
      question: 'How can I reset my password?',
      answer: 'If you forgot your password, click on "Forgot Password" on the login page. You\'ll receive an email with instructions to reset your password.'
    },
    {
      question: 'How do I upload a video?',
      answer: 'After logging in, click on the upload button (usually a camera or plus icon) and follow the steps to select your video file, add details, and publish it.'
    },
    {
      question: 'Why is my video not playing?',
      answer: 'This could be due to several reasons: slow internet connection, unsupported video format, or browser issues. Try refreshing the page or using a different browser.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our support team through the "Contact Us" form in the Help section or by emailing support@vidflow.com. We typically respond within 24 hours.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Help Center</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Still need help?</h2>
          <p className="mb-4">Contact our support team for personalized assistance.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
              Live Chat
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
              Email Support
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
              Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;