import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../Polaroid/Polaroid.js';
import Button from '../Button/Button.js';
import tonysImage from '../../images/me_w_tonys_pizza.JPG'
import Resume from '../../images/EileenZChen_Resume.pdf';

function About() {
  return (
    <div className="heading-text">
      <Container maxWidth="lg">
        <Grid container columns={12} rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        {/* about */}
        <Grid item xs={12} md={8}>
          <br></br><br></br><br></br><br></br>
          <h1 className="monospace-400">Hey, I’m <span className="monospace-500 highlight">Eileen</span>!</h1>
          <h1 className="monospace-400">Here’s a little about me 🤗</h1>
          {/* about me descriptions  */}
          <Grid container columns={12}>
            <Grid item xs={12} sm={3}>
              <h2 className="monospace-500 highlight" style={{marginTop: 5}}>identity</h2>
            </Grid>
            <Grid item xs={12} sm={9} className="monospace-400">
              <h2 className="monospace-400" style={{marginTop: 5}}>designer, engineer, asian american woman</h2>
            </Grid>

            <Grid item xs={12} sm={3}>
              <h2 className="monospace-500 highlight" style={{marginTop: 5}}>personality</h2>
            </Grid>
            <Grid item xs={12} sm={9} className="monospace-400">
              <h2 className="monospace-400" style={{marginTop: 5}}>driven, empathetic, detail-oriented</h2>
            </Grid>

            <Grid item xs={12} sm={3}>
              <h2 className="monospace-500 highlight" style={{marginTop: 5}}>hobbies</h2>
            </Grid>
            <Grid item xs={12} sm={9} className="monospace-400">
              <h2 className="monospace-400" style={{marginTop: 5}}>traveling, cooking, playing music, planting</h2>
            </Grid>
          </Grid>
        </Grid>
        {/* polaroid */}
        <Grid item xs={12} md={4}>
          <Polaroid 
            linkUrl="#" 
            imageUrl={tonysImage} 
            alt="Me with Tony's Pizza"
            polaroidTitle="Tony's Pizza ~ 5.4.22"
            polaroidDescription="the best pizza I’ve ever had 🍕"
            aspectRatio="aspectRatioRegular">
          </Polaroid>
          <Button buttonText="resumé" buttonLink={Resume} target="_blank"></Button>
        </Grid>

      </Grid>
    </Container>
      
    </div>
  )
}

export default About