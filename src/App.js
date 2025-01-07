import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Import Contact component
import Skills from './components/Skills';

import "./styles/global.css"; // Global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <section id="about">
        <AboutMe />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="work-experience">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="Skills"> 
        <Skills />
      </section>
      <section id="contact"> 
        <Contact />
      </section>
     
    </div>
  );
}

export default App;
