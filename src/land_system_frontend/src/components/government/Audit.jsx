import React from 'react';

// Sample data for audit logs
const auditLogData = [
  {
    id: 1,
    action: 'Title Registered',
    user: 'Admin User',
    timestamp: '2024-10-10 08:30 AM',
    details: 'Registered title for land ID LID123.',
  },
  {
    id: 2,
    action: 'Ownership Dispute Updated',
    user: 'Jane Doe',
    timestamp: '2024-10-11 09:15 AM',
    details: 'Updated dispute status for LID456 to "In Progress".',
  },
  {
    id: 3,
    action: 'Land Transfer Approved',
    user: 'Admin User',
    timestamp: '2024-10-12 10:45 AM',
    details: 'Approved land transfer for land ID LID789 from John Smith to Mary Johnson.',
  },
  {
    id: 4,
    action: 'Title Registration Approval',
    user: 'Emily Davis',
    timestamp: '2024-10-13 11:30 AM',
    details: 'Approved title registration for land ID LID321.',
  },
  {
    id: 5,
    action: 'Audit Log Accessed',
    user: 'Admin User',
    timestamp: '2024-10-14 01:00 PM',
    details: 'Accessed audit logs for review.',
  },
  {
    id: 6,
    action: 'Dispute Resolved',
    user: 'Mark Johnson',
    timestamp: '2024-10-15 02:20 PM',
    details: 'Resolved ownership dispute for land ID LID456.',
  },
  // Add more static log entries as needed
];

const AuditLog = () => {
  return (
    <div className="audit-log p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Audit Log</h2>

      {/* Audit Log Table */}
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Action</th>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Timestamp</th>
            <th className="border px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {auditLogData.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center border px-4 py-2">No audit logs found</td>
            </tr>
          ) : (
            auditLogData.map((log) => (
              <tr key={log.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{log.action}</td>
                <td className="border px-4 py-2">{log.user}</td>
                <td className="border px-4 py-2">{log.timestamp}</td>
                <td className="border px-4 py-2">{log.details}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLog;
