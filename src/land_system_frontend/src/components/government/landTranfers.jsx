import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

// Sample data for land transfer approvals
const landTransferData = [
  {
    id: 1,
    transferor: 'Alice Johnson',
    transferee: 'Bob Smith',
    landID: 'LID123',
    dateRequested: '2024-10-01',
    status: 'Pending',
  },
  {
    id: 2,
    transferor: 'John Doe',
    transferee: 'Lisa White',
    landID: 'LID456',
    dateRequested: '2024-10-03',
    status: 'Pending',
  },
  {
    id: 3,
    transferor: 'Mark Wilson',
    transferee: 'Sara Brown',
    landID: 'LID789',
    dateRequested: '2024-10-05',
    status: 'Pending',
  },
  // Add more sample data as needed
];

const LandTransferApprovals = () => {
  const [transfers, setTransfers] = useState(landTransferData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransfers, setFilteredTransfers] = useState(transfers);

  useEffect(() => {
    setFilteredTransfers(
      transfers.filter((transfer) =>
        transfer.transferor.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, transfers]);

  const handleApproval = (id) => {
    setTransfers((prev) => prev.filter((transfer) => transfer.id !== id));
    alert(`Transfer for Land ID: ${id} approved.`);
  };

  const handleRejection = (id) => {
    setTransfers((prev) => prev.filter((transfer) => transfer.id !== id));
    alert(`Transfer for Land ID: ${id} rejected.`);
  };

  return (
    <div className="land-transfer-approvals p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Land Transfer Approvals</h2>
      
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search by Transferor..."
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Transfer Table */}
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Transferor</th>
            <th className="border px-4 py-2">Transferee</th>
            <th className="border px-4 py-2">Land ID</th>
            <th className="border px-4 py-2">Date Requested</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransfers.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center border px-4 py-2">No transfers found</td>
            </tr>
          ) : (
            filteredTransfers.map((transfer) => (
              <tr key={transfer.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{transfer.transferor}</td>
                <td className="border px-4 py-2">{transfer.transferee}</td>
                <td className="border px-4 py-2">{transfer.landID}</td>
                <td className="border px-4 py-2">{transfer.dateRequested}</td>
                <td className="border px-4 py-2">{transfer.status}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded mr-2"
                    onClick={() => handleApproval(transfer.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleRejection(transfer.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

     
    </div>
  );
};

export default LandTransferApprovals;
