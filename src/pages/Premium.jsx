// pages/Premium.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiAward, FiZap, FiShield } from 'react-icons/fi';

const Premium = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [expandedPlan, setExpandedPlan] = useState(null);

  const plans = {
    monthly: {
      name: 'Monthly',
      price: '$9.99/month',
      originalPrice: '$11.99',
      discount: '17% off',
      features: [
        'Ad-free experience',
        'Background play',
        'Download videos',
        'Premium content',
        'Early access to new features'
      ]
    },
    quarterly: {
      name: 'Quarterly',
      price: '$24.99/3 months',
      originalPrice: '$35.97',
      discount: '30% off',
      features: [
        'Everything in Monthly',
        'Priority customer support',
        'Exclusive quarterly content',
        'Custom app icons'
      ]
    },
    yearly: {
      name: 'Yearly',
      price: '$79.99/year',
      originalPrice: '$143.88',
      discount: '45% off',
      features: [
        'Everything in Quarterly',
        '4K video quality',
        'Unlimited downloads',
        'Exclusive yearly badge',
        'VIP customer support'
      ]
    }
  };

  const benefits = [
    {
      icon: <FiStar className="text-2xl text-yellow-500" />,
      title: 'Exclusive Content',
      description: 'Access premium-only videos and early releases'
    },
    {
      icon: <FiZap className="text-2xl text-blue-500" />,
      title: 'Background Play',
      description: 'Keep listening when you switch apps or lock your device'
    },
    {
      icon: <FiShield className="text-2xl text-green-500" />,
      title: 'Ad-Free Experience',
      description: 'Watch without interruptions from ads'
    },
    {
      icon: <FiAward className="text-2xl text-purple-500" />,
      title: 'Premium Badges',
      description: 'Show off your premium status with exclusive badges'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          vidflow Premium
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Elevate your experience with premium features and exclusive content
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Go Premium?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100 dark:bg-gray-700 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-center space-x-2 mb-8">
          {Object.keys(plans).map((planKey) => (
            <button
              key={planKey}
              onClick={() => setActiveTab(planKey)}
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === planKey
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {plans[planKey].name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(plans).map(([planKey, plan]) => (
            <motion.div
              key={planKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeTab === planKey ? 1 : 0.7,
                y: activeTab === planKey ? 0 : 10,
                scale: activeTab === planKey ? 1.02 : 0.98
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedPlan(expandedPlan === planKey ? null : planKey)}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all ${
                activeTab === planKey ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  {plan.discount && (
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                      {plan.discount}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold">{plan.price}</p>
                  {plan.originalPrice && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      {plan.originalPrice}
                    </p>
                  )}
                </div>
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                  Get {plan.name}
                </button>
              </div>
              <div className={`px-6 pb-6 ${expandedPlan === planKey ? 'block' : 'hidden'}`}>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: 'Can I cancel my subscription anytime?',
              answer: 'Yes, you can cancel your subscription at any time and continue to enjoy the benefits until the end of your billing period.'
            },
            {
              question: 'Will I lose access if I cancel?',
              answer: 'No, you will retain access to Premium features until the end of your current billing cycle.'
            },
            {
              question: 'Do you offer family plans?',
              answer: 'Currently we don\'t offer family plans, but we\'re working on this feature for future releases.'
            },
            {
              question: 'Can I switch between plans?',
              answer: 'Yes, you can upgrade or downgrade your plan at any time. The changes will take effect at your next billing date.'
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premium;