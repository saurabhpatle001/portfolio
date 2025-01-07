import React from "react";
// import "./Resume.css";
import "../styles/global.css";

const Resume = () => {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <a href="/path-to-your-resume.pdf" download className="resume-button">
        View
      </a>
    </div>
  );
};

export default Resume;
