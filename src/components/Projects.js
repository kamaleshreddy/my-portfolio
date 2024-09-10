// src/components/Projects.js
import React from 'react';
import '../Projects.css'; // Ensure this import is correct

const Projects = () => {
  const projectList = [
    {
      name: 'Age Calculator',
      description:
        'A React app that calculates age based on input date of birth.',
      techused:
        'React, JS, Docker, Kubernetes, Git, AWS, CloudFormation, LoadBalancers',
      gitlink: 'https://github.com/kamaleshreddy/age-calculator',
      deploylink: 'https://thriving-genie-8a098f.netlify.app/',
    },
    {
      name: 'Portfolio',
      description:
        'My personal portfolio, designed to showcase my skills, projects, and experiences in the world of web development',
      techused: 'React, JavaScript, HTML, Modern CSS',
      gitlink: 'https://github.com/kamaleshreddy/my-portfolio',
      deploylink: 'https://comfy-lolly-731bc3.netlify.app/',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="project-list">
        {projectList.map((project, index) => (
          <li key={index} className="project-item">
            <div className="project-content">
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>
                  <b>Technologies:</b> {project.techused}
                </p>
              </div>
              <div className="project-buttons">
                <a
                  className="square-orange-button"
                  href={project.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
                <a
                  className="square-orange-button"
                  href={project.deploylink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployment Link
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
