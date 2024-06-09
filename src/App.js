import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import Footer from './Footer';
import About from './About';
import Panel from './Panel';
import Experience from './Experience';
import Project from './Projects';
import Art from './Art.json';
import Arrow from './Arrow';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import './App.css';
import Certification from './Certification';

const textArray = ["React Js", "JHipster", "Angular Js","Java","Python","Tailwind CSS"];
const textArray1 = ["Node.js", "Django","C++", "Spring Boot","MySQL","MongoDB"];

const generateRandomAnimation = () => {
  const duration = Math.random() * 5 + 15; 
  const delay = Math.random() * 3;
  const x = Math.random() * 100-25; 
  const y = Math.random() * 50-25; 

  return {
    x: [150+x, -200+x , -300+x, -200+x, 600+x, 700+x, 600+x, 150+x],
    y: [-300+y, -500+y , -300+y, -100+y, -100+y, -300+y, -500+y,-300+y],
    transition: {
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  };
};
const generateRandomAnimation1 = () => {
  const duration = Math.random() * 5 + 15; 
  const delay = Math.random() * 3;
  const x = Math.random() * 50-25; 
  const y = Math.random() * 50-25; 

  return {
    x: [150+x, 0+x , 150+x, 400+x, 150+x], // Move back and forth horizontally
    y: [-500+y, -300+y , -100+y, -300+y,-500+y], // Move back and forth vertically
    transition: {
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut'
    }
  };
};

function App() {
  return (
    <Router>
      <div className="App">
        <Footer />
        <Panel />
        <div className="content-container">
          <ImageComponent />
          <div className="lottie-container">
          <div className="animation-section">
          <Lottie loop={true} autoplay={true} animationData={Art} />
            <div className="animated-text-container">
              {textArray.map((text, index) => (
                <motion.div
                  key={index}
                  className="animated-text"
                  animate={generateRandomAnimation()}
                >
                  {text}
                </motion.div>
              ))}
            </div>
            <div className="animated-text-container">
              {textArray1.map((text, index) => (
                <motion.div
                  key={index}
                  className="animated-text"
                  animate={generateRandomAnimation1()}
                >
                  {text}
                </motion.div>
              ))}
            </div>
            
            </div>
          </div>
          <div className="content">
            <section id="about">
              <About />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Project />
            </section>
            <section id="certifications">
              <Certification />
            </section>
            <section id="contact">
              <Lottie loop={true} autoplay={true} animationData={Arrow}  style={{ width: '1400px', height: '100px' }}/>
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
