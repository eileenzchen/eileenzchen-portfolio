import React from 'react';
import './About.css';
import Container from '@mui/material/Container';
import Polaroid from '../Polaroid/Polaroid.js';
import purpleFlowers from './assets/purple-flowers-cp.jpeg'
import sunflowerField from './assets/sunflower-field-cp.jpeg'
import cmu from './assets/carnegie-mellon-cp.jpeg'
import plantmom from './assets/plant-mom.jpeg'
import 'aos/dist/aos.css';

function About() {
  document.title = "Eileen Chen — About";
  return (
    <>
        <Container maxWidth="lg" id="about-intro">
          <p data-aos="fade-up" className="intro-line">
            From pouring latte art to creating a food decision app, I love spending my time <span style={{color: "#92ad70", fontWeight: "400"}}>creating delightful experiences for people</span>. 
          </p>
        </Container>
      <div id="wave-container">
        <div id="wave"></div>
      </div>
      <div id="about-container">
      <Container maxWidth="md">
        <div className="about-body">
          <div id="text-card-1" className="text-card" data-aos="fade-up-right">
            <p  className="section-label">my experience</p>
            <p>
              With an engineering background, I solve problems in a very logical manner, where there is a reason and a solution for everything. With a designer mindset, I try different things out over and over again until I arrive at the "aha" moment.
            </p>
          </div>
          <div id="about-polaroid-one" className="about-polaroid">
            <Polaroid 
              linkUrl="" 
              imageUrl={sunflowerField} 
              alt="Eileen in a sunflower field"
              polaroidTitle=""
              polaroidDescription="soaking up the rays in Half Moon Bay 🌻"
              aspectRatio="aspectRatioRegular"
              fadeDelay="800"
              animation="fade-up-left">
            </Polaroid>
          </div>

          <div id="text-card-2" className="text-card" data-aos="fade-up-left">
            <p className="section-label">my background</p>
            <p>
              I graduated as an Information Systems major from Carnegie Mellon University in 2021. I learned how to build web and mobile solutions that deliver value to users. I was most intrigued with how technology&mdash;if built right&mdash;could positively impact people's lives.
            </p>
          </div>
          <div id="about-polaroid-two" className="about-polaroid">
            <Polaroid 
              linkUrl="" 
              imageUrl={cmu} 
              alt="Eileen at Carnegie Mellon University"
              polaroidTitle=""
              polaroidDescription="grad day at CMU! 👩‍🎓"
              aspectRatio="aspectRatioRegular"
              animation="fade-up-right">
            </Polaroid>
          </div>

          <div id="text-card-3" className="text-card" data-aos="fade-up-right">
            <p className="section-label">my hobbies</p>
            <p>
              <ul>
                <li><b>music</b> 🎵 — I'm currently playing pop songs and video game music on piano.</li>
                <li><b>latte art and cooking</b> ☕️ — I am sharing my creations on Instagram! <a style={{color:"white", textDecoration:"underline"}} href="https://www.instagram.com/eilcookforyou/">@eilcookforyou</a></li>
                <li><b>caring for my plants</b> 🪴 — I got my green thumb from my parents.</li>
                <li><b>traveling</b> ✈️ — My favorite trip currently is Singapore!</li>
                <li><b>making connections</b> 👋 — I would love to meet you!</li>
              </ul>
            </p>
          </div>
          <div id="about-polaroid-three" className="about-polaroid">
            <Polaroid 
              linkUrl="" 
              imageUrl={plantmom} 
              alt="eileen watering plants"
              polaroidTitle=""
              polaroidDescription="my zen garden 🪴"
              aspectRatio="aspectRatioRegular"
              animation="fade-up-left">
            </Polaroid>
          </div>
          <div id="text-card-4" className="text-card" data-aos="fade-up-left">
            <p className="section-label">my aspirations</p>
            <p>
              Inspired by the book <a style={{textDecoration: "underline", color: "white"}} 
              href="https://designingyour.life/books-designing-life-original-book/">
                Designing Your Life
              </a>, 
              I am currently building a life I find meaningful and fulfilling. Now back at school, I am sharpening my design craft and gaining perspective on how to build communities through shared food and culture.
            </p>
          </div>
          <div data-aos="fade-up" id="about-polaroid-four" className="about-polaroid">
            <Polaroid 
              linkUrl="" 
              imageUrl={purpleFlowers} 
              alt="purple flower field in Pacific Grove"
              polaroidTitle=""
              polaroidDescription="chasing the California superblooms 💜"
              aspectRatio="aspectRatioRegular"
              animation="fade-up-right">
            </Polaroid>
          </div>

          {/* instagram polaroid
          <div className="polaroid regular instagram-polaroid">
            <InstagramEmbed url="https://www.instagram.com/reel/C49ovytu6M4/" width="100%"/>
            <div className="polaroidText">
              <p className="monospace-500 title"></p>
              <p className="monospace-300 description">my latte art tutorial</p>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
    </>
  );
}


export default About;
