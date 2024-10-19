import React from 'react';

const landownerData = {
  totalOwnedLandParcels: 8,
  pendingTransferRequests: 2,
  landTitleDisputes: 1,
};

const recentActivities = [
  { id: 1, action: 'Requested transfer for land ID 987', date: '2024-10-12' },
  { id: 2, action: 'Submitted ownership dispute for land ID 654', date: '2024-10-11' },
  { id: 3, action: 'Updated land details for land ID 321', date: '2024-10-10' },
];

const LandownerDashboard = () => {
  return (
    <div className="landowner-dashboard p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Landowner Dashboard</h2>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="metric bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">TOTAL OWNED LAND PARCELS</h3>
          <p className="text-3xl font-bold">{landownerData.totalOwnedLandParcels}</p>
        </div>
        <div className="metric bg-yellow-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">PENDING TRANSFER REQUESTS</h3>
          <p className="text-3xl font-bold">{landownerData.pendingTransferRequests}</p>
        </div>
        <div className="metric bg-red-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">LAND TITLE DISPUTES</h3>
          <p className="text-3xl font-bold">{landownerData.landTitleDisputes}</p>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Recent Activities</h3>
        <ul className="list-disc pl-5 mb-4">
          {recentActivities.map(activity => (
            <li key={activity.id} className="mb-2">
              <span className="font-medium">{activity.action}</span> - <span className="text-gray-500">{activity.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandownerDashboard;
