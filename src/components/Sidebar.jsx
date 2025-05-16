import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHome,
  FiCompass,
  FiSave,
  FiPlay,
  FiMusic,
  FiFilm,
  FiRadio,
  FiSettings,
  FiHeart,
  FiHelpCircle,
  FiMessageSquare,
  FiFlag,
  FiUsers
} from 'react-icons/fi';

const Sidebar = ({ sidebarOpen }) => {
  const menuLinks = [
    { to: '/', icon: <FiHome />, text: 'Home' },
    { to: '/trending', icon: <FiCompass />, text: 'Trending' },
    { to: '/gaming', icon: <FiPlay />, text: 'Gaming' },
    { to: '/music', icon: <FiMusic />, text: 'Music' },
    { to: '/kids', icon: <FiUsers />, text: 'Kids' },
    { to: '/saved', icon: <FiSave />, text: 'Saved' },
    { to: '/liked', icon: <FiHeart />, text: 'Liked' },
  ];

  const settingsLinks = [
    { to: '/settings', icon: <FiSettings />, text: 'Settings' },
    { to: '/help', icon: <FiHelpCircle />, text: 'Help' },
    { to: '/feedback', icon: <FiMessageSquare />, text: 'Feedback' },
    { to: '/report', icon: <FiFlag />, text: 'Report' },
  ];

  // Define a top offset. Tailwind's 'top-16' typically means 4rem (64px)
  // You can adjust this value (e.g., 'top-20' for 5rem, 'top-24' for 6rem)
  const topOffset = 'top-24';
  const heightClass = 'h-[calc(100vh-6rem)]'; // Adjust height based on top-16 (4rem)

  return (
    <motion.aside
      initial={{ width: sidebarOpen ? '240px' : '80px' }}
      animate={{ width: sidebarOpen ? '240px' : '80px' }}
      transition={{ duration: 0.3 }}
      className={`fixed ${topOffset} ${heightClass} bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg z-40 overflow-hidden flex-shrink-0 flex flex-col`}
    >
      <div className="flex-1 overflow-y-auto py-4 pb-8">
        <div className="px-4">
          {/* MENU Section */}
          {sidebarOpen && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-semibold text-indigo-500 dark:text-purple-400 uppercase tracking-wider mb-2 px-2"
            >
              Menu
            </motion.h2>
          )}
          <ul className="space-y-1">
            {menuLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-xl mx-2 transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 text-indigo-600 dark:text-purple-400 shadow-sm'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`
                  }
                >
                  <span className={`text-xl ${sidebarOpen ? 'mr-3' : 'mx-auto'}`}>
                    {link.icon}
                  </span>
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-medium"
                    >
                      {link.text}
                    </motion.span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* SETTINGS Section */}
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6"
            >
              <h2 className="text-xs font-semibold text-indigo-500 dark:text-purple-400 uppercase tracking-wider mb-2 px-2">
                Settings
              </h2>
              <ul className="space-y-1">
                {settingsLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center p-3 rounded-xl mx-2 transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 text-indigo-600 dark:text-purple-400 shadow-sm'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`
                      }
                    >
                      <span className={`text-xl ${sidebarOpen ? 'mr-3' : 'mx-auto'}`}>
                        {link.icon}
                      </span>
                      {sidebarOpen && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="font-medium"
                        >
                          {link.text}
                        </motion.span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} vidflow</p>
          <p>All Rights Reserved</p>
        </motion.div>
      )}
    </motion.aside>
  );
};

export default Sidebar;