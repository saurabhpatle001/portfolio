import React from "react";
import "../styles/global.css";


import resumeFile from "../assets/resume/SaurabhPatleResume.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <h2>My Resume</h2>
   
      <a href={resumeFile} download="Saurabh-Patle-Resume.pdf" className="resume-button">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
