import React from "react";
import { Grid } from "@mui/material";

const About = () => {
  const shanePhoto = "/images/Shane professional-modified.png";
  return (
    <div>
      <section id="hero">
        
      </section>
      <div id="about">
        <h2>About me</h2>

        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <img
              src={shanePhoto}
              alt="Shane professional"
              style={{ width: "300px", height: "300px" }}
            />
          </Grid>
          <Grid item xs={12} md={6} size={6}>
            <p>
              I am a front-end developer with experience building responsive and
              accessible web applications. I enjoy learning new technologies and
              creating clean user experiences. My skills include React,
              JavaScript, HTML, CSS, and Material UI, and I am passionate about
              problem solving and collaborating on projects that make an impact.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export { About };
