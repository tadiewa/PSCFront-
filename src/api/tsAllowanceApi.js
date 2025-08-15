import axios from "axios";

const API_BASE_URL = "http://localhost:9076/api";

export const submitApplication = async (application) => {
  return await axios.post(`${API_BASE_URL}/applications`, application);
};

export const getApplicationsByEmployee = async (employeeId) => {
  return await axios.get(`${API_BASE_URL}/applications/employee/${employeeId}`);
};

export const getPendingApplications = async () => {
  return await axios.get(`${API_BASE_URL}/applications/pending`);
};



export const rejectApplication = async (applicationId, comment) => {
  return await axios.put(`${API_BASE_URL}/applications/${applicationId}/decision`, { comment });
};
