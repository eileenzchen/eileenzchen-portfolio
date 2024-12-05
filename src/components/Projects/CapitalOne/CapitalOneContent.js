import React from 'react'
import * as Assets from './assets/index.js'
import './CapitalOne.css'
import { Grid } from '@mui/material';

export function Intro() {
  return (
    <div id="Intro">
      <h1 data-aos="fade-up"><span className="project-title monospace-300">Developing intuitive, accessible experiences for capitalone.com</span></h1>
      <h2 data-aos="fade-up" data-aos-delay="100" className="project-subheading monospace-200">How can we help customers easily discover new card and bank products?</h2>
      <img data-aos="fade-up" data-aos-delay="300" src={Assets.FeatureHighlight} alt="capital one search and homepage" loading="lazy"></img>
      <Grid data-aos="fade-up" data-aos-delay="400" container columns={4} columnSpacing={1} style={{marginTop: "10px"}}>
        <Grid item xs={2} md={1}>
          <h2>role</h2>
          <p className="project-description">
            front-end developer
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>team</h2>
          <p className="project-description">
            3+ engineers, designer, product manager, data analyst
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>tools</h2>
          <p className="project-description">
            Angular<br></br>
            HTML / CSS<br></br>
            Github<br></br>
            Figma<br></br>
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>skills</h2>
          <p className="project-description">
            web accessibility<br></br>
            web development<br></br>
            A/B testing<br></br>
          </p>
        </Grid>
      </Grid>
      <div className="text-divider">
        <img className="leaf-divider" src={process.env.PUBLIC_URL + '/leaf-divider.png'}/>
      </div>
    </div>
  )
}

export function Context() {
  return (
    <div id="Context" className="project-section">
      <h1><span className="section-title highlight">context</span></h1>
      <Grid container columns={2} columnSpacing={4}>
        <Grid item xs={2} md={1}>
        <p>
          With Capital One's primary focus on digital banking, capitalone.com is the doorway to all its banking products and services. The team I'm on focuses on improving <b>Capital One's Homepage and Search</b> experiences which serve more than 100M customers. Our goal is to help customers discover and answer questions for relevant products. <b>I focus on developing experiences that meet the needs of all customers.</b> To do this, I changed my team's development process to promote collaboration between engineers, designers, and the accessibility team.
        </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <img src={Assets.HomepageSearch} alt="capital one homepage and search"></img>
        </Grid>
      </Grid>

      
    </div>
  )
  }

export function Problem() {
  return (
    <div id="Problem" className="project-section">
      <h1><span className="section-title highlight">problem</span></h1>
      <p>
        As I started developing new experiences for capitalone.com, I noticed that <b>accessibility was not considered until the very end of development</b>. Early on in the team, accessibility reviews were submitted as a very last step of the development process, which often led to parts of code needing to be rewritten or even designs needing to be updated to satisfy the accessibility requirements.
      </p>
      <img src={Assets.OldDevProcess} alt="old development process"></img>
      <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>development process where accessibility is only considered at the end</caption>
      </div>
      {/* <p>
      There are 4,000+ pages on capitalone.com ranging from product pages to servicing content. However, a lack of relevant search results and a lack of guidance lead to frustrated users, which causes Capital One to lose potential customers and increases call center costs.
      </p>
      <p>
      A top search query on capitalone.com is "credit cards". In the old search experience, users would see different help articles and servicing content. Instead, what we want to show is our pages for comparing different cards, pre-approval links, and product detail pages.
      </p>
      <img src={Assets.C1SearchOld} alt="old search experience"></img>
      <div className="caption-container">
        <caption style={{ marginBottom: "30px"}}>search results shown were not very relevant</caption>
      </div>
      <p>
      Only 30% of search queries resulted in a clicked search result and visitors averaged 1.6 queries per session. This suggests that many users were searching multiple times until they found what they needed, or just left the search experience all together. Our team had a goal to increase findability and surface more relevant results in order to increase credit card and bank applications, new accounts booked rates, and decrease customer service calls. As the lead engineer, I collaborated with design and product partners to problem solve with a human-centered lens.
      </p> */}
    </div>
  )
}

export function Solution() {
  return (
    <div id="Solution" className="project-section">
      <h1><span className="section-title highlight">solution</span></h1>
      <p>
        Seeing this gap in our development process, I wanted to make <b>accessibility an intentional process right from the start instead of an afterthought</b> that was just there to satisfy legal requirements. I started advocating for both engineering and design teams to work with the accessibility teams during the early planning phases of the development process. I emphasized that <b>collaborative planning</b> of how this experience will function <b>reduces churn</b> later in the development process and emphasizes a <b>human-centered mindset</b> among the team. I also evangelized the importance of doing <b>manual accessiblity testing on top of automated accessibility testing</b> since not all accessibility requirements can be caught with automation.
      </p>
      <p>
        With that, this was the new process I proposed and brought forth to my team:
      </p>
      <img src={Assets.NewDevProcess} alt="old development process"></img>
      <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>development process where accessibility is considered throughout</caption>
      </div>
    </div>
  )
}

export function Search() {
  return (
    <div id="Search" className="project-section">
      <h1><span className="section-title highlight">helping customers find answers with Search</span></h1>
      <p>
        Two projects come to mind when I think about how we put these new accessibility practices into action. The first was the Capital One Search dropdown, which was a new feature we built from the ground up with a <b>deeper focus on how users with disabilities would be able to match their search intent to a search result</b>.
      </p>
      <img src={Assets.C1SearchDropdown} alt="search dropdown"></img>
      <div className="caption-container" style={{marginBottom: '40px'}}>
        <caption>Search dropdown without accessibility features. There is no way to navigate through the options with the keyboard.</caption>
      </div>
      <p> 
        When I first received the designs, I realized that keyboard interactions were not accounted for. Not only are keyboard interactions a common way for users to navigate in a dropdown, but they are also a vital element of meeting accessibility needs across all users.
      </p>
      <blockquote>How can we ensure keyboard users can easily navigate the Search dropdown?</blockquote>
      <p>
        I balanced requirements for the dropdown to be both elegantly designed and semantically understandable to those who may be visually impaired. <b>After a few live code workshopping sessions with the accessibility and design teams, we arrived at a search dropdown that was accessible and easy to use</b>. 
      </p>
      <p>
        <ol>
          <li>
            Users can navigate with keyboard <code>Up</code> and <code>Down</code> arrow keys through the search options
          </li>
          <li>
            Users can <code>Tab</code> through search options with a focus highlight state
          </li>
          <li>
            Underlines indicate the active option
          </li>
          <li>
            Addition of proper <code>aria-labels</code> and <code>roles</code> so that assistive technology can read out the proper options and functions
          </li>
          <li>
            Researched design patterns across other search engines to follow keyboard patterns familiar to users
          </li>
        </ol>
      </p>
      <video className="small-asset" style={{border: "1px solid #E7E7E7", padding: "0px", marginTop: "30px"}}  autoPlay loop muted playsInline>
        <source src="/c1-gifs/search-dropdown-venture-keyboard-desktop.mov" type="video/mp4" />
      </video>
      <div className="caption-container">
        <caption style={{marginTop: "20px"}}>the new search dropdown with accessible keyboard navigation</caption>
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
        <caption style={{ marginTop: "-10px", marginBottom: "30px"}}>navigating with the keyboard experience using Apple's assistive technology, Voiceover</caption>
      </div>
      <p>
        Through this work and other enhancements to surface featured results on the search page itself, we increased the likelihood of users making a high quality search that drove them to their intended destination. We saw a <b>+7.1% increase</b> in first page click through rates and a baseline <b>41.2% click through rate</b> on the newly developed dynamic dropdown. This was a big milestone in part of our efforts to capture user intent and provide them with relevant information and guidance.
      </p>
    </div>
  )
}

export function Homepage() {
  return (
    <div id="Homepage" className="project-section">
      <h1><span className="section-title highlight">driving customer discovery on the Homepage</span></h1>
      <p>
        The second case that exemplified strong accessibility practices was the capitalone.com<b>Homepage customization feature</b>. Specifically, we wanted customers to be able to change the Homepage to match their specific intent by clicking on different tabs, swapping out the content underneath. <b>Planning with design and accessibility partners was crucial</b> to set us up for smooth development.
      </p>
      <img src={Assets.HomepageTabs} alt="homepage tabs"></img>
      <div className="caption-container">
        <caption style={{ marginBottom: "30px"}}>new homepage component that introduces customizability options</caption>
      </div>
      <p>
        As this component design was new to Capital One, it wasn't clear what kind of component architecture would make the most sense for users. Should the buttons act like links that link to subpages? Should it act like a filter? What kind of semantic HTML should we use?
      </p>
      <blockquote>How can we ensure all users understand how to use this complex component on mobile and desktop devices?</blockquote>
      <p>
        While planning out how we were going to implement this new component, I pulled in design and accessibility partners to discuss the intention of this component and the most semantically logical HTML.
      </p>
      <p>
        Since this component is meant to segment out different customers (e.g. people seeking to build credit, frequent travelers) and products (e.g. credit cards vs banking accounts), our accessibility partner suggested a <b>tab panel implementation for desktop</b>. On mobile, we would leverage a <b>dropdown navigational menu</b>, with the menu appearing as an overlay.
      </p>
      <p>
        When it came to development time, my teammate and I kept in constant communication with our accessibility partner to ensure our approach was in line with what we had discussed. We also asked questions as they came up around keyboard interactions and HTML structure. 
      </p>
      <p>
        Ultimately, <b>we started as early as possible in the process to understand the accessibility requirements and were able to save a lot of code rework</b>. If we had not aligned with our accessibility partners from the get-go, we may have had to redo the code structure and caused additional churn. Instead, we swiftly introduced a more accessible, customizable homepage experience for all types of users.
      </p>

      <Grid container columns={3} rowSpacing={2} columnSpacing={3} style={{marginTop: "30px", marginBottom: "30px"}}>
        <Grid item xs={3} sm={2} display="flex">
          <video className="small-asset" style={{border: "1px solid #E7E7E7", padding: "0px"}}  autoPlay loop muted playsInline>
            <source src="/c1-gifs/homepage-tabs-desktop.mov" type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={3} sm={1} display="flex">
          <video className="small-asset" style={{border: "1px solid #E7E7E7", padding: "0px"}}  autoPlay loop muted playsInline>
            <source src="/c1-gifs/homepage-tabs-mobile.mov" type="video/mp4" />
          </video>
        </Grid>
      </Grid>
      <div className="caption-container">
        <caption style={{ marginBottom: "30px"}}>visual demonstration of how the customization tabs allow a user to navigate their desired homepage view</caption>
      </div>
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
      <p>
        Through this work and other enhancements to surface featured results on the search page itself, we increased the likelihood of users making a high quality search that drove them to their intended destination. We saw a +7.1% increase in first page click through rates and a baseline 41.2% click through rate on the newly developed dynamic dropdown. This was a big milestone in part of our efforts to capture user intent and provide them with relevant information and guidance.
      </p>

    </div>
  )
}

export function Impact() {
  return (
    <div id="Impact" className="project-section">
      <h1><span className="section-title highlight">impact</span></h1>
      <p>
        With this more collaborative and streamlined workflow, our team is much more productive. <b>Capital One's site a11y standards also go far beyond what's legally required of it</b>, as we put inclusive experiences first and foremost in the development process. With my learnings about human-centered development, I wrote an internal blog about how engineers can adopt human-centered design and development in their day-to-day work. <b>Today, I continue to advocate for human-centered thinking and cross-pollination to bridge the gap between engineers, designers, accessibility teams, and product managers</b>.
      </p>
    </div>
  )
}
