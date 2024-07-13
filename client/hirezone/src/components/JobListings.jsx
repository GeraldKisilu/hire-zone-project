import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8050/jobs/joblist'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJobs(data);  
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <strong>{job.title}</strong> - {job.description}, {job.salary} ({job.employer_id})
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/form')}>Apply</button>
    </div>
  );
};

export default JobListings;