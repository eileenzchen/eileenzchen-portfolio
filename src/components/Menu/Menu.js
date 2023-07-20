// https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
import React, { useState, useEffect, useCallback } from 'react';

import MenuItem from './MenuItem';
import './Menu.css';
import './MenuItem.css'

/*
 * The list of our Menu Titles (Sections) as keys, with their
 * Y-pixel position on the page as the values
 * 'About' generically references the top of the page
 */
// const menuItems = {
//   About: 0,
//   Project1Preview: null,
//   Project2Preview: null,
//   Project3Preview: null,
//   Project4Preview: null
// }

/*
 * Our menu component
 */
const Menu = ({menuItems}) => {
  const menuNameMappings = {
    Intro: "intro",
    Summary: "summary",
    Problem: "problem space",
    CompetitiveAnalysis: "competitive analysis",
    SolutionExploration: "solution exploration",
    FinalDesign: "final design",
    Learnings: "learnings & reflection",
    QuickSketches: "quick sketches",
    PersonasUseCases: "personas & use cases",
    ContextualizingDesign: "placing the design in context",
    Interplay: "interplay between design & engineering",
    BackgroundResearch: "background research",
    UserResearch: "user research",
    DesignPatterns: "analyzing design patterns",
    Sketching: "sketching",
    Wireframing: "lofi wireframing",
    PrototypingDetails: "refining & prototyping",
    Challenges: "challenges & takeaways",
    Joy: "sparking joy!",
    Color: "being intentional with color",
    UnderstandingUsers: "understanding our users",
    ProductRoadmapping: "product roadmapping",
    UserAcquisitionOnboarding: "user acquisition & onboarding",
    Rebranding: "rebranding"
  }
  /*
   * Store the active menuItem in state to force update
   * when changed
   */
  const [activeItem, setActiveItem] = useState('Intro')
  
  /*
    * Determine which section the user is viewing, based on their scroll-depth
    * Locating the active section allows us to update our MenuItems to show which
    * item is currently active
    */
  const handleScroll = useCallback(() => {
    const curPos = window.scrollY;
    let curSection = null;
    /*
      * Iterate through our sections object to find which section matches with
      * the current scrollDepth of the user.
      * NOTE: This code assumes that the sections object is built with an 'ordered'
      * list of sections, with the lowest depth (top) section first and greatest
      * depth (bottom) section last
      * If your items are out-of-order, this code will not function correctly
      */
    for (const section in menuItems) {
      if (document.getElementById(section)){
        const rect = document.getElementById(section).getBoundingClientRect();

        if (curPos < rect.bottom) {
          curSection = section
        }
      }

      // curSection = menuItems[section] >= curPos ? section : curSection
      // console.log("start");
      // console.log(curPos);
      // console.log(menuItems[section]);
      // console.log(curSection);
      // if (curSection !== section) {
      //   break
      // }

    }
    if (curSection !== activeItem) {
      setActiveItem(curSection)
    }


    // console.log(activeItem);
  }, [activeItem]);

  /*
   * Programmatically determine where to set AnchorPoints for our Menu
   */
  const getAnchorPoints = useCallback(() => {
    const curScroll = window.scrollY - 100;
    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    for (const key in menuItems) {
      if (document.getElementById(key)){
        menuItems[key] =
        document.getElementById(key).getBoundingClientRect().top + curScroll;
      }
    }
    // const bottom = document.body.offsetHeight;
    // handleScroll();
  }, []);

  /*
   * The MutationObserver allows us to watch for a few different
   * events, including page resizing when new elements might be 
   * added to the page (potentially changing the location of our 
   * anchor points)
   * We also listen to the scroll event in order to update based
   * on our user's scroll depth
   */
  useEffect(() => {

    // const observer = new MutationObserver(getAnchorPoints);
    // observer.observe(document.getElementById('root'), {
    //   childList: true,
    //   subtree: true,
    // });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', getAnchorPoints);
    window.addEventListener('resize', handleScroll);
    window.addEventListener('resize', getAnchorPoints);
  }, [getAnchorPoints, handleScroll]);

  /*
   * Create the list of MenuItems based on the menuItems object we have defined above
   */
  const menuList = Object.keys(menuItems).map((e, i) => 
    <MenuItem itemName={e} key={`menuitem_${i}`} displayName={menuNameMappings[e]} linkClass={e === activeItem ? "link activeItem" : "link"} />
  )

  /*
   * Return the JSX Menu, complete with nested MenuItems
   */
  return (
    <section id="Menu">
        {menuList}
    </section>
  );
}

export default Menu