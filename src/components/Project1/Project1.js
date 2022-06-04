import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../Menu/Menu.js'
import {Intro, Problem} from './Project1Sections.js'

function Project1(props) {

  return (
    <>
      <Container maxWidth="lg">
        <Grid container columns={12}>
          <Grid item xs={0} sm={4} display={{ xs: "none", sm: "block" }}>
            <Menu menuItems={{Intro:null, Problem:null}}></Menu>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Intro/>
            <Problem/>
          </Grid>
        </Grid>
      </Container>
    </>
    
  )
}

export default Project1