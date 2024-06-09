import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <div className="about-container">
            <h1>Experience</h1>
            <section className="about-section">
                <h2>Stancord Consultancy | Full Stack Developer <br></br> Kolkata, West Bengal (Remote) | 2023</h2>
                <ul>
                    <li>Front-End Development: Developed intuitive and visually appealing user interfaces, enhancing the overall aesthetic and user experience of company projects.</li>
                    <li>JavaScript Programming: Implemented dynamic content features to ensure interactive and engaging user experiences across various app functionalities.</li>
                    <li>Modern Web Technologies: Proficiently utilized React JS and Axios for API integration, resulting in scalable and efficient components that improved project robustness.</li>
                    <li>Team Collaboration: Demonstrated enthusiasm, adaptability, and proactive problem-solving; contributed to a productive and supportive team environment</li>
                </ul>
            </section>

            <section className="about-section">
            <h2>University of Birmingham | President: Chess Club <br></br> Dubai, United Arab Emirates | 2023 – 2024</h2>
                <ul>
                    <li>Managed and coordinated a team of 20 chess enthusiasts, overseeing weekly meetings and organizing successful events, resulting in a 30% increase in participation.</li>
                    <li>Organised and executed three chess tournaments, with participant numbers ranging from 16 to 24, employing effective planning, promotion, and logistics.</li>
                    <li>Demonstrated strong communication skills through regular outreach to members, sponsorship requests, and community involvement, resulting in increased club participation and visibility.</li>
                </ul>
            </section>
        </div>
    );
}

export default Experience;
