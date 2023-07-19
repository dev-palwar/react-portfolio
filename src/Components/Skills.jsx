import React from "react";
import { SkillBar } from "react-skillbars";
// import './Skills.css';

const Skills = () => {
  const skills = [
    { type: "HTML", level: 90 },
    { type: "CSS", level: 80 },
    { type: "JavaScript", level: 70 },
    { type: "React", level: 30 },
    { type: "Git/GitHub", level: 70 },
  ];

  const colors = {
    bar: "#007bff",
    title: {
      text: "#fff",
      background: "rgba(83, 83, 83, 0.47)",
    },
  };

  const skillBarStyles = {
    height: "35px",
    borderRadius: "10px",
    marginBottom: "40px",
  };

  return (
    <>
      <div className="skill-section" id="Skills">
        <div className="image">
          <img
            src={
              "https://o.remove.bg/downloads/b8b1b00b-9f47-4fa4-ad95-f8f796f10d50/imgg-removebg-preview.png"
            }
            alt=""
          />
        </div>
        <div className="skills-info">
          <h1>Skills</h1>
          <SkillBar
            className="skill"
            skills={skills}
            colors={colors}
            height={28}
            borderRadius={10}
            {...skillBarStyles}
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
