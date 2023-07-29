import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../../../components/Polaroid/Polaroid.js';
import SecondaryButton from '../../SecondaryButton/SecondaryButton.js';
// @ts-ignore
// import resume from '../assets/EileenZChen_resume.pdf';
import tonysImage from '../assets/me_w_tonys_pizza.jpg';
import tonysImageCropped from '../assets/me_w_tonys_pizza_cropped.jpg'
import './About.css'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import PrimaryButton from '../../PrimaryButton/PrimaryButton.js';

function About() {
  const handleClick = event => {
    event.preventDefault();
    const anchor = document.querySelector('#weee-project');
    anchor.scrollIntoView({ behavior: 'smooth', block: "start" });
  };
  return (
    <div style={{marginBottom: 30}}>
      <Container maxWidth="lg">
        <Grid container columns={12} rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* <Grid item xs={12} md={8}>
          <div className="spacer"></div>
          <h1 className="monospace-400">Hey, I'm <span className="monospace-500 highlight">Eileen</span>!</h1>
        </Grid> */}
        {/* about */}
        <Grid item xs={12} md={8} order={{ xs: 2, sm: 1 }}>
          <div className="spacer"></div>
          <h1 className="monospace-400">Hey, I'm <span className="monospace-500 highlight">Eileen</span>!</h1>
          
          <h2 className="monospace-500">Here's a little about me 🤗</h2>
          <br></br>
          {/* about me descriptions  */}
          <Grid container columns={12}>
            <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5, letterSpacing: 1}}>
                <span className="highlight">identity</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h2 style={{marginTop: 5, letterSpacing: 1, fontWeight: 300}}>designer, engineer, asian american woman</h2>
            </Grid>

            <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5, letterSpacing: 1}}>
                <span className="highlight">personality</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h2 style={{marginTop: 5, letterSpacing: 1, fontWeight: 300}}>driven, empathetic, detail-oriented</h2>
            </Grid>

            <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5, letterSpacing: 1}}>
                <span className="highlight">hobbies</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h2 style={{marginTop: 5, letterSpacing: 1, fontWeight: 300}}>traveling, cooking, playing music, planting</h2>
            </Grid>
            {/* resume */}
            {/* <a href={process.env.PUBLIC_URL + '/EileenZChen_resume.pdf'} target="_blank" rel="noopener noreferrer nofollow" className="resume-link">
              view my resumé
              <OpenInNew sx={{ml: 1}}/>
            </a> */}
            <div className="about-button">
              <SecondaryButton buttonText="resumé" icon={<OpenInNewRoundedIcon sx={{ml: 1}}/>} buttonLink={process.env.PUBLIC_URL + '/EileenZChen_resume.pdf'} target="_blank" rel="noopener noreferrer nofollow"/>
            </div>
            <div className="about-button" onClick={handleClick}>
              <PrimaryButton buttonText="projects" icon={<KeyboardDoubleArrowDownRoundedIcon sx={{ml: 1}}/>} buttonLink="#weee-project"/>
            </div>


          </Grid>
        </Grid>
        {/* polaroid */}
        <Grid item xs={12} md={4} order={{ xs: 1, sm: 2 }} className="tonys-polaroid">
          <Polaroid 
            linkUrl="" 
            imageUrl={tonysImageCropped} 
            alt="Me with Tony's Pizza"
            polaroidTitle=""
            polaroidDescription="I strive to design with compassion and an open mind"
            aspectRatio="aspectRatioRegular">
          </Polaroid>
        </Grid>

      </Grid>
    </Container>
      
    </div>
  )
}

export default About