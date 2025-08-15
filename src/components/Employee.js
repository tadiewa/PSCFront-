import React, { useEffect, useState } from "react";
import { getApplicationsByEmployee } from "../api/tsAllowanceApi";
import SubmitApplicationForm from "./SubmitApplicationForm";

const EmployeeDashboard = ({ employeeId }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await getApplicationsByEmployee(employeeId);
      setApplications(res.data);
    };
    fetchApplications();
  }, [employeeId]);

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <SubmitApplicationForm employeeId={employeeId} />
      <h2>Your Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.departureDate} to {app.arrivalDate} - Status: {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDashboard;
