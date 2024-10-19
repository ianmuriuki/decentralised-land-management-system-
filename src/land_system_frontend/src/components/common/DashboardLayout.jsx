import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet to render child routes
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = ({ isDarkMode, setIsDarkMode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-layout flex min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-all duration-300`}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />

        {/* Dynamic Content */}
        <div className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} min-h-screen transition-all duration-300`}>
          <Outlet /> {/* This renders the specific dashboard content */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
