import React from "react";
import "./Intro.css";
import ME from "../../images/avatar.svg";
import HOME from "../../images/home-main.svg";
import useDark from "../../hooks/useDark";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">hello,My name is</h2>
          <h1 className="i-name">Jahidul Islam</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">Web designer</div>

              <div className="i-title-item">MERN developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develope services for customers of all sizes,
            specializing in creating styling, modern websites, services,online
            stores.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={HOME} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
