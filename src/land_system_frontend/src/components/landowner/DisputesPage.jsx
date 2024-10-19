import React, { useState } from 'react';

// Sample static data for disputes
const claimsData = [
  { id: 1, title: 'Title 1', owner: 'Owner A', dispute: 'Claimed by Owner B' },
  { id: 2, title: 'Title 2', owner: 'Owner B', dispute: 'Claimed by Owner C' },
  { id: 3, title: 'Title 3', owner: 'Owner C', dispute: 'Claimed by Owner A' },
];

const DisputeClaims = () => {
  const [selectedClaim, setSelectedClaim] = useState('');
  const [disputeMessage, setDisputeMessage] = useState('');

  const handleDispute = (e) => {
    e.preventDefault();
    console.log('Disputing Claim:', { selectedClaim, disputeMessage });
    // Reset the form
    setSelectedClaim('');
    setDisputeMessage('');
  };

  return (
    <div className="dispute-claims p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dispute Claims</h2>
      <form onSubmit={handleDispute} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Select Claim</label>
          <select
            value={selectedClaim}
            onChange={(e) => setSelectedClaim(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="" disabled>Select a claim</option>
            {claimsData.map((data) => (
              <option key={data.id} value={data.title}>
                {data.title} - {data.dispute}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Dispute Message</label>
          <textarea
            value={disputeMessage}
            onChange={(e) => setDisputeMessage(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded w-full"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Dispute
        </button>
      </form>
    </div>
  );
};

export default DisputeClaims;
