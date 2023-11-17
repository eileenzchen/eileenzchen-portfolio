import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as What2YumContent from './What2YumContent.js'
import './What2Yum.css'
import '../Projects.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

function What2Yum() {

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
              Problem: null, 
              CompetitiveAnalysis: null,
              SolutionExploration: null,
              FinalDesign: null,
              Challenges: null
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}} data-aos="fade-up">
            <What2YumContent.Intro/>
            <What2YumContent.Summary/>
            <What2YumContent.Problem/>
            <What2YumContent.CompetitiveAnalysis/>
            <What2YumContent.SolutionExploration/>
            <What2YumContent.FinalDesign/>
            <What2YumContent.Challenges/>
          </Grid>
        </Grid>
      </Container>
      <MoreProjects relatedProjects={['Fitvio', 'BakingFactory', 'Weee']}/>
    </>
    
  )
}

export default What2Yum