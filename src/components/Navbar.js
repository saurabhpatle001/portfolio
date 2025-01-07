import React from "react";
import "../styles/global.css";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll effect
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item" onClick={() => handleScroll("about")}>
          About
        </li>
        <li className="nav-item" onClick={() => handleScroll("resume")}>
          Resume
        </li>
        <li className="nav-item" onClick={() => handleScroll("projects")}>
          Projects
        </li>
        {/* <li className="nav-item" onClick={() => handleScroll("work-experience")}>
          Work Experience
        </li> */}
        <li className="nav-item" onClick={() => handleScroll("Skills")}>
           Skills
        </li>
        <li className="nav-item" onClick={() => handleScroll("Contact")}>
           Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
