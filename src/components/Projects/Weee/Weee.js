import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as WeeeContent from './WeeeContent.js'
import './Weee.css'

function Weee() {
  return (
    <>
      <Container className="project-content" maxWidth="xl">
        <Grid container columns={16} columnSpacing={12}>
          <Grid className="menuBlock" item sm={0} md={3}>
            <Menu menuItems={{
              Summary: null, 
              BackgroundResearch: null, 
              UserResearch: null,
              DesignPatterns: null,
              Sketching: null,
              Wireframing: null,
              PrototypingDetails: null,
              Challenges: null,
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}}>
            <WeeeContent.Intro/>
            <WeeeContent.Summary/>
            <WeeeContent.BackgroundResearch/>
            <WeeeContent.UserResearch/>
            <WeeeContent.DesignPatterns/>
            <WeeeContent.Sketching/>
            <WeeeContent.Wireframing/>
            <WeeeContent.PrototypingDetails/>
            <WeeeContent.Challenges/>
          </Grid>
        </Grid>
      </Container>
    </>
    
  )
}
 
export default Weee