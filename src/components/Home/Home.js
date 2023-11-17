import React, { useEffect, useState } from 'react'
import About from './About/About.js';
import ProjectSectionTan from './ProjectSection/ProjectSectionTan.js';
import ProjectSectionWhite from './ProjectSection/ProjectSectionWhite.js';
import tonysImage from './assets/me_w_tonys_pizza.jpg';
import what2yumPreview from '../Projects/What2Yum/assets/what2yum_preview.png';
import bakingFactoryPreview from '../Projects/BakingFactory/assets/baking-factory-preview.png'
import weeePreview from '../Projects/Weee/assets/weee-preview.png'
import fitvioPreview from '../Projects/Fitvio/assets/fitvio-preview.png'
import { Container, Fab, Grid } from '@mui/material';
import KeyboardDoubleArrowDownRounded from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import './Home.css'
import { c1Props, weeeProps, what2yumProps, fitvioProps, bakingFactoryProps } from 'components/Constants.js';
import Polaroid from 'components/Polaroid/Polaroid.js';

function Home() {
  const handleClick = event => {
    event.preventDefault();
    const anchor = document.querySelector('#projects');
    anchor.scrollIntoView({ behavior: 'smooth', block: "start" });
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 1000;
    const winScroll = document.body.scrollTop ||
        document.documentElement.scrollTop;
    const secondElem = document.querySelector('#projects');
    const yCoordinate = secondElem.getBoundingClientRect().y;
    if (winScroll > yCoordinate) {
       isVisible &&      // to limit setting state only the first time
         setIsVisible(false);
    } else {
         setIsVisible(true);
    }
  };

  return (  
    <>
      {
      isVisible
        &&
      <div id="projects-fab-container" >
        {/* <Fab variant="extended" size="small" color="primary" aria-label="add"  href="#weee-project" onClick={handleClick} id="projects-fab">
          projects
          <KeyboardDoubleArrowDownIcon sx={{ ml: 1 }} />
        </Fab> */}
      </div>
      }
      <About></About>
      <div id="projects"></div>
      <Container maxWidth="lg">
        <Grid container columns={12} rowSpacing={0} columnSpacing={{ xs: 1, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Polaroid 
              linkUrl={c1Props.polaroid.linkUrl}
              imageUrl={c1Props.polaroid.imageUrl}
              alt={c1Props.polaroid.alt}
              polaroidTitle={c1Props.polaroid.polaroidTitle}
              polaroidDescription={c1Props.polaroid.polaroidDescription}
              aspectRatio={c1Props.polaroid.aspectRatio}
              fadeDelay="200">
            </Polaroid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Polaroid 
              linkUrl={weeeProps.polaroid.linkUrl}
              imageUrl={weeeProps.polaroid.imageUrl}
              alt={weeeProps.polaroid.alt}
              polaroidTitle={weeeProps.polaroid.polaroidTitle}
              polaroidDescription={weeeProps.polaroid.polaroidDescription}
              aspectRatio={weeeProps.polaroid.aspectRatio}
              fadeDelay="500">
            </Polaroid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Polaroid 
              linkUrl={fitvioProps.polaroid.linkUrl}
              imageUrl={fitvioProps.polaroid.imageUrl}
              alt={fitvioProps.polaroid.alt}
              polaroidTitle={fitvioProps.polaroid.polaroidTitle}
              polaroidDescription={fitvioProps.polaroid.polaroidDescription}
              aspectRatio={fitvioProps.polaroid.aspectRatio}
              fadeDelay="200">
            </Polaroid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Polaroid 
              linkUrl={what2yumProps.polaroid.linkUrl}
              imageUrl={what2yumProps.polaroid.imageUrl}
              alt={what2yumProps.polaroid.alt}
              polaroidTitle={what2yumProps.polaroid.polaroidTitle}
              polaroidDescription={what2yumProps.polaroid.polaroidDescription}
              aspectRatio={what2yumProps.polaroid.aspectRatio}
              fadeDelay="500">
            </Polaroid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Polaroid 
              linkUrl={bakingFactoryProps.polaroid.linkUrl}
              imageUrl={bakingFactoryProps.polaroid.imageUrl}
              alt={bakingFactoryProps.polaroid.alt}
              polaroidTitle={bakingFactoryProps.polaroid.polaroidTitle}
              polaroidDescription={bakingFactoryProps.polaroid.polaroidDescription}
              aspectRatio={bakingFactoryProps.polaroid.aspectRatio}
              fadeDelay="100">
            </Polaroid>
          </Grid>
        </Grid>
      </Container>
      {/* <div id="projects"></div>
      <ProjectSectionTan projectProps={c1Props}></ProjectSectionTan>
      <div id="second-section"></div>
      <ProjectSectionWhite projectProps={weeeProps}></ProjectSectionWhite>
      <ProjectSectionTan projectProps={what2yumProps}></ProjectSectionTan>
      <ProjectSectionWhite projectProps={fitvioProps}></ProjectSectionWhite>
      <ProjectSectionTan projectProps={bakingFactoryProps}></ProjectSectionTan> */}
    </>

    
  )
}

export default Home 