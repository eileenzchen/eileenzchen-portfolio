import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../Polaroid/Polaroid.js';
import Button from '../Button/Button.js';
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

          {/* project description */}
          <Grid item xs={12} md={5} justifyContent="right">
            <div className="dividerBrown"></div>
            <table>
              <tr>
                <td className="monospace-500">role</td>
                <td className="monospace-400">{props.projectProps.desc.role}</td>
              </tr>
              <tr>
                <td className="monospace-500">team</td>
                <td className="monospace-400">{props.projectProps.desc.team}</td>
              </tr>
              <tr>
                <td className="monospace-500">skills</td>
                <td className="monospace-400">{props.projectProps.desc.skills}</td>
              </tr>
              <tr>
                <td className="monospace-500">tools</td>
                <td className="monospace-400">{props.projectProps.desc.tools}</td>
              </tr>
              <tr>
                <td className="monospace-500">duration</td>
                <td className="monospace-400">{props.projectProps.desc.duration}</td>
              </tr>
            </table>
            <Button buttonText={props.projectProps.button.buttonText} buttonLink={props.projectProps.button.buttonLink} target={props.projectProps.button.target}></Button>
          </Grid>
        </Grid>
      </Container>
        
    </div>
   
  )
}

export default ProjectSectionTan