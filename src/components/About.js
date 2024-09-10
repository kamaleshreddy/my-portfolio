// src/components/About.js
import React from 'react';
import './About.css'; // Adding custom styles

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hello, I'm Kamalesh, a dedicated and versatile software engineer
            with a strong passion for front-end development, particularly with
            React JS, and a keen interest in leveraging modern technologies like
            Kubernetes, Docker, and AWS to build scalable and efficient
            applications. With a solid background in both development and data
            analytics, I’ve honed my skills in crafting user-centric web
            applications and managing complex data workflows. My recent projects
            showcase my expertise in building dynamic and responsive interfaces
            using React, and I’m excited about applying my knowledge of
            containerization and cloud computing to create robust, scalable
            solutions.
          </p>
        </div>
        <div className="about-image">
          <img src="/kamalr.jpg" alt="Kamal" />
        </div>
      </div>
    </section>
  );
};

export default About;
