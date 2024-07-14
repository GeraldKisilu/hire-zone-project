import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h2>Welcome to Hire-Zone!</h2>
            <p>This is our hiring site, Welcome!</p>
            <div className="button-group">
                <button onClick={() => navigate('/jobs')}>Search for Jobs</button>
                <button onClick={() => navigate('/employers')}>Employers</button>
            </div>
        </div>
    );
};

export default Home;
