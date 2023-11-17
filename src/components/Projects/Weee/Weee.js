import React, { useEffect } from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as WeeeContent from './WeeeContent.js'
import './Weee.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

function Weee() {
  document.title = "Weee! — Eileen Chen";
  return (
    <>
      {/* return home link */}
      <Container maxWidth="xl" style={{marginLeft:"0px"}}>
        <a href="/" className="return-home-link">
          <span className="return-home-container">
            <KeyboardArrowLeftRoundedIcon sx={{mr:1}} style={{marginTop: "1px"}}/>
            <span>return home</span>
          </span>
        </a>
      </Container>
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