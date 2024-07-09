import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1>Hire-Zone</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/jobs">Search for Jobs</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/insights">Company Insights</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
