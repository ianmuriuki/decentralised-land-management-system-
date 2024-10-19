import React from 'react';

// Sample static data for land titles
const landTitlesData = [
  { id: 1, title: 'Land Title 123', area: '2 acres', location: 'Nairobi', status: 'Registered' },
  { id: 2, title: 'Land Title 456', area: '1.5 acres', location: 'Mombasa', status: 'Pending' },
  { id: 3, title: 'Land Title 789', area: '3 acres', location: 'Kisumu', status: 'Registered' },
  { id: 4, title: 'Land Title 321', area: '4 acres', location: 'Eldoret', status: 'Registered' },
  { id: 5, title: 'Land Title 654', area: '0.5 acres', location: 'Nakuru', status: 'Pending' },
];

const MyLandTitles = () => {
  return (
    <div className="my-land-titles p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Land Titles</h2>
      
      {/* Table of land titles */}
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Area</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {landTitlesData.map(landTitle => (
            <tr key={landTitle.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{landTitle.title}</td>
              <td className="border px-4 py-2">{landTitle.area}</td>
              <td className="border px-4 py-2">{landTitle.location}</td>
              <td className="border px-4 py-2">{landTitle.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyLandTitles;
