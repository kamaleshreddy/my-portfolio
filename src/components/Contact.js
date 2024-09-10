// src/components/Contact.js
import React from 'react';
import '../Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Name: Kamalesh Reddy Nallamilli</p>
      <p>Email: kamaleshreddynallamilli@gmail.com</p>
      <div className="button-container">
        <a
          className="button-link"
          href="https://www.linkedin.com/in/kredy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="button-link"
          href="https://github.com/kamaleshreddy?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
