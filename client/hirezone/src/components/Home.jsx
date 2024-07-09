import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Welcome to Hire-Zone!</h2>
            <p>This is our hiring site, Welcome!</p>
            <button onClick={() => window.location.href = '/jobs'}>Search for Jobs</button>
        </div>
    );
};

export default Home;
