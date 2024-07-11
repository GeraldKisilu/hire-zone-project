import React, { useState, useEffect } from 'react';
import './Employers.css';

const Employers = () => {
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        // Fetch employers' data from the provided URL
        fetch('http://127.0.0.1:8050/employer/newemployers')
            .then(response => response.json())
            .then(data => {
                // Assuming the data returned is an array of employers objects
                setEmployers(data);
            })
            .catch(error => {
                console.error('Error fetching employers:', error);
            });
    }, []); // Empty dependency array means this runs only once when the component mounts

    return (
        <div className="employers-container">
            <h2>Employers</h2>
            <div className="employers-list">
                {employers.map((employer, index) => (
                    <div key={index} className="employer-card">
                        <h3>{employer.company_name}</h3>
                        <p>Industry: {employer.industry}</p>
                        <p>Location: {employer.location}</p>
                        <p>Contact Email: {employer.contact_email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Employers;
