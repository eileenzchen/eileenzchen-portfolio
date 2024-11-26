import React from 'react';
import styles from './Play.module.css';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Polaroid from '../Polaroid/Polaroid.js';
import latteArt from './assets/play-latte-art-pic.jpg'
import ritzCarlton from './assets/ritz-carlton.JPG'
import northernLights from './assets/northern-lights.jpg'
import pentatonicFlute from './assets/pentatonic-flute.JPG'
import crochet from './assets/wooble.JPG'
import chinatown from './assets/sf-chinatown.jpg'
import cat from './assets/cat-greece.jpg'
import painting from './assets/painting.JPG'
import bookshelf from './assets/bookshelf.JPG'
import animalcrossing from './assets/animal-crossing.JPG'
import boothMailbox from './assets/mail-box.JPG'


function Play() {
  return (
    <>
      <Container maxWidth="xl" style={{marginTop: '32px'}}>
        {/* LATTE ART */}
        <Grid container columns={3} columnSpacing={8} rowSpacing={4}>
          {/* heading / subheading */}
          <Grid item xs={3} md={1} className={styles.rightalign}>
            <div className={styles.stickyTitle}>
              <h2 className={styles.h2}>latte art</h2>
              <p className={styles.subheading}>my cup of joy in the morning.</p>
            </div>
          </Grid>
          {/* polaroids row wrapper */}
          <Grid item xs={3} md={2}>
            <Grid container columns={2} columnSpacing={4}>
              <Grid item xs={1}>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={latteArt} 
                  alt="rosetta latte art"
                  polaroidTitle=""
                  polaroidDescription="a rosetta 🌿"
                  aspectRatio="aspectRatioRegular"
                  fadeDelay="100"
                  animation="fade-down">
                </Polaroid>
              </Grid>
              <Grid item xs={1}>
                <div className="polaroid regular" data-aos="fade-down" data-aos-delay="250">
                  <video width="100%" height="auto" style={{aspectRatio:'1/1', objectFit:'cover'}} controls autoPlay loop muted controlsList="nodownload">
                    <source src="play-latte-art-journey.mov" type="video/mp4" />
                  </video>
                  <div className="polaroidText">
                    <p className="monospace-500 title"></p>
                    <p className="monospace-300 description">my latte art journey</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* MUSIC */}
          {/* heading / subheading */}
          <Grid item xs={3} md={1} className={styles.rightalign}>
            <div className={styles.stickyTitle}>
              <h2 className={styles.h2}>playing music</h2>
              <p className={styles.subheading}>classical, pop, video game music&mdash;anything that moves me.</p>
            </div>
          </Grid>
          {/* polaroids row wrapper */}
          <Grid item xs={3} md={2}>
            <Grid container columns={2} columnSpacing={4}>
              <Grid item xs={1}>
              <div className="polaroid" data-aos="fade-down" data-aos-delay="250">
                  <video width="100%" height="auto" controls autoPlay loop muted controlsList="nodownload">
                    <source src="colgera-battle-theme.mov" type="video/mp4" />
                  </video>
                  <div className="polaroidText">
                    <p className="monospace-500 title"></p>
                    <p className="monospace-300 description">Legend of Zelda: Colgera Battle Theme</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={1}>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={pentatonicFlute} 
                  alt="pentatonic flute with handwritten sheet music"
                  polaroidTitle=""
                  polaroidDescription="transposed traditional Chinese music for the pentatonic flute"
                  aspectRatio="aspectRatioRegular"
                  fadeDelay="200"
                  animation="fade-down">
                </Polaroid>
              </Grid>
            </Grid>
          </Grid>

          {/* BOOTH */}
          {/* heading / subheading */}
          <Grid item xs={3} md={1} className={styles.rightalign}>
            <div className={styles.stickyTitle}>
              <h2 className={styles.h2}>building structures</h2>
              <p className={styles.subheading}>Carnegie Mellon booth where I loved crafting.</p>
            </div>
          </Grid>
          {/* polaroids row wrapper */}
          <Grid item xs={3} md={2}>
            <Grid container columns={2} columnSpacing={4}>
              <Grid item xs={1}>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={animalcrossing} 
                  alt="my friends and I built an animal crossing booth"
                  polaroidTitle=""
                  polaroidDescription="my friends and I built an Animal Crossing booth and won first place!"
                  aspectRatio="aspectRatioRegular"
                  fadeDelay="100"
                  animation="fade-down">
                </Polaroid>
              </Grid>
              <Grid item xs={1}>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={boothMailbox} 
                  alt="pentatonic flute with handwritten sheet music"
                  polaroidTitle=""
                  polaroidDescription="a mailbox for Isabelle made out of cardboard and paint"
                  aspectRatio="aspectRatioRegular"
                  fadeDelay="200"
                  animation="fade-down">
                </Polaroid>
              </Grid>
            </Grid>
          </Grid>

          {/* PHOTOGRAPHY */}
          {/* heading / subheading */}
          <Grid item xs={3} md={1} className={styles.rightalign}>
            <div className={styles.stickyTitle}>
              <h2 className={styles.h2}>photography</h2>
              <p className={styles.subheading}>life through my iPhone.</p>
            </div>
          </Grid>
          {/* polaroids row wrapper */}
          <Grid item xs={3} md={2}>
            <Grid container columns={2} columnSpacing={2}>
              <Grid item xs={2} md={1}>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={chinatown} 
                  alt="SF Chinatown's night market"
                  polaroidTitle=""
                  polaroidDescription="SF Chinatown's bustling night market"
                  aspectRatio="aspectRatioWide"
                  fadeDelay="350"
                  animation="fade-down">
                </Polaroid>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={northernLights} 
                  alt="a rare aurora borealis over sutro baths"
                  polaroidTitle=""
                  polaroidDescription="a rare aurora borealis over Sutro Baths"
                  aspectRatio="aspectRatioWide"
                  fadeDelay="200"
                  animation="fade-down">
                </Polaroid>
              </Grid>
              <Grid item xs={2} md={1}>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={cat} 
                  alt="a cat in Greece"
                  polaroidTitle=""
                  polaroidDescription="a cat resting on a lazy afternoon"
                  aspectRatio="aspectRatioWide"
                  fadeDelay="300"
                  animation="fade-down">
                </Polaroid>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={ritzCarlton} 
                  alt="the Ritz peeking over the cliffs"
                  polaroidTitle=""
                  polaroidDescription="the Ritz peeking over the cliffs"
                  aspectRatio="aspectRatioWide"
                  fadeDelay="0"
                  animation="fade-down">
                </Polaroid>
              </Grid>
            </Grid>
          </Grid>

          {/* FILMMAKING */}
          <Grid item xs={3} md={1} className={styles.rightalign}>
            <div className={styles.stickyTitle}>
              <h2 className={styles.h2}>filmmaking</h2>
              <p className={styles.subheading}>short and longform videos to share my cooking, travels, and life.</p>
            </div>
          </Grid>
          {/* polaroids row wrapper */}
          <Grid item xs={3} md={2}>
            <Grid container columns={2} columnSpacing={4}>
              <Grid item xs={2} md={1}>
                <div className="polaroid" data-aos="fade-down" data-aos-delay="200">
                  <video width="100%" height="auto" controls autoPlay muted loop controlsList="nodownload">
                    <source src="jason-meredith-engagement-720.mov" type="video/mp4" />
                  </video>
                  <div className="polaroidText">
                    <p className="monospace-500 title"></p>
                    <p className="monospace-300 description">engagement video for my friends</p>
                  </div>
                </div>
                <div className="polaroid" data-aos="fade-down" data-aos-delay="100">
                  <video width="100%" height="auto" controls muted controlsList="nodownload" style={{aspectRatio:'1/1', objectFit:'cover'}} >
                    <source src="play-shin-ramen-720.mov" type="video/mp4" />
                  </video>
                  <div className="polaroidText">
                    <p className="monospace-500 title"></p>
                    <p className="monospace-300 description">giving a twist to instant Shin ramen</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={1}>
                <div className="polaroid" data-aos="fade-down" data-aos-delay="300">
                  <video width="100%" height="auto" controls muted loop controlsList="nodownload">
                    <source src="norway.mov" type="video/mp4" />
                  </video>
                  <div className="polaroidText">
                    <p className="monospace-500 title"></p>
                    <p className="monospace-300 description">winter in Norway</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* CRAFTING */}
          <Grid item xs={3} md={1} className={styles.rightalign}>
            <div className={styles.stickyTitle}>
              <h2 className={styles.h2}>crafting</h2>
              <p className={styles.subheading}>painting, crocheting, and organizing bookshelves&mdash;aka my random creations.</p>
            </div>
          </Grid>
          {/* polaroids row wrapper */}
          <Grid item xs={3} md={2}>
            <Grid container columns={2} columnSpacing={4}>
              <Grid item xs={2} md={1}>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={crochet} 
                  alt="a crochetted narwhal"
                  polaroidTitle=""
                  polaroidDescription="Bjørn, the narwhal. I learned to crochet with The Woobles"
                  aspectRatio="aspectRatioRegular"
                  fadeDelay="150"
                  animation="fade-down">
                </Polaroid>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={bookshelf} 
                  alt="organized bookshelf"
                  polaroidTitle=""
                  polaroidDescription="an organized bookshelf is so satisfying 😌"
                  aspectRatio="aspectRatioRegular"
                  fadeDelay="250"
                  animation="fade-down">
                </Polaroid>
              </Grid>
              <Grid item xs={1}>
                <Polaroid 
                  linkUrl="" 
                  imageUrl={painting} 
                  alt="bob ross style painting"
                  polaroidTitle=""
                  polaroidDescription="tried to be Bob Ross"
                  aspectRatio="aspectRatioRegular"
                  fadeDelay="250"
                  animation="fade-down">
                </Polaroid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}


export default Play;
