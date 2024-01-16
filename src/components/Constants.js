import { WeeePreview } from "./Projects/Weee/assets/index.js"
import { What2yumPreview } from "./Projects/What2Yum/assets"
import { FitvioPreview } from "./Projects/Fitvio/assets"
import { BakingFactoryPreview } from "./Projects/BakingFactory/assets"
import { C1Preview } from "./Projects/CapitalOne/assets"

export const c1Props = {
  name: "CapitalOne",
  polaroid: {
    linkUrl: "/capitalone",
    imageUrl: C1Preview,
    alt: "Capital One",
    polaroidTitle: "Capital One",
    polaroidDescription: "Improving the findability and accessibility of Search on capitalone.com",
    aspectRatio: "aspectRatioWide",
    tags: ["mobile & desktop", "front-end web dev"]
  },
  desc: {
    role: "Front-End Engineer",
    team: "engineers, designers, product managers, analysts, and more",
    skills: "front-end engineering, user-centered thinking, design systems, A/B testing, mentoring",
    tools: "Angular, HTML / CSS, Javascript, Github, Figma",
    duration: "Aug 2021 — present",
    device: "mobile and desktop web",
    cols: 1
  },
  button: {
    buttonText: "view work",
    buttonLink: "/capitalone",
    target: "_self"
  }
}

export const weeeProps = {
  name: "Weee",
  polaroid: {
    linkUrl: "/weee",
    imageUrl: WeeePreview,
    alt: "Weee Redesign",
    polaroidTitle: "Weee!",
    polaroidDescription: "Fostering community, inspiring shoppers, and making grocery shopping fun",
    aspectRatio: "aspectRatioWide",
    tags: ["mobile native", "UX/UI designer"]
  },
  desc: {
    role: "UX Designer",
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
    polaroidDescription: "Empowering people to decide where to eat within minutes",
    aspectRatio: "aspectRatioWide",
    tags: ["mobile native", "full-stack iOS dev"]
  },
  desc: {
    role: "Product Designer, iOS Developer",
    team: "3 total engineers",
    skills: "user testing, mobile app design, project management, SwiftUI development, agile development",
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
    polaroidDescription: "Streamlining a bakery's ecommerce transactions for customers and employees",
    aspectRatio: "aspectRatioWide",
    tags: ["desktop","full-stack web dev"]
  },
  desc: {
    role: "UX Designer, Full-stack Engineer",
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
    polaroidDescription: "Leading the end-to-end design and branding of a fitness app",
    aspectRatio: "aspectRatioWide",
    tags: ["desktop", "UX/UI designer"]
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
  "What2Yum": what2yumProps,
  "CapitalOne": c1Props
}
