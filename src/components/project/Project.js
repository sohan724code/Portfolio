import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  const { link, img } = project;
  return (
    <div className="p" title="Click to see source">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Project;
