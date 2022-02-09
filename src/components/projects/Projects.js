import React from "react";
import Project from "../project/Project";
import "./Projects.css";
import projects from "../../data";

const Projects = () => {
  return (
    <div className="ps" id="projects">
      <div className="ps-texts">
        <h1 className="ps-title">
          {" "}
          My <strong style={{ color: "#2980b6" }}>Creations</strong> &{" "}
          <strong style={{ color: "#2980b6" }}>ideas</strong>
        </h1>
        <p className="ps-desc">
          This is my recent projects which i make with my heart 💙 and
          knowledge.
        </p>
      </div>
      <div className="ps-list">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
