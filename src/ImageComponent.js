import React from 'react';
import image from './IMG_1698.jpg';
import './ImageComponent.css';

function ImageComponent() {
    return (
        <div className="image-text-container">
            <img src={image} alt="Zayed Mohammad" className="image" />
            <div className="text-content">
                <h2>Zayed Mohammad - Full Stack Developer</h2>
                <p>
                    I am a Full Stack Web Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I have the skills to bring your ideas to life. My expertise includes working with modern JavaScript frameworks, building RESTful APIs, and developing efficient and scalable databases.
                </p>
                <p>
                    Currently pursuing a degree in Computer Science at the University of Birmingham Dubai, I am constantly honing my skills and staying up-to-date with the latest industry trends. I am committed to delivering high-quality code and creating seamless user experiences.
                </p>
            </div>
        </div>
    );
}

export default ImageComponent;
