import React from 'react'
import './NotFound.css';
import { Container, Grid } from '@mui/material';
import SadPlant from '../../images/sad_plant.png';

function NotFound() {
  return (      
    <header>
      <Container maxWidth="lg">
        <Grid container columns={12} pt={12} pb={12}>
          <Grid item xs={12} md={4} style={{ display: "flex", justifyContent: "center"}}>
            <img src={SadPlant} style={{maxWidth: 200, alignSelf:"center"}}></img>
          </Grid>
          <Grid item xs={12} md={8} style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <h1 className="monospace-300 heading-text">The page you're looking for does not exist.</h1>
            <h1 className="monospace-300 heading-text">Let's bring you <a href="/" className="highlight">home</a>.</h1>
          </Grid>
        </Grid>
        
        
      </Container>
    </header>
  )
}

export default NotFound