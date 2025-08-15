import React, { useEffect, useState } from "react";
import { getApplicationsByEmployee } from "../api/tsAllowanceApi";

const ApplicationStatus = ({ employeeId }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await getApplicationsByEmployee(employeeId);
        setApplications(res.data);
      } catch (err) {
        console.error("Error fetching applications:", err);
      }
    };

    fetchApplications();
  }, [employeeId]);

  return (
    <div>
      <h2>Application Status</h2>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>T&S Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.departureDate}</td>
                <td>{app.arrivalDate}</td>
                <td>{app.tsType}</td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApplicationStatus;
