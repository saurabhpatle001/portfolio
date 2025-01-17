import React from "react";
import "../styles/global.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>

      {/* Social Media Bar */}
      <div className="social-media-bar">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/saurabh-patle-19a114134/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/saurabhpatle001" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:saurabhpatle001@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
