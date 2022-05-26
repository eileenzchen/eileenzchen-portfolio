import React from 'react';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./ProjectPreview.css";

function Project2Preview() {
  const photo = require('../images/img-home.jpeg');
  return (
    <div id="Project2Preview">
      <Paper>
        <Grid container columns={12} spacing={1} p={3} mb={3}>
          <Grid item xs={12} md={8} p={0}>
             <img className="PreviewImage" src={photo} alt="project 2 image"/>              
          </Grid>
          <Grid item xs={12} md={4}>
            <h2>Project 2</h2>
            <p>Short description of project</p>
            <p>Role</p>
            <p>Skills</p>
            <p>Tools</p>
          </Grid>
        </Grid>
      </Paper>
   </div>
  )
}

export default Project2Preview