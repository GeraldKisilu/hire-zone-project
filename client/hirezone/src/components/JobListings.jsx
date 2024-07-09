import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobListings.css'; // Import the CSS file for the JobListings component

const JobListings = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const navigate = useNavigate(); // Use the useNavigate hook to programmatically navigate

    const jobCategories = {
        Engineering: [
            { title: 'Software Engineer', company: 'ABC Tech', location: 'New York, NY' },
            { title: 'Civil Engineer', company: 'XYZ Constructions', location: 'Los Angeles, CA' },
            { title: 'Mechanical Engineer', company: 'DEF Manufacturing', location: 'Chicago, IL' },
            { title: 'Electrical Engineer', company: 'GHI Energy', location: 'Houston, TX' },
            { title: 'Chemical Engineer', company: 'JKL Chemicals', location: 'San Francisco, CA' },
        ],
        Commerce: [
            { title: 'Accountant', company: 'MNO Finance', location: 'New York, NY' },
            { title: 'Financial Analyst', company: 'PQR Investments', location: 'Boston, MA' },
            { title: 'Marketing Manager', company: 'STU Marketing', location: 'Los Angeles, CA' },
            { title: 'Business Analyst', company: 'VWX Consulting', location: 'Chicago, IL' },
            { title: 'Sales Manager', company: 'YZA Sales', location: 'San Francisco, CA' },
        ],
        Healthcare: [
            { title: 'Registered Nurse', company: 'HealthCare Inc.', location: 'New York, NY' },
            { title: 'Pharmacist', company: 'PharmaLife', location: 'Los Angeles, CA' },
            { title: 'Medical Assistant', company: 'MedAssist', location: 'Chicago, IL' },
            { title: 'Lab Technician', company: 'LabCorp', location: 'Houston, TX' },
            { title: 'Physical Therapist', company: 'TherapyPlus', location: 'San Francisco, CA' },
        ],
        Education: [
            { title: 'Teacher', company: 'ABC School', location: 'New York, NY' },
            { title: 'Professor', company: 'XYZ University', location: 'Los Angeles, CA' },
            { title: 'School Counselor', company: 'DEF High School', location: 'Chicago, IL' },
            { title: 'Librarian', company: 'GHI Library', location: 'Houston, TX' },
            { title: 'Instructional Designer', company: 'JKL Education', location: 'San Francisco, CA' },
        ],
        IT: [
            { title: 'Web Developer', company: 'ABC Web', location: 'New York, NY' },
            { title: 'System Administrator', company: 'XYZ Systems', location: 'Los Angeles, CA' },
            { title: 'Network Engineer', company: 'DEF Networks', location: 'Chicago, IL' },
            { title: 'Data Scientist', company: 'GHI Data', location: 'Houston, TX' },
            { title: 'Cybersecurity Analyst', company: 'JKL Security', location: 'San Francisco, CA' },
        ],
    };

    const applyForJob = (job) => {
        setSelectedJob(job);
        alert(`Your application for the position of ${job.title} at ${job.company} is pending, proceed to Log In to complete.`);
        navigate('/login'); // Redirect to the login page
    };

    const filteredJobs = Object.keys(jobCategories)
        .filter(category => selectedCategory === 'All' || category === selectedCategory)
        .flatMap(category => jobCategories[category])
        .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="job-listings-container">
            <h2>Search for Jobs</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    {Object.keys(jobCategories).map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="job-listings">
                {filteredJobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <button onClick={() => applyForJob(job)}>Apply</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobListings;
