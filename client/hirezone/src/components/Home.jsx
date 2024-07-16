import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        role: '',
        employer_id: '',
        job_seeker_id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Form Data:', formData); // Log formData before sending
            const response = await fetch('http://127.0.0.1:8050/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Response:', data); // Log response data

            if (response.ok) {
                console.log('Form submitted:', data);
                alert(`Registration successful for ${formData.email}`);

                if (formData.role === 'job_seeker') {
                    navigate('/jobs');
                } else if (formData.role === 'employer') {
                    navigate('/employers');
                }
            } else {
                console.error('Error submitting form:', data);
                alert(`Registration failed: ${data.msg}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    };

    return (
        <div className="home-container">
            <h2>Welcome to Hire-zone: Where Talent Meets Opportunity!</h2>
            <p>Are you ready to unlock a world of possibilities? Look no further than Hire-zone, your gateway to talent acquisition and career advancement. Whether you’re a job seeker seeking that perfect match or an employer eager to tap into a pool of exceptional candidates, we’ve got you covered.</p>
            <h3>🌟 For Job Seekers:</h3>
            <p>Discover tailored job listings, personalized recommendations, and expert career advice. Our intuitive platform connects you with opportunities that align with your skills, aspirations, and values. Say goodbye to generic job boards—Hire-zone is where your dream job awaits.</p>
            <h3>🌟 For Employers: </h3>
            <p>Craft compelling job postings, explore candidate profiles, and streamline your hiring process. Our robust tools empower you to find the right fit for your team, fostering growth and innovation. At Hire-zone, we believe that every hire is an investment in success.</p>
            <p>Join us today and experience the synergy of talent and opportunity. Let’s redefine the way we work, one connection at a time. 🚀</p>
            

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select Role</option>
                    <option value="employer">Employer</option>
                    <option value="job_seeker">Job Seeker</option>
                </select>
                <input
                    type="number"
                    name="employer_id"
                    placeholder="Employer ID (optional)"
                    value={formData.employer_id}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="job_seeker_id"
                    placeholder="Job Seeker ID (optional)"
                    value={formData.job_seeker_id}
                    onChange={handleChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Home;
