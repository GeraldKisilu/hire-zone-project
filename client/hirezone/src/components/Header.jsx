import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header>
            <div className="header-container">
                <h1><Link to="/" className="logo">Hire-Zone</Link></h1>
                <nav>
                    <ul className={isMenuOpen ? 'menu open' : 'menu'}>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/jobs" activeClassName="active">Search for Jobs</NavLink></li>
                        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                        <li><NavLink to="/insights" activeClassName="active">Company Insights</NavLink></li>
                        <li><NavLink to="/feedback" activeClassName="active">Feedback</NavLink></li>
                        <li className="dropdown">
                            <button onClick={toggleDropdown}>Profile</button>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/profile">View Profile</Link></li>
                                    <li><Link to="/settings">Settings</Link></li>
                                    <li><Link to="/logout">Logout</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
