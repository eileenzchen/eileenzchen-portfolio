import React from 'react'
import ModalImage from "react-modal-image";
import Polaroid from '../../Polaroid/Polaroid.js'
import { Grid } from '@mui/material';
import * as Assets from './assets'


export function Intro() {
  return (
    <div id="Intro">
      <img src={Assets.BakingFactoryPreview} alt="The Baking Factory" title="The Baking Factory" style={{marginTop: "30px"}}/>
    </div>
  )
}

export function Summary() {
  return (
    <div id="Summary" className="project-section">
      <h1><span className="section-title highlight">summary</span></h1>
      <p className="subheading">problem</p>
      <p>
        Bakeries get hundreds of orders a day and there are often inefficiencies in the way orders are delivered. How can we build an ecommerce platform that aligns the business and consumer needs that meet the day-to-day operational needs of a bakery? 
      </p>
      <p className="subheading">solution</p>
      <p>
        I implemented a central bakery web application where customers and employees alike can authenticate and easily complete and track their orders. 
      </p>
      <p className="subheading">role</p>
      <p>
        I designed and developed the entire web application starting from database and user interaction design to implementation.
      </p>
      <p className="subheading">growth</p>
      <p>
        Through this project, I not only learned how to quickly iterate and develop in sprints, but also learned how to empathize with different users' needs and motivations. 
      </p>
    </div>
  )
}

export function PersonasUseCases() {
  return (
    <div id="PersonasUseCases" className="project-section">
      <h1><span className="section-title highlight">personas & use cases</span></h1>
      <p>
        Provided with a <a href={Assets.Narrative } className="content-link" target="_blank" rel="noopener noreferrer">fictitious story</a> of two owners starting The Baking Factory, I first extracted who the actors of the system were and what each of their user needs were. The five actors were system admin, shippers, bakers, customers, and guests. Listing out <a href={Assets.UseCases} className="content-link" target="_blank" rel="noopener noreferrer">use cases</a> then helped lay out the similar and different user goals of each actor and how they translated to functional or system requirements. It also helped with prioritizing what were A versus B level use cases.
      </p>
      <table className="useCases" style={{ marginTop: "30px"}}>
        <tr className="tr-dark">
          <th>Use Case Name</th>
          <th>Actor(s)</th>
          <th>Description</th>
        </tr>
        <tr className="tr-light">
          <td>Add customer</td>
          <td>Admin, Guest</td>
          <td>The user can add a new customer to the system (create an account).</td>
        </tr>
        <tr className="tr-dark">
          <td>Checkout</td>
          <td>Customer</td>
          <td>The user can see an itemized list of products they are ordering (including quantity and subtotal), shipping costs, and grand total.</td>
        </tr>
        <tr className="tr-light">
          <td>Add item to cart</td>
          <td>Customer</td>
          <td>The user can add an item to their cart..</td>
        </tr>
        <tr className="tr-dark">
          <td>Deactivate item</td>
          <td>Admin</td>
          <td>The user can deactivate items that are no longer being sold.</td>
        </tr>
        <tr className="tr-light">
          <td>Add customer</td>
          <td>Admin, Guest</td>
          <td>The user can add a new customer to the system (create an account).</td>
        </tr>
      </table>
      <div className="caption-container">
        <caption style={{ marginBottom: "30px"}}>example use cases for different users/actors</caption>
      </div>
      <p>
        In addition to an overview of who was involved and their goals, it was also vital to think about the relationship between the different components in the system such as how items made up an order and customers could have many orders. I created an entity-relationship diagram to visually show the data that is going to be stored within the database and how they related to each other. It helped to structure the way the database should be designed and highlight the business needs of the system, such as seeing a history of prices for a particular item.
      </p>

      <div style={{marginTop: "30px"}}>
        <img src={Assets.ERD} alt="entity relationship diagram"></img>
        {/* <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.ERD}
        large={Assets.ERD}
        alt="entity relationship diagram"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      /> */}
      </div>
      <div className="caption-container">
        <caption>entity relationship diagram of The Baking Factory</caption>
      </div>
      
    </div>
  )
}

export function QuickSketches() {
  return (
    <div id="QuickSketches" className="project-section">
      <h1><span className="section-title highlight">quick sketches</span></h1>
      <p>
      With a deeper understanding of who I'm creating the system for and their utility of the baking factory ecommerce system, I began with some rough sketches of the site to quickly ideate on how different elements could work together to help users accomplish their goals.
      </p>
      <p>
        After browsing through some bakery website examples online, I sketched what I thought a bakery website was "supposed to look like", especially for the guest home page. 
      </p>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <img src={Assets.Sketches} alt="baking factory initial sketches"></img>
        {/* <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.Sketches}
        large={Assets.Sketches}
        alt="baking factory initial sketches"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
        /> */}
      </div>
      <p>
        As it turned out, the first pass at the website turned out to be a cookie cutter version of all the other bakery websites I saw. I thought it was a fine way to design the site and put it in front of a couple of mentors to help critique the design and get feedback early on. And it’s a good thing I did. The most important piece of advice I received during this whole process was from my research mentor, who commented,
      </p>
      <blockquote>
        "Just because everyone else is designing a website like this doesn't mean it's the right way to design it"
      </blockquote>
      <p>
        He pushed me to think about how the large successful ecommerce platforms, like Amazon, design their site. Is it the most beautiful site? Absolutely not. But it sure is super easy to use and even addicting to use. I began to ask the question of “Why” versus just the question of “What”. No longer was I just thinking “What should a user be able to do on the Baking Factory site?” but
      </p>
      <blockquote>
        "Why do users come to the Baking Factory site?" 
      </blockquote>
      <p>
        To put very simply, users want to buy baked goods. Why provide barriers like flashy marketing against that? So like how Amazon customers are able to see all of their favorite products on the first page they land on, Baking Factory customers should be able to see the bakery products they are interested in right away to drive more customer to purchase items. 
      </p>
      <p>
        With the current hero image and the marketing icon grid as the first thing customers saw, it looked more like a marketing page if anything. With my next wireframe iteration, I kept the users’ motivations of coming to the site in mind.
      </p>
    </div>
  )
}

export function ContextualizingDesign() {
  return (
    <div id="ContextualizingDesign" className="project-section">
      <h1><span className="section-title highlight">placing the design in context</span></h1>
      <p>
        From what I learned from some quick sketches, I wanted to create higher fidelity wireframes to see the different components in context and visualize how the aesthetics of the site will support the functionality. The first version was in grayscale so that I could focus on the information architecture and visual hierarchy. Since I had very limited time to flesh out designs, I prioritized the customer interactions, including the home and customer dashboard pages. 
      </p>

      <Grid container columns={2} spacing={1} style={{marginTop: "30px"}}>
        <Grid item xs={2} sm={1}>
          <img src={Assets.GuestHomeV1} alt="guest home midfi wireframe v1"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.GuestHomeV1}
          large={Assets.GuestHomeV1}
          alt="guest home midfi wireframe v1"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
        <Grid item xs={2} sm={1}>
          <img src={Assets.CustomerDashboardV1} alt="customer dashboard midfi wireframe v1"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.CustomerDashboardV1}
          large={Assets.CustomerDashboardV1}
          alt="customer dashboard midfi wireframe v1"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
      </Grid>

      <p>
        Critiquing my own design due to time constraints, I stood in the shoes of a first time customer coming to the Baking Factory site viewing the home page and a return customer coming to the Baking Factory site viewing the customer dashboard page. I noticed that there was information overload on the home page with a lack of visual hierarchy. With the double menu of the same font sizes and different cards of similar sizes, there is no clear call to action or guidance on what the user should click on.
      </p>
      <p>
        With the second midfi version, I created a user flow for what I thought was one of the most important purposes of the website—to checkout and track orders. I also circled back to the original purpose of bringing the products up front and clearly emphasized. Since a bakery has limited items, I organized all the bakery items under category tabs to allow customers to more easily find what they are looking for. In addition, I eliminated unnecessary information such as the second navigation. 
      </p>

      <Grid container columns={2} spacing={1} style={{marginTop: "30px"}}>
        <Grid item xs={2} sm={1}>
          <img src={Assets.GuestHomeV2} alt="guest home midfi wireframe v2"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.GuestHomeV2}
          large={Assets.GuestHomeV2}
          alt="guest home midfi wireframe v2"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
        <Grid item xs={2} sm={1}>
          <img src={Assets.CustomerDashboardV2}alt="customer dashboard midfi wireframe v2" ></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.CustomerDashboardV2}
          large={Assets.CustomerDashboardV2}
          alt="customer dashboard midfi wireframe v2"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
      </Grid>
      <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>v2 midfi wireframes for customer and guest home pages</caption>
      </div>

      <Grid container columns={4} spacing={1} style={{marginTop: "30px"}}>
        <Grid item xs={4} sm={1}>
          <img src={Assets.CartMidfi}alt="cart midfi wireframe" ></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.CartMidfi}
          large={Assets.CartMidfi}
          alt="cart midfi wireframe"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
        <Grid item xs={4} sm={1}>
          <img src={Assets.CheckoutMidfi} alt="checkout midfi wireframe"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.CheckoutMidfi}
          large={Assets.CheckoutMidfi}
          alt="checkout midfi wireframe"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
        <Grid item xs={4} sm={1}>
          <img src={Assets.OrderDetailsMidfi} alt="order details midfi wireframe"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.OrderDetailsMidfi}
          large={Assets.OrderDetailsMidfi}
          alt="order details midfi wireframe"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
        <Grid item xs={4} sm={1}>
          <img src={Assets.OrdersMidfi} alt="all orders midfi wireframe"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.OrdersMidfi}
          large={Assets.OrdersMidfi}
          alt="all orders midfi wireframe"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
      </Grid>
      <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>v2 midfi wireframes for customer ordering and checkout experience</caption>
      </div>

      <p>
        Lastly before coding, I created a couple of different color themes in the context of the home page. Ultimately, the goal of the colors was to allow the bakery item images to stand out and create a warm and welcoming feeling, as one would get walking into a bakery shop. The pink background, although providing a cozy feeling, distracts from the products themselves and provides lower text contrast. The inverted white background pink accent is cleaner and creates greater contrast with the images, but it creates a cooler and modern mood versus an inviting one. The last iteration keeps the legibility while tying the different baked goods together with its warm wheat color.
      </p>
      <Grid container columns={3} spacing={1} style={{marginTop: "30px"}}>
        <Grid item xs={3} sm={1}>
          <img src={Assets.PinkTheme} alt="pink color theme exploration"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.PinkTheme}
          large={Assets.PinkTheme}
          alt="pink color theme exploration"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
        <Grid item xs={3} sm={1}>
          <img src={Assets.PinkWhiteTheme} alt="pink and white color theme exploration"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.PinkWhiteTheme}
          large={Assets.PinkWhiteTheme}
          alt="pink and white color theme exploration"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
        <Grid item xs={3} sm={1}>
          <img src={Assets.BrownTheme} alt="tan color theme exploration"></img>
          {/* <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.BrownTheme}
          large={Assets.BrownTheme}
          alt="tan color theme exploration"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
          /> */}
        </Grid>
      </Grid>
    </div>
  )
}

export function Interplay() {
  return (
    <div id="Interplay" className="project-section">
      <h1><span className="section-title highlight">the interplay between design and engineering</span></h1>
      <p>
        Due to limited time, I started development work and utilized the Materialize framework in order to quickly implement a design standard across the website. As I started coding out the different functionalities of the site for different users, I started honing in on affordances and feedback states to more effectively guide and encourage user interactions (full video at end of this section). 
      </p>

      <p>
       For example, when an order is placed or the credit card number is invalid during checkout, customers receive a notification within the site to inform them of the result of their action. This notification pattern provides users feedback that their actions match their mental model of how the ecommerce system works, instills confidence in their actions, and builds trust in the system. 
      </p>

      <video className="drop-shadow" width="100%" height="auto" style={{marginTop: "30px", marginBottom: "30px"}} autoPlay loop muted playsInline>
        <source src="baking-factory-gifs/invalid-credit-card.mov" type="video/mp4" />
      </video>
      <p>
        Given the number of items sold was a primary KPI for the owners, I also thought about how to empower customers to easily add items to their cart. If a user comes back to the Baking Factory, they likely enjoyed what they bought before, and thus I positioned the customer’s last order at the top of the page with “buy again” CTAs to easily add their previously bought items to cart. For discoverability of new products, there is a search bar and a featured product of the week.  
      </p>
      <video className="drop-shadow" width="100%" height="auto" style={{marginTop: "30px", marginBottom: "30px"}} autoPlay loop muted playsInline>
        <source src="baking-factory-gifs/logged-in-user-buy-again.mov" type="video/mp4" />
      </video>
      <p>
        Bakers and shippers come to the Baking Factory for the very specific purpose of tracking what to bake and what to ship, so the UI is kept very simple. For shippers, the two tabs allow them to easily filter between what is shipped and what needs to be shipped. Furthermore, an inline CTA allows them to mark and unmark items as shipped through just one click. For bakers, they have categorized tabs that show them what needs to be baked that day.
      </p>

      <video className="drop-shadow" width="100%" height="auto" style={{marginTop: "30px"}} autoPlay loop muted playsInline>
        <source src="baking-factory-gifs/shipper-ux.mov" type="video/mp4" />
      </video>
      <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>shipper dashboard</caption>
      </div>
      <video className="drop-shadow" width="100%" height="auto" autoPlay loop muted playsInline>
        <source src="baking-factory-gifs/baker-ux.mov" type="video/mp4" />
      </video>
      <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>baker dashboard</caption>
      </div>

      <p>
        For the admins, who are also the owners, knowing how their business was doing was vital. Thus, I created an admin dashboard on their home screen to provide them with key insights as the first thing they see when signed in. I stood in their shoes to consider what would be the most important sales information to show in the admin's data dashboard and what kinds of visualizations would be most appropriate.
      </p>
      <p>
        The admins are also able to perform the most amount of actions, as we learned by listing out use cases. For example, they are able to update prices of items, add new items, and upload a picture for an item. They are also able to create, view, update, and/or delete orders, customers, addresses, and employees. With so many functionalities, I organized them in the navigation by buckets. 
      </p>
      <video className="drop-shadow" width="100%" height="auto" style={{marginTop: "30px", marginBottom: "30px"}} autoPlay loop muted playsInline>
        <source src="baking-factory-gifs/admin-sales-dashboard.mov" type="video/mp4" />
      </video>
      <p>
        I also ensured that the designs were consistent across the buckets. Whether adding a new item or a new address, the user flow and interactions were generally the same. 
      </p>
      <p>
        However, in certain cases, user flows are modified in order to make completing a frequent task easier. Updating an item price is something the admins would more frequently interact with than updating the name or weight of an item. So instead of embedding it in the edit item form, I brought the functionality out to the main item page. 
      </p>
      <video className="drop-shadow" width="100%" height="auto" style={{marginTop: "30px", marginBottom: "30px"}} autoPlay loop muted playsInline>
        <source src="baking-factory-gifs/updating-item-price.mov" type="video/mp4" />
      </video>
      <p>
        At the end of the course, the TAs and professor judged the web apps of all the students taking the course, and I won the award for having the best design and technical implementation. You can see the codebase on Github. After the course was over, I deployed my app to Heroku, but due to recent policy changes for a free account, the site is no longer functioning at this time. Below is a video demo of all of the interactions for each user.
      </p>
      <div className="videoContainer pitchContent" style={{marginTop: "30px", marginBottom: "30px"}}>
        <iframe className="video" src="https://www.youtube.com/embed/CrmjiFFwKmU" title="What2Yum video pitch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
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
            I learned to borrow from existing design patterns, but more importantly learned to <b>be wary that “how it has been done” is not always the best way</b>. Although there are design patterns and general rules and practices, it does not mean it applies in every situation. Hero banners may be great for marketing a single mobile app with a download button, but are not effective for a bakery app with many items.
          </li>
          <li>
            As a designer in industry, it is <b>my priority to involve user voices and feedback in every step of the design process</b> (e.g. weekly user studies, share outs of user trends). It’s vital to stay in the know of <b>changing user perception</b>.
          </li>
          <li>
            It was challenging designing when I did not have the clear user motivation and goals in mind and how that would be measured. With more time, I would focus on <b>designing around a specific KPI or goal metric such as number of orders or number of items bought in total</b>. With quantitative as well as qualitative metrics, I would be able to hone in on creating user flows and interactions that drive those goals, and of course, test them out. 
          </li>
        </ol>
      </p>
    </div>
  )
}

