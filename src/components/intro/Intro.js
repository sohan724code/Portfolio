import React from "react";
import "./Intro.css";
import HOME from "../../images/undraw_programming_re_kg9v.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Button from "@mui/material/Button";
import useDark from "../../hooks/useDark";

const Intro = () => {
  const { dark } = useDark();
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">
            hello,
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>{" "}
            I'm
          </h2>
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
          <div className="i-icons">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sohan724code"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/md.sohanislam.94402/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Sohan_Code"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sohan-islam-7a9962223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sohan724code/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <div className="i-button">
              <a
                href="https://www.github.com/sohan724code"
                target="_blank"
                rel="noreferrer"
                className="i-button-link"
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#2980b6" }}
                  sx={{ width: { xs: "90%", lg: "75%", md: "75%" } }}
                >
                  Follow me on Github
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={HOME} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
