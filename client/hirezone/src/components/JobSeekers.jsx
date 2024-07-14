import React, { useState, useEffect } from 'react';
import './JobSeekers.css';  

const JobSeekers = () => {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    fetchJobSeekers();
  }, []);

  const fetchJobSeekers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8050/jobseekers/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJobSeekers(data);
    } catch (error) {
      console.error('Error fetching job seekers:', error);
    }
  };

  return (
    <div className="job-seekers-container">
      <h2>Job Seekers List</h2>
      <ul className="job-seekers-list">
        {jobSeekers.map(jobSeeker => (
          <li key={jobSeeker.id} className="job-seeker-item">
            <div className="job-seeker-card">
              <h3>{jobSeeker.first_name} {jobSeeker.last_name}</h3>
              <p><strong>Email:</strong> {jobSeeker.email}</p>
              <p><strong>Phone Number:</strong> {jobSeeker.phone_number}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSeekers;
