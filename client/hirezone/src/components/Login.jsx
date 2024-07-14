import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [role, setRole] = useState('job_seeker');
    const [formFields, setFormFields] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        phoneNumber: '',
        details: '',
        companyName: '',
        industry: '',
        location: '',
        contactEmail: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value
        });
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (role === 'job_seeker') {
                response = await fetch('http://127.0.0.1:8050/jobseekers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formFields)
                });
            } else if (role === 'employer') {
                response = await fetch('http://127.0.0.1:8050/employer/newemployers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formFields)
                });
            }

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setSuccessMessage('Account has been created successfully, please log in to proceed');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 8000);
                // Redirect to login page
                navigate('/login');
            } else {
                console.error('Failed to create account');
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (role === 'job_seeker') {
                response = await fetch('http://127.0.0.1:8050/jobseekers/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formFields)
                });
            } else if (role === 'employer') {
                response = await fetch('http://127.0.0.1:8050/employer/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formFields)
                });
            }

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (role === 'job_seeker') {
                    window.location.href = '/job_seeker_dashboard';
                } else if (role === 'employer') {
                    window.location.href = '/employer_dashboard';
                }
            } else {
                console.error('Failed to login');
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="login-container">
            <h2>User Registration / Login</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form className="login-form">
                <div className="role-selection">
                    <label>Role: </label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="job_seeker">Job Seeker</option>
                        <option value="employer">Employer</option>
                    </select>
                </div>
                {role === 'job_seeker' && (
                    <>
                        <div className="form-group">
                            <label>First Name: </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formFields.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Middle Name: </label>
                            <input
                                type="text"
                                name="middleName"
                                value={formFields.middleName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name: </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formFields.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input
                                type="email"
                                name="email"
                                value={formFields.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number: </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formFields.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Details: </label>
                            <textarea
                                name="details"
                                value={formFields.details}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </>
                )}
                {role === 'employer' && (
                    <>
                        <div className="form-group">
                            <label>Company Name: </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formFields.companyName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Industry: </label>
                            <input
                                type="text"
                                name="industry"
                                value={formFields.industry}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Location: </label>
                            <input
                                type="text"
                                name="location"
                                value={formFields.location}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact Email: </label>
                            <input
                                type="email"
                                name="contactEmail"
                                value={formFields.contactEmail}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </>
                )}
                <div className="form-buttons">
                    <button type="submit" onClick={handleCreateAccount}>Create Account</button>
                    <button type="submit" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;