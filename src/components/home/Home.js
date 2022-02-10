import React from "react";
import Contact from "../../contact/Contact";
import useDark from "../../hooks/useDark";
import Toggle from "../../toggle/Toggle";
import About from "../about/About";
import Intro from "../intro/Intro";
import Personal from "../Personal/Personal";
import Projects from "../projects/Projects";
import Skills from "../Skills/Skills";
import Fade from "react-reveal/Fade";
import JumpBtn from "../Shared/JumpBtn/JumpBtn";

const Home = () => {
  const { dark } = useDark();
  return (
    <div
      style={{
        backgroundColor: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#222",
      }}
    >
      <Toggle />

      <JumpBtn />

      <Fade bottom>
        <Intro />
      </Fade>
      <Fade left>
        <About />
      </Fade>
      <Fade right>
        <Skills />
      </Fade>
      <Fade left>
        <Projects />
      </Fade>
      <Fade right>
        <Personal />
      </Fade>
      <Fade left>
        <Contact />
      </Fade>
    </div>
  );
};

export default Home;
