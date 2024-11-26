import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as FitvioContent from './FitvioContent.js'
import './Fitvio.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'

function Fitvio(props) {
  document.title = "Fitvio — Eileen Chen";
  return (
    <>
      <Container className="project-content" maxWidth="xl">
        <Grid container columns={16} columnSpacing={12}>
          <Grid className="menuBlock" item sm={0} md={3}>
            <Menu menuItems={{
              BackToTop: null,
              Motivation: null,
              Problem: null, 
              UnderstandingUsers: null,
              ProductRoadmapping: null,
              UserAcquisitionOnboarding: null,
              Rebranding: null,
              Challenges: null
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={13} sx={{pb:10}} data-aos="fade-up">
            <FitvioContent.Intro/>
            <FitvioContent.Motivation/>
            <FitvioContent.Problem/>
            <FitvioContent.UnderstandingUsers/>
            <FitvioContent.ProductRoadmapping/>
            <FitvioContent.UserAcquisitionOnboarding/>
            <FitvioContent.Rebranding/>
            <FitvioContent.Challenges/>
          </Grid>
        </Grid>
      </Container>
      <MoreProjects relatedProjects={['What2Yum', 'CapitalOne', 'Weee']}/>
    </>
    
  )
}
 
export default Fitvio