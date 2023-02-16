import React from 'react'
import { Grid, Container } from '@mui/material';
import Polaroid from '../../Polaroid/Polaroid.js'
import ModalImage from "react-modal-image";
import * as Assets from './assets'
// import what2yumPreview from './assets/what2yum_preview.png';
// import what2yumKeynote from './assets/what2yum-keynote-pitch.key';
// import what2yumKeynoteGif from './assets/what2yum-keynote-gif.gif';
// import fdvVennDiagram from './assets/fdv_venn_diagram.png';
// import paperPrototypev1 from './assets/paper-prototype-v1.png';
// import paperPrototypev2 from './assets/paper-prototype-v2.png';

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
      <p>
        As part of a Carnegie Mellon iOS design and development course, our final project was to work in two-week sprint cycles to design and implement an innovative mobile app that solves a problem people face today. Our app is finally presented to and judged by industry professionals.
      </p>
      <Grid container columns={2}>
        <Grid item xs={2} sm={1}>
         <img src="https://www.memesmonkey.com/images/memesmonkey/42/426c4a57abcf95654077cae21e8f49b1.jpeg" alt="titanic meme"></img>
        </Grid>
        <Grid item xs={2} sm={1}>
          <img src="https://img.ifunny.co/images/2c8cb962978989a0c999399ff2f0c48e395063a3227de194b7819cec290202fe_1.jpg" alt="spongebob meme"></img>
        </Grid>
      </Grid>
      
      <h2>problem</h2>
      <p>
        We have all been in the ping pong situation of deciding where to eat, whether it is by ourselves, with a significant other, or with a group of friends. 
      </p>
      <h2>solution</h2>
      <p>
        I, along with two other engineers at CMU, designed and implemented What2Yum, an iOS app that enables friends, near or far, to make quick decisions of what to eat together. 
      </p>
      <h2>role</h2>
      <p>
        I designed and implemented the user interaction, user flow, and visual 
        aesthetic.
      </p>
      <h2>growth</h2>
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
        The big question we had to answer was, "What is an innovative mobile app that solves a problem people face today?"
      </p>
      <p>
        From such a vague question, we first had to understand what it meant to have a "mobile mindset". What are the strengths of a mobile app platform and what makes it valuable as compared to a desktop app or website?
      </p>
      <p>
        We considered the following mobile aspects that we could leverage:
        <ul>
          <li>Communication</li>
          <li>Spontaneous</li>
          <li>Geo-sensitive</li>
          <li>Short periods of use</li> 
          <li>Focused activity</li> 
          <li>Form-factor</li>
        </ul>
      </p>
      <p>
        We then started thinking about the plethora of pain points that people face every day to really explore a breadth of ideas before diving into a few ideas to explore deeper. We narrowed down based on technical feasibility, user desirability, business viability, how well it would employ the unique strengths of a native mobile app, and a competitive analysis of the current app landscape for the pain point identified. Below is a list of ideas that we narrowed down from.
      </p>
      <p>
        <ul>
          <li>Expense splitting</li>
          <li>Notes classification</li>
          <li>Social network tracking</li>
          <li>Trash or recycling classification</li>
          <li>Gamified to-do list</li>
          <li><b>Decide where to eat with friends (What2Yum)</b></li>
          <li>Housemate reminders about bills or quiet hours</li>
          <li>Positive social media</li>
          <li>Bad habit identifier</li>
        </ul>
      </p>

        <div style={{width: "50%", textAlign: "center", display: "block", margin: "30px auto 30px auto"}}>
          <ModalImage
            className="drop-shadow drop-shadow-hover"
            small={Assets.VennDiagram}
            large={Assets.VennDiagram}
            alt="feasibility desirability viability venn diagram"
            imageBackgroundColor="transparent"
          />
        </div>

      <p>
        We backed our own analysis of an existing problem with secondary research. <a href="https://nypost.com/2017/11/17/american-couples-spend-5-5-days-a-year-deciding-what-to-eat/" className="content-link" target="_blank" rel="noopener noreferrer">According to the NY Post</a>, the question of "what do you want to eat" is, on average, asked 6.67 times per person per week by Americans. 
      </p>
      <p>
        Through this first breadth then depth approach, we landed on our problem statement.
      </p>
      <blockquote>
        "How can we ease decision paralysis and reduce the time it takes to choose what to eat?"
      </blockquote>

    </div>
  )
}

export function IdeationValueProp() {
  return (
    <div id="IdeationValueProp">
      <h1><span className="section-title highlight">value proposition</span></h1>
      <p>
        To validate the value we could deliver with our app, we needed to first collect data from our target audience that would better inform the specific pain point.
      </p>
      <p>
        We interviewed six users aged 18-22 who got take out or went to a restaurant at least once a week.
      </p>
      <blockquote>
        "It would take 6-7 texts just to figure out what cuisine to have, then we have to figure out the restaurant" <br></br><br></br>
        "I would probably take 10 minutes to pick where to eat. With friends–20 minutes" <br></br><br></br>
        "If everyone else wants to go somewhere, I just go with the flow since I don't want to seem picky."
      </blockquote>
      <p>
        Among others, here were a few key insights we derived from our user interviews:
        <ol>
          <li>People sometimes spend up to <b>10-20 minutes deciding what to eat</b> when ordering out. That's around <b>1-2 hours per week</b>.</li>
          <li>Some people may be <b>afraid to voice their preferences</b> in front of their friends because they don't want to be the outlier that disagrees with the rest of the friend group. <b>Groupthink</b> may also occur.</li>
          <li>Restaurant <b>choice overload</b> and factors such as cuisine, location, and price exacerbates the trouble with the decision making process, especially with larger groups where people might not know each other.</li>
        </ol>
      </p>
      <p>
        To connect the users' pain points with how a mobile app would specifically help solve the problem, we preliminarily brainstormed how our app would leverage the mobile platform:
        <ol>
          <li>
            <b>Spontaneous</b> - friends groups or individuals can decide on a whim that they want to get take out or go eat somewhere; the app will allow them to quickly make a decision on their phones without any planning ahead of time
          </li>
          <li>
            <b>Geo-sensitive</b> - the app will use the phone's location/GPS to find out nearby restaurants
          </li>
          <li>
            <b>Short periods of use</b> - the app will only take a few minutes at most for users to fill out their preferences
          </li>
          <li>
            <b>Focused activity</b> - on the app, users are just filling out their preferences and getting a group suggestion; the app's purpose is specific
          </li>
          <li>
             <b>Personalization</b> - the app will save users' food preferences and be ready anywhere they are
          </li>
          <li>
            <b>Gesture detection</b> - the app will detect a user's shake of the phone as a wanting to see a different suggestion
          </li>
          <li>
            <b>Date/time</b> - the app will know the local datetime from the phone to know which restaurants are opened or closed
          </li>
        </ol>
      </p>
      <p>
        Tying it together, we scoped our app’s purpose and identified our competitive advantage.
        <ul>
          <li>
            <b>Audience:</b> Couples, potential partners, and friend groups who eat at restaurants or get takeout and decide what to eat together
          </li>
          <li>
           <b>Desirability:</b> People want to take less time deciding what to eat with others
          </li>
          <li>
            <b>Technical Feasibility:</b> Integrate with Yelp API for restaurant information, utilize Firebase for real-time updates
          </li>
          <li>
            <b>Viability:</b> Possible integrations with food delivery apps, sponsor restaurants
          </li>
          <li>
           <b>Competitive landscape:</b> people can individually search for places or cuisines and filter based on preferences (Yelp), there are random wheel decision makers (Tiny Decisions)
          </li>
          <li>
            <b>Our niche:</b> collaborative and painless decision making about where to eat  
          </li>
        </ul>
      </p>
      <p>
        With this, we arrived at our value proposition.
      </p>
      <blockquote>
        Decide what to eat with your friends within minutes. No texting back and forth, no arguments.
      </blockquote>
    </div>
  )
}

export function IdeationFeatures() {
  return (
    <div id="IdeationFeatures">
      <h1><span className="section-title highlight">features & interactions</span></h1>

      <p>
        With the app scope in mind, we thought about how we wanted to make this interaction of making a group decision as easy as possible. I began to pull from our daily experiences as students and thought about an app I currently used that allows us to make a group decision quickly: When2Meet. When2Meet allows people to easily decide a day and time to meet up with a shared link where everyone can see time preferences updated in real-time. We wanted to utilize that interaction pattern to make deciding what to eat equally as simple and we used that as a springboard for other features. Taking the name inspiration, we made an initial feature list for What2Eat.
      </p>
      <p>
        Initial feature list:
        <ol>
          <li> Host can start a What2Eat group and share that link with friends</li>
          <li>Host can set settings in What2Eat group such as whether the generated suggestion should be accepted by all or by majority</li>
          <li>Users can fill out a form with parameters such as location, rating, cuisine preference, delivery time, and casual/fine dining and the weights of each (e.g. scale of 1-5 of importance for each parameter)</li>
          <li>Host has a generate suggestion button that pops up after seeing that everyone submitted their preferences </li>
          <li>Host can see names pop up when people submit their preferences</li>
          <li>Host can also generate a suggestion by shaking their phone</li>
          <li>The suggestion is shown in real-time to other users and users can decide to accept or deny the suggestion</li>
          Depending on the group settings, the app will generate another suggestion 
          <li>List view of the different What2Eat groups that someone is in </li>
        </ol>
      </p>
      <p>
        Once we agreed on some of the rough basic features of the app, it was time to start visualizing by penning some ideas on paper.
      </p>
    </div>
  )
}

export function WireframesTesting() {
  return (
    <div id="WireframesTesting">
      <h1><span className="section-title highlight">wireframes & testing</span></h1>
      <p>
        To start off, we employed parallel design and independently sketched a couple paper prototypes with our initial features in mind in order to quickly gain user feedback on multiple interactions and merge the good parts of the designs. The main interactions we wanted to test were a more traditional form filling versus a Tinder-like swiping mechanism to gather data on user preferences.
      </p>

      <div style={{marginTop: "30px"}}>
        <ModalImage
          className="drop-shadow drop-shadow-hover"
          small={Assets.PaperPrototypeV1}
          large={Assets.PaperPrototypeV1}
          alt="form filling paper prototype"
          imageBackgroundColor="transparent"
        />
      </div>
      <caption>my paper prototype - form filling</caption>

      <div style={{marginTop: "30px"}}>
        <ModalImage
          style={{marginTop: "30px"}}
          className="drop-shadow drop-shadow-hover"
          small={Assets.PaperPrototypeV2}
          large={Assets.PaperPrototypeV2}
          alt="Tinder swiping paper prototype"
          imageBackgroundColor="transparent"
        />
      </div>
      <caption style={{marginBottom: "30px"}}>teammate's paper prototype - Tinder-like swiping</caption>
      
      <p>
        After user testing, we gathered that users liked the fun interaction of swiping their preferences, but also wanted to be able to fill out a couple preferences like location and price. Thus, we essentially took the best of both worlds and merged our two user flows for our next iteration.
      </p>
      <p>
        Additional insight from user testing our paper prototypes:
        <ul>
          <li>Users thought that filling out preferences meant that they were filling out the preferences for everyone in their group</li>
          <li>Having two equally emphasized options of sharing the group and filling out preferences is confusing to users. They want to be guided on what the next step should be.</li>
          <li>Users do not always want the same suggestions, they want to explore new restaurants sometimes and want to know what to expect</li>
          <li>Users want button labels and want all buttons to be actionable and the result apparent</li>
          <li>There seems to be a preference for wanting unlimited suggestions or users are confused about what "1 suggestion remaining" means</li>
          <li>Users want to be able to set their preferences when they change from day to day</li>
        </ul>
      </p>
      <p>
        We then applied our findings to create lofi prototypes with Figma. 
      </p>
      <p>
        We realized that the app can function in a synchronous versus asynchronous way for a friend group. After hours of discussion and debate around which would function better for our app, we realized the best way to come to a conclusion was to test! We thus created both a synchronous and an asynchronous lofi app flow to test both experiences on users.
        <ol>
          <li>
            <b>Synchronous:</b> All your friends need to be on the app at the same time before you're able to fill out preferences. After inputting preferences, you can then get a result instantly.
          </li>
          <li>
            <b>Asynchronous:</b> You and your friends can input preferences at different times. You can come back later to see the final result. The result may change as more people fill it out.
          </li>
        </ol>
      </p>
      <p>
      [insert lofi prototypes of synchronous vs asynchronous experience] 
      <br></br><br></br>

      [insert text about what we changed based on feedback from paper prototypes and the diff between synchronous and asynch app]
      </p>
      <p>
        Since the asynchronous versus synchronous experiences were pretty difficult to user test with our paper prototypes, we decided to send out a user survey to collect data on user behavior when deciding what to eat with friends as well as their preferred experience. We collected 17 responses.
      </p>
      <p>
       [insert graph images]
      </p>
      <p>
        From the result, it seemed like most people try to find a place to eat on the day of the event and some also decide 2-3 days in advance. So we are considered limiting the number of days people can schedule an event ahead of time to 3 days. 
      </p>
      <p>
        Around a quarter of our users identified that they would prefer an asynchronous experience. When we reached out to one of the users for additional questioning about his reasoning, he commented that it’s possible his friends haven't picked up their phones and he may just be stuck on the waiting screen for hours. 
      </p>
      <p>
        Some additional insights among others we gained through user testing with our target user group were:
        <ul>
          <li>The phrase "swipe on your preferences" is confusing without any other context or instructions. It would be confusing to people who have not used Tinder before.</li>
          <li>People want to know why specific recommendations were shown</li>
          <li>The host wants to see how many friends they are waiting on to respond</li>
          <li>Users want to be able to add friends and select users to share the group with/invite without leaving the app</li>
          <li>Users questioned what would happen as a tiebreaker if multiple restaurants were voted yes the same amount of times. This was great insight as it was something that we as designers and developers have not thought about as a use case.</li>
          <li>Users were confused whether they needed to wait for everyone to join before proceeding. The intended asynchronous experience was not clear from the UI.</li>
          <li>Some users mentioned that they would want a  "I don't care" or "no preference" option as sometimes they are truly good with eating wherever.</li>
          <li>Users were confused about what "Group size" meant and wondered what would happen if an additional person wanted to join. This was also a great point that we hadn't thought further about until users pointed it out.</li>
        </ul>
      </p>
      <p>
        We realized many of the interactions were clear in our mind as we knew what we wanted the app’s purpose to be, but may be very confusing to users who are seeing the app for the first time. We wanted to ensure in our next iteration that the user flow and interactions would be very intuitive to a first time user.
      </p>
      <p>
        Before making our hifi prototypes, we wanted to create a first pass at a feature list through an analysis of balancing user needs and technology feasibility. We identified which features were "must have" versus "want to have" versus "like to have".
      </p>
      <p>
        [insert screenshot of features table]
      </p>
    </div>
  )
}

export function FeaturePrioritization() {
  return (
    <div id="FeaturePrioritization">
      <h1><span className="section-title highlight">feature prioritization</span></h1>
      <p>
        With our prioritized features, we created a set of hifi prototypes. As a design guideline, we referenced the <a href="https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/" className="content-link" target="_blank" rel="noopener noreferrer">Apple iOS Human Interface Guidelines</a>, UI/UX guidelines Apple encourages for iOS apps to make it look and feel more integrated into the iOS ecosystem.
      </p> 
      <p>
        We pondered over how the app should decide what the top restaurant recommendation should be when there is a tie breaker. We thus thought of two different decision making interactions to test on users. One design follows our original card swiping interaction and ranks the outcome based on factors such as distance and rating. The other design shows users two restaurants to choose from at a time and ultimately creates a top three ranked list of all of the users' rankings.
      </p> 

      <p>[insert hifi prototype gifs for decision interactions]</p>

      <p>[***insert text about what we changed from lofi***]</p>

      <p>We added factors such as distance and user ratings to help tie break in our hifi. We also…</p>

      <p>We tested our designs on users who have never seen our app to see which interaction meets the users' goals the best and is most intuitive.</p>
      <p>
        We got mixed feedback about which interaction was better. One user said they preferred the two-choice selection idea because it was easier to pick one over the other than choosing whether a single restaurant is preferable or not. But another user said they preferred the swiping motion better because it would be easier to understand how the final list was compiled. Two of the other users said they were indifferent to the interaction; instead, they preferred whichever version that would yield a better result or recommendation.
      </p>
      <p>
        Ultimately, we evaluated the tradeoffs between a more interesting user experience and a better final recommendation. Since the recommendation was only marginally better than the other, we decided to go with the swipe interaction. We wanted to create a more engaging user experience and have a pretty good recommendation model over a worse user experience and a better recommendation model.
      </p>
      <p>
        Another major point of confusion we found with previous user tests was that users were unsure when or how they should be sharing the event to their friends. We thus again tested two different variants of the app, one with only being able to share the event at the end after the host swipes on their preferences and the other with the host being able to share the event with others at the beginning before swiping on their preferences and after they see suggestions.
      </p>
      <p>
        [insert hifi prototype gifs for sharing interactions]
      </p>
      <p>
        <ul>
          <li>
            Users tend to prefer inviting people to the event at the beginning. 
            <ul>
              <li>
                It feels more natural especially after the number of participants of the event has been set during event creation.
              </li>
              <li>
                Select user testing participants are indifferent about where they share the event.
              </li>
            </ul>
          </li>
          <li>
           Users should be allowed to add more invitees
            <ul>
              <li>
                There is a need to select multiple invitees at the same time
              </li>
              <li>
                The current iOS share sheet does not allow the sending multiple invites within the same share sheet (except for the contacts in Siri suggestions).
              </li>
            </ul>
          </li>
        </ul>
      </p>
      <p>
        Although we have been testing the experience mainly for the host of the event, we recognized another important persona's user flow to test was that of the invitees to the What2Yum events. To promote consistency and reusability, we largely retained the decision-making and results views. We took the event creation confirmation page from our previous prototype and modified it to show the event details after a user has joined. The user will also be able to see other people who have joined or completed the decision-making process. Thinking about how to make the experience more fun overall, I decided to introduce the idea of graphic avatars as the group members. 
      </p>
      <p>
      [insert invitee user flow gifs]
      </p>
      <p>
        During our user testings, we tasked the participants to join a shared restaurant decision-making event and contribute to the group’s decision. 
      </p>
      <p>
      We received the following user testing feedback
        <ul>
          <li>The cartoons are very cute, but do not fit the overall design and seem out of place</li>
          <li>Users wanted ways to see other events and groups</li>
          <li>"Sad faces" indicating that the user hasn’t started picking might translate to the user feeling that they are being judged</li>
          <li>It is quite obvious that the user has not picked yet when the welcome view shows up</li>
          <li>The colored event details texts give unintended cues that invite users to click on them (i.e. to modify the event details).</li>
        </ul>
      </p>

      <p>
        In order to decide on which interactions to go with, we based it on user feedback preferences as well as technical feasibility given our time constraints. We needed to implement a MVP in a couple weeks. THIS NEEDS UPDATING! ###### For example, we deprioritized xyz or took out xyz feature because …
      </p>

      <p>
      Thus, we revisited our features list and finalized what features we would implement for v1 and v2 of the app.
      </p>


    </div>
  )
}

export function WorkingWithinConstraints() {
  return (
    <div id="WorkingWithinConstraints">
      <h1><span className="section-title highlight">working within constraints</span></h1>
      <p>
        For the final versions of our app, continuously re-evaluated our development priorities as we built out different features based on user feedback, our timeline, and the techinical difficulty versus impact of the feature. 
      </p>
      <p>
        After implementing our MVP, our users provided feedback that the restaurant card decks don't have progress stats and thus users don't know how much they have to swipe before the suggestions show. This could lead to some users just leaving the app or giving up before they finish picking the restaurants, which would lead to suggestions that are not inclusive of the group. As this was a pretty big drawback and the solution, adding a progress bar, was not super high developer effort, we prioritized a progress bar feature for our next version.
      </p>
      <p>
        Another point of user feedback was that they wanted to see more images than just one on the cards to be able to better make a decision. However, after some research, we realized that we were limited to one photo per restaurant by the Yelp API. Due to the infeasibility with the technical architecture that we had and the one week constraint before our final app deadline, providing multiple images through other means was deprioritized.
      </p>
      <p>
        [insert screenshot of features list for v1 vs v2]
      </p>
    </div>
  )
}

export function FinalPitch() {
  return (
    <div id="FinalPitch">
      <h1><span className="section-title highlight">final pitch</span></h1>
      <p>
        We <b>pitched our final app to Capital One engineers and VPs</b> who evaluated the apps based on <b>usability, visual appeal, technical execution</b>, how well it met the needs of an <b>identifiable market</b>, and how well it leveraged the <b>strengths of the mobile platform</b>. 
      </p>
      <p>
        Beyond just the features of What2Yum, we wanted to focus on the <b>reasoning</b> behind our idea, the <b>value</b> of the app for our end users, and the <b>spark</b> behind the product.
      </p>
      <p>
        We <b>won second place overall</b> among 14 teams!
      </p><br></br>
      <h2>promotional video</h2>
      <div className="videoContainer pitchContent">
        <iframe className="video" src="https://www.youtube.com/embed/0OwvGgoA4-E" title="What2Yum video pitch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div><br></br><br></br>
      <h2>keynote presentation deck</h2>
      <div className="pitchContent">
        <a href={Assets.What2yumKeynote} target="_blank" rel="noopener noreferrer nofollow">
          <p>download the What2Yum Keynote presentation deck to see the incorporated animations and app demo GIFs</p>
          <img src={Assets.What2yumKeynoteGif} alt="what2yum keynote preview gif"></img>
        </a>
      </div><br></br><br></br>
      <h2>static presentation pdf deck</h2>
      <div>
        {/* <a href={what2yumPdf} target="_blank" rel="noopener noreferrer nofollow">view the What2Yum pdf slide deck</a> */}
        <div className="pitchContent">        
           <iframe src="https://drive.google.com/file/d/1SiND3WjjUay9ucWywVILI7A9NkZsNggB/preview" width="100%" height="500" allow="autoplay"></iframe>
        </div>

      </div>
    </div>
  )
}

export function Learnings() {
  return (
    <div id="Learnings">
      <h1><span className="section-title highlight">learnings & reflection</span></h1>
      <p>
        From ideating to designing and developing What2Yum, I learned several essential things.
      </p>
      <h2>
        1. Mobile apps are most effective when they integrate into users' lifestyles and habits
      </h2>
      <p>
        As we were coming up with an idea for a mobile app, it was vital for us to understand what scenarios are most befitting of a mobile app solution. For example, users that are on-the-go or in need of a quick search are much more likely to reach for their phones in their pocket versus a laptop in their room.
      </p>
      <p>
        A mobile app like What2Yum enables users to quickly figure out what to eat with friends through a few swipes versus having to have a long text chain in a group chat. On the other hand, a tool like Google Sheets, which typically presents mass quantities of information, is better used sitting down at a desktop device. 
      </p>
      <p>
        It is crucial to understand user motivation and behavior in order to seamlessly integrate an app into a user’s daily routine—in this case, turning mealtime into What2Yum time. 
      </p>
      <h2>
        2. Engineering, design, and product priorities should be constantly weighed and reevaluated
      </h2>
      <p>
        By evaluating our priorities based on user feedback, measurement of impact versus effort, and our timeline, we were able to make the most usable and valuable app. An integration with food ordering apps would have been a feature with a lot of impact as it makes it super easy for users to then order at the suggested restaurant. However, given the high level of effort, we decided it was not essential enough to the app itself for the time being.
      </p>
      <h2>
        3. When in doubt, test it out
      </h2>
      <p>
        While having discussions and debates among the team can be very productive in bringing out unique ideas and collaborative solutions, when one problem is taking hours or even days to figure out, it is time to step away from the meeting room and into the drawing board. When debating user experience, it is much more fruitful to test different experiences out and have concrete evidence to back a decision.
      </p>
      <p>
        Instead of debating the asynchronous vs synchronous experience amongst us three, we gained much more insight and clarity by putting these experiences in front of users.
      </p>
      <h2>
        4. Stay consistent and clear to communicate content
      </h2>
      <p>
        During the final app judging, we got comments that our app was very professional and cohesive. On top of an alluring value proposition, judges wanted to download the app right there and then. Using Apple's existing UI elements that people are familiar with already for an iOS app and keeping our app look and feel consistent from app store presentation to the app itself to our presentation, people stayed within the What2Yum brand. 
      </p>
    </div>
  )
}


