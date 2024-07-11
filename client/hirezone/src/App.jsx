import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import JobListings from './components/JobListings';
import Login from './components/Login';
import CompanyInsights from './components/CompanyInsights';
import Feedback from './components/Feedback';
import './index.css';
import Employers from './components/Employers';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/jobs" element={<JobListings />} />
                        <Route path="/employers" element={<Employers />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/insights" element={<CompanyInsights />} />
                        <Route path="/feedback" element={<Feedback />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
