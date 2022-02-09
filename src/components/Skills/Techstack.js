import React from "react";
import "./Skills.css";
import { Grid } from "@mui/material";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";

function Techstack() {
  return (
    <Grid
      container
      spacing={2}
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      <Grid item xs={6} md={3} className="tech-icons" title="HTML5">
        <SiHtml5 />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="CSS3">
        <SiCss3 />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="Nodejs">
        <DiNodejs />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="React">
        <DiReact />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="MongoDb">
        <DiMongodb />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="Git">
        <DiGit />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Grid>
    </Grid>
  );
}

export default Techstack;
