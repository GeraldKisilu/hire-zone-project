import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [skills, setSkills] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [jobseekerId, setJobseekerId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      email,
      resume_url: resumeUrl,
      skills,
      education_level: educationLevel,
      work_experience: workExperience,
      portfolio_url: portfolioUrl,
      jobseeker_id: jobseekerId,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/form/jobseekers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumeUrl">Resume URL:</label>
          <input
            type="url"
            id="resumeUrl"
            name="resumeUrl"
            value={resumeUrl}
            onChange={(e) => setResumeUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="educationLevel">Education Level:</label>
          <input
            type="text"
            id="educationLevel"
            name="educationLevel"
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="workExperience">Work Experience:</label>
          <input
            type="text"
            id="workExperience"
            name="workExperience"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolioUrl">Portfolio URL:</label>
          <input
            type="url"
            id="portfolioUrl"
            name="portfolioUrl"
            value={portfolioUrl}
            onChange={(e) => setPortfolioUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobseekerId">Jobseeker ID:</label>
          <input
            type="text"
            id="jobseekerId"
            name="jobseekerId"
            value={jobseekerId}
            onChange={(e) => setJobseekerId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
