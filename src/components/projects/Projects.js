import React from "react";
import Project from "../project/Project";
import "./Projects.css";
import projects from "../../data";

const Projects = () => {
  return (
    <div className="ps">
      <div className="ps-texts">
        <h1 className="ps-title"> My Creations</h1>
        <p className="ps-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          esse.
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
