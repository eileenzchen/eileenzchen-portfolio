import React from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import * as Assets from './assets'
import ModalImage from 'react-modal-image'
import './Fitvio.css'

export function Intro() {
  return (
    <div id="Intro">
      <img src={Assets.FitvioPreview} alt="Fitvio" title="Fitvio" style={{marginTop: "30px"}}/>
    </div>
  )

}

export function Summary() {
  return (
    <div id="Summary" className="project-section">
      <h1><span className="section-title highlight">summary</span></h1>
      <p className="subheading">context</p>
      <p>
        <b>Fitvio was a startup</b> founded by my classmate with the vision of creating a <b>cohesive platform to help people, whether beginners or pros, improve their fitness and document their personal journeys</b> via easy access to content from personal trainers and connection with a fitness community.
      </p>
      <p className="subheading">role</p>
      <p>
        I was brought on as <b>Head of Design and the sole designer</b>. My first time in this kind of design leadership role, I took on the challenge of <b>creating a brand, design strategy, and onboarding experience</b> for Fitvio from the ground up while staying aligned with the product goals.
      </p>
      <p className="subheading">growth</p>
      <p>
        Through this experience, I <b>expanded the breadth of my design capabilities and pushed myself to learn new skills</b> like brand design. I furthermore was able to <b>experience first hand how design and product strategy need to be interwoven to drive forward a common vision</b>. 
      </p>
      <p className="subheading" style={{marginBottom: '15px'}}>user onboarding prototype</p>
      <div className="videoContainer pitchContent">
        <iframe className="video" src="https://www.youtube.com/embed/TPkmpMa107M" title="What2Yum video pitch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <p className="subheading" style={{marginBottom:"0px"}}>rebranding</p>
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.Rebranding}
        large={Assets.Rebranding}
        alt="Fitvio rebranding"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
    </div>
  )
}
export function UnderstandingUsers() {
  return (
    <div id="UnderstandingUsers" className="project-section">
      <h1><span className="section-title highlight">understanding our users</span></h1>
      <p>
        As the only thing we had was an idea so far, I knew that it was vital to first understand our users. And not just for me to understand our users, but for the whole team from our engineer to the data analyst to the cofounders. From the get-go, I wanted to <b>establish design as a critical function for Fitvio and one that the whole team should understand and partake in</b>. I demonstrated that design was not there to make things look pretty, but to advocate for Fitvio's users and create experiences that are both usable and beautiful. 
      </p>
      <p>
        We needed to identify where their pain points lie and how Fitvio could position itself to help them in a way other apps do not already. <b>I led the efforts to interview users, collect insights, and hold workshops with the entire team to create personas and customer journey maps</b>.
      </p>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.Personas}
          large={Assets.Personas}
          alt="Fitvio personas"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>

      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.CustomerJourneyMap}
        large={Assets.CustomerJourneyMap}
        alt="Fitvio customer journey map"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <p>
        From this, we worked to identify Fitvio's <b>market differentiator</b>, which was having an all-in-one platform for both fitness enthusiasts and instructors to grow and share in their fitness journey. From here, I led brainstorming sessions to identify and <b>prioritize features</b> for Fitvio, <b>encouraging the team to think with the customer in mind first</b>.
      </p>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.FeasibilityImpact}
          large={Assets.FeasibilityImpact}
          alt="feasibility impact diagram"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.FeaturePrioritization}
        large={Assets.FeaturePrioritization}
        alt="feature prioritization"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
    </div>
  )
}
export function ProductRoadmapping() {
  return (
    <div id="ProductRoadmapping" className="project-section">
      <h1><span className="section-title highlight">product roadmapping</span></h1>
      <p>
        With our workshopping sessions and weekly sync meetings, I <b>learned to work in parallel with my partners</b> in engineering, product, marketing, and business to align on the goals of each phase of development and work, even as pivots or changes came up&mdash;which they often did. 
      </p>
      <p>
        <b>I viewed the role of design as one that should be incorporated in every step of the process</b> and one where I make sure everyone else on the team also understands our product from a human point of view. At the same time, I knew that <b>I had to understand the business value and direction of our product to achieve tangible outcomes</b>. With product roadmapping, I wanted to ensure the team never lost sight of the user at the core during each phase.
      </p>
      <div style={{marginTop: "30px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.Roadmap}
          large={Assets.Roadmap}
          alt="product roadmap for phase 1"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
    </div>
  )
}
export function UserAcquisitionOnboarding() {
  return (
    <div id="UserAcquisitionOnboarding" className="project-section">
      <h1><span className="section-title highlight">user acquisition & onboarding</span></h1>
      <p>
        As we were working towards an MVP, I thought that <b>first and foremost the design strategy should be to acquire customers</b>. With no customers, no one will be seeing the product. With just an initial outsourced logo to work off of that was handed to me by one of the cofounders, I built an <b>onboarding experience for new users, starting from the Fitvio marketing page all the way to the authenticated home page</b>. 
      </p>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.Onboarding}
          large={Assets.Onboarding}
          alt="onboarding flow with old branding"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <video className="small-asset" autoPlay loop muted playsInline>
        <source src={Assets.OnboardingGif} type="video/mp4" />
      </video>
      <div className="videoContainer pitchContent" style={{marginTop: "35px"}}>
        <iframe className="video" src="https://www.youtube.com/embed/TPkmpMa107M" title="What2Yum video pitch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  )
}
export function Rebranding() {
  const handleClick = event => {
    event.preventDefault();
    const anchor = document.querySelector('#brand-guidelines-heading')
    anchor.scrollIntoView({ behavior: 'smooth', block: "start" });
  };
  return (
    <div id="Rebranding">
      <h1><span className="section-title highlight">rebranding</span></h1>
      <p>
        With only the logo, our brand identity was severely lacking. The marketing strategist and I were asked by the co-founders to create a brand guide to improve this. <b>Although I've never designed a brand guide before or worked on branding, I was pretty excited to get my hands dirty and learn about it</b>. I quickly searched different brand guides like Peleton's and Uber's for inspiration and understanding of what they entailed. I created a color palette, logos and their usages, and font styles. 
      </p>
      <p>
        Beyond the pure design, I wanted to <b>extend the brand to all parts of Fitvio</b>, including the team itself. As we were working completely virtually, it was hard to build a team culture of connection and engagement. I uploaded our new logo as a Slack emoji to <b>socialize the new brand with the team and build excitement</b>.
      </p>
      <p>
        See the full <a className="content-link" href="#brand-guidelines-heading" onClick={handleClick}>brand guidelines</a> below.
      </p>
      <div style={{marginTop: "30px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.LogoConstruction}
          large={Assets.LogoConstruction}
          alt="logo construction"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <div className="caption-container">
        <caption>Logo construction</caption>
      </div>
      <div style={{marginTop: "30px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.LogoClearSpace}
          large={Assets.LogoClearSpace}
          alt="logo minimal clear space"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <div className="caption-container">
        <caption>Minimum spacing guidelines</caption>
      </div>
      <div style={{marginTop: "40px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.LogoIteration}
          large={Assets.LogoIteration}
          alt="logo iterations"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <div className="caption-container">
        <caption>Logo iterations and variation from the old logo to the new one</caption>
      </div>
      <div style={{marginTop: "40px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.Colors}
          large={Assets.Colors}
          alt="Fitvio color palette"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <div className="caption-container">
        <caption>Fitvio color palette</caption>
      </div>
      <div style={{marginTop: "40px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.FontStyles}
          large={Assets.FontStyles}
          alt="Fitvio font styles"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <div className="caption-container" style={{marginBottom: "30px"}}>
        <caption>Fitvio font styles</caption>
      </div>
      <p>After establishing our rebrand, I applied it to a couple of screens. To take this forward, I would continue thinking about what the brand conveys and incorporate Fitvio's unique voice in it.</p>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.Rebranding}
          large={Assets.Rebranding}
          alt="Fitvio rebranding"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <p className="subheading" id="brand-guidelines-heading" style={{margin:"20px", scrollMarginBlockStart:40}}>Fitvio brand guidelines</p>
      <object id="brand-guidelines-pdf" data={Assets.BrandGuidelines} type="application/pdf">
        <p>
          Unable to display brand guidelines pdf. <a href={Assets.BrandGuidelines} target="_blank" rel="noopener noreferrer nofollow">Download</a> instead.
        </p>
      </object>
    </div>
  )
}
export function Challenges() {
  return (
    <div id="Challenges" className="project-section">
      <h1><span className="section-title highlight">challenges & takeaways</span></h1>
      <p>
        <ol>
          <li>
            Especially with a startup, uncertainty and change are inevitable. I learned to be more <b>comfortable with pivoting and working with ambiguity</b>. 
          </li>
          <li>
            Every person on the team I worked with had a different background, whether it was a someone with a couple years of industry software experience or a university student studying business and data analytics. I learned to <b>speak and pitch ideas with a common language and adapted my language to the person's background</b>.
          </li>
          <li>
            Being a one person design team, I had to <b>juggle many different hats</b>, even beyond design roles. From discussing the technical feasibility of my user authentication design to choosing colors for the Fitvio brand to analyzing the data of our user survey, I pushed myself to <b>continuously learn from my teammates and pick up new skills on the fly</b>.
          </li>
          <li>
            Although a lot of what I like about design is being able to "perfect" something and continually improving it, at a startup, there's no luxury of time. I could not spend hours on the spacing of a button or images. I learned to <b>work fluidly and quickly to constantly deliver with the bigger picture and vision in mind</b>. 
          </li>
        </ol>
      </p>
    </div>
  )
  }