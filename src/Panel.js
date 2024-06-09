import React from 'react';
import './Panel.css';

function Panel() {
    return (
        <div className="panel-container">
            <nav>
                <a href="#home" className="panel-item">Home</a>
                <a href="#about" className="panel-item">About</a>
                <a href="#experience" className="panel-item">Experience</a>
                <a href="#projects" className="panel-item">Projects</a>
                <a href="#certifications" className="panel-item">Certifications</a>
                <a href="#contact" className="panel-item">Contact</a>
            </nav>
        </div>
    );
}

export default Panel;
