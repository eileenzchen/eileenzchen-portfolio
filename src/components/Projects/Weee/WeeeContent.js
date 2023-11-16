import React, { useEffect } from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import * as Assets from './assets/index.js'
import ModalImage from 'react-modal-image'
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export function Intro() {
  return (
    <div id="Intro">
      <img src={Assets.WeeePreview} alt="Weee! Redesign" title="Weee! Redesign" style={{marginTop: "30px"}}/>
    </div>
  )
}

export function Summary() {
  return (
    <div id="Summary" className="project-section">
      <h1><span className="section-title highlight">summary</span></h1>
      <p className="subheading">problem</p>
      <p>
        In this case study of Weee!, my <b>primary KPI is volume of groceries purchased</b>. As such, my problem statement is: <b>How can we encourage people to discover more new foods, and thus, purchase more groceries?</b>
      </p>
      <p className="subheading">solution</p>
      <p>
        I redesigned the Weee! Search experience and Community journey in order to <b>increase findability of groceries</b> and <b>foster interactions with community content</b> throughout the purchasing process. 
      </p>
      <p className="subheading">role</p>
      <p>
        As this was a personal project, I was the sole user researcher and product designer.
      </p>
      <p className="subheading">growth</p>
      <p>
        I learned to <b>design for an actual product with business goals, user incentives, and pre-existing workflows & design systems</b>. I was not building something from scratch here; I had to put myself in the mindset of a Weee! designer and leverage the systems in place while thinking creatively in order to effectively design for Weee!'s product needs and goals.
      </p>
      <p className="subheading" style={{marginBottom: "0px"}}>original Weee! design</p>
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.OriginalDesign}
        large={Assets.OriginalDesign}
        alt="original Weee! design"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <p className="subheading" style={{marginBottom: "0px"}}>final redesign</p>
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.FinalScreensHighlight}
        large={Assets.FinalScreensHighlight}
        alt="final design"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <p className="subheading" style={{marginBottom: "5px"}}>a moment  of delight</p>
      <div style={{textAlign:"center"}}>
        <video className="small-asset" style={{width: "40%"}} autoPlay loop muted playsInline>
          <source src={Assets.EnhanceCartVidV2} type="video/mp4"/>
        </video>
      </div>
      <div className="caption-container">
        <caption style={{marginBottom: "30px"}}>adding a moment of delight during checkout &#8212; read on for my process!</caption>
      </div>

    </div>
  )
}

export function BackgroundResearch() {
  return (
    <div id="BackgroundResearch" className="project-section">
      <h1><span className="section-title highlight">background research</span></h1>
      <p>
      When I first started thinking about the Weee! redesign, I went into it with my own experiences of using the app to grocery shop and check things off my grocery list. I thus assumed that I would be redesigning the experience of finding and buying groceries. But, as I began to dig into Weee!'s mission and niche, I realized that I was inadvertently bringing my own personal biases into how I was approaching the redesign. Weee!'s mission is much more than making it easy for people to buy groceries. It is to <b>create a community of shoppers who connect and inspire each other through their love and excitement for Asian and Hispanic food</b>. And thus, I reevaluated the way I was approaching the redesign and pivoted to focusing on how Weee! can build and leverage the community to help people discover new foods in an easy way. 
      </p>
      <p>
        As CEO and founder of Weee!, Larry Liu, puts it, “food shopping...should be much, much better, much, much more <b>inspiring and fun</b>”. On top of making it more accessible and affordable for people to get Asian and Hispanic groceries, Weee! seeks to storytell the traditions and flavors of different ethnicities. 
      </p>
      <p>
        To build this community, Weee! relies on <b>social commerce</b>, such as word of mouth and social media, to acquire and engage customers. A couple of notable features are order sharing to get rewards and a new community feed where Weee! users can post recipe or unboxing videos to share with other users. The idea behind it all is that users will be excited about certain foods, share their excitement, and prompt their friends and family to want to buy what they are buying. 
      </p>
    </div>
  )
}

export function UserResearch() {
  return (
    <div id="UserResearch" className="project-section">
      <h1><span className="section-title highlight">user research</span></h1>
      <p>
        Since Weee! positions itself as an e-grocer that provides a <b>discovery and social grocery shopping experience</b> versus a more individual search-based experience, I wanted to put that to the test and see if that mission resonated with users currently purchasing groceries on the app.
      </p>
      <p>
        Weee!'s customer base started out as primarily first generation Chinese immigrants and has since grown with second- and third-generation shoppers. Thus, I interviewed both <b>first generation shoppers 50+ years old and second and third generation shoppers in their 20s</b>. Users' frequency of use ranged from once every few months to biweekly. By <b>conducting grocery purchase task analyses and asking qualitative questions</b>, I gathered user behavior and opinions on Weee!. 
      </p>
      <p>
        Through first bucketing the type of feedback I got (pain points, strength, recommendation, user patterns) and then <b>affinity mapping</b> them to pain point categories such as navigation and community, I was able to start formulating areas of the app that could use redesigning.
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
            The community page is overwhelming and does not make me want to stay
          </li>
          <li>
            The subcategories don't make sense - “why is there a noodles and wraps category under tofu?”
          </li>
          <li>
            I always skip past the marketing carousel on the home page
          </li>
        </ul>
      </p>
      <video className="small-asset" autoPlay loop muted playsInline>
        <source src={Assets.BucketingAffinity} type="video/mp4" />
      </video>

      <p>
        From there, I used an impact-effort matrix to help me identify the areas that had the highest impact while requiring lower development effort. While there were “quick wins” identified, I wanted to challenge myself with something that was a “big bet”. That landed me on two options: the Community page or taxonomy and findability of groceries. As I pondered further, I realized that there was an opportunity here to integrate these experiences to both increase the ability for users to find relevant groceries while introducing them to new items through community posts throughout their purchasing process.
      </p>
      <img alt="impact effort matrix" src={Assets.ImpactEffort}></img>
      <p>
        With the user insights gathered on needs and behaviors, I jotted the main findings down to funnel into a main problem statement. 
      </p> 
      <img alt="problem framing" src={Assets.ProblemFraming}></img>
      <blockquote>
        How can we have Weee! users inspire each other to try new items throughout the purchasing process?
      </blockquote>


    </div>
  )
}

export function DesignPatterns() {
  return (
    <div id="DesignPatterns" className="project-section">
      <h1><span className="section-title highlight">analyzing design patterns</span></h1>
      <p>
        With an idea of what the problem I wanted to tackle was, I <b>turned to existing successful social media and ecommerce products to analyze how they approach community engagement and searching compared to Weee!</b>. I examined Pinterest, Amazon, and Instagram. An interesting experience that differed across the apps was the default search page. Pinterest had a default search page with personalized category widgets meant to help users quickly search something they are interested in. Instagram's was for infinitely exploring filled with personalized images and videos. Amazon was the only one without a separate search page, with the home page serving the same purpose. The home screen encouraged people to continue their shopping journey right away and also recommended deals. 
        </p>
        
        <p>
          A consistent design practice I saw across the three apps was having recent searches show once users tapped the search bar. The use of drawers were also common for showing more information without taking users away from a page. For social engagement pages within Instagram and Pinterest, the media was always the focus of the page and the rest of the page was kept to a minimal so that the content could pretty much speak for itself. 
        </p>
        <ModalImage
          className="drop-shadow-hover-light"
          small={Assets.DesignPatterns}
          large={Assets.DesignPatterns}
          alt="design patterns analysis"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
    </div>
  )
}

export function Sketching() {
  return (
    <div id="Sketching" className="project-section">
      <h1><span className="section-title highlight">sketching</span></h1>
      <p>
        With an idea of how other products approach social feeds and searching, I began to sketch out different points in the grocery shopping process where community posts could be brought in for inspiration. As the main point of the community posts are to inspire people to buy more groceries, <b>I knew there had to be an easier way for people to add something to cart after seeing a post</b>. 
      </p>
      <p>
        After sketching my ideas out, I mocked a user flow to make sense of how the different journeys users could take to ultimately add an item to cart. <b>With this mapping, I was able to identify points in the journey I missed.</b>
      </p>
      <img style={{marginTop:"20px", marginBottom:"20px"}} alt="sketches user flow" src={Assets.SketchUserFlow}/>
      <p>
        To ideate on the gaps, I did a couple more sketches to visualize how and at what point users could view the items used in the post and add them to cart. I created two versions of the community page, one with a gallery view and one with a single post view to test with users. 
      </p>
      <img alt="community flow sketches" src={Assets.CommunitySketches}/>
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
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.GroceriesSearchLofi}
        large={Assets.GroceriesSearchLofi}
        alt="lofi wireframes for the groceries and search pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <p>
        <ul>
          <li>collapsed home and search to a groceries tab in the navigation bar</li>
          <li>incorporated popular searches as a way of quick searching</li>
          <li>denoted trending items with a fire icon</li>
          <li>added a "keep searching for" section for users to pick up where they left off</li>
          <li>created another avenue for users to see community posts for inspiration from search</li>
        </ul>
      </p>
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.ProductLofi}
        large={Assets.ProductLofi}
        alt="lofi wireframes for the product pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <p>
        <ul>
          <li>moved the community recipe video from first to last to reduce distraction and follow users' mental model of a product image coming first</li>
          <li>included additional language to convey a sense of limit in quantity and popularity</li>
        </ul>
      </p>
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.CommunityLofi}
        large={Assets.CommunityLofi}
        alt="lofi wireframes for the community pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <p>
        <ul>
          <li>thought through how only one video would be playing at a time in gallery view to not overwhelm the user</li>
          <li>created a grocery bag button that would show users what was used in the recipe in an overlaying drawer</li>
        </ul>
      </p>
      <p>
        After reviewing the lofi wireframes with my mentor, I was ready to add more details and align with Weee!'s brand.
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
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.HifiHomeProduct}
        large={Assets.HifiHomeProduct}
        alt="hifi wireframes for home and product pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.HifiSearchCommunity}
        large={Assets.HifiSearchCommunity}
        alt="hifi wireframes for search and community pages"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
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
              <source src={Assets.FinalGifCommunity} type="video/mp4" />
            </video>
          </div>
          <div className="caption-container" style={{marginTop: "20px"}}>
            <caption>be inspired by the community throughout the shopping experience</caption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src={Assets.FinalGifProduct} type="video/mp4" />
            </video>
          </div>
          <div className="caption-container" style={{marginTop: "20px"}}>
            <caption>quickly find items and related items</caption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src={Assets.FinalGifViewItemFullPhone} type="video/mp4" />
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
      <p className="subheading" style={{marginBottom:"10px"}}>color palettes generated with plugin UI Color Palette</p>
      <img src={Assets.PrimaryPalette} alt="primary color palette"/>
      <img src={Assets.SecondaryPalette} alt="secondary color palette for highlights"/>
      <p className="subheading" style={{marginBottom:"0px"}}>final designs</p>
      <ModalImage
        className="drop-shadow-hover-light"
        small={Assets.FinalColor}
        large={Assets.FinalColor}
        alt="final color iteration"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <div style={{textAlign:"center"}}>
        <video className="small-asset" style={{width: "40%"}} autoPlay loop muted playsInline>
          <source src={Assets.FinalColorVid} type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}

export function Joy() {
  return (
    <div id="Joy" className="project-section">
      <h1><span className="section-title highlight">sparking joy!</span></h1>
      <p>
        Seems like I was done with the redesign here. And I was pretty proud of my work&#8212;it integrated the community with the shopping experience and was clean and intuitive. But I recently listened to a talk, <a href="https://config.figma.com/video-on-demand/6329868113112" className="content-link" target="_blank" rel="noopener noreferrer">Putting Joy on the Roadmap</a>, at Config by Figma designers and product managers Jenny Wen, Mihika Kapoor, and Kee Yen Yeo, that <b>really inspired and prompted me to go back to the drawing board once more</b>. Their talk was about bringing joy and delight to people in our digital products, seeking inspiration from our physical world. The talk highlighted how little interactions that bring joy to our users may not be the most seemingly critical features, but it may <b>bring the joy we experience in the physical world to the digital one</b>. The fun high fiving feature on FigJam was a prime example of an interaction that brought smiles to peoples' faces when performing a productivity task. 
      </p>
      <p>
        I immediately thought back to the <b>Weee! CEO's words of making grocery shopping "much more inspiring and fun"</b>. Looking at my design again, there wasn't quite any interaction that sparked joy. And thus I began thinking, <b>"How can I bring a smile to someone's face when shopping on Weee!"</b>? Personally, I could spend hours going down every single aisle and freezer chest at Trader Joe's, picking up random snacks and frozen meals that were not planned for along the way. I could also go to 99 Ranch and beeline to any sales I see, oggle at the live fish and crabs, and throw some instant ramen into my cart on the way out just because how could you not when there are fifty different kinds?
      </p>
      <p>
        To really pinpoint the moments that bring someone joy when grocery shopping at a brick and mortar store, I asked a user to describe the last time they enjoyed their grocery shopping experience in person. And from that, I created a storyboard. <b>From storyboarding, I realized that people get a lot of joy from moments of pleasant surprise and discovery</b>, such as picking up spur of the moment items. Ben picked up a bottle of wine, a bag of okra chips, and a bouquet of flowers, none of which were on his grocery list coming in or remotely related to the other items, but got him excited. The flowers caught his eye in the beginning of his shopping time, and the wine and okra caught his eye at the end of his shopping experience, starting and ending the trip with moments of delight.
      </p>
      <img src={Assets.Storyboard} alt="storyboard of shopping at Trader Joe's" style={{marginBottom: "30px"}}></img>
      <p>
        From here, I thought about how to incorporate a moment of delightful surprise when discovering an add-on item. Throughout the design process, I made sure to <b>balance bringing joy while not detracting from the productivity of grocery shopping</b> as the convenience and efficiency is a big draw of Weee!. During checkout seemed the most logical place to introduce people to a few possible add-on items. With the Weee! Community feature, people already post recipes from their shopping hauls and tag which Weee! items they used. <b>I realized how that user generated recipe data could be leveraged</b> to create an <b>AI feature where Weee! identifies what the shopper is trying to cook based on ingredients in their cart and would suggest a few more add-on items to enhance their dish</b>.
      </p>
      <p>
        I hope what I came up with will bring a smile to people's faces because I sure had a lot of fun creating it! 
      </p>
      <div style={{textAlign:"center"}}>
        <video className="small-asset" style={{width: "40%"}} autoPlay loop muted playsInline>
          <source src={Assets.EnhanceCartVidV2} type="video/mp4"/>
        </video>
      </div>
      <div className="caption-container">
        <caption>Weee! suggests ingredients for kimchi fried rice based on shopper's cart</caption>
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

