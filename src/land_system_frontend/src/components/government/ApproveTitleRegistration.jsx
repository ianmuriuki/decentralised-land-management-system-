import React, { useState } from 'react';

// Sample data for title registration approvals
const titleRegistrationData = [
  { id: 1, applicantName: 'John Doe', landID: 'TID123', dateSubmitted: '2024-10-01', status: 'Pending' },
  { id: 2, applicantName: 'Jane Smith', landID: 'TID456', dateSubmitted: '2024-10-05', status: 'Pending' },
  { id: 3, applicantName: 'Emily Johnson', landID: 'TID789', dateSubmitted: '2024-10-07', status: 'Pending' },
  { id: 4, applicantName: 'Michael Brown', landID: 'TID321', dateSubmitted: '2024-10-09', status: 'Pending' },
];

const ApproveTitleRegistrations = () => {
  const [registrations, setRegistrations] = useState(titleRegistrationData);

  const handleApproval = (id) => {
    // Logic to approve registration (update state or API call)
    setRegistrations(prev => prev.filter(reg => reg.id !== id)); // Remove approved registration from the list
    alert(`Registration for Land ID: ${id} approved.`);
  };

  const handleRejection = (id) => {
    // Logic to reject registration (update state or API call)
    setRegistrations(prev => prev.filter(reg => reg.id !== id)); // Remove rejected registration from the list
    alert(`Registration for Land ID: ${id} rejected.`);
  };

  return (
    <div className="approve-title-registrations p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Approve Title Registrations</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Applicant Name</th>
            <th className="border px-4 py-2">Land ID</th>
            <th className="border px-4 py-2">Date Submitted</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(reg => (
            <tr key={reg.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{reg.applicantName}</td>
              <td className="border px-4 py-2">{reg.landID}</td>
              <td className="border px-4 py-2">{reg.dateSubmitted}</td>
              <td className="border px-4 py-2">{reg.status}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-500 text-white px-4 py-1 rounded mr-2"
                  onClick={() => handleApproval(reg.id)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded"
                  onClick={() => handleRejection(reg.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveTitleRegistrations;
