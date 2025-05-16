import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiUser, FiBell, FiLock, FiGlobe, FiMoon, FiSun } from 'react-icons/fi';

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');

  // New state for user editable fields
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('********'); // It's common to show placeholders or masked inputs for passwords
  const [userName, setUserName] = useState('user1'); // Assuming you want to add a name field

  // State to manage edit mode for email and password
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false); // For the new name field

  // Handlers for saving changes (you'd typically send these to a backend)
  const handleSaveEmail = () => {
    // In a real application, you'd send 'email' to your backend for update
    console.log('Saving new email:', email);
    setIsEditingEmail(false);
    // Add logic here to display success/error messages to the user
  };

  const handleSavePassword = () => {
    // In a real application, you'd send 'password' to your backend for update
    console.log('Saving new password:', password);
    setIsEditingPassword(false);
    // Add logic here to display success/error messages to the user
  };

  const handleSaveName = () => {
    // In a real application, you'd send 'userName' to your backend for update
    console.log('Saving new name:', userName);
    setIsEditingName(false);
    // Add logic here to display success/error messages to the user
  };


  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FiUser className="mr-2" /> Account Settings
          </h2>
          <div className="space-y-4">
            {/* Name Field */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Your Name</h3>
                {isEditingName ? (
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {userName}
                  </p>
                )}
              </div>
              {isEditingName ? (
                <button
                  onClick={handleSaveName}
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Edit
                </button>
              )}
            </div>

            {/* Email Field */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email address</h3>
                {isEditingEmail ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {email}
                  </p>
                )}
              </div>
              {isEditingEmail ? (
                <button
                  onClick={handleSaveEmail}
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingEmail(true)}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Change
                </button>
              )}
            </div>

            {/* Password Field */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Password</h3>
                {isEditingPassword ? (
                  <input
                    type="password" // Use type="password" for security
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    ******** {/* Always display masked password */}
                  </p>
                )}
              </div>
              {isEditingPassword ? (
                <button
                  onClick={handleSavePassword}
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingPassword(true)}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Change
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FiBell className="mr-2" /> Notifications
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email notifications</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Receive updates via email
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>

        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FiGlobe className="mr-2" /> Language & Region
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="language" className="block mb-2 font-medium">
                Language
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            {theme === 'dark' ? <FiMoon className="mr-2" /> : <FiSun className="mr-2" />}
            Appearance
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Dark mode</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {theme === 'dark' ? 'Currently in dark mode' : 'Currently in light mode'}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;