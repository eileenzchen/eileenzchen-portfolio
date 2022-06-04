import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../Polaroid/Polaroid.js';
import Button from '../Button/Button.js';
import ProjectSummary from './ProjectSummary.js'
import './ProjectSection.css';


function ProjectSectionTan(props) {
  return (
    <div className="projectSectionTan">
      <Container maxWidth="lg">
        <Grid container columns={12} rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          {/* polaroid */}
          <Grid item xs={12} md={7}>
            <Polaroid 
              linkUrl={props.projectProps.polaroid.linkUrl}
              imageUrl={props.projectProps.polaroid.imageUrl}
              alt={props.projectProps.polaroid.alt}
              polaroidTitle={props.projectProps.polaroid.polaroidTitle}
              polaroidDescription={props.projectProps.polaroid.polaroidDescription}
              aspectRatio={props.projectProps.polaroid.aspectRatio}>
            </Polaroid>
          </Grid>

          <Grid item xs={0} md={1}></Grid>

          {/* project description */}
          <Grid item xs={12} md={4}>
            <div className="dividerBrown"></div>
            <ProjectSummary desc={props.projectProps.desc}/>
            <Button buttonText={props.projectProps.button.buttonText} buttonLink={props.projectProps.button.buttonLink} target={props.projectProps.button.target}></Button>
          </Grid>
        </Grid>
      </Container>
        
    </div>
   
  )
}

export default ProjectSectionTan