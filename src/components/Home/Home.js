import React, { useEffect, useState } from 'react'
import Intro from './Intro/Intro.js';
import { Container, Fab, Grid } from '@mui/material';
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
      <Intro></Intro>
      <div id="projects"></div>
      <Container maxWidth="lg">
        <Grid container columns={2} rowSpacing={0} columnSpacing={{ xs: 1, md: 6 }}>
          <Grid item xs={2} md={1}>
            <Polaroid 
              linkUrl={weeeProps.polaroid.linkUrl}
              imageUrl={weeeProps.polaroid.imageUrl}
              alt={weeeProps.polaroid.alt}
              polaroidTitle={weeeProps.polaroid.polaroidTitle}
              polaroidDescription={weeeProps.polaroid.polaroidDescription}
              aspectRatio={weeeProps.polaroid.aspectRatio}
              tags={weeeProps.polaroid.tags}
              fadeDelay="100">
            </Polaroid>
            <Polaroid 
              linkUrl={fitvioProps.polaroid.linkUrl}
              imageUrl={fitvioProps.polaroid.imageUrl}
              alt={fitvioProps.polaroid.alt}
              polaroidTitle={fitvioProps.polaroid.polaroidTitle}
              polaroidDescription={fitvioProps.polaroid.polaroidDescription}
              aspectRatio={fitvioProps.polaroid.aspectRatio}
              tags={fitvioProps.polaroid.tags}
              fadeDelay="300">
            </Polaroid>
            {/* <Polaroid 
              linkUrl={bakingFactoryProps.polaroid.linkUrl}
              imageUrl={bakingFactoryProps.polaroid.imageUrl}
              alt={bakingFactoryProps.polaroid.alt}
              polaroidTitle={bakingFactoryProps.polaroid.polaroidTitle}
              polaroidDescription={bakingFactoryProps.polaroid.polaroidDescription}
              aspectRatio={bakingFactoryProps.polaroid.aspectRatio}
              tags={bakingFactoryProps.polaroid.tags}
              fadeDelay="300">
            </Polaroid> */}
          </Grid>
          <Grid item xs={2} md={1}>
          <Polaroid 
              linkUrl={c1Props.polaroid.linkUrl}
              imageUrl={c1Props.polaroid.imageUrl}
              alt={c1Props.polaroid.alt}
              polaroidTitle={c1Props.polaroid.polaroidTitle}
              polaroidDescription={c1Props.polaroid.polaroidDescription}
              aspectRatio={c1Props.polaroid.aspectRatio}
              tags={c1Props.polaroid.tags}
              fadeDelay="400">
            </Polaroid>
            <Polaroid 
              linkUrl={what2yumProps.polaroid.linkUrl}
              imageUrl={what2yumProps.polaroid.imageUrl}
              alt={what2yumProps.polaroid.alt}
              polaroidTitle={what2yumProps.polaroid.polaroidTitle}
              polaroidDescription={what2yumProps.polaroid.polaroidDescription}
              aspectRatio={what2yumProps.polaroid.aspectRatio}
              tags={what2yumProps.polaroid.tags}
              fadeDelay="200">
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