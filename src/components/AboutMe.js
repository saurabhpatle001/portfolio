import React from "react";
// import "./AboutMe.css";
import "../styles/global.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="left-column">
          <p><strong>Full Name:</strong> Sauranh Patle</p>
          <p><strong>Phone:</strong> +91 8120197587</p>
          <p><strong>Email:</strong> saurabhpatle001@gmail.com</p>
          <p><strong>Address:</strong>Indore</p>
        </div>
        <div className="right-column">
          <p>Hello There!</p>
          <p>Welcome to my website!</p>
          <p>I’m Saurabh </p>
        </div>
      </div>

     {/* Social Media Bar */}
<div className="social-media-bar">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
</div>

    </div>
  );
};

export default AboutMe;
