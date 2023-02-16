import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as What2YumContent from './What2YumContent.js'
import './What2Yum.css'
import '../Projects.css'

function What2Yum() {

  return (
    <>
      <Container className="project-content" maxWidth="xl">
        <Grid container columns={16} columnSpacing={12}>
          <Grid className="menuBlock" item sm={0} md={3}>
            <Menu menuItems={{
              Intro:null, 
              Summary:null, 
              Problem:null, 
              IdeationValueProp: null,
              IdeationFeatures: null,
              WireframesTesting: null,
              FeaturePrioritization: null,
              WorkingWithinConstraints: null,
              FinalPitch: null,
              Learnings: null
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}}>
            <What2YumContent.Intro/>
            <What2YumContent.Summary/>
            <What2YumContent.Problem/>
            <What2YumContent.IdeationValueProp/>
            <What2YumContent.IdeationFeatures/>
            <What2YumContent.WireframesTesting/>
            <What2YumContent.FeaturePrioritization/>
            <What2YumContent.WorkingWithinConstraints/>
            <What2YumContent.FinalPitch/>
            <What2YumContent.Learnings/>
          </Grid>
        </Grid>
      </Container>
    </>
    
  )
}

export default What2Yum