import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom'


function Button(props) {

  return (  
    <div className="buttonWrapper">
      <Link to={props.buttonLink} target={props.target}>
        <button className="monospace-500 drop-shadow drop-shadow-hover">
          {props.buttonText}
        </button>
      </Link> 
    </div>
  )
}

export default Button