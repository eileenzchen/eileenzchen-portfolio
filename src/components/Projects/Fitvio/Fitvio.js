import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as FitvioContent from './FitvioContent.js'
import './Fitvio.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'

function Fitvio() {
  document.title = "Fitvio — Eileen Chen";
  return (
    <>
      <Container className="project-content" maxWidth="xl">
        <Grid container columns={16} columnSpacing={12}>
          <Grid className="menuBlock" item sm={0} md={3}>
            <Menu menuItems={{
              BackToTop: null,
              Summary: null, 
              UnderstandingUsers: null,
              ProductRoadmapping: null,
              UserAcquisitionOnboarding: null,
              Rebranding: null,
              Challenges: null
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}} data-aos="fade-up">
            <FitvioContent.Intro/>
            <FitvioContent.Summary/>
            <FitvioContent.UnderstandingUsers/>
            <FitvioContent.ProductRoadmapping/>
            <FitvioContent.UserAcquisitionOnboarding/>
            <FitvioContent.Rebranding/>
            <FitvioContent.Challenges/>
          </Grid>
        </Grid>
      </Container>
      <MoreProjects relatedProjects={['BakingFactory', 'CapitalOne', 'Weee']}/>
    </>
    
  )
}
 
export default Fitvio