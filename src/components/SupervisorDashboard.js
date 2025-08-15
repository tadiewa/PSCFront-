import React, { useEffect, useState } from "react";
import { getPendingApplications, approveApplication, rejectApplication } from "../api/tsAllowanceApi";

const SupervisorDashboard = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const res = await getPendingApplications();
    setApplications(res.data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleApprove = async (id) => {
    await approveApplication(id);
    fetchApplications();
  };

  const handleReject = async (id) => {
    const comment = prompt("Enter reason for rejection:");
    if (comment) {
      await rejectApplication(id, comment);
      fetchApplications();
    }
  };

  return (
    <div>
      <h1>Supervisor Dashboard</h1>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.employeeId}: {app.departureDate} to {app.arrivalDate} - {app.type}
            <button onClick={() => handleApprove(app.id)}>Approve</button>
            <button onClick={() => handleReject(app.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupervisorDashboard;
