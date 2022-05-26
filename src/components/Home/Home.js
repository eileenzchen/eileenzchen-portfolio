import React from 'react'
import Menu from '../Menu.js'
import { Grid } from '@mui/material';
import About from '../About/About.js';
import ProjectSectionTan from '../ProjectSection/ProjectSectionTan.js';
import ProjectSectionWhite from '../ProjectSection/ProjectSectionWhite.js'

function Home() {
  const project1Props = {
    polaroid: {
      linkUrl: "#",
      imageUrl: "../../images/me_w_tonys_pizza.JPG",
      alt: "asdfjkl",
      polaroidTitle: "asjdflk;",
      polaroidDescription: "asdfjkl",
      aspectRatio: "aspectRatioWide"
    },
    desc: {
      role: "qwefjio;",
      team: "qwejifo;",
      skills: "qwejfi;",
      tools: "qwejfio;",
      duration: "qwejfio;"
    },
    button: {
      buttonText: "read more about What2Yum",
      buttonLink: "#",
      target: "_self"
    }
  }

  const project2Props = {
    polaroid: {
      linkUrl: "#",
      imageUrl: "../../images/me_w_tonys_pizza.JPG",
      alt: "asdfjkl",
      polaroidTitle: "asjdflk;",
      polaroidDescription: "asdfjkl",
      aspectRatio: "aspectRatioWide"
    },
    desc: {
      role: "qwefjio;",
      team: "qwejifo;",
      skills: "qwejfi;",
      tools: "qwejfio;",
      duration: "qwejfio;"
    },
    button: {
      buttonText: "read more about What2Yum",
      buttonLink: "#",
      target: "_self"
    }
  }

  const project3Props = {
    polaroid: {
      linkUrl: "#",
      imageUrl: "../../images/me_w_tonys_pizza.JPG",
      alt: "asdfjkl",
      polaroidTitle: "asjdflk;",
      polaroidDescription: "asdfjkl",
      aspectRatio: "aspectRatioWide"
    },
    desc: {
      role: "qwefjio;",
      team: "qwejifo;",
      skills: "qwejfi;",
      tools: "qwejfio;",
      duration: "qwejfio;"
    },
    button: {
      buttonText: "read more about What2Yum",
      buttonLink: "#",
      target: "_self"
    }
  }

  const project4Props = {
    polaroid: {
      linkUrl: "#",
      imageUrl: "../../images/me_w_tonys_pizza.JPG",
      alt: "asdfjkl",
      polaroidTitle: "asjdflk;",
      polaroidDescription: "asdfjkl",
      aspectRatio: "aspectRatioWide"
    },
    desc: {
      role: "qwefjio;",
      team: "qwejifo;",
      skills: "qwejfi;",
      tools: "qwejfio;",
      duration: "qwejfio;"
    },
    button: {
      buttonText: "read more about What2Yum",
      buttonLink: "#",
      target: "_self"
    }
  }

  return (  
    <>
     <About></About>
     <ProjectSectionTan projectProps={project1Props}></ProjectSectionTan>
     <ProjectSectionWhite projectProps={project2Props}></ProjectSectionWhite>
     <ProjectSectionTan projectProps={project3Props}></ProjectSectionTan>
     <ProjectSectionWhite projectProps={project4Props}></ProjectSectionWhite>
    </>

    
  )
}

export default Home 