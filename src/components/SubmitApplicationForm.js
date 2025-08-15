import React, { useState } from "react";
import { submitApplication } from "../api/tsAllowanceApi";

const SubmitApplicationForm = ({ employeeId }) => {
  const [formData, setFormData] = useState({
    departureDate: "",
    departureTime: "",
    departureCity: "",
    arrivalDate: "",
    arrivalTime: "",
    arrivalCity: "",
    type: "Unapproved"
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitApplication({ ...formData, employeeId });
      alert("Application submitted successfully!");
    } catch (err) {
      alert("Error submitting application");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit T&S Allowance Application</h2>
      <input type="date" name="departureDate" onChange={handleChange} required/>
      <input type="time" name="departureTime" onChange={handleChange} required/>
      <input type="text" name="departureCity" placeholder="Departure City" onChange={handleChange} required/>
      <input type="date" name="arrivalDate" onChange={handleChange} required/>
      <input type="time" name="arrivalTime" onChange={handleChange} required/>
      <input type="text" name="arrivalCity" placeholder="Arrival City" onChange={handleChange} required/>
      <select name="type" onChange={handleChange}>
        <option value="Unapproved">Unapproved</option>
        <option value="Approved">Approved</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitApplicationForm;
