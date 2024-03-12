import React from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import * as Assets from './assets/index.js'
import ModalImage from 'react-modal-image'
import './CapitalOne.css'
import { Grid } from '@mui/material';

export function Intro() {
  return (
    <div id="Intro">
      <img src={Assets.C1Preview} alt="Capital One" title="Capital One" style={{marginTop: "30px"}}/>

      <Grid container columns={3} columnSpacing={3}>
        <Grid item xs={3} md={1}>
          <h2>role</h2>
          <p className="project-description">
            Front-end engineer building out new user experiences for Capital One Search, championing human-centered design and accessibility
          </p>
        </Grid>
        <Grid item xs={3} md={1}>
          <h2>          partners</h2>
          <p className="project-description">
            3+ engineers, 1 designer, 1 product manager, 1 analyst
          </p>
        </Grid>
        <Grid item xs={3} md={1}>
          <h2>skills</h2>
          <p className="project-description">
            HTML/CSS/JS, Angular, interaction design, design systems, web accessibility, animation, A/B testing, end-to-end testing
          </p>
        </Grid>
      </Grid>
      <div className="text-divider">
        <img className="small-plant" src={process.env.PUBLIC_URL + '/plant-icon-custom-colors.png'}/>
        <img className="small-plant" src={process.env.PUBLIC_URL + '/plant-icon-custom-colors.png'}/>
        <img className="small-plant" src={process.env.PUBLIC_URL + '/plant-icon-custom-colors.png'}/>
      </div>
    </div>
  )
}

export function Problem() {
  return (
    <div id="Problem" className="project-section">
      <h1><span className="section-title highlight">problem space</span></h1>
      <p>
      There are 3,000+ pages on capitalone.com ranging from product pages to servicing content. However, a lack of relevant search results and a lack of guidance lead to frustrated users, which causes Capital One to lose potential customers and increases call center costs.
      </p>
      <p>
      A top search query on capitalone.com is "credit cards". In the old search experience, users would see different help articles and servicing content. Instead, what we want to show is our pages for comparing different cards, pre-approval links, and product detail pages.
      </p>
      <img src={Assets.C1SearchOld} alt="old search experience"></img>
      <div className="caption-container">
        <caption style={{ marginBottom: "30px"}}>search results shown were not very relevant</caption>
      </div>
      <p>
      Only 30% of search queries resulted in a clicked search result and visitors averaged 1.6 queries per session. This suggests that many users were searching multiple times until they found what they needed, or just left the search experience all together. Our team had a goal to increase findability and surface more relevant results in order to increase credit card and bank applications, approvals, and new accounts booked rates. As the lead engineer, I collaborated with design and product partners to problem solve with a human-centered lens.
      </p>
    </div>
  )
}

export function WeighingTradeoffs() {
  return (
    <div id="WeightingTradeoffs" className="project-section">
      <h1><span className="section-title highlight">weighing tradeoffs</span></h1>
      <p>
      During a workshopping session with design partners to fully understand our users' pain points, a designer pointed out that the navigation across search was jarring. Users were not able to go back to previous searches with the browser back button if the page they clicked on did not provide the info they were looking for. Due to the nature of how our page was built, user search terms were not tracked in the browser history while searching. This was not only a confusing and frustrating experience, but it was also inconsistent with how searching worked elsewhere, such as Google. We needed a way to save user search terms and filters.
      </p>
      <img src={Assets.BackButtonFlow} alt="back button navigation user flow"></img>
      <div className="caption-container">
        <caption style={{ marginBottom: "30px"}}>instead of resetting the user's search state on navigating back, we want to maintain their previous search</caption>
      </div>
      <p>
      I knew that this ask to track user states may be a pretty big engineering lift and require discussion about the tradeoffs, so I led a meeting with the development team and design partners to talk about our different options. 
      </p>
      <p>
      Ultimately, I proposed to use Angular’s native routing functionality to add query parameters to the url. This was a win-win solution with the smoothest user experience and easiest implementation. 
      </p>
    </div>
  )
}

export function UserFlows() {
  return (
    <div id="UserFlows" className="project-section">
      <h1><span className="section-title highlight">mapping out user flows</span></h1>
      <p>
      As I started work on implementing the routing with query parameters, the other engineers had questions about all of the edge cases. At the same time, analysts wanted to know what data would be sent to them with each user interaction. I also continuously checked in with the primary designer to confirm user flows. I saw a gap in the understanding we all had about the user and system requirements. To establish alignment across designers, engineers, product managers, and data analysts for the user and system flows, I created a flowchart to depict the end-to-end user journey that is now part of our extensive documentation for current and future team members.
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={Assets.C1SearchFlowChart} alt="user and system flow chart" style={{marginTop: "30px", marginBottom: "30px", maxHeight: "600px", width: "auto"}}></img>
      </div>
      <div className="caption-container">
        <caption style={{ marginBottom: "30px"}}>creating an end-to-end system logic and user states flow chart helps align partners</caption>
      </div>
    </div>
  )
}

export function HCD() {
  return (
    <div id="HCD" className="project-section">
      <h1><span className="section-title highlight">championing human-centered design</span></h1>
      <p>
      Now that we had a consistent search experience, we wanted to make it more useful and navigable. A majority of customers start their search experience in our website's header. Thus, the design team created a new search dropdown experience to help customers discover products and services and guide their searches. There were two states to the dropdown: a default experience with popular search terms and quick links and a dynamic experience that suggests search queries based on what the user types. 
      </p>
      <img src={Assets.C1SearchDropdown} alt="search dropdown"></img>
      <div className="caption-container">
        <caption style={{ marginBottom: "30px"}}>desktop view showing the default dropdown&nbsp; | &nbsp; mobile view showing the dynamic dropdown</caption>
      </div>
      <p> 
      After receiving the designs and starting development work, I realized that keyboard interactions were not thought about in the design. Not only are keyboard interactions a common way for users to navigate in a dropdown, but it was also a vital component to ensuring that our dropdown was accessible for everyone. 
      </p>
      <p>
      I led efforts to align design and accessibility partners on the best practices so that the dropdown is both usable and useful; I balanced requirements for the dropdown to be both elegantly designed and semantically understandable to those who may be visually impaired. After a few live code workshopping sessions with the accessibility and design teams, we arrived at a search dropdown that was accessible and easy to use. 
      </p>
      <video className="small-asset" style={{border: "1px solid #E7E7E7", padding: "0px", marginTop: "30px"}}  autoPlay loop muted playsInline>
        <source src="/c1-gifs/search-dropdown-venture-keyboard-desktop.mov" type="video/mp4" />
      </video>
      <div className="caption-container">
        <caption style={{marginTop: "20px"}}>standard keyboard user experience</caption>
      </div>
      <Grid container columns={2} rowSpacing={2} columnSpacing={3} style={{marginTop: "30px", marginBottom: "30px"}}>
        <Grid item xs={2} sm={1} display="flex">
          <video className="small-asset" style={{border: "1px solid #E7E7E7", padding: "0px"}}  autoPlay loop muted playsInline>
            <source src="/c1-gifs/search-default-dropdown-voiceover.mov" type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={2} sm={1} display="flex">
          <video className="small-asset" style={{border: "1px solid #E7E7E7", padding: "0px"}}  autoPlay loop muted playsInline>
            <source src="/c1-gifs/search-dynamic-dropdown-voiceover.mov" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
      <div className="caption-container">
        <caption style={{ marginTop: "-10px", marginBottom: "30px"}}>keyboard experience using assistive technology (Voiceover)</caption>
      </div>
      <p>
      With 50% of our users accessing Capital One’s search on mobile, we ensured equal usability on mobile.
      </p>
      <Grid container columns={6} columnSpacing={3} style={{marginTop: "30px", marginBottom: "30px"}} justifyContent="center">
        <Grid item xs={6} sm={1}></Grid>
        <Grid item xs={3} sm={2} display="flex" style={{maxHeight: "600px"}}>
          <video className="small-asset" style={{border: "1px solid #E7E7E7", padding: "0px"}} autoPlay loop muted playsInline>
            <source src="/c1-gifs/search-dropdown-activate-card-mobile.mov" type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={3} sm={2} display="flex" style={{maxHeight: "600px"}}>
          <video className="small-asset" style={{border: "1px solid #E7E7E7", padding: "0px"}} autoPlay loop muted playsInline>
            <source src="/c1-gifs/search-dropdown-savings-mobile.mov" type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={6} sm={1}></Grid>
      </Grid>
      <p>
      <div className="caption-container">
        <caption style={{ marginTop: "-10px", marginBottom: "30px"}}>the mobile experience is consistent with the desktop experience</caption>
      </div>
      We also prioritized testability of the dropdown, such as experimenting with the default suggested content. This allowed for fast optimization of content that was the most useful for users.
      </p>
      <img src={Assets.Experimentation} alt="search dropdown experimentation" style={{marginTop: "20px", marginBottom: "20px"}}></img>
      <div className="caption-container">
        <caption style={{ marginTop: "-10px", marginBottom: "30px"}}>A/B testing allowed us to hone in on what content users engaged with the most</caption>
      </div>
    </div>
  )
}

export function Impact() {
  return (
    <div id="Impact" className="project-section">
      <h1><span className="section-title highlight">impact</span></h1>
      <p>
      Through this work and other enhancements to surface featured results on the search page itself, we increased the likelihood of users making a high quality search that drove them to their intended destination. We saw a +7.1% increase in first page click through rates and a baseline 41.2% click through rate on the newly developed dynamic dropdown. This was a big milestone in part of our efforts to capture user intent and provide them with relevant information and guidance.
      </p>
    </div>
  )
}
