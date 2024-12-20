import React from 'react'
import { Grid, Container } from '@mui/material';
import * as Assets from './assets'
import './What2Yum.css'
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
//spell-checker:ignore gifs, lofi, hifi

export function Intro() {
  return (
    <div id="Intro">
      <h1 data-aos="fade-up"><span className="project-title monospace-300">Picking restaurants made easy</span></h1>
      <h2 data-aos="fade-up" data-aos-delay="100" className="project-subheading monospace-200">How can we help friends quickly share their dining preferences with each other to decide on a place to eat?</h2>
      <img data-aos="fade-up" data-aos-delay="300" src={Assets.FeatureHighlight} alt="what2yum features" loading="lazy"></img>
      <Grid data-aos="fade-up" data-aos-delay="400" container columns={4} columnSpacing={1} style={{marginTop: "30px"}}>
        <Grid item xs={2} md={1}>
          <h2>role</h2>
          <p className="project-description">
            Product Designer<br></br>
            iOS Developer
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>team</h2>
          <p className="project-description">
            Kevin Wang<br></br>
            Sebastian Yang
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>tools</h2>
          <p className="project-description">
            XCode<br></br>
            Swift<br></br>
            Figma<br></br>
            Firebase<br></br>
          </p>
        </Grid>
        <Grid item xs={2} md={1}>
          <h2>skills</h2>
          <p className="project-description">
            mobile app design<br></br>
            iOS development<br></br>
            user research and testing<br></br>
            project management<br></br>
          </p>
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
        During undergrad, one of the questions most often asked in a group chat of friends or between romantic partners was, <b>"Where should we go for dinner?"</b>. It was often either <b>indecision about where to go or difficulty finding a restaurant</b> that satisfies everyone's different tastes and cravings. "I don't know, what do you want?" and "I had Italian yesterday" and "I'm good with anything" (even though they're not) were commonly tossed around in the chat.
      </p>
      <p>
        Food to me is something that everyone should enjoy and it should not be a point of frustration for anyone. To address this problem, I and two other classmates at CMU designed and implemented <b>What2Yum, an iOS app that enables friends to make quick decisions about what to eat together</b>.
      </p>
      <div className="videoContainer pitchContent">
        <iframe className="video" src="https://www.youtube.com/embed/0OwvGgoA4-E?autoplay=1&mute=1" title="What2Yum video pitch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="caption-container" style={{marginTop: '30px'}}>
        <caption>video created by teammate Kevin Wang</caption>
      </div>
    </div>
  )
}

export function Summary() {
  return (
    <div id="Summary" className="project-section">
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
        We have all been in the ping pong situation of deciding where to eat, whether it is by ourselves, with a significant other, or with a group of friends. How can we create an efficient and effective for people to decide what to eat together?
      </p>
      <p className="subheading">solution</p>
      <p>
        I, along with two other engineers at CMU, designed and implemented What2Yum, an iOS app that enables friends, near or far, to make quick decisions of what to eat together. We won second place among 15 teams for our app design and development.
      </p>
      <p className="subheading">role</p>
      <p>
        I designed and implemented the user interaction, user flow, and visual aesthetic.
      </p>
      <p className="subheading">growth</p>
      <p>
        Through this project, I learned the true meaning of the double diamond design model and how "going wide then narrow" applies to all phases of the product lifecycle. I also learned what draws users to mobile apps and how to leverage that to make a valuable, sustainable, and easy-to-use app. 
      </p>
      <p className="subheading" style={{marginBottom: '15px'}}>promotional video</p>
      <div className="videoContainer pitchContent">
        <iframe className="video" src="https://www.youtube.com/embed/0OwvGgoA4-E" title="What2Yum video pitch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="caption-container">
        <caption>created by teammate Kevin Wang</caption>
      </div>
    </div>
  )
}

export function Problem() {

  return (
    <div id="Problem">
      <h1><span className="section-title highlight">problem</span></h1>
      <p>
        <a href="https://nypost.com/2017/11/17/american-couples-spend-5-5-days-a-year-deciding-what-to-eat/" className="content-link" target="_blank" rel="noopener noreferrer">According to the NY Post</a>, the question of "what do you want to eat" is, on average, asked 6.67 times per person per week by Americans. Through interviewing six users who go out to eat at least once a week, we gathered that it is a pain for users to figure out what to eat, especially with a group of people with many opinions. For an individual, deciding what to eat can take up to 20 minutes. For a group, <b>deciding what to eat can take several days</b>. Some experience groupthink and are too afraid to voice their opinions. Others experience choice overload with factors such as cuisine, location, and price, exacerbating the decision making process.
      </p>
      <p>
        Thus, we sought to answer:
      </p>
      <blockquote>
        "How can we reconcile differing opinions and ease decision paralysis to reduce the time it takes to choose what to eat?"
      </blockquote>
    </div>
  )
}

export function CompetitiveAnalysis() {
  return (
    <div id="CompetitiveAnalysis" className="project-section">
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
    <div id="SolutionExploration" className="project-section">
      <h1><span className="section-title highlight">solution exploration</span></h1>
      <p>
        To start off, we employed <b>parallel design</b> and independently sketched a couple paper prototypes with our initial features in mind. We wanted to <b>quickly gain user feedback on multiple interactions</b> and merge the good parts of the designs. The main interactions we wanted to test were filling out a preference questionnaire versus using a Tinder-like swiping mechanism to gather data on user food preferences.
      </p>

      <div style={{marginTop: "30px"}}>
        <img src={Assets.PaperPrototypeV1} alt="form filling paper prototype" loading="lazy"/>
        {/* <ModalImage
          small={Assets.PaperPrototypeV1}
          large={Assets.PaperPrototypeV1}
          alt="form filling paper prototype"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        /> */}
      </div>
      <div className="caption-container" style={{marginTop: '30px'}}>
        <caption>my paper prototype - form filling</caption>
      </div>

      <div style={{marginTop: "30px"}}>
        <img src={Assets.PaperPrototypeV2} alt="Tinder swiping paper prototype" loading="lazy"/>
        {/* <ModalImage
          style={{marginTop: "30px"}}
          small={Assets.PaperPrototypeV2}
          large={Assets.PaperPrototypeV2}
          alt="Tinder swiping paper prototype"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        /> */}
      </div>
      <div className="caption-container" style={{marginTop: '30px'}}>
        <caption style={{marginBottom: "30px"}}>teammate's paper prototype - Tinder-like swiping</caption>
      </div>
      
      <p>
        After user testing, we gathered that users liked the fun interaction of swiping their restaurant choices, but also wanted to be able to fill out a couple preferences like location and price. Thus, we essentially <b>took the best of both worlds and merged our two user flows</b> for our next iteration of lofi prototypes.
      </p>
      <p>
        During a meeting, we realized that the app can function in a synchronous (everyone has to be on the app at the same time to decide) versus asynchronous (people can input preferences at different times) way for a friend group. My team had differing opinions and thus we decided to <b>settle our debate by testing these two flows on users</b>. 
      </p>
      <img src={Assets.AsyncSyncFlow} alt="synchronous vs asynchronous user flow" loading="lazy"></img>
      {/* <ModalImage
        style={{marginTop: "30px", marginBottom: "30px"}}
        className="drop-shadow-hover-light"
        small={Assets.AsyncSyncFlow}
        large={Assets.AsyncSyncFlow}
        alt="synchronous vs asynchronous user flow"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      /> */}
      <p>
        We simulated interactions such as a user waiting for five others to join during the synchronous experience. We furthermore sent out a user survey to collect data on user behavior when deciding what to eat with friends to gather <b>quantitative in addition to qualitative data</b>.
      </p>
      <Grid container columns={6} style={{marginTop: "30px", marginBottom: "30px"}} justifyContent="center">
        <Grid item xs={6} sm={1} style={{padding: "0px"}}></Grid>
        <Grid item xs={3} sm={2} display="flex" style={{maxHeight: "600px"}}>
          <video className="small-asset" style={{padding: "0px"}} autoPlay loop muted playsInline>
            <source src="/what2yum-gifs/lofi-sync-swipe.mov" type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={3} sm={2} display="flex" style={{maxHeight: "600px"}}>
          <video className="small-asset" style={{padding: "0px"}} autoPlay loop muted playsInline>
            <source src="/what2yum-gifs/lofi-sync-sharing-gif-v2.mov" type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={6} sm={1}></Grid>
      </Grid>
      <div className="caption-container" style={{marginBottom: '40px'}}>
        <caption>Figma prototypes for the swiping interaction and waiting for others to join</caption>
      </div>
      {/* <Grid container columns={2} style={{marginTop: "30px", marginBottom: "30px"}}>
        <Grid item xs={2} sm={1} className="align-right">
          <video className="small-asset" autoPlay loop muted playsInline>
            <source src="/what2yum-gifs/lofi-sync-swipe.mov" type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={2} sm={1} display="flex">
          <video className="small-asset" autoPlay loop muted playsInline>
            <source src="/what2yum-gifs/lofi-sync-sharing-gif-v2.mov" type="video/mp4" />
          </video>
        </Grid>
      </Grid> */}
      <p>
        From our user testing and user survey results, users predominantly <b>preferred an asynchronous experience</b> as it allowed for flexibility in when to decide. Users decide what to eat at different times with some deciding day of and some planning 2-3 days in advance.
      </p>
      <p>
        We soon came across another challenge: <b>How should our restaurant recommendation algorithm work?</b> What if two restaurants are chosen the same amount of times? 
      </p>
      <p>
        We user tested with hifi prototypes. One design follows our original card swiping interaction and ranks the outcome based on factors such as distance and rating. The other design shows users two restaurants to choose from at a time and ultimately creates a top three ranked list of all of the users' rankings.
      </p>
      <div style={{marginTop: "30px"}}>
        <img src={Assets.HifiSwipeChoices} alt="swiping preferences vs picking out of two choices" loading="lazy"></img>
        {/* <ModalImage
          className="drop-shadow-hover-light"
          style={{marginTop: "30px"}}
          small={Assets.HifiSwipeChoices}
          large={Assets.HifiSwipeChoices}
          alt="swiping preferences vs picking out of two choices"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        /> */}
      </div>
      <p>
        Ultimately, we evaluated the tradeoffs between a more interesting user experience with the swipes versus a better final recommendation with the ranked list. Since the recommendation was only marginally more absolute than the other, we decided to go with the swipe interaction. <b>We wanted to create a more engaging user experience and have a pretty good recommendation model over a less engaging user experience and a better recommendation model</b>.
      </p>
      <p>
        Additionally through user testing, I discovered that people want more explainable suggestions. They want to know why those particular restaurant suggestions were shown in that order. I thus added ranking factors such as the number of people in the group that voted for the particular restaurant and the distance from the user's chosen location. I also made a couple iterations of the suggestions page to improve clarity and readability. I grouped each restaurant into its own card and restructured the information flow.
      </p>
      <img src={Assets.HifiRecommendations} alt="suggestion screens" loading="lazy"></img>
      {/* <ModalImage
        small={Assets.HifiRecommendations}
        large={Assets.HifiRecommendations}
        alt="suggestion screens"
        imageBackgroundColor="transparent"
        hideDownload={true}
        hideZoom={true}
      /> */}
    </div>

  )
}

export function FinalApp() {
  return (
    <div id="FinalApp" className="project-section">
      <h1><span className="section-title highlight">final app & result</span></h1>
      <p>
        For the final versions of our app, we <b>continuously re-evaluated our development priorities</b> as we built out different features based on user feedback, our timeline, and the technical difficulty versus impact of the feature. I also <b>designed the app logo, icon, and app store screenshots for launching our app in the Apple App Store</b>. I focused on aligning these assets with What2Yum's focus on efficiency and fun.
      </p>
      <p>
        My team ultimately <b>won second place</b> for What2Yum among 13 apps for the course competition.
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
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src="/what2yum-gifs/app-launch.mp4" type="video/mp4" />
            </video>
          </div>
          {/* <p style={{textAlign: "left", width: "70%"}}>launch animation with simple create and join event options, event history, and an intro to What2Yum for beginning users</p> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src="/what2yum-gifs/create.mp4" type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src="/what2yum-gifs/join.mp4" type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src="/what2yum-gifs/swiping.mp4" type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-video-container">
            <video className="carousel-video" loop muted playsInline>
              <source src="/what2yum-gifs/suggestions.mp4" type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
      <div style={{marginTop: "20px"}} className="swiper-custom-pagination"/>
      <div className="videoContainer pitchContent" style={{marginTop: "40px"}}>
        <iframe className="video" src="https://www.youtube.com/embed/8_s1joibork?autoplay=1&mute=1" title="What2Yum demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="caption-container" style={{marginTop: '20px'}}>
        <caption>live demo of friends using What2Yum</caption>
      </div>
      <img src={Assets.AppStoreScreenshots} style={{marginTop: "40px"}} alt="app store screenshots" loading="lazy"></img>
      <div className="caption-container" style={{marginTop: '20px'}}>
        <caption>What2Yum app store marketing</caption>
      </div>
      {/* <ModalImage
          small={Assets.AppStoreScreenshots}
          large={Assets.AppStoreScreenshots}
          alt="app store screenshots"
          imageBackgroundColor="transparent"
          hideDownload={true}
          hideZoom={true}
        /> */}

      <br></br><br></br>
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

export function Challenges() {
  return (
    <div id="Challenges" className="project-section">
      <h1><span className="section-title highlight">challenges & takeaways</span></h1>
      <p>
        <ol>
          <li>
            I learned the importance of <b>integrating a mobile app into users' daily routine</b>. In order to do so, I had to understand the principles of a good mobile app that fits user motivations and behaviors. For example, users like using their phone utilities on-the-go.
          </li>
          <li>
            While it was difficult to cut features that we thought were "cool", <b>reevaluating priorities</b> based on user feedback, the level of effort, and our timeline were crucial to ensuring we got our most important features done.
          </li>
          <li>
            While having discussions and debates among the team could be very productive in revealing unique ideas and collaborative solutions, <b>there are times when it is better to step away from the meeting room and back to the drawing board</b>. When our discussions started becoming stagnant due to differing opinions, we learned that it was much more valuable to <b>test out the different experiences</b> on users to make a decision based on concrete evidence.
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
