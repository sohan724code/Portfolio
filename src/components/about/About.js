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
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
        </p>
        <p className="a-desc">
          I love to develop new websites using{" "}
          <strong>HTML,css javaScript</strong>. I am a{" "}
          <strong>self learn developer</strong> and a very fast learner i love
          my work and i am very confident about my every work.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1k0Z9Di2eJVJ28jPaRyIDMtGiOzzJazo9"
          target="_blank"
          rel="noreferrer"
          className="a-link"
          title="Click to see Resume"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
