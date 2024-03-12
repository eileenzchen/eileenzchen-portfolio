import React, { useEffect } from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as WeeeContent from './WeeeContent.js'
import './Weee.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'

function Weee() {
  document.title = "Weee! — Eileen Chen";
  return (
    <>
      <Container className="project-content" maxWidth="xl">
        <Grid container columns={16} columnSpacing={12}>
          <Grid className="menuBlock" item sm={0} md={3}>
            <Menu menuItems={{
              BackToTop: null,
              Summary: null, 
              BackgroundResearch: null, 
              UserResearch: null,
              DesignPatterns: null,
              Sketching: null,
              Wireframing: null,
              PrototypingDetails: null,
              Color: null,
              Joy: null,
              Challenges: null,
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}} data-aos="fade-up">
            <WeeeContent.Intro/>
            <WeeeContent.Summary/>
            <WeeeContent.BackgroundResearch/>
            <WeeeContent.UserResearch/>
            <WeeeContent.DesignPatterns/>
            <WeeeContent.Sketching/>
            <WeeeContent.Wireframing/>
            <WeeeContent.PrototypingDetails/>
            <WeeeContent.Color/>
            <WeeeContent.Joy/>
            <WeeeContent.Challenges/>
          </Grid>
        </Grid>
      </Container>
      <MoreProjects relatedProjects={['What2Yum', 'Fitvio', 'BakingFactory']}/>
    </>
    
  )
}
 
export default Weee