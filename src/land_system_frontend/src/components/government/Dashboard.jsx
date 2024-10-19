import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,  // Import the CategoryScale
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for metrics and recent activities
const metricsData = {
  totalTitleRegistrations: 120,
  pendingApprovals: 35,
  ownershipDisputes: 10,
  totalLandTransfers: 50,
  totalGovernmentUsers: 5,
  totalLandParcels: 200,
};

const recentActivities = [
  { id: 1, action: 'Approved title registration for land ID 123', date: '2024-10-10' },
  { id: 2, action: 'Pending approval for land ID 456', date: '2024-10-09' },
  { id: 3, action: 'Resolved ownership dispute for land ID 789', date: '2024-10-08' },
  { id: 4, action: 'Registered new land title ID 321', date: '2024-10-07' },
  { id: 5, action: 'Reviewed transfer request for land ID 654', date: '2024-10-06' },
];

const pendingApprovalsData = [
  { id: 1, landID: '123', type: 'Title Registration', status: 'Pending' },
  { id: 2, landID: '456', type: 'Land Transfer', status: 'Pending' },
  { id: 3, landID: '789', type: 'Ownership Dispute', status: 'Pending' },
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Title Registrations',
      data: [20, 30, 25, 35, 50, 45, 60],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const Dashboard = () => {
  return (
    <div className="government-dashboard p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Government Dashboard</h2>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {Object.entries(metricsData).map(([key, value]) => (
          <div key={key} className="metric bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </h3>
            <p className="text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="mb-6 h-64">
        <h3 className="text-xl font-semibold mb-2">Monthly Title Registrations</h3>
        <Line data={chartData} options={chartOptions} />
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

      {/* Pending Approvals Table Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Pending Approvals</h3>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Land ID</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingApprovalsData.map(item => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{item.landID}</td>
                <td className="border px-4 py-2">{item.type}</td>
                <td className="border px-4 py-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
