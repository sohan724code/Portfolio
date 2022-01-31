import React from "react";
import Project from "../project/Project";
import "./Projects.css";
import projects from "../../data";

const Projects = () => {
  return (
    <div className="ps">
      <div className="ps-texts">
        <h1 className="ps-title"> My Creations & ideas</h1>
        <p className="ps-desc">
          This is my recent projects which i make with my heart and knowledge.
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
