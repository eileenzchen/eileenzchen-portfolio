import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as FitvioContent from './FitvioContent.js'
import './Fitvio.css'

function Fitvio() {
  return (
    <>
      <Container className="project-content" maxWidth="xl">
        <Grid container columns={16} columnSpacing={12}>
          <Grid className="menuBlock" item sm={0} md={3}>
            <Menu menuItems={{
              // Summary: null, 
              // Problem: null, 
              // CompetitiveAnalysis: null,
              // SolutionExploration: null,
              // FinalDesign: null,
              }}></Menu>
          </Grid>
          <Grid item sm={16} md={10} sx={{pb:10}}>
            {/* <What2YumContent.Intro/>
            <What2YumContent.Summary/>
            <What2YumContent.Problem/>
            <What2YumContent.CompetitiveAnalysis/>
            <What2YumContent.SolutionExploration/>
            <What2YumContent.FinalDesign/> */}
          </Grid>
        </Grid>
      </Container>
    </>
    
  )
}
 
export default Fitvio