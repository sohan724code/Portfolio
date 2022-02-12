import React from "react";
import Project from "../project/Project";
import "./Projects.css";
import { CircularProgress } from "@mui/material";
import Recharge from "../../images/screencapture-re-charge-11075-web-app-2022-01-30-23_43_24.png";
import Eggy from "../../images/screencapture-eggy-website-netlify-app-home-2022-01-30-23_49_34.png";
import Makeup from "../../images/screencapture-vigilant-shockley-e63c57-netlify-app-2022-01-30-23_46_07.png";
import Dental from "../../images/screencapture-dental-care-10-netlify-app-home-2022-01-30-23_48_19.png";
const projects = [
  {
    id: 1,
    img: Recharge,
    link: "https://github.com/sohan724code/re-charge-client",
    demoLink: "https://re-charge-11075.web.app/",
  },
  {
    id: 2,
    img: Eggy,
    link: "https://github.com/sohan724code/eggy-client",
    demoLink: "https://eggy-website.netlify.app/home",
  },
  {
    id: 3,
    img: Makeup,
    link: "https://github.com/sohan724code/good-makeup-client",
    demoLink: "https://vigilant-shockley-e63c57.netlify.app/",
  },
  {
    id: 4,
    img: Dental,
    link: "https://github.com/sohan724code/health-care",
    demoLink: "https://dental-care-10.netlify.app/home",
  },
];

const Projects = () => {
  return (
    <div className="ps">
      <div className="ps-texts" id="projects">
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
      {projects?.length ? (
        <div className="ps-list">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Projects;
