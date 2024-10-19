import React, { useState } from 'react';

// Sample static data for ownership verification
const ownershipData = [
  { id: 1, title: 'Title 1', owner: 'Owner A', status: 'Verified' },
  { id: 2, title: 'Title 2', owner: 'Owner B', status: 'Pending' },
  { id: 3, title: 'Title 3', owner: 'Owner C', status: 'Verified' },
];

const VerifyTitleOwnership = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();
    const title = ownershipData.find((data) => data.title === selectedTitle);
    if (title) {
      setVerificationResult(title.status);
    } else {
      setVerificationResult('Title not found.');
    }
  };

  return (
    <div className="verify-title-ownership p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Verify Title Ownership</h2>
      <form onSubmit={handleVerify} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Select Land Title</label>
          <select
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="" disabled>Select a title</option>
            {ownershipData.map((data) => (
              <option key={data.id} value={data.title}>
                {data.title} - {data.owner}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Verify Ownership
        </button>
      </form>
      {verificationResult && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Verification Result:</h3>
          <p className={verificationResult === 'Verified' ? 'text-green-500' : 'text-red-500'}>
            {verificationResult}
          </p>
        </div>
      )}
    </div>
  );
};

export default VerifyTitleOwnership;
