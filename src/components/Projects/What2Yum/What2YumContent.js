import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../../Polaroid/Polaroid.js'
import ModalImage from "react-modal-image";
import * as Assets from './assets'
import './What2Yum.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/swiper.min.css'
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/modules/pagination/pagination.min.css'

export function Intro() {
  const desc =  {
    role: "UX Researcher, Product Designer, iOS Engineer",
    team: "3 total engineers",
    skills: "user testing, prototyping, project management, SwiftUI development, agile development",
    tools: "Figma, XCode, Github, Firebase",
    duration: "4 months",
    cols: 2
  }

  return (
    <div id="Intro">
      <Polaroid 
        linkUrl="https://apps.apple.com/us/app/what2yum/id1540868286" 
        imageUrl={Assets.What2yumPreview} 
        alt="What2Yum"
        polaroidTitle="What2Yum"
        polaroidDescription="Empowering friends and couples to decide where to eat within minutes——no bickering, no indecisiveness"
        aspectRatio="aspectRatioWide"/>
      {/* <ProjectSummary desc={desc} style={{fontSize: 12}}/> */}
    </div>
  )
}

export function Summary() {
  return (
    <div id="Summary">
      <h1><span className="section-title highlight">summary</span></h1>
      {/* <Grid container columns={2}>
        <Grid item xs={2} sm={1}>
         <img src="https://www.memesmonkey.com/images/memesmonkey/42/426c4a57abcf95654077cae21e8f49b1.jpeg" alt="titanic meme"></img>
        </Grid>
        <Grid item xs={2} sm={1}>
          <img src="https://img.ifunny.co/images/2c8cb962978989a0c999399ff2f0c48e395063a3227de194b7819cec290202fe_1.jpg" alt="spongebob meme"></img>
        </Grid>
      </Grid> */}
      
      <p className="subheading">problem</p>
      <p>
        We have all been in the ping pong situation of deciding where to eat, whether it is by ourselves, with a significant other, or with a group of friends. 
      </p>
      <p className="subheading">solution</p>
      <p>
        I, along with two other engineers at CMU, designed and implemented What2Yum, an iOS app that enables friends, near or far, to make quick decisions of what to eat together. 
      </p>
      <p className="subheading">role</p>
      <p>
        I designed and implemented the user interaction, user flow, and visual 
        aesthetic.
      </p>
      <p className="subheading">growth</p>
      <p>
        Through this project, I learned the true meaning of the double diamond design model and how "going wide then narrow" applies to all phases of the product lifecycle. I also learned what draws users to mobile apps and how to leverage that to make a valuable, sustainable, and easy-to-use app. 
      </p>
    </div>
  )
}

export function Problem() {

  return (
    <div id="Problem">
      <h1><span className="section-title highlight">problem space</span></h1>
      <p>
        <a href="https://nypost.com/2017/11/17/american-couples-spend-5-5-days-a-year-deciding-what-to-eat/" className="content-link" target="_blank" rel="noopener noreferrer">According to the NY Post</a>, the question of "what do you want to eat" is, on average, asked 6.67 times per person per week by Americans. Through interviewing six users who go out to eat at least once a week, we gathered that it is a pain for users to figure out what to eat, especially with a group of people with many opinions. For an individual, deciding what to eat can take up to 20 minutes. For a group, <b>deciding what to eat can take several days</b>. Some experience groupthink and are too afraid to voice their opinions. Others experience choice overload with factors such as cuisine, location, and price exacerbating the decision making process.
      </p>
      <blockquote>
        "How can we ease decision paralysis and reduce the time it takes to choose what to eat?"
      </blockquote>
    </div>
  )
}

export function CompetitiveAnalysis() {
  return (
    <div id="CompetitiveAnalysis">
      <h1><span className="section-title highlight">competitive analysis</span></h1>
      <p>
        Currently, people search across <b>Google, Yelp, and food delivery apps</b> to decide what to eat based on reviews and other filters like distance and price. However, these apps <b>do not allow for collaborative decision making</b>. There are also apps like Tiny Decisions that help people make decisions. However, these apps are often based on a <b>random</b> generator.
      </p>
      <p>
        Our competitive advantage is designing a <b>mobile app that makes deciding what to eat among a group collaborative and efficient</b>.
      </p>
    </div>
  )
}

export function SolutionExploration() {
  return (
    <div id="SolutionExploration">
      <h1><span className="section-title highlight">solution exploration</span></h1>
      <p>
        To start off, we employed parallel design and independently sketched a couple paper prototypes with our initial features in mind. We wanted to quickly gain user feedback on multiple interactions and merge the good parts of the designs. The main interactions we wanted to test were filling out a preference questionnaire versus using a Tinder-like swiping mechanism to gather data on user food preferences.
      </p>

      <div style={{marginTop: "30px"}}>
        <ModalImage
          small={Assets.PaperPrototypeV1}
          large={Assets.PaperPrototypeV1}
          alt="form filling paper prototype"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <caption>my paper prototype - form filling</caption>

      <div style={{marginTop: "30px"}}>
        <ModalImage
          style={{marginTop: "30px"}}
          small={Assets.PaperPrototypeV2}
          large={Assets.PaperPrototypeV2}
          alt="Tinder swiping paper prototype"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <caption style={{marginBottom: "30px"}}>teammate's paper prototype - Tinder-like swiping</caption>
      
      <p>
        After user testing, we gathered that users liked the fun interaction of swiping their preferences, but also wanted to be able to fill out a couple preferences like location and price. Thus, we essentially took the best of both worlds and merged our two user flows for our next iteration of lofi prototypes.
      </p>
      <p>
        During a meeting, we realized that the app can function in a synchronous (everyone has to be on the app at the same time to decide) versus asynchronous (people can input preferences at different times) way for a friend group. My team had differing opinions and thus we decided to settle our debate by testing these two flows on users. 
      </p>
      <ModalImage
        style={{marginTop: "30px", marginBottom: "30px"}}
        className="drop-shadow-hover-light"
        small={Assets.AsyncSyncFlow}
        large={Assets.AsyncSyncFlow}
        alt="synchronous vs asynchronous user flow"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      />
      <p>
        We simulated interactions such as a user waiting for five others to join during the synchronous experience. We furthermore sent out a user servey to collect data on user behavior when deciding what to eat with friends as well as their preferred experience.
      </p>
      <Grid container columns={2} style={{marginTop: "30px", marginBottom: "30px"}}>
        <Grid item xs={2} sm={1} className="align-right">
          <video className="small-asset" autoPlay loop muted>
            <source src={Assets.LofiSwipeGif} type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={2} sm={1} display="flex">
          <video className="small-asset" autoPlay loop muted>
            <source src={Assets.LofiSyncSharingGif} type="video/mp4" />
          </video>
        </Grid>
      </Grid>
      <p>
        From our user testing and user survey results, users predominantly preferred an asynchronous experience as it allowed for flexibility in when to decide. Users decide what to eat at different times, some deciding day of and some planning 2-3 days in advance.
      </p>
      <p>
        After figuring out how to collect preference data from users, we came across another challenge: How should our restaurant recommendation algorithm work? What if two restaurants are chosen the same amount of times? 
      </p>
      <p>
        We user tested with hifi prototypes. One design follows our original card swiping interaction and ranks the outcome based on factors such as distance and rating. The other design shows users two restaurants to choose from at a time and ultimately creates a top three ranked list of all of the users' rankings.
      </p>
      <div style={{marginTop: "30px"}}>
        <ModalImage
          className="drop-shadow-hover-light"
          style={{marginTop: "30px"}}
          small={Assets.HifiSwipeChoices}
          large={Assets.HifiSwipeChoices}
          alt="swiping preferences vs picking out of two choices"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        />
      </div>
      <p>
        Ultimately, we evaluated the tradeoffs between a more interesting user experience with the swipes versus a better final recommendation with the ranked list. Since the recommendation was only marginally more absolute than the other, we decided to go with the swipe interaction. We wanted to create a more engaging user experience and have a pretty good recommendation model over a worse user experience and a better recommendation model.
      </p>
      <p>
        Additionally through user testing, I discovered that people want more explainable suggestions. They want to know why those particular restaurant suggestions were shown in that order. I thus added ranking factors such as the number of people in the group that voted for the particular restaurant and the distance from the user's chosen location. I also made a couple iterations of the suggestions page to improve clarity and readability. I grouped each restaurant into its own card and restructured the flow of information.
      </p>
      <Grid container columns={2} style={{marginTop: "30px", marginBottom: "30px", alignItems: "flex-start"}}>
        <Grid item xs={2} sm={1} className="align-right">
          <ModalImage
            className="small-asset"
            small={Assets.HifiSuggestionV1}
            large={Assets.HifiSuggestionV1}
            alt="suggestion screen v1"
            imageBackgroundColor="transparent"
            hideDownload={true}
            hideZoom={true}
          />
        </Grid>
        <Grid item xs={2} sm={1} >
          <ModalImage
            className="small-asset"
            small={Assets.HifiSuggestionV2}
            large={Assets.HifiSuggestionV2}
            alt="suggestion screen v2"
            imageBackgroundColor="transparent"
            hideDownload={true}
            hideZoom={true}
          />
        </Grid>
      </Grid>
    </div>

  )
}

export function FinalDesign() {
  return (
    <div id="FinalDesign">
      <h1><span className="section-title highlight">final design</span></h1>
      <p>
        For the final versions of our app, we continuously re-evaluated our development priorities as we built out different features based on user feedback, our timeline, and the techinical difficulty versus impact of the feature. I also designed the app logo, icon, and app store screenshots for launching our app in the Apple app store.
      </p>

      <Swiper
        style={{marginTop: "30px"}}
        className="swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={20}
        slidesPerView={2}
        loop
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        followFinger
        onSlideChange={
          () =>  playPauseVideo()
        }
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted>
              <source src={Assets.AppLaunch} type="video/mp4" />
            </video>
          </div>
          {/* <p style={{textAlign: "left", width: "70%"}}>launch animation with simple create and join event options, event history, and an intro to What2Yum for beginning users</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted>
              <source src={Assets.Create} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted>
              <source src={Assets.Join} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted>
              <source src={Assets.Swipe} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted>
              <source src={Assets.Suggestions} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
      <div style={{marginTop: "20px"}} className="swiper-custom-pagination"/>
      
      <p className="subheading">app store</p>
      <p>Live in the <a href="https://apps.apple.com/us/app/what2yum/id1540868286" className="content-link" target="_blank" rel="noopener noreferrer">app store</a></p>
      <img alt="app store screenshots" src={Assets.AppStore}></img>

      <p className="subheading" style={{marginBottom: "20px"}}>demo video</p>
      <div className="videoContainer pitchContent">
        <iframe className="video" src="https://www.youtube.com/embed/8_s1joibork" title="What2Yum demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <p className="subheading">promotional video</p>
      <p>created by teammate Kevin Wang</p>
      <div className="videoContainer pitchContent">
        <iframe className="video" src="https://www.youtube.com/embed/0OwvGgoA4-E" title="What2Yum video pitch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div><br></br><br></br>
      {/* <p className="subheading">keynote presentation deck</p>
      <div className="pitchContent">
        <a href={Assets.What2yumKeynote} target="_blank" rel="noopener noreferrer nofollow">
          <p>download the What2Yum Keynote presentation deck to see the incorporated animations and app demo GIFs</p>
          <img src={Assets.What2yumKeynoteGif} alt="what2yum keynote preview gif"></img>
        </a>
      </div> */}
      {/* <p className="subheading">static presentation pdf deck</p>
      <div>
        <div className="pitchContent">        
           <iframe src="https://drive.google.com/file/d/1SiND3WjjUay9ucWywVILI7A9NkZsNggB/preview" width="100%" height="500" allow="autoplay"></iframe>
        </div>

      </div> */}
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
    activeSlideVideo.play();
  }
}

function delay(ms) {
  return new Promise((resolve) => {
     setTimeout(resolve, ms);
  })
}
