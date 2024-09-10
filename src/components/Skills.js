// src/components/Skills.js
import React, { useState } from 'react';
import '../Skills.css'; // Import the CSS file for styling

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleToggleCategory = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div
          className={`dropdown ${
            activeCategory === 'programmingLanguages' ? 'active' : ''
          }`}
        >
          <button
            className="dropdown-button"
            onClick={() => handleToggleCategory('programmingLanguages')}
          >
            Programming Languages
          </button>
          {activeCategory === 'programmingLanguages' && (
            <div className="dropdown-content">
              <ul>
                <li>Python</li>
                <li>SQL</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>C</li>
                <li>JavaScript</li>
                <li>Clojure</li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={`dropdown ${
            activeCategory === 'programsAndSoftwares' ? 'active' : ''
          }`}
        >
          <button
            className="dropdown-button"
            onClick={() => handleToggleCategory('programsAndSoftwares')}
          >
            Programs and Softwares
          </button>
          {activeCategory === 'programsAndSoftwares' && (
            <div className="dropdown-content">
              <ul>
                <li>Microsoft SQL Server</li>
                <li>Microsoft Visual Studio</li>
                <li>BASH</li>
                <li>DBeaver</li>
                <li>Anaconda Navigator</li>
                <li>Tableau</li>
                <li>PyCharm</li>
                <li>AWS QuickSight</li>
                <li>Apache Airflow</li>
                <li>React JS</li>
                <li>React Native</li>
                <li>React Redux</li>
                <li>Responsive Design</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JIRA</li>
                <li>Excel</li>
                <li>PHP</li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={`dropdown ${activeCategory === 'others' ? 'active' : ''}`}
        >
          <button
            className="dropdown-button"
            onClick={() => handleToggleCategory('others')}
          >
            Others
          </button>
          {activeCategory === 'others' && (
            <div className="dropdown-content">
              <ul>
                <li>Visual Studio</li>
                <li>Web Scraping</li>
                <li>Selenium</li>
                <li>Data Visualization</li>
                <li>Data Analytics</li>
                <li>PowerPoint</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={`dropdown ${
            activeCategory === 'libraries' ? 'active' : ''
          }`}
        >
          <button
            className="dropdown-button"
            onClick={() => handleToggleCategory('libraries')}
          >
            Libraries
          </button>
          {activeCategory === 'libraries' && (
            <div className="dropdown-content">
              <ul>
                <li>SciPy</li>
                <li>Scikit-learn</li>
                <li>NLTK</li>
                <li>Matplotlib</li>
                <li>PySpark</li>
                <li>NumPy</li>
                <li>Pandas</li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={`dropdown ${
            activeCategory === 'dockerKubernetes' ? 'active' : ''
          }`}
        >
          <button
            className="dropdown-button"
            onClick={() => handleToggleCategory('dockerKubernetes')}
          >
            Docker & Kubernetes
          </button>
          {activeCategory === 'dockerKubernetes' && (
            <div className="dropdown-content">
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Containerization</li>
                <li>Orchestration</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
