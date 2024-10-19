import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaLandmark, FaRegUser, FaFileAlt, FaCheckCircle, FaUsers, FaHome, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isGovernmentRoute = location.pathname.startsWith('/government');
  const isLandownerRoute = location.pathname.startsWith('/landowner');

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens, etc.)
    navigate('/');
  };

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <aside className={`fixed md:static inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
      </div>
      <nav className="p-4">
        {isGovernmentRoute && (
          <ul>
            <li>
              <NavLink to="/government/dashboard" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaLandmark className="mr-3" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/government/approve-title-registrations" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaCheckCircle className="mr-3" />
                Approve Title Registrations
              </NavLink>
            </li>
            <li>
              <NavLink to="/government/land-transfer-approvals" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaFileAlt className="mr-3" />
                Land Transfer Approvals
              </NavLink>
            </li>
            <li>
              <NavLink to="/government/ownership-disputes" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaRegUser className="mr-3" />
                Ownership Disputes
              </NavLink>
            </li>
            <li>
              <NavLink to="/government/audit-log" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaRegUser className="mr-3" />
                Audit Log
              </NavLink>
            </li>
          </ul>
        )}
        {isLandownerRoute && (
          <ul>
            <li>
              <NavLink to="/landowner/dashboard" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaLandmark className="mr-3" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/landowner/my-land-titles" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaHome className="mr-3" /> {/* Home icon */}
                My Land Titles
              </NavLink>
            </li>
            <li>
              <NavLink to="/landowner/register-new-title" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaFileAlt className="mr-3" />
                Register New Title
              </NavLink>
            </li>
            <li>
              <NavLink to="/landowner/transfer-ownership" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaUsers className="mr-3" />
                Transfer Ownership
              </NavLink>
            </li>
            <li>
              <NavLink to="/landowner/verify-title-ownership" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaCheckCircle className="mr-3" />
                Verify Title Ownership
              </NavLink>
            </li>
            <li>
              <NavLink to="/landowner/dispute-claims" onClick={handleLinkClick} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                <FaRegUser className="mr-3" />
                Dispute Claims
              </NavLink>
            </li>
          </ul>
        )}
        <button onClick={handleLogout} className="flex items-center p-2 hover:bg-gray-700 rounded-md mt-4">
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
