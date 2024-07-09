import React, { useState } from 'react';

const Login = () => {
    const [role, setRole] = useState('job_seeker');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (role === 'job_seeker') {
            window.location.href = '/job_seeker_dashboard';
        } else {
            window.location.href = '/employer_dashboard';
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" required />
                </div>
                <div>
                    <label>Role: </label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="job_seeker">Job Seeker</option>
                        <option value="employer">Employer</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
