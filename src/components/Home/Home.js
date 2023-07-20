import React from 'react'
import About from './About/About.js';
import ProjectSectionTan from './ProjectSection/ProjectSectionTan.js';
import ProjectSectionWhite from './ProjectSection/ProjectSectionWhite.js';
import tonysImage from './assets/me_w_tonys_pizza.jpg';
import what2yumPreview from '../Projects/What2Yum/assets/what2yum_preview.png';
import bakingFactoryPreview from '../Projects/BakingFactory/assets/baking-factory-preview.png'
import weeePreview from '../Projects/Weee/assets/weee-preview.png'
import fitvioPreview from '../Projects/Fitvio/assets/fitvio-preview.png'

function Home() {
  const weeeProps = {
    polaroid: {
      linkUrl: "/weee",
      imageUrl: weeePreview,
      alt: "Weee Redesign",
      polaroidTitle: "Weee! Redesign",
      polaroidDescription: "Fostering community within the grocery purchasing journey to inspire shoppers and drive e-grocery sales",
      aspectRatio: "aspectRatioWide"
    },
    desc: {
      role: "UX Designer & Researcher",
      team: "individual",
      skills: "user research, usability testing, wireframing, prototyping",
      tools: "Figma",
      duration: "1 month",
      cols: 1
    },
    button: {
      buttonText: "view case study",
      buttonLink: "/weee",
      target: "_self"
    }
  }

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
      buttonText: "view case study",
      buttonLink: "/what2yum",
      target: "_self"
    }
  }

  const bakingFactoryProps = {
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
      skills: "wireframing, user testing, full-stack dev, database design",
      tools: "Figma, HTML/CSS, Javascript, Ruby on Rails",
      duration: "4 months",
      cols: 1
    },
    button: {
      buttonText: "view case study",
      buttonLink: "/bakingfactory",
      target: "_self"
    }
  }

  const fitvioProps = {
    polaroid: {
      linkUrl: "/fitvio",
      imageUrl: fitvioPreview,
      alt: "Fitvio Startup",
      polaroidTitle: "Fitvio",
      polaroidDescription: "Designing an easily accessible fitness app – and wearing many design hats along the way",
      aspectRatio: "aspectRatioWide"
    },
    desc: {
      role: "Head of Design",
      team: "cross-functional startup team (<10 people)",
      skills: "brand design, design strategy, roadmapping, interviewing, prototyping",
      tools: "Figma, InDesign, Illustrator",
      duration: "4 months",
      cols: 1
    },
    button: {
      buttonText: "view case study",
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
      buttonText: "view case study",
      buttonLink: "#",
      target: "_self"
    }
  }

  return (  
    <>
     <About></About>
     <ProjectSectionTan projectProps={weeeProps}></ProjectSectionTan>
     <ProjectSectionWhite projectProps={what2yumProps}></ProjectSectionWhite>
     <ProjectSectionTan projectProps={fitvioProps}></ProjectSectionTan>
     <ProjectSectionWhite projectProps={bakingFactoryProps}></ProjectSectionWhite>
     {/* <ProjectSectionTan projectProps={project4Props}></ProjectSectionTan> */}
    </>

    
  )
}

export default Home 