// src/components/AboutMe.tsx
import React from 'react';
import './AboutMe.scss';

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I’m a passionate and driven individual with a solid educational foundation in computer science and hands-on experience in web development, data analysis, and machine learning. Throughout my journey, I've cultivated a deep curiosity for emerging technologies and a relentless urge to learn, grow, and challenge myself in new domains. My technical skills span across AI/ML, data analytics, and Software Engineer all powered by a strong work ethic, analytical mindset, and a creative approach to solving problems.
        
        I thrive in dynamic environments where I can turn ideas into impactful solutions. Whether working on internships, self-driven projects, or virtual experiences, I always bring energy, adaptability, and a hunger to improve. My ultimate goal is to become a highly capable and respected AI Engineer - one who not only builds intelligent systems but contributes meaningfully to the future of technology and society.
      </p>
    </div>
  );
};

export default AboutMe;
