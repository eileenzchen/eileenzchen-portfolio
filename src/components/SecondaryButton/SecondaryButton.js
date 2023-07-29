import React from 'react'
import './SecondaryButton.css';
import {Link} from 'react-router-dom'


function SecondaryButton(props) {

  return (  
    <div className="buttonWrapper">
      <Link to={props.buttonLink} target={props.target}>
        <button className="monospace-500 button-secondary">
          {props.buttonText}
          {props.icon}
        </button>
      </Link> 
    </div>
  )
}

export default SecondaryButton