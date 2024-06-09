import React from 'react';
import './Projects.css';

function Project() {
    return (
        <div className="about-container">
            <h1>Projects</h1>
            <section className="about-section">
                <h2>PagePal - Book Swapping Website  <br></br>JHipster, Spring Boot, Angular, Docker | 2024 </h2>
                <ul>
                    <li>Developed "PagePal," a dynamic online platform for book enthusiasts to exchange books and foster a vibrant literary community. The project employed Angular and Spring Boot via JHipster to streamline development and ensure a scalable, robust application architecture.</li>
                    <li>Project Setup with JHipster: Utilized JHipster for generating boilerplate code, which accelerated initial development phases and ensured integration of best practices in codebase and configuration management.</li>
                    <li>Database Management: Implemented and maintained a robust database system, managing complex data relationships and ensuring data integrity and security.</li>
                    <li>Authentication and Security: Integrated advanced user authentication and authorization features to secure user data and ensure reliable access control.Authentication and Security: Integrated advanced user authentication and authorization features to secure user data and ensure reliable access control.</li>
                    <li>Deployment and Maintenance: Managed the deployment of the application, including configuration of cloud-based environments and continuous integration/continuous deployment (CI/CD) pipelines.</li>
                    <li>Community Features: Built interactive features such as book reviews, user forums, and recommendation algorithms to enhance community engagement and user satisfaction.</li>
                </ul>
            </section>
        </div>
    );
}

export default Project;
