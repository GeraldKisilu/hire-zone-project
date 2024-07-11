import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome to Hire-Zone!</h2>
            <p>This is our hiring site, Welcome!</p>
            <button onClick={() => navigate('/jobs')}>Search for Jobs</button>
            <button onClick={() => navigate('/employers')}>Employers</button> {/* Update this line */}
        </div>
    );
};

export default Home;
