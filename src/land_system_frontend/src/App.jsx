import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import DashboardLayout from './components/common/DashboardLayout';
import Dashboard from "./components/government/Dashboard";
import ApproveTitleRegistrations from "./components/government/ApproveTitleRegistration";
import LandTransferApprovals from "./components/government/landTranfers";
import OwnershipDisputes from "./components/government/DisputePage";
import AuditLog from "./components/government/Audit";
import LandownerDashboard from "./components/landowner/Dashboard";
import MyLandTitles from './components/landowner/LandTitle';
import RegisterNewTitle from "./components/landowner/Register";
import DisputeClaims from './components/landowner/DisputesPage';
import TransferOwnership from './components/landowner/TransferOwnership';
import VerifyTitleOwnership from './components/landowner/Verify';

const App = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply the theme class to the body
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('bg-gray-900', 'text-white');
      body.classList.remove('bg-white', 'text-black');
    } else {
      body.classList.add('bg-white', 'text-black');
      body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Pass isDarkMode and setIsDarkMode as props to DashboardLayout */}
        <Route 
          path="/government/*" 
          element={
            <DashboardLayout 
              isDarkMode={isDarkMode} 
              setIsDarkMode={setIsDarkMode} 
            />
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="approve-title-registrations" element={<ApproveTitleRegistrations />} />
          <Route path="land-transfer-approvals" element={<LandTransferApprovals />} />
          <Route path="ownership-disputes" element={<OwnershipDisputes />} />
          <Route path="audit-log" element={<AuditLog />} />
        </Route>
        {/* Same for landowner routes */}
        <Route 
          path="/landowner/*" 
          element={
            <DashboardLayout 
              isDarkMode={isDarkMode} 
              setIsDarkMode={setIsDarkMode} 
            />
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<LandownerDashboard />} />
          <Route path="my-land-titles" element={<MyLandTitles />} />
          <Route path="register-new-title" element={<RegisterNewTitle />} />
          <Route path="transfer-ownership" element={<TransferOwnership />} />
          <Route path="verify-title-ownership" element={<VerifyTitleOwnership />} />
          <Route path="dispute-claims" element={<DisputeClaims />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
