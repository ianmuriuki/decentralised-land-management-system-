import React, { useState } from 'react';
import { FaFilter, FaSort, FaInfoCircle } from 'react-icons/fa';

// Sample data for ownership disputes
const disputesData = [
  {
    id: 1,
    claimant: 'John Doe',
    respondent: 'Alice Smith',
    landID: 'LID123',
    disputeType: 'Boundary Dispute',
    dateFiled: '2024-09-15',
    status: 'Pending',
  },
  {
    id: 2,
    claimant: 'Mary Johnson',
    respondent: 'Bob White',
    landID: 'LID456',
    disputeType: 'Ownership Dispute',
    dateFiled: '2024-10-01',
    status: 'Resolved',
  },
  {
    id: 3,
    claimant: 'Jane Lee',
    respondent: 'Tom Wilson',
    landID: 'LID789',
    disputeType: 'Usage Dispute',
    dateFiled: '2024-10-05',
    status: 'In Progress',
  },
  // Add more sample data as needed
];

const OwnershipDisputes = () => {
  const [disputes, setDisputes] = useState(disputesData);
  const [selectedDispute, setSelectedDispute] = useState(null);

  const viewDetails = (dispute) => {
    setSelectedDispute(dispute);
  };

  const closeDetails = () => {
    setSelectedDispute(null);
  };

  return (
    <div className="ownership-disputes p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Ownership Disputes</h2>

      {/* Filter and Sort Buttons */}
      <div className="mb-4 flex justify-between">
        <button className="flex items-center bg-gray-200 px-4 py-2 rounded">
          <FaFilter className="mr-2" /> Filter
        </button>
        <button className="flex items-center bg-gray-200 px-4 py-2 rounded">
          <FaSort className="mr-2" /> Sort by Date
        </button>
      </div>

      {/* Dispute Table */}
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Claimant</th>
            <th className="border px-4 py-2">Respondent</th>
            <th className="border px-4 py-2">Land ID</th>
            <th className="border px-4 py-2">Dispute Type</th>
            <th className="border px-4 py-2">Date Filed</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {disputes.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center border px-4 py-2">No disputes found</td>
            </tr>
          ) : (
            disputes.map((dispute) => (
              <tr key={dispute.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{dispute.claimant}</td>
                <td className="border px-4 py-2">{dispute.respondent}</td>
                <td className="border px-4 py-2">{dispute.landID}</td>
                <td className="border px-4 py-2">{dispute.disputeType}</td>
                <td className="border px-4 py-2">{dispute.dateFiled}</td>
                <td className={`border px-4 py-2 ${dispute.status === 'Resolved' ? 'text-green-600' : 'text-red-600'}`}>{dispute.status}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                    onClick={() => viewDetails(dispute)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Dispute Details Modal */}
      {selectedDispute && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <h3 className="text-xl font-bold mb-4">Dispute Details</h3>
            <p><strong>Claimant:</strong> {selectedDispute.claimant}</p>
            <p><strong>Respondent:</strong> {selectedDispute.respondent}</p>
            <p><strong>Land ID:</strong> {selectedDispute.landID}</p>
            <p><strong>Dispute Type:</strong> {selectedDispute.disputeType}</p>
            <p><strong>Date Filed:</strong> {selectedDispute.dateFiled}</p>
            <p><strong>Status:</strong> {selectedDispute.status}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
              onClick={closeDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnershipDisputes;
