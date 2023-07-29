import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../../../components/Polaroid/Polaroid.js';
import PrimaryButton from '../../PrimaryButton/PrimaryButton.js';
import ProjectSummary from '../../../components/ProjectSummary/ProjectSummary.js'
import './ProjectSection.css';


function ProjectSectionTan(props) {
  return (
    <div className="projectSectionTan">
      <Container maxWidth="lg">
        <Grid container columns={12} rowSpacing={0} columnSpacing={{ xs: 1, md: 8 }}>

          {/* polaroid */}
          <Grid item xs={12} md={8}>
            <Polaroid 
              linkUrl={props.projectProps.polaroid.linkUrl}
              imageUrl={props.projectProps.polaroid.imageUrl}
              alt={props.projectProps.polaroid.alt}
              polaroidTitle={props.projectProps.polaroid.polaroidTitle}
              polaroidDescription={props.projectProps.polaroid.polaroidDescription}
              aspectRatio={props.projectProps.polaroid.aspectRatio}>
            </Polaroid>
          </Grid>

          {/* <Grid item xs={0} md={1}></Grid> */}

          {/* project description */}
          <Grid item xs={12} md={4}>
            <div className="dividerBrown"></div>
            <ProjectSummary desc={props.projectProps.desc}/>
            <PrimaryButton buttonText={props.projectProps.button.buttonText} buttonLink={props.projectProps.button.buttonLink} target={props.projectProps.button.target}></PrimaryButton>
          </Grid>
        </Grid>
      </Container>
        
    </div>
   
  )
}

export default ProjectSectionTan