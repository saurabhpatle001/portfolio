import React from "react";
import "../styles/global.css";

import reactIcon from "../assets/react.svg";
import reduxIcon from "../assets/redux.svg";
import javascriptIcon from "../assets/javascript.svg";
import nodejsIcon from "../assets/nodejs.svg";
import javaIcon from "../assets/java.svg";
import springbootIcon from "../assets/springboot.svg";
import mysqlIcon from "../assets/mysql.svg";
import bootstrapIcon from "../assets/bootstrap.svg";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Fullstack Developer Intern",
      company: "TONY LLC",
      duration: "Nov - Feb 2024",
      description: [
        "Develop new user-facing features using React.js and associated libraries (Redux, React Router, etc.).",
        "Enhanced overall code quality and maintainability of the React applications.",
        "Ensured cross-browser compatibility for improved user experience.",
        "Collaborated with backend developers to integrate RESTful APIs.",
      ],
      icons: [reactIcon, reduxIcon, javascriptIcon, nodejsIcon, bootstrapIcon],
    },
    {
      title: "Java Intern",
      company: "Intern Pe",
      duration: "Aug - Oct 2024",
      description: [
        "Developed backend modules for a web-based application.",
        "Assisted in debugging and optimizing Java-based microservices.",
        "Collaborated with team members to integrate APIs and database layers.",
      ],
      icons: [javaIcon, springbootIcon, mysqlIcon],
    },
  ];

  return (
    <div className="work-experience-container">
      <h2 className="work-experience-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "right" : "left"
            }`}
          >
            <div className="card">
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
              <ul>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <div className="tech-icons">
                {exp.icons.map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    alt="tech icon"
                    className="tech-icon"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default WorkExperience;
