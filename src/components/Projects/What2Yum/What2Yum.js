import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as What2YumContent from './What2YumContent.js'
import './What2Yum.css'
import '../Projects.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'

function What2Yum() {
  document.title = "What2Yum — Eileen Chen";
  return (
    <>
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