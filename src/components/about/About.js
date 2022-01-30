import React from "react";
import "./About.css";
import Me from "../../images/avatar.svg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          adipisci!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nam
          pariatur officiis maxime beatae ut cupiditate, hic error. Error,
          recusandae.
        </p>
      </div>
    </div>
  );
};

export default About;
