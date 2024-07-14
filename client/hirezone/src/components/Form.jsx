import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

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
    academicCertificate: null,
    cv: null,
  });

  // State for job seeker ID
  const [jobSeekerId, setJobSeekerId] = useState(null);

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

  // Reset form fields
  const resetFormFields = () => {
    setJobSeeker({
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      phoneNumber: '',
    });
    setJobSeekerDetails({
      resumeUrl: '',
      skills: '',
      educationLevel: '',
      workExperience: '',
      portfolioUrl: '',
      academicCertificate: null,
      cv: null,
    });
    setJobSeekerId(null);
  };

  // Handle form submission for basic information
  const handleBasicInfoSubmit = async (e) => {
    e.preventDefault();

    const basicInfoData = {
      first_name: jobSeeker.firstName,
      last_name: jobSeeker.lastName,
      middle_name: jobSeeker.middleName,
      email: jobSeeker.email,
      phone_number: jobSeeker.phoneNumber,
    };

    try {
      const basicInfoResponse = await fetch('http://127.0.0.1:8050/jobseekers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(basicInfoData),
      });

      if (!basicInfoResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const basicInfoResult = await basicInfoResponse.json();
      setJobSeekerId(basicInfoResult.id);
      console.log('Basic information submitted successfully:', basicInfoResult);
    } catch (error) {
      console.error('Error submitting basic information:', error);
    }
  };

  // Handle form submission for job seeker details
  const handleDetailsSubmit = async (e) => {
    e.preventDefault();

    if (!jobSeekerId) {
      alert('Please submit the basic information first.');
      return;
    }

    const detailsData = new FormData();
    detailsData.append('resume_url', jobSeekerDetails.resumeUrl);
    detailsData.append('skills', jobSeekerDetails.skills);
    detailsData.append('education_level', jobSeekerDetails.educationLevel);
    detailsData.append('work_experience', jobSeekerDetails.workExperience);
    detailsData.append('portfolio_url', jobSeekerDetails.portfolioUrl);
    detailsData.append('jobseeker_id', jobSeekerId);
    detailsData.append('academic_certificate', jobSeekerDetails.academicCertificate);
    detailsData.append('cv', jobSeekerDetails.cv);

    try {
      const detailsResponse = await fetch('http://127.0.0.1:8050/details/', {
        method: 'POST',
        body: detailsData,
      });

      if (!detailsResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const detailsResult = await detailsResponse.json();
      console.log('Details submitted successfully:', detailsResult);
      resetFormFields();
    } catch (error) {
      console.error('Error submitting details:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Application Form</h2>
      
      <form onSubmit={handleBasicInfoSubmit} className="application-form">
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
        <button type="submit" className="submit-button">Submit Basic Info</button>
      </form>

      <form onSubmit={handleDetailsSubmit} className="application-form">
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
        <button type="submit" className="submit-button">Submit Details</button>
      </form>
    </div>
  );
};

export default Form;
