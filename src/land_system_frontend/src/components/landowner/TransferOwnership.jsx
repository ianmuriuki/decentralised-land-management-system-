import React, { useState } from 'react';

// Sample static data for land titles
const landTitles = [
  { id: 1, title: 'Title 1', owner: 'Owner A' },
  { id: 2, title: 'Title 2', owner: 'Owner B' },
  { id: 3, title: 'Title 3', owner: 'Owner C' },
];

const TransferOwnership = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [newOwner, setNewOwner] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    console.log('Transferring Ownership:', { selectedTitle, newOwner });
    // Reset the form
    setSelectedTitle('');
    setNewOwner('');
  };

  return (
    <div className="transfer-ownership p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Transfer Ownership</h2>
      <form onSubmit={handleTransfer} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Select Land Title</label>
          <select
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="" disabled>Select a title</option>
            {landTitles.map((title) => (
              <option key={title.id} value={title.title}>
                {title.title} - {title.owner}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">New Owner</label>
          <input
            type="text"
            value={newOwner}
            onChange={(e) => setNewOwner(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Transfer Ownership
        </button>
      </form>
    </div>
  );
};

export default TransferOwnership;
