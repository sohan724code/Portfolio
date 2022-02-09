import React from "react";
import "./Project.css";
import { DiGithubBadge } from "react-icons/di";
import { Button } from "@mui/material";

const Project = ({ project }) => {
  const { link, img, demoLink } = project;
  return (
    <div className="p" title="Click to see source">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-img-wrapper">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </div>
      <div className="p-button">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="p-button-link"
        >
          <Button
            variant="contained"
            sx={{ width: { lg: "75%", md: "75%", xs: "90%" } }}
            style={{ height: "40px", fontSize: "2em" }}
          >
            <DiGithubBadge />
          </Button>
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="p-button-link"
        >
          <Button
            variant="contained"
            sx={{ width: { lg: "75%", md: "75%", xs: "90%" } }}
            style={{ height: "40px", fontSize: "1em" }}
          >
            Demo
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Project;
