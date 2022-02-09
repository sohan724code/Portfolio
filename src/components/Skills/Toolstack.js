import React from "react";
import { Grid } from "@mui/material";
import "./Skills.css";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiAtom,
} from "react-icons/si";

function Toolstack() {
  return (
    <Grid
      container
      spacing={2}
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      <Grid item xs={6} md={3} className="tech-icons" title="Atom">
        <SiAtom />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="Postman">
        <SiPostman />
      </Grid>
      <Grid item xs={6} md={3} className="tech-icons" title="Heroku">
        <SiHeroku />
      </Grid>
    </Grid>
  );
}

export default Toolstack;
