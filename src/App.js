import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import './components/About.css';
import './Button.css';

function App() {
  // State to track which button is active, initially set to an empty string
  const [activeSection, setActiveSection] = useState('');

  // Function to handle click and set active section
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <header>
        <h1>Kamal's Portfolio</h1>
        <nav>
          <a
            href="#about"
            className={`square-orange-button ${
              activeSection === '#about' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('#about')}
          >
            About
          </a>
          <a
            href="#experience"
            className={`square-orange-button ${
              activeSection === '#experience' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('#experience')}
          >
            Experience
          </a>
          <a
            href="#education"
            className={`square-orange-button ${
              activeSection === '#education' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('#education')}
          >
            Education
          </a>
          <a
            href="#projects"
            className={`square-orange-button ${
              activeSection === '#projects' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('#projects')}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`square-orange-button ${
              activeSection === '#skills' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('#skills')}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`square-orange-button ${
              activeSection === '#contact' ? 'active' : ''
            }`}
            onClick={() => handleButtonClick('#contact')}
          >
            Contact
          </a>
        </nav>
      </header>

      <main>
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2024 Kamal's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
