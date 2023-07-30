import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../../Polaroid/Polaroid.js'
import * as ProjectDetails from 'components/Constants.js';
import { projectsMap } from 'components/Constants.js';
import './MoreProjects.css'
function MoreProjects(props) {

  const polaroidsList = props.relatedProjects.map((projectKey, i) => 
    <Polaroid 
      linkUrl={projectsMap[projectKey].polaroid.linkUrl}
      imageUrl={projectsMap[projectKey].polaroid.imageUrl} 
      alt={projectsMap[projectKey].polaroid.alt} 
      polaroidTitle={projectsMap[projectKey].polaroid.polaroidTitle} 
      polaroidDescription={projectsMap[projectKey].polaroid.polaroidDescription}
      aspectRatio={projectsMap[projectKey].polaroid.aspectRatio}/>
    // <MenuItem itemName={e} key={`menuitem_${i}`} displayName={menuNameMappings[e]} linkClass={e === activeItem ? "link activeItem" : "link"} containerClass={e === activeItem ? "activeItemContainer" : ''}  />
    // linkUrl: "/fitvio",
    // imageUrl: FitvioPreview,
    // alt: "Fitvio Startup",
    // polaroidTitle: "Fitvio",
    // polaroidDescription: "Designing an easily accessible fitness app – and wearing many design hats along the way",
    // aspectRatio: "aspectRatioWide"
  );
  return (
    <section className="related-projects-container">
      <Grid container columns={3} spacing={{xs: 1, md: 4}}>
        <Grid item xs={3}>
          <h2 className="related-projects-heading"><span>more from my portfolio</span></h2>
        </Grid>
        {polaroidsList.map((polaroid) => (
          <Grid item xs={3} md={1}>
            {polaroid}
          </Grid>
        ))}
      </Grid>
    </section>


  )
}

export default MoreProjects