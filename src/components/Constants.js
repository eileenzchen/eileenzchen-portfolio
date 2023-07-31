import { WeeePreview } from "./Projects/Weee/assets/index.js"
import { What2yumPreview } from "./Projects/What2Yum/assets"
import { FitvioPreview } from "./Projects/Fitvio/assets"
import { BakingFactoryPreview } from "./Projects/BakingFactory/assets"

export const weeeProps = {
  name: "Weee",
  polaroid: {
    linkUrl: "/weee",
    imageUrl: WeeePreview,
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
    duration: "2 months",
    device: "native mobile",
    cols: 1
  },
  button: {
    buttonText: "view case study",
    buttonLink: "/weee",
    target: "_self"
  }
}

export const what2yumProps = {
  name: "What2Yum",
  polaroid: {
    linkUrl: "/what2yum",
    imageUrl: What2yumPreview,
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
    device: "native mobile",
    cols: 1
  },
  button: {
    buttonText: "view case study",
    buttonLink: "/what2yum",
    target: "_self"
  }
}

export const bakingFactoryProps = {
  name: "BakingFactory",
  polaroid: {
    linkUrl: "/bakingfactory",
    imageUrl: BakingFactoryPreview,
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
    device: "desktop web",
    cols: 1
  },
  button: {
    buttonText: "view case study",
    buttonLink: "/bakingfactory",
    target: "_self"
  }
}

export const fitvioProps = {
  name: "Fitvio",
  polaroid: {
    linkUrl: "/fitvio",
    imageUrl: FitvioPreview,
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
    device: "web app",
    cols: 1
  },
  button: {
    buttonText: "view case study",
    buttonLink: "/fitvio",
    target: "_self"
  }
}

export const projectsMap = {
  "Fitvio": fitvioProps,
  "Weee": weeeProps,
  "BakingFactory": bakingFactoryProps,
  "What2Yum": what2yumProps
}
