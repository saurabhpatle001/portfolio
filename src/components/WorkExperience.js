import React from "react";
// import "./WorkExperience.css";
import "../styles/global.css";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TONY LLC.",
      duration: "Nov - Feb'24",
      description: [
        "Working on Frontend of applications for automating option trading for clients",
      ],
    },
    {
      title: "Java Intern",
      company: "Intern Pe.",
      duration: "Aug - Oct '24",
      description: [
        "gggggggg",
      ],
    },
    // {
    //   title: "Community Lead",
    //   company: "",
    //   duration: "2022 - 2023",
    //   description: [
    //     "gjjjjhgjjfjjggjgjgjffjggj",
    //   ],
    // },
  ];

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {/* Loop through the experiences */}
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            {/* Timeline icon (fixed in corners) */}
            <div className="timeline-icon">
              <span role="img" aria-label="briefcase">
                👜
              </span>
            </div>
            {/* Timeline content */}
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
