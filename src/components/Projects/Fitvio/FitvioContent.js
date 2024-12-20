import React from 'react'
import * as Assets from './assets'
import './Fitvio.css'
import { Grid } from '@mui/material'
// spell-checker:ignore Fitvio, roadmapping, workshopping

export function Intro() {
  return (
    <div id="Intro">
      <h1 data-aos="fade-up"><span className="project-title monospace-300">Removing barriers to staying active</span></h1>
      <h2 data-aos="fade-up" data-aos-delay="100" className="project-subheading monospace-200">How can we create a frictionless & personalized onboarding experience? How can we create a reimagined brand identity that is inclusive to people of different fitness levels?</h2>
      <img data-aos="fade-up" data-aos-delay="300" src={Assets.FeatureHighlight} alt="onboarding and rebrand features" loading="lazy"></img>
      <Grid data-aos="fade-up" data-aos-delay="400" container columns={4} columnSpacing={4} style={{marginTop: "30px"}}>
        <Grid item xs={2} md={1}>
          <h2>role</h2>
          <p className="project-description">
            Head of Design<br></br>product designer<br></br>brand designer
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>team</h2>
          <p className="project-description">
            cross-functional startup team
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>tools</h2>
          <p className="project-description">
            Figma<br></br>
            InDesign<br></br>
            Illustrator<br></br>
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>skills</h2>
          <Grid container columns={2} rowSpacing={2}>
            <Grid xs={1}>
              <p className="project-description">
                brand design<br></br>
                design strategy<br></br>
                roadmapping<br></br>
              </p>
            </Grid>
            <Grid xs={1}>
              <p className="project-description">
                user research<br></br>
                design systems<br></br>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="text-divider">
        <img className="leaf-divider" src={process.env.PUBLIC_URL + '/leaf-divider.png'} alt='leaf divider'/>
      </div>
    </div>
  )
}

export function Motivation() {
  return (
    <div id="Motivation" className="project-section">
      <h1><span className="section-title highlight">motivation</span></h1>
      <p>
        During the heights of COVID-19, people prioritized their health and were <b>finding ways to stay active while staying safe</b>. Many looked for gym alternatives while others looked for ways to get into exercising with minimal prior experience. <b>As someone intimidated by gyms and just starting to look for ways to stay active at home, this problem deeply mattered to me.</b>
      </p>
      <p>
        <b>Fitvio was a startup</b> founded by my classmate with the vision of creating a cohesive platform to help <b>beginners and pros alike improve their fitness and share their personal journeys</b>.
      </p>
      <p>
        I joined as <b>Head of Design</b> at Fitvio to create a brand identity, build the design strategy for the fast moving startup, and lead the user research and UX design of the app.
      </p>
    </div>
  )
}

export function Problem() {
  return (
    <div id="Problem" className="project-section">
      <h1><span className="section-title highlight">problem</span></h1>
      <p>
        The goal of Fitvio was to provide easy access to <b>content from a diverse set of personal trainers and connection with a fitness community</b>.
      </p>
      <p>We sought to answer the question:</p>
      <blockquote>
        How can we empower people of all fitness levels to find workouts and trainers that work for them at the comfort of their home?
      </blockquote>
    </div>
  )
}
export function UnderstandingUsers() {
  return (
    <div id="UnderstandingUsers" className="project-section">
      <h1><span className="section-title highlight">understanding our users</span></h1>
      <p>
        With just a product mission, I knew that it was vital to first understand our users and their pain points. With a diverse team unfamiliar with the role of design, I wanted to <b>establish design as a critical function</b> for Fitvio and help the team understand and partake in it. Thus, I <b>rallied the team to conduct and sit in on user interviews</b> and then held workshops based on the insights to <b>create personas and customer journey maps together</b>. I advocated for everyone to think of design not as the visuals to make things look nice, but a way of problem solving.
      </p>
      <p>From our personas, we have Lisa who is a part-time Fitness Instructor on YouTube and seeks to connect with her viewers more intimately in order to help them.</p>
      <p>We also have Sam, a casual health nut who has been struggling to get into working out consistently and finding exercises that work for her, especially confined to the comforts of her home.</p>

      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <img src={Assets.Personas} alt="Fitvio personas"></img>
      </div>
      <Grid container columns={2} columnSpacing={4}>
        <Grid item xs={2} md={1}>
          <img src={Assets.CustomerJourneyMap} alt="Fitvio customer journey map"></img>
          <div className="caption-container">
            <caption>customer journey map for personal trainers</caption>
          </div>
        </Grid>
        <Grid item xs={2} md={1}>
          <p>
            Learnings about personal trainers:
            <ul>
              <li>
                It's hard to know if their client will be a good match with them.
              </li>
              <li>
                Tracking clients' progress is important.
              </li>
              <li>
                Various technologies are used to track client data and schedule appointments from spreadsheets to email to other training management software.
              </li>
            </ul>
          </p>
          <p>
            Learnings about fitness enthusiasts (beginner to intermediate level):
            <ul>
              <li>
                It's hard to find workouts that work for their own body and situation (e.g. location, equipment).
              </li>
              <li>
                It's hard to stay motivated to work out.
              </li>
              <li>
                Many workouts can be tedious and repetitive.
              </li>
            </ul>
          </p>
          
        </Grid>
      </Grid>
      <p>
        From this, we worked to identify Fitvio's <b>market differentiator</b>, which was having a platform for <b>both fitness enthusiasts and instructors</b> to grow and share in their fitness journey. We started with the fitness enthusiast journey. From here, I led brainstorming sessions to identify and <b>prioritize features</b> for Fitvio.
      </p>
      <Grid container columns={2} columnSpacing={4} alignItems={'center'}>
        <Grid item xs={2} md={1}>
          <img src={Assets.FeasibilityImpact} alt="feasibility impact diagram"></img>
        </Grid>
        <Grid item xs={2} md={1}>
          <img src={Assets.FeaturePrioritization} alt="feature prioritization"></img>
        </Grid>
      </Grid>
    </div>
  )
}
export function ProductRoadmapping() {
  return (
    <div id="ProductRoadmapping" className="project-section">
      <h1><span className="section-title highlight">product roadmapping</span></h1>
      <Grid container columns={2} columnSpacing={4} alignItems={'center'}>
        <Grid item xs={2} md={1}>
          <p>
            With our workshopping sessions and weekly sync meetings, I <b>worked with my partners in engineering, product, marketing, and business</b> to align on the goals of each phase of development. With product roadmapping, I wanted to ensure the team never lost sight of the user during each phase of development.
          </p>
          <p>
            Even though we were iterating quickly, I ensured that we never lost the cycle of <b>user feedback and team critique</b> in our design roadmap.
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <img src={Assets.Roadmap} alt="product roadmap for phase 1"></img>
        </Grid>
      </Grid>
    </div>
  )
}
export function UserAcquisitionOnboarding() {
  return (
    <div id="UserAcquisitionOnboarding" className="project-section">
      <h1><span className="section-title highlight">user acquisition & onboarding</span></h1>
      <p>
        As we were working towards an MVP, I thought that <b>first and foremost, the design strategy should start with acquiring customers</b>. With no customers, no one will be seeing the product. Using the existing logo to work off of, I built a <b>personalization onboarding experience for new users, starting from the Fitvio marketing page all the way to the authenticated home page</b>. I started with Sam's&mdash;our casual health nut's&mdash;experience.
      </p>
      <p>Sam can choose to start working out right away without even creating an account. To track her progress and engage with instructors though, she can create an account, answer a couple questions, and get a personalized list of workout videos in just a few minutes.</p>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <img src={Assets.AquisitionOnboardingFlow} alt="onboarding flow with old branding"></img>
      </div>

      <Grid container columns={2} columnSpacing={4}>
        <Grid item xs={2} md={1}>
          <video className="small-asset" autoPlay loop muted playsInline>
            <source src="/onboarding-gif.mov" type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={2} md={1}>
          <div className="videoContainer pitchContent">
            <iframe className="video" src="https://www.youtube.com/embed/TPkmpMa107M" title="What2Yum video pitch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </Grid>
      </Grid>
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
        With a couple rounds of user testing, many users <b>did not identify with our current branding</b>. The cool colors and rigid logo font make it intimidating and unapproachable. Thus, our marketing strategist and I worked together to <b>rebrand and create a brand guide</b>. I created the color palette, various logos and their usages, and font styles for our design system with Fitvio's value of <b>inclusive fitness</b> in mind.
      </p>
      <img src={Assets.OldNewLogo} alt="new Fitvio logo Slack emoji use"></img>
      <Grid container columns={2} columnSpacing={4}>
        <Grid item xs={2} md={1}>
          <p>
            In addition, I wanted to <b>extend the brand to all parts of Fitvio</b>, including the team itself. As we were working completely virtually, it was hard to build a team culture of connection and engagement. I uploaded our new logo as a Slack emoji to <b>socialize the new brand with the team and build excitement</b>.
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <img src={Assets.SlackEmojiUse} alt="new Fitvio logo Slack emoji use"></img>
        </Grid>
      </Grid>
      <div style={{marginTop: "30px"}}>
        <img src={Assets.LogoConstruction} alt="logo construction"></img>
      </div>

      <div className="caption-container">
        <caption>Logo construction</caption>
      </div>

      <div style={{marginTop: "30px"}}>
        <img src={Assets.LogoClearSpace} alt="logo minimal clear space"></img>
      </div>

      <div className="caption-container">
        <caption>Minimum spacing guidelines</caption>
      </div>

      <div style={{marginTop: "40px"}}>
        <img src={Assets.LogoIteration} alt="logo interactions"></img>
      </div>

      <div className="caption-container" style={{marginTop: '20px'}}>
        <caption>Logo iterations and variation from the old logo to the new one</caption>
      </div>

      <div style={{marginTop: "60px"}}>
        <img src={Assets.Colors} alt="Fitvio color palette"></img>
      </div>

      <div className="caption-container" style={{marginTop: '20px'}}>
        <caption>Fitvio color palette</caption>
      </div>

      <div style={{marginTop: "60px"}}>
        <img src={Assets.FontStyles} alt="Fitvio font styles"></img>
      </div>

      <div className="caption-container" style={{marginTop: "20px", marginBottom: "30px"}}>
        <caption>Fitvio font styles</caption>
      </div>
      <p>
        See the full <a className="content-link" href={Assets.BrandGuidelines} target="_blank">brand guidelines</a> here.
      </p>
      <p>After establishing our rebrand, I applied it to a couple of designs from our onboarding journey.</p>

      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <img src={Assets.Rebranding} alt="Fitvio rebranding"></img>
      </div>
      <p>Continuing this work, I would narrow in on Lisa's, the fitness instructor's, onboarding experience and design how the instructor and student would interact with each other on the platform.</p>
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