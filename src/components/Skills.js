import React from "react";
import "../styles/global.css"; // Adjust the path based on your folder structure

const skillsData = [
  { name: "HTML5", percentage: "90%", icon: "fab fa-html5" },
  { name: "JavaScript", percentage: "70%", icon: "fab fa-js" },
  { name: "Node.js", percentage: "60%", icon: "fab fa-node-js" },
  { name: "Express.js", percentage: "85%", icon: "fas fa-server" },
  { name: "MongoDB", percentage: "80%", icon: "fas fa-database" },
  { name: "MySQL", percentage: "90%", icon: "fas fa-database" },
  { name: "C/C++", percentage: "80%", icon: "fas fa-code" },
  { name: "Java", percentage: "70%", icon: "fab fa-java" },
  { name: "Git", percentage: "80%", icon: "fab fa-git" },
  { name: "AWS", percentage: "50%", icon: "fab fa-aws" },
  { name: "Postman", percentage: "60%", icon: "fas fa-tools" },
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <i className={skill.icon}></i>
            <span className="skill-percentage">{skill.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
