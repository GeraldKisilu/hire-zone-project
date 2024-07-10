import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobListings.css';

const JobListings = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const navigate = useNavigate(); 

    const jobCategories = {
        Engineering: [
            { title: 'Software Engineer', company: 'ABC Tech', location: 'Dubai, UAE' },
            { title: 'Civil Engineer', company: 'XYZ Constructions', location: 'Bangladesh, India' },
            { title: 'Mechanical Engineer', company: 'DEF Manufacturing', location: 'Johannesburg, SouthAfrica' },
            { title: 'Electrical Engineer', company: 'GHI Energy', location: 'Houston, Texas' },
            { title: 'Chemical Engineer', company: 'JKL Chemicals', location: 'San Francisco, CA' },
        ],
        Commerce: [
            { title: 'Accountant', company: 'MNO Finance', location: 'Paris, France' },
            { title: 'Financial Analyst', company: 'PQR Investments', location: 'Napoli, Italy' },
            { title: 'Marketing Manager', company: 'STU Marketing', location: 'Los Angeles, CA' },
            { title: 'Business Analyst', company: 'VWX Consulting', location: 'Al Nassr, SAudi Arabia' },
            { title: 'Sales Manager', company: 'YZA Sales', location: 'Nairobi , Kenya' },
        ],
        Healthcare: [
            { title: 'Registered Nurse', company: 'HealthCare Inc.', location: 'Madrid, Spain' },
            { title: 'Pharmacist', company: 'PharmaLife', location: 'Ohio, USA' },
            { title: 'Medical Assistant', company: 'MedAssist', location: 'Chicago, Ilanois' },
            { title: 'Lab Technician', company: 'LabCorp', location: 'Cairo, Egypt' },
            { title: 'Physical Therapist', company: 'TherapyPlus', location: 'Atalanta, Italy' },
        ],
        Education: [
            { title: 'Teacher', company: 'ABC School', location: 'Arizona, USA' },
            { title: 'Professor', company: 'XYZ University', location: 'Alberta, Canada' },
            { title: 'School Counselor', company: 'DEF High School', location: 'Chicago, IL' },
            { title: 'Librarian', company: 'GHI Library', location: 'Hainan, China' },
            { title: 'Instructional Designer', company: 'JKL Education', location: 'Tasmania, Australia' },
        ],
        IT: [
            { title: 'Web Developer', company: 'ABC Web', location: 'Hokkaido, Japan' },
            { title: 'System Administrator', company: 'XYZ Systems', location: 'Los Angeles, CA' },
            { title: 'Network Engineer', company: 'DEF Networks', location: 'Azores, Portugal' },
            { title: 'Data Scientist', company: 'GHI Data', location: 'Brittany, France' },
            { title: 'Cybersecurity Analyst', company: 'JKL Security', location: 'Bavaria, Germany' },
        ],
    };

    const applyForJob = (job) => {
        setSelectedJob(job);
        alert(`Your application for the position of ${job.title} at ${job.company} is pending, proceed to Log In to complete.`);
        navigate('/login'); // Should redirect to the login page
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
