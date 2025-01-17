import React from "react";
import "../styles/global.css"; 

// Correctly import all image assets
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png"; 
import image6 from "../assets/image6.png"; 

// Update the projects array to use imported images
const projects = [
  { id: 1, title: "", image: image1, link: "https://saurabhpatle001.github.io/Archery/" },
  { id: 2, title: "", image: image2, link: "https://saurabhpatle001.github.io/lezarev-clone/" },
  { id: 3, title: "", image: image3, link: "https://saurabhpatle001.github.io/my-docs/" },
  { id: 4, title: "", image: image4, link: "https://saurabhpatle001.github.io/gemini-clone/" },
  { id: 5, title: "", image: image5, link: "https://saurabhpatle001.github.io/portfolio/" },

  { id: 6, title: "", image: image6, link: "https://saurabhpatle001.github.io/swastik-mern/" },
  // { id: 7, title: "", image: image7, link: "https://project7.com" },
  // { id: 8, title: "", image: image8, link: "https://project8.com" },
  // { id: 9, title: "", image: image9, link: "https://project9.com" },
];

function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-father-box">
        <h2 className="projects-title">Crafted with Love</h2>
        <p className="projects-subtitle">These are a few of my recent works</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <p>{project.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
