// https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
import React, { useState, useEffect, useCallback } from 'react';

import MenuItem from './MenuItem';
import './Menu.css';

/*
 * The list of our Menu Titles (Sections) as keys, with their
 * Y-pixel position on the page as the values
 * 'About' generically references the top of the page
 */
const menuItems = {
  About: 0,
  Project1Preview: null,
  Project2Preview: null,
  Project3Preview: null,
  Project4Preview: null
}

/*
 * Our menu component
 */
const Menu = () => {
  /*
   * Store the active menuItem in state to force update
   * when changed
   */
  const [activeItem, setActiveItem] = useState('About')
  
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
      curSection = menuItems[section] >= curPos ? section : curSection
      if (curSection !== section) {
        break
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
      menuItems[key] =
        document.getElementById(key).getBoundingClientRect().top + curScroll;
    }
    console.log(menuItems);
    const bottom = document.body.offsetHeight;
    // handleScroll();
  }, []);

  /*
   * The MutationObserver allows us to watch for a f,ew different
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
  }, [getAnchorPoints, handleScroll]);

  /*
   * Create the list of MenuItems based on the menuItems object we have defined above
   */
  const menuList = Object.keys(menuItems).map((e, i) => 
    <MenuItem itemName={e} key={`menuitem_${i}`} linkClass={e === activeItem ? "activeItem" : "inactiveItem"} />
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