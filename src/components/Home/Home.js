import React, { useEffect, useState } from 'react'
import About from './About/About.js';
import ProjectSectionTan from './ProjectSection/ProjectSectionTan.js';
import ProjectSectionWhite from './ProjectSection/ProjectSectionWhite.js';
import tonysImage from './assets/me_w_tonys_pizza.jpg';
import what2yumPreview from '../Projects/What2Yum/assets/what2yum_preview.png';
import bakingFactoryPreview from '../Projects/BakingFactory/assets/baking-factory-preview.png'
import weeePreview from '../Projects/Weee/assets/weee-preview.png'
import fitvioPreview from '../Projects/Fitvio/assets/fitvio-preview.png'
import { Fab } from '@mui/material';
import KeyboardDoubleArrowDownRounded from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import './Home.css'
import { c1Props, weeeProps, what2yumProps, fitvioProps, bakingFactoryProps } from 'components/Constants.js';

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
      <ProjectSectionTan projectProps={c1Props}></ProjectSectionTan>
      <div id="second-section"></div>
      <ProjectSectionWhite projectProps={weeeProps}></ProjectSectionWhite>
      <ProjectSectionTan projectProps={what2yumProps}></ProjectSectionTan>
      <ProjectSectionWhite projectProps={fitvioProps}></ProjectSectionWhite>
      <ProjectSectionTan projectProps={bakingFactoryProps}></ProjectSectionTan>
    </>

    
  )
}

export default Home 