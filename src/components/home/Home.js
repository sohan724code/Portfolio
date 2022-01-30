import React from "react";
import Contact from "../../contact/Contact";
import useDark from "../../hooks/useDark";
import Toggle from "../../toggle/Toggle";
import About from "../about/About";
import Intro from "../intro/Intro";
import Projects from "../projects/Projects";

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
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
