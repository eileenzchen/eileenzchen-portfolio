import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../Polaroid/Polaroid.js'
import ProjectSummary from '../ProjectSection/ProjectSummary.js'
import tonysImage from '../../images/me_w_tonys_pizza.JPG'

export function Intro(props) {
  const desc =  {
    role: "qwefjio;",
    team: "qwejifo;",
    skills: "qwejfi;",
    tools: "qwejfio;",
    duration: "qwejfio;"
  }

  return (
    <div id="Intro">
      <Polaroid 
        linkUrl="#" 
        imageUrl={tonysImage} 
        alt="Me with Tony's Pizza"
        polaroidTitle="Tony's Pizza ~ 5.4.22"
        polaroidDescription="the best pizza I’ve ever had 🍕"
        aspectRatio="aspectRatioWide"/>
      <ProjectSummary desc={desc} style={{fontSize: 12}}/>
    </div>
  )
}
export function Problem(props) {

  return (
    <div id="Problem">
      <h1 class="monospace-400 highlight">problem</h1>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and 
        praising pain was born and I will give you a complete account of the system, and 
        expound the actual teachings of the great explorer of the truth, the master-builder 
        of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it 
        is pleasure, but because those who do not know how to pursue pleasure rationally 
        encounter consequences that are extremely painful. Nor again is there anyone who 
        loves or pursues or desires to obtain pain of itself, because it is pain, but 
        because occasionally circumstances occur in which toil and pain can procure 
        him some great pleasure. To take a trivial example, which of us ever undertakes 
        laborious physical exercise, except to obtain some advantage from it? But who has 
        any right to find fault with a man who chooses to enjoy a pleasure that has no 
        annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    </div>
  )
}
