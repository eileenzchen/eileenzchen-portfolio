// https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
import React, { useState, useEffect } from 'react';
import './MenuItem.css'

/*
 * A single menu item
 * I deconstruct props to provide more readable code, allowing
 * any future coders to see exactly what props are expected
 */
const MenuItem = ({ itemName, linkClass }) => {
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
      console.log(document.getElementById(itemName));
    }
    
  }, [itemName]);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /*
   * Return the MenuItem as JSX
   * Remember to set your ariaLabel for accessibility!
   */
  return (
      <div className="MenuItem">
        <a href={`#${itemName}`}
         onClick={handleClick}
         aria-label={`Scroll to ${itemName}`}>
           <p className={`monospace-300 ${linkClass}`}>{itemName}</p>
        </a>
      </div>
  );
};

export default MenuItem;