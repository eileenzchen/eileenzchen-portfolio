// https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
import React, { useState, useEffect } from 'react';
import './MenuItem.css'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

/*
 * A single menu item
 * I deconstruct props to provide more readable code, allowing
 * any future coders to see exactly what props are expected
 */
const MenuItem = ({ itemName, linkClass, containerClass, displayName }) => {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */
  const [anchorTarget, setAnchorTarget] = useState(null);

  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
    const projectElement = document.getElementById(itemName);
    if (projectElement) {
      setAnchorTarget(projectElement);
      // console.log(document.getElementById(itemName));
    }
    
  }, [itemName]);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = event => {
    event.preventDefault();
    if (itemName == 'BackToTop') {
      document.querySelector('header').scrollIntoView({ behavior: 'smooth'})
    }
    else {
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (itemName == 'BackToTop') {
    return (
      <div className="MenuItem" style={{marginBottom: "50px"}}>
        <a href={`#${itemName}`}
          onClick={handleClick}
          aria-label={`Scroll to ${itemName}`}
          style={{display:"flex", "alignItems":"center"}}
          id="back-top-link"
          >
            <p className={`${containerClass}`}><span className={`${linkClass}`}>{displayName}</span></p>
            <ArrowUpwardRoundedIcon sx={{ml:1}} style={{marginTop: "1px"}}/>
        </a>
      </div>
    )
  }
  /*
   * Return the MenuItem as JSX
   * Remember to set your ariaLabel for accessibility!
   */
  return (
    <div className="MenuItem">
      <a href={`#${itemName}`}
        onClick={handleClick}
        aria-label={`Scroll to ${itemName}`}>
          <p className={`${containerClass}`}><span className={`${linkClass}`}>{displayName}</span></p>
      </a>
    </div>
  );
};

export default MenuItem;