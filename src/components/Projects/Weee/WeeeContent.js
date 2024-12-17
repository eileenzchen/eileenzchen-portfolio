import React, { useEffect } from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import * as Assets from './assets/index.js'
import ModalImage from 'react-modal-image'
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Grid } from '@mui/material'

export function Intro() {
  return (
    <div id="Intro">
      <h1 data-aos="fade-up"><span className="project-title monospace-300">Engaging and inspiring the grocery shopping community</span></h1>
      <h2 data-aos="fade-up" data-aos-delay="100" className="project-subheading monospace-200">How can we make online grocery shopping fun?</h2>
      <img data-aos="fade-up" data-aos-delay="300" src={Assets.FeatureHighlight} alt="redesign features" loading="lazy"></img>
      <Grid data-aos="fade-up" data-aos-delay="400" container columns={4} columnSpacing={0} style={{marginTop: "10px"}} >
        <Grid item xs={2} md={1}>
          <h2>role</h2>
          <p className="project-description">
            product designer
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>team</h2>
          <p className="project-description">
            individual
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>tools</h2>
          <p className="project-description">
            Figma
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>skills</h2>
          <Grid container columns={2} rowSpacing={2}>
            <Grid xs={1}>
              <p className="project-description">
                interaction design<br></br>
                visual design<br></br>
                design systems<br></br>
              </p>
            </Grid>
            <Grid xs={1}>
              <p className="project-description">
                motion design<br></br>
                AI design <br></br>
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

export function Inspiration() {
  return (
    <div id="Inspiration" className="project-section">
      <h1><span className="section-title highlight">inspiration</span></h1>
      <p>
        <b>I grew up loving to grocery shop.</b> It was a ritual that I had with my mom to go to the 99 Ranch, the Asian supermarket, and Costco every weekend. We perused the aisles for the newest ice cream and fresh pastries, checked the store magazines for the best sales, and ran into neighbors and friends who told us about their good finds.
      </p>
      <p>
        Now with the prevalence of online grocery shopping, I <b>wanted to bring this sense of wonder and community</b> to a platform myself, my family, and friends commonly use to deliver groceries&mdash;Weee!.
      </p>
    </div>
  )
}

export function Problem() {
  return (
    <div id="Problem" className="project-section">
      <h1><span className="section-title highlight">problem</span></h1>
      <p>
        Weee! is America's largest online Asian supermarket, offering a variety of both everyday and trendy Asian foods. In addition to offering its groceries to a wider audience and increasing its volume of groceries purchased, <b>Weee! aims to make grocery shopping inspiring and fun</b>. However, it was clear from user interviews that Weee! members lacked a sense of community due to unclear information and a lack of community inspiration throughout the purchasing journey.
      </p>
      <img src={Assets.OriginalDesignProblems} alt="original Weee! design problems" loading="lazy"></img>
      <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>Weee! users shared the following feedback on the current shopping experience during interviews.</caption>
      </div>
      <p>Thus, I explored:</p>
      <blockquote>
        How might we have Weee! users inspire each other to try new items throughout the purchasing process?
      </blockquote>

      {/* <p className="subheading" style={{marginBottom: "0px"}}>original Weee! design</p>
      <img src={Assets.OriginalDesign} alt="original Weee! design" loading="lazy"></img> */}
      {/* <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.OriginalDesign}
        large={Assets.OriginalDesign}
        alt="original Weee! design"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      /> */}
      {/* <p className="subheading" style={{marginBottom: "0px"}}>final redesign</p>
      <img src={Assets.FinalScreensHighlight} alt="final design" loading="lazy"/> */}
      {/* <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.FinalScreensHighlight}
        large={Assets.FinalScreensHighlight}
        alt="final design"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      /> */}
      {/* <p className="subheading" style={{marginBottom: "5px"}}>a moment  of delight</p>
      <div style={{textAlign:"center"}}>
        <video className="small-asset" style={{width: "40%"}} autoPlay loop muted playsInline>
          <source src="/weee-gifs/enhance-cart-vid-v2.mov" type="video/mp4"/>
        </video>
      </div> */}
      {/* <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>adding a moment of delight during checkout &#8212; read on for my process!</caption>
      </div> */}

    </div>
  )
}

export function Research() {
  return (
    <div id="Research" className="project-section">
      <h1><span className="section-title highlight">research</span></h1>
      <p>
        Weee!'s mission extends beyond grocery shopping convenience. CEO Larry Liu emphasizes the need for food shopping to be "much, much better, much, much more inspiring and fun". In addition to ensuring accessibility and affordability, <b>Weee! leverages social commerce to build and engage its community</b>. Notable features include order sharing for rewards and a community feed for recipe and unboxing videos. The goal is to spark excitement among users, encouraging them to share and explore new foods with friends and family.
      </p>
      <p>
        Weee!'s customer base is primarily <b>first generation immigrants</b> and is growing with <b>second- and third-generation shoppers</b>. With a few customers from this group, <b>I conducted grocery purchase task analyses</b> and gathered the following notable user behavior and opinions.
      </p>
      <p>
      Some notable user insights included:
        <ul>
          <li>
            What's the difference between the home and explore pages?
          </li>
          <li>
            I've never noticed the community page before   
          </li>
          <li>
            The community page is overwhelming and makes we want to leave
          </li>
          <li>
            The subcategories don't make sense - “why is there a 'noodles and wraps' category under tofu?”
          </li>
          <li>
            I always skip past the marketing carousel on the home page
          </li>
        </ul>
      </p>
      <p>
        Through <b>bucketing and affinity mapping</b> the insights, I formulated areas of the app that could use redesigning.
      </p>
      <video className="small-asset" autoPlay loop muted playsInline>
        <source src="/weee-gifs/bucketing-affinity-mapping.mov" type="video/mp4" />
      </video>
      <p>
        An <b>impact-effort matrix</b> helped me to identify the areas that had the highest impact while requiring lower development effort. I valued higher impact as opposed to lower effort for this redesign. I realized that there was an opportunity to integrate these experiences to both <b>increase the ability for users to find relevant groceries and introduce them to new community-driven items throughout their purchasing process</b>. 
      </p>
      <img alt="impact effort matrix" src={Assets.ImpactEffort} loading="lazy"></img>
    </div>
  )
}

export function CompetitiveAnalysis() {
  return (
    <div id="CompetitiveAnalysis" className="project-section">
      <h1><span className="section-title highlight">competitive analysis</span></h1>
      <p>
        I examined Pinterest, Amazon, and Instagram to see how existing successful social media and ecommerce products approach community engagement and searching compared to Weee!. 
      </p>
        
      <img src={Assets.DesignPatterns} alt="design patterns analysis" loading="lazy"/>

      <p>
        With this comparison, I noticed the <b>differences between apps that target different cultures</b>. Since Weee! started out targeting primarily Chinese speaking users, a lot of their layouts and content are similar to other Chinese apps. There was a lot more dense text on one page since Chinese characters are easily skimmable and often shorter in length to describe the same thing. Chinese speakers are used to seeing a lot more text at a time. However, American apps often focus more on minimizing the amount of text since English words are lengthy. <b>With Weee! wanting to expand their market to more second and third generation Americans, I focused on minimal text and using media to speak for itself.</b>
      </p>
    </div>
  )
}

export function Sketching() {
  return (
    <div id="Sketching" className="project-section">
      <h1><span className="section-title highlight">sketching</span></h1>
      <p>
        With an idea of how other products approach social feeds and searching, I began to sketch out different points in the grocery shopping process where community posts could be brought in for inspiration. As the main point of the community posts are to inspire people to buy more groceries, I created an easier way for people to add something to cart after seeing a post.
      </p>
      <img style={{marginTop:"20px", marginBottom:"20px"}} alt="sketches user flow" src={Assets.SketchUserFlow} loading="lazy"/>
      <p>
        I noticed some gaps in my initial sketching highlighted in yellow, so I did a couple more sketches to visualize how and at what point users could view the items used in the post and add them to cart. I created two versions of the community page, one with a gallery view and one with a single post view to test with users.
      </p>
      <img alt="community flow sketches" src={Assets.CommunitySketches} loading="lazy"/>
      <p>
        Even though they were just rough sketches, I put my initial ideas in front of my design mentor and a couple of users to get feedback early on. 
      </p>
      <p>
        A few pieces of feedback to note:
        <ul>
          <li>
            It would be nice to see what items are trending
          </li>
          <li>
            What's the difference between the search bar on the home page and the search bar on the search page? I just want to find my groceries quickly
          </li>
          <li>
            I prefer the gallery view for inspiration – I like seeing multiple things at once
          </li>
          <li>
            Think about additional ways to onboard people onto a feature like a “new for you” feature
          </li>
        </ul>
      </p>
    </div>
  )
}

export function Wireframing() {
  return (
    <div id="Wireframing" className="project-section">
      <h1><span className="section-title highlight">lofi wireframing</span></h1>
      <p>
        I then began adding more fidelity into wireframes, focusing on incorporating the feedback and how different components and new features would work together to <b>drive discovery and purchases</b>.
      </p>
      <img src={Assets.GroceriesSearchLofi} alt="lofi wireframes for the groceries and search pages" loading="lazy"></img>
      <p>
        <ul>
          <li>collapsed home and search to a groceries tab in the navigation bar</li>
          <li>incorporated popular searches as a way of quick searching</li>
          <li>denoted trending items with a fire icon</li>
          <li>added a "keep searching for" section for users to pick up where they left off</li>
          <li>created another avenue for users to see community posts for inspiration from search</li>
        </ul>
      </p>
      <img src={Assets.ProductLofi} alt="lofi wireframes for the product pages" loading="lazy"></img>
      <p>
        <ul>
          <li>moved the community recipe video from first to last to reduce distraction and follow users' mental model of a product image coming first</li>
          <li>included additional language to convey a sense of limit in quantity and popularity</li>
        </ul>
      </p>
      <img src={Assets.CommunityLofi} alt="lofi wireframes for the community pages" loading="lazy"></img>
      <p>
        <ul>
          <li>thought through how only one video would be playing at a time in gallery view to not overwhelm the user</li>
          <li>created a grocery bag button that would show users what was used in the recipe in an overlaying drawer</li>
        </ul>
      </p>
    </div>
  )
}

export function PrototypingDetails() {
  return (
    <div id="PrototypingDetails" className="project-section">
      <h1><span className="section-title highlight">refining & prototyping</span></h1>
      <p>
        Along with finalizing the individual screens, I <b>focused on details</b> with specific copy, colors, product images, and even envision small animations that would help catch user attention. Throughout this process, I closely <b>aligned with Weee!'s current design system and patterns</b> (font, sizing, button components, use of graphics) to ensure that my redesign would be practical and fit in branding with the current system. At the same time, I <b>took liberties where I saw fit</b>, such as with pops of color and animations.
      </p>
      <img src={Assets.HifiHomeProduct} alt="hifi wireframes for home and product pages" loading="lazy"/>
      <img src={Assets.HifiSearchCommunity} alt="hifi wireframes for search and community pages" loading="lazy"/>
      <p>
        <ul>
          <li>brought back the home screen since users feel more grounded with a home screen</li>
          <li>made the home search a global search with local searches within groceries, restaurants, and community</li>
          <li>instead of a fire icon for trending, I created tag pills of different colors to show trending products, bestsellers, and how many were sold</li>
          <li>made it only one tap away instead of two to see items used in a video</li>
          <li>brought the "view items used" concept to the product page as well, but shown further down the screen instead of as an overlay to allow users to see additional details about an item like reviews and other recipe videos from the community</li>
        </ul>
      </p>
      
      <Swiper
        style={{marginTop: "30px"}}
        className="swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        slidesPerView={1}
        followFinger
        onSlideChange={
          () =>  playPauseVideo()
        }
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src="/weee-gifs/final-gif-community-flow.mov" type="video/mp4" />
            </video>
          </div>
          <div className="caption-container" style={{marginTop: "20px"}}>
            <caption>be inspired by the community throughout the shopping experience</caption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src="/weee-gifs/final-gif-product-flow.mov" type="video/mp4" />
            </video>
          </div>
          <div className="caption-container" style={{marginTop: "20px"}}>
            <caption>quickly find items and related items</caption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src="/weee-gifs/final-gif-view-items-flow.mov" type="video/mp4" />
            </video>
          </div>
          <div className="caption-container" style={{marginTop: "20px"}}>
            <caption>easily view items used by other Weee! shoppers</caption>
          </div>
        </SwiperSlide>
      </Swiper>
      <div style={{marginTop: "20px"}} className="swiper-custom-pagination"/>
    </div>
  )
}

export function Color() {
  return (
    <div id="Color" className="project-section">
      <h1><span className="section-title highlight">being intentional with color</span></h1>
      <p>
        After a round of final critique with my design mentor, I realized that <b>I could be a lot more intentional about how I use color to draw the eye to elements and space elements out</b>. Also, I needed to think more critically about <b>accessibility</b> when choosing and overlaying colors. Thus, I focused on a few screens to improve the following:
        <ul>
          <li>
            should not have competing action buttons (e.g. community feed page)
          </li>
          <li>
            the usage of gray could be misleading for interactive elements as it usually dentoes something is disabled or inactive. 
          </li>
          <li>
            color blocking can be used to space sections out
          </li>
          <li>
            a set color palette could better inform color choices
          </li>
        </ul>
      </p>
      <Grid container columns={2}>
        <Grid item xs={2} md={1}>
          <img src={Assets.PrimaryPalette} alt="primary color palette" loading="lazy"/>
        </Grid>
        <Grid item xs={2} md={1}>
          <img src={Assets.SecondaryPalette} alt="secondary color palette for highlights" loading="lazy"/>
        </Grid>
      </Grid>
      <div className="caption-container">
        <caption>color palette with more pops of fun, highlight colors</caption>
      </div>
      {/* <p className="subheading" style={{marginBottom:"0px"}}>final designs</p> */}
      <img src={Assets.FinalScreensMagnify} alt="magnify design features" loading="lazy"></img>
      <div className="caption-container" style={{marginBottom: '30px'}}>
        <caption>specific features with updated colors and more organic shapes</caption>
      </div>
      <img src={Assets.FinalColor} alt="final color iteration" loading="lazy" style={{marginBottom:"16px"}}></img>
      <div className="caption-container" style={{marginBottom:"48px"}}>
        <caption>a refreshed color theme applied across the UI</caption>
      </div>
      <div style={{textAlign:"center"}}>
        <video className="small-asset" style={{width: "40%"}} autoPlay loop muted playsInline>
          <source src="/weee-gifs/final-color-vid.mov" type="video/mp4"/>
        </video>
      </div>
      <div className="caption-container" style={{marginBottom:"48px"}}>
        <caption>exploring community content while shopping</caption>
      </div>
    </div>
  )
}

export function Joy() {
  return (
    <div id="Joy" className="project-section">
      <h1><span className="section-title highlight">sparking joy!</span></h1>
      <p>
        Inspired by a talk at Config, <a href="https://config.figma.com/video-on-demand/6329868113112" className="content-link" target="_blank" rel="noopener noreferrer">Putting Joy on the Roadmap</a>, in which designers discussed how they sought inspiration for creating joy from our physical world, I began thinking:
      </p>
      <blockquote>
        "How can I bring a smile to someone's face when shopping on Weee!"?
      </blockquote>
      <p>
        Personally, <b>I could spend hours going down every single aisle and freezer chest at Trader Joe's</b>, picking up random snacks and frozen meals that were not planned for along the way. At 99 Ranch, I beeline to the sales, ogle at the live fish and crabs, and throw some instant ramen into my cart on the way out—how could you not when there are fifty different kinds?
      </p>
      <p>
        I asked a Weee! user to describe the last time they enjoyed their grocery shopping experience in person. <b>From storyboarding their experience, I realized that people get a lot of joy from moments of pleasant surprise and discovery</b>, such as picking up spur of the moment items. 
      </p>
      <img src={Assets.Storyboard} alt="storyboard of shopping at Trader Joe's" style={{marginBottom: "30px"}} loading="lazy"></img>
      <p>
        I thought about how during checkout, there are already suggestions for some add-on items. <b>But how can we make the add-on items more personalized and useful?</b> I thought AI could play a part in this. With the Weee! Community feature, people already post recipes from their shopping hauls and tag which Weee! items they used. <b>That user generated recipe data could be leveraged to create an AI feature</b> where Weee! identifies what the shopper is trying to cook based on ingredients in their cart and would suggest a few more add-on items to enhance their dish.
      </p>
      <div style={{textAlign:"center"}}>
        <video className="small-asset" style={{width: "40%"}} autoPlay loop muted playsInline>
          <source src="/weee-gifs/enhance-cart-vid-v2.mov" type="video/mp4"/>
        </video>
      </div>
      <div className="caption-container">
        <caption>Weee! suggests ingredients for kimchi fried rice based on the shopper's cart</caption>
      </div>


    </div>
  )
}

export function Reflections() {
  return (
    <div id="Reflections" className="project-section">
      <h1><span className="section-title highlight">reflections</span></h1>
      <p>
        Grocery shopping is an inherently community-oriented activity, with each store catering to different communities. With this project, I learned how to <b>cater towards different cultural norms of interacting with apps</b> and how to <b>take from our physical experiences as inspiration for our digital ones</b>. I hope to continue exploring this area of how we can have people inspire each other in their daily lives.
      </p>
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
           I learned how to <b>ruthlessly prioritize</b> top features (and correspondingly, how to deprioritize ideas that could be A/B tested later)
          </li>
          <li>
            I also continued my growth in <b>designing entire user journeys</b> not just single interfaces that required an end-to-end analysis and redesign&mdash;all the while staying <b>consistent with Weee!'s current design system and workflows</b>. I considered that if this redesign would be released that it would not completely disrupt users' mental models.
          </li>
          <li>
            I was also able to continue honing my Figma <b>prototyping skills through creating micro-interactions</b> and <b>design fundamentals</b> by focusing on information architecture, spacing, hierarchy, and more. 
          </li>
        </ol>
      </p>
    </div>
  )
}

async function playPauseVideo() {
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach((slide) => 
    slide.getElementsByTagName('video')[0].pause()
  );
  await delay(50);
  const activeSlide = document.querySelector(".swiper-slide-active");
  if (activeSlide) {
    const activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
    activeSlideVideo.currentTime = 0;
    activeSlideVideo.play();
  }
}

function delay(ms) {
  return new Promise((resolve) => {
     setTimeout(resolve, ms);
  })
}

