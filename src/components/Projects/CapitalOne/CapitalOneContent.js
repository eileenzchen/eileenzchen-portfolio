import React from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import * as Assets from './assets/index.js'
import ModalImage from 'react-modal-image'
import './CapitalOne.css'

export function Intro() {
  return (
    <div id="Intro">
      <img src={Assets.C1Preview} alt="Capital One" title="Capital One" style={{marginTop: "30px"}}/>
    </div>
  )

}

export function Summary() {
  return (
    <div id="Summary" className="project-section">
      <h1><span className="section-title highlight">summary</span></h1>
      <p className="subheading">users</p>
      <p>
        I worked on the Capital One homepage, search, blog pages, and help center which serve more than 100 million users in North America.
      </p>
      <p className="subheading">role</p>
      <p>
        I lead front-end engineering initiatives and build components and experiences on capitalone.com for mobile and desktop web. I work by bringing cross-functional partners together and understanding problems from multiple angles to identify tradeoffs and find the optimal solution. I also enjoy mentoring interns and other full-time engineers, and learning from peers across design and product.
      </p>
      <p className="subheading">outcomes</p>
      <p>
        I implemented and launched the Capital One blog redesign and Search dropdown autocomplete, partnering closely with design and accessibility teams to ensure the best experience for all users. I also launched 10+ A/B experimentation tests through Adobe Target and developed processes and materials to decrease the team’s onboarding time.
      </p>
    </div>
  )
}

export function SearchEnhancements() {
  return (
    <div id="SearchEnhancements" className="project-section">
      <h1><span className="section-title highlight">enhancing Capital One Search</span></h1>
      <p>
        Capital One Search gets around 200K+ visitors every month looking for content on the site. It houses thousands of articles, product pages, and support pages. In order to ensure users find what they are looking for and reduce calls to our call center, we want to ensure that the Capital One Search is easy to use and quickly gets users to their end destination. 
      </p>
      <p>
        I led efforts in reducing the gulf of evaluation while browsing with Capital One Search. I also co-led the implementation of the Search dropdown autocomplete experience that is present in the main header navigation on every page. I championed human-centered design thinking while pair programming and drove workshopping sessions with design and accessibility.
      </p>
      <img src={Assets.C1Search} alt="Capital One Search desktop vs mobile" style={{marginTop: "10px"}}></img>
    </div>
  )
}

export function BlogRedesign() {
  return (
    <div id="BlogRedesign" className="project-section">
      <h1><span className="section-title highlight">revamping the Capital One blog</span></h1>
      <p>
      The Capital One Blog consists of over 2,000 articles across the site and garner over 7,000 views per article per day. They serve to provide information and guidance to our customers and funnel customers down the information pipeline to take action in one of our lines of businesses, such as applying for a credit card or opening a bank account. These articles exist across different segments of the business from Capital One Software to our Newsroom. As the layouts of these articles have not been updated in five years, we partnered with the design team to redesign the layout, standardize the branding, and clean up the information hierarchy. 
      </p>
      <p>
        I collaborated with over 15 stakeholders across different job families (product, design, marketing, brand, web content management) in order to plan out the blog redesign rollout strategy. I focused on balancing seamless, consistent user experiences with engineering constraints, communicating with the relevant partners to stay in alignment on the expected behavior. I not only ensured a great customer experience, but also an intuitive web content editor experience so that it's easy for them to build blog pages that align with our design system guidelines.
      </p>
      <img src={Assets.C1ArticleRedesign} alt="Capital One Blog Redesign" style={{marginTop: "10px"}}></img>
    </div>
  )
}

export function AdobeTargetTesting() {
  return (
    <div id="AdobeTargetTesting" className="project-section">
      <h1><span className="section-title highlight">conducting Adobe Target experimentation tests</span></h1>
      <p>
        Our team owned the homepage and other high traffic pages which drive conversion for a variety of downstream metrics including app downloads, new accounts booked, and page-level engagement. We constantly tested experiences through A/B testing and multi-armed bandit testing methods. 
      </p>
      <p>
        I launched over 10 experimentation tests across Capital One. A recent mobile app page test drove a 65% increase in app downloads. To get this test ready for launch, I coordinated with partners in product and brand to align on the test setup, measurement, and QA.
      </p>
    </div>
  )
}

export function AutomatingData() {
  return (
    <div id="AutomatingData" className="project-section">
      <h1><span className="section-title highlight">automating an internal data management platform</span></h1>
      <p>
        On my first team, we owned the internal data management platform that allowed engineers and data analysts to create, find, and manage their APIs and datasets. I coordinated between engineering and product to implement and stress test automation features that eliminated stale data in the platform. I designed user flow mockups and architecture diagrams to visually communicate the different possible journeys for various users and aid in alignment on the most frictionless solution for our customers. 
      </p>
    </div>
  )
}
