// https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
import React, { useState, useEffect, useCallback } from 'react';

import MenuItem from './MenuItem';
import './Menu.css';
import './MenuItem.css'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
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
    BackToTop: "scroll to top",
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
    Rebranding: "rebranding",
    SearchEnhancements: "enhancing Capital One Search",
    BlogRedesign: "revamping the Capital One blog",
    AdobeTargetTesting: "Conducting Adobe Target experimentation tests",
    AutomatingData: "Automating an internal data management platform"
  }
  /*
   * Store the active menuItem in state to force update
   * when changed
   */
  const [activeItem, setActiveItem] = useState('');
  const [showBackToTop, setBackToTop] = useState(false);
  const [menuState, setMenuState] = useState('closed');

  const [showHamburger, setShowHamburger] = useState(window.screen.width <= 900);
  
  /*
    * Determine which section the user is viewing, based on their scroll-depth
    * Locating the active section allows us to update our MenuItems to show which
    * item is currently active
    */
  const handleScroll = useCallback(() => {
    console.log('handle scroll');
    const curPos = window.scrollY;
    let curSection = null;
    if (curPos > 100) {
      console.log('scroll pos', curPos);
      setBackToTop(true);
    }
    else {
      setBackToTop(false);
    }
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
        if (curPos >= (rect.top + curPos - 300) && curPos < rect.bottom + curPos - 300) {
          curSection = section;
          break;
        }
      }
    }
    if (curSection !== activeItem) {
      setActiveItem(curSection)
    }
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
        document.getElementById(key).getBoundingClientRect().top;
      }
    }
    handleScroll();
  }, []);

  // for window listener of screen resize toggle whether or not to show hamburger
  const handleMenuDisplay = event => {
    event.preventDefault();
    if (window.screen.width <= 900 && !showHamburger) {
      setShowHamburger(true);
    }
    else if (window.screen.width > 900 && showHamburger) {
      setShowHamburger(false);
    }
  };

  const handleClickOutside = event => {
    event.preventDefault();
    if (!document.querySelector('#Menu').contains(event.target)){
      setMenuState('closed');
    }
    // if (ref.current && !ref.current.contains(event.target)) {
      // alert("You clicked outside of me!");
    // }
  }

  /*
   * The MutationObserver allows us to watch for a few different
   * events, including page resizing when new elements might be 
   * added to the page (potentially changing the location of our 
   * anchor points)
   * We also listen to the scroll event in order to update based
   * on our user's scroll depth
   */
  useEffect(() => {
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.getElementById('root'), {
      childList: true,
      subtree: true,
    });
    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('scroll', getAnchorPoints);
    window.addEventListener('resize', handleScroll);
    window.addEventListener('resize', handleMenuDisplay);
    // Bind the event listener
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', handleMenuDisplay);
      window.removeEventListener("mousedown", handleClickOutside);
    };
    // window.addEventListener('resize', getAnchorPoints);
  }, [getAnchorPoints, handleScroll, handleMenuDisplay]);



  /*
   * Create the list of MenuItems based on the menuItems object we have defined above
   */
  const menuList = Object.keys(menuItems).map((e, i) => 
    <MenuItem itemName={e} key={`menuitem_${i}`} displayName={menuNameMappings[e]} linkClass={e === activeItem ? "link activeItem" : "link"} containerClass={e === activeItem ? "activeItemContainer" : ''}  />
  )

  // on non mobile/tablet have a back to top link within menu
  if (showBackToTop && menuList[0].props.itemName !== 'BackToTop') {
    menuList.unshift(
      <MenuItem itemName={'BackToTop'} key={ `menuitem_00`} displayName={menuNameMappings['BackToTop']} linkClass={'BackToTop' === activeItem ? "link activeItem" : "link"} containerClass={'BackToTop' === activeItem ? "activeItemContainer" : ''}/>
    )
  }
  else if (!showBackToTop) {
    menuList.shift();
  }

  // hamburger open or closed state
  const toggleMenu = event => {
    event.preventDefault();
    if (menuState == 'closed') {
      setMenuState('open');
    }
    else {
      setMenuState('closed');
    }
  };

  const scrollToTop = event => {
    event.preventDefault();
    document.querySelector('header').scrollIntoView({ behavior: 'smooth'})
  };


  /*
   * Return the JSX Menu, complete with nested MenuItems
   */

  if (showHamburger) {
    return (
    <>
      {
      showBackToTop 
        && menuList.shift()
        &&
        <a id="scrollTopButton" role="button" aria-label="scroll to top button" onClick={scrollToTop}>
          <ArrowUpwardRoundedIcon/>
        </a>
      }
      <section id="Menu" className={menuState}>
        <div id="main-menu" className={menuState}>
          {menuList}
        </div>
        <nav role="navigation" aria-label="menu" onClick={toggleMenu} id='hamburgerContainer'>
          <button aria-expanded={menuState === 'open' ? true : false} id='hamburger' className={menuState} aria-controls="main-menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </section>
    </>
    );
  }
  return (
    <>
      <nav role="navigation" aria-label="menu" id="Menu">
        {menuList}
      </nav>
    </>
    );

}

export default Menu