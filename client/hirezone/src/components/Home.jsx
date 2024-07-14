import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h2>Welcome to Hire-zone: Where Talent Meets Opportunity!</h2>
            <p>Are you ready to unlock a world of possibilities? Look no further than Hire-zone, your gateway to talent acquisition and career advancement. Whether you’re a job seeker seeking that perfect match or an employer eager to tap into a pool of exceptional candidates, we’ve got you covered.</p>
            <h3>🌟 For Job Seekers:</h3>
            <p>Discover tailored job listings, personalized recommendations, and expert career advice. Our intuitive platform connects you with opportunities that align with your skills, aspirations, and values. Say goodbye to generic job boards—Hire-zone is where your dream job awaits.</p>
            <h3>🌟 For Employers: </h3>
            <p>Craft compelling job postings, explore candidate profiles, and streamline your hiring process. Our robust tools empower you to find the right fit for your team, fostering growth and innovation. At Hire-zone, we believe that every hire is an investment in success.</p>
            <p>Join us today and experience the synergy of talent and opportunity. Let’s redefine the way we work, one connection at a time. 🚀</p>
            <div className="button-group">
                <button onClick={() => navigate('/jobs')}>Search for Jobs</button>
                <button onClick={() => navigate('/employers')}>Employers</button>
            </div>
        </div>
    );
};

export default Home;
