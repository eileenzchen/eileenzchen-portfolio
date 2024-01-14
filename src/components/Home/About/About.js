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
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import PrimaryButton from '../../PrimaryButton/PrimaryButton.js';
import Typewriter from 'typewriter-effect';

function About() {
  const handleClick = event => {
    event.preventDefault();
    const anchor = document.querySelector('#projects');
    anchor.scrollIntoView({ behavior: 'smooth', block: "start" });
  };
  return (
    <div style={{marginBottom: 30}}>
      <Container maxWidth="lg">
        <Grid container columns={12} rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 7 }}>
        {/* <Grid item xs={12} md={8}>
          <div className="spacer"></div>
          <h1 className="monospace-400">Hey, I'm <span className="monospace-500 highlight">Eileen</span>!</h1>
        </Grid> */}
        {/* about */}
        <Grid item xs={12} md={8} order={{ xs: 2, sm: 1 }}>
          <div className="spacer"></div>
          {/* <h1 className="monospace-400">Hey, I'm <span className="monospace-500 highlight">Eileen</span>! I'm a product designer who is experienced in end-to-end user experience design, coding up prototypes, and empathizing with engineers (because I was one). </h1> */}

          <h1 className="typewriter-block">
            {/* make it so that the white space is fixed */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('<span class="monospace-400">Hey! I\'m <span class="monospace-500 highlight">Eileen</span> 🙋🏻‍♀️ I wear many different hats, including but not limited to beanies, dad caps, buckets, <b class="monospace-400" style="color: #92AD70">UX designer<\/b>, and <b class="monospace-400" style="color: #92AD70">full-stack engineer<\/b>.</span>')
                .start();
            }}
            options={{
              delay: 40,
            }}
          />
          </h1>

          
          {/* <h2 className="monospace-500">Here's a little about me 🤗</h2> */}
          <br></br>
          {/* about me descriptions  */}
          <Grid container columns={12} style={{color: "#3D2309"}}>
            {/* <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5, letterSpacing: 1}}>
                <span className="highlight">strengths</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h2 style={{marginTop: 5, letterSpacing: 1, fontWeight: 300}}>problem solver, cross-functional collaborator</h2>
            </Grid>

            <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5, letterSpacing: 1}}>
                <span className="highlight">personality</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h2 style={{marginTop: 5, letterSpacing: 1, fontWeight: 300}}>self-starter, empathetic, detail-oriented</h2>
            </Grid>

            <Grid item xs={12} sm={3}>
              <h2 style={{marginTop: 5, letterSpacing: 1}}>
                <span className="highlight">hobbies</span>
              </h2>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h2 style={{marginTop: 5, letterSpacing: 1, fontWeight: 300}}>cooking, traveling, playing music, planting</h2>
            </Grid> */}

            

          </Grid>
        </Grid>
        {/* polaroid */}
        <Grid item xs={12} md={4} order={{ xs: 1, sm: 2 }} className="tonys-polaroid">
          <Polaroid 
            linkUrl="" 
            imageUrl={tonysImageCropped} 
            alt="Me with Tony's Pizza"
            polaroidTitle=""
            polaroidDescription="Fueled by the chance to make a difference (& good food) 🍕"
            aspectRatio="aspectRatioRegular">
          </Polaroid>
        </Grid>

      </Grid>
      <Grid container columns={12}>
        <div className="about-button">
          <SecondaryButton buttonText="resumé" icon={<OpenInNewRoundedIcon sx={{ml: 1}} style={{paddingTop: "2px"}}/>} buttonLink={process.env.PUBLIC_URL + '/EileenChen-resume.pdf'} target="_blank" rel="noopener noreferrer nofollow"/>
        </div>
        <div className="about-button" onClick={handleClick}>
          <PrimaryButton buttonText="projects" icon={<ArrowDownwardRoundedIcon sx={{ml: 1}} style={{paddingTop: "2px"}}/>} buttonLink="#projects"/>
        </div>
      </Grid>
    </Container>
      
    </div>
  )
}

export default About