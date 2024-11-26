import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../../Polaroid/Polaroid.js';
import SecondaryButton from '../../SecondaryButton/SecondaryButton.js';
// @ts-ignore
// import resume from '../assets/EileenZChen_resume.pdf';
import tonysImage from '../assets/me_w_tonys_pizza.jpg';
import tonysImageCropped from '../assets/me_w_tonys_pizza_cropped.jpg'
import './Intro.css'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import PrimaryButton from '../../PrimaryButton/PrimaryButton.js';
import Typewriter from 'typewriter-effect';

function Intro() {
  const updateCursorSize = () => {
    (document.querySelector('.Typewriter__cursor')).id = 'typewriter-cursor';
    (document.getElementById('typewriter-cursor')).style.fontSize = '12px';
  };
  const handleProjectsClick = event => {
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

          
            {/* have to wrap h1 around typewriter so that the cursor is the right height */}
          <h1>
            <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('<span class="monospace-400">Hey! I\'m <span class="monospace-500 highlight">Eileen</span>. I\'m a <b class="monospace-400" style="color: #92AD70">UX designer<\/b> by trade, <b class="monospace-400" style="color: #92AD70">engineer<\/b> by day, and <b class="monospace-400" style="color: #92AD70">problem solver<\/b> at heart. I see empathetic design as a way to bring people together to create meaningful, delightful experiences.</span></h1>')
              .pauseFor(550).typeString('<br>')
              .callFunction(updateCursorSize)
              .pauseFor(550).typeString('<br>')
              .pauseFor(800).typeString('<span class="monospace-400" style="font-size: 12px">(yes I actually type 250 wpm...</span>')
              .pauseFor(500).typeString('<span class="monospace-400" style="font-size: 12px">or do I?)</span>')
              .pauseFor(750).typeString('<br>')
              .pauseFor(800).typeString('<span class="monospace-400" style="font-size: 12px">^_^</span>')
              .start()
            }}
            options={{
              delay: 20,
            }}
          />
          </h1>

          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
              .pauseFor(750).typeString('<br>')
              .pauseFor(750).typeString('<br>')
              .pauseFor(1000).typeString('<span class="monospace-400">(yes I actually type 250 wpm...</span>')
              .pauseFor(500).typeString('<span class="monospace-400">or do I? <b class="monospace-400" style="color: #92AD70">hire me</b> to find out)</span>')
              .pauseFor(1000).typeString('<br><br><span class="monospace-400">^_^</span>')
                .start();
            }}
            options={{
              delay: 20,
            }}
          /> */}

          
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
            linkUrl="/about" 
            imageUrl={tonysImageCropped} 
            alt="Me with Tony's Pizza"
            polaroidTitle=""
            polaroidDescription="foodie, plant mom, & aspiring designer ✌🏻"
            aspectRatio="aspectRatioRegular"
            fadeDelay="0">
          </Polaroid>
        </Grid>

      </Grid>
      <Grid container columns={12}>
        <div className="about-button">
          <SecondaryButton buttonText="resumé" buttonLink="/resume"/>
        </div>
        <div className="about-button" onClick={handleProjectsClick}>
          <PrimaryButton buttonText="my work" icon={<ArrowDownwardRoundedIcon sx={{ml: 1}} style={{paddingTop: "2px"}}/>} buttonLink="#projects"/>
        </div>
      </Grid>
    </Container>
      
    </div>
  )
}

export default Intro