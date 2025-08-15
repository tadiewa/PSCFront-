import React from "react";
import EmployeeDashboard from "./components/EmployeeDashboard";
import SupervisorDashboard from "./components/SupervisorDashboard";

function App() {
  const userRole = "employee"; // or "supervisor"
  const employeeId = 1;

  return (
    <div>
      {userRole === "employee" ? <EmployeeDashboard employeeId={employeeId} /> : <SupervisorDashboard />}
    </div>
  );
}

export default App;
