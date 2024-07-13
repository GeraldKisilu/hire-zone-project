import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [skills, setSkills] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [jobseekerId, setJobseekerId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      email,
      resumeUrl,
      skills,
      educationLevel,
      workExperience,
      portfolioUrl,
      jobseekerId,
    };
    
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default Form;