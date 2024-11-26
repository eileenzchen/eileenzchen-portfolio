import React, { useEffect } from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as WeeeContent from './WeeeContent.js'
import './Weee.css'
import MoreProjects from '../MoreProjects/MoreProjects.js'

function Weee(props) {
  document.title = "Weee! — Eileen Chen";
  return (
    <>
      <Container className="project-content" maxWidth="xl">
        <Grid container columns={16} columnSpacing={12}>
          <Grid className="menuBlock" item sm={0} md={3}>
            <Menu menuItems={{
              BackToTop: null,
              Inspiration: null,
              Problem: null, 
              Research: null, 
              CompetitiveAnalysis: null,
              Sketching: null,
              Wireframing: null,
              PrototypingDetails: null,
              Color: null,
              Joy: null,
              Reflections: null,
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={13} sx={{pb:10}}>
            <WeeeContent.Intro/>
            <WeeeContent.Inspiration/>
            <WeeeContent.Problem/>
            <WeeeContent.Research/>
            <WeeeContent.CompetitiveAnalysis/>
            <WeeeContent.Sketching/>
            <WeeeContent.Wireframing/>
            <WeeeContent.PrototypingDetails/>
            <WeeeContent.Color/>
            <WeeeContent.Joy/>
            <WeeeContent.Reflections/>
          </Grid>
        </Grid>
      </Container>
      <MoreProjects relatedProjects={['What2Yum', 'Fitvio', 'CapitalOne']}/>
    </>
    
  )
}
 
export default Weee