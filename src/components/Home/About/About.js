import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../../../components/Polaroid/Polaroid.js';
import Button from '../../../components/Button/Button.js';
// @ts-ignore
import resume from '../assets/EileenZChen_resume.pdf';
import tonysImage from '../assets/me_w_tonys_pizza.jpg';
import './About.css'


function About() {
  return (
    <div style={{marginBottom: 30}}>
      <Container maxWidth="lg">
        <Grid container columns={12} rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        {/* about */}
        <Grid item xs={12} md={8}>
          <div className="spacer"></div>
          <h1 className="monospace-400">Hey, I'm <span className="monospace-500 highlight">Eileen</span>!</h1>
          <h2 className="monospace-500">Here's a little about me 🤗</h2>
          <br></br>
          {/* about me descriptions  */}
          <Grid container columns={12}>
            <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5}}>
                <span className="monospace-500 highlight">identity</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9} className="monospace-400">
              <h2 className="monospace-400" style={{marginTop: 5}}>designer, engineer, asian american woman</h2>
            </Grid>

            <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5}}>
                <span className="monospace-500 highlight">personality</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9} className="monospace-400">
              <h2 className="monospace-400" style={{marginTop: 5}}>driven, empathetic, detail-oriented</h2>
            </Grid>

            <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5}}>
                <span className="monospace-500 highlight">hobbies</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9} className="monospace-400">
              <h2 className="monospace-400" style={{marginTop: 5}}>traveling, cooking, playing music, planting</h2>
            </Grid>
            <Button buttonText="resumé" buttonLink={resume} target="_blank" rel="noopener noreferrer nofollow"></Button>
          </Grid>
        </Grid>
        {/* polaroid */}
        <Grid item xs={12} md={4}>
          <Polaroid 
            linkUrl="" 
            imageUrl={tonysImage} 
            alt="Me with Tony's Pizza"
            polaroidTitle="Tony's Pizza ~ 5.4.22"
            polaroidDescription="the best pizza in SF 🍕"
            aspectRatio="aspectRatioRegular">
          </Polaroid>
        </Grid>

      </Grid>
    </Container>
      
    </div>
  )
}

export default About