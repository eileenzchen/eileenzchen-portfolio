import React from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import * as Assets from './assets/index.js'
import ModalImage from 'react-modal-image'
import './CapitalOne.css'

export function Intro() {
  return (
    <div id="Intro">
      <img src={Assets.C1Preview} alt="Capital One" title="Capital One" style={{marginTop: "30px", marginBottom: "30px"}}/>
    </div>
  )

}

export function Summary() {
  return (
    <div id="Summary" className="project-section">
      <h1><span className="section-title highlight">summary</span></h1>
      <p className="subheading">problem space</p>
      <p>
        How can we tailor Capital One's homepage and search experiences for 100M+ customers so that they discover the products and find the help they need?
      </p>
      <p className="subheading">role</p>
      <p>
        I lead development efforts to build out components and test experiences on capitalone.com for mobile and desktop web. I work by bringing cross-functional partners together to understand tradeoffs and find the optimal solution.
      </p>
      <p className="subheading">key skills</p>
      <p>
        HTML/CSS/JS, Angular, user-centered thinking, design systems, A/B testing, mentoring
      </p>
      <p className="subheading">outcomes</p>
      <p>
        I implemented and launched the Search dropdown and other enterprise-wide components, ensuring both a seamless and accessible (WCAG) experience. I also launched 10+ A/B experimentation tests to further optimize our pages.
      </p>
    </div>
  )
}

export function SearchEnhancements() {
  return (
    <div id="SearchEnhancements" className="project-section">
      <h1><span className="section-title highlight">enhancing Capital One Search</span></h1>
      <p>
        Capital One Search gets around 200K+ visitors every month looking for content on the site. In order to ensure users find what they are looking for and reduce calls to our customer support center, we want to ensure that Search is easy to use and quickly gets users to their end destination. I led efforts in adding URL query parameters for search to increase navigability and co-led the Search autocomplete experience. I drove workshopping sessions with the accessibility team to ensure full keyboard navigability and screen reader compatibility.
      </p>
      <img src={Assets.C1SearchOld} alt="Capital One Search old experience" style={{marginTop: "10px"}}></img>
      <div className="caption-container">
        <caption>the previous Search experience</caption>
      </div>
      <img src={Assets.C1Search} alt="Capital One Search desktop vs mobile" style={{marginTop: "10px"}}></img>
      <div className="caption-container">
        <caption>improved navigability with URL query parameters, more personalized search results based on search term</caption>
      </div>
      <img src={Assets.C1SearchDropdown} alt="Capital One Search dropdown with autocomplete" style={{marginTop: "10px"}}></img>
      <div className="caption-container">
        <caption>increased findability with default suggestions and dynamic suggested terms</caption>
      </div>
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
