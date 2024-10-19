import React from 'react';
import { FaBell, FaUserCircle, FaSignOutAlt, FaBars, FaSun, FaMoon, FaTimes } from 'react-icons/fa';

const Header = ({ toggleSidebar, isSidebarOpen, isDarkMode, setIsDarkMode }) => {
  // Toggle function to switch themes
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <header className={`header p-4 flex justify-between items-center ${isDarkMode ? 'bg-gray-800' : 'bg-blue-800'} text-white`}>
      <div className="header-title">
        <h1 className="text-2xl font-bold">Land Management System</h1>
      </div>
      <div className="header-actions flex items-center space-x-4">
        {/* Toggle Sidebar Button (for mobile) */}
        <button className="md:hidden" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isSidebarOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="flex items-center p-2 hover:bg-blue-700 rounded" 
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
        </button>

        {/* Show/hide icons based on screen size */}
        <div className="hidden md:flex items-center space-x-4">
          <FaBell className="text-lg" />
          <FaUserCircle className="text-2xl" />
          <button className="flex items-center space-x-1">
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
