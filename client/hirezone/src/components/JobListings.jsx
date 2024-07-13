import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobListings.css'; // Import the CSS file for styling

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    let updatedJobs = jobs;

    if (searchTerm) {
      updatedJobs = updatedJobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      updatedJobs = updatedJobs.filter(job =>
        job.category && job.category.toLowerCase() === category.toLowerCase()
      );
    }

    setFilteredJobs(updatedJobs);
  }, [searchTerm, category, jobs]);

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
    <div className="job-listings-container">
      <h2>Job List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search job titles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Finance">Finance</option>
          <option value="Human Resources">Human Resources</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <ul className="job-list">
        {filteredJobs.map(job => (
          <li key={job.id} className="job-item">
            <div className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Employer ID:</strong> {job.employer_id}</p>
              <button className="apply-button" onClick={() => navigate(`/form`)}>Apply</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
