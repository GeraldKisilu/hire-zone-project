import React, { useState } from 'react';
// import './Form.css'; // Import the CSS file

const Form = () => {
  // State for job seekers' basic information
  const [jobSeeker, setJobSeeker] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phoneNumber: '',
  });

  // State for job seekers' details
  const [jobSeekerDetails, setJobSeekerDetails] = useState({
    resumeUrl: '',
    skills: '',
    educationLevel: '',
    workExperience: '',
    portfolioUrl: '',
    jobSeekerId: '',
    academicCertificate: null,
    cv: null,
  });

  // Handle changes for job seekers' basic information
  const handleJobSeekerChange = (e) => {
    setJobSeeker({ ...jobSeeker, [e.target.name]: e.target.value });
  };

  // Handle changes for job seekers' details
  const handleJobSeekerDetailsChange = (e) => {
    setJobSeekerDetails({ ...jobSeekerDetails, [e.target.name]: e.target.value });
  };

  // Handle file changes for uploads
  const handleFileChange = (e) => {
    setJobSeekerDetails({ ...jobSeekerDetails, [e.target.name]: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a form data object for file uploads
    const formData = new FormData();
    formData.append('first_name', jobSeeker.firstName);
    formData.append('last_name', jobSeeker.lastName);
    formData.append('middle_name', jobSeeker.middleName);
    formData.append('email', jobSeeker.email);
    formData.append('phone_number', jobSeeker.phoneNumber);
    formData.append('resume_url', jobSeekerDetails.resumeUrl);
    formData.append('skills', jobSeekerDetails.skills);
    formData.append('education_level', jobSeekerDetails.educationLevel);
    formData.append('work_experience', jobSeekerDetails.workExperience);
    formData.append('portfolio_url', jobSeekerDetails.portfolioUrl);
    formData.append('jobseeker_id', jobSeekerDetails.jobSeekerId);
    formData.append('academic_certificate', jobSeekerDetails.academicCertificate);
    formData.append('cv', jobSeekerDetails.cv);

    try {
      const response = await fetch('http://127.0.0.1:5000/form/jobseekers', {
        method: 'POST',
        body: formData,
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
        <h3>Job Seeker Information</h3>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={jobSeeker.firstName}
            onChange={handleJobSeekerChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={jobSeeker.lastName}
            onChange={handleJobSeekerChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={jobSeeker.middleName}
            onChange={handleJobSeekerChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={jobSeeker.email}
            onChange={handleJobSeekerChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={jobSeeker.phoneNumber}
            onChange={handleJobSeekerChange}
            required
          />
        </div>

        <h3>Job Seeker Details</h3>
        <div className="form-group">
          <label htmlFor="resumeUrl">Resume URL:</label>
          <input
            type="url"
            id="resumeUrl"
            name="resumeUrl"
            value={jobSeekerDetails.resumeUrl}
            onChange={handleJobSeekerDetailsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={jobSeekerDetails.skills}
            onChange={handleJobSeekerDetailsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="educationLevel">Education Level:</label>
          <input
            type="text"
            id="educationLevel"
            name="educationLevel"
            value={jobSeekerDetails.educationLevel}
            onChange={handleJobSeekerDetailsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="workExperience">Work Experience:</label>
          <input
            type="text"
            id="workExperience"
            name="workExperience"
            value={jobSeekerDetails.workExperience}
            onChange={handleJobSeekerDetailsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolioUrl">Portfolio URL:</label>
          <input
            type="url"
            id="portfolioUrl"
            name="portfolioUrl"
            value={jobSeekerDetails.portfolioUrl}
            onChange={handleJobSeekerDetailsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobSeekerId">Job Seeker ID:</label>
          <input
            type="text"
            id="jobSeekerId"
            name="jobSeekerId"
            value={jobSeekerDetails.jobSeekerId}
            onChange={handleJobSeekerDetailsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="academicCertificate">Academic Certificate:</label>
          <input
            type="file"
            id="academicCertificate"
            name="academicCertificate"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cv">CV:</label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
