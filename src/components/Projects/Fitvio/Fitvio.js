import React from 'react'
import { Grid, Container } from '@mui/material';
import Menu from '../../Menu/Menu.js'
import * as FitvioContent from './FitvioContent.js'
import './Fitvio.css'

function Fitvio() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container columns={14}>
          <Grid className="menuBlock" item sm={0} md={4}>
            <Menu menuItems={{
              Intro:null, 

              }}></Menu>
          </Grid>
          <Grid item sm={14} md={10} sx={{pb:10}}>
            <FitvioContent.Intro/>
            
          </Grid>
        </Grid>
      </Container>
    </>
    
  )
}
 
export default Fitvio