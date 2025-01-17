import React, { useState, useEffect } from "react";
import "../styles/global.css";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  let prevScrollPos = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll effect
    }
  };

  return (
    <nav className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
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
        <li className="nav-item" onClick={() => handleScroll("skills")}>
          Skills
        </li>
        <li className="nav-item" onClick={() => handleScroll("contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
