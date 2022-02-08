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
          I fell in love with{" "}
          <strong style={{ color: "#2980b6" }}>Web Developing</strong> and I
          have at least learnt something, I think… 🤷‍♂️
        </p>
        <p className="a-desc">
          A passionate{" "}
          <strong style={{ color: "#2980b6" }}>
            Full Stack Software Developer
          </strong>{" "}
          🚀 having an experience of building Web and Mobile applications with{" "}
          <strong style={{ color: "#2980b6" }}>
            JavaScript / Reactjs / Nodejs / React Native
          </strong>{" "}
          and some other cool libraries and frameworks.
        </p>
        <a
          href="https://drive.google.com/file/d/1sWW9cKUw8zHsf5H-wTTBKPtwPMc3yOSm/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="a-link"
          title="Click to see Resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default About;
