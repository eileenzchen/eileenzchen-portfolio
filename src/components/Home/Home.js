import React from 'react'
import About from './About/About.js';
import ProjectSectionTan from './ProjectSection/ProjectSectionTan.js';
import ProjectSectionWhite from './ProjectSection/ProjectSectionWhite.js';
import tonysImage from '../../images/me_w_tonys_pizza.jpg';
import what2yumPreview from '../Projects/What2Yum/assets/what2yum_preview.png';
import bakingFactoryPreview from '../Projects/BakingFactory/assets/baking-factory-preview.png'

function Home() {
  const what2yumProps = {
    polaroid: {
      linkUrl: "/what2yum",
      imageUrl: what2yumPreview,
      alt: "What2Yum",
      polaroidTitle: "What2Yum",
      polaroidDescription: "Empowering friends and couples to decide where to eat within minutes——no bickering, no indecisiveness",
      aspectRatio: "aspectRatioWide"
    },
    desc: {
      role: "UX Researcher, Product Designer, iOS Engineer",
      team: "3 total engineers",
      skills: "user testing, prototyping, project management, SwiftUI development, agile development",
      tools: "Figma, XCode, Github, Firebase",
      duration: "4 months",
      cols: 1
    },
    button: {
      buttonText: "learn more",
      buttonLink: "/what2yum",
      target: "_self"
    }
  }

  const project2Props = {
    polaroid: {
      linkUrl: "/bakingfactory",
      imageUrl: bakingFactoryPreview,
      alt: "The Baking Factory",
      polaroidTitle: "The Baking Factory",
      polaroidDescription: "An ecommerce system enabling both customers and employees to streamline bakery transactions",
      aspectRatio: "aspectRatioWide"
    },
    desc: {
      role: "Full-stack Engineer, UX Designer",
      team: "individual",
      skills: "wireframing, user testing, web app development, database design, test-driven",
      tools: "Figma, HTML/CSS, Javascript, Ruby on Rails",
      duration: "4 months",
      cols: 1
    },
    button: {
      buttonText: "learn more",
      buttonLink: "/bakingfactory",
      target: "_self"
    }
  }

  const project3Props = {
    polaroid: {
      linkUrl: "/fitvio",
      imageUrl: tonysImage,
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
      duration: "qwejfio;",
      cols: 1
    },
    button: {
      buttonText: "learn more",
      buttonLink: "/fitvio",
      target: "_self"
    }
  }

  const project4Props = {
    polaroid: {
      linkUrl: "#",
      imageUrl: tonysImage,
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
      duration: "qwejfio;",
      cols: 1
    },
    button: {
      buttonText: "learn more",
      buttonLink: "#",
      target: "_self"
    }
  }

  return (  
    <>
     <About></About>
     <ProjectSectionTan projectProps={what2yumProps}></ProjectSectionTan>
     <ProjectSectionWhite projectProps={project2Props}></ProjectSectionWhite>
     <ProjectSectionTan projectProps={project3Props}></ProjectSectionTan>
     <ProjectSectionWhite projectProps={project4Props}></ProjectSectionWhite>
    </>

    
  )
}

export default Home 