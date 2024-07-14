import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Employers.css';

const Employers = () => {
  const [employers, setEmployers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployers();
  }, []);

  const fetchEmployers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8050/employer/newemployers');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployers(data);
    } catch (error) {
      console.error('Error fetching employers:', error);
    }
  };

  const handleJobSeekersButtonClick = (employerId) => {
    navigate(`/seekers/${employerId}`);
  };

  return (
    <div className="employers-container">
      <h2>Employer List</h2>
      <ul className="employer-list">
        {employers.map(employer => (
          <li key={employer.id} className="employer-item">
            <div className="employer-card">
              <h3>{employer.company_name}</h3>
              <p><strong>Industry:</strong> {employer.industry}</p>
              <p><strong>Location:</strong> {employer.location}</p>
              <p><strong>Contact Email:</strong> {employer.contact_email}</p>
              <button
                className="job-seekers-button"
                onClick={() => handleJobSeekersButtonClick(employer.id)}
              >
                Job Seekers
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employers;
