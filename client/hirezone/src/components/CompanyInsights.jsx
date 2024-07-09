import React from 'react';
import './CompanyInsights.css'; // Import CSS styles

const CompanyInsights = () => {
    return (
        <div className="company-insights">
            <h2>Company Insights</h2>
            <section>
                <h3>About Hire-Zone</h3>
                <p>Hire-Zone is a leading platform that connects job seekers and employers, streamlining the hiring process with modern technology. Our mission is to bridge the gap between talent and opportunity, making the job search and recruitment experience efficient, user-friendly, and effective.</p>
            </section>

            <section>
                <h3>Growth Prospects</h3>
                <p>Hire-Zone has shown significant growth over the past few years. Below are some key growth metrics and projections:</p>
                <ul>
                    <li><strong>Registered Users:</strong> Over 1 million job seekers and 100,000 employers.</li>
                    <li><strong>Monthly Active Users:</strong> 500,000+ job seekers and 50,000+ employers.</li>
                    <li><strong>Job Listings:</strong> 200,000+ active job listings at any given time.</li>
                    <li><strong>Revenue Growth:</strong> 20% year-over-year revenue growth.</li>
                </ul>
                <img src="/images/growth-chart.png" alt="Growth Chart" className="insight-image"/>
            </section>

            <section>
                <h3>User Testimonials</h3>
                <blockquote>
                    "Hire-Zone helped me find my dream job within a week! The platform is so easy to use and the job recommendations were spot on." - Jane Doe, Software Engineer
                </blockquote>
                <blockquote>
                    "As an employer, Hire-Zone has been invaluable in finding qualified candidates quickly. The skill verification feature is a game-changer." - John Smith, HR Manager
                </blockquote>
            </section>

            <section>
                <h3>Market Position</h3>
                <p>Hire-Zone is positioned as a top-tier job search platform, competing with industry giants while offering unique features like skill verification, automated interview scheduling, and detailed company insights.</p>
                <img src="/images/market-position.png" alt="Market Position" className="insight-image"/>
            </section>

            <section>
                <h3>Future Plans</h3>
                <p>Looking ahead, Hire-Zone aims to expand its reach globally, introduce AI-driven job matching algorithms, and enhance the user experience with more personalized features.</p>
                <img src="/images/future-plans.png" alt="Future Plans" className="insight-image"/>
            </section>
        </div>
    );
};

export default CompanyInsights;
