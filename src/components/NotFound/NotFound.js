import React from 'react'
import './NotFound.css';
import { Container, Grid } from '@mui/material';
import SadPlant from '../../images/sad_plant.png';

function NotFound() {
  return (      
    <header>
      <Container maxWidth="lg">
        <Grid container columns={12} pt={12} pb={12} alignItems="center">
          <Grid item xs={12} sm={3} align="center">
            <img src={SadPlant} style={{maxWidth: 150, alignSelf:"center"}} alt="sad plant page not found"></img>
          </Grid>
          <Grid item xs={12} sm={9} style={{ alignContent: "center"}}>
            <br></br><br></br><br></br><br></br>
            <h2 className="monospace-300 heading-text">The page you're looking for does not exist.</h2>
            <h2 className="monospace-300 heading-text">Let's bring you <a href="/" className="highlight">home</a>.</h2>
            <br></br><br></br><br></br><br></br>
          </Grid>
        </Grid>
        
        
      </Container>
    </header>
  )
}

export default NotFound