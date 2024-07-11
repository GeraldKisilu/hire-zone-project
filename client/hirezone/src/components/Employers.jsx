import React, { useState, useEffect } from 'react';

const Employers = () => {
  const [employers, setEmployers] = useState([]);

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

  return (
    <div>
      <h2>Employer List</h2>
      <ul>
        {employers.map(employer => (
          <li key={employer.id}>
            <strong>{employer.company_name}</strong> - {employer.industry}, {employer.location} ({employer.contact_email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employers;