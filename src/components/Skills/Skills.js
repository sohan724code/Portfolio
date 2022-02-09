import { Container } from "@mui/material";
import React from "react";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import "./Skills.css";

function Skills() {
  return (
    <Container className="about-section" id="skills">
      <Container>
        <h1 style={{ textAlign: "center" }}>
          Professional <strong style={{ color: "#2980b6" }}>Skillset </strong>
        </h1>

        <Techstack />

        <h1 style={{ textAlign: "center" }}>
          <strong style={{ color: "#2980b6" }}>Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
