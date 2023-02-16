import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../../../components/Polaroid/Polaroid.js';
import Button from '../../../components/Button/Button.js';
import ProjectSummary from '../../../components/ProjectSummary/ProjectSummary.js'
import './ProjectSection.css';


function ProjectSectionWhite(props) {
  return (
    <div className="projectSectionWhite">
      <Container maxWidth="lg">
        <Grid container columns={12} rowSpacing={0} columnSpacing={{ xs: 1, md: 8 }}>

          {/* <Grid item xs={0} md={1}></Grid> */}

          {/* project description */}
          <Grid item xs={12} md={4} order={{ xs: 2, md: 1}}>
            <div className="dividerTan"></div>
            <ProjectSummary desc={props.projectProps.desc}/>
            <Button buttonText={props.projectProps.button.buttonText} buttonLink={props.projectProps.button.buttonLink} target={props.projectProps.button.target}></Button>
          </Grid>

          {/* polaroid */}
          <Grid item xs={12} md={8} order={{ xs: 1, md: 2}}>
            <Polaroid 
              linkUrl={props.projectProps.polaroid.linkUrl}
              imageUrl={props.projectProps.polaroid.imageUrl}
              alt={props.projectProps.polaroid.alt}
              polaroidTitle={props.projectProps.polaroid.polaroidTitle}
              polaroidDescription={props.projectProps.polaroid.polaroidDescription}
              aspectRatio={props.projectProps.polaroid.aspectRatio}>
            </Polaroid>
          </Grid>
        </Grid>
      </Container>
        
    </div>
   
  )
}

export default ProjectSectionWhite