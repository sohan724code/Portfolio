import React from "react";
import "./Personal.css";
import Me from "../../images/sohan.jpg";
import { ImPointRight } from "react-icons/im";

const Personal = () => {
  return (
    <div className="pr" id="contact">
      <div className="pr-left">
        <div className="a-card bg"></div>
        <div className="pr-card">
          <img src={Me} alt="" className="pr-img" />
        </div>
      </div>
      <div className="pr-right">
        <h1 className="pr-title">
          It's <strong style={{ color: "#2980b6" }}>About</strong> me
        </h1>
        <p className="pr-sub">
          I am <strong style={{ color: "#2980b6" }}>Jahidul Islam Sohan</strong>{" "}
          From <strong style={{ color: "#2980b6" }}>Dhaka, Bangladesh </strong>
          🇧🇩.
        </p>
        <p className="pr-desc">
          Apart from coding, some other activities that I love to do!
          <br />
          <br />
          <ul>
            <li className="pr-activity">
              <ImPointRight /> Playing Guiter
            </li>
            <li className="pr-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="pr-activity">
              <ImPointRight /> Landscape Photography
            </li>
          </ul>
        </p>
        <a
          href="https://drive.google.com/file/d/1sWW9cKUw8zHsf5H-wTTBKPtwPMc3yOSm/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="pr-link"
          title="Click to see Resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Personal;
